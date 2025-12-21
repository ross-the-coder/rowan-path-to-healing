import { writeClient, hasValidToken } from '../lib/client';
import { communityResources } from '../../src/data/communityResourcesData';

async function importCommunityResources() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log(`🚀 Starting community resources import (${communityResources.length} resources)...\n`);

  try {
    const existing = await writeClient.fetch(`*[_type == "communityResource"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing community resources.`);
      console.log('Please delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    let imported = 0;
    let failed = 0;

    console.log('🏘️  Importing community resources...');
    console.log('(This may take a few minutes)\n');

    for (const resource of communityResources) {
      try {
        const doc = {
          _type: 'communityResource',
          name: resource.name,
          description: resource.description,
          category: resource.category,
          resourceTypes: resource.resourceTypes,
          catchmentArea: resource.catchmentArea,
          phone: resource.phone || undefined,
          address: resource.address || undefined,
          url: resource.url,
          tags: resource.tags || [],
          active: true,
          featured: false,
        };

        await writeClient.create(doc);
        imported++;
        
        // Progress indicator every 50 resources
        if (imported % 50 === 0) {
          console.log(`   ✓ Imported ${imported} resources...`);
        }
      } catch (error: any) {
        if (error.message?.includes('rate limit')) {
          console.log(`\n⏸️  Rate limit reached at ${imported} resources.`);
          console.log('   Waiting 2 seconds before continuing...\n');
          await new Promise(resolve => setTimeout(resolve, 2000));
          // Retry this resource
          try {
            const doc = {
              _type: 'communityResource',
              name: resource.name,
              description: resource.description,
              category: resource.category,
              resourceTypes: resource.resourceTypes,
              catchmentArea: resource.catchmentArea,
              phone: resource.phone || undefined,
              address: resource.address || undefined,
              url: resource.url,
              tags: resource.tags || [],
              active: true,
              featured: false,
            };
            await writeClient.create(doc);
            imported++;
          } catch (retryError) {
            console.error(`   ❌ Failed to import after retry: ${resource.name}`);
            failed++;
          }
        } else {
          failed++;
          if (failed <= 5) {
            console.error(`   ❌ Failed: ${resource.name}`);
          }
        }
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} community resources`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333`);
    console.log(`\n💡 Tip: Staff can now manage all resources in one place - Sanity Studio!\n`);
    console.log(`   Note: The Supabase Resource Editor is still available as a backup,`);
    console.log(`   but Sanity is now the primary location for all content.\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importCommunityResources();
