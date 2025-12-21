import { writeClient, hasValidToken } from '../lib/client';
import * as fs from 'fs';
import * as path from 'path';

interface NewsArticleRow {
  Title: string;
  File: string;
  Topics: string;
  'Content Type': string;
  Source: string;
  'Date Written': string;
}

function parseCSV(csvText: string): NewsArticleRow[] {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const articles: NewsArticleRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Parse CSV line handling quoted fields
    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim());

    if (values.length >= 6) {
      const article: any = {};
      headers.forEach((header, idx) => {
        article[header] = values[idx] || '';
      });
      articles.push(article as NewsArticleRow);
    }
  }

  return articles;
}

async function importNewsFromCSV() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting news articles import from CSV...\n');

  try {
    // Read CSV file
    const csvPath = path.join(__dirname, 'news-articles.csv');
    const csvText = fs.readFileSync(csvPath, 'utf-8');
    const articles = parseCSV(csvText);

    console.log(`📰 Found ${articles.length} articles in CSV\n`);

    // Delete existing news articles
    const existing = await writeClient.fetch(`*[_type == "newsArticle"]{ _id }`);
    
    if (existing.length > 0) {
      console.log(`🗑️  Deleting ${existing.length} existing news articles...`);
      for (const article of existing) {
        await writeClient.delete(article._id);
      }
      console.log('✅ Cleared existing articles\n');
    }

    let imported = 0;
    let failed = 0;

    console.log('📝 Importing articles...\n');

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      
      if (!article.Title) {
        console.log(`⏭️  Skipping empty row ${i + 2}`);
        continue;
      }

      try {
        // Parse topics into array
        const topics = article.Topics
          .split(',')
          .map(t => t.trim())
          .filter(t => t.length > 0);

        const doc = {
          _type: 'newsArticle',
          title: article.Title,
          link: article.File === 'Link' ? '' : article.File, // Will need actual URLs
          topics: topics,
          contentType: article['Content Type'],
          source: article.Source,
          date: article['Date Written'],
          isConnecticut: false, // Set based on content or source if needed
        };

        await writeClient.create(doc);
        console.log(`✅ [${i + 1}/${articles.length}] ${article.Title.substring(0, 60)}...`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import article "${article.Title}":`, error);
        failed++;
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} articles`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importNewsFromCSV();
