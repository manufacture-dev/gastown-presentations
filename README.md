# Gas Town Presentations

Talks about **Gas Town** and AI-native software delivery.

Published timeline: [manufacture.dev/gastown-presentations](https://manufacture.dev/gastown-presentations)

## About the Deck

This repository contains one shared Slidev deck that can be rendered for several
events, languages and dates. Each talk instance reuses the same `slides.md`
content and injects event-specific metadata from `talks/*.json`.

The deck introduces Gas Town as an operating model for AI-native software delivery.
It starts from the evolution of individual AI coding practices, then moves into
the coordination problem that appears when many coding agents work on real repositories.

The presentation covers:

- why single-agent workflows break down when delivery becomes distributed;
- how Gas Town organizes work through towns, rigs, the Mayor, beads, convoys, Polecats, Witness and Refinery;
- how supervision, recovery and verification make agent execution operational;
- a live Agreement Hub demo used as a realistic software delivery target;
- how formulas can turn orchestration patterns into repeatable delivery playbooks.

## Slidev

This repository is configured to build a bilingual Slidev presentation from `slides.md`.
The deck can be reused for several talk instances configured in `talks/*.json`.

Useful commands:

```bash
npm install
npm run dev
npm run dev -- dilitrust-techday --port 3030
npm run build
npm run build:all
npm run export:pdf
npm run export:pptx
```

- `npm run dev` starts the live presentation server for the latest talk. The
  latest talk is the most recent one by `date` in `talks/*.json`.
- `npm run dev -- <route>` starts a specific talk instance.
- `npm run dev -- --port 3034` starts the latest talk on a specific port.
- `npm run dev -- <route> --port 3034` starts a specific talk on a specific port.
- `npm run build` creates the latest talk static website in `dist/`.
- `npm run build -- <route>` creates a specific talk static website in `dist/`.
- `npm run build:all` creates one route per configured talk in `dist/<route>/`
  and downloadable PDF/PPTX files in `dist/downloads/`.
- `npm run export:pdf` renders the latest talk PDF in `exports/`.
- `npm run export:pptx` renders the latest talk PowerPoint file in `exports/`.
- `npm run export:pdf -- <route>` renders a specific talk PDF in `exports/`.
- `npm run export:pptx -- <route>` renders a specific talk PowerPoint file in `exports/`.

## Talk Instances

Talk-specific metadata lives in two places:

- `talks/*.json` defines routing and defaults: `id`, `route`, `defaultLocale`,
  `label`, and `date`.
- `locales/fr.yml` and `locales/en.yml` define translated event text under `talks.<id>`.

Example:

```json
{
  "id": "dilitrust_techday",
  "route": "dilitrust-techday",
  "defaultLocale": "en",
  "label": "DiliTrust TechDay",
  "date": "2026-05-21"
}
```

The title slide keeps its main title in the global locale keys and reads talk-specific
context with `$talk("event")`. The date comes from the talk JSON and is formatted with
`$talkDate()` according to the active locale.

Configured talks:

| Talk | Date | Locale | Variant | Prompt | Route |
|---|---:|:---:|:---:|---|---|
| SACEM - Matinale DSI | 2026-07-10 | fr | short | `demo-15-min` | `sacem-matinale-dsi` |
| Dev With AI Live #4 | 2026-06-12 | fr | short | `demo-15-min` | `dev-with-ai-live-4` |
| DiliTrust TechDay | 2026-05-21 | en | full | `all-use-cases` | `dilitrust-techday` |

The `route` value becomes the URL segment in the generated site. For example,
`dev-with-ai-live-4` is available at:

```text
https://manufacture.dev/gastown-presentations/dev-with-ai-live-4/#/1
```

Useful commands:

```bash
npm run talk:list
npm run dev -- dilitrust-techday
npm run build -- dilitrust-techday
npm run build:all
npx serve dist
```

After `npm run build:all`, `npx serve dist` lets you test the generated index,
all talk routes, and downloadable PDF/PPTX files locally:

```text
http://localhost:3000/
```

The generated index is the canonical entry point. It shows talks ordered by date,
keeps each talk language visible, and links to:

- the web deck;
- the generated PDF;
- the generated PPTX.

## Talk Scenarios

Scenario runbooks live in [docs/scenarios](docs/scenarios/). Start from the
[scenarios README](docs/scenarios/README.md), which is the canonical index for
the detailed talk conductors and preparation notes.

## Talk Variants

A single `slides.md` can produce several **content variants** of the same deck
(for example a full version and a shorter critical-path version). Variant
selection happens at build time, so a slide that is not part of a variant is
removed from the generated deck rather than rendered empty.

Two variants are currently used:

- `full` (default): the complete deck.
- `short`: a reduced critical-path cut.

### Selecting a variant for a talk

Add an optional `variant` field to a talk definition. When omitted, the talk
uses `full`.

```json
{
  "id": "dev_with_ai_live_4",
  "route": "dev-with-ai-live-4",
  "variant": "short",
  "defaultLocale": "fr",
  "label": "Dev With AI Live #4",
  "date": "2026-06-12"
}
```

### Marking a slide for specific variants

By default a slide belongs to every variant. To restrict a slide to one or more
variants, add a `variants` list to that slide's frontmatter. The slide is kept
only when the active variant is in the list.

```markdown
---
variants: [full]
---

# This slide only appears in the full variant
```

Notes:

- A slide without a `variants` list is part of every variant (the shared core).
- `variant` selection is also exposed at runtime as `talkConfig.variant`, so
  in-slide tweaks can use `v-if` when removing a whole slide is not desired.
- Exports keep their `gastown-<route>.<locale>.<ext>` naming; because `route`
  is unique per talk, the variant is already disambiguated.

## Demo Prompts

The demo slide has one copy button. Each talk chooses which plain-text prompt that
button copies through the required `prompt` field in `talks/*.json`.

Available prompts:

- `all-use-cases`: original full prompt used by the DiliTrust talk.
- `demo-15-min`: prompt focused on shipping two functional demo increments in less than 15 minutes while showing the Gas Town delivery pipeline.

Example:

```json
{
  "id": "dev_with_ai_live_4",
  "route": "dev-with-ai-live-4",
  "variant": "short",
  "prompt": "demo-15-min",
  "defaultLocale": "fr",
  "label": "Dev With AI Live #4",
  "date": "2026-06-12"
}
```

Prompt files live in `public/prompts` and include the prompt name:

```text
gastown-demo-prompt.<prompt>.<locale>.txt
```

For every prompt used by a talk, provide both English and French files:

```text
public/prompts/gastown-demo-prompt.all-use-cases.en.txt
public/prompts/gastown-demo-prompt.all-use-cases.fr.txt
public/prompts/gastown-demo-prompt.demo-15-min.en.txt
public/prompts/gastown-demo-prompt.demo-15-min.fr.txt
```

Keep prompt files as plain text. The copy button writes the fetched `.txt` content
directly to the clipboard.

## GitHub Pages

The slides are published as a static Slidev site through GitHub Actions.

Before the first deployment, configure the repository on GitHub:

1. Open `Settings` > `Pages`.
2. Set `Build and deployment` > `Source` to `GitHub Actions`.
3. Push to `main` or run the `Build and publish talks` workflow manually.

The workflow builds all configured talk instances with relative asset paths, so the same
artifact works locally and under `/gastown-presentations/` on GitHub Pages. The
generated index also links to the current PDF and PowerPoint exports for each talk.
