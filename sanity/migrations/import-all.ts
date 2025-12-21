import { hasValidToken } from '../lib/client';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runImport(scriptName: string, description: string) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📦 ${description}`);
  console.log('='.repeat(60));
  
  try {
    const { stdout, stderr } = await execAsync(`tsx migrations/${scriptName}`);
    console.log(stdout);
    if (stderr) console.error(stderr);
    return true;
  } catch (error: any) {
    console.error(`❌ Failed to run ${scriptName}:`, error.message);
    return false;
  }
}

async function importAll() {
  console.log('\n🚀 SANITY CMS - IMPORT ALL CONTENT\n');
  console.log('This will import all existing website content into Sanity.\n');

  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!\n');
    console.log('Please follow these steps:');
    console.log('1. Go to https://sanity.io/manage');
    console.log('2. Select "The Rowan Center" project');
    console.log('3. Go to API → Tokens → Add API token');
    console.log('4. Name: "Migration Script", Permission: "Editor"');
    console.log('5. Copy the token and run:');
    console.log('   export SANITY_API_TOKEN="your-token-here"');
    console.log('6. Then run this script again\n');
    console.log('For more details, see: sanity/IMPORT_GUIDE.md\n');
    process.exit(1);
  }

  console.log('✅ API token found!\n');
  console.log('Starting imports...\n');

  const results = {
    successful: [] as string[],
    failed: [] as string[],
  };

  // Import Board Members
  const boardSuccess = await runImport('import-board-members.ts', 'Importing Board Members (6 members)');
  if (boardSuccess) results.successful.push('Board Members');
  else results.failed.push('Board Members');

  // Import Glossary
  const glossarySuccess = await runImport('import-glossary.ts', 'Importing Glossary Terms (31 terms)');
  if (glossarySuccess) results.successful.push('Glossary Terms');
  else results.failed.push('Glossary Terms');

  // Import FAQs
  const faqSuccess = await runImport('import-faqs.ts', 'Importing FAQs (8 questions)');
  if (faqSuccess) results.successful.push('FAQs');
  else results.failed.push('FAQs');

  // Import Authors (needed before blog posts)
  const authorsSuccess = await runImport('import-authors.ts', 'Importing Authors (4 authors)');
  if (authorsSuccess) results.successful.push('Authors');
  else results.failed.push('Authors');

  // Import Blog Posts (requires authors)
  if (authorsSuccess) {
    const blogSuccess = await runImport('import-blog-posts.ts', 'Importing Sample Blog Posts (3 posts)');
    if (blogSuccess) results.successful.push('Blog Posts');
    else results.failed.push('Blog Posts');
  } else {
    console.log('\n⏭️  Skipping blog posts (authors import failed)');
    results.failed.push('Blog Posts (skipped)');
  }

  // Import Events
  const eventsSuccess = await runImport('import-events.ts', 'Importing Sample Events (3 events)');
  if (eventsSuccess) results.successful.push('Events');
  else results.failed.push('Events');

  // Import News Articles (this will take a few minutes)
  console.log('\n⏰ Note: News import may take 3-5 minutes for 500+ articles...\n');
  const newsSuccess = await runImport('import-news.ts', 'Importing News Articles (500+ articles)');
  if (newsSuccess) results.successful.push('News Articles');
  else results.failed.push('News Articles');

  // Import Community Resources (this will also take a few minutes)
  console.log('\n⏰ Note: Community resources import may take 2-3 minutes for 400+ resources...\n');
  const resourcesSuccess = await runImport('import-community-resources.ts', 'Importing Community Resources (400+ resources)');
  if (resourcesSuccess) results.successful.push('Community Resources');
  else results.failed.push('Community Resources');

  // Summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('📊 IMPORT SUMMARY');
  console.log('='.repeat(60));
  
  if (results.successful.length > 0) {
    console.log(`\n✅ Successfully imported:`);
    results.successful.forEach(item => console.log(`   - ${item}`));
  }
  
  if (results.failed.length > 0) {
    console.log(`\n❌ Failed to import:`);
    results.failed.forEach(item => console.log(`   - ${item}`));
  }

  console.log(`\n📝 Next Steps:`);
  console.log(`   1. Open Sanity Studio: http://localhost:3333`);
  console.log(`   2. Review all imported content`);
  console.log(`   3. Add photos for board members`);
  console.log(`   4. Create sample blog posts and events`);
  console.log(`   5. Test the website to see content loading from Sanity`);
  console.log(`\n✨ Import process complete!\n`);
}

importAll();
