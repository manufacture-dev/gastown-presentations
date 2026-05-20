---
theme: the-unnamed
title: Organizing AI-native software delivery with Gastown
info: |
  Gastown organizes AI-native software delivery. Live implementation on Agreement Hub.
class: text-left
drawings:
  persist: false
presenter: true
transition: fade
mdc: true
---

# Organizing AI-native software delivery with Gastown

<p class="lede">DiliTrust TechDay</p>

<div class="title-meta">
<div class="byline">Jean-Louis Rigau & Emmanuel Sciara</div>

<div class="event-date">Thursday, May 21, 2026</div>
</div>

<div class="title-tags">
  <span>#AI-native engineering</span>
  <span>#Distributed delivery</span>
  <span>#Agent orchestration</span>
  <span>#Supervised execution</span>
</div>

<!--
Open on the model, not the tooling.
This is not "AI coding faster"; it is how delivery gets organized when AI workers become part of the engineering system.
-->

---

# Speakers

<div class="speakers-slide">
  <article class="speaker-card">
    <figure class="speaker-photo speaker-photo--jean">
      <img src="./public/images/speakers/jlrigau.jpg" alt="Jean-Louis Rigau" />
    </figure>
    <div>
      <span>Speaker</span>
      <h2>Jean-Louis Rigau</h2>
      <p>Engineering and AI-native transformation advisor. Helps organizations modernize platforms, delivery practices, product operating models and agentic workflows.</p>
      <div class="speaker-link">
        <img src="./public/images/speakers/jlrigau-linkedin-qr.png" alt="QR code for Jean-Louis Rigau LinkedIn profile" />
        <a href="https://www.linkedin.com/in/jlrigau/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jlrigau</a>
      </div>
    </div>
  </article>
  <article class="speaker-card">
    <figure class="speaker-photo speaker-photo--emmanuel">
      <img src="./public/images/speakers/emmanuelsciara.jpg" alt="Emmanuel Sciara" />
    </figure>
    <div>
      <span>Speaker</span>
      <h2>Emmanuel Sciara</h2>
      <p>Agent Lead and AI-native Engineer. Works on strategy, deployment and coaching of coding agents, with hands-on Claude Code and developer enablement.</p>
      <div class="speaker-link">
        <img src="./public/images/speakers/emmanuelsciara-linkedin-qr.png" alt="QR code for Emmanuel Sciara LinkedIn profile" />
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

# The 8 stages of AI development practice

<div class="evolution-slide">
  <div class="evolution-ladder">
    <div><span>1</span><img src="./public/images/ai-evolution/stage-01.webp" alt="" /><p>Zero or near-zero AI</p></div>
    <div><span>2</span><img src="./public/images/ai-evolution/stage-02.webp" alt="" /><p>IDE assistant with permissions</p></div>
    <div><span>3</span><img src="./public/images/ai-evolution/stage-03.webp" alt="" /><p>IDE agent in YOLO mode</p></div>
    <div><span>4</span><img src="./public/images/ai-evolution/stage-04.webp" alt="" /><p>Wide agent inside the IDE</p></div>
    <div><span>5</span><img src="./public/images/ai-evolution/stage-05.webp" alt="" /><p>Single CLI coding agent</p></div>
    <div><span>6</span><img src="./public/images/ai-evolution/stage-06.webp" alt="" /><p>Multi-agent CLI workflow</p></div>
    <div><span>7</span><img src="./public/images/ai-evolution/stage-07.webp" alt="" /><p>10+ agents, hand-managed</p></div>
    <div><span>8</span><img src="./public/images/ai-evolution/stage-08.webp" alt="" /><p>Building an orchestrator</p></div>
  </div>
  <div class="evolution-copy">
    <span>Practice shift</span>
    <p class="creator-lede">The shift is from asking an assistant to operating a delivery system.</p>
    <ul>
      <li>Early stages improve individual flow.</li>
      <li>Middle stages increase throughput with CLI agents.</li>
      <li>Late stages create a coordination problem.</li>
      <li>Gastown appears when hand-management stops scaling.</li>
    </ul>
  </div>
  <div class="takeaway-box takeaway-box--inline evolution-takeaway">AI development evolves from individual assistance to organizational coordination.</div>
