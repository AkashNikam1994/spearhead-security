# SPEARHEAD SECURITY SERVICE — Corporate Website

A complete, production-ready corporate website for **Spearhead Security Service** built with
Next.js (App Router), TypeScript and Tailwind CSS — updated in place to reflect the
company's official information brochure (source of truth for all company facts).

> **Brand positioning:** Professional Security. Discipline You Can Trust.
> **Founded:** 2014 by SM Badame — headquartered in Jaysingpur, Maharashtra.

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

Production deployment bundle for a Node VPS:

```bash
npm run deploy:build        # builds + assembles deploy/spearhead-security/
                            # (.tar.gz included) → upload, extract, node server.js
```

See `deploy/spearhead-security/DEPLOY.md` (also §10 below) for upload, env, PM2 and
reverse-proxy instructions.

---

## 2. Pages & routes

| Route | Purpose |
|---|---|
| `/` | Homepage — real company intro, stats band, 7-service grid, industries, differentiators, 6-step operations approach, training preview, technology, compliance, founder section, clients & coverage, careers teaser, CTA |
| `/about-us` | Company introduction, founder statement, values, capabilities, people, welfare/conduct, client references, timeline placeholder |
| `/services` | Services landing — the seven brochure services + brochure extras (non-active) |
| `/services/[slug]` | Dedicated detail page per service (overview, highlights, challenges, scope, methodology, controls, benefits, industries, FAQs, CTA) |
| `/industries` | Anchored sections for every enabled industry |
| `/our-approach` | The brochure's six-step operations approach + supervision standards |
| `/training` | Training syllabus categories A–F (brochure) + selection funnel (Application → Deployment) |
| `/careers` | Positions + online application (PDF/DOCX ≤ 2 MB with server-side validation) |
| `/insights`, `/insights/[slug]` | Article library (draft-state articles are never indexed) |
| `/contact` | Lead-generation split layout with enquiry form, verified contact details |
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
| `company.ts` | Brand/legal names, founder & bio, workforce figure, **real contact details, address, hours, map embed, coverage locations + caption**, trust strip, stats, differentiators, process steps, selection process, people points, training syllabus (A–F) & notes, technology (honest) , compliance/welfare items, statutory placeholders, leadership profiles, **historical client references** (with required caption), additional brochure capabilities, approved testimonials, social links |
| `services.ts` | The seven brochure service categories — `enabled: false` removes a service from homepage grid, dropdown, landing page, footer and sitemap instantly. Full detail-page content per service |
| `industries.ts` | Industry catalogue with `enabled` flags and homepage ranking |
| `insights.ts` | Articles — `published: false` drafts are never served or indexed |
| `careers.ts` | Open positions (brochure-based locations) and application options |

**Factual-accuracy rule:** anything not yet verified by the company is marked
`placeholder: true` / `brochureStated: true` and renders with an explicit caption.
Never present unverified values as current claims.

Brochure-era data retained but captioned (not presented as current):
workforce "1000+", service locations (Jaysingpur, Kolhapur, Sangli, Satara, Karad,
Pune), client references (Kirloskar Oil Engines Ltd., FIE Group, Sanjay Ghodawat Group).

Deliberately **not published** (management must verify first): PSARA/licence numbers,
certifications/awards, testimonials, proprietary technology platforms, guard eligibility
criteria (education/age/height), commercial terms & conditions.

---

## 4. Brand identity & imagery

The real spearhead shield logo was extracted from the brochure at high DPI with the
background removed, and the colour system was sampled from the logo artwork:

- `public/brand/logo-mark.png` — shield emblem (transparent)
- `public/brand/logo-horizontal.png` — full horizontal lockup (transparent)
- `src/app/icon.png` — favicon generated from the emblem
- Palette: Navy `#123F62` · Burgundy `#79162D` · Orange `#F17B24` · Mist `#F0F1F1` · Ink `#253242`

Authentic Spearhead photographs extracted from the brochure live in `public/images/`
(wired through the config files). The prep script re-encodes each photo at high
JPEG quality and applies a 2× high-quality upscale + unsharp mask where a display
slot is larger than the native pixels — re-run after any brochure re-extraction:

```bash
node scripts/prepare-brochure-images.mjs
```

```
public/images/home/…            hero band, intro, training, careers, CTA
public/images/services/…        real photos for industrial-security, surveillance,
                                safety-fire-fighting, armed-guards
public/images/extra/…           guards-award, medal-ceremony, deployment-briefing,
                                fire-safety-classroom, fire-drill, intro
public/images/industries/…      industry-scene imagery (generic environments)
```

Brochure extraction tooling (one-time, kept for re-runs — **dev dependencies**):

```bash
node scripts/extract-brochure.mjs         # text + embedded JPEGs from brochure-ref.pdf
node scripts/render-brochure.mjs          # high-DPI page renders
node scripts/crop.mjs <in> "l t r b" <out>  # generic crop helper
node scripts/prepare-brochure-images.mjs  # final logo/photo/favicon prep (rerunnable)
```

These require `brochure-ref.pdf` (not committed; see `.gitignore`) and the dev deps
`pdf-parse`, `pdfjs-dist`, `@napi-rs/canvas`.

---

## 5. Lead capture & storage

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

## 6. SEO implementation

