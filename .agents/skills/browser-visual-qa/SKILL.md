---
name: browser-visual-qa
description: Use when verifying a local web-rendered artifact visually, especially Slidev decks, local apps, screenshots, layout regressions, browser/editor behavior, or differences between expected and actual rendering.
---

# Browser Visual QA

## Goal

Use the browser as a measurable rendering surface, not just a screenshot tool.

## Workflow

1. Open the exact local URL or slide route.
2. Capture a screenshot before changing layout when possible.
3. Inspect the rendered state:
   - visible content
   - clipped content
   - overlapping elements
   - spacing consistency
   - missing assets
   - console errors when relevant
4. For layout issues, prefer measuring DOM bounding boxes when screenshot-only feedback is not enough.
5. Make the smallest structural fix.
6. Rebuild if the project requires a build step.
7. Reopen the exact route and capture a new screenshot.
8. Report the screenshot path and the verification command.

## Slidev Defaults

For a Slidev deck:

- open `http://localhost:<port>/<slide-number>`
- capture one affected slide first
- capture related slides if a shared layout changed
- verify `npm run build` before completion
