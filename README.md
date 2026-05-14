# soft.

A one-page e-commerce UI for a single-product clothing store — a heavyweight cream cotton t-shirt — designed in a playful claymorphic style with animated interactions throughout.

Built to demonstrate UI design judgment, accessible interaction patterns, and motion craft in a modern Next.js stack.

## Highlights

- One-page product story: hero → material specs → gallery → fit guide → buy block → FAQ
- Soft Clay (claymorphism) visual style with custom design tokens (clay-cream, clay-peach, clay-mint, clay-butter, clay-lilac, clay-pink, clay-ink)
- Feature-based folder layout under `src/features` with shared UI primitives in `src/shared`
- Framer Motion animations: hero shirt parallax + bob, decoration motion, headline word stagger, marquee strip, section fade-up stagger, animated collapsible FAQ, fly-to-cart effect from button to nav badge, and cart badge bump
- Fully accessible: semantic HTML, keyboard navigation, focus rings, `aria-pressed` size chips, `aria-expanded` collapsibles, `prefers-reduced-motion` respected by every animation
- Responsive at 375 px, 768 px, 1024 px, 1440 px

## Tech Stack

- Next.js 16 (App Router) with Turbopack
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Framer Motion (via the `motion` package)
- Google Fonts: Fredoka (display) + Nunito (body)

## Getting Started

### Prerequisites

- Node.js 18.18 or newer
- npm (or your package manager of choice — adapt the commands accordingly)

### Install

```bash
git clone https://github.com/anousone23/soft-tee.git
cd soft-tee
npm install
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page. Hot reload is enabled — edit any file under `src/` and the page updates instantly.

### Production build

```bash
npm run build
npm run start
```

### Lint and type check

```bash
npm run lint
npx tsc --noEmit
```

## Project Structure

```
src/
  app/                       # Next.js App Router (routes, layout, global CSS)
  features/
    cart/                    # BuyBlock, FlyToCart, CartContext
    product/                 # Hero, Material, MaterialMarquee, Gallery, SizeFit, SizeContext
    site/                    # SiteNav, SiteFooter, FAQ
  shared/
    ui/                      # ClayCard, ClayButton, ClayChip, Collapsible, AnimatedSection, Marquee
    icons/                   # Inline SVG icon set
    components/              # Providers (composition root)
```

Path alias `@/*` resolves to `./src/*` (configured in `tsconfig.json`).

## License

Product photos are sourced from [Unsplash](https://unsplash.com) under the Unsplash License (free for commercial use).
