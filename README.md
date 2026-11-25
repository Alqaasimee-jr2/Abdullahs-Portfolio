# Abdullah Qaasim-Falade — Portfolio

Strategic multi-page personal portfolio for **Abdullah Qaasim-Falade** — Creative Technologist, Systems Architect, and Founder of [NIT7ER](https://nit7er.vercel.app) & [NIT7ER Academy](https://nit7er-academy.vercel.app).

## Architecture

- `/` — **Focused 60-Second Conversion & Trust Funnel** (Hero, Verified Proof Strip, 4 Flagship Case Studies, 3 Pure-Proof Engagement Tracks, Top 3 Field Notes, Visual Storytelling Band, and 1-Click Referral Card)
- `/work` — **Searchable & Filterable Archive** of all 18 public projects
- `/work/[slug]` — **18 Statically Generated, Shareable Case Studies** with per-project OpenGraph metadata, architectural deep dives, and 1-click link copy
- `/about` — **Curated Humanity, Ventures & Craft** (Lagos & Great Ife roots, NIT7ER & NIT7ER Academy, 6 capability pillars, Tempalette photography & cinematography, 3-step method)
- `/writing` — **Full Field Notes & Essays Index**
- `/contact` — **3-Path Inquiry & Referral Router** (`Contract / Build`, `Role / Advisory`, `Refer / Connect`), privacy-safe WhatsApp CTA (no raw phone digits printed), NIT7ER Strategy Call booking, and 1-click 2-line referral copy card

## Tech Stack

- **Framework:** Next.js 16 (App Router, static prerendering via `generateStaticParams`) + React 19 + TypeScript 5
- **Styling:** Bespoke Vanilla CSS Editorial Architectural Design System (Warm Limestone Light + Obsidian Atelier Dark)
- **Typography:** `Instrument Serif`, `Plus Jakarta Sans`, `JetBrains Mono` via `next/font/google`

## Drop-In Customization (`src/data/portfolio.ts`)

- **Real portrait photo:** Save your photo to `public/images/portrait.webp` and update `PERSON.portraitImage`.
- **Client / peer testimonials:** Add entries to `TESTIMONIALS` — the testimonials band renders automatically on `/about`.
- **X / Twitter handle:** Uncomment the `twitter` entry in `SOCIAL_LINKS`.

## Local Development & Deployment

```bash
npm install
npm run dev
npm run build
```

Ready for zero-config deployment on **Vercel**.
