import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'rlwt7cpv',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
async function main() {
  try {
    const articles = await client.fetch('*[_type == "newsArticle"]{title}');
    console.log(JSON.stringify(articles));
  } catch (e) {
    console.error(e.message);
  }
}
main();
