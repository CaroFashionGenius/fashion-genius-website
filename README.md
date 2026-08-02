# Fashion Genius Design System v1.0 — Release 1.0 Foundation

Production foundation for the Fashion Genius enterprise website.

## Included
- Next.js App Router + React + TypeScript
- Static export for Cloudflare Pages
- Central design tokens in `app/globals.css`
- Reusable layout, section and UI components
- Creator Studio, Retail Platform, Intelligence, Pricing, Comparison, ROI, Founder and Concierge foundations
- SEO metadata, JSON-LD, sitemap and robots

## Local preview
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
```
The static output is generated in `out/`.

## GitHub
Upload the complete project to the `nextjs-rebuild` branch. Commit suggestion:
`Release 1.0: Next.js foundation and Fashion Genius design system`

## Cloudflare Pages (after the files are in the branch)
- Framework preset: Next.js (Static HTML Export) or None
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`
- Node version: 22

Do not change the production domain until the branch preview has been reviewed.

## Release roadmap
- 1.0 Foundation — current
- 1.1 Motion & Experience
- 1.2 Creator Studio product page
- 1.3 Retail Platform
- 1.4 AI Concierge & integrations
- 1.5 Launch Ready
