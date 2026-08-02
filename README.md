# Fashion Genius Enterprise Website — Sprint 2

Static HTML/CSS/JavaScript website for Cloudflare Pages.

## Sprint 2 includes

- Expanded platform story
- Creator Studio product showcase
- Real product screenshots for plans, credits, billing and invoices
- End-to-end creator workflow storytelling
- Retail Platform enterprise entry
- AI Agents, Analytics, CRM and Business Intelligence section
- Platform benefits
- Professional digital concierge UI
- FAQ intent responses
- Meeting booking hook
- Founder escalation fallback

## Upload to GitHub

Upload all files and the `assets` folder to the root of the existing repository.
Commit suggestion:

`Sprint 2: product showcase intelligence retail and concierge`

Cloudflare Pages will deploy automatically after the commit.

## Concierge configuration

Open `script.js` and find:

```js
const CONCIERGE_CONFIG = {
  bookingUrl: '',
  founderEmail: 'caroline.steiger@fashion-genius.com'
};
```

Add the final Google Appointment Schedule or Calendly URL to `bookingUrl`.

The included concierge answers standard questions locally. A true real-time founder chat requires a live-chat provider such as Intercom, Crisp, HubSpot Chat or Tawk.to. The current escalation path opens a prefilled founder email for exceptional questions; it does not falsely claim that Caroline is online.

## Files

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `robots.txt`
- `sitemap.xml`
- Google verification file
