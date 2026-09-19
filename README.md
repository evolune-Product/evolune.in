# Evolune EdgeTech — Marketing Site

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Rebuilt from the ground up in September 2026,
replacing the previous Vite/React SPA.

## Stack

- `app/` — routes (Home, About, Products, Products/[slug], Technology, Projects, Careers, Contact, 404, sitemap, robots)
- `components/` — shared UI (Navbar, Footer, Logo, backgrounds, buttons, device frame, contact form)
- `sections/` — homepage section blocks
- `lib/site.ts` — single source of truth for all copy/facts (products, credentials, philosophy)
- `public/` — real assets: logo, product screenshots, DPIIT certificate, brand-kit reference images

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Deploy

This project deploys natively to **Vercel** (`vercel.json` sets `framework: nextjs`). Connect the repo in the
Vercel dashboard, or run `vercel --prod`.

The previous Nginx/Contabo VPS deployment (see git history for the old `DEPLOYMENT.md`) served a static Vite build
and is no longer applicable to this Next.js app, which needs a Node runtime (or `next export` if a fully static
target is required later). Vercel is the recommended path going forward.

## Products

Three live products, each with real facts sourced from the founder / existing sites (see `lib/site.ts`):

- **Evolune OS** (evoluneos.com) — agentic SDLC platform. Live.
- **Flasqo** (flasqo.com) — 13-in-1 API reliability engine. Beta, PitchArena finalist.
- **SpendVeto** (spendveto.com) — spend-governance layer for AI agents (x402 + MCP). Live, open source, ETHOnline
  2026 Round 1 (Hedera/World/ENS). No CalCoach / StyleSense AI anywhere — confirmed excluded.

## Imagery notes

- **Logo (final):** `/public/logo.png` (icon mark) and `/public/images/brand-kit/logo_main_clean_full.png` (full
  lockup) — the founder's real orbital logo, used in header/footer/favicon/app-icon/OG image. A later "corrected"
  asset drop (`/public/images/site-corrected/`) was intended to supersede these, but on inspection every file in
  that folder still has baked-in caption/label text burned into the pixels (e.g. "01 LOGO (PRIMARY)", "07 HERO
  BACKGROUND (WEBSITE)") — the same issue as the first brand-kit drop. Per the "fall back to CSS/SVG if a file
  still looks artifacted" rule, the whole `site-corrected/` folder is kept as **art-direction reference only**,
  and the original label-free brand-kit logo assets remain the shipped final logo/favicon/OG image.
- **Product logos (real, final):** `/public/images/products/evoluneos-logo.png` (Evolune OS app icon) and a
  cropped `/public/images/products/flasqo-logo-card.png` (Flasqo mark + wordmark, auto-cropped from
  `flasqo-logo.png` to drop the surrounding gray canvas, shown on its native light chip) are the founders' actual
  logos, rendered via `components/ProductLogo.tsx`. SpendVeto's mark is inlined as SVG in
  `components/SpendVetoIcon.tsx` (from `spendveto-logo.svg`) so its `currentColor` stroke can be tinted to the
  dark theme. `spendveto-og-reference.png` (SpendVeto's real, already-shipped marketing visual) is used as its
  product-page "screenshot".
- Every cinematic space/tech background (hero starfield + planet, orbital ring lines, nebula glows, grid overlays)
  is built as self-contained CSS/SVG/Canvas (`components/backgrounds.tsx`) tuned to the brand palette and to both
  rounds of reference concept art. These are placeholders that can be swapped for commissioned or AI-generated
  photography later without changing layout.
- `evomedx-preview.jpg` exists in `public/images/` from the previous site but is not referenced anywhere — there is
  no confirmed "evomedx" product in any component, doc, or founder communication, so it was intentionally left out
  of the products list rather than invented as a product.
