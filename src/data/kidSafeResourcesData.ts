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
        category: "Sexual Violence",
        links: [
          { 
            title: "How To Talk to Your Teen to Prevent Sexual Violence | CRCC",
            url: "https://crccsolano.org/how-to-talk-to-your-teen-to-prevent-sexual-violence/",
            description: "A great baseline of tips to talk to your child about sexual violence, what it is, and how to respond if they disclose.",
            keywords: ["sexual violence", "teen", "talk", "prevention", "disclosure", "parents"]
          },
          { 
            title: "Teen Sexual Violence | WCASA",
            url: "https://www.wcasa.org/wp-content/uploads/2018/12/Youth-Resource-Teen-Sexual-Violence-FINAL.pdf",
            description: "An infographic with data specifically about sexual violence that amongst teens, risks that may come from it, and ways to prevent it in your community.",
            keywords: ["sexual violence", "teen", "infographic", "statistics", "prevention", "community"]
          },
          { 
            title: "Teen Sexual Assault: Information for Teens",
            url: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/teen-sexual-assault-information-teens",
            description: "A tool specifically written for teens with definitions, statistics, information about drug use and the internet, common reactions when having experienced sexual violence, and what they can do if they are a victim/survivor.",
            keywords: ["sexual assault", "teen", "information", "statistics", "reactions", "survivor"]
          },
          { 
            title: "Warning Signs of Sexual Violence in Teens - RAINN",
            url: "https://www.rainn.org/articles/warning-signs-sexual-violence-teens",
            description: "Provides a list of signs that your child is a victim/survivor of sexual violence, as well as signs that a relationship they are in might be abusive.",
            keywords: ["warning signs", "sexual violence", "teen", "rainn", "abuse", "relationships"]
          }
        ]
      },
      {
        category: "Title IX",
        links: [
          { 
            title: "Nine Ways Title IX Protects High School Students",
            url: "https://nwlc.org/resource/9-ways-title-ix-protects-high-school-students/",
            description: "Information about students' rights under Title IX, including but not limited to the areas of sports, sexual violence, bullying, pregnancy, and LGBTQ+ students.",
            keywords: ["title ix", "high school", "students", "rights", "sports", "lgbtq"]
          },
          { 
            title: "The Origins of Title IX",
            url: "https://www.womenssportsfoundation.org/advocacy/title-ix-origins/",
            description: "An informational video that shares the history of Title IX.",
            keywords: ["title ix", "history", "origins", "video", "education"]
          },
          { 
            title: "Title IX and Sex Discrimination | U.S. Department of Education",
            url: "https://www.southernct.edu/sexual-misconduct/rape-culture",
            description: "Information about Title IX law, frequently asked questions, and case resolutions published by the Department of Education.",
            keywords: ["title ix", "sex discrimination", "education", "law", "faq"]
          },
          { 
            title: "Title IX: How It Affects Survivors of Campus Assault - RAINN",
            url: "https://www.rainn.org/articles/victim-blaming",
            description: "Provides information about Title IX, protections it provides to victims/survivors, and the grievance process for students who are attending college.",
            keywords: ["title ix", "survivors", "campus", "assault", "college", "rainn"]
          },
          { 
            title: "LGBTQ Students + Staff in Schools: Know Your Rights",
            url: "https://www.stopitnow.org/ohp/victim-blaming-and-sexual-abuse",
            description: "A guide that specifically discusses Title IX as it pertains to LGBTQ+ people, and includes further resources for exploration.",
            keywords: ["title ix", "lgbtq", "rights", "schools", "students", "staff"]
          },
          { 
            title: "Justice Starts with Awareness: Teaching Teens to Know Their Legal Rights",
            url: "https://www.nsvrc.org/sites/default/files/2021-04/publications_nsvrc_factsheet_victim-blaming.pdf",
            description: "A guide to share information and start the conversation about teens' rights and legal repercussions of violations against school-based acts, online behavior, consent, and privacy.",
            keywords: ["legal rights", "teens", "consent", "sexting", "privacy", "awareness"]
          }
        ]
      },
      {
        category: "Sexting",
        links: [
          { 
            title: "Sexting: What You Should Know, How You Should Respond",
            url: "https://www.unicef.org/parenting/child-safety/sexting-what-you-should-know",
            description: "An article that defines sexting, why people might engage in the behavior, and what you can do to support a child who might be sexting.",
            keywords: ["sexting", "unicef", "support", "behavior", "parents"]
          },
          { 
            title: "11 Facts about Sexting",
            url: "https://www.dosomething.org/us/facts/11-facts-about-sexting",
            description: "Further statistics and information about sexting, who does it, and why.",
            keywords: ["sexting", "facts", "statistics", "information"]
          },
          { 
            title: "Learn about sexting - Facts and statistics | Internet Matters",
            url: "https://www.internetmatters.org/issues/sexting/learn-about-it/",
            description: "Information about sexting, self-generated child sexual abuse material, the risks, and videos about the topic itself.",
            keywords: ["sexting", "facts", "statistics", "csam", "risks", "videos"]
          },
          { 
            title: "Sexting Resource Sheet for Parents",
            url: "https://www.healthychildren.org/English/family-life/Media/Pages/Sexting-How-to-Talk-with-Kids-About-the-Risks.aspx",
            description: "Defines sexting, ways to prevent your child from engaging in it, and what you can do as a parent. Also includes further resources for exploration.",
            keywords: ["sexting", "parents", "prevention", "resources", "risks"]
          }
        ]
      },
      {
        category: "Internet Safety",
        links: [
          { 
            title: "Neurodivergent children's online safety issues | Internet Matters",
            url: "https://www.internetmatters.org/inclusive-digital-safety/advice-by-need/neurodivergence/",
            description: "Important information about risks that neurodivergent children may face when they are using the internet. It covers sexting and sexual abuse, grooming and exploitation, cyberbullying, oversharing, and peer pressure.",
            keywords: ["neurodivergent", "online safety", "internet", "autism", "adhd", "cyberbullying"]
          },
          { 
            title: "A Guide to Internet Safety for Kids in 2025 | SafeWise",
            url: "https://childmind.org/article/how-to-talk-to-kids-about-sex-and-consent/",
            description: "Provides information about online threats, state-based online safety laws, internet safety technology for parents to give to their children, and tips and tools for how to teach and protect your children.",
            keywords: ["internet safety", "online", "kids", "parents", "protection", "2025"]
          }
        ]
      },
      {
        category: "Sextortion",
        links: [
          { 
            title: "Sextortion: What Parents Should Know",
            url: "https://www.nyp.org/healthlibrary/multimedia/teaching-older-children-and-teens-about-consent",
            description: "A primer on sextortion, how perpetrators gain access to children, and what you can do as a parent to prevent it and support your child in case it does happen.",
            keywords: ["sextortion", "parents", "prevention", "support", "perpetrators"]
          },
          { 
            title: "No Escape Room | NCMEC",
            url: "https://www.plannedparenthood.org/learn/parents/teens/teaching-teens-about-consent",
            description: "An interactive video that takes viewers through a sextortion scenario to understand what might happen and its impacts.",
            keywords: ["sextortion", "ncmec", "interactive", "video", "scenario"]
          },
          { 
            title: "Take It Down",
            url: "https://www.teensforcourage.org/consent/",
            description: "A tool created by the National Center for Missing and Exploited Children (NCMEC) to remove child sexual abuse material from the internet.",
            keywords: ["take it down", "ncmec", "csam", "remove", "images"]
          }
        ]
      },
      {
        category: "Consent",
        links: [
          { 
            title: "How to Talk to Kids About Sex and Consent - Child Mind Institute",
            url: "https://www.mercy.edu/news-events/news/mercy-university-expert-shares-tips-navigating-teens-about-healthy-relationships",
            description: "A primer on how to continue the conversation about consent. Includes topics such as pressure, substance use, verbal/nonverbal consent, and specifically how to talk to boys in the current culture.",
            keywords: ["consent", "sex", "talk", "teens", "pressure", "communication"]
          },
          { 
            title: "Teaching Older Children And Teens About Consent",
            url: "https://www.teensforcourage.org/healthy-relationships-101/",
            description: "Includes talking points on how to continue the conversation about consent with your child.",
            keywords: ["consent", "teens", "children", "talking points", "conversation"]
          },
          { 
            title: "Teach Consent",
            url: "https://www.internetmatters.org/inclusive-digital-safety/advice-by-need/neurodivergence/",
            description: "A video and discussion guide for parents and children to talk about ways to ask for and give consent.",
            keywords: ["consent", "video", "discussion", "parents", "guide"]
          },
          { 
            title: "Consent | Teens for Courage",
            url: "https://www.safewise.com/resources/internet-safety-for-kids/",
            description: "Provides information about all of the parts of consent, such as enthusiastic and ongoing, as well as tools for teens to put consent into practice.",
            keywords: ["consent", "teens", "enthusiastic", "ongoing", "practice"]
          }
        ]
      },
      {
        category: "Healthy Relationships",
        links: [
          { 
            title: "Talking with teens about healthy relationships - Children's Mercy",
            url: "https://www.fbi.gov/how-we-can-help-you/safety-resources/scams-and-safety/common-scams-and-crimes/sextortion",
            description: "An introduction to healthy relationships, including questions that parents can pose to their children, overcoming any obstacles to the conversation, and safety tips to share.",
            keywords: ["healthy relationships", "teens", "parents", "conversation", "safety"]
          },
          { 
            title: "Healthy Relationships 101 | Teens for Courage",
            url: "https://www.missingkids.org/netsmartz/videos/noescaperoom",
            description: "Provides information about healthy versus unhealthy and abusive relationships, as well as characteristics that define each type.",
            keywords: ["healthy relationships", "unhealthy", "abusive", "characteristics", "teens"]
          },
          { 
            title: "Healthy Relationships for Teens Toolkit",
            url: "https://takeitdown.ncmec.org/",
            description: "A guide with activities and conversation starters to understand and practice having healthy relationships.",
            keywords: ["healthy relationships", "teens", "toolkit", "activities", "conversation"]
          }
        ]
      },
      {
        category: "Clery Act",
        links: [
          { 
            title: "Recommended Resources for Students and Families",
            url: "https://www.mccannlaw.com/blog/2023/january/what-is-the-clery-act-/",
            description: "Resources specifically about the Clery Act and how it applies to college students.",
            keywords: ["clery act", "students", "families", "college", "resources"]
          },
          { 
            title: "Clery Center's Policy History",
            url: "https://www.clerycenter.org/the-clery-act",
            description: "Provides a timeline of the history of students' rights in college, including the Clery Act, Title IX, and the Stop Campus Hazing Act.",
            keywords: ["clery act", "history", "title ix", "hazing", "timeline"]
          },
          { 
            title: "Frequently Asked Questions (FAQ)",
            url: "https://www.rainn.org/articles/clery-act",
            description: "Further information about the Clery Act, and questions that are often asked about it and the rights that are provided to students.",
            keywords: ["clery act", "faq", "questions", "rights", "students"]
          },
          { 
            title: "History of the Clery Act: Fact Sheet",
            url: "https://www.knowyourix.org/college-resources/title-ix/",
            description: "A timeline of the Clery Act, as well as rights provided to students under the law.",
            keywords: ["clery act", "history", "fact sheet", "timeline", "rights"]
          }
        ]
      },
      {
        category: "Rape Culture",
        links: [
          { 
            title: "Rape Culture, Victim Blaming, And The Facts | Southern Connecticut State University",
            url: "https://www.aauw.org/resources/legal/las/title-ix/",
            description: "Information about and examples of how rape culture persists, victim blaming and why it is dangerous, intimate partner violence, and sexual violence.",
            keywords: ["rape culture", "victim blaming", "ipv", "sexual violence", "facts"]
          },
          { 
            title: "Rape Culture - Student Title IX Case Management",
            url: "https://www.womenssportsfoundation.org/advocacy/title-ix-faq/",
            description: "An introduction to rape culture and how it shows up in everyday life.",
            keywords: ["rape culture", "title ix", "everyday", "introduction"]
          },
          { 
            title: "What is rape culture? | Rape Crisis England & Wales",
            url: "https://rapecrisis.org.uk/get-informed/about-sexual-violence/what-is-rape-culture/",
            description: "Information about rape culture, why it exists, and how gender plays an important role in understanding sexual violence.",
            keywords: ["rape culture", "gender", "sexual violence", "understanding"]
          },
          { 
            title: "16 ways you can stand against rape culture | UN Women",
            url: "https://www.unwomen.org/en/news/stories/2019/11/compilation-16-ways-you-can-stand-against-rape-culture",
            description: "Provides ways that individuals and communities can work to end rape culture, including but not limited to education and getting involved.",
            keywords: ["rape culture", "action", "stand against", "community", "education"]
          },
          { 
            title: "Timeline of the History of Sexual Violence in the U.S. | All in",
            url: "https://allin.org/timeline/",
            description: "An all-encompassing timeline that highlights sexual violence and the responses to it since the beginning of the United States.",
            keywords: ["sexual violence", "history", "timeline", "united states"]
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
