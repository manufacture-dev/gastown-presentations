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
  'workshop_tools',
  'workshop_lab',
  'workshop_app',
  'workshop_app_setup',
  'workshop_seed',
  'workshop_tmux',
  'workshop_contract',
  'workshop_observe',
  'workshop_parallel_observe',
  'workshop_stabilize',
  'workshop_stop',
  'workshop_verify',
  'workshop_functional',
  'workshop_analysis',
  'workshop_complete',
  'formulas',
  'synthesis',
  'thanks',
]

test('keeps recording stop separate from application update and optional lab shutdown', () => {
  const stop = slides[slideIndex('workshop_stop')].content
  assert.match(stop, /content="gt estop"/)
  assert.match(stop, /content="taxiway record stop agile-en-seine"/)
  assert.doesNotMatch(stop, /--latest|taxiway down|git fetch|git rebase/)
  const update = slides[slideIndex('workshop_verify')].content
  assert.match(update, /content="npm install"/)
  assert.match(update, /content="npm run dev"/)
  assert.doesNotMatch(update, /npm --prefix|git switch/)
})

test('keeps the final workshop transition separate from the shared thanks slide', () => {
  const completion = slides[slideIndex('workshop_complete')]
  assert.deepEqual(completion.frontmatter.variants, ['workshop'])
  assert.equal(slideIndex('formulas'), slideIndex('workshop_complete') + 1)
  assert.doesNotMatch(slides[slideIndex('thanks')].content, /langfuse|workshop_/)
})

test('keeps the conductor timeline contiguous and exactly 105 minutes', () => {
  const entries = [...scenario.matchAll(/^\| (\d\d):(\d\d)–(\d\d):(\d\d) \| (\d+) min \|/gm)]
  let end = 0
  for (const [, sh, sm, eh, em, duration] of entries) {
    const start = Number(sh) * 60 + Number(sm)
    const next = Number(eh) * 60 + Number(em)
    assert.equal(start, end)
    assert.equal(next - start, Number(duration))
    end = next
  }
  assert.equal(end, 105)
})

function slideIndex(translationKey) {
  return slides.findIndex(slide => slide.content.includes(`$t("${translationKey}.heading")`))
}

test('scopes the common workshop design to every workshop-only slide', () => {
  const workshopSlides = slides.filter(slide => slide.frontmatter.variants?.includes('workshop') && slide.frontmatter.variants.length === 1)
  assert.equal(workshopSlides.length, 19)
  for (const slide of workshopSlides)
    assert.ok(slide.frontmatter.class?.split(' ').includes('workshop-slide'), `missing workshop scope: ${slide.content.slice(0,100)}`)
})

test('orders the workshop as setup, one mission and GO, observation, verification, and conclusion', () => {
  const indices = workshopSequence.map(slideIndex)

  for (const [index, slideIndexValue] of indices.entries())
    assert.notEqual(slideIndexValue, -1, `missing ${workshopSequence[index]} slide`)

  assert.deepEqual(indices, [...indices].sort((left, right) => left - right))
})

test('separates application update and agent verification without changing the common slide', async () => {
  const manual = slides[slideIndex('workshop_verify')]
  const functional = slides[slideIndex('workshop_functional')]
  const common = slides[slideIndex('verification')]
  assert.doesNotMatch(manual.content, /language="prompt"/)
  assert.match(manual.content, /content="git fetch"/)
  assert.match(manual.content, /content="git rebase"/)
  assert.doesNotMatch(manual.content, /manual_features|git rev-parse|git remote|git status/)
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
  assert.equal(prompts.length, 4)
  assert.equal(prompts.filter(block => block.includes('recipient="Mayor"')).length, 2)
  assert.ok(prompts.some(block => block.includes("workshop_verify.recipient")))
})

