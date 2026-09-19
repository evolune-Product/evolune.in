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

## Imagery notes

- Real assets in use: `/public/logo.png` (icon mark) and `/public/images/brand-kit/logo_main_clean_full.png`
  (full lockup) — founder-supplied orbital logo. Product screenshots (`evolune-os-preview.jpg`,
  `flasqo-preview.jpg`) are real. `/public/images/brand-kit/*.png` are founder-supplied concept-sheet crops kept
  as **art-direction reference only** (several still have baked-in caption text / are low-res) — not used directly
  as production imagery.
- Every cinematic space/tech background (hero starfield + planet, orbital ring lines, nebula glows, grid overlays)
  is built as self-contained CSS/SVG/Canvas (`components/backgrounds.tsx`) tuned to the brand palette and to the
  founder's reference concept sheet. These are placeholders that can be swapped for commissioned or AI-generated
  photography later without changing layout.
- `evomedx-preview.jpg` exists in `public/images/` from the previous site but is not referenced anywhere — there is
  no confirmed "evomedx" product in any component, doc, or founder communication, so it was intentionally left out
  of the products list rather than invented as a product.
