import assert from 'node:assert/strict'
import test from 'node:test'

import { withDefaultExportWait } from '../lib/slidev-export-options.mjs'

test('adds a one-second wait to Slidev export arguments', () => {
  assert.deepEqual(
    withDefaultExportWait(['export', 'slides.md', '--format', 'pdf']),
    ['export', 'slides.md', '--format', 'pdf', '--wait', '1000'],
  )
})

test('keeps an explicit wait supplied by the caller', () => {
  assert.deepEqual(
    withDefaultExportWait(['export', 'slides.md', '--wait', '2500']),
    ['export', 'slides.md', '--wait', '2500'],
  )
  assert.deepEqual(
    withDefaultExportWait(['export', 'slides.md', '--wait=2500']),
    ['export', 'slides.md', '--wait=2500'],
  )
})
