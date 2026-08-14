import { buildSearchIndex } from '../utils/search-index';

export async function GET() {
  return new Response(JSON.stringify(buildSearchIndex('it')), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
