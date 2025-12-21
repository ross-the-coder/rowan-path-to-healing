import { writeClient, hasValidToken } from '../lib/client';
import { kidSafeResourcesData } from '../../src/data/kidSafeResourcesData';

async function importKidSafeResources() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting KidSafe resources import...\n');
  
  try {
    // Delete existing KidSafe resources
    const existing = await writeClient.fetch(`*[_type == "resourceLink"]{ _id }`);
    
    if (existing.length > 0) {
      console.log(`🗑️  Deleting ${existing.length} existing resources...`);
      for (const resource of existing) {
        await writeClient.delete(resource._id);
      }
      console.log('✅ Cleared existing resources\n');
    }
    
    let imported = 0;
    let failed = 0;
    let orderCounter = 1;
    
    // Iterate through each age group
    for (const ageGroup of kidSafeResourcesData) {
      console.log(`\n📚 Processing ${ageGroup.title}...\n`);
      
      // Iterate through each category
      for (const categoryData of ageGroup.resources) {
        const category = categoryData.category;
        
        // Iterate through each resource link
        for (const link of categoryData.links) {
          try {
            const doc = {
              _type: 'resourceLink',
              title: link.title,
              url: link.url,
              description: link.description,
              category: category,
              ageGroup: [ageGroup.key],
              keywords: link.keywords,
              order: orderCounter++,
            };
            
            await writeClient.create(doc);
            console.log(`✅ [${category}] ${link.title.substring(0, 50)}...`);
            imported++;
          } catch (error) {
            console.error(`❌ Failed to import resource:`, error);
            failed++;
          }
        }
      }
    }
    
    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} resources`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importKidSafeResources();
