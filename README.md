# Fashion Genius Enterprise Website — Sprint 3

Static HTML/CSS/JavaScript release for Cloudflare Pages.

## Included

- All Sprint 1 and Sprint 2 sections
- Creator Studio pricing aligned to the Phase 2 Monetization Briefing
- Free, Creator, Pro, Studio and Enterprise plans
- Founding Creator programme banner
- Expandable full plan-comparison table
- Interactive production ROI / capacity calculator
- Common Questions accordion
- Updated Fashion Genius Concierge plan answers

## Deploy

Upload the contents of this folder to the root of the GitHub repository connected to Cloudflare Pages. Commit directly to `main`. Cloudflare will redeploy automatically.

Suggested commit message:

`Sprint 3: pricing comparison ROI calculator and common questions`

## Important configuration

In `script.js`, add the booking URL when available:

```js
const CONCIERGE_CONFIG = {
  bookingUrl: '',
  founderEmail: 'caroline.steiger@fashion-genius.com'
};
```
