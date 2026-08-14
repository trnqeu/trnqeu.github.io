import { buildSearchIndex } from '../../utils/search-index';

export async function GET() {
  return new Response(JSON.stringify(buildSearchIndex('en')), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
