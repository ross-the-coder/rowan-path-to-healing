// KidSafe Resources Data with keywords for search
// Based on ES, MS, and HS resource sheets

export interface ResourceLink {
  title: string;
  url?: string;
  description?: string;
  keywords: string[];
}

export interface ResourceCategory {
  category: string;
  links: ResourceLink[];
}

export interface AgeGroupResources {
  title: string;
  key: "elementary" | "middle" | "high";
  resources: ResourceCategory[];
}

export const kidSafeResourcesData: AgeGroupResources[] = [
  {
    title: "Elementary School (K-5)",
    key: "elementary",
    resources: [
      {
        category: "Boundaries",
        links: [
          { 
            title: "8 Ways to Teach Kids about Consent and Healthy Boundaries", 
            keywords: ["consent", "boundaries", "healthy boundaries", "teach", "kids", "children", "body autonomy", "permission"]
          },
          { 
            title: "Growing Kids and Boundaries: Teaching Consent By Age and Stage", 
            keywords: ["consent", "boundaries", "age appropriate", "development", "kids", "stages", "teaching"]
          },
          { 
            title: "Teaching Kids About Boundaries - Child Mind Institute", 
            keywords: ["boundaries", "kids", "children", "teaching", "child mind", "personal space", "body boundaries"]
          },
          { 
            title: "Teaching your child to set boundaries with friends", 
            keywords: ["boundaries", "friends", "peer", "social", "relationships", "setting limits"]
          },
          { 
            title: "Why Children Need Boundaries: A Guide For Parents", 
            keywords: ["boundaries", "parents", "guide", "children", "limits", "safety"]
          }
        ]
      },
      {
        category: "Empathy",
        links: [
          { 
            title: "Key Strategies to Teach Children Empathy", 
            keywords: ["empathy", "teach", "children", "strategies", "feelings", "emotions", "understanding"]
          },
          { 
            title: "The caring child: How to teach empathy (age 5)", 
            keywords: ["empathy", "caring", "teach", "kindergarten", "feelings", "compassion"]
          },
          { 
            title: "Empathy Activities for Kind and Not-Bored Kids", 
            keywords: ["empathy", "activities", "kids", "kindness", "games", "exercises"]
          },
          { 
            title: "Social Skills: Empathy at Age 5 | PBS KIDS for Parents", 
            keywords: ["empathy", "social skills", "pbs", "kindergarten", "parents", "development"]
          }
        ]
      },
      {
        category: "Internet Safety",
        links: [
          { 
            title: "Internet Safety for Kids - The Annie E. Casey Foundation", 
            keywords: ["internet safety", "online safety", "kids", "digital", "protection", "web"]
          },
          { 
            title: "8 Internet Safety Rules for Kids", 
            keywords: ["internet safety", "rules", "kids", "online", "guidelines", "protection"]
          },
          { 
            title: "Be Internet Awesome", 
            keywords: ["internet", "online safety", "google", "digital citizenship", "kids", "be internet awesome"]
          },
          { 
            title: "A Guide to Internet Safety for Kids in 2025", 
            keywords: ["internet safety", "guide", "kids", "online", "current", "protection", "2025"]
          },
          { 
            title: "Internet Safety Activity Book", 
            keywords: ["internet safety", "activities", "book", "kids", "learning", "worksheets"]
          },
          { 
            title: "Online Safety Worksheet", 
            keywords: ["online safety", "worksheet", "activity", "kids", "learning", "digital safety"]
          }
        ]
      },
      {
        category: "Body Language",
        links: [
          { 
            title: "Nonverbal communication: body language and tone of voice", 
            keywords: ["body language", "nonverbal", "communication", "tone", "expressions", "feelings"]
          },
          { 
            title: "3 Tips on Helping Kids Understand Emotions and Body Language", 
            keywords: ["body language", "emotions", "kids", "understanding", "feelings", "tips"]
          }
        ]
      },
      {
        category: "Trusted Adults",
        links: [
          { 
            title: "NCMEC - Who is a Trusted Adult?", 
            keywords: ["trusted adult", "safe adult", "ncmec", "reporting", "help", "protection"]
          },
          { 
            title: "Telling Tree - Identifying Safe Adults", 
            keywords: ["trusted adults", "telling tree", "safe adults", "kids", "reporting"]
          }
        ]
      }
    ]
  },
  {
    title: "Middle School (6-8)",
    key: "middle",
    resources: [
      {
        category: "Digital Safety Resources",
        links: [
          { 
            title: "NCMEC - Parents' Guide to Smartphone Safety", 
            keywords: ["smartphone", "phone", "digital safety", "parents", "ncmec", "device", "mobile"]
          },
          { 
            title: "NCMEC - Gaming Safely Guide", 
            keywords: ["gaming", "online games", "safety", "ncmec", "video games", "gaming safety"]
          },
          { 
            title: "NCMEC - AI and Child Safety Online: Guide for Parents", 
            keywords: ["ai", "artificial intelligence", "online safety", "parents", "ncmec", "ai-generated"]
          },
          { 
            title: "CyberTipline.org - Report online exploitation", 
            keywords: ["cybertipline", "report", "exploitation", "online", "ncmec", "reporting"]
          }
        ]
      },
      {
        category: "Support Organizations",
        links: [
          { 
            title: "CT Support Group - Teen support groups and online community", 
            keywords: ["support group", "teen", "connecticut", "community", "mental health"]
          },
          { 
            title: "Boys & Girls Club of Stamford - Gary Wendt Teen Center", 
            keywords: ["boys and girls club", "stamford", "teen", "youth", "community"]
          },
          { 
            title: "Child Guidance Center of Southern CT - Resource hub (EN/ES)", 
            keywords: ["child guidance", "connecticut", "mental health", "spanish", "resources", "bilingual"]
          }
        ]
      },
      {
        category: "Reporting & Support Services",
        links: [
          { 
            title: "Take It Down - NCMEC service to remove intimate images", 
            keywords: ["take it down", "ncmec", "intimate images", "remove", "sexting", "sextortion"]
          },
          { 
            title: "Commission on Human Rights and Opportunities (CHRO) - State civil rights agency", 
            keywords: ["chro", "civil rights", "discrimination", "connecticut", "reporting", "harassment"]
          },
          { 
            title: "Office for Civil Rights - US Department of Education (Federal)", 
            keywords: ["civil rights", "education", "federal", "title ix", "discrimination", "reporting"]
          }
        ]
      },
      {
        category: "Educational Resources",
        links: [
          { 
            title: "National Center for Missing & Exploited Children - Netsmartz Middle School Presentation", 
            keywords: ["ncmec", "netsmartz", "middle school", "presentation", "online safety", "education"]
          },
          { 
            title: "NCMEC - You Sent a Sext. Now What?", 
            keywords: ["sexting", "sext", "ncmec", "consequences", "what to do", "help"]
          },
          { 
            title: "NCMEC - Who is a Trusted Adult?", 
            keywords: ["trusted adult", "ncmec", "safe adult", "reporting", "help"]
          },
          { 
            title: "Connecticut Law - The Rowan Center", 
            keywords: ["connecticut", "law", "rowan center", "legal", "ct laws", "reporting"]
          }
        ]
      },
      {
        category: "Additional Support Organizations",
        links: [
          { 
            title: "National Sexual Violence Resource Center (NSVRC)", 
            keywords: ["nsvrc", "sexual violence", "resources", "national", "support"]
          },
          { 
            title: "Thorn for Parents - Interactive scenarios and guides", 
            keywords: ["thorn", "parents", "scenarios", "guides", "digital safety", "csam"]
          },
          { 
            title: "Love146 - Parent and teen capacity building", 
            keywords: ["love146", "parents", "teens", "trafficking", "prevention", "education"]
          }
        ]
      },
      {
        category: "Legal and Reporting Resources",
        links: [
          { 
            title: "Take It Down - NCMEC", 
            keywords: ["take it down", "ncmec", "remove images", "sexting", "sextortion", "legal"]
          }
        ]
      },
      {
        category: "Sextortion Resources",
        links: [
          { 
            title: "NCMEC - Sextortion Resources for Families", 
            keywords: ["sextortion", "ncmec", "families", "blackmail", "threats", "help"]
          },
          { 
            title: "FBI Tips for Sextortion Victims", 
            keywords: ["sextortion", "fbi", "victims", "law enforcement", "reporting", "help"]
          }
        ]
      }
    ]
  },
  {
    title: "High School (9-12)",
    key: "high",
    resources: [
      {
        category: "Safety Resources",
        links: [
          { 
            title: "NCMEC Take It Down Program - Remove intimate images of minors", 
            keywords: ["take it down", "ncmec", "intimate images", "minors", "remove", "sexting"]
          },
          { 
            title: "CyberTipline.org - Report online exploitation", 
            keywords: ["cybertipline", "report", "exploitation", "online", "ncmec"]
          },
          { 
            title: "NCMEC - Online Safety Resources", 
            keywords: ["ncmec", "online safety", "resources", "digital safety", "protection"]
          }
        ]
      },
      {
        category: "Relationship Resources",
        links: [
          { 
            title: "Love Is Respect - National resource for healthy relationships", 
            keywords: ["love is respect", "healthy relationships", "dating", "teen", "abuse", "support"]
          },
          { 
            title: "Connecticut Coalition Against Domestic Violence", 
            keywords: ["domestic violence", "connecticut", "abuse", "relationships", "support", "help"]
          },
          { 
            title: "RAINN - Rape, Abuse & Incest National Network", 
            keywords: ["rainn", "rape", "abuse", "sexual assault", "hotline", "support", "crisis"]
          }
        ]
      },
      {
        category: "Support Resources",
        links: [
          { 
            title: "National Sexual Assault Hotline - 1-800-656-4673", 
            keywords: ["hotline", "sexual assault", "rainn", "crisis", "support", "help", "24/7"]
          },
          { 
            title: "Connecticut Alliance to End Sexual Violence", 
            keywords: ["connecticut", "alliance", "sexual violence", "support", "advocacy", "resources"]
          }
        ]
      },
      {
        category: "Transition Resources",
        links: [
          { 
            title: "Know Your IX - Student rights organization", 
            keywords: ["title ix", "student rights", "college", "campus", "rights", "know your ix"]
          },
          { 
            title: "U.S. Equal Employment Opportunity Commission", 
            keywords: ["eeoc", "employment", "discrimination", "workplace", "harassment", "rights"]
          },
          { 
            title: "Connecticut Commission on Human Rights and Opportunities", 
            keywords: ["chro", "connecticut", "civil rights", "discrimination", "workplace", "harassment"]
          }
        ]
      },
      {
        category: "Title IX Resources",
        links: [
          { 
            title: "Title IX Explained - What Students Need to Know", 
            keywords: ["title ix", "students", "rights", "school", "harassment", "discrimination"]
          },
          { 
            title: "How to File a Title IX Complaint", 
            keywords: ["title ix", "complaint", "file", "report", "school", "process"]
          },
          { 
            title: "The Clery Act - Campus Safety Information", 
            keywords: ["clery act", "campus", "safety", "college", "reporting", "crime statistics"]
          }
        ]
      },
      {
        category: "Bystander Intervention",
        links: [
          { 
            title: "The 5 D's of Bystander Intervention", 
            keywords: ["bystander", "intervention", "5 d's", "upstander", "help", "action"]
          },
          { 
            title: "Being an Empowered Bystander - Hollaback!", 
            keywords: ["bystander", "empowered", "hollaback", "intervention", "harassment"]
          }
        ]
      },
      {
        category: "Mental Health & Crisis",
        links: [
          { 
            title: "988 Suicide & Crisis Lifeline", 
            keywords: ["988", "crisis", "suicide", "mental health", "hotline", "help", "24/7"]
          },
          { 
            title: "Crisis Text Line - Text HOME to 741741", 
            keywords: ["crisis text line", "text", "crisis", "mental health", "help", "support"]
          },
          { 
            title: "The Trevor Project - LGBTQ+ Youth Support", 
            keywords: ["trevor project", "lgbtq", "youth", "crisis", "support", "mental health"]
          }
        ]
      }
    ]
  }
];

