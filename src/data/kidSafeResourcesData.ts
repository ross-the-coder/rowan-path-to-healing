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
        category: "Boundaries",
        links: [
          { 
            title: "8 Ways to Teach Kids about Consent and Healthy Boundaries",
            url: "https://childmind.org/article/how-to-talk-to-kids-about-sex-and-consent/",
            description: "Ideas on how to continue the conversation with children about having their own boundaries, and what to do if they aren't respected. Also includes a list of books that cover this topic.",
            keywords: ["consent", "boundaries", "healthy boundaries", "kids", "children", "body autonomy", "permission"]
          }
        ]
      },
      {
        category: "Empathy",
        links: [
          { 
            title: "Key Strategies to Teach Children Empathy",
            url: "https://kidshealth.org/classroom/6to8/personal/growing/empathy.pdf",
            description: "Includes age-specific ways to encourage empathy in your child, as well as a helpful visual to map out a timeline of age-appropriate activities and conversations.",
            keywords: ["empathy", "teach", "children", "strategies", "feelings", "emotions", "understanding"]
          }
        ]
      },
      {
        category: "Internet Safety",
        links: [
          { 
            title: "A Guide to Internet Safety for Kids in 2025 | SafeWise",
            url: "https://www.safewise.com/resources/internet-safety-for-kids/",
            description: "Provides information about online threats, state-based online safety laws, internet safety technology for parents to give to their children, and tips and tools for how to teach and protect your children.",
            keywords: ["internet safety", "online safety", "kids", "digital", "protection", "web", "2025"]
          },
          { 
            title: "Neurodivergent children's online safety issues | Internet Matters",
            url: "https://www.internetmatters.org/advice/neurodivergent-children/neurodivergent-online-safety-issues/",
            description: "Important information about risks that neurodivergent children may face when they are using the internet. It covers sexting and sexual abuse, grooming and exploitation, cyberbullying, oversharing, and peer pressure.",
            keywords: ["neurodivergent", "online safety", "internet", "autism", "adhd", "grooming", "cyberbullying"]
          }
        ]
      },
      {
        category: "Sexting",
        links: [
          { 
            title: "Sexting: How to Talk With Kids About the Risks - HealthyChildren.org",
            url: "https://www.healthychildren.org/English/family-life/Media/Pages/the-new-problem-of-sexting.aspx",
            description: "Information about sexting and its risks, as well as ways to engage in conversation with your child about it.",
            keywords: ["sexting", "risks", "talk", "kids", "conversation", "digital", "images"]
          },
          { 
            title: "How to Talk to Your Kids About Sexting - Child Mind Institute",
            url: "https://childmind.org/article/talking-to-kids-about-sexting/",
            description: "Includes conversation starters to talk to your children about sexting, and is offered in a video format as well.",
            keywords: ["sexting", "talk", "kids", "conversation", "child mind", "video"]
          },
          { 
            title: "What to do when your child shares explicit material: A step-by-step guide - ParentsTogether",
            url: "https://parents-together.org/what-to-do-when-your-child-shares-explicit-material-a-step-by-step-guide/",
            description: "A checklist and information about what to do if your child has sent Child Sexual Abuse Material to another person. Includes a video on sextortion to understand what might be happening in this situation.",
            keywords: ["sexting", "explicit", "csam", "sextortion", "parents", "guide", "checklist"]
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
