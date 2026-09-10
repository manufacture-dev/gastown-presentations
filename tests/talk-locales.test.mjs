import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

function eventName(locale) {
  const source = readFileSync(new URL(`../locales/${locale}.yml`, import.meta.url), 'utf8')
  const match = source.match(/agile_en_seine_2026:\n\s+event:\s+["']?([^"'\n]+)["']?/)

  return match?.[1]
}

test('keeps the Agile En Seine event name unchanged in every locale', () => {
  assert.equal(eventName('fr'), 'Agile En Seine & IA')
  assert.equal(eventName('en'), 'Agile En Seine & IA')
})
