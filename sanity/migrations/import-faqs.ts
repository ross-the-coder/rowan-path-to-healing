import { writeClient, hasValidToken } from '../lib/client';

const faqs = [
  {
    question: "What kind of training/degree/experience do I need to be a hotline volunteer?",
    answer: "We provide all of the training you will need to help victims of sexual violence and once you complete the 40 hour training course, you will be a state-certified Sexual Assault Crisis Advocate. No additional degree/training/experience is required.",
    category: "Volunteer",
    order: 1
  },
  {
    question: "How much time do I have to commit to volunteering?",
    answer: "Initially, to become a Sexual Assault Crisis Advocate Volunteer, you must complete a 40-hour training course. The training typically runs for 3 weeks. If you are working on the hotline, we ask that you sign up for a minimum of four (4) shifts per month. To maintain certification, you must complete 6 additional hours of sexual violence training per year.",
    category: "Volunteer",
    order: 2
  },
  {
    question: "What, specifically, do I report about?",
    answer: "Remind your child that the same rules stand: anything that is out of the ordinary, makes them uncomfortable, or is unsafe, needs to be reported to a trusted adult. At this age, focus on internet topics like social media or video games, peer relationships, and the clean and healthy rule.",
    category: "KidSafe - Elementary",
    order: 1
  },
  {
    question: "Is crisis counseling confidential?",
    answer: "Yes, our crisis counseling services are confidential. We will not share your information without your consent, except in situations where there is imminent danger or as required by law (such as child abuse reporting).",
    category: "Crisis Services",
    order: 1
  },
  {
    question: "Do I need to file a police report to receive services?",
    answer: "No, you do not need to file a police report to receive our services. All of our services are available to you regardless of whether you choose to report to law enforcement.",
    category: "Crisis Services",
    order: 2
  },
  {
    question: "Is there a cost for services?",
    answer: "No, all of our services are provided free of charge to survivors and their families.",
    category: "General",
    order: 1
  },
  {
    question: "Do you provide services in languages other than English?",
    answer: "Yes, we have bilingual staff and interpreters available. We provide services in Spanish and can arrange interpretation for other languages as needed.",
    category: "General",
    order: 2
  },
  {
    question: "What is the 24-hour hotline number?",
    answer: "Our 24-hour crisis hotline is (203) 329-2929. This line is staffed by trained crisis advocates who are available any time, day or night.",
    category: "General",
    order: 3
  }
];

async function importFAQs() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting FAQ import...\n');

  try {
    const existing = await writeClient.fetch(`*[_type == "faq"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing FAQs.`);
      console.log('Please delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    let imported = 0;
    let failed = 0;

    for (const faq of faqs) {
      try {
        const doc = {
          _type: 'faq',
          question: faq.question,
          answer: faq.answer,
          category: faq.category,
          order: faq.order,
        };

        await writeClient.create(doc);
        console.log(`✅ Imported: ${faq.question.substring(0, 60)}...`);
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

importFAQs();
