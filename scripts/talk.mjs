import { spawn } from 'node:child_process'
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseSync, stringify } from '@slidev/parser'

const DEFAULT_VARIANT = 'full'
const PROMPTS = new Set(['all-use-cases', 'demo-30min'])

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const talksDir = path.join(root, 'talks')
const slidevBin = path.join(root, 'node_modules', '.bin', 'slidev')
const packageJson = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'))
const localPreviewPrefix = packageJson.name

function readTalks() {
  return readdirSync(talksDir)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const talk = JSON.parse(readFileSync(path.join(talksDir, file), 'utf8'))
      for (const field of ['id', 'route', 'defaultLocale', 'label', 'date']) {
        if (!talk[field])
          throw new Error(`Missing "${field}" in talks/${file}`)
      }
      if (!talk.prompt)
        throw new Error(`Missing "prompt" in talks/${file}`)
      if (!PROMPTS.has(talk.prompt)) {
        const prompts = [...PROMPTS].join(', ')
        throw new Error(`Invalid "prompt" in talks/${file}: ${talk.prompt}. Expected one of: ${prompts}`)
      }
      return talk
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.route.localeCompare(b.route))
}

function getLatestTalk() {
  const [talk] = readTalks()
  if (!talk)
    throw new Error('No talk definitions found in talks/*.json')

  return talk
}

function findTalk(routeOrId) {
  const talks = readTalks()
  const talk = talks.find(item => item.route === routeOrId || item.id === routeOrId)
  if (!talk) {
    const routes = talks.map(item => item.route).join(', ')
    throw new Error(`Unknown talk "${routeOrId}". Available talks: ${routes}`)
  }
  return talk
}

function variantForTalk(talk) {
  return talk.variant || DEFAULT_VARIANT
}

function promptForTalk(talk) {
  return talk.prompt
}

function renderTable(rows) {
  const widths = rows[0].map((_, columnIndex) =>
    Math.max(...rows.map(row => row[columnIndex].length)))

  return rows
    .map(row => row
      .map((cell, columnIndex) => cell.padEnd(widths[columnIndex]))
      .join('  ')
      .trimEnd())
    .join('\n')
}

function renderTalkList(talks) {
  return renderTable([
    ['Talk', 'Date', 'Locale', 'Slides', 'Prompt', 'Route'],
    ['----', '----', '------', '------', '------', '-----'],
    ...talks.map(talk => [
      talk.label,
      talk.date,
      talk.defaultLocale,
      variantForTalk(talk),
      promptForTalk(talk),
      talk.route,
    ]),
  ])
}

function envForTalk(talk) {
  const env = {
    ...process.env,
    VITE_TALK_ID: talk.id,
    VITE_TALK_ROUTE: talk.route,
    VITE_TALK_DATE: talk.date,
    VITE_DEFAULT_LOCALE: talk.defaultLocale,
    VITE_TALK_VARIANT: variantForTalk(talk),
  }
  env.VITE_TALK_PROMPT = promptForTalk(talk)
  return env
}

function readLocalizedHeading(locale) {
  const localePath = path.join(root, 'locales', `${locale}.yml`)
  const localeContent = readFileSync(localePath, 'utf8')
  const match = localeContent.match(/^title:\n(?:[^\S\r\n].*\n)*?[^\S\r\n]+heading:\s*(.+)$/m)

  if (!match)
    throw new Error(`Missing title.heading in locales/${locale}.yml`)

  return match[1].replace(/^["']|["']$/g, '')
}

function yamlString(value) {
  return JSON.stringify(value)
}

function documentTitleForTalk(talk) {
  return `${talk.label} - ${readLocalizedHeading(talk.defaultLocale)} (${talk.defaultLocale})`
}

function selectVariantSlides(source, variant) {
  const parsed = parseSync(source, 'slides.md')

  parsed.slides = parsed.slides.filter((slide, index) => {
    // The first slide carries the deck headmatter and is always kept.
    if (index === 0)
      return true

    const variants = slide.frontmatter?.variants
    // A slide without an explicit variant list belongs to every variant.
    return !variants || variants.includes(variant)
  })

  if (parsed.slides.length <= 1)
    throw new Error(`Variant "${variant}" matched no content slides in slides.md`)

  return stringify(parsed)
}

function generatedSlidesForTalk(talk) {
  const source = readFileSync(path.join(root, 'slides.md'), 'utf8')
  const assembled = selectVariantSlides(source, variantForTalk(talk))
  const title = documentTitleForTalk(talk)
  const generated = assembled.replace(/^title:\s*.*$/m, `title: ${yamlString(title)}`)
  const generatedPath = path.join(root, `.slides.generated.${talk.route}.md`)

  if (generated === assembled)
    throw new Error('Unable to replace title in slides.md frontmatter')

  writeFileSync(generatedPath, generated, 'utf8')
  return path.relative(root, generatedPath)
}

function splitArgs(args) {
  const separatorIndex = args.indexOf('--')
  if (separatorIndex === -1)
    return { ownArgs: args, passthrough: [] }

  return {
    ownArgs: args.slice(0, separatorIndex),
    passthrough: args.slice(separatorIndex + 1),
  }
}

function runSlidev(args, talk) {
  return new Promise((resolve, reject) => {
    const child = spawn(slidevBin, args, {
      cwd: root,
      env: envForTalk(talk),
      stdio: 'inherit',
    })

    child.on('exit', code => {
      if (code === 0)
        resolve()
      else
        reject(new Error(`Slidev exited with code ${code}`))
    })
  })
}

function runTalkSlidev(commandArgs, talk) {
  return runSlidev(commandArgs(generatedSlidesForTalk(talk)), talk)
}

function exportName(talk, extension) {
  return `gastown-${talk.route}.${talk.defaultLocale}.${extension}`
}

function localeForTalk(talk) {
  return talk.defaultLocale === 'fr' ? 'fr-FR' : 'en-US'
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value
}

function formatTalkDate(talk, locale = localeForTalk(talk)) {
  return capitalize(new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
    timeZone: 'UTC',
  }).format(new Date(`${talk.date}T00:00:00Z`)))
}

