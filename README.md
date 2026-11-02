# SPEARHEAD SECURITY — Corporate Website

A complete, production-ready corporate website for **Spearhead Security** built with
Next.js (App Router), TypeScript and Tailwind CSS.

> **Brand positioning:** Professional Protection. Disciplined Execution. Trusted Partnerships.
> **Primary message:** Security That Protects More Than Property.

---

## 1. Quick start

```bash
npm install
cp .env.example .env        # optional; sensible defaults work out of the box
npm run dev                 # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

Quality gates:

```bash
npm run lint                # ESLint (Next.js core-web-vitals)
```

API test utility (used during development):

```bash
node scripts/api-test.mjs   # exercises /api/career-applications (requires dev server)
```

---

## 2. Pages & routes

| Route | Purpose |
|---|---|
| `/` | Homepage — all 15 brief sections (hero, trust gap, services, industries, framework, people, compliance, leadership, testimonials placeholder, careers teaser, CTA) |
| `/about-us` | Vision, mission, values, philosophy, capability, people, quality, governance, timeline placeholder |
| `/services` | Services landing (all enabled services) |
| `/services/[slug]` | Dedicated detail page per service (description, challenges, scope, methodology, controls, benefits, industries, FAQs, CTA) |
| `/industries` | Anchored sections for every enabled industry |
| `/our-approach` | Full operational delivery model (10 phases) |
| `/careers` | Positions + online application (PDF/DOCX ≤ 2 MB with server-side validation) |
| `/insights`, `/insights/[slug]` | Article library (draft-state articles are never indexed) |
| `/contact` | Lead-generation split layout with enquiry form |
| `/privacy-policy`, `/terms`, `/cookie-policy` | Legal template pages (marked for legal review) |
| `/sitemap.xml`, `/robots.txt` | Generated from enabled content |
| `/api/enquiries` | POST — validated, rate-limited, honeypot-protected |
| `/api/career-applications` | POST — multipart, resume validated + stored securely |
| `/api/services`, `/api/insights` | Read-only content APIs |

---

## 3. Central content configuration (edit here, not in components)

Everything editable lives in `src/config/`:

| File | What it controls |
|---|---|
| `company.ts` | Legal/brand names, **contact details, WhatsApp, address, hours, map embed, coverage**, trust strip, differentiators, process steps, people points, technology, compliance items, statutory (PSARA/GST) values, leadership profiles, social links, **approved testimonials** |
| `services.ts` | Service catalogue — `enabled: false` removes a service from homepage grid, dropdown, landing page, footer and sitemap instantly. Full detail-page content per service |
| `industries.ts` | Industry catalogue with `enabled` flags and homepage ranking |
| `insights.ts` | Articles — `published: false` drafts are never served or indexed |
| `careers.ts` | Open positions and application options |

**Factual-accuracy rule:** anything not yet verified by the company is marked
`placeholder: true` and renders with an obvious "to be confirmed" treatment.
Never present unverified values as claims.

---

## 4. Imagery — placeholder system & how to replace it

Because photography was not yet supplied, the build ships with a generator that renders
**branded navy/steel gradient placeholders** (with subtle chevron/grid/wave motifs) so
every section looks finished rather than broken:

```bash
node scripts/generate-placeholders.mjs
```

All 30 images live under `public/images/` with paths wired through the config files:

```
public/images/home/…            home sections
public/images/services/…        one per service
public/images/industries/…      one per industry
public/images/pages/…           inner-page heroes
public/brand/…                  logo SVGs (horizontal, horizontal-white, mark)
```

**To swap in real photography: replace any file with a photo of the same name.**
The generator only needs to be re-run if you add new slots. Every image is referenced
from `src/config/*` so real assets drop in with zero code changes.

---

## 5. Logo assets

Rendered as inline SVG components (`src/components/brand/Logo.tsx`) plus static exports:

- `public/brand/logo-horizontal.svg` — dark wordmark for light backgrounds
- `public/brand/logo-horizontal-white.svg` — white wordmark for dark backgrounds
- `public/brand/logo-mark-dark.svg` — icon-only
- `src/app/icon.svg` — favicon (shield + forward spearhead geometry)

The mark combines a geometric shield with an abstract forward spearhead. Final artwork
should be refined by a designer; the geometry system is intentional and reusable.

---

## 6. Lead capture & storage

### Enquiry pipeline (`POST /api/enquiries`)

1. In-process **rate limiting** — 5 submissions / 10 min per IP (`src/lib/rate-limit.ts`).
2. **Honeypot** field silently rejects bots.
3. Manual **validation** with per-field errors surfaced to the UI.
4. Record stored **server-side** (never only in browser storage) to `data/enquiries.json`.
5. Optional **email notification** via Resend HTTP API when `RESEND_API_KEY` + `ENQUIRY_NOTICE_EMAIL` are set.

### Career pipeline (`POST /api/career-applications`)

- Accepts `multipart/form-data`; resume files: **PDF/DOCX only, ≤ 2 MB**, validated
  server-side by size, MIME/extension.
- Files are stored in `data/uploads/` — **outside the public web root** — with only the
  internal path recorded.

By default records append to `data/*.json` (git-ignored). **This is functional but
minimal; see the PostgreSQL schema** in `server/db/schema.sql` (enquiries,
career_applications, services, testimonials — indices + timestamps included). For
production, provision Postgres and swap the two functions in `src/lib/store.ts`.

### Spam, CORS and hardening notes

- Honeypot + rate limiting ship in-box; add CAPTCHA at `EnquiryForm` if desired.
- The app exposes no write APIs to browsers beyond the two POST endpoints; keep them
  behind your standard reverse-proxy hardening.
- Scaling rate limiting to multi-node: swap `src/lib/rate-limit.ts` for Redis.

---

## 7. SEO implementation

- Unique title + description + canonical per page (`src/lib/seo.ts` → `pageMetadata`).
- Open Graph & Twitter metadata with per-service OG images.
- Generated `sitemap.xml` (services included, draft insights excluded) and `robots.txt`.
- `Organization`, `Service`, `BreadcrumbList` and `Article` structured data.
- Semantic HTML, single H1s, breadcrumbs, internal linking service ↔ industry.
- Geographical keywords are intentionally **not** targeted until service locations
  are confirmed (see `contact.coverageLocations`).

---

## 8. Accessibility & performance

- WCAG 2.2 AA targets: focus-visible rings, skip-link, labelled forms, aria attributes
  on navigation/mobile panel, contrast-checked palette.
- `prefers-reduced-motion` respected (scroll-reveal is opt-in via CSS).
- Static generation for all content pages; `next/image` with priority only on heroes;
  fonts self-hosted via `next/font` (zero layout shift, no third-party requests).
- First-load JS ≈ 102 kB on content pages.

---

## 9. Environment variables (`.env.example`)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical/sitemap/OG base URL |
| `RESEND_API_KEY`, `ENQUIRY_NOTICE_EMAIL` | Optional enquiry email notifications |
| `DATABASE_URL` | Reserved for the production PostgreSQL integration |

No secrets are read in frontend code; the only `NEXT_PUBLIC_` value is the site URL.

---

## 10. Project structure

```
src/
  app/                    routes (App Router) + api/ + sitemap/robots/icon
  components/
    brand/Logo.tsx        inline logo components
    layout/Header,Footer  sticky nav, utility bar, dropdown, mobile panel
    home/                 ProcessTimeline, Testimonials
    services/ServiceDetail reusable detail template
    forms/                EnquiryForm, CareerForm (client validation + states)
    conversion/           WhatsApp floating button + mobile click-to-call
    ui/                   Reveal, SectionHeading/buttons, PageHero/Breadcrumbs
  config/                 ← ALL editable content
  lib/                    seo, store, rate-limit, mailer, append-json
scripts/
  generate-placeholders.mjs   branded image generator
  api-test.mjs                API smoke tests
server/db/schema.sql          PostgreSQL schema
data/                         runtime records (git-ignored)
public/images, public/brand   assets
```

---

## 11. Pre-launch checklist (company review)

1. **Confirm every `placeholder: true` value** in `src/config/company.ts` (phone, email,
   WhatsApp, address, hours, PSARA/GST, leadership profiles, coverage locations).
2. Replace placeholder imagery with licensed/commissioned photography (§4).
3. Set `contact.mapEmbedUrl` only for the verified office address.
4. Add approved testimonials to `approvedTestimonials`; they render automatically.
5. Review service catalogue against actual offerings (enable/disable in `services.ts`).
6. Have legal counsel finalise `/privacy-policy`, `/terms`, `/cookie-policy`.
7. Set `published: true` on approved insights articles only.
8. Provision PostgreSQL (optional) and wire `src/lib/store.ts`.
9. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
10. Run `npm run build && npm run start`, submit both forms once, and check `data/`.

---

## 12. Design reference

- Primary palette: Midnight Navy `#0D2035` · Steel Blue `#173D5B` · Heritage Gold `#C29A51`
  · Light `#F3F5F7` · Ink `#202B38` · Body `#637083`.
- Typography: **Manrope** (headings) + **Inter** (body) via `next/font`.
- Border radius, spacing scale, card shadows and the section rhythm are standardised in
  `src/app/globals.css` + `tailwind.config.ts`.
