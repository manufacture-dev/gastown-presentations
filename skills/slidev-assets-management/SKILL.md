---
name: slidev-assets-management
description: Use when managing presentation assets such as images, screenshots, speaker photos, generated visuals, QR codes, filenames, compression, cleanup, and references from Slidev slides.
---

# Slidev Assets Management

## Goal

Keep presentation assets intentional, named, portable, and easy to maintain.

## Workflow

1. Locate asset references in slides and CSS before deleting or renaming files.
2. Use clear names:
   - speaker login or name
   - slide purpose
   - source or state when useful
3. Keep assets under a predictable folder, usually `assets/`.
4. Do not keep exploratory screenshots unless they are used by slides or needed for QA history.
5. Prefer web-friendly formats:
   - JPG for photos
   - PNG for screenshots with UI text
   - SVG for vector diagrams or QR codes when supported
   - WebP for compact raster assets if tooling supports it
6. After asset cleanup:
   - run a build
   - inspect slides that reference assets
   - verify no broken image paths remain

## Safety

Before deleting assets, search references with `rg`.
