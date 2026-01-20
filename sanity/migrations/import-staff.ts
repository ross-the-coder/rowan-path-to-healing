import { writeClient, hasValidToken } from '../lib/client';

async function importStaff() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    process.exit(1);
  }

  const leadershipTeam = [
    { name: "Sharon Walker Epps", title: "Chief Executive Officer", email: "swalkerepps@therowancenter.org", category: "leadership", order: 1 },
    { name: "Cody Baird", title: "Chief Operating Officer", email: "cbaird@therowancenter.org", category: "leadership", order: 2 },
    { name: "Luke Robbins, LCSW", title: "Clinical Director", email: "lrobbins@traumarecoveryct.org", category: "leadership", order: 3 },
    { name: "Leonora Campbell", title: "Director of Education and Outreach", email: "lcampbell@therowancenter.org", category: "leadership", order: 4 },
    { name: "Marsha Placide, LPCA, NCC, ATR-P", title: "Director of Counseling (EN/HC)", email: "mplacide@therowancenter.org", category: "leadership", order: 5 },
  ];

  const staffMembers = [
    { name: "Abby Flores", title: "Justice Advocate", email: "aflores@therowancenter.org", category: "staff", order: 10 },
    { name: "Anthony Guerrero", title: "Community Educator (EN/ES)", email: "aguerrero@therowancenter.org", category: "staff", order: 11 },
    { name: "Charlotte Gaston", title: "Community Educator", email: "cgaston@therowancenter.org", category: "staff", order: 12 },
    { name: "Emma Zelenak", title: "Education Coordinator", email: "ezelenak@therowancenter.org", category: "staff", order: 13 },
    { name: "Isabel Negron, LCSW", title: "Assitant Clinical Director", email: "inegron@traumarecoveryct.org", category: "staff", order: 14 },
    { name: "Kathy Miranda", title: "Community Educator (EN/ES)", email: "kmiranda@therowancenter.org", category: "staff", order: 15 },
    { name: "Raquel Lopez, LMSW", title: "Part-time Counselor & Crisis Advocate Programs Administrator", email: "rlopez@therowancenter.org", category: "staff", order: 16 },
    { name: "Sarah Anzellotti", title: "Crisis Counselor & Data Quality Coordinator", email: "sanzellotti@therowancenter.org", category: "staff", order: 17 },
    { name: "Taina Colon, LMSW", title: "Staff Therapist and Trauma Fellow", email: "tcolon@traumarecoveryct.org", category: "staff", order: 18 },
    { name: "Zachary Boccarossa, LMSW", title: "Staff Therapist and Trauma Fellow", email: "zboccarossa@traumarecoveryct.org", category: "staff", order: 19 },
  ];

  const allStaff = [...leadershipTeam, ...staffMembers];

  try {
    console.log('🗑️  Deleting existing staff members...');
    const existing = await writeClient.fetch(`*[_type == "staffMember"]{ _id }`);
    for (const doc of existing) {
      await writeClient.delete(doc._id);
    }

    console.log('👔 Importing staff members...');
    for (const staff of allStaff) {
      await writeClient.create({
        _type: 'staffMember',
        name: staff.name,
        title: staff.title,
        email: staff.email,
        category: staff.category,
        order: staff.order,
      });
      console.log(`✅ ${staff.name}`);
    }
    console.log('\n✨ Staff import complete!');
  } catch (error) {
    console.error('❌ Import failed:', error);
  }
}

importStaff();
