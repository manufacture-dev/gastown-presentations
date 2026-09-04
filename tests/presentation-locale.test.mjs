import assert from 'node:assert/strict'
import test from 'node:test'

import { resolveInitialPresentationLocale } from '../lib/presentation-locale.mjs'

test('uses the talk default locale when opening a different talk', () => {
  assert.equal(resolveInitialPresentationLocale({
    defaultLocale: 'en',
    route: 'dilitrust-techday',
    storedLocale: 'fr',
    storedTalk: 'sacem-matinale-dsi',
  }), 'en')
})

test('keeps the locally selected locale when reopening the same talk', () => {
  assert.equal(resolveInitialPresentationLocale({
    defaultLocale: 'en',
    route: 'dilitrust-techday',
    storedLocale: 'fr',
    storedTalk: 'dilitrust-techday',
  }), 'fr')
})

test('falls back to the talk default when no locale is stored', () => {
  assert.equal(resolveInitialPresentationLocale({
    defaultLocale: 'fr',
    route: 'sacem-matinale-dsi',
    storedLocale: null,
    storedTalk: 'sacem-matinale-dsi',
  }), 'fr')
})
