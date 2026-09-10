---
name: slidev-diagram-design
description: Use when designing, simplifying, replacing, or debugging diagrams in Slidev, including Mermaid diagrams and custom HTML/CSS diagrams.
---

# Slidev Diagram Design

## Goal

Make diagrams pedagogical, readable, and stable in browser and exported formats.

## Workflow

1. Decide what the diagram must teach.
2. Remove any node or edge that does not support that message.
3. Prefer Mermaid when:
   - the graph is simple
   - automatic layout is acceptable
   - labels are short
4. Prefer HTML/CSS when:
   - precise alignment matters
   - Mermaid truncates text
   - the diagram is more like an annotated map
   - the visual hierarchy matters more than graph semantics
5. Keep labels short and split details into side text.
6. Use consistent sizing across related slides.
7. Verify the diagram at the actual presentation viewport.

## Mermaid Guidance

- Use simple `flowchart LR` or `flowchart TB`.
- Avoid long labels.
- Avoid deep dependency graphs on one slide.
- If Mermaid requires many hacks, replace it with HTML/CSS.
