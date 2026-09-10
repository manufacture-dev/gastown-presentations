import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'

const source = await readFile(new URL('../scripts/talk.mjs', import.meta.url), 'utf8')
// Exercise the CLI's real configuration functions without starting Slidev.
function cli(talk, inherited = {}) {
  const context = vm.createContext({
    process: { env: inherited },
    readdirSync: () => ['example.json'],
    readFileSync: () => JSON.stringify(talk),
    path: { join: (...parts) => parts.join('/') },
    talksDir: 'talks',
  })
  const constants = source.slice(source.indexOf('const DEFAULT_VARIANT'), source.indexOf('const root'))
  const functions = source.slice(source.indexOf('function readTalks'), source.indexOf('function readLocalizedHeading'))
  vm.runInContext(constants + functions, context)
  return vm.runInContext('({ talks: readTalks(), list: renderTalkList(readTalks()), env: envForTalk(readTalks()[0]) })', context)
}
const base = { id: 'test', route: 'test', defaultLocale: 'fr', label: 'Test', date: '2026-09-22' }

const setup = await readFile(new URL('../setup/main.ts', import.meta.url), 'utf8')
function runtime(env) {
  const code = setup.slice(setup.indexOf('function getLatestTalk'), setup.indexOf('function capitalize'))
    .replaceAll('import.meta.env', 'env').replace(': TalkConfig =', ' =')
  return vm.runInNewContext(code + '\ntalkConfig', {
    env,
    talkModules: {
      latest: { ...base, id: 'latest', route: 'latest', prompt: 'all-use-cases' },
      workshop: { ...base, id: 'workshop', route: 'workshop', variant: 'workshop', date: '2026-01-01' },
      short: { ...base, id: 'short', route: 'short', variant: 'short', prompt: 'demo-15-min', date: '2026-01-01' },
    },
  })
}

test('runtime never inherits a demo prompt for the workshop', () => {
  for (const prompt of [undefined, '', 'all-use-cases']) {
    const config = runtime({ VITE_TALK_ID: 'workshop', VITE_TALK_VARIANT: 'workshop', VITE_TALK_PROMPT: prompt })
    assert.equal(config.prompt, undefined)
  }
})

test('runtime falls back to the selected talk, not another latest talk', () => {
  assert.equal(runtime({ VITE_TALK_ID: 'short' }).prompt, 'demo-15-min')
  assert.equal(runtime({ VITE_TALK_ROUTE: 'short' }).prompt, 'demo-15-min')
  assert.equal(runtime({}).prompt, 'all-use-cases')
})

test('workshop accepts no demo prompt and lists N/A', () => {
  const result = cli({ ...base, variant: 'workshop' })
  assert.match(result.list, /N\/A/)
  assert.equal(result.talks[0].prompt, undefined)
})

test('workshop overrides inherited prompt environment with an empty value', () => {
  const { env } = cli({ ...base, variant: 'workshop' }, { VITE_TALK_PROMPT: 'all-use-cases' })
  assert.equal(env.VITE_TALK_PROMPT, '')
})

for (const variant of [undefined, 'full', 'short']) {
  test(`${variant || 'implicit full'} still requires a valid demo prompt`, () => {
    assert.throws(() => cli({ ...base, variant }), /Missing "prompt"/)
    assert.throws(() => cli({ ...base, variant, prompt: 'N/A' }), /Invalid "prompt"/)
    for (const prompt of ['all-use-cases', 'demo-15-min']) {
      const result = cli({ ...base, variant, prompt })
      assert.equal(result.env.VITE_TALK_PROMPT, prompt)
      assert.ok(result.list.includes(prompt))
    }
  })
}

test('Agile En Seine no longer configures an unused demo prompt', async () => {
  const talk = JSON.parse(await readFile(new URL('../talks/agile-en-seine-2026.json', import.meta.url), 'utf8'))
  assert.equal(Object.hasOwn(talk, 'prompt'), false)
  assert.match(execFileSync(process.execPath, ['scripts/talk.mjs', 'list'], { encoding: 'utf8' }), /workshop\s+N\/A/)
})
