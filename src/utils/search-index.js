import { localize, slugFromFile } from './i18n';

const collectionGlobs = {
  ideas: import.meta.glob('../content/ideas/*.{md,mdx}', { eager: true }),
  murderheprompted: import.meta.glob('../content/murderheprompted/*.{md,mdx}', { eager: true }),
  shortstories: import.meta.glob('../content/shortstories/*.{md,mdx}', { eager: true }),
  ilcommissariogpt: import.meta.glob('../content/ilcommissariogpt/*.{md,mdx}', { eager: true }),
  promptsoncanvas: import.meta.glob('../content/promptsoncanvas/*.{md,mdx}', { eager: true }),
};

/** Builds the search index for a given locale: real translations plus,
 *  for untranslated posts, the original-language fallback. */
export function buildSearchIndex(locale) {
  const prefix = locale === 'en' ? '/en' : '';
  const searchData = [];

  for (const [collectionName, glob] of Object.entries(collectionGlobs)) {
    const posts = Object.values(glob);
    for (const { post, isFallback } of localize(posts, locale)) {
      const { frontmatter } = post;
      searchData.push({
        title: frontmatter.title || 'Untitled',
        url: `${prefix}/${collectionName}/${slugFromFile(post.file)}`,
        date: frontmatter.date || new Date().toISOString(),
        excerpt: frontmatter.excerpt || frontmatter.description || '',
        categories: frontmatter.categories || [],
        lang: frontmatter.lang,
        isFallback,
      });
    }
  }

  searchData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return searchData;
}