</div>

<!--
Inspired by Steve Yegge's "The 8 Stages of Dev Evolution To AI" framing.
Use this as the bridge from personal AI practice to organizational orchestration.
-->

---

# Steve Yegge

<div class="creator-slide">
  <figure class="creator-photo">
    <img src="./public/images/steve-yegge.jpg" alt="Steve Yegge" />
  </figure>
  <div class="creator-copy">
    <span>From practice to organization</span>
    <p class="creator-lede">Steve Yegge frames the shift from individual AI coding to AI-native software delivery.</p>
    <div class="creator-bridge">
      <div>
        <strong><em><a href="https://itrevolution.com/product/vibe-coding-book/" target="_blank" rel="noopener noreferrer">Vibe Coding</a></em></strong>
        <p>Production-grade software with AI coding agents.</p>
      </div>
      <div>
        <strong><a href="https://github.com/gastownhall/gastown" target="_blank" rel="noopener noreferrer">Gastown</a></strong>
        <p>An operating model for coordinating many agents around real repositories.</p>
      </div>
      <div>
        <strong><a href="https://github.com/gastownhall/beads" target="_blank" rel="noopener noreferrer">Beads</a></strong>
        <p>A Git-backed work ledger for agentic engineering workflows.</p>
      </div>
    </div>
  </div>
  <figure class="book-cover">
    <img src="./public/images/vibe-coding-cover.jpg" alt="Vibe Coding book cover" />
  </figure>
</div>

<!--
Use this slide to ground the story in Steve Yegge's work before introducing the delivery problem.
Keep it short: creator, book, why it matters for the model.
-->

---

# Gastown: a town-shaped delivery system

<div class="gastown-intro">
  <div class="town-map">
    <div class="town-node town-node--main">
      <span>Town</span>
      <strong>Agent headquarters</strong>
      <p>A separate operating space where orchestration, identity, mail, and work tracking live.</p>
    </div>
    <div class="town-rail"></div>
    <div class="town-node">
      <span>Mayor</span>
      <strong>Chief of staff</strong>
      <p>The front door: absorbs worker noise and turns intent into coordinated work.</p>
    </div>
    <div class="town-node">
      <span>Rigs</span>
      <strong>Project factories</strong>
      <p>Polecats, Crew, Witness and Refinery operate around real repositories.</p>
    </div>
  </div>
  <div class="gastown-copy">
    <span>Town as operating model</span>
    <p class="creator-lede">Gastown makes vibe coding operational without pretending the chaos disappears.</p>
    <ul>
      <li>Many coding agents become first-class workers with visible identities.</li>
      <li>Beads provide the Git-backed ledger for work, memory, mail, and provenance.</li>
      <li>Convoys track delivery streams; Polecats execute the work.</li>
      <li>Witness and Refinery keep the system from turning into merge chaos.</li>
    </ul>
  </div>
  <div class="takeaway-box takeaway-box--inline gastown-takeaway">Gastown turns agentic coding into observable, coordinated software delivery.</div>
</div>

<!--
Use this slide as the atmosphere and vocabulary bridge before the problem slide.
The story: Gas Town starts from vibe-coding chaos, then adds city-like operating roles so delivery can be supervised.
-->

---

# Demo application

<div class="app-layout">
  <div class="app-copy">
    <span>Agreement Hub</span>
    <p>A CRUD Contract Lifecycle Management application used as a realistic delivery target.</p>
    <ul>
      <li>Stack: React/Vite frontend, Express/TypeScript backend, SQLite database.</li>
      <li>Gastown works on a forked repository, so the demo starts from a clean baseline.</li>
      <li>The demo is real: the outcome may differ from the initial plan.</li>
    </ul>
  </div>
  <div class="app-shot">
    <div class="app-window">
      <img src="./public/images/screenshots/agreement-hub-initial.png" alt="Agreement Hub initial state" />
    </div>
  </div>
