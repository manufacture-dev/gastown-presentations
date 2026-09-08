import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import { parseSync } from '@slidev/parser'

const source = await readFile(new URL('../slides.md', import.meta.url), 'utf8')
const setupSource = await readFile(new URL('../setup/main.ts', import.meta.url), 'utf8')
const slides = parseSync(source, 'slides.md').slides

function slideIndex(translationKey) {
  return slides.findIndex(slide => slide.content.includes(`$t("${translationKey}.heading")`))
}

function slidesFor(translationKey) {
  return slides.filter(slide => slide.content.includes(`$t("${translationKey}.heading")`))
}

test('places event slides after speakers and after thanks, for the workshop only', () => {
  const partners = slidesFor('aes_partners')
  const feedback = slidesFor('aes_feedback')
  assert.equal(partners.length, 1)
  assert.equal(feedback.length, 1)
  assert.deepEqual(partners[0].frontmatter.variants, ['workshop'])
  assert.deepEqual(feedback[0].frontmatter.variants, ['workshop'])
  assert.equal(slideIndex('aes_partners'), slideIndex('speakers') + 1)
  assert.equal(slideIndex('aes_feedback'), slideIndex('thanks') + 1)
  assert.equal(slideIndex('aes_feedback'), slides.length - 1)
})

test('keeps the template feedback wording and phone elements without added thanks', async () => {
  const fr = await readFile(new URL('../locales/fr.yml', import.meta.url), 'utf8')
  const feedback = fr.match(/^aes_feedback:\n[\s\S]*?(?=^workshop_app_setup:)/m)[0]
  assert.ok(feedback.replace('{app}', 'TingEvent').includes("Rendez-vous sur l'application mobile TingEvent pour partager votre retour en quelques secondes."))
  assert.ok(slidesFor('aes_feedback')[0].content.includes('<strong>TingEvent</strong>'))
  assert.ok(feedback.includes("Ouvrez l'application TingEvent sur votre mobile"))
  assert.ok(feedback.includes('Rendez-vous sur cette session dans le programme'))
  assert.ok(feedback.includes('Évaluez cette session'))
  assert.ok(feedback.includes('Votre session'))
  assert.doesNotMatch(feedback, /thanks:|Merci/)
  assert.ok(slidesFor('aes_feedback')[0].content.includes('aes-feedback-phone'))
  assert.ok(slidesFor('aes_feedback')[0].content.includes('★ ★ ★ ★ ★'))
})

test('keeps the demo slide for talks and uses a dedicated workshop application slide', () => {
  const demoSlides = slidesFor('demo')
  const workshopAppSlides = slidesFor('workshop_app')

  assert.equal(demoSlides.length, 1)
  assert.deepEqual(demoSlides[0].frontmatter.variants, ['full', 'short'])
  assert.equal(workshopAppSlides.length, 1)
  assert.deepEqual(workshopAppSlides[0].frontmatter.variants, ['workshop'])
})

test('starts the workshop with setup before presenting Agreement Hub', () => {
  const setupIndex = slideIndex('workshop_setup')
  const labIndex = slideIndex('workshop_lab')
  const tmuxIndex = slideIndex('workshop_tmux')
  const workshopAppIndex = slideIndex('workshop_app')

  assert.equal(slideIndex('workshop_transition'), slideIndex('supervision') + 1)
  assert.equal(setupIndex, slideIndex('workshop_transition') + 1)
  assert.equal(labIndex, setupIndex + 1)
  assert.equal(slideIndex('workshop_app_setup'), labIndex + 1)
  assert.equal(workshopAppIndex, slideIndex('workshop_app_setup') + 1)
  assert.equal(slideIndex('workshop_seed'), workshopAppIndex + 1)
  assert.equal(tmuxIndex, slideIndex('workshop_seed') + 1)
  assert.equal(slideIndex('workshop_contract'), tmuxIndex + 1)
})

test('includes the full-only Formula slide in the workshop', () => {
  const [formulaSlide] = slidesFor('formulas')

  assert.deepEqual(formulaSlide.frontmatter.variants, ['full', 'workshop'])
})

test('exposes the active variant to slide templates', () => {
  assert.match(
    setupSource,
    /app\.config\.globalProperties\.\$variant\s*=\s*talkConfig\.variant/,
  )
})

test('hides every live signal from the workshop variant', () => {
  const liveSignals = [...source.matchAll(/<div\b[^>]*class="live-signal"[^>]*>/g)]
    .map(match => match[0])

  assert.equal(liveSignals.length, 6)
  for (const liveSignal of liveSignals)
    assert.match(liveSignal, /v-if="\$variant !== 'workshop'"/)
})
