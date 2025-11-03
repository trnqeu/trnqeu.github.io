
import { getCollection } from 'astro:content';

export async function GET() {
  // Get all content collections, excluding drafts
  const collections = {
    ideas: await getCollection('ideas'),
    murderheprompted: await getCollection('murderheprompted'),
    collectedshortstories: await getCollection('collectedshortstories'),
    ilcommissariogpt: await getCollection('ilcommissariogpt'),
    promptsoncanvas: await getCollection('promptsoncanvas'),
  };

  const searchData = [];

  // Process each collection and create search entries
  for (const [collectionName, posts] of Object.entries(collections)) {
    for (const post of posts) {
      searchData.push({
        title: post.data.title || 'Untitled',
        url: `/${collectionName}/${post.slug}`,
        date: post.data.date || new Date().toISOString(),
        excerpt: post.data.excerpt || post.data.description || '',
        categories: post.data.categories || [],
      });
    }
  }

  // Sort by date (newest first)
  searchData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
