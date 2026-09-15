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
| `/` | AOG hero, three paths, methods, quote form |
| `/aog` | Field dispatch and what to have ready |
| `/inspections` | ET / UT / MT / PT / VT plus published airframe work |
| `/training` | Classroom courses (no stale fees) |
| `/supplies` | QC NDT equipment, rentals, consumables |
| `/about` | Combined shop story |
| `/contact` | Dual phones + quote form (`?need=aog\|inspection\|training\|supplies`) |

## Quote form

The quote form posts to `/api/quote` and stays on the page (no mailto). Submissions are written to `.data/quotes.json` locally. Set `FORM_ENDPOINT` (Formspree or similar) when the domain is live so the shop inbox gets a copy.

Need still selects the target inbox:

- AOG / inspection → `info@aircraftndt.com`
- Training → `info@level3ndt.com`
- Supplies → `sales@qcndt.net`

## Later: domain

1. Point DNS at the host (Vercel, Netlify, Cloudflare Pages, or static `output: "export"`).
2. Flip `site.url` in `src/lib/site.ts` if the live hostname is not `aogndt.com`.
3. Wire the form endpoint and add SSL.
4. Optionally 301 the old brochure sites.

See `CONFIRM_HOURS.md` before claiming 24/7 coverage.