</div>

<div class="demo-flow">
  <div class="demo-flow-copy">
    <span>Demo flow</span>
    <p>Start the demo loop: open Agreement Hub → show current state → ask the Mayor.<br />From here, each Live Signal marks what to observe next.</p>
  </div>
  <a class="app-open-link" href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">Open app ↗</a>
</div>

<!--
LIVE START:
- Launch Gastown.
- Present Agreement Hub in the browser.
- Ask the Mayor for the first implementation step.
Contract: the deck explains, the terminal works, the app proves.
-->

---

# Why single-agent workflows break

<div class="slide-frame slide-frame--balanced">
  <div class="diagram-panel wide">
    <div class="single-agent-map">
      <div class="single-agent-core">
        <span>Single agent</span>
        <strong>Great local assistant</strong>
        <p>One context, one thread of execution, one working branch.</p>
      </div>
      <div class="break-card">
        <span>01</span>
        <strong>Context saturation</strong>
        <p>Important constraints disappear as the session grows.</p>
      </div>
      <div class="break-card">
        <span>02</span>
        <strong>Sequential execution</strong>
        <p>Throughput is bounded by one worker loop.</p>
      </div>
      <div class="break-card">
        <span>03</span>
        <strong>No coordination layer</strong>
        <p>Dependencies and ownership stay implicit.</p>
      </div>
      <div class="break-card">
        <span>04</span>
        <strong>Merge pressure</strong>
        <p>Parallel changes become hard to integrate safely.</p>
      </div>
      <div class="break-card">
        <span>05</span>
        <strong>No operational supervision</strong>
        <p>Stuck work is difficult to observe and recover.</p>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>Problem</span>
    <p>AI coding works locally, but software delivery is organizational.</p>
    <ul>
      <li>Context windows do not model dependencies.</li>
      <li>Sequential work limits throughput.</li>
      <li>Parallel work creates integration pressure.</li>
      <li>Supervision becomes a first-class concern.</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">Software delivery is organizational. The bottleneck becomes coordination.</div>
  </div>
</div>

<!--
The audience should understand why Gastown exists before we introduce roles.
The bottleneck is not just model intelligence; it is coordination.
-->

---

# Gastown organizes work, not prompts

<div class="slide-frame slide-frame--balanced">
  <div class="diagram-panel">
    <div class="organized-work-map">
      <div class="organized-card organized-card--input">
        <span>Input</span>
        <strong>Human intent</strong>
        <p>Natural language request, incomplete by design.</p>
      </div>
      <div class="organized-card organized-card--model">
        <span>Organization layer</span>
        <strong>Gastown structures delivery</strong>
        <div class="organized-mechanisms">
          <p><b>Mayor</b> plans and coordinates.</p>
          <p><b>Beads</b> make work addressable.</p>
          <p><b>Convoys</b> track delivery streams.</p>
          <p><b>Witness & Refinery</b> keep execution observable.</p>
        </div>
      </div>
      <div class="organized-card organized-card--output">
        <span>Output</span>
        <strong>Observable delivery</strong>
        <p>Status, dependencies, ownership, progress, and merge flow become inspectable.</p>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>Response</span>
    <p>Gastown turns intent into shared delivery objects.</p>
    <ul>
      <li>Mayor separates planning from execution.</li>
      <li>Beads and convoys make work addressable and trackable.</li>
      <li>Witness and Refinery make supervision and convergence visible.</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">Scale comes from shared coordination, not bigger prompts.</div>
  </div>
</div>

<div class="live-signal">The Mayor turns a high-level request into beads, convoys, assignments, and visible status.</div>

<!--
Use this slide to position Gastown as an AI-native delivery organization.
Avoid tool tour language.
-->

---

# The Organization