function formatTimelineMonthDay(talk, locale = localeForTalk(talk)) {
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(new Date(`${talk.date}T00:00:00Z`)).replace('.', '')
}

function formatTimelineYear(talk) {
  return new Intl.DateTimeFormat(localeForTalk(talk), {
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${talk.date}T00:00:00Z`))
}

function renderIndex(talks) {
  const links = talks.map(talk => {
    const indexLocale = 'en-US'
    const href = `${talk.route}/#/1`
    const pdf = `downloads/${exportName(talk, 'pdf')}`
    const pptx = `downloads/${exportName(talk, 'pptx')}`
    return `<li class="timeline-item">
      <div class="timeline-date" aria-hidden="true">
        <span class="timeline-year">${formatTimelineYear(talk)}</span>
        <span class="timeline-day">${formatTimelineMonthDay(talk, indexLocale)}</span>
      </div>
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <strong>${talk.label}</strong>
        <time datetime="${talk.date}">${formatTalkDate(talk, indexLocale)}</time>
        <div class="timeline-links">
          <small>${talk.defaultLocale}</small>
          <span><a href="${href}">Web</a> · <a href="${pdf}">PDF</a> · <a href="${pptx}">PPTX</a></span>
        </div>
      </div>
    </li>`
  }).join('\n')

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gastown presentations</title>
  <style>
    body { margin: 0; padding: 4rem; background: #151b2a; color: #f5f2e8; font-family: system-ui, sans-serif; }
    main { max-width: 760px; margin: 0 auto; }
    h1 { color: #ffe45c; margin-bottom: 3rem; }
    a { color: #73f0ce; }
    ul { position: relative; list-style: none; margin: 0; padding: 0; }
    ul::before { content: ""; position: absolute; top: 1rem; bottom: 1rem; left: 8.45rem; width: 1px; background: rgba(245, 242, 232, 0.24); }
    .timeline-item { display: grid; grid-template-columns: 7rem 2.9rem minmax(0, 1fr); gap: 0; align-items: start; margin: 0 0 2.2rem; }
    .timeline-date { display: grid; gap: 0.2rem; justify-items: end; padding-top: 0.05rem; color: #b9beca; text-transform: uppercase; letter-spacing: 0.04em; }
    .timeline-year { color: #ffe45c; font-size: 1rem; font-weight: 800; }
    .timeline-day { font-size: 0.85rem; font-weight: 700; }
    .timeline-marker { position: relative; z-index: 1; width: 0.85rem; height: 0.85rem; margin: 0.35rem auto 0; border-radius: 999px; background: #73f0ce; box-shadow: 0 0 0 0.35rem #151b2a, 0 0 0 0.42rem rgba(115, 240, 206, 0.35); }
    .timeline-content { padding: 0 0 0.1rem; }
    strong { display: block; margin-bottom: 0.35rem; font-size: 1.35rem; }
    time { display: block; color: #b9beca; margin-bottom: 0.45rem; }
    small { color: #151b2a; background: #ffe45c; padding: 0.14rem 0.4rem; border-radius: 0.2rem; font-weight: 800; text-transform: uppercase; }
    span { color: #b9beca; white-space: nowrap; }
    .timeline-links { display: flex; gap: 0.8rem; align-items: baseline; }
  </style>
</head>
<body>
  <main>
    <h1>Gastown presentations</h1>
    <ul>
${links}
    </ul>
  </main>
</body>
</html>
`
}

function writeRedirectPage(filePath, target) {
  mkdirSync(path.dirname(filePath), { recursive: true })
  writeFileSync(filePath, `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${target}">
  <title>Redirecting...</title>
</head>
<body>
  <a href="${target}">Redirecting...</a>
</body>
</html>
`, 'utf8')
}

function writeLocalPreviewAliases(talks) {
  const prefixDir = path.join(root, 'dist', localPreviewPrefix)
  writeRedirectPage(path.join(prefixDir, 'index.html'), '../')

  for (const talk of talks)
    writeRedirectPage(path.join(prefixDir, talk.route, 'index.html'), `../../${talk.route}/#/1`)
}

function resolveTalk(routeOrId) {
  return routeOrId ? findTalk(routeOrId) : getLatestTalk()
}

function parseTalkAndPassthrough(args, existingPassthrough = []) {
  const [candidate, ...rest] = args

  if (!candidate || candidate.startsWith('-')) {
    return {
      talkName: undefined,
      passthrough: [...(candidate ? [candidate] : []), ...rest, ...existingPassthrough],
    }
  }

  return {
    talkName: candidate,
    passthrough: [...rest, ...existingPassthrough],
  }
}

function parseExportArgs(args, existingPassthrough = []) {
  const formats = new Set(['pdf', 'pptx'])
  const passthrough = [...existingPassthrough]
  let outputFormat
  let talkName

  for (const arg of args) {
    if (formats.has(arg) && !outputFormat) {
      outputFormat = arg
    }
    else if (arg.startsWith('-')) {
      passthrough.push(arg)
    }
    else if (talkName) {
      passthrough.push(arg)
    }
    else {
      talkName = arg
    }
  }

  return {
    talkName,
    outputFormat: outputFormat || 'pdf',
    passthrough,
  }
}

async function main() {
  const { ownArgs, passthrough } = splitArgs(process.argv.slice(2))
  const [command, ...args] = ownArgs

  if (command === 'list') {
    console.log(renderTalkList(readTalks()))
    return
  }

  if (command === 'build-all') {
    const talks = readTalks()
    rmSync(path.join(root, 'dist'), { recursive: true, force: true })

    for (const talk of talks) {
      await runTalkSlidev(entry => [
        'build',
        entry,
        '--out',
        `dist/${talk.route}`,
        '--base',
        './',
      ], talk)

      await mkdir(path.join(root, 'dist', 'downloads'), { recursive: true })
      await runTalkSlidev(entry => [
        'export',
        entry,
        '--format',
        'pdf',
        '--output',
        path.join('dist', 'downloads', exportName(talk, 'pdf')),
      ], talk)
      await runTalkSlidev(entry => [
        'export',
        entry,
        '--format',
        'pptx',
        '--output',
        path.join('dist', 'downloads', exportName(talk, 'pptx')),
      ], talk)
    }

    writeFileSync(path.join(root, 'dist', 'index.html'), renderIndex(talks), 'utf8')
    writeLocalPreviewAliases(talks)
    return
  }

  if (command === 'dev') {
    const { talkName, passthrough: slidevArgs } = parseTalkAndPassthrough(args, passthrough)
    const talk = resolveTalk(talkName)
    await runTalkSlidev(entry => [entry, '--open', ...slidevArgs], talk)
    return
  }

  if (command === 'build') {
    const { talkName, passthrough: slidevArgs } = parseTalkAndPassthrough(args, passthrough)
    const talk = resolveTalk(talkName)
    await runTalkSlidev(entry => ['build', entry, ...slidevArgs], talk)
    return
  }

  if (command === 'export') {
    const { talkName, outputFormat, passthrough: slidevArgs } = parseExportArgs(args, passthrough)
    const talk = resolveTalk(talkName)
    const extension = outputFormat === 'pptx' ? 'pptx' : 'pdf'
    const output = exportName(talk, extension)
    await mkdir(path.join(root, 'exports'), { recursive: true })
    await runTalkSlidev(entry => [
      'export',
      entry,
      '--format',
      outputFormat,
      '--output',
      path.join('exports', output),
      ...slidevArgs,
    ], talk)
    return
  }

  throw new Error(`Unknown command "${command}". Use dev, build, build-all, export, or list.`)
}

try {
  await main()
}
catch (error) {
  console.error(error.message)
  process.exit(1)
}
