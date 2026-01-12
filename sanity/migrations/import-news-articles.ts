import { writeClient, hasValidToken } from '../lib/client';
import { newsArticles } from '../../src/data/newsData';

async function importNewsArticles() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting news articles import...\n');

  try {
    const existing = await writeClient.fetch(`*[_type == "newsArticle"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing news articles.`);
      console.log('Please delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    let imported = 0;
    let failed = 0;

    for (const article of newsArticles) {
      try {
        // Convert date format from "MM/DD/YYYY" to "YYYY-MM-DD"
        const [month, day, year] = article.date.split('/');
        const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

        const doc = {
          _type: 'newsArticle',
          title: article.title,
          link: article.link,
          source: article.source,
          date: isoDate,
          topics: article.topics,
          contentType: article.contentType,
          isConnecticut: article.isConnecticut,
          featured: false,
        };

        await writeClient.create(doc);
        console.log(`✅ Imported: ${article.title.substring(0, 60)}...`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import article: ${article.title}`, error);
        failed++;
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} news articles`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importNewsArticles();
