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
})

test('exposes focused development and build commands', () => {
  assert.deepEqual(
    {
      dev: packageJson.scripts.dev,
      build: packageJson.scripts.build,
      'build:all': packageJson.scripts['build:all'],
      'build:web': packageJson.scripts['build:web'],
      'export:pdf': packageJson.scripts['export:pdf'],
      'export:pptx': packageJson.scripts['export:pptx'],
    },
    {
      dev: 'node scripts/talk.mjs dev',
      build: 'node scripts/talk.mjs build',
      'build:all': 'node scripts/talk.mjs build-all',
      'build:web': 'node scripts/talk.mjs build-web',
      'export:pdf': 'node scripts/talk.mjs export pdf',
      'export:pptx': 'node scripts/talk.mjs export pptx',
    },
  )
})

test('does not expose a custom preview server', () => {
  assert.equal(packageJson.scripts['build:sites'], undefined)
  assert.equal(packageJson.scripts['preview:site'], undefined)
})
