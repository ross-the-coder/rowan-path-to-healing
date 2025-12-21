import { writeClient, hasValidToken } from '../lib/client';

async function importBlogPosts() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting blog posts import...\n');

  try {
    const existing = await writeClient.fetch(`*[_type == "blogPost"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing blog posts.`);
      console.log('Please delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    // First, get the author references
    console.log('📚 Fetching authors...');
    const authors = await writeClient.fetch(`*[_type == "author"]{ _id, name, slug }`);
    
    if (authors.length === 0) {
      console.error('❌ No authors found! Please run: npm run import:authors first\n');
      process.exit(1);
    }

    const getAuthorId = (name: string) => {
      const author = authors.find((a: any) => a.name === name);
      return author?._id;
    };

    const blogPosts = [
      {
        title: "Understanding Trauma-Informed Care: What It Means for Survivors",
        slug: "understanding-trauma-informed-care",
        excerpt: "Exploring the principles of trauma-informed care and how this approach creates safer, more supportive environments for healing and recovery.",
        body: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Trauma-informed care is a framework that acknowledges the widespread impact of trauma and recognizes the signs and symptoms in clients, families, staff, and others involved with the system.'
              }
            ],
            markDefs: [],
            style: 'normal'
          },
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'The six key principles of trauma-informed care are: Safety, Trustworthiness and Transparency, Peer support, Collaboration and mutuality, Empowerment and choice, and Cultural, Historical, and Gender Issues.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ],
        author: getAuthorId("Dr. Michael Chen"),
        publishedDate: new Date('2024-03-18').toISOString(),
        category: "Trauma Recovery",
        tags: ["Trauma-Informed Care", "Recovery", "Support"],
        featured: true,
        status: "published"
      },
      {
        title: "Building Resilience: Teaching Children About Body Safety",
        slug: "building-resilience-body-safety",
        excerpt: "Practical strategies for parents and educators to have age-appropriate conversations about personal safety and boundaries.",
        body: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Teaching children about body safety is one of the most important things parents and educators can do to protect them. Age-appropriate conversations about boundaries help children understand their rights and how to speak up.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ],
        author: getAuthorId("Maria Rodriguez"),
        publishedDate: new Date('2024-03-10').toISOString(),
        category: "Prevention",
        tags: ["Children", "Education", "Prevention", "Body Safety"],
        featured: false,
        status: "published"
      },
      {
        title: "Supporting a Friend in Crisis: What to Say and Do",
        slug: "supporting-friend-in-crisis",
        excerpt: "Guidance for friends and family members on how to provide meaningful support to someone experiencing trauma or crisis.",
        body: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'When someone you care about experiences trauma, knowing how to support them can feel overwhelming. The most important thing you can do is listen without judgment and let them know you believe them.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ],
        author: getAuthorId("Lisa Chen"),
        publishedDate: new Date('2024-02-02').toISOString(),
        category: "Support",
        tags: ["Friends", "Family", "Support", "Crisis"],
        featured: false,
        status: "published"
      }
    ];

    let imported = 0;
    let failed = 0;

    for (const post of blogPosts) {
      try {
        if (!post.author) {
          console.warn(`⚠️  Skipping "${post.title}" - author not found`);
          continue;
        }

        const doc = {
          _type: 'blogPost',
          title: post.title,
          slug: { _type: 'slug', current: post.slug },
          excerpt: post.excerpt,
          body: post.body,
          author: { _type: 'reference', _ref: post.author },
          publishedDate: post.publishedDate,
          category: post.category,
          tags: post.tags,
          featured: post.featured,
          status: post.status,
        };

        await writeClient.create(doc);
        console.log(`✅ Imported: ${post.title}`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import ${post.title}:`, error);
        failed++;
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} blog posts`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importBlogPosts();
