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
