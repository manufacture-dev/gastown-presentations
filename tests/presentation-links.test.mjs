import assert from 'node:assert/strict'
import test from 'node:test'

import {
  buildPresentationUrl,
  normalizePresentationLocale,
  parsePresentationLocale,
  presentationQrCodeFilename,
} from '../lib/presentation-links.mjs'

test('normalizes supported regional locales', () => {
  assert.equal(normalizePresentationLocale('fr-FR'), 'fr')
  assert.equal(normalizePresentationLocale('EN_us'), 'en')
})

test('uses a supported fallback for an invalid locale', () => {
  assert.equal(normalizePresentationLocale('de-DE', 'fr'), 'fr')
  assert.equal(normalizePresentationLocale(undefined, 'de-DE'), 'en')
})

test('parses and normalizes the lang query parameter', () => {
  assert.equal(parsePresentationLocale('?lang=fr-FR', 'en'), 'fr')
  assert.equal(parsePresentationLocale('?foo=bar&lang=en-GB', 'fr'), 'en')
  assert.equal(parsePresentationLocale('?lang=de', 'fr'), 'fr')
})

test('builds a public talk URL for each language', () => {
  assert.equal(
    buildPresentationUrl('sacem-matinale-dsi', 'fr'),
    'https://manufacture.dev/gastown-presentations/sacem-matinale-dsi/?lang=fr#/1',
  )
  assert.equal(
    buildPresentationUrl('/dilitrust-techday/', 'en-GB'),
    'https://manufacture.dev/gastown-presentations/dilitrust-techday/?lang=en#/1',
  )
})

test('supports an alternate deployment base URL', () => {
  assert.equal(
    buildPresentationUrl('my-talk', 'fr', 'https://example.test/decks'),
    'https://example.test/decks/my-talk/?lang=fr#/1',
  )
})

test('rejects an empty or unsafe talk route', () => {
  assert.throws(() => buildPresentationUrl('', 'fr'), /talk route/i)
  assert.throws(() => buildPresentationUrl('../admin', 'fr'), /talk route/i)
})

test('uses deterministic QR code filenames', () => {
  assert.equal(presentationQrCodeFilename('dev-with-ai-live-4', 'fr-FR'), 'dev-with-ai-live-4.fr.png')
  assert.equal(presentationQrCodeFilename('dev-with-ai-live-4', 'en'), 'dev-with-ai-live-4.en.png')
})
