import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import { parseSync } from '@slidev/parser'

const source = await readFile(new URL('../slides.md', import.meta.url), 'utf8')
const frLocale = await readFile(new URL('../locales/fr.yml', import.meta.url), 'utf8')
const enLocale = await readFile(new URL('../locales/en.yml', import.meta.url), 'utf8')
const scenario = await readFile(new URL('../docs/scenarios/agile-en-seine-2026.md', import.meta.url), 'utf8')
const slides = parseSync(source, 'slides.md').slides

const workshopSequence = [
  'workshop_setup',
  'workshop_lab',
  'workshop_app',
  'workshop_seed',
  'workshop_tmux',
  'workshop_contract',
  'workshop_first',
  'workshop_observe',
  'workshop_parallel',
  'workshop_parallel_observe',
  'workshop_stabilize',
  'workshop_stop',
  'workshop_analysis',
  'workshop_verify',
  'workshop_functional',
  'formulas',
  'synthesis',
  'thanks',
]

function slideIndex(translationKey) {
  return slides.findIndex(slide => slide.content.includes(`$t("${translationKey}.heading")`))
}

test('scopes the common workshop design to every workshop-only slide', () => {
  const workshopSlides = slides.filter(slide => slide.frontmatter.variants?.includes('workshop') && slide.frontmatter.variants.length === 1)
  assert.equal(workshopSlides.length, 17)
  for (const slide of workshopSlides)
    assert.ok(slide.frontmatter.class?.split(' ').includes('workshop-slide'), `missing workshop scope: ${slide.content.slice(0,100)}`)
})

test('orders the workshop as setup, staged delivery, verification, and conclusion', () => {
  const indices = workshopSequence.map(slideIndex)

  for (const [index, slideIndexValue] of indices.entries())
    assert.notEqual(slideIndexValue, -1, `missing ${workshopSequence[index]} slide`)

  assert.deepEqual(indices, [...indices].sort((left, right) => left - right))
})

test('separates manual and functional verification without changing the common slide', async () => {
  const manual = slides[slideIndex('workshop_verify')]
  const functional = slides[slideIndex('workshop_functional')]
  const common = slides[slideIndex('verification')]
  assert.doesNotMatch(manual.content, /language="prompt"/)
  assert.match(manual.content, /workshop_verify.manual_features/)
  assert.equal(slideIndex('workshop_functional'), slideIndex('workshop_verify') + 1)
  assert.deepEqual(functional.frontmatter.variants, ['workshop'])
  assert.deepEqual(common.frontmatter.variants, ['full', 'short'])
  assert.match(common.content, /checkpoint-list/)
  for (const lang of ['fr', 'en']) {
    const prompt = await readFile(new URL(`../public/prompts/workshop-verify.${lang}.txt`, import.meta.url), 'utf8')
    assert.match(prompt, /agent-browser/)
    assert.match(prompt, /http:\/\/localhost:5173/)
  }
})

test('marks every operational workshop slide as workshop-only', () => {
  for (const translationKey of workshopSequence.filter(key => key.startsWith('workshop_'))) {
    const slide = slides[slideIndex(translationKey)]

    assert.deepEqual(slide?.frontmatter.variants, ['workshop'], `${translationKey} must be workshop-only`)
  }
})

test('provides a reusable copyable block for commands and localized prompts', async () => {
  const component = await readFile(new URL('../components/CopyCodeBlock.vue', import.meta.url), 'utf8')

  assert.match(component, /defineProps/)
  assert.match(component, /content/)
  assert.match(component, /source/)
  assert.match(component, /context/)
  assert.match(component, /navigator\.clipboard\.writeText/)
  assert.match(component, /locale\.value\?\.startsWith\('fr'\)/)
  assert.match(component, /prompts\/\$\{props\.source\}\.\$\{lang\}\.txt/)
  assert.match(component, /workshop_common\.copied/)
})

test('separates prompt recipients from action headings', async () => {
  const component = await readFile(new URL('../components/CopyCodeBlock.vue', import.meta.url), 'utf8')
  assert.match(component, /v-if="recipient" class="copy-code-block__recipient"/)
  const prompts = source.match(/<CopyCodeBlock\b[\s\S]*?\/>/g).filter(block => block.includes('language="prompt"'))
  assert.equal(prompts.length, 8)
  assert.equal(prompts.filter(block => block.includes('recipient="Mayor"')).length, 5)
  assert.ok(prompts.some(block => block.includes("workshop_verify.recipient")))
})

