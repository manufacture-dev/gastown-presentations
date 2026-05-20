---
name: slidev-visual-debugging
description: Use when Slidev slides have visual defects such as overflowing content, cropped diagrams, misaligned blocks, inconsistent sizes, hidden editor panes, or layout differences between browser and export.
---

# Slidev Visual Debugging

## Goal

Fix rendering problems with measured layout changes, not guesswork.

## Workflow

1. Reproduce the issue in the browser or export mode where it occurs.
2. Capture a screenshot of the affected slide.
3. Inspect likely causes:
   - fixed heights
   - absolute positioning
   - oversized diagrams
   - too many blocks
   - theme CSS overrides
   - global selectors leaking into nested components
4. Prefer structural fixes:
   - grid layout
   - reduced text density
   - smaller type scale
   - simpler diagram
   - larger slide area for the dominant element
5. Avoid repeated pixel nudging. If repeated nudging starts, refactor the layout.
6. Run the deck build after changes.
7. Capture the slide again and compare visually.

## Validation

Before saying a visual issue is fixed, verify:

- no content is clipped
- no text overlaps
- recurring blocks are visible
- slide still builds
- the fix did not shrink content unnecessarily