<div class="slide-frame slide-frame--balanced">
  <div class="diagram-panel">
    <div class="town-rig-map">
      <div class="town-rig-band town-rig-band--town">
        <span>Town</span>
        <div class="town-rig-row">
          <div>
            <strong>👁️ Overseer</strong>
            <p>Human intent and control</p>
          </div>
          <div>
            <strong>🏛️ Mayor</strong>
            <p>Cross-rig coordination</p>
          </div>
          <div>
            <strong>🐺 Deacon</strong>
            <p>System health</p>
          </div>
        </div>
      </div>
      <div class="town-rig-band town-rig-band--rig">
        <span>Rig</span>
        <p class="town-rig-definition">A project repository with its own execution environment.</p>
        <div class="town-rig-row town-rig-row--rig">
          <div>
            <strong>👥 Crew</strong>
            <p>Persistent workers</p>
          </div>
          <div>
            <strong>😺 Polecats</strong>
            <p>Ephemeral workers</p>
          </div>
          <div>
            <strong>🦉 Witness</strong>
            <p>Rig supervision</p>
          </div>
          <div>
            <strong>🏭 Refinery</strong>
            <p>Merge queue</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>Why it matters</span>
    <p>Gastown is organized around a town and one or more rigs.</p>
    <ul>
      <li>The Town coordinates across repositories.</li>
      <li>Each Rig is attached to a real codebase.</li>
      <li>Crew members are persistent; Polecats are disposable execution workers.</li>
      <li>Witness and Refinery are rig-level operating roles.</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">Gastown separates coordination, execution, supervision, and integration.</div>
  </div>
</div>

<div class="live-signal">Identify the rig, the persistent crew, and the disposable workers attached to the repository.</div>

<!--
This is a central slide. The key line is:
The Mayor coordinates work. Polecats execute it.
-->

---

# Beads: work breakdown & dependencies

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
        <span>Phase 0 — Foundations</span>
        <strong>Schema enrichment · RiskFinding type · LLM wrapper</strong>
      </div>
      <div class="bead-node bead-node--use-case bead-node--uc5">
        <span>Use Case 5</span>
        <strong>Clause Library</strong>
        <em>Reusable templates</em>
      </div>
      <div class="bead-node bead-node--use-case bead-node--uc3">
        <span>Use Case 3</span>
        <strong>Approval Workflow</strong>
        <em>State and history</em>
      </div>
      <div class="bead-node bead-node--use-case bead-node--uc1">
        <span>Use Case 1</span>
        <strong>Clause Generator</strong>
        <em>Can save clauses</em>
      </div>
      <div class="bead-node bead-node--use-case bead-node--uc2 bead-node--critical-path">
        <span>Use Case 2</span>
        <strong>Risk Reviewer</strong>
        <em>Persists findings</em>
      </div>
      <div class="bead-dependency-label bead-dependency-label--library">Saved generated clauses to library</div>
      <div class="bead-dependency-label bead-dependency-label--risk">risky / GDPR facets need persisted findings</div>
      <div class="bead-node bead-node--blocked bead-node--uc4 bead-node--critical-path">
        <span>Use Case 4 — last mile</span>
        <strong>Search / Intelligence</strong>
        <em>Uses schema, metadata, and risk findings</em>
      </div>
      <div class="bead-critical-legend">Critical path</div>
    </div>
  </div>
  <div class="insight-panel">
    <span>Why it matters</span>
    <p>Beads turn a high-level request into executable work with order, ownership, and status.</p>
    <ul>
      <li>Dependencies expose the critical path.</li>
      <li>Ready work can be executed immediately.</li>
      <li>Blocked work is visible instead of implicit.</li>
      <li>Hooks keep workers connected to active assignments.</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">Beads expose what can start now, what is blocked, and why.</div>
  </div>
</div>

<div class="live-signal">Bead creation, ready/blocked status, dependency graph, and current hook.</div>

<!--
Use this slide to explain why dependency management matters.
The important point: work becomes executable and inspectable.
-->

---

# Convoys: delivery streams

