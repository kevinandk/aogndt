# AOGNDT

Public front door for **Level 3 NDT** (FAA Repair Station N5DR176O) and affiliate supplier **QC NDT**. Local Next.js draft — domain and hosting come later.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Path | Purpose |
| --- | --- |
| `/` | 24/7 AOG hero, checklist, coverage map, fleet, methods, cert |
| `/aog` | Call / email dispatch, checklist, steps, map, vCard |
| `/inspections` | ET / UT / MT / PT / VT plus published airframe work |
| `/training` | Classroom courses (no stale fees) |
| `/supplies` | QC NDT equipment, rentals, consumables |
| `/about` | Combined shop story + FAA 145 / A003 PDFs |
| `/contact` | 877, AOG email, supplies phone |

## AOG contact

- Phone `877-9AOG-NDT` — 24/7, a dispatcher answers
- Email `AOGNDT@proton.me` (mailto prefilled with the dispatch checklist)
- Planned mailbox `dispatch@aogndt.com` lives in `site.aog.emailNext` only — do not print it until that address is live

Training still uses `info@level3ndt.com`. Scheduled inspections still use `info@aircraftndt.com`. Supplies: `sales@qcndt.net`.

## Later: domain

1. Point DNS at the host (Vercel, Netlify, Cloudflare Pages, or static `output: "export"`).
2. Flip `site.url` in `src/lib/site.ts` if the live hostname is not `aogndt.com`.
3. Add SSL.
4. Optionally 301 the old brochure sites.

Hours decision is in `CONFIRM_HOURS.md`.
