---
name: browser-visual-qa
description: Use when verifying a local web-rendered artifact visually, especially Slidev decks, local apps, screenshots, layout regressions, browser/editor behavior, or differences between expected and actual rendering.
---

# Browser Visual QA

## Goal

Use the browser as a measurable rendering surface, not just a screenshot tool.

## Workflow

1. Open the exact local URL or slide route. Confirm the active slide number, title, variant and language before measuring it; hidden slides can remain in the DOM.
   Wait for fonts, images, asynchronously loaded prompts and navigation transitions to settle.
2. Capture a screenshot before changing layout when possible.
3. Inspect the rendered state:
   - visible content
   - clipped content
   - internal scrolling that hides part of a code block or prompt
   - overlapping elements
   - spacing consistency
   - missing assets
   - console errors when relevant
4. For layout issues, prefer measuring DOM bounding boxes when screenshot-only feedback is not enough.
5. Make the smallest structural fix.
6. Rebuild if the project requires a build step.
7. Reopen the exact route and capture a new screenshot.
8. Repeat for each supported language on affected slides. Compare recurring typography, not just slide boundaries.
9. Report screenshot paths, viewport, languages, verification command and untested interactions. No overflow is not proof of projection readability.

## Slidev Defaults

For a Slidev deck:

- inspect the project's routing; for hash routing use `http://localhost:<port>/#/19`, not an assumed `/19` path
- capture one affected slide first
- capture related slides if a shared layout changed
- use the repository's documented build command for the target artifact; do not overwrite a multi-talk landing page with a single-talk build
