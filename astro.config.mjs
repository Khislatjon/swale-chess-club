import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves a project repo at https://<user>.github.io/<repo>/ —
// a subpath — while the club's own domain serves it from the root. The
// deploy workflow sets DEPLOY_TARGET=gh-pages when building for Pages;
// any other build (local dev, the eventual production deploy) targets the
// real domain at the root.
const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  site: isGitHubPages
    ? 'https://khislatjon.github.io'
    : 'https://www.swalechessclub.co.uk',
  base: isGitHubPages ? '/swale-chess-club' : '/',
  integrations: [sitemap()],
});
