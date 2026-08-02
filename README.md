# Fashion Genius Enterprise Website — Sprint 1

Sprint 1 contains:

- Enterprise navigation and Products mega menu
- Cinematic hero with silver light sweep
- Clear scroll-to-enter cue
- Platform story: one brand, two products
- Creator Studio product introduction
- Responsive desktop and mobile layouts
- Basic SEO, schema, robots.txt, sitemap and Google verification file

## Preview locally

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Upload to GitHub

1. Open the new repository `fashion-genius-enterprise`.
2. Choose **Add file → Upload files**.
3. Upload the CONTENTS of this folder, not the ZIP file.
4. Commit message: `Sprint 1: enterprise navigation hero and platform story`.
5. Commit directly to `main`.

## Connect to Cloudflare Pages

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
2. Select `fashion-genius-enterprise`.
3. Production branch: `main`.
4. Framework preset: `None`.
5. Build command: leave empty (or use `exit 0`).
6. Build output directory: `/`.
7. Deploy.

Cloudflare will create a preview URL similar to:

`https://fashion-genius-enterprise.pages.dev`

Do not connect `fashion-genius.com` until the complete site is approved.
