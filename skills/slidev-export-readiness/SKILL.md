---
name: slidev-export-readiness
description: Use before sharing or presenting a Slidev deck to verify build, export, links, assets, readability, layout consistency, and presenter/demo readiness.
---

# Slidev Export Readiness

## Goal

Verify that a Slidev deck is ready to present or share.

## Checklist

1. Run the production build.
2. Export PDF if required.
3. Export PPTX if required and supported.
4. Check for:
   - missing assets
   - broken links
   - clipped text
   - inconsistent slide layouts
   - excessive text density
   - unreadable diagrams
   - external links opening correctly
5. Inspect representative slides in the browser.
6. If exporting:
   - open the exported file
   - check title slides
   - check diagram slides
   - check screenshot/image slides
   - check final slide
7. Report what was verified and what remains risky.

## Rule

Do not claim the deck is ready unless the build or export command has actually been run.