// Function to search resources
export function searchResources(query: string): {
  results: { ageGroup: string; category: string; resource: ResourceLink }[];
  matchedAgeGroups: Set<string>;
} {
  const normalizedQuery = query.toLowerCase().trim();
  const results: { ageGroup: string; category: string; resource: ResourceLink }[] = [];
  const matchedAgeGroups = new Set<string>();
  
  if (!normalizedQuery) {
    return { results: [], matchedAgeGroups };
  }
  
  for (const ageGroup of kidSafeResourcesData) {
    for (const category of ageGroup.resources) {
      for (const resource of category.links) {
        // Check if query matches title or any keyword
        const titleMatch = resource.title.toLowerCase().includes(normalizedQuery);
        const keywordMatch = resource.keywords.some(kw => 
          kw.includes(normalizedQuery) || normalizedQuery.includes(kw)
        );
        const categoryMatch = category.category.toLowerCase().includes(normalizedQuery);
        
        if (titleMatch || keywordMatch || categoryMatch) {
          results.push({
            ageGroup: ageGroup.title,
            category: category.category,
            resource
          });
          matchedAgeGroups.add(ageGroup.key);
        }
      }
    }
  }
  
  return { results, matchedAgeGroups };
}

// Get all categories across all age groups
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  for (const ageGroup of kidSafeResourcesData) {
    for (const category of ageGroup.resources) {
      categories.add(category.category);
    }
  }
  return Array.from(categories).sort();
}
