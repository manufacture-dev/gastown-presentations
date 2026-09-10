# Working on Gas Town presentations

## Repository skills

The canonical skills live in `.agents/skills/<name>/SKILL.md`. The entries in
`.claude/skills/` are relative symlinks to those same folders, not separate copies.
Edit the canonical files only.

Before working on a presentation task, select the relevant skills from the
[README catalog](README.md#agent-skills), read their complete `SKILL.md`, and
briefly state which ones you are using. Load only skills and supporting resources
relevant to the request. If native discovery does not list a skill, read its file
directly. Report unavailable tools or resources instead of claiming verification.

## Repository context

- `slides.md` is the shared source; talk configuration lives in `talks/*.json`.
- Whole-slide variants use the `variants` frontmatter; individual elements use
  `$variant` with `v-if`. Reuse this mechanism.
- Keep French and English content in `locales/fr.yml` and `locales/en.yml` aligned.
- Layouts and reusable blocks live in `style.css` and `components/`; static assets
  and copyable prompts live in `public/`.
- Do not edit generated `.slides.generated.*.md` files or `dist/` as source.
- A workshop-only request does not authorize changing the shared presentation.

Commands and build/export scope are documented in the [README](README.md#slidev).
Use the verification appropriate to the change; a successful build alone does not
establish visual quality.

## Workshop visual contract

- Scope workshop styles with `workshop-slide`; include the application overview,
  not just command slides. Preserve the shared presentation's background and headings.
- Use the shared `--workshop-*` typography tokens by role. The Taxiway lab creation
  slide (currently 15) is the command reference: 0.65rem, line height 1.35.
- Explanations share one body size; prompts and tips each have a consistent size.
  Do not shrink one slide to hide a layout problem.
- Explanations, list items and tips use the same opaque `--workshop-text` white;
  do not dim introductions or instructions. Reserve accent colors for semantic labels and links.
- Commands copy one executable unit per row, including a multiline shell command.
  Show the copy action on hover without an added focus frame or slide-navigation changes.
- Prompts retain a yellow border and a global copy button. Tips use a pink left
  border; bottom checkpoints reuse the original full pink `.demo-flow` frame
  (setup, before coding and verification), including its original text color,
  font sizes and line heights; exclude it from workshop typography overrides.
  Inline expected results use turquoise.
  Mark placeholders that need substitution.
- Terminal headings describe actions; put host/lab context in surrounding text.
- Verify FR and EN, including fetched prompts, internal overflow and computed
  line heights. For local navigation, use `/#/<number>` and verify the active title.
- For visual work, run `npm test` and `npm run build:web`, then inspect screenshots.
  Do not claim that lab commands or clipboard behavior were tested unless executed.
