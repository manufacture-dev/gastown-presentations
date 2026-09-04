import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import { parseSync } from '@slidev/parser'

const source = await readFile(new URL('../slides.md', import.meta.url), 'utf8')
const slides = parseSync(source, 'slides.md').slides

function slideIndex(translationKey) {
  return slides.findIndex(slide => slide.content.includes(`$t("${translationKey}.heading")`))
}

function slidesFor(translationKey) {
  return slides.filter(slide => slide.content.includes(`$t("${translationKey}.heading")`))
}

test('declares separate demo slides for presentations and the workshop', () => {
  const demoSlides = slidesFor('demo')

  assert.equal(demoSlides.length, 2)
  assert.deepEqual(demoSlides[0].frontmatter.variants, ['full', 'short'])
  assert.deepEqual(demoSlides[1].frontmatter.variants, ['workshop'])
})

test('places the workshop demo between supervision and verification', () => {
  const workshopDemoIndex = slides.findIndex(slide =>
    slide.content.includes('$t("demo.heading")')
    && slide.frontmatter.variants?.includes('workshop'))

  assert.equal(workshopDemoIndex, slideIndex('supervision') + 1)
  assert.equal(slideIndex('verification'), workshopDemoIndex + 1)
})

test('includes the full-only Formula slide in the workshop', () => {
  const [formulaSlide] = slidesFor('formulas')

  assert.deepEqual(formulaSlide.frontmatter.variants, ['full', 'workshop'])
})
