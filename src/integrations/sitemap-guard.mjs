import { readFile, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Removes from the generated sitemap every page that asks not to be indexed
 * on its own: pages with a robots `noindex`, and pages whose canonical points
 * elsewhere (untranslated posts served under the other language's route).
 *
 * The page <head> stays the single source of truth, so the sitemap can never
 * disagree with what the page itself tells search engines. Must be listed
 * after `sitemap()` so that its sitemap files already exist.
 */
export default function sitemapGuard() {
  return {
    name: 'sitemap-guard',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const sitemapFiles = (await readdir(outDir)).filter((f) => /^sitemap-\d+\.xml$/.test(f));

        for (const file of sitemapFiles) {
          const sitemapPath = path.join(outDir, file);
          const xml = await readFile(sitemapPath, 'utf8');
          const entries = xml.match(/<url>[\s\S]*?<\/url>/g) ?? [];
          const dropped = [];

          for (const entry of entries) {
            const loc = entry.match(/<loc>([^<]+)<\/loc>/)?.[1];
            if (!loc) continue;
            const html = await readPage(outDir, new URL(loc).pathname);
            if (html && !isIndexable(html, loc)) dropped.push(entry);
          }

          let filtered = xml;
          for (const entry of dropped) filtered = filtered.replace(entry, '');
          await writeFile(sitemapPath, filtered);
          logger.info(`${file}: ${entries.length - dropped.length} URLs kept, ${dropped.length} dropped`);
        }
      },
    },
  };
}

async function readPage(outDir, pathname) {
  const file = path.join(outDir, decodeURIComponent(pathname), 'index.html');
  try {
    return await readFile(file, 'utf8');
  } catch {
    return null;
  }
}

function isIndexable(html, loc) {
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) return false;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  return !canonical || canonical === loc;
}
