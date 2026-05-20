---
name: slidev-live-demo-support
description: Use when building or improving a Slidev deck that supports a live demo, including transitions between slides, terminal, browser apps, external tools, checkpoints, and fallback screenshots.
---

# Slidev Live Demo Support

## Goal

Make the deck support the demo without pretending to be the demo.

## Workflow

1. Identify every live system involved:
   - deck
   - terminal
   - browser app
   - external service
   - repository state
2. Add transition slides only where they clarify the switch.
3. Add concise live signals:
   - what to open
   - what to observe
   - what changed
   - when to return to slides
4. Add links to local or external demo targets when useful.
5. Use screenshots only as fallback or recap artifacts.
6. Do not simulate the live application inside the deck unless explicitly requested.
7. Keep live-demo slides sparse and operational.

## Useful Slide Types

- Demo contract
- Open app
- Observe current state
- Return after implementation
- Compare before/after
- Recap what changed
