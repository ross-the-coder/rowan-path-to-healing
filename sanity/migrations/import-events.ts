import { writeClient, hasValidToken } from '../lib/client';

const events = [
  {
    title: "Annual Fundraising Gala",
    slug: "annual-fundraising-gala-2025",
    date: new Date('2025-05-15').toISOString(),
    time: "6:00 PM - 10:00 PM",
    location: "Stamford Marriott Hotel & Spa",
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Join us for an elegant evening of celebration and support for The Rowan Center\'s mission to eliminate sexual violence. The gala will feature dinner, live music, silent auction, and inspiring speakers.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    category: "Fundraiser",
    status: "upcoming",
    featured: true
  },
  {
    title: "Community Awareness Walk",
    slug: "community-awareness-walk-2025",
    date: new Date('2025-04-20').toISOString(),
    time: "9:00 AM - 12:00 PM",
    location: "Cummings Park, Stamford",
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Walk together to raise awareness about sexual violence prevention and support survivors. This family-friendly event includes activities, speakers, and resources for the community.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    category: "Community",
    status: "upcoming",
    featured: true
  },
  {
    title: "Volunteer Training Session - Spring 2025",
    slug: "volunteer-training-spring-2025",
    date: new Date('2025-03-01').toISOString(),
    time: "Tuesdays & Thursdays 6:00-8:30 PM, Saturdays 9:00 AM-2:00 PM",
    location: "The Rowan Center, Stamford CT",
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '40-hour certification training for new crisis advocate volunteers. Upon completion, you will be a state-certified Sexual Assault Crisis Advocate. Learn about sexual violence, counseling techniques, crisis intervention, and more.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    category: "Training",
    registrationLink: "mailto:rlopez@therowancenter.org",
    status: "upcoming",
    featured: false
  }
];

async function importEvents() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting events import...\n');

  try {
    const existing = await writeClient.fetch(`*[_type == "event"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing events.`);
      console.log('Please delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    let imported = 0;
    let failed = 0;

    for (const event of events) {
      try {
        const doc = {
          _type: 'event',
          title: event.title,
          slug: { _type: 'slug', current: event.slug },
          date: event.date,
          time: event.time,
          location: event.location,
          description: event.description,
          category: event.category,
          registrationLink: event.registrationLink,
          status: event.status,
          featured: event.featured,
        };

        await writeClient.create(doc);
        console.log(`✅ Imported: ${event.title}`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import ${event.title}:`, error);
        failed++;
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} events`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importEvents();
