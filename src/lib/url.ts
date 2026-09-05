/**
 * Prefixes a root-relative internal path (e.g. `/news/`) with the site's
 * base path. Needed because the site is built two ways:
 *  - the club's own domain, served from `/` (base = '/')
 *  - the GitHub Pages preview, served from `/swale-chess-club/` (a subpath)
 * See astro.config.mjs for where `base` is set.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path === '/' ? `${base}/` : `${base}${path}`;
}
