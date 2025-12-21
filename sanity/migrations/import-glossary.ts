import { writeClient, hasValidToken } from '../lib/client';

// Glossary terms from src/data/glossaryData.ts
const glossaryTerms = [
  {
    term: "Clean and healthy rule",
    definition: "A guideline that helps children understand appropriate versus inappropriate touch, focusing on areas of the body that are private and should be kept clean and healthy.",
    category: "Prevention Education"
  },
  {
    term: "Sexual harassment",
    definition: "Unwelcome conduct of a sexual nature that creates an intimidating, hostile, or offensive environment.",
    category: "Legal Terms"
  },
  {
    term: "Sexual assault",
    definition: "Any unwanted touch of an intimate part of the body; in the state of Connecticut, this includes the chest, butt, genitals, and inner thigh. In addition, it also includes any unwanted sexual contact.",
    category: "Legal Terms"
  },
  {
    term: "Title IX",
    definition: "A federal law that aims to protect students from sex and gender-based discrimination in education programs or activities that receive federal funding.",
    category: "Legal Terms"
  },
  {
    term: "Sexting",
    definition: "Sending intimate content through text message, social media direct message, or other messaging system or app.",
    category: "Digital Safety"
  },
  {
    term: "Sextortion",
    definition: "A form of blackmail where someone threatens to share intimate images or information unless the victim provides more images, money, or other demands.",
    category: "Digital Safety"
  },
  {
    term: "Age of consent",
    definition: "The age at which somebody can legally consent to engaging in sexual activity; in Connecticut, it is 16.",
    category: "Legal Terms"
  },
  {
    term: "Child sexual abuse material",
    definition: "Any visual depiction of sexual conduct involving a minor, which is a person less than 18 years old.",
    category: "Legal Terms"
  },
  {
    term: "CSAM",
    definition: "Child Sexual Abuse Material - any visual depiction of sexual conduct involving a minor, which is a person less than 18 years old.",
    category: "Legal Terms"
  },
  {
    term: "Consent",
    definition: "Agreement to engage in sexual conduct.",
    category: "General"
  },
  {
    term: "Human trafficking",
    definition: "The exploitation of people through force, fraud, or coercion for the purpose of labor, sexual exploitation, or other forms of abuse.",
    category: "Legal Terms"
  },
  {
    term: "Incapacitation",
    definition: "A high level of intoxication that removes someone's ability to consent to sexual behavior.",
    category: "General"
  },
  {
    term: "Rape",
    definition: "Non-consensual sexual intercourse achieved through force, threat, or when the victim is incapable of giving consent.",
    category: "Legal Terms"
  },
  {
    term: "Statutory rape",
    definition: "Sexual activity with a person who is below the legal age of consent, regardless of whether the activity was consensual.",
    category: "Legal Terms"
  },
  {
    term: "Rape culture",
    definition: "An environment in which rape is prevalent and normalized due to societal attitudes about gender and sexuality.",
    category: "General"
  },
  {
    term: "Victim blaming",
    definition: "The act of holding a victim partially or entirely responsible for the harm that befell them, rather than placing responsibility on the perpetrator.",
    category: "General"
  },
  {
    term: "Title VII",
    definition: "A person's rights in the workplace to be free from discrimination.",
    category: "Legal Terms"
  },
  {
    term: "The Clery Act",
    definition: "A federal consumer protection law that requires colleges and universities to be transparent about campus crime policy and statistics.",
    category: "Legal Terms"
  },
  {
    term: "Clery Act",
    definition: "A federal consumer protection law that requires colleges and universities to be transparent about campus crime policy and statistics.",
    category: "Legal Terms"
  },
  {
    term: "Boundaries",
    definition: "Personal limits that define what behavior is acceptable and what is not in relationships and interactions with others.",
    category: "Prevention Education"
  },
  {
    term: "Trusted adult",
    definition: "A safe, reliable person that a child can talk to about problems or concerns, such as a parent, teacher, counselor, or family member.",
    category: "Prevention Education"
  },
  {
    term: "Safe touch",
    definition: "Touch that is appropriate, respectful, and does not make someone feel uncomfortable or unsafe.",
    category: "Prevention Education"
  },
  {
    term: "Unsafe touch",
    definition: "Touch that is inappropriate, unwanted, or makes someone feel uncomfortable, scared, or confused.",
    category: "Prevention Education"
  },
  {
    term: "Body autonomy",
    definition: "The right to control what happens to your own body and to make decisions about your own physical self.",
    category: "Prevention Education"
  },
  {
    term: "Bystander",
    definition: "A person who witnesses an event or situation but is not directly involved. Bystanders can choose to intervene and help.",
    category: "General"
  },
  {
    term: "Grooming",
    definition: "The process by which an abuser builds trust and emotional connection with a child in order to manipulate or exploit them.",
    category: "Prevention Education"
  },
  {
    term: "Cyberbullying",
    definition: "Bullying that takes place using electronic technology, including devices, social media, and the internet.",
    category: "Digital Safety"
  },
  {
    term: "Digital footprint",
    definition: "The trail of data you leave behind when using the internet, including websites visited, posts made, and information shared online.",
    category: "Digital Safety"
  },
  {
    term: "Online predator",
    definition: "Someone who uses the internet to exploit or harm children, often by building relationships with them online.",
    category: "Digital Safety"
  },
  {
    term: "Mandated reporter",
    definition: "A person who is legally required to report suspected child abuse or neglect to appropriate authorities.",
    category: "Legal Terms"
  },
  {
    term: "Disclosure",
    definition: "When a child tells someone about abuse or an uncomfortable situation they have experienced.",
    category: "Prevention Education"
  }
];

async function importGlossary() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting glossary import...\n');

  try {
    const existing = await writeClient.fetch(`*[_type == "glossaryTerm"]`);
    
    if (existing.length > 0) {
      console.log(`⚠️  Found ${existing.length} existing glossary terms.`);
      console.log('Please delete manually in Sanity Studio if needed, then run again.\n');
      return;
    }

    let imported = 0;
    let failed = 0;

    for (const term of glossaryTerms) {
      try {
        const doc = {
          _type: 'glossaryTerm',
          term: term.term,
          definition: term.definition,
          category: term.category,
        };

        await writeClient.create(doc);
        console.log(`✅ Imported: ${term.term}`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import ${term.term}:`, error);
        failed++;
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} terms`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importGlossary();
