# viabo.ai marketing site

Next.js (App Router) marketing site for viabo — AI asset management for built environments.
Six pages, all copy in one file, contact form creates leads in Odoo CRM.

## Edit copy

Everything public is in `src/content/site.ts`. Components never contain words.
Vocabulary rule: describe what the customer gets, never how it's produced. No 3DGS/SLAM/LiDAR,
no vendor names, no robotics/wayfinding, no full-UI screenshots.

## Run locally

```bash
npm install
npm run dev
```

Without Odoo env vars the contact form logs enquiries to the server console and still shows success.

## Deploy to Vercel

1. Push this folder to a Git repo and import it in Vercel (framework preset: Next.js, no extra settings).
2. Project → Settings → Environment Variables: add the four `ODOO_*` values from `.env.example`.
   Use an Odoo **API key** for a dedicated low-privilege user with CRM "User: Own documents only".
3. Deploy. Check the preview URL, submit the form once, confirm a lead appears in Odoo CRM.

## DNS cutover (Cloudflare)

Odoo currently serves `www.viabo.ai`. To move the marketing site to Vercel and keep Odoo for CRM:

| Record | Type | Value | Proxy |
|---|---|---|---|
| `www` | CNAME | `cname.vercel-dns.com` | DNS only (grey cloud) |
| `@` (apex) | A | `76.76.21.21` | DNS only |
| `erp` | CNAME | *(existing Odoo target)* | as it is now |
| MX records | MX | *(MXroute — unchanged)* | — |

Then in Odoo: Website → Configuration → Settings → Domain = `https://erp.viabo.ai`.
Namecheap is registrar only (nameservers already at Cloudflare) — nothing to change there.

`vercel.json` already 301s the old `/education` and `/shop` URLs and forwards `/web/*` (Odoo login) to `erp.viabo.ai`.

## Structure

```
src/app/                  routes (/, /how-it-works, /solutions/[slug], /why-viabo, /about, /contactus, /privacy)
src/app/contactus/        form (client) + server action → src/lib/odoo.ts (JSON-RPC crm.lead create)
src/components/           Header, Footer, PageHero, CtaBand, Art (abstract SVG illustrations)
src/content/site.ts       all copy and metadata
```
