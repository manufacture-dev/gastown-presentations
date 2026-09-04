import assert from 'node:assert/strict'
import test from 'node:test'

import {
  buildPresentationUrl,
  presentationQrCodeFilename,
} from '../lib/presentation-links.mjs'

test('builds a public talk URL without a language override', () => {
  assert.equal(
    buildPresentationUrl('sacem-matinale-dsi'),
    'https://manufacture.dev/gastown-presentations/sacem-matinale-dsi/#/1',
  )
  assert.equal(
    buildPresentationUrl('/dilitrust-techday/'),
    'https://manufacture.dev/gastown-presentations/dilitrust-techday/#/1',
  )
})

test('supports an alternate deployment base URL', () => {
  assert.equal(
    buildPresentationUrl('my-talk', 'https://example.test/decks'),
    'https://example.test/decks/my-talk/#/1',
  )
})

test('rejects an empty or unsafe talk route', () => {
  assert.throws(() => buildPresentationUrl(''), /talk route/i)
  assert.throws(() => buildPresentationUrl('../admin'), /talk route/i)
})

test('uses one deterministic QR code filename per talk', () => {
  assert.equal(presentationQrCodeFilename('dev-with-ai-live-4'), 'dev-with-ai-live-4.png')
})
