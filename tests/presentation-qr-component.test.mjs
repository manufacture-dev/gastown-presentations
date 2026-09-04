import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const componentSource = await readFile(
  new URL('../components/PresentationQrCode.vue', import.meta.url),
  'utf8',
)

test('styles the presentation link like the speaker QR links', () => {
  const linkRule = componentSource.match(/\.presentation-qr-code\s*\{(?<rule>[^}]*)\}/s)

  assert.ok(linkRule)
  assert.match(linkRule.groups.rule, /color:\s*var\(--gt-card-muted\)/)
  assert.match(linkRule.groups.rule, /border:\s*0/)
  assert.match(linkRule.groups.rule, /box-shadow:\s*none/)
  assert.match(linkRule.groups.rule, /text-decoration:\s*none/)
})
