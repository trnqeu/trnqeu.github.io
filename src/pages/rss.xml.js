import rss from '@astrojs/rss';
import { config } from '../config';

export async function GET(context) {
  const posts = import.meta.glob(['../content/words/**/*.{md,mdx}', '../content/murderheprompted/**/*.{md,mdx}', '../content/ilcommissariogpt/**/*.{md,mdx}'], { eager: true });
  const items = Object.entries(posts)
    .filter(([path]) => !path.includes('/drafts/'))
    .map(([path, post]) => {
        const pathParts = path.split('/');
        const slug = pathParts.pop().replace(/\.(md|mdx)$/, '');
        const collection = pathParts.pop();

        let link;
        if (collection === 'words') {
            link = `/blog/${slug}/`;
        } else {
            link = `/${collection}/${slug}/`;
        }

        return {
            title: post.frontmatter.title,
            pubDate: post.frontmatter.date,
            description: post.frontmatter.excerpt || post.frontmatter.description,
            link: link,
        };
  });
  
  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)),
    customData: `<language>en-us</language>`,
  });
}