import { writeClient, hasValidToken } from '../lib/client';
import { newsArticles } from '../../src/data/newsData';

// Convert date string (MM/DD/YYYY) to ISO date
function parseDate(dateStr: string): string {
  const [month, day, year] = dateStr.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

async function importNews() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log(`🚀 Starting news articles import (${newsArticles.length} articles)...\n`);

  try {
    const existing = await writeClient.fetch(`*[_type == "newsArticle"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing news articles.`);
      console.log('Please delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    let imported = 0;
    let failed = 0;
    let skipped = 0;

    console.log('📰 Importing news articles...');
    console.log('(This may take a few minutes)\n');

    for (const article of newsArticles) {
      try {
        const doc = {
          _type: 'newsArticle',
          title: article.title,
          link: article.link,
          source: article.source,
          date: parseDate(article.date),
          topics: article.topics,
          contentType: article.contentType,
          isConnecticut: article.isConnecticut,
          featured: false,
        };

        await writeClient.create(doc);
        imported++;
        
        // Progress indicator every 50 articles
        if (imported % 50 === 0) {
          console.log(`   ✓ Imported ${imported} articles...`);
        }
      } catch (error: any) {
        if (error.message?.includes('rate limit')) {
          console.log(`\n⏸️  Rate limit reached at ${imported} articles.`);
          console.log('   Waiting 2 seconds before continuing...\n');
          await new Promise(resolve => setTimeout(resolve, 2000));
          // Retry this article
          try {
            await writeClient.create(doc);
            imported++;
          } catch (retryError) {
            console.error(`   ❌ Failed to import after retry: ${article.title.substring(0, 50)}...`);
            failed++;
          }
        } else {
          failed++;
          if (failed <= 5) {
            console.error(`   ❌ Failed: ${article.title.substring(0, 50)}...`);
          }
        }
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} news articles`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    if (skipped > 0) {
      console.log(`   ⏭️  Skipped: ${skipped}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333`);
    console.log(`\n💡 Tip: Staff can now add/update news articles directly in Sanity Studio!\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importNews();
