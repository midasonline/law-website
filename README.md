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

With the development or production server running in another terminal, run `npm run test:e2e` for the responsive and interaction checks. Tests use installed Google Chrome. Set `PLAYWRIGHT_CHANNEL=msedge` to use Microsoft Edge instead.

## Structure

- `src/app/`: routes, root layout, metadata, and the only custom stylesheet (`globals.css`).
- `src/components/home/`: hero, about, practice areas, attorneys, and insights.
- `src/components/layout/`: shared header and footer.
- `src/components/ui/`: shared modal, consultation flow, and corner marks.
- `src/data/home.ts`: navigation, practice-area labels, and insight previews.
- `public/images/`: the original images and SVGs exported from Figma.

Create future routes in `src/app/<page>/page.tsx` and their sections in `src/components/<page>/`.

## Theme and responsive sizing

The exact dark Figma palette, Inter typography, and shared design tokens are defined in `src/app/globals.css`. `--unit` equals `1px` below 1440px and `100vw / 1440` from 1440px upwards. Tailwind spacing and design typography use this variable. Content containers are centered at 90% width on large screens. Smaller screens use explicit pixel sizes and responsive reflow. Photographic sections remain full width.

The original 2-second hero timeline and expertise lettering are implemented with reduced-motion support. Smaller screens retain the spacious hero arrangement without the desktop translation that would overlap the words.

## Interactions

Navigation scrolls to landing-page sections. Consultation, pricing, and practice-area buttons open a keyboard-accessible dialog. Submitting creates an email draft in the visitor’s email app; there is no backend submission or simulated success message. Insights open the supplied Figma previews. Footer privacy and legal links request those documents by email.

Contact details, office text, dates, and editorial copy are preserved from Figma. Update them in the relevant components/data before a public launch. Asset layers fully covered in the original design are downloaded for traceability but are not unnecessarily rendered.
