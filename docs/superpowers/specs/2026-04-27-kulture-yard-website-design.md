# Kulture Yard — Website Design Spec

**Date:** 2026-04-27
**Owner:** Osereme7
**Status:** Approved (verbal approval in brainstorming session)

## Context

Marketing website for **Kulture Yard**, a gospel-themed African restaurant and lounge in Ikeja, Lagos. Owned by reggae gospel artist **Buchi Atuonwu**. Target audience: Lagos diners (predominantly mobile), the gospel/Christian community, families, and groups looking for a culturally rooted hangout. Brand ethos: *"Eat. Pray. Love. — but in Lagos."* / "zero bad energy."

## Goals

1. Establish online presence (currently no website — only Facebook + Instagram).
2. Showcase the full menu with prices, filterable by category.
3. Drive reservations via WhatsApp / phone.
4. Communicate the unique gospel-lounge identity and family-friendly atmosphere.

## Non-goals

- Online ordering / delivery integration.
- Booking system with calendar (use WhatsApp deeplink instead).
- CMS / dynamic content (static content, hand-edited).
- Multi-language (English only; Lagos audience is comfortable with English).

## Tech stack

- **Plain static HTML/CSS/JS** — mirrors the deployed `Osereme7/bicoft-app` pattern.
- No build step. No framework. No package manager.
- Deployed via **GitHub Pages** on `main` branch root, repo `Osereme7/kulture-yard`.
- Live URL: `https://osereme7.github.io/kulture-yard/`
- Custom domain optional later (CNAME pattern from bicoft-app).

## Brand system

**Colors** (Pan-African on black, drawn from logo):
- `--bg`        `#0A0A0A` (near-black background)
- `--bg-elev`   `#141414` (cards / sections)
- `--red`       `#E63946` (accent — buttons, dividers, CTA)
- `--gold`      `#FFD700` (highlights, prices, hover)
- `--green`     `#1B7F3A` (secondary accent, badges)
- `--cream`     `#F8F1E5` (body text)
- `--muted`     `#9A9A9A` (secondary text)

**Typography** (Google Fonts):
- Display: **Permanent Marker** (handwritten, evokes the logo script)
- Body: **Poppins** (400, 500, 600)

**Imagery**:
- Logo SVG/PNG (already provided) used in nav + hero + footer.
- Menu page screenshots may be referenced but the menu is rebuilt as semantic HTML for accessibility/searchability.
- Photo placeholders for signature dishes (user to provide later; use neutral placeholders or unsplash CC0 fallbacks initially).

## Information architecture

**Single-page site** with anchor sections + a separate `/menu.html` for the full filterable menu.

**Sections (index.html):**

1. **Sticky Nav** — Logo · Menu links: About · Experience · Menu · Visit · Reserve CTA
2. **Hero** — Logo, tagline *"Eat. Pray. Love. The Yard."*, sub-line about gospel-themed lounge, CTAs: *Reserve* (WhatsApp deeplink) + *View Menu*
3. **About the Yard** — Story of Buchi Atuonwu, gospel-themed Christian lounge, "first-of-its-kind" framing
4. **The Experience** — 5 cards: *The Outdoor Yard* · *VIP Lounge* · *Kids Playground* · *Game & Theatre Nights* · *Live Gospel*
5. **Signature Dishes** — Visual grid of 6 standouts: Goat Meat Nkwobi, Grilled Catfish, Seafood Coconut Rice, Isi-Ewu, Grilled Titus & Bole, Palm Wine
6. **Menu Preview** — Category strip (Breakfast · Soups · Rice · Grills · Kultural · Pasta · Drinks) → CTA to full menu page
7. **Visit Us** — Address, embedded Google Map iframe, phone, email, hours (placeholder "Open daily — call to confirm" until verified), Instagram link
8. **Footer** — Social links, "Made with love in Lagos", copyright

**Menu page (menu.html):**
- Sticky tab bar with categories.
- Each category renders dish name, description, price in ₦.
- VAT note at bottom: *"All prices exclusive of VAT. A 7.5% VAT will be added to your final bill."*
- Filter logic: vanilla JS toggles `.active` class on category sections.
- Search input filters dishes by name/description (simple substring match).

## Component structure (within HTML)

- `header.site-nav` — sticky on scroll, color-on-scroll transition
- `section.hero` — full-viewport, centered logo + heading + CTAs
- `section.about` — two-column text + image
- `section.experience` — 5 cards in responsive grid
- `section.signatures` — image-led 3×2 grid (or 2×3 on tablet, 1×6 on mobile)
- `section.menu-preview` — horizontal-scroll category chips
- `section.visit` — two-column: info + map iframe
- `footer.site-footer`

## Interactions

- **Reserve button**: opens `https://wa.me/2349019090099?text=Hi%20Kulture%20Yard%2C%20I%27d%20like%20to%20reserve%20a%20table.` in new tab.
- **Phone link**: `tel:+2349019090099`
- **Menu filter (menu.html)**: click category → smooth scroll + section highlight.
- **Menu search (menu.html)**: input → live-filter dishes.
- **Mobile nav**: hamburger toggles full-screen overlay.
- **Scroll reveal**: subtle fade-up on section entry (IntersectionObserver, ≤30 LOC of JS).

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
- Color contrast: cream `#F8F1E5` on near-black `#0A0A0A` = passes WCAG AA.
- Alt text on all images.
- `aria-label` on icon buttons.
- Focus rings preserved (gold outline).
- Tap targets ≥44px on mobile.

## Performance

- Single HTML page + 1 CSS + 1 JS + a handful of images. Target <100KB initial transfer.
- Google Fonts loaded with `display=swap`.
- Map iframe lazy-loaded (`loading="lazy"`).
- Logo as PNG (provided) — convert to WebP if size allows.

## File layout

```
kulture-yard/
├── index.html
├── menu.html
├── css/
│   └── style.css
├── js/
│   ├── main.js          (nav, scroll reveal, mobile menu)
│   └── menu.js          (menu filter + search)
├── images/
│   ├── logo.png         (from user)
│   ├── hero-bg.jpg      (placeholder or sourced)
│   ├── dishes/          (signature dish photos — placeholders OK)
│   └── og-image.jpg     (social share preview)
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── README.md
└── docs/superpowers/specs/2026-04-27-kulture-yard-website-design.md
```

## Deployment

1. `git init` in `~/Documents/kulture-yard`
2. `gh repo create Osereme7/kulture-yard --public --source=. --push`
3. Enable GitHub Pages: `gh api -X POST repos/Osereme7/kulture-yard/pages -f 'source[branch]=main' -f 'source[path]=/'`
4. Verify live at `https://osereme7.github.io/kulture-yard/`

## Risks & open questions

- **Hours unverified** — placeholder "Open daily — call to confirm" until user provides actual hours.
- **Dish photos unavailable** — using neutral placeholders or text-only signature cards initially. User can replace later.
- **Hero background** — no high-res photo of the venue interior on hand. Will use a layered logo + Pan-African gradient as the hero treatment instead of a photo, then user can swap to a real photo when available.

## Success criteria

- [ ] Site loads in <2s on 4G mobile.
- [ ] Menu page lists every dish from the 3 menu pages provided, with correct prices.
- [ ] Reserve button opens WhatsApp with pre-filled message.
- [ ] All info renders correctly on iPhone SE (375px), iPad (768px), desktop (1440px).
- [ ] Repo `Osereme7/kulture-yard` exists, public, GitHub Pages enabled, live URL accessible.
