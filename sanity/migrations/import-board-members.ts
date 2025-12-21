import { writeClient, hasValidToken } from '../lib/client';

// Board members data from the site
const boardMembers = [
  {
    name: "Patricia Williams",
    title: "Board Chair",
    bio: "Patricia brings over 25 years of non-profit leadership experience to The Rowan Center. Her vision and strategic guidance have been instrumental in our organizational growth and community impact.",
    profession: "Former CEO, Fairfield County Community Foundation",
    tenure: "Board member since 2018",
    expertise: "Non-profit leadership, strategic planning, community development",
    order: 1
  },
  {
    name: "Dr. Robert Martinez",
    title: "Vice Chair",
    bio: "Dr. Martinez provides clinical expertise and mental health advocacy. His medical background ensures our programs maintain the highest standards of care and evidence-based practices.",
    profession: "Psychiatrist, Yale New Haven Health",
    tenure: "Board member since 2019",
    expertise: "Mental health, trauma treatment, clinical oversight",
    order: 2
  },
  {
    name: "Jennifer Chen",
    title: "Treasurer",
    bio: "Jennifer oversees our financial health and ensures responsible stewardship of donor funds. Her business acumen helps us operate efficiently and transparently.",
    profession: "CFO, Stamford Technology Group",
    tenure: "Board member since 2020",
    expertise: "Financial management, accounting, business operations",
    order: 3
  },
  {
    name: "Michael Thompson",
    title: "Secretary",
    bio: "Michael provides legal expertise and helps navigate complex policy issues. His advocacy work has been crucial in advancing survivor rights and organizational compliance.",
    profession: "Partner, Thompson & Associates Law Firm",
    tenure: "Board member since 2017",
    expertise: "Legal counsel, policy development, advocacy",
    order: 4
  },
  {
    name: "Lisa Rodriguez",
    title: "Board Member",
    bio: "Lisa brings deep knowledge of educational systems and youth development. She helps ensure our prevention programs are effective and age-appropriate.",
    profession: "Director of Education, Stamford Public Schools",
    tenure: "Board member since 2021",
    expertise: "Education, youth development, prevention programs",
    order: 5
  },
  {
    name: "David Park",
    title: "Board Member",
    bio: "David leads our marketing and communications strategy, helping us reach more community members and raise awareness about our services.",
    profession: "Marketing Director, Hartford Insurance Group",
    tenure: "Board member since 2022",
    expertise: "Marketing, communications, community outreach",
    order: 6
  }
];

async function importBoardMembers() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nTo get a token:');
    console.log('1. Go to https://sanity.io/manage');
    console.log('2. Select your project (The Rowan Center)');
    console.log('3. Go to API → Tokens');
    console.log('4. Create a new token with "Editor" permissions');
    console.log('5. Set it: export SANITY_API_TOKEN="your-token-here"');
    console.log('6. Run this script again\n');
    process.exit(1);
  }

  console.log('🚀 Starting board members import...\n');

  try {
    // Check if board members already exist
    const existing = await writeClient.fetch(`*[_type == "boardMember"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing board members.`);
      console.log('Do you want to:');
      console.log('  1. Skip import (keep existing)');
      console.log('  2. Delete existing and re-import');
      console.log('\nPlease delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    let imported = 0;
    let failed = 0;

    for (const member of boardMembers) {
      try {
        const doc = {
          _type: 'boardMember',
          name: member.name,
          title: member.title,
          bio: member.bio,
          profession: member.profession,
          tenure: member.tenure,
          expertise: member.expertise,
          order: member.order,
          // Optional fields - can be added later in Sanity Studio
          // photo: null,
          // email: null,
          // linkedIn: null,
        };

        await writeClient.create(doc);
        console.log(`✅ Imported: ${member.name} (${member.title})`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import ${member.name}:`, error);
        failed++;
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported}`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Open Sanity Studio: http://localhost:3333`);
    console.log(`   2. Go to "Board Member" documents`);
    console.log(`   3. Add photos for each board member`);
    console.log(`   4. Add email addresses if public`);
    console.log(`   5. Add LinkedIn URLs if available\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

// Run the import
importBoardMembers();
