# Architecture

> Status: scaffold. Fill in `[TODO]` blocks once resume + reference vibe are shared.

## 1. Tech Stack
- **Framework:** Next.js (App Router) — [TODO: confirm, or swap for Vite+React / Astro / plain HTML-CSS-JS]
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (page/section transitions) + optionally GSAP for scroll-driven or complex sequences
- **Language:** TypeScript
- **Deployment:** Vercel (default for Next.js) — [TODO: confirm host, e.g. Netlify / GitHub Pages]
- **Content source:** [TODO: hardcoded JSON/MDX vs headless CMS (Sanity/Contentful) vs none — depends on how often you'll update it]

## 2. Folder Structure
```
portfolio/
├── app/
│   ├── layout.tsx              # root layout, fonts, global providers
│   ├── page.tsx                # home / landing
│   ├── about/page.tsx
│   ├── projects/
│   │   ├── page.tsx             # projects index
│   │   └── [slug]/page.tsx      # individual project case study
│   ├── experience/page.tsx      # or merged into about/home
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── layout/                  # navbar, footer, page transition wrapper
│   ├── sections/                # hero, about, skills, projects grid, timeline, contact
│   └── ui/                      # buttons, cards, badges, cursor, loaders
├── content/
│   ├── profile.ts                # [TODO: populate from resume]
│   ├── experience.ts              # [TODO: populate from resume]
│   ├── skills.ts                  # [TODO: populate from resume]
│   └── projects.ts                # [TODO: populate from resume/portfolio pieces]
├── lib/                          # animation variants, utils, hooks
├── public/                       # images, fonts, resume PDF
└── styles/                       # design tokens if not fully in Tailwind config
```

## 3. Pages / Routes
| Route | Purpose | Notes |
|---|---|---|
| `/` | Landing/hero, quick intro, featured work | [TODO: single-page scroll vs multi-page?] |
| `/about` | Bio, background, skills | pulled from resume |
| `/projects` | Grid/list of work | filter by category? |
| `/projects/[slug]` | Case study detail | [TODO: needed, or keep everything on one page?] |
| `/experience` | Work history / timeline | could merge into About |
| `/contact` | Contact form / links | [TODO: form backend — Formspree, Resend, or just mailto?] |

## 4. Data Flow
- Resume-derived content lives in `content/*.ts` (typed objects) — single source of truth, imported by components.
- No backend required if content is static; revisit if you want a CMS for easy updates without redeploying.
- Contact form: client → [TODO: form handler service] → email notification.

## 5. Site Map
Given the "file archive" concept (see design.md): a **single-page scroll** with a hero, about, skills, experience, and a **Projects "file rail"** section fits best — 4 projects is enough to open as expandable file panels in place, without needing separate routes. `/projects/[slug]` can stay as a stretch goal if project count grows later, but v1 should keep everything on one page for a tighter, cohesive feel.

## 6. Performance & SEO
- Image optimization via `next/image`
- Lazy-load below-the-fold animated sections
- Meta tags / OpenGraph image for sharing
- Lighthouse target: 90+ across the board

---
### Open questions for you
1. Static content (edit code to update) is fine given only 4 projects/2 roles right now — confirm, or say if you'll be updating this frequently enough to want a CMS.
2. Confirm Next.js + Tailwind + Framer Motion, or prefer something lighter (plain Vite + React)?
