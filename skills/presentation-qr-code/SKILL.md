---
name: presentation-qr-code
description: Use when generating, sizing, styling, validating, or integrating QR codes into presentations, speaker slides, links, handouts, or demo materials.
---

# Presentation QR Code

## Goal

Generate QR codes that are scannable, visually integrated, and maintainable.

## Workflow

1. Confirm the target URL or text.
2. Prefer a deterministic local generator dependency or CLI.
3. Generate QR codes as:
   - SVG when presentation tooling handles it well
   - PNG when browser/export rendering must be predictable
4. Use high contrast.
5. Keep enough quiet zone around the code.
6. Size for phone scanning:
   - small but not decorative
   - generally at least 96-128 px in rendered slide output
7. Add the human-readable link near the QR code when useful.
8. Verify by opening the slide and checking the rendered size.

## Slide Guidance

Do not let QR codes dominate a slide unless the slide is specifically a contact or resource slide.
