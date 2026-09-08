---
theme: the-unnamed
addons:
  - slidev-addon-i18nb
title: Gas Town - Organizing AI-native software delivery
titleTemplate: '%s'
info: |
  Gas Town organizes AI-native software delivery. Live implementation on Agreement Hub.
class: text-left title-slide
drawings:
  persist: false
presenter: true
routerMode: hash
transition: fade
mdc: true
---

# {{ $t("title.heading") }}

<div class="title-info-row">
  <div class="title-context">
    <p class="lede">{{ $talk("event") }}</p>
    <div class="title-meta">
      <div class="byline">{{ $t("title.byline") }}</div>
      <div class="event-date">{{ $talkDate() }}</div>
    </div>
  </div>
</div>

<div class="title-footer">
  <div class="title-tags">
    <span>{{ $t("title.tags.ai_native") }}</span>
    <span>{{ $t("title.tags.distributed") }}</span>
    <span>{{ $t("title.tags.orchestration") }}</span>
    <span>{{ $t("title.tags.supervised") }}</span>
  </div>
  <PresentationQrCode />
</div>

<!--
Open on the model, not the tooling.
This is not "AI coding faster"; it is how delivery gets organized when AI workers become part of the engineering system.
-->

---

# {{ $t("speakers.heading") }}

<div class="speakers-slide">
  <article class="speaker-card">
    <figure class="speaker-photo speaker-photo--jean">
      <img :src="'images/speakers/jlrigau.jpg'" alt="Jean-Louis Rigau" />
    </figure>
    <div>
      <span>{{ $t("speakers.role") }}</span>
      <h2>Jean-Louis Rigau</h2>
      <p>{{ $t("speakers.jlrigau.bio") }}</p>
      <div class="speaker-link">
        <img :src="'images/speakers/jlrigau-linkedin-qr.png'" :alt="$t('speakers.jlrigau.qr_alt')" />
        <a href="https://www.linkedin.com/in/jlrigau/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jlrigau</a>
      </div>
    </div>
  </article>
  <article class="speaker-card">
    <figure class="speaker-photo speaker-photo--emmanuel">
      <img :src="'images/speakers/emmanuelsciara.jpg'" alt="Emmanuel Sciara" />
    </figure>
    <div>
      <span>{{ $t("speakers.role") }}</span>
      <h2>Emmanuel Sciara</h2>
      <p>{{ $t("speakers.emmanuelsciara.bio") }}</p>
      <div class="speaker-link">
        <img :src="'images/speakers/emmanuelsciara-linkedin-qr.png'" :alt="$t('speakers.emmanuelsciara.qr_alt')" />
        <a href="https://www.linkedin.com/in/emmanuelsciara/" target="_blank" rel="noopener noreferrer">linkedin.com/in/emmanuelsciara</a>
      </div>
    </div>
  </article>
</div>

<!--
Introduce the two presenters before moving into the AI practice evolution.
Keep the slide simple: names, photos, and the angle each speaker brings to the story.
-->

---
variants: [workshop]
class: workshop-slide aes-partners-slide
---

# {{ $t("aes_partners.heading") }}

<p>{{ $t("aes_partners.intro") }}</p>

<div class="aes-partners-board">
  <div class="aes-partners-primary">
<img :src="'images/agile-en-seine/flow-analytics-pro.png'" alt="Flow Analytics Pro" />
    <img :src="'images/agile-en-seine/aqoba.png'" alt="aqoba" />
    <img :src="'images/agile-en-seine/digital-tango.png'" alt="digital tango" />
  </div>
  <div class="aes-partners-secondary">
    <img :src="'images/agile-en-seine/zenika.jpeg'" alt="Zenika" />
    <img :src="'images/agile-en-seine/inspearit.jpeg'" alt="inspearit" />
    <img :src="'images/agile-en-seine/mc2i.png'" alt="mc2i" />
    <img :src="'images/agile-en-seine/jfo-conseil.jpeg'" alt="JFO Conseil" />
    <img :src="'images/agile-en-seine/tuleap-dassault-systemes.png'" alt="Tuleap joins Dassault Systèmes" />
    <img :src="'images/agile-en-seine/wakilee.jpeg'" alt="Wakilee" />
    <img :src="'images/agile-en-seine/hymaia.png'" alt="hymaïa" />
    <img :src="'images/agile-en-seine/opteamus.jpeg'" alt="opteamus" />
    <img :src="'images/agile-en-seine/aet-consulting.jpeg'" alt="AET Consulting" />
    <img :src="'images/agile-en-seine/fariance.jpeg'" alt="Fariance" />
    <img :src="'images/agile-en-seine/agile4me.jpeg'" alt="agile4me" />
    <img :src="'images/agile-en-seine/mindz-up.png'" alt="Mindz Up" />
    <img :src="'images/agile-en-seine/we-love-agility.jpeg'" alt="WeLoveAgility.coach" />
    <img :src="'images/agile-en-seine/coachissime.jpeg'" alt="Coachissime" />
  </div>
</div>

<img class="aes-event-logo" :src="'images/agile-en-seine/event-logo-white.png'" alt="Agile en Seine & IA" />

<!--
Source: Template_AESIA_2026_erratum.pptx, slide 3, provided by the organizers.
https://docs.google.com/presentation/d/1B-g804N3BMTrr-1yCUjOD-iK_Gu7SZoQ/edit
Original logos extracted without modification; original order and size hierarchy preserved.
Briefly thank the event partners before continuing.
-->

---

# {{ $t("evolution.heading") }}

<div class="evolution-slide">
  <div class="evolution-ladder">
    <div><span>1</span><img :src="'images/ai-evolution/stage-01.webp'" alt="" /><p>{{ $t("evolution.stages.zero") }}</p></div>
    <div><span>2</span><img :src="'images/ai-evolution/stage-02.webp'" alt="" /><p>{{ $t("evolution.stages.ide_assistant") }}</p></div>
    <div><span>3</span><img :src="'images/ai-evolution/stage-03.webp'" alt="" /><p>{{ $t("evolution.stages.yolo") }}</p></div>
    <div><span>4</span><img :src="'images/ai-evolution/stage-04.webp'" alt="" /><p>{{ $t("evolution.stages.wide_ide") }}</p></div>
    <div><span>5</span><img :src="'images/ai-evolution/stage-05.webp'" alt="" /><p>{{ $t("evolution.stages.cli_agent") }}</p></div>
    <div><span>6</span><img :src="'images/ai-evolution/stage-06.webp'" alt="" /><p>{{ $t("evolution.stages.multi_cli") }}</p></div>
    <div><span>7</span><img :src="'images/ai-evolution/stage-07.webp'" alt="" /><p>{{ $t("evolution.stages.hand_managed") }}</p></div>
    <div><span>8</span><img :src="'images/ai-evolution/stage-08.webp'" alt="" /><p>{{ $t("evolution.stages.orchestrator") }}</p></div>
  </div>
  <div class="evolution-copy">
    <span>{{ $t("evolution.copy_label") }}</span>
    <p class="creator-lede">{{ $t("evolution.lede") }}</p>
    <ul>
      <li>{{ $t("evolution.bullets.early") }}</li>
      <li>{{ $t("evolution.bullets.middle") }}</li>
      <li>{{ $t("evolution.bullets.late") }}</li>
      <li>{{ $t("evolution.bullets.gastown") }}</li>
    </ul>
  </div>
  <div class="takeaway-box takeaway-box--inline evolution-takeaway">{{ $t("evolution.takeaway") }}</div>
</div>

<!--
Inspired by Steve Yegge's "The 8 Stages of Dev Evolution To AI" framing.
Use this as the bridge from personal AI practice to organizational orchestration.
-->

---

# Steve Yegge

