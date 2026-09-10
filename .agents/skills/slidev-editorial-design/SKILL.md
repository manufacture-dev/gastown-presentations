---
name: slidev-editorial-design
description: "Use when defining or improving the visual direction of a Slidev deck: typography, colors, hierarchy, spacing, recurring blocks, and editorial presentation style."
---

# Slidev Editorial Design

## Goal

Create a calm, readable, coherent technical presentation style.

## Workflow

1. Identify the desired visual tone:
   - editorial
   - technical
   - product
   - academic
   - workshop
   - demo-driven
2. Define a small design system:
   - background
   - text colors
   - accent colors
   - heading scale
   - body scale
   - card style
   - code style
   - recurring blocks
3. Use colors for structure, not decoration.
4. Avoid visual noise:
   - excessive gradients
   - glow effects
   - decorative backgrounds
   - overloaded dashboards
5. Compare computed font sizes and line heights by role (explanation, command, prompt, tip, label) across adjacent slides, including explanatory slides inside a workshop.
   Check projection readability separately from fitting in the viewport. If small text leaves substantial unused space, improve its size and allocation before changing the background or theme.
6. Prefer reusable classes over one-off inline styles.
7. Verify representative slides in every supported language before applying the pattern broadly. Keep approved sizes and project-specific color meanings in repository guidance rather than making them universal skill rules.

## Recurring Blocks

Use recurring blocks sparingly and consistently, for example:

- `Takeaway`: the idea the audience should keep.
- `Live signal`: what to observe during a live demo.
- `Checkpoint`: what changed or was verified.
