# Vercel deployment and usage

All seven pages are prepared for a static deployment. This does not alter the account’s existing quotas or other projects.

## Deployment settings

Connect the repository to the intended Vercel project. The checked-in `vercel.json` defines:

- Framework preset: Other (`framework: null`). The application itself is still Next.js.
- Install: `npm ci`.
- Build: `npm run build`.
- Output directory: `out`.
- No functions, image service, proxy rewrites, or server process.
- One-year immutable caching for fingerprinted images and Next static assets.

Do not use `npm start` as the production command on Vercel. It is a local static preview helper. Vercel serves `out/` directly.

## What this reduces

| Screenshot metric | Website behavior |
| --- | --- |
| Fluid Active CPU | No request-time application functions. Image preparation happens during the build. |
| Functions Storage | No function bundles in the deployed output. |
| Image Optimization: transformations, cache writes, cache reads | No calls to Vercel Image Optimization; responsive images are existing static files. |
| Deployment Storage | Only `out/` is published; original PNG/JPEG files, reference images, and dependencies are excluded. Build fails above 8 MiB. Retained deployments still accumulate storage. |
| Fast Data Transfer | Responsive compressed WebP, lazy loading, local fonts, and browser caching reduce bytes. Visitors and bots still consume bandwidth. |
| Fast Origin Transfer | Static CDN delivery and long-lived asset caching reduce origin fetches; cache misses and new deployments still count. |
| CDN Requests | No polling, external runtime data, analytics, or automatic navigation prefetch. First visits and page navigation still request HTML, JS, CSS, fonts, and images. |
| CDN Request CPU Duration | Static routing without middleware or proxy rewrites. Vercel still processes CDN requests. |

The screenshot shows account usage over the last 30 days. It is not a live per-project measurement. Code cannot impose an account-wide visitor/request cap or guarantee that shared limits never exceed their allowance. Review the project’s Usage breakdown and available account usage controls before launch; they have not been changed by these local fixes.

## Verified snapshot — 25 November 2026

| Local production measurement | Result |
| --- | --- |
| Original build-input image files, excluded from deployment | 38,813,493 bytes (38.81 MB) |
| All generated responsive WebP copies | 2,865,996 bytes (2.87 MB), 46 variants |
| Complete static deployment | 4,564,438 bytes (4.56 MB), 117 files |
| All client JavaScript after Brotli | 209,205 bytes (209 KB) |
| Cold homepage desktop visit, 1440px / DPR 1 | 22 requests; 1,255,718 raw response bytes |
| Cold homepage retina-mobile visit, 390px / DPR 2 | 22 requests; 1,299,884 raw response bytes |
| Cold inner-page visits, desktop and retina mobile | 13–17 requests; 624,096–780,404 raw response bytes per visit |
| Runtime image/API requests across all 14 page/profile visits | 0 |
| Browser checks | 61 passed: responsive layouts, navigation, keyboard dialogs, pricing-to-contact selection, and hosting budgets |

MB and KB above are decimal units. These are local measurements of this build, not live Vercel account counters. The network totals are uncompressed response sizes; Vercel’s automatic text compression can reduce transfer. The build also passed lint and TypeScript checks.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

In a second terminal:

```sh
npm run test:e2e
```

The hosting checks inspect cold desktop and retina-mobile visits to all seven pages, including scrolling each full page. They reject runtime image/API requests, external resources, more than 30 requests, or more than 2.5 MiB of raw static response bodies per visit. Real transfer on Vercel also depends on compression, cache hits, visitor devices, and traffic. Reports are written locally under `.design-reference/` and are not deployed.

Official references: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), [Vercel image usage](https://vercel.com/docs/image-optimization/managing-image-optimization-costs), [Vercel usage and storage](https://vercel.com/docs/pricing/manage-and-optimize-usage).
