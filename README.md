# Swale Chess Club

Website for [Swale Chess Club](https://www.swalechessclub.co.uk) — Sittingbourne, Kent.
Built with [Astro](https://astro.build); the output is a plain static site that can be
hosted anywhere.

## Running it locally

Requires **Node 18.17+** (this project is developed on Node 22).

```bash
npm install
npm run dev
```

The site is then at <http://localhost:4321>.

> **On this Mac:** the system `node` is v16, which Astro won't run on. Node 22 is
> installed via Homebrew but is keg-only, so put it on your `PATH` first:
>
> ```bash
> export PATH="/usr/local/opt/node@22/bin:$PATH"
> ```
>
> Add that line to `~/.zshrc` to make it permanent.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with live reload |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check the Astro components |

## Adding a club report

Reports are Markdown files in `src/content/news/`. Copy an existing one and edit it —
the filename becomes the URL.

```markdown
---
title: "Club report — 10th September 2026"
date: 2026-09-10
summary: "One or two sentences, shown on the news index and the home page."
---

Last night's results:

## Swale Chess Club Championship

- Player One 1–0 Player Two
```

`title`, `date` and `summary` are required. Add `featured: true` to pin a report.
The three most recent reports appear on the home page automatically.

Standard Markdown works throughout — headings, lists, **bold**, links and tables.

## Changing club details

Venue, meeting times, contact details, subscription price, navigation and the list of
upcoming congresses all live in one file: [`src/data/club.ts`](src/data/club.ts).
Change them there and they update everywhere on the site.

## Project layout

```
src/
  content/news/     Club reports (Markdown)
  data/club.ts      Club details — venue, contact, fees, congresses
  components/       Header, Footer, cards, icons
  layouts/          Page shell (head tags, header, footer)
  pages/            One file per route
  styles/global.css Design tokens and shared styles
public/             Favicon, robots.txt, and images once added
design/             The design canvas this site was built from
```

## Still to do

- **Photographs.** The junior page and the home page have marked placeholder slots.
  Drop real images into `public/images/` and swap out the `.photo-slot` blocks.
- **Club crest.** The current mark is a checkerboard drawn in SVG
  ([`src/components/Logo.astro`](src/components/Logo.astro)); the Swale coat of arms
  can replace it.
- **Older reports.** Eleven reports have been migrated from the old site; the rest of
  the archive can be added the same way.
- **Verify two invented details.** The home page says first visits are free, and the
  news sidebar lists season standings — confirm both before going live.

## Deploying

`npm run build` produces a static `dist/` folder. It can be uploaded by FTP to the
existing host, or connected to Netlify or Cloudflare Pages with the build command
`npm run build` and publish directory `dist`.

### GitHub Pages

This repo is already wired up to deploy to GitHub Pages automatically:
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes
the site on every push to `main`.

**One-time setup**, after the first push: in the repo's **Settings → Pages**, set
**Source** to **GitHub Actions**. After that, every push to `main` redeploys
automatically — nothing further to run by hand.

The live site will be at:

```
https://khislatjon.github.io/swale-chess-club/
```

GitHub Pages serves a project repo like this one from a subpath
(`/swale-chess-club/`), not the domain root, which is different from the club's
own domain. The build handles this automatically:

- `astro.config.mjs` sets `base: '/swale-chess-club'` only when built with
  `DEPLOY_TARGET=gh-pages` (which the workflow sets) — `npm run build` for the real
  domain is untouched and still targets the root.
- Every internal link and image path goes through
  [`src/lib/url.ts`](src/lib/url.ts)'s `withBase()` helper, so the same source
  works at both the root and the subpath. If you add a new internal `href` or
  image `src` (not `mailto:`, `tel:`, or an external URL), wrap it in `withBase(...)`
  the same way.
- The GitHub Pages build carries a `noindex` tag so it never competes with the real
  site in search results — it's a preview copy, not the canonical site.

To build and check the GitHub Pages version locally: `npm run build:gh-pages`.

### Moving to the real domain

When the club is ready to serve this from `www.swalechessclub.co.uk` instead of (or
alongside) the GitHub Pages preview, `site` in [`astro.config.mjs`](astro.config.mjs)
already points there — used for canonical URLs and the sitemap — no change needed
beyond hosting the output of a plain `npm run build`.
