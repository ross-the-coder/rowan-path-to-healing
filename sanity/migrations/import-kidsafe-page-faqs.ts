import { writeClient, hasValidToken } from '../lib/client';
import { faqData } from '../../src/data/faqData';

async function importKidSafePageFAQs() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting KidSafe FAQ page import...\n');
  
  try {
    // Delete existing KidSafe page FAQs
    const existing = await writeClient.fetch(`*[_type == "faq" && category == "KidSafe - FAQ Page"]{ _id }`);
    
    if (existing.length > 0) {
      console.log(`🗑️  Deleting ${existing.length} existing KidSafe page FAQs...`);
      for (const faq of existing) {
        await writeClient.delete(faq._id);
      }
      console.log('✅ Cleared existing FAQs\n');
    }
    
    console.log(`📚 Importing ${faqData.length} FAQs from faqData.ts...\n`);
    
    let imported = 0;
    let failed = 0;
    
    for (const faq of faqData) {
      try {
        const doc = {
          _type: 'faq',
          question: faq.question,
          answer: faq.answer,
          category: 'KidSafe - FAQ Page',
          order: faq.id,
          grades: faq.grades,
          topics: faq.topics,
        };
        
        await writeClient.create(doc);
        console.log(`✅ ${faq.question.substring(0, 60)}...`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import FAQ:`, error);
        failed++;
      }
    }
    
    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} FAQs`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importKidSafePageFAQs();