- Unique title + description + canonical per page (`src/lib/seo.ts` → `pageMetadata`).
- Open Graph & Twitter metadata.
- Generated `sitemap.xml` (all 7 services + `/training` included; draft insights excluded) and `robots.txt`.
- `Organization` schema: brand name, founding date (2014), founder, real address,
  telephone (+91 9552666896), email and logo path. Plus `Service`, `BreadcrumbList`
  and `Article` structured data.
- Semantic HTML, single H1s, breadcrumbs, internal linking service ↔ industry.
- Historical locations are never listed as branches in metadata.

---

## 7. Accessibility & performance

- WCAG 2.2 AA targets: focus-visible rings, skip-link, labelled forms, aria attributes
  on navigation/mobile panel, contrast-checked palette.
- `prefers-reduced-motion` respected (scroll-reveal is opt-in via CSS).
- Static generation for all content pages; `next/image` with priority only on heroes;
  fonts self-hosted via `next/font` (zero layout shift, no third-party requests).

---

## 8. Environment variables (`.env.example`)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical/sitemap/OG base URL |
| `RESEND_API_KEY`, `ENQUIRY_NOTICE_EMAIL` | Optional enquiry email notifications |
| `DATABASE_URL` | Reserved for the production PostgreSQL integration |

No secrets are read in frontend code; the only `NEXT_PUBLIC_` value is the site URL.

---

## 10. Deployment (Node VPS)

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run deploy:build
```

`next.config.mjs` uses `output: "standalone"`, so `deploy:build` produces a
**self-contained** bundle — no `npm install` on the server:

```
deploy/
  spearhead-security/          bundle
    server.js                  entrypoint:  node server.js  (PORT env supported)
    DEPLOY.md                  server instructions
    package.json, node_modules
    .next/  public/            app + assets
    .env.example               copy to .env and fill in
  spearhead-security.tar.gz    uploadable archive
```

Key points:

- Set `NEXT_PUBLIC_SITE_URL` **before** building — canonical/OG URLs are baked into
  prerendered pages at build time.
- Copy `.env.example` → `.env` next to `server.js` (Resend email notifications optional).
- Runtime form data goes to `./data/` next to `server.js` — ensure the service user
  can write there (or wire PostgreSQL in `src/lib/store.ts`).
- Run under PM2 (`pm2 start server.js --name spearhead`) on a non-root port and
  reverse-proxy (nginx/caddy) for TLS.
- `deploy/` and archives are git-ignored.

---

## 11. Project structure

```
src/
  app/                    routes (App Router) + api/ + sitemap/robots/icon
  components/
    brand/Logo.tsx        real PNG logo (next/image)
    layout/Header,Footer  sticky nav, utility bar, services dropdown, mobile panel
    home/                 ProcessTimeline, Testimonials
    services/ServiceDetail        reusable detail template (incl. highlights band)
    forms/                EnquiryForm, CareerForm (client validation + states)
    conversion/           WhatsApp floating button + mobile click-to-call
    ui/                   Reveal, SectionHeading/buttons, PageHero/Breadcrumbs
  config/                 ← ALL editable content
  lib/                    seo, store, rate-limit, mailer, append-json
scripts/
  extract/render/crop/prepare brochure tools (dev deps)
  package-deploy.mjs       standalone deployment bundle builder (npm run deploy:build)
  check-static-assets.mjs  verifies served chunk references resolve
  api-test.mjs             API smoke tests
  check-image-paths.mjs   verifies every referenced asset exists
server/db/schema.sql      PostgreSQL schema
data/                     runtime records (git-ignored)
deploy/                   deployment bundle output (git-ignored)
public/images, public/brand   assets
```

---

## 12. Pre-launch checklist (company review)

1. Confirm the **current workforce figure** before removing the brochure-era caption on the
   1000+ stat (`siteConfig.workforce` in `src/config/company.ts`).
2. Confirm **current operating coverage** before presenting the brochure locations as active
   branches (`contact.coverageLocations` / `coverageNote`).
3. Obtain **client authorisation** before using logos/testimonials for the brochure-listed
   references (`clientReferences`).
4. Supply **verified licence/statutory numbers** to replace the `statutory` placeholders.
5. Confirm current **training programme** to decide whether extra syllabus claims can be made
   (`trainingNotes`).
6. Set `contact.whatsapp` when the company's WhatsApp number is known (button auto-appears).
7. Set `contact.mapEmbedUrl` only for the verified office address.
8. Review the brochure extras (Event Security, Special Security Squads, Family Assets) —
   promote to active services only after confirmation (`additionalCapabilities` ↔ `services.ts`).
9. Have legal counsel finalise `/privacy-policy`, `/terms`, `/cookie-policy`.
10. Set `published: true` on approved insights articles only.
11. Provision PostgreSQL (optional) and wire `src/lib/store.ts`.
12. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
13. Run `npm run build && npm run start`, submit both forms once, and check `data/`.

---

## 13. Design reference

- Primary palette (sampled from the brochure logo): Navy `#123F62` · Burgundy `#79162D`
  · Orange `#F17B24` · Light `#F0F1F1` · Ink `#253242` · Body `#5B6B7C`.
- Typography: **Manrope** (headings) + **Inter** (body) via `next/font`.
- Border radius, spacing scale, card shadows and the section rhythm are standardised in
  `src/app/globals.css` + `tailwind.config.ts`.
