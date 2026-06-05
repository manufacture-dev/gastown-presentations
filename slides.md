---
theme: the-unnamed
addons:
  - slidev-addon-i18nb
title: Gastown - Organizing AI-native software delivery
titleTemplate: '%s'
info: |
  Gastown organizes AI-native software delivery. Live implementation on Agreement Hub.
class: text-left
drawings:
  persist: false
presenter: true
routerMode: hash
transition: fade
mdc: true
---

# {{ $t("title.heading") }}

<p class="lede">{{ $talk("event") }}</p>

<div class="title-meta">
<div class="byline">{{ $t("title.byline") }}</div>

<div class="event-date">{{ $talkDate() }}</div>
</div>

<div class="title-tags">
  <span>{{ $t("title.tags.ai_native") }}</span>
  <span>{{ $t("title.tags.distributed") }}</span>
  <span>{{ $t("title.tags.orchestration") }}</span>
  <span>{{ $t("title.tags.supervised") }}</span>
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
        <strong><a href="https://github.com/gastownhall/gastown" target="_blank" rel="noopener noreferrer">Gastown</a></strong>
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
      <span>Town</span>
      <strong>{{ $t("gastown.town.strong") }}</strong>
      <p>{{ $t("gastown.town.desc") }}</p>
    </div>
    <div class="town-rail"></div>
    <div class="town-node">
      <span>Mayor</span>
      <strong>{{ $t("gastown.mayor.strong") }}</strong>
      <p>{{ $t("gastown.mayor.desc") }}</p>
    </div>
    <div class="town-node">
      <span>Rigs</span>
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
- Launch Gastown.
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
The audience should understand why Gastown exists before we introduce roles.
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

<div class="live-signal">{{ $t("organizes.live_signal") }}</div>

<!--
Use this slide to position Gastown as an AI-native delivery organization.
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

<div class="live-signal">{{ $t("organization.live_signal") }}</div>

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

<div class="live-signal">{{ $t("beads.live_signal") }}</div>

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

<div class="live-signal">{{ $t("convoys.live_signal") }}</div>

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

<div class="live-signal">{{ $t("polecats.live_signal") }}</div>

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

<div class="live-signal">{{ $t("supervision.live_signal") }}</div>

<!--
Important for DiliTrust: supervision and control are not optional.
This slide turns distributed execution into an operational system.
-->

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
The audience must see that Agreement Hub changed because Gastown delivered code.
-->

---
variants: [full]
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
