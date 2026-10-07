import rss from '@astrojs/rss';
import { config } from '../config';
import { canonicalPostUrl } from '../utils/i18n';

export async function GET(context) {
  const posts = import.meta.glob(['../content/ideas/**/*.{md,mdx}', '../content/murderheprompted/**/*.{md,mdx}', '../content/ilcommissariogpt/**/*.{md,mdx}', '../content/shortstories/**/*.{md,mdx}', '../content/promptsoncanvas/**/*.{md,mdx}'], { eager: true });
  // Each entry links to its own-language URL (`/en/…` for English posts):
  // the Italian route only serves Italian posts and untranslated fallbacks.
  const items = Object.values(posts).map((post) => ({
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.excerpt || post.frontmatter.description,
    link: canonicalPostUrl(post),
  }));

  return rss({
    title: config.title,
    description: config.description.it,
    site: context.site,
    items: items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)),
  });
}