<div class="creator-slide">
  <figure class="creator-photo">
    <img :src="'images/steve-yegge.jpg'" alt="Steve Yegge" />
    <figcaption>{{ $t("creator.photo_caption") }}</figcaption>
  </figure>
  <div class="creator-copy">
    <span>{{ $t("creator.copy_label") }}</span>
    <p class="creator-lede">{{ $t("creator.lede") }}</p>
    <div class="creator-bridge">
      <div>
        <strong><em><a href="https://itrevolution.com/product/vibe-coding-book/" target="_blank" rel="noopener noreferrer">Vibe Coding</a></em></strong>
        <p>{{ $t("creator.vibe.desc") }}</p>
      </div>
      <div>
        <strong><a href="https://github.com/gastownhall/gastown" target="_blank" rel="noopener noreferrer">Gas Town</a></strong>
        <p>{{ $t("creator.gastown.desc") }}</p>
      </div>
      <div>
        <strong><a href="https://github.com/gastownhall/beads" target="_blank" rel="noopener noreferrer">Beads</a></strong>
        <p>{{ $t("creator.beads.desc") }}</p>
      </div>
    </div>
  </div>
  <figure class="book-cover">
    <img :src="'images/vibe-coding-cover.jpg'" alt="Vibe Coding book cover" />
    <figcaption>{{ $t("creator.cover_caption") }}</figcaption>
  </figure>
</div>

<!--
Use this slide to ground the story in Steve Yegge's work before introducing the delivery problem.
Keep it short: creator, book, why it matters for the model.
-->

---

# {{ $t("gastown.heading") }}

<div class="gastown-intro">
  <div class="town-map">
    <div class="town-node town-node--main">
      <span>{{ $t("gastown.town.title") }}</span>
      <strong>{{ $t("gastown.town.strong") }}</strong>
      <p>{{ $t("gastown.town.desc") }}</p>
    </div>
    <div class="town-rail"></div>
    <div class="town-node">
      <span>{{ $t("gastown.mayor.title") }}</span>
      <strong>{{ $t("gastown.mayor.strong") }}</strong>
      <p>{{ $t("gastown.mayor.desc") }}</p>
    </div>
    <div class="town-node">
      <span>{{ $t("gastown.rigs.title") }}</span>
      <strong>{{ $t("gastown.rigs.strong") }}</strong>
      <p>{{ $t("gastown.rigs.desc") }}</p>
    </div>
  </div>
  <div class="gastown-copy">
    <span>{{ $t("gastown.copy_label") }}</span>
    <p class="creator-lede">{{ $t("gastown.lede") }}</p>
    <ul>
      <li>{{ $t("gastown.bullets.identities") }}</li>
      <li>{{ $t("gastown.bullets.beads") }}</li>
      <li>{{ $t("gastown.bullets.convoys") }}</li>
      <li>{{ $t("gastown.bullets.supervision") }}</li>
    </ul>
  </div>
  <div class="takeaway-box takeaway-box--inline gastown-takeaway">{{ $t("gastown.takeaway") }}</div>
</div>

<!--
Use this slide as the atmosphere and vocabulary bridge before the problem slide.
The story: Gas Town starts from vibe-coding chaos, then adds city-like operating roles so delivery can be supervised.
-->

---
variants: [full, short]
---

# {{ $t("demo.heading") }}

<div class="app-layout">
  <div class="app-copy">
    <span>Agreement Hub</span>
    <p>{{ $t("demo.desc") }}</p>
    <ul>
      <li>{{ $t("demo.bullets.stack") }}</li>
      <li>{{ $t("demo.bullets.baseline") }}</li>
      <li>{{ $t("demo.bullets.real") }}</li>
    </ul>
  </div>
  <div class="app-shot">
    <div class="app-window">
      <img :src="'images/screenshots/agreement-hub-initial.png'" :alt="$t('demo.image_alt')" />
    </div>
  </div>
</div>

<div class="demo-flow">
  <div class="demo-flow-copy">
    <span>{{ $t("demo.flow_label") }}</span>
    <p>{{ $t("demo.flow_start") }}<br />{{ $t("demo.flow_next") }}</p>
  </div>
  <div class="demo-actions">
    <CopyPromptButton />
    <a class="app-open-link" href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">{{ $t("demo.open_app") }}</a>
  </div>
</div>

<!--
LIVE START:
- Launch Gas Town.
- Present Agreement Hub in the browser.
- Ask the Mayor for the first implementation step.
Contract: the deck explains, the terminal works, the app proves.
-->

---

# {{ $t("break.heading") }}

<div class="slide-frame slide-frame--balanced">
  <div class="diagram-panel wide">
    <div class="single-agent-map">
      <div class="single-agent-core">
        <span>{{ $t("break.core.label") }}</span>
        <strong>{{ $t("break.core.strong") }}</strong>
        <p>{{ $t("break.core.desc") }}</p>
      </div>
      <div class="break-card">
        <span>01</span>
        <strong>{{ $t("break.cards.context.title") }}</strong>
        <p>{{ $t("break.cards.context.desc") }}</p>
      </div>
      <div class="break-card">
        <span>02</span>
        <strong>{{ $t("break.cards.sequential.title") }}</strong>
        <p>{{ $t("break.cards.sequential.desc") }}</p>
      </div>
      <div class="break-card">
        <span>03</span>
        <strong>{{ $t("break.cards.coordination.title") }}</strong>
        <p>{{ $t("break.cards.coordination.desc") }}</p>
      </div>
      <div class="break-card">
        <span>04</span>
        <strong>{{ $t("break.cards.merge.title") }}</strong>
        <p>{{ $t("break.cards.merge.desc") }}</p>
      </div>
      <div class="break-card">
        <span>05</span>
        <strong>{{ $t("break.cards.supervision.title") }}</strong>
        <p>{{ $t("break.cards.supervision.desc") }}</p>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>{{ $t("break.panel_label") }}</span>
    <p>{{ $t("break.panel_desc") }}</p>
    <ul>
      <li>{{ $t("break.bullets.context") }}</li>
      <li>{{ $t("break.bullets.sequential") }}</li>
      <li>{{ $t("break.bullets.parallel") }}</li>
      <li>{{ $t("break.bullets.supervision") }}</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">{{ $t("break.takeaway") }}</div>
  </div>
</div>

<!--
The audience should understand why Gas Town exists before we introduce roles.
The bottleneck is not just model intelligence; it is coordination.
-->

---

# {{ $t("organizes.heading") }}

<div class="slide-frame slide-frame--balanced">
  <div class="diagram-panel">
    <div class="organized-work-map">
      <div class="organized-card organized-card--input">
        <span>{{ $t("organizes.input.label") }}</span>
        <strong>{{ $t("organizes.input.strong") }}</strong>
        <p>{{ $t("organizes.input.desc") }}</p>
      </div>
      <div class="organized-card organized-card--model">
        <span>{{ $t("organizes.layer.label") }}</span>
        <strong>{{ $t("organizes.layer.strong") }}</strong>
        <div class="organized-mechanisms">
          <p><b>Mayor</b> {{ $t("organizes.layer.mayor") }}</p>
          <p><b>Beads</b> {{ $t("organizes.layer.beads") }}</p>
          <p><b>Convoys</b> {{ $t("organizes.layer.convoys") }}</p>
          <p><b>Witness & Refinery</b> {{ $t("organizes.layer.witness_refinery") }}</p>
          <p><b>Polecats</b> {{ $t("organizes.layer.polecats") }}</p>
        </div>
      </div>
      <div class="organized-card organized-card--output">
        <span>{{ $t("organizes.output.label") }}</span>
        <strong>{{ $t("organizes.output.strong") }}</strong>
        <p>{{ $t("organizes.output.desc") }}</p>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>{{ $t("organizes.panel_label") }}</span>
    <p>{{ $t("organizes.panel_desc") }}</p>
    <ul>
      <li>{{ $t("organizes.bullets.mayor") }}</li>
      <li>{{ $t("organizes.bullets.beads") }}</li>
      <li>{{ $t("organizes.bullets.witness") }}</li>
      <li>{{ $t("organizes.bullets.polecats") }}</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">{{ $t("organizes.takeaway") }}</div>
  </div>
