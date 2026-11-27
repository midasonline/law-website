# Original design images

These are the original visible Figma image assets (PNG and JPEG). They are build inputs only and are never copied to the static deployment. `npm run images:build` generates responsive WebP variants in `public/media/` and updates the static image manifest. The original aspect ratios, crops, and logo artwork are preserved.

Replace the relevant original and rebuild when changing imagery. Generated filenames include a content hash, so they can be cached for a year without serving an old image after an update.
