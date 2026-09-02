# Superfix Auto Center — Al Qusais

Frontend-only marketing website for Superfix Auto Center Al Qusais, Dubai. Built to drive phone calls, WhatsApp messages, and service inquiries.

**This is a frontend-only project.** There is no backend, API, database, or real form submission — the "Book a Service" form validates client-side and shows a local success state only. Call and WhatsApp buttons use standard `tel:` and `wa.me` links.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (icons)
- Framer Motion (animation)

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

## Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the Vite dev server            |
| `npm run build`    | Type-check and build for production  |
| `npm run lint`     | Run oxlint                           |
| `npm run preview`  | Preview the production build locally |

## Project Structure

```text
src/
├── components/   # Navbar, MobileDrawer, BookServiceModal, CTAButton, etc.
├── sections/     # One component per landing-page section
├── data/         # Business info, services, testimonials, nav, images
├── App.tsx
├── main.tsx
└── index.css     # Tailwind v4 theme tokens (colors, fonts)
```
