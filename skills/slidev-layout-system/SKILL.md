---
name: slidev-layout-system
description: Use when creating or refactoring reusable Slidev layouts with CSS grids, columns, panels, recurring blocks, title slides, speaker slides, demo slides, and synthesis slides.
---

# Slidev Layout System

## Goal

Make slide layouts predictable and reusable instead of relying on fragile per-slide positioning.

## Workflow

1. Identify the recurring slide types.
2. Create semantic wrapper classes such as:
   - `slide-frame`
   - `diagram-panel`
   - `insight-panel`
   - `takeaway-box`
   - `live-signal`
3. Prefer CSS Grid for structured slides:
   - fixed semantic columns
   - stable gaps
   - aligned rows
   - no absolute positioning unless unavoidable
4. Use Flexbox for small internal alignment only.
5. Avoid nested cards unless the content is genuinely grouped.
6. Keep spacing tokens consistent across slides.
7. For each reusable layout, test with:
   - short text
   - long text
   - diagram content
   - export build

## Rule

If an element must be moved repeatedly with `top` or `left`, replace that section with a grid or flex layout.