test('provides concise staged prompts in French and English', async () => {
  const promptNames = [
    'workshop-seed',
    'workshop-analysis',
    'workshop-contract',
    'workshop-first-increment',
    'workshop-parallel',
    'workshop-stabilize',
    'workshop-verify',
  ]

  for (const promptName of promptNames) {
    for (const lang of ['fr', 'en']) {
      const prompt = await readFile(new URL(`../public/prompts/${promptName}.${lang}.txt`, import.meta.url), 'utf8')

      assert.ok(prompt.trim().length > 80, `${promptName}.${lang} must be actionable`)
      assert.ok(prompt.length < 1400, `${promptName}.${lang} must stay workshop-sized`)
      assert.doesNotMatch(prompt, /state-of-your-eyes.*toutes les minutes/is)
    }
  }
})

test('uses individual command rows while keeping workshop prompts globally copyable', () => {
  for (const key of workshopSequence.slice(4, 14)) {
    const blocks = slides[slideIndex(key)].content.match(/<CopyCodeBlock\b[\s\S]*?\/>/g) || []
    for (const block of blocks) {
      if (block.includes('language="prompt"')) {
        assert.doesNotMatch(block, /\brow\b/, `${key}: prompts use global copy`)
      }
      else {
        assert.match(block, /\brow\b/, `${key}: commands use individual copy`)
        assert.ok(!block.includes('\\n'), `${key}: one command per row`)
      }
    }
  }
})

test('includes the complete copyable workshop command path', () => {
  const requiredContent = [
    'https://learn.microsoft.com/windows/wsl/install',
    'https://taxiway.sh/',
    'https://github.com/tmux/tmux/wiki/Getting-Started',
    'https://tmuxcheatsheet.com/',
    'taxiway init',
    'taxiway up agile-en-seine',
    'taxiway doctor agile-en-seine',
    'taxiway shell agile-en-seine',
    'gt doctor',
    'gt mayor attach',
    'bd list --all --flat',
    'bd show <bead_id>',
    'gt convoy list --all',
    'gt convoy status <convoy_id>',
    'gt refinery queue agreement_hub',
    'gt refinery status agreement_hub',
    'gt dolt status',
    'content="git fetch"',
    'content="git rebase"',
    'npm run dev',
  ]

  for (const content of requiredContent)
    assert.ok(source.includes(content), `missing workshop content: ${content}`)
})

test('explains outer and nested tmux key sequences', () => {
  for (const key of ['Ctrl+b s', 'Ctrl+b Ctrl+b s', 'Ctrl+b Ctrl+b d', 'Ctrl+b d'])
    assert.ok(source.includes(key), `missing tmux sequence: ${key}`)
})

test('provides every workshop section in both locales', () => {
  for (const key of workshopSequence.filter(key => key.startsWith('workshop_'))) {
    assert.match(frLocale, new RegExp(`^${key}:`, 'm'), `missing ${key} in French`)
    assert.match(enLocale, new RegExp(`^${key}:`, 'm'), `missing ${key} in English`)
  }
})

test('documents the approved 1h45 timeline and in-workshop setup', () => {
  const expectedRows = [
    '| 0:00-0:05 | 5 min |',
    '| 0:05-0:20 | 15 min |',
    '| 0:20-0:35 | 15 min |',
    '| 0:35-0:40 | 5 min |',
    '| 0:40-0:45 | 5 min |',
    '| 0:45-1:00 | 15 min |',
    '| 1:00-1:15 | 15 min |',
    '| 1:15-1:20 | 5 min |',
    '| 1:20-1:30 | 10 min |',
    '| 1:30-1:32 | 2 min |',
    '| 1:32-1:35 | 3 min |',
    '| 1:35-1:45 | 10 min |',
  ]

  for (const row of expectedRows)
    assert.ok(scenario.includes(row), `missing timeline row: ${row}`)

  assert.match(scenario, /Windows 11.*WSL2/is)
  assert.match(scenario, /Ctrl\+b Ctrl\+b s/)
  assert.doesNotMatch(scenario, /participants doivent arriver avec Taxiway et ses prérequis installés/i)
})
