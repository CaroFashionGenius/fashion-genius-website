# Fashion Genius Design System v1.0 — Release 1.3 Retail Platform

Production Next.js foundation for the Fashion Genius enterprise website.

## Included
- Everything from Release 1.2 Creator Studio
- Dedicated `/retail-platform/` enterprise product experience
- Retail commerce outcomes and omnichannel shopper journey
- Shopper, product, content and revenue intelligence model
- Enterprise architecture built around existing retail systems
- AI agent, analytics and CRM workflow story
- Structured enterprise pilot: Align → Connect → Validate → Scale
- Retail FAQ and enterprise conversion journey
- Framer Motion and GSAP experience layer
- Static export for Cloudflare Pages

## Local preview
```bash
npm install
npm run dev
```
Open `http://localhost:3000` and `http://localhost:3000/retail-platform/`.

## Production build
```bash
npm run build
```
Static output is generated in `out/`.

## Cloudflare Pages
- Framework preset: None
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: leave empty
- Environment variable: `NODE_VERSION=22`

## GitHub commit
`Release 1.3: Retail Platform enterprise experience`

## Release roadmap
- 1.0 Foundation
- 1.1 Motion & Experience
- 1.2 Creator Studio
- 1.3 Retail Platform — current
- 1.4 AI Concierge & integrations
- 1.5 Launch Ready

## Release 1.4 — AI Concierge & Integrations

The site-wide concierge now includes:

- verified local Fashion Genius knowledge for Creator Studio, current plan structure, credits, commercial rights, Retail Platform, pilots, analytics, CRM, AI agents, investors and partnerships
- audience context for creators, retailers, investors and partners
- professional meeting flow
- qualified founder / human handoff without falsely claiming continuous live availability
- lead context and transcript payload for n8n, HubSpot or another CRM
- fail-safe prepared email when no webhook is configured
- custom browser events under `fg:concierge` for analytics integration
- privacy consent before submitting contact details

### Optional environment variables

Copy `.env.example` to `.env.local` for local development, or add the same variables in Cloudflare Pages:

```text
NEXT_PUBLIC_FOUNDER_EMAIL=caroline.steiger@fashion-genius.com
NEXT_PUBLIC_BOOKING_URL=https://your-booking-link.example
NEXT_PUBLIC_CONCIERGE_WEBHOOK_URL=https://your-n8n-domain.example/webhook/fashion-genius-concierge
```

The booking URL can be a Google Appointment Schedule, Calendly or HubSpot Meetings link.

The webhook receives a JSON payload containing the visitor context, selected audience, contact details, topic, message, page URL, routing hint and concierge transcript. Recommended n8n routing:

```text
Webhook
→ Validate payload and consent
→ Enrich / qualify enquiry
→ Route: Creator | Retail | Investor | Partner
→ HubSpot contact + engagement
→ Founder alert for high-priority cases
→ Confirmation email
```

Do not expose private API keys in `NEXT_PUBLIC_*` variables. The public site sends requests only to a secured webhook endpoint; secrets remain inside n8n, HubSpot or the selected backend.