<div class="slide-frame slide-frame--compact slide-frame--convoys">
  <div class="diagram-panel diagram-panel--tall">
    <div class="convoy-map">
      <div class="convoy-row convoy-row--phase">
        <b class="convoy-step">Step 0</b>
        <span>🚚 Phase 0 convoy</span>
        <strong>Foundations</strong>
        <em>shared base · unlocks Use Cases 1-5</em>
      </div>
      <div class="convoy-grid">
        <div class="convoy-row">
          <b class="convoy-step">Step 1</b>
          <span>🚚 Use Case 5 convoy</span>
          <strong>Clause Library</strong>
          <em>CRUD stream · reusable clauses</em>
        </div>
        <div class="convoy-row">
          <b class="convoy-step">Step 1</b>
          <span>🚚 Use Case 3 convoy</span>
          <strong>Approval Workflow</strong>
          <em>state machine · history</em>
        </div>
        <div class="convoy-row">
          <b class="convoy-step">Step 2</b>
          <span>🚚 Use Case 1 convoy</span>
          <strong>Clause Generator</strong>
          <em>AI stream · saves to library</em>
        </div>
        <div class="convoy-row">
          <b class="convoy-step">Step 2</b>
          <span>🚚 Use Case 2 convoy</span>
          <strong>Risk Reviewer</strong>
          <em>AI stream · persisted findings</em>
        </div>
        <div class="convoy-row convoy-row--wide">
          <b class="convoy-step">Step 3</b>
          <span>🚚 Use Case 4 convoy</span>
          <strong>Search / Intelligence</strong>
          <em>last mile · depends on schema and risk findings</em>
        </div>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>Why it matters</span>
    <p>Convoys make each use case visible as a delivery stream.</p>
    <ul>
      <li>Same step number means parallel work.</li>
      <li>Progress becomes visible across workers.</li>
      <li>Shared reference across roles.</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">Convoys turn the bead graph into observable delivery streams.</div>
  </div>
</div>

<div class="live-signal">Convoy creation, convoy status, and landing notification.</div>

<!--
Convoys should feel operational, not decorative.
They are the shared handle for distributed delivery.
-->

---

# Polecats: parallel execution

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
          <p>Foundations<br>Clause Library<br>Risk Reviewer</p>
        </div>
      </div>
      <div class="polecat-row">
        <div class="polecat-worker">
          <span>😺 nux</span>
        </div>
        <div class="polecat-delivery">
          <p>Contract Approval Workflow</p>
        </div>
      </div>
      <div class="polecat-row">
        <div class="polecat-worker">
          <span>😺 slit</span>
        </div>
        <div class="polecat-delivery">
          <p>Clause Generator<br>Search / Intelligence MVP</p>
        </div>
      </div>
      <div class="polecat-note">
        <span>One product request</span>
        <i>↓</i>
        <span>Scoped beads</span>
        <i>↓</i>
        <span>Isolated execution workers (Polecats)</span>
        <i>↓</i>
        <span>Coordinated delivery</span>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>Why it matters</span>
    <p>The Mayor assigns scoped beads to Polecats, each running in its own context and branch.</p>
    <ul>
      <li>Spawned on demand for discrete tasks.</li>
      <li>Assignments stay isolated from each other.</li>
      <li>Polecats disappear after delivery.</li>
      <li>Parallelism increases throughput, not chaos.</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">Polecats make execution scalable by distributing work across isolated contexts.</div>
  </div>
</div>

<div class="live-signal">Multiple Polecats, branches, commits, and delivery statuses running at the same time.</div>

<!--
This is the "wow" moment, but keep it engineering-oriented.
The claim is throughput through isolated execution.
-->

---

# Supervision keeps execution operational

