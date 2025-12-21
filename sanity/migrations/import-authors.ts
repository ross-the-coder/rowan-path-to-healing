import { writeClient, hasValidToken } from '../lib/client';

const authors = [
  {
    name: "Dr. Michael Chen",
    slug: "dr-michael-chen",
    bio: "Dr. Chen is a licensed clinical psychologist specializing in trauma-informed care and recovery. With over 15 years of experience, he brings evidence-based approaches to supporting survivors.",
  },
  {
    name: "Maria Rodriguez",
    slug: "maria-rodriguez",
    bio: "Maria is a prevention education specialist and certified educator with a passion for empowering children and families with safety knowledge.",
  },
  {
    name: "Lisa Chen",
    slug: "lisa-chen",
    bio: "Lisa is a crisis counselor and advocate who works directly with survivors and their support networks. She specializes in helping friends and family understand how to provide meaningful support.",
  },
  {
    name: "The Rowan Center Staff",
    slug: "rowan-center-staff",
    bio: "Content created by The Rowan Center's team of advocates, counselors, and prevention educators.",
  }
];

async function importAuthors() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting authors import...\n');

  try {
    const existing = await writeClient.fetch(`*[_type == "author"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing authors.`);
      console.log('Please delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    let imported = 0;
    let failed = 0;

    for (const author of authors) {
      try {
        const doc = {
          _type: 'author',
          name: author.name,
          slug: { _type: 'slug', current: author.slug },
          bio: author.bio,
        };

        await writeClient.create(doc);
        console.log(`✅ Imported: ${author.name}`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import ${author.name}:`, error);
        failed++;
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} authors`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 Next: Import blog posts that reference these authors\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importAuthors();
