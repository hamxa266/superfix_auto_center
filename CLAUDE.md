# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Frontend-only marketing site for Superfix Auto Center Al Qusais (Dubai). Built with React + TypeScript + Vite + Tailwind CSS v4, Lucide icons, and Framer Motion.

**Strict scope rule: no backend.** There is intentionally no server, API, database, auth, or real form submission anywhere in this codebase. The "Book a Service" modal ([src/components/BookServiceModal.tsx](src/components/BookServiceModal.tsx)) validates client-side only and shows a local success state — it must never be wired to a network request. Phone/WhatsApp actions use plain `tel:`/`wa.me` links. Keep any future changes within this boundary.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc -b type-check, then vite build
npm run lint      # oxlint
npm run preview   # preview the production build
```

There is no test runner configured. `tsconfig.app.json` has `noUnusedLocals`/`noUnusedParameters` on, so `npm run build` will fail on unused code — treat it as the type-check step.

## Architecture

- **`src/data/*.ts`** — all editable business content lives here as plain arrays/objects: `business.ts` (phone, address, hours, maps URL, rating), `services.ts`, `whySuperfix.ts`, `process.ts`, `testimonials.ts`, `nav.ts`, `images.ts` (hero/section photo URLs + alt text). Sections import from these rather than hardcoding copy, so most content edits happen here, not in JSX.
- **`src/sections/*`** — one component per landing-page section (Hero, TrustBar, Services, Diagnostics, WhySuperfix, Process, Reviews, Contact, EmergencyCTA, Footer), composed in order in [src/App.tsx](src/App.tsx).
- **`src/components/*`** — shared chrome and primitives: `Navbar` + `MobileDrawer` (nav, becomes solid on scroll), `StickyMobileCTA` (fixed bottom call/WhatsApp bar, `lg:hidden`), `BookServiceModal` (the frontend-only booking form), `CTAButton` (polymorphic anchor/button with `primary`/`secondary`/`ghost` variants), `SectionHeading`, `Reveal` (shared `whileInView` fade-up wrapper used for scroll-triggered animation).
- **Booking modal state** is lifted to `App.tsx` (`bookingOpen`) and passed into `Hero` via `onBookService`; `BookServiceModal` itself owns all form/validation/success state internally.
- **Styling**: Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js` — theme tokens are defined in [src/index.css](src/index.css) under `@theme`: the `ink`/`charcoal`/`graphite`/`steel`/`line`/`metal`/`silver`/`paper` near-black/gray scale, `red`/`red-dim`/`red-bright` accent, and `font-sans` (Inter) / `font-display` (Manrope)). Use these semantic color/font tokens instead of raw hex or default Tailwind grays to keep the automotive dark/red identity consistent.
- **Animation**: use the existing `Reveal` component or `Reveal`-style independent per-element `initial`/`animate`/`transition` props for new scroll animations. Avoid Framer Motion parent→child `variants` propagation with `staggerChildren` for entrance animations — it's flaky in this codebase (children can get stuck at their `hidden` variant); prefer explicit per-element `transition.delay` instead (see `fadeUp` in [src/sections/Hero.tsx](src/sections/Hero.tsx)).
