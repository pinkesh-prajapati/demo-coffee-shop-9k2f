# Bean & Brew — Landing Page

A single-page marketing site for the coffee shop **Bean & Brew**, built with React, Vite, and Tailwind CSS.

> Tagline: _"Slow coffee, warm mornings"_

## Sections

The page is composed of five sections, in order:

1. **Hero** — Shop name, the tagline "Slow coffee, warm mornings", and a CTA button that smooth-scrolls to the menu.
2. **Menu** — Espresso, latte, and cold brew with descriptions and prices.
3. **Opening Hours** — Weekly schedule, with the current day highlighted.
4. **Gallery** — Responsive grid of placeholder photo tiles.
5. **Contact** — Shop details (address, phone, email) alongside a validated contact form (name, email, message) with a simulated success state.

A sticky header with anchor links sits above the sections, and a simple footer closes the page.

## Tech Stack

- [React](https://react.dev/) (JavaScript, `.jsx`)
- [Vite](https://vitejs.dev/) for dev server and builds
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# production build
pnpm run build

# preview the production build
npm run preview
```

## Project Structure

```
index.html
src/
  main.jsx                  # Entry point — mounts <App /> via ReactDOM.createRoot
  App.jsx                   # Composes Hero → Menu → Hours → Gallery → Contact
  index.css                 # Tailwind directives
  data/
    site.js                 # Single source of truth for all page copy
  components/
    HeroSection.jsx
    MenuSection.jsx
    HoursSection.jsx
    GallerySection.jsx
    ContactSection.jsx
```

## Editing Content

All copy lives in `src/data/site.js` — shop name, tagline, menu items and prices, opening hours, gallery placeholders, and contact details. Update that file to change what the page displays; no component edits required.

## Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `vite` | Start the Vite dev server |
| `build` | `vite build` | Production build |
| `preview` | `vite preview` | Preview the production build locally |

## Deployment

A live preview is deployed automatically by the repository's preview workflow after each verified run.