<div class="slide-frame slide-frame--balanced">
  <div class="diagram-panel">
      <div class="supervision-map">
      <div class="supervision-layer-label">HQ watchdog chain</div>
      <div class="supervision-side-role supervision-side-role--mayor">
        <strong>🏛️ Mayor</strong>
        <p>Coordinates work</p>
      </div>
      <div class="supervision-card supervision-card--deacon">
        <strong>🐺 Deacon</strong>
        <p>Town watchdog · lifecycle · recovery</p>
      </div>
      <div class="supervision-daemon">⚙️ Daemon<br><small>mechanical heartbeat</small></div>
      <div class="supervision-hq-support">
        <div class="supervision-card supervision-card--boot">
          <strong>🐕 Boot the Dog</strong>
          <p>Checks Deacon health</p>
        </div>
        <div class="supervision-card supervision-card--dogs">
          <strong>🐶 Dogs</strong>
          <p>Deacon helpers</p>
        </div>
      </div>
      <div class="supervision-section-gap"></div>
      <div class="supervision-layer-label">Rig operational loop</div>
      <div class="supervision-side-role supervision-side-role--crew">
        <strong>👥 Crew</strong>
        <p>Persistent workers</p>
      </div>
      <div class="supervision-card supervision-card--witness">
        <strong>🦉 Witness</strong>
        <p>Monitors Polecats · detects stuck work · nudges recovery</p>
      </div>
      <div class="supervision-split">
        <div>
          <strong>😺 Polecats</strong>
          <p>Execute beads</p>
        </div>
        <div>
          <strong>🏭 Refinery</strong>
          <p>Merge queue · delivery convergence</p>
        </div>
      </div>
    </div>
  </div>
  <div class="insight-panel">
    <span>Why it matters</span>
    <p>Gastown supervision is layered, not a single watcher.</p>
    <ul>
      <li>Daemon wakes Boot when health needs checking.</li>
      <li>Deacon keeps the town healthy.</li>
      <li>Witness keeps rig execution moving.</li>
      <li>Refinery keeps delivery converging.</li>
    </ul>
    <div class="takeaway-box takeaway-box--inline">Supervision turns distributed execution into an operational system.</div>
  </div>
</div>

<div class="live-signal">Deacon health, Witness status, Polecat recovery, Refinery queue, and delivery convergence.</div>

<!--
Important for DiliTrust: supervision and control are not optional.
This slide turns distributed execution into an operational system.
-->

---

# Agreement Hub verification

<div class="app-layout app-layout--verification">
  <div class="app-copy">
    <span>Local inspection</span>
    <p>We inspect the delivered repository by running Agreement Hub locally and comparing it with the starting version.</p>
    <ul>
      <li>The app is not deployed during the demo.</li>
      <li>We clone the complete repository produced by Gastown.</li>
      <li>We run that repository locally, then compare it with the baseline app.</li>
    </ul>
    <p class="inspection-question">What will the delivered app reveal?</p>
  </div>
  <div class="checkpoint-list">
    <strong>Implemented use cases</strong>
    <span class="is-checked">Clause Generator <i></i></span>
    <span class="is-checked">Risk Reviewer <i></i></span>
    <span>Approval Workflow <i></i></span>
    <span>Search & Intelligence <i></i></span>
    <span>Clause Library <i></i></span>
  </div>
</div>

<div class="demo-flow demo-flow--verification">
  <div class="demo-flow-copy">
    <span>Verification checkpoint</span>
    <p>The Gastown delivery loop pauses here.<br />Now we clone the delivered repository, run Agreement Hub locally, and compare it with the starting application.</p>
  </div>
  <a class="app-open-link" href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">Open app ↗</a>
</div>

<!--
Switch to the browser and slow down.
The audience must see that Agreement Hub changed because Gastown delivered code.
-->

---

# Going further with formulas

