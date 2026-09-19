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

- **Logo (final, third and authoritative round):** `/public/images/brand-v2/` — genuinely clean, label-free logo
  files confirmed by the founder. `01_logo_primary_dark.png` is the full lockup (icon + wordmark + tagline),
  referenced directly by `components/Logo.tsx`'s `FullLockupImage` and used to build `public/og-image.png`.
  `03_app_icon.png` was cropped (darkness-threshold bbox, Pillow) and matted onto the brand-dark background to
  produce `public/images/icon-mark-512.png`, which is resized into `public/logo.png` (nav/footer icon),
  `app/icon.png` (favicon), and `app/apple-icon.png` (apple touch icon). This round supersedes both earlier logo
  drops.
  - Two earlier rounds are kept only as history/reference, not used: `/public/images/brand-kit/` (first drop —
    used briefly, later superseded) and `/public/images/site-corrected/` (second drop — every file in it turned
    out to have baked-in caption/label text burned into the pixels, e.g. "01 LOGO (PRIMARY)", "07 HERO BACKGROUND
    (WEBSITE)", so none of it was ever shipped).
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
