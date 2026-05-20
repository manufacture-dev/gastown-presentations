---
name: slidev-theme-workflow
description: Use when choosing, installing, comparing, debugging, forking, or temporarily pinning a Slidev theme for a presentation project.
---

# Slidev Theme Workflow

## Goal

Help select and stabilize a Slidev theme without mixing theme work with slide content work.

## Workflow

1. Inspect current theme configuration in `slides.md`, `package.json`, and local CSS overrides.
2. Identify whether the task is:
   - theme selection
   - theme installation
   - theme fork/pin
   - editor/runtime bug fix
   - visual override
3. Change one theme variable at a time:
   - dependency
   - Slidev frontmatter
   - local CSS override
4. Verify:
   - `npm run build`
   - web editor opens correctly
   - at least one representative slide renders correctly
5. If a theme bug requires upstream work:
   - create the smallest possible patch
   - document why the patch belongs upstream
   - keep project-specific styling outside the theme PR
6. If using a fork temporarily, clearly document:
   - fork URL
   - reason
   - upstream PR link if available
   - how to revert to the upstream package later

## Commit Hygiene

Keep theme dependency changes separate from slide content and custom styling unless the user explicitly wants a combined commit.
