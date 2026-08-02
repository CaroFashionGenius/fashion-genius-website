# Fashion Genius Design System v1.0 — Release 1.5 Launch Ready

Production-ready static Next.js export for the Fashion Genius enterprise website.

## Included

- Release 1.0 Next.js foundation and design system
- Release 1.1 Framer Motion + GSAP cinematic experience
- Release 1.2 Creator Studio product experience and monetisation baseline
- Release 1.3 Retail Platform enterprise experience
- Release 1.4 AI Concierge qualification, meeting flow and founder handoff
- Release 1.5 launch hardening, bilingual DE/EN switch, cookie consent, SEO, manifest, 404, legal route foundations and final responsive polish

## Local verification

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

The static production output is generated in `out/`.

## GitHub

Upload the complete project to the `nextjs-rebuild` branch while preserving this structure:

```text
app/
components/
lib/
public/
package.json
next.config.ts
tsconfig.json
next-env.d.ts
README.md
```

Commit suggestion:

```text
Release 1.5: launch performance SEO language and final polish
```

## Cloudflare Pages

```text
Framework preset: None
Build command: npm run build
Build output directory: out
Root directory: leave empty
NODE_VERSION: 22
```

## Environment variables

```text
NEXT_PUBLIC_FOUNDER_EMAIL=caroline.steiger@fashion-genius.com
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_CONCIERGE_WEBHOOK_URL=
```

The Concierge works with email fallback when booking and webhook URLs are empty.

## Language switch

The header contains a `DE / EN` switch. The choice is stored locally and reused on the next visit. English remains the default and canonical website language. The language layer translates the main brand, product, pricing, retail and Concierge interface copy without duplicating the product architecture.

## Launch checklist — required before production domain switch

1. Add the final booking URL.
2. Add the production n8n Concierge webhook and test CRM routing.
3. Confirm the final company legal name, complete postal address, commercial register and VAT details in `/imprint/`.
4. Have `/privacy/`, `/terms/` and Creator Studio product terms reviewed by qualified Swiss/EU legal counsel.
5. Connect analytics only after consent and verify the `fg:consent` event.
6. Test Creator Studio plan links, founder email, Retail pilot CTA and all navigation links.
7. Run Lighthouse on desktop and mobile.
8. Validate structured data, sitemap, robots and Google Search Console verification.
9. Test Chrome, Safari, Firefox, iPhone and Android.
10. Review the branch preview before merging `nextjs-rebuild` into `main`.
