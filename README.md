# Fashion Genius Design System v1.0 — Release 1.1 Motion & Experience

Production-grade Next.js foundation with a cinematic motion layer for the Fashion Genius enterprise website.

## Included

- Next.js App Router + React + TypeScript
- Static export for Cloudflare Pages
- Framer Motion for loading, scroll progress and viewport reveals
- GSAP + ScrollTrigger for hero choreography, cinematic parallax and product reveals
- Reduced-motion accessibility support
- Animated navigation, product cards, platform flow and founder experience
- Existing Release 1.0 design system, content and assets

## Local preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static output is generated in `out/`.

## GitHub

Upload the complete project to the `nextjs-rebuild` branch. Commit suggestion:

`Release 1.1: cinematic motion GSAP and Framer Motion`

## Cloudflare Pages

- Framework preset: None
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: empty
- Environment variable: `NODE_VERSION=22`

## Motion architecture

- `components/motion/LoadingScreen.tsx`
- `components/motion/ScrollProgress.tsx`
- `components/motion/MotionProvider.tsx`
- `components/motion/Reveal.tsx`
- `components/motion/Parallax.tsx`
- GSAP hero sequence in `components/sections/Hero.tsx`