test('provides concise staged prompts in French and English', async () => {
  const promptNames = [
    'workshop-mission',
    'workshop-seed',
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
  for (const key of workshopSequence.filter(key => key.startsWith('workshop_'))) {
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
    'gt refinery queue agreement_hub',
    'content="git fetch"',
    'content="git rebase"',
    'npm run dev',
  ]

  for (const content of requiredContent)
    assert.ok(source.includes(content), `missing workshop content: ${content}`)
})

test('explains outer and nested tmux key sequences', () => {
  for (const key of ['Ctrl+b s', 'Ctrl+b d', 'Ctrl+b Ctrl+b s', 'Ctrl+b Ctrl+b d'])
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
    '| 00:00–00:05 | 5 min |',
    '| 00:05–00:20 | 15 min |',
    '| 00:20–00:40 | 20 min |',
    '| 00:40–00:45 | 5 min |',
    '| 00:45–00:50 | 5 min |',
    '| 00:50–00:55 | 5 min |',
    '| 00:55–01:10 | 15 min |',
    '| 01:10–01:15 | 5 min |',
    '| 01:15–01:25 | 10 min |',
    '| 01:25–01:30 | 5 min |',
    '| 01:30–01:35 | 5 min |',
    '| 01:35–01:45 | 10 min |',
  ]

  for (const row of expectedRows)
    assert.ok(scenario.includes(row), `missing timeline row: ${row}`)

  assert.match(scenario, /Windows 11.*WSL2/is)
  assert.match(scenario, /Ctrl\+b Ctrl\+b s/)
  assert.doesNotMatch(scenario, /participants doivent arriver avec Taxiway et ses prérequis installés/i)
})

test('applies the rehearsal safety and scope decisions', async () => {
  assert.doesNotMatch(source, /--repo-ref/);
  assert.doesNotMatch(scenario, /--repo-ref|8fc15ff/);
  assert.doesNotMatch(source, /5f11148/);
  assert.doesNotMatch(source, /record stop[^"\n]*--latest/);
  const stop = slides[slideIndex('workshop_stop')].content;
  assert.match(stop, /taxiway record stop agile-en-seine/);
  assert.match(stop, /gt estop/);
  assert.doesNotMatch(stop, /taxiway down|content="git /);
  assert.doesNotMatch(slides[slideIndex('workshop_tmux')].content, /workshop-record-option/);
  const seed = slides[slideIndex('workshop_seed')].content;
  assert.doesNotMatch(seed, /npm install|skills add|agent-browser install/);
  assert.equal(slideIndex('workshop_first'), -1);
  assert.equal(slideIndex('workshop_parallel'), -1);
  assert.ok(slideIndex('workshop_analysis') > slideIndex('workshop_functional'));
  for (const lang of ['fr', 'en']) {
    const qa = await readFile(new URL(`../public/prompts/workshop-verify.${lang}.txt`, import.meta.url), 'utf8');
    assert.doesNotMatch(qa, /sha_attendu|plan_approuve|MANUEL-|minutes maximum/);
    assert.match(qa, /headed/);
    assert.match(qa, /Git/);
  }
  assert.equal(slideIndex('workshop_cost'), -1);
  const analysis = slides[slideIndex('workshop_analysis')].content;
  assert.match(analysis, /taxiway record analyse agile-en-seine/);
  assert.match(analysis, /--interactive --runner claude-code/);
  assert.doesNotMatch(analysis, /source="workshop-analysis"/);
});

test('displays and copies one workshop mission prompt without an alternate summary', async () => {
  const mission = slides[slideIndex('workshop_contract')].content
  assert.match(mission, /<CopyCodeBlock[^>]*source="workshop-mission"/)
  assert.doesNotMatch(mission, /CopyPromptButton|workshop_contract.summary|workshop_contract.copy_note/)
  const component = await readFile(new URL('../components/CopyCodeBlock.vue', import.meta.url), 'utf8')
  assert.match(component, /clipboard.writeText\(displayed.value\)/)
  assert.match(component, /<code>{{ displayed }}<\/code>/)
  for (const lang of ['fr', 'en']) {
    const prompt = await readFile(new URL(`../public/prompts/workshop-mission.${lang}.txt`, import.meta.url), 'utf8')
    assert.doesNotMatch(prompt, /SACEM/i)
    const locale = lang === 'fr' ? frLocale : enLocale
    const workshop = locale.match(/^workshop_contract:\n[\s\S]*?(?=^\w+:)/m)[0]
    assert.doesNotMatch(workshop, /SACEM|summary:|copy_note:/i)
  }
  assert.match(slides[slideIndex('workshop_observe')].content, /content="GO"/)
  assert.doesNotMatch(source, /source="workshop-(contract|plan|go|stabilize|first-increment|parallel)"/)
  assert.doesNotMatch(slides[slideIndex('workshop_stabilize')].content, /language="prompt"/)
  assert.match(slides[slideIndex('workshop_tmux')].frontmatter.class, /workshop-tmux-slide/)
  for (const key of ['beads', 'convoys', 'polecats'])
    assert.ok(!slides[slideIndex(key)].frontmatter.variants || slides[slideIndex(key)].frontmatter.variants.includes('workshop'))
})
