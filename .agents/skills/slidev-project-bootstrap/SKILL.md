---
name: slidev-project-bootstrap
description: Use when starting a new Slidev presentation project or turning an empty repository into a usable Slidev deck with scripts, dependencies, local dev server, exports, and sensible repository defaults.
---

# Slidev Project Bootstrap

## Goal

Create a clean, reusable Slidev project base without assuming any presentation topic.

## Workflow

1. Inspect the repository first: package manager, existing `package.json`, lockfile, slides, assets, and `.gitignore`.
2. If no Slidev setup exists, add the minimum project structure:
   - `slides.md`
   - `package.json` scripts
   - `style.css` or equivalent theme override file
   - `assets/` for reusable media
3. Install Slidev dependencies using the repository's package manager.
4. Add scripts for:
   - local dev server
   - production build
   - PDF export
   - PPTX export when supported
5. Add repository hygiene:
   - ignore build outputs
   - ignore local IDE files
   - avoid committing generated screenshots unless intentionally used by slides
6. Start the dev server only when the user wants to view the deck locally.
7. Verify with `npm run build` or the equivalent build command before claiming setup is complete.

## Defaults

Prefer:

- `slides.md` as the main entry point.
- `style.css` for local overrides.
- `assets/` for slide media.
- `screenshots/` only for intentional visual QA artifacts.

Do not add topic-specific content beyond a minimal placeholder deck unless the user asks for an example.
