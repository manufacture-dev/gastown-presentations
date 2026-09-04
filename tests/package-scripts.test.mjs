import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const packageJson = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
)

test('keeps QR generation as an explicit maintenance command', () => {
  assert.equal(
    packageJson.scripts['generate:talk-qrs'],
    'node scripts/generate-talk-qrs.mjs',
  )

  assert.deepEqual(
    {
      dev: packageJson.scripts.dev,
      build: packageJson.scripts.build,
      'build:all': packageJson.scripts['build:all'],
      'export:pdf': packageJson.scripts['export:pdf'],
      'export:pptx': packageJson.scripts['export:pptx'],
    },
    {
      dev: 'node scripts/talk.mjs dev',
      build: 'node scripts/talk.mjs build',
      'build:all': 'node scripts/talk.mjs build-all',
      'export:pdf': 'node scripts/talk.mjs export pdf',
      'export:pptx': 'node scripts/talk.mjs export pptx',
    },
  )
})
