# Lawvia landing page

Next.js App Router, TypeScript, Tailwind CSS, and Motion. The home page follows the supplied Lawvia Figma frame; additional routes have not been created.

## Development

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

With `npm start` running in another terminal after a production build, run `npm run test:e2e` for the responsive, interaction, and hosting-usage checks. Tests use installed Google Chrome. Set `PLAYWRIGHT_CHANNEL=msedge` to use Microsoft Edge instead.

## Structure

- `src/app/`: routes, root layout, metadata, and the only custom stylesheet (`globals.css`).
- `src/components/home/`: hero, about, practice areas, attorneys, and insights.
- `src/components/layout/`: shared header and footer.
- `src/components/ui/`: shared modal, consultation flow, and corner marks.
- `src/data/home.ts`: navigation, practice-area labels, and insight previews.
- `assets/images/`: original visible Figma PNGs, used only during the build.
- `public/images/`: the two original SVG icons.
- `public/media/`: generated, fingerprinted responsive WebP files (gitignored).
- `src/lib/static-image-loader.ts`: maps Next Image requests to those static files.
- `scripts/`: image preparation, deployment-budget checks, and local static preview.

Create future routes in `src/app/<page>/page.tsx` and their sections in `src/components/<page>/`.

## Theme and responsive sizing

The exact dark Figma palette, Inter typography, and shared design tokens are defined in `src/app/globals.css`. `--unit` equals `1px` below 1440px and `100vw / 1440` from 1440px upwards. Tailwind spacing and design typography use this variable. Content containers are centered at 90% width on large screens. Smaller screens use explicit pixel sizes and responsive reflow. Photographic sections remain full width.

The original 2-second hero timeline and expertise lettering are implemented with reduced-motion support. Smaller screens retain the spacious hero arrangement without the desktop translation that would overlap the words.

## Interactions

Navigation scrolls to landing-page sections. Consultation, pricing, and practice-area buttons open a keyboard-accessible dialog. Submitting creates an email draft in the visitor’s email app; there is no backend submission or simulated success message. Insights open the supplied Figma previews. Footer privacy and legal links request those documents by email.

Contact details, office text, dates, and editorial copy are preserved from Figma. Update them in the relevant components/data before a public launch. Asset layers fully covered in the original design are downloaded for traceability but are not unnecessarily rendered.

## Hosting usage

Production is a static export in `out/`. `vercel.json` selects the Other preset and deploys this directory, with no Vercel Functions, middleware, ISR, server actions, or runtime Image Optimization. The Next.js framework and browser interactions remain in use.

Images are resized and compressed once at build time with Sharp. The browser requests a responsive WebP file directly; it never calls `/_next/image`. Originals and covered Figma layers are excluded from the deployed assets. Content-hashed images and Next static assets have one-year immutable cache headers.

`npm run build` fails if the static deployment exceeds 8 MiB, any image exceeds 750 KiB, or all client JavaScript exceeds 300 KiB after Brotli compression. It also rejects runtime image URLs, function configuration, and original public PNGs. These are project safeguards, not account-wide traffic caps.

See [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel settings and the remaining usage considerations.
