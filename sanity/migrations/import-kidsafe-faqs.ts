import { writeClient, hasValidToken } from '../lib/client';
import { elementarySchoolData } from '../../src/data/kidSafeData';
import { middleSchoolData } from '../../src/data/middleSchoolData';
import { highSchoolData } from '../../src/data/highSchoolData';

async function importKidSafeFAQs() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Extracting KidSafe FAQs from data files...\n');

  // Extract all FAQs with their grade level context
  const allFAQs: Array<{question: string, answer: string, category: string, order: number}> = [];

  // Elementary School FAQs
  elementarySchoolData.forEach((gradeData) => {
    if (gradeData.faqs && gradeData.faqs.length > 0) {
      gradeData.faqs.forEach((faq, index) => {
        allFAQs.push({
          question: faq.question,
          answer: faq.answer,
          category: `KidSafe - ${gradeData.gradeLevel}`,
          order: index + 1
        });
      });
    }
  });

  // Middle School FAQs
  middleSchoolData.forEach((gradeData) => {
    if (gradeData.faqs && gradeData.faqs.length > 0) {
      gradeData.faqs.forEach((faq, index) => {
        allFAQs.push({
          question: faq.question,
          answer: faq.answer,
          category: `KidSafe - ${gradeData.gradeLevel}`,
          order: index + 1
        });
      });
    }
  });

  // High School FAQs
  highSchoolData.forEach((gradeData) => {
    if (gradeData.faqs && gradeData.faqs.length > 0) {
      gradeData.faqs.forEach((faq, index) => {
        allFAQs.push({
          question: faq.question,
          answer: faq.answer,
          category: `KidSafe - ${gradeData.gradeLevel}`,
          order: index + 1
        });
      });
    }
  });

  console.log(`📚 Found ${allFAQs.length} KidSafe FAQs across all grade levels\n`);

  try {
    // Delete existing KidSafe FAQs to ensure clean import
    const existing = await writeClient.fetch(`*[_type == "faq" && category match "KidSafe*"]{ _id }`);
    
    if (existing.length > 0) {
      console.log(`🗑️  Deleting ${existing.length} existing KidSafe FAQs for fresh import...`);
      for (const faq of existing) {
        await writeClient.delete(faq._id);
      }
      console.log('✅ Cleared existing KidSafe FAQs\n');
    }

    let imported = 0;
    let failed = 0;

    console.log('🎓 Importing KidSafe FAQs...\n');

    for (const faq of allFAQs) {
      try {
        const doc = {
          _type: 'faq',
          question: faq.question,
          answer: faq.answer,
          category: faq.category,
          order: faq.order,
        };

        await writeClient.create(doc);
        console.log(`✅ [${faq.category}] ${faq.question.substring(0, 60)}...`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import FAQ:`, error);
        failed++;
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} KidSafe FAQs`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importKidSafeFAQs();