<div class="formula-slide">
  <div class="formula-left">
    <div class="formula-intro">
      <span>Formula</span>
      <p>A formula turns an orchestration pattern into a repeatable delivery playbook: steps, inputs, gates, parallel work, and artifacts.</p>
    </div>
    <div class="formula-example">
      <h2>Example</h2>
      <strong>mol-idea-to-plan</strong>
      <p>From vague idea to reviewed plan and work ready to become beads.</p>
      <a href="https://github.com/gastownhall/gastown/blob/v1.1.0/internal/formula/formulas/mol-idea-to-plan.formula.toml" target="_blank" rel="noopener noreferrer">Open formula on GitHub</a>
    </div>
    <div class="takeaway-box takeaway-box--inline formula-takeaway">Formulas make orchestration reusable: the workflow becomes part of the delivery system.</div>
  </div>
  <div class="formula-workflow">
    <div class="formula-step formula-workflow--human">
      <span>01 · You → Crew</span>
      <p>Describe your idea in natural language; no structure needed.</p>
    </div>
    <div class="formula-step">
      <span>02 · intake</span>
      <p>Agent structures it into a draft PRD.</p>
    </div>
    <div class="formula-step formula-workflow--parallel">
      <span>03 · prd-review</span>
      <p>6 polecats review PRD in parallel: requirements, gaps, ambiguity, feasibility, scope and stakeholders.</p>
    </div>
    <div class="formula-step formula-workflow--human">
      <span>04 · human-clarify</span>
      <p>Agent presents consolidated questions; the human answers before planning continues.</p>
    </div>
    <div class="formula-step formula-workflow--parallel">
      <span>05 · generate-plan</span>
      <p>6 polecats design the implementation in parallel: API, data, UX, scale, security and integration.</p>
    </div>
    <div class="formula-step">
      <span>06 · prd-align 1-3</span>
      <p>3 rounds × 2 Polecats align plan with PRD and apply fixes each round.</p>
    </div>
    <div class="formula-step">
      <span>07 · plan-review 1-3</span>
      <p>3 rounds × 2 Polecats review the plan itself: completeness, sequencing, risk, scope creep, testability and coherence.</p>
    </div>
    <div class="formula-step">
      <span>08 · create-beads</span>
      <p>Agent converts the refined plan into beads with dependencies.</p>
    </div>
    <div class="formula-step">
      <span>09 · verify-beads</span>
      <p>3 sequential passes compare plan to beads and fill gaps.</p>
    </div>
  </div>
</div>

<!--
Use this slide after the live proof to show how the model can become reusable.
The mol-idea-to-plan formula is the concrete example: vague idea to reviewed plan to beads.
-->

---

# What Gastown changed

<div class="synthesis-flow">
  <div class="synthesis-head">
    <div>
      <span>Problem</span>
      <strong>Single-agent workflows break when coding becomes delivery.</strong>
    </div>
    <div>
      <span>Gastown response</span>
      <strong>Turn delivery into a supervised, distributed operating model.</strong>
    </div>
  </div>

  <div class="synthesis-row">
    <span>01</span>
    <div class="synthesis-problem">
      <strong>Context saturation</strong>
      <p>Important constraints disappear as the session grows.</p>
    </div>
    <em>Structure work into beads, artifacts, and explicit handoffs.</em>
  </div>
  <div class="synthesis-row">
    <span>02</span>
    <div class="synthesis-problem">
      <strong>Sequential execution</strong>
      <p>Throughput is bounded by one worker loop.</p>
    </div>
    <em>Use Polecats to execute independent work in parallel.</em>
  </div>
  <div class="synthesis-row">
    <span>03</span>
    <div class="synthesis-problem">
      <strong>No coordination layer</strong>
      <p>Dependencies and ownership stay implicit.</p>
    </div>
    <em>Mayor, Crew and Convoys make ownership and progress visible.</em>
  </div>
  <div class="synthesis-row">
    <span>04</span>
    <div class="synthesis-problem">
      <strong>Merge pressure</strong>
      <p>Parallel changes become hard to integrate safely.</p>
    </div>
    <em>Refinery manages convergence instead of leaving integration to chance.</em>
  </div>
  <div class="synthesis-row">
    <span>05</span>
    <div class="synthesis-problem">
      <strong>No operational supervision</strong>
      <p>Stuck work is difficult to observe and recover.</p>
    </div>
    <em>Witness, Deacon and recovery loops keep execution observable.</em>
  </div>
</div>

<!--
This closes the conceptual loop with the exact five problems introduced earlier.
-->

---

# Thank you

## Questions & discussion

<p class="lede">Gastown as an AI-native software delivery organization.</p>

<div class="question-block">
  <span>Example questions</span>
  <p>What does it cost to deliver a feature with Gastown?</p>
  <p>How much control do we have over the models?</p>
  <p>When should we use the Crew instead of only the Mayor?</p>
</div>

<!--
Final slide for Q&A.
Keep it quiet. Do not add new concepts.
-->
