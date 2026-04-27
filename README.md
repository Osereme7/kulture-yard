# Kulture Yard

The official website for **Kulture Yard** — a gospel-themed African restaurant and lounge in Ikeja, Lagos.

> *"Eat. Pray. Love. The Yard."*

Live: https://osereme7.github.io/kulture-yard/

## About

Kulture Yard is a first-of-its-kind Christian lounge owned by reggae gospel artist Buchi Atuonwu, blending African cuisine with gospel music and a family-friendly outdoor "yard" atmosphere.

- **Address:** 2B Abba Johnston Crescent, Boet Estate, Adeniyi Jones, Ikeja, Lagos
- **Phone:** +234 901 909 0099
- **Email:** kultureyardofficial@gmail.com
- **Instagram:** [@kultureyard](https://www.instagram.com/kultureyard/)

## Stack

Plain static HTML / CSS / JS — no build step. Deployed via GitHub Pages.

## Local preview

Any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Edit the menu

The menu is hand-coded in `menu.html`. Each `<section class="menu-section" data-category="...">` is a category. Add or update `<article class="menu-item">` blocks to change dishes/prices.

## Deploy

The `main` branch root is published. Push to `main` and GitHub Pages does the rest.

## File layout

```
.
├── index.html              # landing page
├── menu.html               # full menu
├── css/style.css
├── js/main.js              # nav, scroll reveal
├── js/menu.js              # menu filter + search
├── images/
│   ├── logo.png
│   └── menu-pages/         # original menu source images (printable)
├── robots.txt
├── sitemap.xml
└── docs/superpowers/specs/ # design spec
```
