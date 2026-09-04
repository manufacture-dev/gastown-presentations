import { readdir, readFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import QRCode from 'qrcode'

import {
  buildPresentationUrl,
  PRESENTATION_LOCALES,
  presentationQrCodeFilename,
} from '../lib/presentation-links.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const talksDirectory = path.join(root, 'talks')
const outputDirectory = path.join(root, 'public', 'images', 'talk-qrs')

async function readTalkRoutes() {
  const filenames = (await readdir(talksDirectory))
    .filter(filename => filename.endsWith('.json'))
    .sort()

  return Promise.all(filenames.map(async filename => {
    const source = await readFile(path.join(talksDirectory, filename), 'utf8')
    const talk = JSON.parse(source)

    if (!talk.route)
      throw new Error(`Missing "route" in talks/${filename}`)

    return talk.route
  }))
}

async function generateTalkQrs() {
  const routes = await readTalkRoutes()
  await mkdir(outputDirectory, { recursive: true })

  for (const route of routes) {
    for (const locale of PRESENTATION_LOCALES) {
      const url = buildPresentationUrl(route, locale)
      const outputPath = path.join(outputDirectory, presentationQrCodeFilename(route, locale))

      await QRCode.toFile(outputPath, url, {
        errorCorrectionLevel: 'M',
        margin: 4,
        width: 512,
        color: {
          dark: '#111827',
          light: '#FFFFFFFF',
        },
      })

      console.log(`${path.relative(root, outputPath)} -> ${url}`)
    }
  }
}

await generateTalkQrs()
