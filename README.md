# CS Vidya — Website

The official website for **CS Vidya** ("Vidya" is Sanskrit for knowledge) —
free computer science lessons on YouTube and 1-on-1 tutoring with Professor W.
Tagline: *Computer science, understood.*

A static site: HTML, CSS, and vanilla JS. No frameworks, no build step, no
dependencies. It runs as-is on GitHub Pages.

🔗 Live: **https://csvidya.com**

## Files

| File             | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| `index.html`     | The entire single-page site                        |
| `style.css`      | All styles (CSS custom properties, responsive)     |
| `main.js`        | Hamburger menu + scroll fade-in (IntersectionObserver) |
| `csVidyalogo.png`| Logo — **must be placed in the repo root** (added manually) |
| `CNAME`          | Custom domain: contains `csvidya.com`              |
| `README.md`      | This file                                          |

> **Logo:** `csVidyalogo.png` must live in the repo root. The site references it
> as `./csVidyalogo.png` in the nav, hero, favicon, and Open Graph image.

## Deploy (GitHub Pages)

This site is deployed via **GitHub Pages** from the repo
`csvidya-official/csvidya-official.github.io`.

1. Push to the `main` branch — GitHub Pages auto-builds and publishes.
2. In the repo: **Settings → Pages**, set the source to the `main` branch
   (root). The `CNAME` file makes Pages serve the site at `csvidya.com`.

That's it — no CI, no build commands. What's in `main` is what's live.

## DNS setup (Porkbun)

Point the domain at GitHub Pages. In the Porkbun DNS panel for `csvidya.com`:

**Four `A` records** (apex `csvidya.com` → GitHub Pages IPs):

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

**One `CNAME` record** (for the `www` subdomain):

```
CNAME   www   csvidya-official.github.io
```

After DNS propagates, enable **Enforce HTTPS** in Settings → Pages.

## Local preview

It's a static site, so just open `index.html` in a browser. To serve it over
HTTP locally (closer to production):

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Brand reference

- **Colors:** green `#2E6B2E` (primary), navy `#1B2D6E`, gold `#C9962A` (CTAs),
  bronze `#7B4F2E`, ice `#EEF2FA`, ivory `#F8F6F1`.
- **Fonts:** Playfair Display (headings), Inter (body), JetBrains Mono (labels) —
  loaded from Google Fonts.

All colors and fonts are defined as CSS custom properties at the top of
`style.css`.