</div>

<div v-if="$variant !== 'workshop'" class="live-signal">{{ $t("organizes.live_signal") }}</div>

<!--
Use this slide to position Gas Town as an AI-native delivery organization.
Avoid tool tour language.
-->

---

# {{ $t("organization.heading") }}

<div class="slide-frame slide-frame--balanced">
  <div class="diagram-panel">
    <div class="town-rig-map">
      <div class="town-rig-band town-rig-band--town">
        <span>Town</span>
        <div class="town-rig-row">
          <div>
            <strong>👁️ Overseer</strong>
            <p>{{ $t("organization.town.overseer") }}</p>
          </div>
          <div>
            <strong>🏛️ Mayor</strong>
            <p>{{ $t("organization.town.mayor") }}</p>
          </div>
          <div>
            <strong>🐺 Deacon</strong>
            <p>{{ $t("organization.town.deacon") }}</p>
          </div>
        </div>
      </div>
      <div class="town-rig-band town-rig-band--rig">
        <span>Rig</span>
        <p class="town-rig-definition">{{ $t("organization.rig.definition") }}</p>
        <div class="town-rig-row town-rig-row--rig">
          <div>
            <strong>👥 Crew</strong>
            <p>{{ $t("organization.rig.crew") }}</p>
          </div>
          <div>
            <strong>😺 Polecats</strong>
            <p>{{ $t("organization.rig.polecats") }}</p>
          </div>
          <div>
            <strong>🦉 Witness</strong>
            <p>{{ $t("organization.rig.witness") }}</p>
          </div>
          <div>
            <strong>🏭 Refinery</strong>
            <p>{{ $t("organization.rig.refinery") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>{{ $t("common.why_it_matters") }}</span>
    <p>{{ $t("organization.panel_desc") }}</p>
    <ul>
      <li>{{ $t("organization.bullets.town") }}</li>
      <li>{{ $t("organization.bullets.rig") }}</li>
      <li>{{ $t("organization.bullets.workers") }}</li>
      <li>{{ $t("organization.bullets.roles") }}</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">{{ $t("organization.takeaway") }}</div>
  </div>
</div>

<div v-if="$variant !== 'workshop'" class="live-signal">{{ $t("organization.live_signal") }}</div>

<!--
This is a central slide. The key line is:
The Mayor coordinates work. Polecats execute it.
-->

---

# {{ $t("beads.heading") }}

<div class="slide-frame slide-frame--balanced slide-frame--beads">
  <div class="diagram-panel">
    <div class="bead-map bead-map--dependencies">
      <span class="bead-link bead-link--phase-stem bead-link--phase-stem-teal"></span>
      <span class="bead-link bead-link--phase-stem bead-link--phase-stem-rose bead-link--critical"></span>
      <span class="bead-link bead-link--phase-branch"></span>
      <span class="bead-link bead-link--phase-uc5"></span>
      <span class="bead-link bead-link--phase-uc3"></span>
      <span class="bead-link bead-link--phase-uc1"></span>
      <span class="bead-link bead-link--phase-critical-branch bead-link--critical"></span>
      <span class="bead-link bead-link--phase-uc2 bead-link--critical"></span>
      <span class="bead-link bead-link--uc5-library bead-link--soft"></span>
      <span class="bead-link bead-link--uc3-library bead-link--soft"></span>
      <span class="bead-link bead-link--uc1-library bead-link--soft"></span>
      <span class="bead-link bead-link--library-collector bead-link--soft"></span>
      <span class="bead-link bead-link--uc2-uc4 bead-link--critical"></span>
      <div class="bead-node bead-node--foundation bead-node--phase bead-node--critical-path">
        <span>{{ $t("beads.nodes.foundation.label") }}</span>
        <strong>{{ $t("beads.nodes.foundation.strong") }}</strong>
      </div>
      <div class="bead-node bead-node--use-case bead-node--uc5">
        <span>Use Case 5</span>
        <strong>{{ $t("beads.nodes.uc5.strong") }}</strong>
        <em>{{ $t("beads.nodes.uc5.em") }}</em>
      </div>
      <div class="bead-node bead-node--use-case bead-node--uc3">
        <span>Use Case 3</span>
        <strong>{{ $t("beads.nodes.uc3.strong") }}</strong>
        <em>{{ $t("beads.nodes.uc3.em") }}</em>
      </div>
      <div class="bead-node bead-node--use-case bead-node--uc1">
        <span>Use Case 1</span>
        <strong>{{ $t("beads.nodes.uc1.strong") }}</strong>
        <em>{{ $t("beads.nodes.uc1.em") }}</em>
      </div>
      <div class="bead-node bead-node--use-case bead-node--uc2 bead-node--critical-path">
        <span>Use Case 2</span>
        <strong>{{ $t("beads.nodes.uc2.strong") }}</strong>
        <em>{{ $t("beads.nodes.uc2.em") }}</em>
      </div>
      <div class="bead-dependency-label bead-dependency-label--library">{{ $t("beads.dependencies.library") }}</div>
      <div class="bead-dependency-label bead-dependency-label--risk">{{ $t("beads.dependencies.risk") }}</div>
      <div class="bead-node bead-node--blocked bead-node--uc4 bead-node--critical-path">
        <span>{{ $t("beads.nodes.uc4.label") }}</span>
        <strong>{{ $t("beads.nodes.uc4.strong") }}</strong>
        <em>{{ $t("beads.nodes.uc4.em") }}</em>
      </div>
      <div class="bead-critical-legend">{{ $t("beads.critical_path") }}</div>
    </div>
  </div>
  <div class="insight-panel">
    <span>{{ $t("common.why_it_matters") }}</span>
    <p>{{ $t("beads.panel_desc") }}</p>
    <ul>
      <li>{{ $t("beads.bullets.dependencies") }}</li>
      <li>{{ $t("beads.bullets.ready") }}</li>
      <li>{{ $t("beads.bullets.blocked") }}</li>
      <li>{{ $t("beads.bullets.hooks") }}</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">{{ $t("beads.takeaway") }}</div>
  </div>
</div>

<div v-if="$variant !== 'workshop'" class="live-signal">{{ $t("beads.live_signal") }}</div>

<!--
Use this slide to explain why dependency management matters.
The important point: work becomes executable and inspectable.
-->

---

# {{ $t("convoys.heading") }}

<div class="slide-frame slide-frame--compact slide-frame--convoys">
  <div class="diagram-panel diagram-panel--tall">
    <div class="convoy-map">
      <div class="convoy-row convoy-row--phase">
        <b class="convoy-step">{{ $t("convoys.steps.step0") }}</b>
        <span>{{ $t("convoys.phase.label") }}</span>
        <strong>{{ $t("convoys.phase.strong") }}</strong>
        <em>{{ $t("convoys.phase.em") }}</em>
      </div>
      <div class="convoy-grid">
        <div class="convoy-row">
          <b class="convoy-step">{{ $t("convoys.steps.step1") }}</b>
          <span>{{ $t("convoys.uc5.label") }}</span>
          <strong>{{ $t("convoys.uc5.strong") }}</strong>
          <em>{{ $t("convoys.uc5.em") }}</em>
        </div>
        <div class="convoy-row">
          <b class="convoy-step">{{ $t("convoys.steps.step1") }}</b>
          <span>{{ $t("convoys.uc3.label") }}</span>
          <strong>{{ $t("convoys.uc3.strong") }}</strong>
          <em>{{ $t("convoys.uc3.em") }}</em>
        </div>
        <div class="convoy-row">
          <b class="convoy-step">{{ $t("convoys.steps.step2") }}</b>
          <span>{{ $t("convoys.uc1.label") }}</span>
          <strong>{{ $t("convoys.uc1.strong") }}</strong>
          <em>{{ $t("convoys.uc1.em") }}</em>
        </div>
        <div class="convoy-row">
          <b class="convoy-step">{{ $t("convoys.steps.step2") }}</b>
          <span>{{ $t("convoys.uc2.label") }}</span>
          <strong>{{ $t("convoys.uc2.strong") }}</strong>
          <em>{{ $t("convoys.uc2.em") }}</em>
        </div>
        <div class="convoy-row convoy-row--wide">
          <b class="convoy-step">{{ $t("convoys.steps.step3") }}</b>
          <span>{{ $t("convoys.uc4.label") }}</span>
          <strong>{{ $t("convoys.uc4.strong") }}</strong>
          <em>{{ $t("convoys.uc4.em") }}</em>
        </div>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>{{ $t("common.why_it_matters") }}</span>
    <p>{{ $t("convoys.panel_desc") }}</p>
    <ul>
      <li>{{ $t("convoys.bullets.step") }}</li>
      <li>{{ $t("convoys.bullets.progress") }}</li>
      <li>{{ $t("convoys.bullets.reference") }}</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">{{ $t("convoys.takeaway") }}</div>
  </div>
</div>

<div v-if="$variant !== 'workshop'" class="live-signal">{{ $t("convoys.live_signal") }}</div>

<!--
Convoys should feel operational, not decorative.
They are the shared handle for distributed delivery.
-->

---

# {{ $t("polecats.heading") }}

<div class="slide-frame slide-frame--polecats">
  <div class="diagram-panel wide">
    <div class="polecat-map">
      <div class="polecat-headings">
        <span>Polecats</span>
        <span>Beads</span>
      </div>
      <div class="polecat-row">
        <div class="polecat-worker">
          <span>😺 furiosa</span>
        </div>
        <div class="polecat-delivery">
          <p>{{ $t("polecats.assignments.furiosa_1") }}<br>{{ $t("polecats.assignments.furiosa_2") }}<br>{{ $t("polecats.assignments.furiosa_3") }}</p>
        </div>
      </div>
      <div class="polecat-row">
        <div class="polecat-worker">
          <span>😺 nux</span>
        </div>
        <div class="polecat-delivery">
          <p>{{ $t("polecats.assignments.nux") }}</p>
        </div>
      </div>
      <div class="polecat-row">
        <div class="polecat-worker">
          <span>😺 slit</span>
        </div>
        <div class="polecat-delivery">
          <p>{{ $t("polecats.assignments.slit_1") }}<br>{{ $t("polecats.assignments.slit_2") }}</p>
        </div>
      </div>
      <div class="polecat-note">
        <span>{{ $t("polecats.flow.request") }}</span>
        <i>↓</i>
        <span>{{ $t("polecats.flow.beads") }}</span>
        <i>↓</i>
        <span>{{ $t("polecats.flow.workers") }}</span>
        <i>↓</i>
        <span>{{ $t("polecats.flow.delivery") }}</span>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>{{ $t("common.why_it_matters") }}</span>
    <p>{{ $t("polecats.panel_desc") }}</p>
    <ul>
      <li>{{ $t("polecats.bullets.spawned") }}</li>
      <li>{{ $t("polecats.bullets.isolated") }}</li>
      <li>{{ $t("polecats.bullets.disappear") }}</li>
      <li>{{ $t("polecats.bullets.parallelism") }}</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">{{ $t("polecats.takeaway") }}</div>
  </div>
</div>

<div v-if="$variant !== 'workshop'" class="live-signal">{{ $t("polecats.live_signal") }}</div>

<!--
This is the "wow" moment, but keep it engineering-oriented.
The claim is throughput through isolated execution.
-->

---

# {{ $t("supervision.heading") }}

<div class="slide-frame slide-frame--balanced">
  <div class="diagram-panel">
      <div class="supervision-map">
      <div class="supervision-layer-label">{{ $t("supervision.hq_label") }}</div>
      <div class="supervision-side-role supervision-side-role--mayor">
        <strong>🏛️ Mayor</strong>
        <p>{{ $t("supervision.mayor") }}</p>
      </div>
      <div class="supervision-card supervision-card--deacon">
        <strong>🐺 Deacon</strong>
        <p>{{ $t("supervision.deacon") }}</p>
      </div>
      <div class="supervision-daemon">⚙️ Daemon<br><small>{{ $t("supervision.daemon") }}</small></div>
      <div class="supervision-hq-support">
        <div class="supervision-card supervision-card--boot">
          <strong>🐕 Boot the Dog</strong>
          <p>{{ $t("supervision.boot") }}</p>
        </div>
        <div class="supervision-card supervision-card--dogs">
          <strong>🐶 Dogs</strong>
          <p>{{ $t("supervision.dogs") }}</p>
        </div>
      </div>
      <div class="supervision-section-gap"></div>
      <div class="supervision-layer-label">{{ $t("supervision.rig_label") }}</div>
      <div class="supervision-side-role supervision-side-role--crew">
        <strong>👥 Crew</strong>
        <p>{{ $t("supervision.crew") }}</p>
      </div>
      <div class="supervision-card supervision-card--witness">
        <strong>🦉 Witness</strong>
        <p>{{ $t("supervision.witness") }}</p>
      </div>
      <div class="supervision-split">
        <div>
          <strong>😺 Polecats</strong>
          <p>{{ $t("supervision.polecats") }}</p>
        </div>
        <div>
          <strong>🏭 Refinery</strong>
          <p>{{ $t("supervision.refinery") }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>{{ $t("common.why_it_matters") }}</span>
    <p>{{ $t("supervision.panel_desc") }}</p>
    <ul>
      <li>{{ $t("supervision.bullets.daemon") }}</li>
      <li>{{ $t("supervision.bullets.deacon") }}</li>
      <li>{{ $t("supervision.bullets.witness") }}</li>
      <li>{{ $t("supervision.bullets.refinery") }}</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">{{ $t("supervision.takeaway") }}</div>
  </div>
</div>

<div v-if="$variant !== 'workshop'" class="live-signal">{{ $t("supervision.live_signal") }}</div>

<!--
Important for DiliTrust: supervision and control are not optional.
This slide turns distributed execution into an operational system.
-->

---
variants: [workshop]
class: workshop-slide workshop-transition
---

# {{ $t("workshop_transition.heading") }}

<p class="workshop-transition-intro">{{ $t("workshop_transition.intro") }}</p>

<div class="workshop-mission-layout">
<div class="workshop-mission-objectives">
  <article>
    <strong>{{ $t("workshop_transition.build.title") }}</strong>
    <p>{{ $t("workshop_transition.build.desc") }}</p>
  </article>
  <article>
    <strong>{{ $t("workshop_transition.control.title") }}</strong>
    <p>{{ $t("workshop_transition.control.desc") }}</p>
  </article>
  <article>
    <strong>{{ $t("workshop_transition.verify.title") }}</strong>
    <p>{{ $t("workshop_transition.verify.desc") }}</p>
  </article>
</div>
<img class="workshop-mission-illustration" :src="'images/workshop-pair-blend.png'" :alt="$t('workshop_transition.image_alt')" />
<aside class="workshop-tmux-tip workshop-mission-tip"><p>{{ $t("workshop_transition.note") }}<br />{{ $t("workshop_transition.roles") }}</p></aside>
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_setup.heading") }}

<div class="workshop-setup-head">
  <p>{{ $t("workshop_setup.lede") }} <a class="workshop-taxiway-link" href="https://taxiway.sh/" target="_blank" rel="noopener noreferrer">taxiway.sh ↗</a></p>
  <span>{{ $t("workshop_setup.duration") }}</span>
</div>

<div class="workshop-setup-prerequisites">
  <strong>{{ $t("workshop_setup.prerequisites_heading") }}</strong>
  <div class="workshop-prerequisite-row">
    <strong>{{ $t("workshop_setup.windows.title") }}</strong>
    <p>{{ $t("workshop_setup.windows.desc") }}</p>
    <a href="https://learn.microsoft.com/windows/wsl/install" target="_blank" rel="noopener noreferrer">WSL2 ↗</a>
  </div>
  <div class="workshop-prerequisite-row">
    <strong>Docker + Lima</strong>
    <p>{{ $t("workshop_setup.runtime_desc") }}</p>
    <div class="workshop-prerequisite-links">
      <a href="https://docs.docker.com/get-started/get-docker/" target="_blank" rel="noopener noreferrer">Docker ↗</a>
      <a href="https://lima-vm.io/docs/installation/" target="_blank" rel="noopener noreferrer">Lima ↗</a>
    </div>
  </div>
</div>

<div class="workshop-lab-commands workshop-setup-commands">
  <section>
    <strong>{{ $t('workshop_setup.install_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_setup.install_context')" content="curl -fsSL https://taxiway.run | sh" />
  </section>
  <section>
    <strong>{{ $t('workshop_setup.init_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_setup.init_context')" content="taxiway init" />
    <CopyCodeBlock row :context="$t('workshop_setup.init_context')" content="taxiway status" />
  </section>
</div>

---
variants: [workshop]
class: workshop-slide workshop-lab-slide
---

# {{ $t("workshop_lab.heading") }}

<p class="workshop-lede">{{ $t("workshop_lab.intro") }}</p>

<div class="workshop-lab-layout">
<div class="workshop-lab-commands">
  <section>
    <strong>{{ $t('workshop_lab.create_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_lab.create_context')" content="taxiway up agile-en-seine --type gastown \
  --repo https://github.com/manufacture-dev/agreement-hub.git \
  --set version=1.1.0 \
  --set beads-version=1.0.3 \
  --set model=claude-opus-4-8" />
  </section>
  <section>
    <strong>{{ $t('workshop_lab.check_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_lab.check_context')" content="taxiway status" />
    <CopyCodeBlock row :context="$t('workshop_lab.check_context')" content="taxiway doctor agile-en-seine" />
  </section>
</div>
<div class="workshop-lab-services">
<div class="workshop-lab-commands">
  <section>
    <strong>{{ $t('workshop_lab.access_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_lab.access_context')" content="taxiway access" />
  </section>
</div>

<div class="workshop-resource-row">
  <p>{{ $t('workshop_lab.observability_note') }}</p>
  <a class="workshop-taxiway-link" href="http://langfuse.localhost:4000" target="_blank" rel="noopener noreferrer">{{ $t('workshop_lab.open_langfuse') }}</a>
</div>
</div>
</div>

<div class="demo-flow">
  <div class="demo-flow-copy">
    <span>{{ $t("workshop_lab.checkpoint_label") }}</span>
    <p>{{ $t("workshop_lab.checkpoint") }}<br />{{ $t("workshop_lab.recovery") }}</p>
  </div>
</div>
---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_app_setup.heading") }}

<div class="workshop-setup-prerequisites workshop-app-prerequisites">
  <strong>{{ $t("workshop_app_setup.prerequisites_heading") }}</strong>
  <div class="workshop-prerequisite-row">
    <strong>Git</strong><p>{{ $t("workshop_app_setup.git_desc") }}</p><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git ↗</a>
  </div>
  <div class="workshop-prerequisite-row">
    <strong>Node.js + npm</strong><p>{{ $t("workshop_app_setup.node_desc") }}</p><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js ↗</a>
  </div>
  <div class="workshop-prerequisite-row">
    <strong>Claude Code</strong><p>{{ $t("workshop_app_setup.claude_desc") }}</p><a href="https://code.claude.com/docs/en/setup#install-claude-code" target="_blank" rel="noopener noreferrer">Claude Code ↗</a>
  </div>
</div>

<p class="workshop-lede">{{ $t("workshop_app_setup.intro") }}</p>

<div class="workshop-lab-commands">
  <section>
    <strong>{{ $t('workshop_app_setup.clone_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_app_setup.clone_context')" content="git clone ~/.taxiway/lab-state/agile-en-seine/git/agreement-hub.git ~/agreement-hub" />
  </section>
</div>

<aside class="workshop-tmux-tip"><p>{{ $t('workshop_app_setup.note') }}</p></aside>

<div class="workshop-app-terminals">
  <div class="workshop-lab-commands">
    <section>
      <strong>{{ $t('workshop_app_setup.backend') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_app_setup.backend')" content="cd ~/agreement-hub/backend" />
      <CopyCodeBlock row :context="$t('workshop_app_setup.backend')" content="npm install" />
      <CopyCodeBlock row :context="$t('workshop_app_setup.backend')" content="npm run dev" />
    </section>
  </div>
  <div class="workshop-lab-commands">
    <section>
      <strong>{{ $t('workshop_app_setup.frontend') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_app_setup.frontend')" content="cd ~/agreement-hub/frontend" />
      <CopyCodeBlock row :context="$t('workshop_app_setup.frontend')" content="npm install" />
      <CopyCodeBlock row :context="$t('workshop_app_setup.frontend')" content="npm run dev" />
    </section>
  </div>
</div>

<div class="workshop-resource-row">
  <p class="workshop-step-note">{{ $t('workshop_app_setup.keep_running') }}</p>
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_app.heading") }}

<div class="app-layout">
  <div class="app-copy">
    <span>Agreement Hub</span>
    <p>{{ $t("workshop_app.desc") }}</p>
    <ul>
      <li>{{ $t("workshop_app.bullets.stack") }}</li>
      <li>{{ $t("workshop_app.bullets.local") }}</li>
      <li>{{ $t("workshop_app.bullets.clean") }}</li>
    </ul>
  </div>
  <div class="app-shot">
    <div class="app-window">
      <img :src="'images/screenshots/agreement-hub-initial.png'" :alt="$t('workshop_app.image_alt')" />
    </div>
  </div>
</div>

<div class="demo-flow">
  <div class="demo-flow-copy">
    <span>{{ $t("workshop_app.flow_label") }}</span>
    <p>{{ $t("workshop_app.flow_start") }}<br />{{ $t("workshop_app.flow_next") }}</p>
  </div>
  <a class="app-open-link" href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">{{ $t("workshop_app.open_app") }}</a>
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_seed.heading") }}

<p class="workshop-lede">{{ $t("workshop_seed.intro") }}</p>

<div class="workshop-verify-grid workshop-seed-layout">
  <div class="workshop-lab-commands">
    <section>
      <strong>{{ $t('workshop_seed.install') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_seed.install')" content="npm install -g agent-browser" />
      <CopyCodeBlock row context="macOS" content="agent-browser install" />
      <CopyCodeBlock row context="Linux / WSL2" content="agent-browser install --with-deps" />
    </section>
    <p class="workshop-step-note">{{ $t('workshop_seed.platform') }}</p>
    <section>
      <strong>{{ $t('workshop_seed.launch') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_seed.launch')" content="cd ~/agreement-hub" />
      <CopyCodeBlock row :context="$t('workshop_seed.launch')" content="npx skills add vercel-labs/agent-browser" />
      <CopyCodeBlock row :context="$t('workshop_seed.launch')" content="claude" />
    </section>
    <p class="workshop-step-note">{{ $t('workshop_seed.skill_note') }}</p>
  </div>
  <CopyCodeBlock language="prompt" :context="$t('workshop_seed.prompt_context')" :recipient="$t('workshop_seed.recipient')" source="workshop-seed" />
</div>

---
variants: [workshop]
class: workshop-slide workshop-tmux-slide
---

# {{ $t("workshop_tmux.heading") }}

<div class="workshop-tmux-pairs">
<div class="workshop-lab-commands">
  <aside class="workshop-record-option">
    <strong>{{ $t('workshop_record.start') }}</strong>
    <p>{{ $t('workshop_record.start_note') }}</p>
    <CopyCodeBlock row :context="$t('workshop_record.start')" content="taxiway record start agile-en-seine" />
  </aside>
  <section>
    <strong>{{ $t('workshop_tmux.enter_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_tmux.enter_context')" content="taxiway shell agile-en-seine" />
  </section>
  <section>
    <strong>{{ $t('workshop_lab.health_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_lab.health_context')" content="gt doctor" />
    <CopyCodeBlock row :context="$t('workshop_lab.health_context')" content="gt status" />
  </section>
  <section>
    <strong>{{ $t('workshop_tmux.attach_context') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_tmux.attach_context')" content="gt mayor attach" />
  </section>
  <p class="workshop-lab-entry">{{ $t('workshop_tmux.attach_note') }}</p>
</div>

<div class="workshop-tmux-sidebar">
<p class="workshop-lede">{{ $t("workshop_tmux.intro") }}</p>
<div class="tmux-levels">
  <section>
    <span>{{ $t("workshop_tmux.current_label") }}</span>
    <div><span class="tmux-keys" aria-label="Ctrl+b s"><kbd>Ctrl</kbd><span>+</span><kbd>b</kbd><span>→</span><kbd>s</kbd></span><p>{{ $t("workshop_tmux.select_current") }}</p></div>
    <div><span class="tmux-keys" aria-label="Ctrl+b d"><kbd>Ctrl</kbd><span>+</span><kbd>b</kbd><span>→</span><kbd>d</kbd></span><p>{{ $t("workshop_tmux.detach_current") }}</p></div>
  </section>
  <aside class="workshop-tmux-tip"><p>{{ $t("workshop_tmux.tip") }}</p></aside>
</div>

<div class="tmux-levels">
  <section class="tmux-levels__nested">
    <span>{{ $t("workshop_tmux.nested_label") }}</span>
    <div><span class="tmux-keys" aria-label="Ctrl+b Ctrl+b s"><kbd>Ctrl</kbd><span>+</span><kbd>b</kbd><span>→</span><kbd>Ctrl</kbd><span>+</span><kbd>b</kbd><span>→</span><kbd>s</kbd></span><p>{{ $t("workshop_tmux.select_nested") }}</p></div>
    <div><span class="tmux-keys" aria-label="Ctrl+b Ctrl+b d"><kbd>Ctrl</kbd><span>+</span><kbd>b</kbd><span>→</span><kbd>Ctrl</kbd><span>+</span><kbd>b</kbd><span>→</span><kbd>d</kbd></span><p>{{ $t("workshop_tmux.detach_nested") }}</p></div>
  </section>
  <aside class="workshop-tmux-tip"><p>{{ $t("workshop_tmux.tip_nested") }}</p></aside>
</div>
<div class="workshop-tmux-help">
<div class="workshop-resource-row workshop-tmux-links">
  <div>
    <a href="https://github.com/tmux/tmux/wiki/Getting-Started#the-prefix-key" target="_blank" rel="noopener noreferrer">{{ $t("workshop_tmux.guide") }}</a>
    <a href="https://tmuxcheatsheet.com/" target="_blank" rel="noopener noreferrer">{{ $t("workshop_tmux.cheatsheet") }}</a>
  </div>
</div>
</div>
</div>
</div>


---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_contract.heading") }}

<div class="workshop-step-layout">
  <div class="workshop-step-copy">
    <p>{{ $t("workshop_contract.intro") }}</p>
    <div class="workshop-checkpoint workshop-checkpoint--inline">
      <span>{{ $t("workshop_contract.checkpoint_label") }}</span>
      <p>{{ $t("workshop_contract.checkpoint") }}</p>
    </div>
  </div>
  <CopyCodeBlock
    language="prompt"
    :context="$t('workshop_contract.prompt_context')"
    recipient="Mayor"
    source="workshop-contract"
  />
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_first.heading") }}

<p class="workshop-lede">{{ $t("workshop_first.intro") }}</p>

<div class="workshop-step-layout workshop-step-layout--commands">
  <div class="workshop-step-copy">
    <div class="workshop-lab-commands">
      <section>
        <strong>{{ $t('workshop_first.attach_context') }}</strong>
        <CopyCodeBlock row :context="$t('workshop_first.attach_context')" content="gt mayor attach" />
      </section>
    </div>
    <div class="workshop-checkpoint workshop-checkpoint--inline">
      <span>{{ $t("workshop_first.target_label") }}</span>
      <p>{{ $t("workshop_first.target") }}</p>
    </div>
  </div>
  <CopyCodeBlock
    language="prompt"
    :context="$t('workshop_first.prompt_context')"
    recipient="Mayor"
    source="workshop-first-increment"
  />
</div>

<p class="workshop-step-note workshop-step-note--bottom">{{ $t("workshop_first.checkpoint") }}</p>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_observe.heading") }}

<p class="workshop-lede">{{ $t("workshop_observe.intro") }}</p>

<div class="workshop-command-grid workshop-command-grid--observe">
  <CopyCodeBlock
    language="prompt"
    :context="$t('workshop_observe.go_context')"
    recipient="Mayor"
    content="GO"
  />
  <div class="workshop-lab-commands">
    <section>
      <strong>{{ $t('workshop_observe.observe_context') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_observe.observe_context')" content="bd list --all --flat" />
      <CopyCodeBlock row :context="$t('workshop_observe.observe_context')" content="bd ready" />
      <CopyCodeBlock row :context="$t('workshop_observe.observe_context')" content="bd show <bead_id>" />
      <CopyCodeBlock row :context="$t('workshop_observe.observe_context')" content="gt convoy list --all" />
      <CopyCodeBlock row :context="$t('workshop_observe.observe_context')" content="gt convoy status <convoy_id>" />
      <CopyCodeBlock row :context="$t('workshop_observe.observe_context')" content="gt status" />
    </section>
    <i18n-t keypath="workshop_observe.ids_note" scope="global" tag="p" class="workshop-command-hint workshop-step-note">
      <template #bead><code>bead_id</code></template>
      <template #convoy><code>convoy_id</code></template>
    </i18n-t>
  </div>
</div>

<div class="demo-flow">
  <div class="demo-flow-copy">
    <span>{{ $t("workshop_observe.checkpoint_label") }}</span>
    <p>{{ $t("workshop_observe.checkpoint") }}<br />{{ $t("workshop_observe.switch_roles") }}</p>
  </div>
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_parallel.heading") }}

<div class="workshop-step-layout">
  <div class="workshop-step-copy">
    <p>{{ $t("workshop_parallel.intro") }}</p>
    <div class="workshop-checkpoint workshop-checkpoint--inline">
      <span>{{ $t("workshop_parallel.streams_label") }}</span>
      <p>{{ $t("workshop_parallel.first_stream") }}<br />{{ $t("workshop_parallel.second_stream") }}</p>
    </div>
  </div>
  <CopyCodeBlock
    language="prompt"
    :context="$t('workshop_parallel.prompt_context')"
    recipient="Mayor"
    source="workshop-parallel"
  />
</div>

<p class="workshop-step-note workshop-step-note--bottom">{{ $t("workshop_parallel.rule") }}</p>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_parallel_observe.heading") }}

<p class="workshop-lede">{{ $t("workshop_parallel_observe.intro") }}</p>

<div class="workshop-step-layout workshop-step-layout--commands">
  <div class="workshop-lab-commands">
    <section>
      <strong>{{ $t('workshop_parallel_observe.commands_context') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_parallel_observe.commands_context')" content="gt status" />
      <CopyCodeBlock row :context="$t('workshop_parallel_observe.commands_context')" content="bd list --all --flat" />
      <CopyCodeBlock row :context="$t('workshop_parallel_observe.commands_context')" content="bd ready" />
      <CopyCodeBlock row :context="$t('workshop_parallel_observe.commands_context')" content="gt convoy list --all" />
      <CopyCodeBlock row :context="$t('workshop_parallel_observe.commands_context')" content="gt refinery queue agreement_hub" />
      <CopyCodeBlock row :context="$t('workshop_parallel_observe.commands_context')" content="gt mail inbox" />
    </section>
  </div>
  <div class="workshop-observation-list">
    <strong>{{ $t("workshop_parallel_observe.checkpoint_label") }}</strong>
    <p>{{ $t("workshop_parallel_observe.beads") }}</p>
    <p>{{ $t("workshop_parallel_observe.polecats") }}</p>
    <p>{{ $t("workshop_parallel_observe.convoys") }}</p>
    <p>{{ $t("workshop_parallel_observe.refinery") }}</p>
  </div>
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_stabilize.heading") }}

<p class="workshop-lede">{{ $t("workshop_stabilize.intro") }}</p>

<div class="workshop-command-grid">
  <CopyCodeBlock
    language="prompt"
    :context="$t('workshop_stabilize.prompt_context')"
    recipient="Mayor"
    source="workshop-stabilize"
  />
  <div class="workshop-lab-commands">
    <section>
      <strong>{{ $t('workshop_stabilize.commands_context') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_stabilize.commands_context')" content="gt convoy list --all" />
      <CopyCodeBlock row :context="$t('workshop_stabilize.commands_context')" content="bd list --all --flat" />
      <CopyCodeBlock row :context="$t('workshop_stabilize.commands_context')" content="gt refinery queue agreement_hub" />
    </section>
    <section>
      <strong>{{ $t('workshop_stabilize.diagnostics_context') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_stabilize.commands_context')" content="gt refinery status agreement_hub" />
      <CopyCodeBlock row :context="$t('workshop_stabilize.commands_context')" content="gt witness status agreement_hub" />
      <CopyCodeBlock row :context="$t('workshop_stabilize.commands_context')" content="gt dolt status" />
      <CopyCodeBlock row :context="$t('workshop_stabilize.commands_context')" content="gt status" />
    </section>
  </div>
</div>

<div class="workshop-checkpoint">
  <span>{{ $t("workshop_stabilize.checkpoint_label") }}</span>
  <p>{{ $t("workshop_stabilize.checkpoint") }}</p>
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_stop.heading") }}

<p class="workshop-lede">{{ $t("workshop_stop.intro") }}</p>

<div class="workshop-app-terminals">
  <div class="workshop-lab-commands">
    <p class="workshop-step-note">{{ $t('workshop_stop.lab_note') }}</p>
    <section>
      <strong>{{ $t('workshop_stop.agents') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_stop.agents')" content="gt estop" />
    </section>
  </div>
  <div class="workshop-lab-commands">
    <p class="workshop-step-note">{{ $t('workshop_stop.host_note') }}</p>
    <section>
      <strong>{{ $t('workshop_stop.recording') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_stop.recording')" content="taxiway record stop agile-en-seine --latest" />
    </section>
  </div>
</div>

<div class="workshop-record-option workshop-lab-commands">
  <strong>{{ $t('workshop_stop.later') }}</strong>
  <p>{{ $t('workshop_stop.later_note') }}</p>
  <section>
    <strong>{{ $t('workshop_stop.replay') }}</strong>
    <CopyCodeBlock row :context="$t('workshop_stop.replay')" content="taxiway record player agile-en-seine" />
  </section>
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_analysis.heading") }}

<p class="workshop-lede">{{ $t("workshop_analysis.intro") }}</p>

<div class="workshop-verify-grid workshop-seed-layout">
  <div class="workshop-lab-commands">
    <section>
      <strong>{{ $t('workshop_analysis.launch') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_analysis.launch')" content="cd ~/agreement-hub" />
      <CopyCodeBlock row :context="$t('workshop_analysis.launch')" content="claude" />
    </section>
    <p class="workshop-step-note">{{ $t('workshop_analysis.session_note') }}</p>
    <div class="workshop-checkpoint workshop-checkpoint--inline">
      <span>{{ $t('workshop_analysis.return_label') }}</span>
      <p>{{ $t('workshop_analysis.return_note') }}</p>
    </div>
    <p class="workshop-step-note">{{ $t('workshop_analysis.cost_note') }}</p>
  </div>
  <CopyCodeBlock language="prompt" :context="$t('workshop_analysis.prompt_context')" :recipient="$t('workshop_analysis.recipient')" source="workshop-analysis" />
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_verify.heading") }}

<p class="workshop-lede">{{ $t("workshop_verify.intro") }}</p>

<div class="workshop-verify-grid">
  <div>
    <p class="workshop-step-note">{{ $t('workshop_verify.stop_note') }}</p>
    <div class="workshop-lab-commands">
      <section>
        <strong>{{ $t('workshop_verify.update_context') }}</strong>
        <CopyCodeBlock row :context="$t('workshop_verify.update_context')" content="cd ~/agreement-hub" />
        <CopyCodeBlock row :context="$t('workshop_verify.update_context')" content="git fetch" />
        <CopyCodeBlock row :context="$t('workshop_verify.update_context')" content="git rebase" />
      </section>
    </div>
    <div class="workshop-lab-commands">
      <section>
        <strong>{{ $t('workshop_verify.run_context') }}</strong>
        <CopyCodeBlock row :context="$t('workshop_verify.run_context')" content="npm --prefix backend install" />
        <CopyCodeBlock row :context="$t('workshop_verify.run_context')" content="npm --prefix frontend install" />
      </section>
    </div>
    <p class="workshop-step-note">{{ $t('workshop_verify.restart_note') }}</p>
  </div>
  <div>
    <div class="workshop-checkpoint workshop-checkpoint--inline">
      <span>{{ $t('workshop_verify.manual_label') }}</span>
      <p>{{ $t('workshop_verify.manual_contracts') }}</p>
      <p>{{ $t('workshop_verify.manual_features') }}</p>
      <p>{{ $t('workshop_verify.manual_save') }}</p>
    </div>
    <div class="workshop-resource-row"><a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">{{ $t('workshop_app.open_app') }}</a></div>
  </div>
</div>

<div class="workshop-checkpoint workshop-checkpoint--compact">
  <span>{{ $t("workshop_verify.checkpoint_label") }}</span>
  <p>{{ $t("workshop_verify.checkpoint") }}</p>
</div>

---
variants: [workshop]
class: workshop-slide
---

# {{ $t("workshop_functional.heading") }}

<p class="workshop-lede">{{ $t("workshop_functional.intro") }}</p>

<div class="workshop-verify-grid workshop-seed-layout">
  <div class="workshop-lab-commands">
    <section>
      <strong>{{ $t('workshop_functional.launch') }}</strong>
      <CopyCodeBlock row :context="$t('workshop_functional.launch')" content="cd ~/agreement-hub" />
      <CopyCodeBlock row :context="$t('workshop_functional.launch')" content="claude" />
    </section>
    <p class="workshop-step-note">{{ $t('workshop_verify.agent_note') }}</p>
    <div class="workshop-checkpoint workshop-checkpoint--inline">
      <span>{{ $t('workshop_functional.expected') }}</span>
      <p>{{ $t('workshop_functional.report') }}</p>
    </div>
    <p class="workshop-step-note">{{ $t('workshop_functional.return_note') }}</p>
  </div>
  <CopyCodeBlock language="prompt" :context="$t('workshop_verify.agent_context')" :recipient="$t('workshop_verify.recipient')" source="workshop-verify" />
</div>

---
variants: [full, short]
---

# {{ $t("verification.heading") }}

<div class="app-layout app-layout--verification">
  <div class="app-copy">
    <span>{{ $t("verification.copy_label") }}</span>
    <p>{{ $t("verification.desc") }}</p>
    <ul>
      <li>{{ $t("verification.bullets.not_deployed") }}</li>
      <li>{{ $t("verification.bullets.clone") }}</li>
      <li>{{ $t("verification.bullets.run") }}</li>
    </ul>
    <p class="inspection-question">{{ $t("verification.question") }}</p>
  </div>
  <div class="checkpoint-list">
    <strong>{{ $t("verification.checkpoints.title") }}</strong>
    <span class="is-checked">{{ $t("verification.checkpoints.clause_generator") }} <i></i></span>
    <span class="is-checked">{{ $t("verification.checkpoints.risk_reviewer") }} <i></i></span>
    <span>{{ $t("verification.checkpoints.approval_workflow") }} <i></i></span>
    <span>{{ $t("verification.checkpoints.search") }} <i></i></span>
    <span>{{ $t("verification.checkpoints.library") }} <i></i></span>
  </div>
</div>

<div class="demo-flow demo-flow--verification">
  <div class="demo-flow-copy">
    <span>{{ $t("verification.flow_label") }}</span>
    <p>{{ $t("verification.flow_start") }}<br />{{ $t("verification.flow_next") }}</p>
  </div>
  <a class="app-open-link" href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">{{ $t("demo.open_app") }}</a>
</div>

<!--
Switch to the browser and slow down.
The audience must see that Agreement Hub changed because Gas Town delivered code.
-->

---
variants: [full, workshop]
---

# {{ $t("formulas.heading") }}

<div class="formula-slide">
  <div class="formula-left">
    <div class="formula-intro">
      <span>Formula</span>
      <p>{{ $t("formulas.intro") }}</p>
    </div>
    <div class="formula-example">
      <h2>{{ $t("formulas.example_label") }}</h2>
      <strong>mol-idea-to-plan</strong>
      <p>{{ $t("formulas.example_desc") }}</p>
      <a href="https://github.com/gastownhall/gastown/blob/v1.1.0/internal/formula/formulas/mol-idea-to-plan.formula.toml" target="_blank" rel="noopener noreferrer">{{ $t("formulas.open_link") }}</a>
    </div>
    <div class="takeaway-box takeaway-box--inline formula-takeaway">{{ $t("formulas.takeaway") }}</div>
  </div>
  <div class="formula-workflow">
    <div class="formula-step formula-workflow--human">
      <span>{{ $t("formulas.steps.idea.label") }}</span>
      <p>{{ $t("formulas.steps.idea.desc") }}</p>
    </div>
    <div class="formula-step">
      <span>{{ $t("formulas.steps.intake.label") }}</span>
      <p>{{ $t("formulas.steps.intake.desc") }}</p>
    </div>
    <div class="formula-step formula-workflow--parallel">
      <span>{{ $t("formulas.steps.prd_review.label") }}</span>
      <p>{{ $t("formulas.steps.prd_review.desc") }}</p>
    </div>
    <div class="formula-step formula-workflow--human">
      <span>{{ $t("formulas.steps.human_clarify.label") }}</span>
      <p>{{ $t("formulas.steps.human_clarify.desc") }}</p>
    </div>
    <div class="formula-step formula-workflow--parallel">
      <span>{{ $t("formulas.steps.generate_plan.label") }}</span>
      <p>{{ $t("formulas.steps.generate_plan.desc") }}</p>
    </div>
    <div class="formula-step">
      <span>{{ $t("formulas.steps.prd_align.label") }}</span>
      <p>{{ $t("formulas.steps.prd_align.desc") }}</p>
    </div>
    <div class="formula-step">
      <span>{{ $t("formulas.steps.plan_review.label") }}</span>
      <p>{{ $t("formulas.steps.plan_review.desc") }}</p>
    </div>
    <div class="formula-step">
      <span>{{ $t("formulas.steps.create_beads.label") }}</span>
      <p>{{ $t("formulas.steps.create_beads.desc") }}</p>
    </div>
    <div class="formula-step">
      <span>{{ $t("formulas.steps.verify_beads.label") }}</span>
      <p>{{ $t("formulas.steps.verify_beads.desc") }}</p>
    </div>
  </div>
</div>

<!--
Use this slide after the live proof to show how the model can become reusable.
The mol-idea-to-plan formula is the concrete example: vague idea to reviewed plan to beads.
-->

---

# {{ $t("synthesis.heading") }}

<div class="synthesis-flow">
  <div class="synthesis-head">
    <div>
      <span>{{ $t("synthesis.problem_label") }}</span>
      <strong>{{ $t("synthesis.problem") }}</strong>
    </div>
    <div>
      <span>{{ $t("synthesis.response_label") }}</span>
      <strong>{{ $t("synthesis.response") }}</strong>
    </div>
  </div>

  <div class="synthesis-row">
    <span>01</span>
    <div class="synthesis-problem">
      <strong>{{ $t("break.cards.context.title") }}</strong>
      <p>{{ $t("break.cards.context.desc") }}</p>
    </div>
    <em>{{ $t("synthesis.rows.context") }}</em>
  </div>
  <div class="synthesis-row">
    <span>02</span>
    <div class="synthesis-problem">
      <strong>{{ $t("break.cards.sequential.title") }}</strong>
      <p>{{ $t("break.cards.sequential.desc") }}</p>
    </div>
    <em>{{ $t("synthesis.rows.sequential") }}</em>
  </div>
  <div class="synthesis-row">
    <span>03</span>
    <div class="synthesis-problem">
      <strong>{{ $t("break.cards.coordination.title") }}</strong>
      <p>{{ $t("break.cards.coordination.desc") }}</p>
    </div>
    <em>{{ $t("synthesis.rows.coordination") }}</em>
  </div>
  <div class="synthesis-row">
    <span>04</span>
    <div class="synthesis-problem">
      <strong>{{ $t("break.cards.merge.title") }}</strong>
      <p>{{ $t("break.cards.merge.desc") }}</p>
    </div>
    <em>{{ $t("synthesis.rows.merge") }}</em>
  </div>
  <div class="synthesis-row">
    <span>05</span>
    <div class="synthesis-problem">
      <strong>{{ $t("break.cards.supervision.title") }}</strong>
      <p>{{ $t("break.cards.supervision.desc") }}</p>
    </div>
    <em>{{ $t("synthesis.rows.supervision") }}</em>
  </div>
</div>

<!--
This closes the conceptual loop with the exact five problems introduced earlier.
-->

---

# {{ $t("thanks.heading") }}

## {{ $t("thanks.subheading") }}

<div class="question-block">
  <span>{{ $t("thanks.examples_label") }}</span>
  <p>{{ $t("thanks.questions.cost") }}</p>
  <p>{{ $t("thanks.questions.control") }}</p>
  <p>{{ $t("thanks.questions.crew") }}</p>
</div>

<!--
Final slide for Q&A.
Keep it quiet. Do not add new concepts.
-->

---
variants: [workshop]
class: workshop-slide aes-feedback-slide
---

# {{ $t("aes_feedback.kicker") }}

<div class="aes-feedback-layout">
  <div>
    <h2 class="aes-feedback-subheading">{{ $t("aes_feedback.heading") }}</h2>
    <i18n-t keypath="aes_feedback.intro" scope="global" tag="p" class="aes-feedback-intro">
      <template #app><strong>TingEvent</strong></template>
    </i18n-t>
    <ol class="aes-feedback-steps">
      <li>{{ $t("aes_feedback.steps.open") }}</li>
      <li>{{ $t("aes_feedback.steps.find") }}</li>
      <li>{{ $t("aes_feedback.steps.rate") }}</li>
    </ol>
  </div>
  <div class="aes-feedback-phone">
    <div class="aes-feedback-phone-screen"></div>
    <img class="aes-feedback-phone-logo" :src="'images/agile-en-seine/tingevent.png'" alt="TingEvent" />
    <span class="aes-feedback-phone-session">{{ $t("aes_feedback.session") }}</span>
    <span class="aes-feedback-phone-stars">★ ★ ★ ★ ★</span>
    <span class="aes-feedback-phone-rate">{{ $t("aes_feedback.rate") }}</span>
  </div>
</div>

<img class="aes-event-logo" :src="'images/agile-en-seine/event-logo-white.png'" alt="Agile en Seine & IA" />

<!--
Source: Template_AESIA_2026_erratum.pptx, slide 10, provided by the organizers.
https://docs.google.com/presentation/d/1B-g804N3BMTrr-1yCUjOD-iK_Gu7SZoQ/edit
Original wording and assets; phone recreated from the template's shapes and coordinates.
The phone's rating label is illustrative, not a working button. No confirmed QR/link is supplied.
Keep this as the final slide, after thanks and questions.
-->
