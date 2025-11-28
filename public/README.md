# Public Assets Directory

This directory contains static assets served by the Next.js application.

## Structure

- `/images/` - Image assets (logos, icons, graphics)
- `/videos/` - Video assets (app demo video)
- `favicon.ico`, `icon.png`, `apple-icon.png` - Favicon files

## Favicon Files Needed

To complete the branding setup, add these favicon files to the `/public` directory:

1. **favicon.ico** (16x16, 32x32, 48x48 multi-size ICO)
2. **icon.png** (any size, Next.js will optimize)
3. **apple-icon.png** (180x180 for Apple devices)

These should be generated from the Peep bird logo for consistent branding.

## Video Assets Needed

- **peep-app-demo.mp4** - Short looping video (15-30 seconds) showing:
  - Core UI (mood check-in)
  - Calendar view
  - Tags
  - Muted, optimized for web, loopable
