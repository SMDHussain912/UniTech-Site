# UniTech Organization Website — Version 2

The official one-page site for **UniTech Organization** — an independent, founder-led studio building **games, apps, and websites**.

## What's new in v2

- ✅ **Fixed the corrupted `style.css`** (v1's CSS was scrambled — broken rules, interleaved sections, duplicate braces)
- 🏷️ **Rebranded to UniTech Organization** ("UniTechOrg") across the page, meta tags, and footer
- 👤 **New Founder/CEO section** — About now pairs the studio story with a founder card
- 🎯 **Services rewritten** to match the studio: Game Development, App Development, Web Development (with feature lists)
- ✨ **Animated hero** — rotating "Games / Apps / Websites" typewriter headline, floating gradient orbs, animated stat counters
- 🧭 **Better navigation** — active-link highlighting while scrolling, "Start a Project" CTA button, Escape/outside-click menu closing
- 📊 **Scroll progress bar** + back-to-top button
- 🎨 Polished dark theme, new favicon, improved SEO/Open Graph tags
- ♿ `prefers-reduced-motion` support and focus-visible styles
- 📱 Fully responsive (desktop, tablet, mobile)

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content and sections |
| `style.css` | Complete styling (clean, organized, responsive) |
| `script.js` | Typewriter, nav, reveals, counters, scroll effects |
| `favicon.svg` | Browser tab icon |

No build process, no dependencies — just open `index.html` in a browser.

## Sections

1. **Hero** — animated headline, tagline, CTA buttons, stat counters
2. **Services** — Games · Apps · Websites (3 cards)
3. **Work** — UniChat, 3D Survival Game, Smart Automation (with category + status badges)
4. **About + Founder** — studio story + CEO & Founder card
5. **Contact** — Email, GitHub, WhatsApp buttons
6. **Footer** — quick links + auto-updating copyright year

## ✏️ Customize these (currently placeholders)

- **Email** — `hello@unitech.studio` in the Contact section + footer
- **WhatsApp** — `https://wa.me/1234567890` (replace the number)
- **Stats numbers** — the `data-count` values in the hero (`10+` projects, etc.)
- **Project statuses** — "In development / Prototype / In testing" labels
- **Founder name** — set to *SMD Hussain* from the GitHub username; edit if you prefer different wording
- **`og:url`** — update if the site lives at a different address

All edits happen directly in `index.html` — colors live in the `:root` variables at the top of `style.css`.

## Deploy

Push to GitHub and enable **GitHub Pages** (Settings → Pages → branch `main`). The site works as-is with no build step.
