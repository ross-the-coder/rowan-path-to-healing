export interface ConversationExample {
  scenario: string;
  dialogues: { speaker: string; text: string }[];
}

export interface Activity {
  title: string;
  description: string;
  icon: string;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  color: string;
  summary: string;
  keyPoints: string[];
  conversationStarters?: ConversationExample[];
  activities?: Activity[];
}

export interface GradeContent {
  grade: string;
  gradeLevel: string;
  intro: string;
  highlightMessage?: string;
  topics: Topic[];
  resources: { category: string; links: { title: string; url?: string }[] }[];
  faqs?: { question: string; answer: string }[];
}

export const highSchoolData: GradeContent[] = [
  {
    grade: "9th Grade",
    gradeLevel: "High School Year 1",
    intro: "Ninth grade marks the beginning of high school and a critical time for understanding personal safety, digital responsibility, and legal rights. This year builds on middle school foundations while introducing more complex topics.",
    topics: [
      {
        id: "sexual-harassment-9",
        title: "Sexual Harassment",
        icon: "ShieldAlert",
        color: "red",
        summary: "Understanding verbal and physical forms of sexual harassment and how to identify them.",
        keyPoints: [
          "Sexual harassment can be verbal, including inappropriate comments, catcalling, or discriminatory language",
          "Physical sexual harassment is any unwanted touch on any part of the body",
          "Touch is considered physical sexual harassment as long as it is unwanted – it does not need to be repeated",
          "Physical sexual harassment isn't always sexual in nature – 'sexual' refers to touch of another's body",
          "Accidental, one-time contact is not harassment, but repeated unwanted contact is",
          "A good test: if someone keeps 'accidentally' bumping into you every day for a week, that's harassment"
        ],
        conversationStarters: [
          {
            scenario: "Explaining the difference between accidents and harassment",
            dialogues: [
              { speaker: "Parent", text: "If someone bumps into you once in the hallway and apologizes, that's probably an accident. But if it happens every day for a week?" },
              { speaker: "Child", text: "That seems like they're doing it on purpose." },
              { speaker: "Parent", text: "Exactly. When unwanted contact becomes a pattern, it's harassment, even if each individual incident seems minor." }
            ]
          }
        ]
      },
      {
        id: "sexual-assault-9",
        title: "Sexual Assault",
        icon: "AlertOctagon",
        color: "red",
        summary: "Understanding what constitutes sexual assault under Connecticut law.",
        keyPoints: [
          "Sexual assault is any unwanted touch to an intimate area of the body",
          "In Connecticut, intimate parts include breasts, butt, genitals, and inner thighs",
          "Your child can label any parts of their body as intimate, but Connecticut law specifically covers these areas",
          "Sexual assault covers behaviors that are unwanted – they do not have to be repeated to be covered under law",
          "This is different from sexual harassment, which typically involves repeated behavior on non-intimate areas"
        ]
      },
      {
        id: "sexting-csam",
        title: "Sexting & Child Sexual Abuse Material",
        icon: "Smartphone",
        color: "purple",
        summary: "Understanding the serious legal and personal risks of sharing intimate content as a minor.",
        keyPoints: [
          "Sexting is sending intimate content through text, social media, or messaging apps – including written content, images, videos, and even suggestive emojis",
          "Anyone under 18 who takes or sends intimate photos of themselves or others is engaging in illegal behavior",
          "Child Sexual Abuse Material (CSAM) is any visual depiction of sexual conduct involving a minor (under 18)",
          "Previously called 'child pornography' – the new language reflects that children cannot consent to creating such material",
          "Even if a minor agrees to take or send a photo, this is NOT consent – minors cannot legally consent to creating intimate images",
          "Our goal is not to get teens in trouble, but to teach them about risks to prevent this behavior"
        ],
        activities: [
          {
            title: "Take It Down Program",
            description: "NCMEC's Take It Down program can help remove intimate images of minors from the internet safely and anonymously.",
            icon: "ShieldCheck"
          }
        ]
      },
      {
        id: "sextortion",
        title: "Sextortion",
        icon: "Lock",
        color: "orange",
        summary: "Recognizing and responding to online exploitation attempts.",
        keyPoints: [
          "Sextortion often starts when young people believe they're communicating with someone their own age interested in a relationship",
          "The perpetrator could be an acquaintance, friend, or stranger on social media, text, or video games",
          "They aim to build trust to get targets to send intimate images or videos",
          "After receiving content, they threaten to publish it unless the victim sends more money, photos, or complies with demands",
          "The shame, fear, and confusion often prevents victims from asking for help",
          "No matter what was sent, the victim is still a victim of a crime and it's not their fault",
          "Best response: refrain from sending money, save all messages, and speak to a trusted adult"
        ],
        conversationStarters: [
          {
            scenario: "Discussing what to do if targeted",
            dialogues: [
              { speaker: "Parent", text: "If someone ever threatens to share your photos unless you send more, what would you do?" },
              { speaker: "Child", text: "I don't know... I'd be scared." },
              { speaker: "Parent", text: "The most important thing is to tell me or another trusted adult right away. Don't send anything else. Save the messages. The police can help, and it's never your fault." }
            ]
          }
        ]
      },
      {
        id: "title-ix-9",
        title: "Title IX",
        icon: "Scale",
        color: "blue",
        summary: "Understanding your rights under federal law to be protected from sex and gender-based discrimination in education.",
        keyPoints: [
          "Title IX protects students from sex and gender-based discrimination in education programs receiving federal funding",
          "Your rights include: getting an equal education, being free from discrimination, feeling safe at school",
          "You have the right to report sexual harassment and have your school take action to prevent it",
          "Title IX originally aimed for equality in scholastic sports programs",
          "Example: If one sports team gets better facilities that affect academics (like lights for evening practice), that may be a Title IX violation"
        ],
        activities: [
          {
            title: "Title IX Sports Example",
            description: "If a softball team has stadium lights so they can practice after school, but the baseball team has to leave early for practice, this unequal access to education is a Title IX violation.",
            icon: "Activity"
          }
        ]
      },
      {
        id: "bystander-5ds-9",
        title: "Being an Empowered Bystander",
        icon: "Users",
        color: "green",
        summary: "Learning the 5 D's framework for safely intervening when you witness harmful situations.",
        keyPoints: [
          "The 5 D's framework was developed by college students to help people intervene without direct confrontation",
          "Not everyone feels comfortable stepping directly into a situation – these methods give everyone options",
          "Direct: Intervene directly if it's safe to do so",
          "Distract: Create a diversion to de-escalate the situation",
          "Delegate: Seek help from a third party, like a trusted adult or security officer",
          "Document: Take photos or videos only if safe, and only share with the victim, not social media",
          "Delay: Check in with the person being harassed afterwards to offer support"
        ],
        conversationStarters: [
          {
            scenario: "Walking through a cafeteria scenario",
            dialogues: [
              { speaker: "Parent", text: "Imagine you see two students start fighting in the cafeteria. Using the 5 D's, what could you do?" },
              { speaker: "Child", text: "I could get a teacher or security officer." },
              { speaker: "Parent", text: "That's delegating – great choice! You could also check on the person who was hurt later, which is delaying. The goal is always to de-escalate, not make things worse." }
            ]
          }
        ]
      }
    ],
    resources: [
      {
        category: "Safety Resources",
        links: [
          { title: "NCMEC Take It Down Program - Remove intimate images of minors" },
          { title: "CyberTipline.org - Report online exploitation" },
          { title: "NCMEC - Online Safety Resources" }
        ]
      }
    ],
    faqs: [
      {
        question: "Can a 16 year old engage in sexting because they are the age of consent?",
        answer: "No, a 16 year old cannot engage in sexting. Though they are the age of consent to engage in sexual behavior, they are not able to consent to the creation of intimate images. The only people who can legally engage in sexting are those over 18 years old."
      }
    ]
  },
  {
    grade: "10th Grade",
    gradeLevel: "High School Year 2",
    intro: "Tenth grade expands on understanding consent, age of consent laws, healthy relationships, and power dynamics. These topics prepare students to navigate increasingly complex social situations.",
    topics: [
      {
        id: "consent-framework",
        title: "Understanding Consent",
        icon: "CheckCircle",
        color: "green",
        summary: "A comprehensive framework for understanding what true consent looks like in relationships.",
        keyPoints: [
          "Equal: No power imbalances between partners (age, money, job, position)",
          "Honest: Clear and upfront about identity, sexual health, and relevant history",
          "Wanted: Enthusiastic agreement from all parties – no coercion or pressure",
          "Specific: Each act is discussed and agreed upon by both partners",
          "Ongoing: Consent can be withdrawn at any time, for any specific act or the entire encounter"
        ],
        conversationStarters: [
          {
            scenario: "Discussing what makes consent valid",
            dialogues: [
              { speaker: "Parent", text: "What do you think it means when we say consent needs to be 'wanted'?" },
              { speaker: "Child", text: "That both people actually want to do it?" },
              { speaker: "Parent", text: "Exactly. If someone says yes only after being pressured or asked repeatedly, that's coercion, not consent. Real consent is enthusiastic and freely given." }
            ]
          }
        ]
      },
      {
        id: "age-of-consent",
        title: "Age of Consent Laws",
        icon: "Calendar",
        color: "blue",
        summary: "Understanding Connecticut's age of consent and close-in-age exemption laws.",
        keyPoints: [
          "The age of consent in Connecticut is 16",
          "Close-in-age exemption (Romeo and Juliet laws): Someone over 13 can engage in sexual behavior with someone within 3 years of their age",
          "For those 12 or under, the age difference must be less than 2 years",
          "These laws protect kids from adults, not to punish kids",
          "The age of consent only covers sexual relationships, not romantic ones",
          "It is NEVER the younger person's fault in an illegal relationship – the older person is always responsible",
          "Different states have different ages of consent (NY is 17, Delaware is 18)"
        ],
        activities: [
          {
            title: "Age of Consent Scenarios",
            description: "Discuss which relationships are legal in CT: 16 & 35 (legal but concerning), 16 & 17 (legal), 15 & 18 (illegal - 3+ year gap), 14 & 17 (illegal), 15 & 15 (legal under exemption)",
            icon: "HelpCircle"
          }
        ]
      },
      {
        id: "healthy-relationships-10",
        title: "Healthy vs. Unhealthy Relationships",
        icon: "Heart",
        color: "pink",
        summary: "Recognizing the key elements that make relationships healthy and safe.",
        keyPoints: [
          "Empathy: Understanding and sharing your partner's feelings",
          "Boundaries: Respecting personal limits and space",
          "Respect: Valuing your partner's thoughts, feelings, and choices",
          "Trust: Being reliable and honest with each other",
          "Equity: Fair treatment and equal power in the relationship",
          "Communication: Open, honest dialogue about feelings and needs"
        ]
      },
      {
        id: "power-dynamics",
        title: "Equal Relationships & Power Dynamics",
        icon: "Scale",
        color: "orange",
        summary: "Understanding how power imbalances affect relationships and consent.",
        keyPoints: [
          "Power imbalances can make relationships unequal – age, money, job position, authority",
          "Adults inherently have power over children (jobs, housing, money, developed decision-making)",
          "The frontal lobe, responsible for decision-making, doesn't fully develop until age 25",
          "Certain relationships are illegal due to power imbalances:",
          "A boss and employee under 18",
          "Any school faculty/staff and a student (applies to entire district in CT)",
          "A coach and their player under 18"
        ],
        conversationStarters: [
          {
            scenario: "Discussing power in relationships",
            dialogues: [
              { speaker: "Parent", text: "What do adults have that kids don't?" },
              { speaker: "Child", text: "Jobs, money, a car, their own place?" },
              { speaker: "Parent", text: "Right. And their brains are fully developed. All of this means adults have power over kids, which is why relationships between adults and minors aren't just illegal – they're inherently unequal." }
            ]
          }
        ]
      },
      {
        id: "boundaries-types",
        title: "Types of Boundaries",
        icon: "Shield",
        color: "purple",
        summary: "Understanding emotional, physical, and digital boundaries in relationships.",
        keyPoints: [
          "Emotional boundaries: Protecting your feelings and mental well-being",
          "Physical boundaries: Personal space and comfort with touch",
          "Digital boundaries: Privacy online, sharing of information and images",
          "Everyone has the right to set their own boundaries",
          "Healthy relationships respect all types of boundaries"
        ]
      },
      {
        id: "intoxication-incapacitation",
        title: "Intoxication & Incapacitation",
        icon: "AlertTriangle",
        color: "red",
        summary: "Understanding how substance use affects the ability to consent.",
        keyPoints: [
          "Even if underage, it's important to recognize signs of intoxication for safety",
          "Substance use doesn't always remove ability to consent, but incapacitation does",
          "Signs of incapacitation: unable to undress, stumbling, can't understand what they're agreeing to, unaware of consequences",
          "If someone who is incapacitated says 'yes,' it's still NOT consent",
          "This law is to protect people from those who would take advantage of incapacitated individuals",
          "When in doubt, the answer is no – use good judgment"
        ]
      }
    ],
    resources: [
      {
        category: "Relationship Resources",
        links: [
          { title: "Love Is Respect - National resource for healthy relationships" },
          { title: "Connecticut Coalition Against Domestic Violence" },
          { title: "RAINN - Rape, Abuse & Incest National Network" }
        ]
      }
    ],
    faqs: [
      {
        question: "Can sexual violence occur between two people who are equally intoxicated?",
        answer: "If someone is unable to consent because they are incapacitated, it would be considered sexual violence. If there are two people who are incapacitated, it would be unlikely that they would physically be able to engage in any sexual behavior. However, if two people were equally intoxicated (but not incapacitated), it becomes a gray area. Good judgment should always be used."
      }
    ]
  },
  {
    grade: "11th Grade",
    gradeLevel: "High School Year 3",
    intro: "Eleventh grade reinforces consent and legal concepts while diving deeper into power dynamics, incapacitation, and preparing students for the increased independence that comes with approaching adulthood.",
    topics: [
      {
        id: "consent-legal-11",
        title: "Consent & Legal Considerations",
        icon: "Scale",
        color: "blue",
        summary: "Understanding specific legal restrictions on relationships involving authority figures.",
        keyPoints: [
          "Teacher and student: Illegal in CT regardless of age – applies to all students in the district",
          "Coach and player: The player must be over 18, unless the coach works for the school (then teacher rules apply)",
          "Boss and employee: Illegal if the employee is under 18",
          "These laws exist because of the inherent power imbalance in these relationships",
          "Even legal relationships can be unhealthy if there's a significant power difference"
        ]
      },
      {
        id: "consent-principles-11",
        title: "Principles of Consent Review",
        icon: "CheckCircle",
        color: "green",
        summary: "Reinforcing the key components that make consent valid.",
        keyPoints: [
          "Honest: Be clear about who you are, your sexual health, and relevant history",
          "Wanted: Must have enthusiastic agreement – no coercion or repeated pressure",
          "Specific: Each act must be discussed and agreed upon",
          "Ongoing: Consent can be withdrawn at any time",
          "Equal: No power imbalances that could affect free choice"
        ]
      },
      {
        id: "age-consent-review",
        title: "Age of Consent Review",
        icon: "Calendar",
        color: "purple",
        summary: "Reviewing Connecticut's age of consent laws and state variations.",
        keyPoints: [
          "Connecticut age of consent: 16 years old",
          "Close-in-age exemption: Someone over 13 can be with someone within 3 years",
          "For age 12 or under: Partner must be within 2 years",
          "It's highly unlikely two people are born exactly 3 years apart – when in doubt, the answer is no",
          "These laws protect kids from adults, which is why exemptions exist for similar-age peers",
          "States vary: NY is 17, Delaware is 18 – laws apply based on where you are"
        ],
        activities: [
          {
            title: "Cross-State Scenario",
            description: "A 16 and 25 year old have a legal relationship in CT. If they go to NYC and engage in sexual behavior, is it legal? No – the 16 year old is below NY's age of consent, and the 25 year old is responsible.",
            icon: "Map"
          }
        ]
      },
      {
        id: "equal-relationships-11",
        title: "Equal Relationships",
        icon: "Users",
        color: "teal",
        summary: "Understanding what makes relationships truly equal and healthy.",
        keyPoints: [
          "Power imbalances are the main reason relationships become unequal",
          "Types of power: age, money, job position, authority, physical size",
          "Adults have power over children: jobs, housing, fully developed brains",
          "The frontal lobe (decision-making) doesn't fully develop until 25",
          "Discuss consent regarding developmental ability – not just legal age",
          "Even legal relationships can be concerning if power is unbalanced"
        ]
      },
      {
        id: "sexual-harassment-11",
        title: "Sexual Harassment",
        icon: "ShieldAlert",
        color: "red",
        summary: "Review of sexual harassment definitions and recognition.",
        keyPoints: [
          "Verbal: inappropriate comments, catcalling, discriminatory language",
          "Physical: any unwanted touch on any part of the body",
          "Does not need to be repeated if it's unwanted touch",
          "The term 'sexual' refers to touching another's body, not necessarily sexual intent",
          "Pattern of behavior that seemed accidental becomes harassment when repeated"
        ]
      },
      {
        id: "sexual-assault-11",
        title: "Sexual Assault",
        icon: "AlertOctagon",
        color: "red",
        summary: "Understanding sexual assault under Connecticut law.",
        keyPoints: [
          "Any unwanted touch to intimate areas (breasts, butt, genitals, inner thighs in CT)",
          "Does not have to be repeated to be covered under law",
          "You can label any part of your body as intimate, though CT law specifies certain areas",
          "Different from harassment in that it involves intimate areas and doesn't require repetition"
        ]
      },
      {
        id: "intoxication-11",
        title: "Intoxication & Incapacitation",
        icon: "AlertTriangle",
        color: "orange",
        summary: "Understanding how substances affect consent.",
        keyPoints: [
          "Important to recognize intoxication signs for everyone's safety",
          "Intoxication alone doesn't remove ability to consent – incapacitation does",
          "Signs of incapacitation: can't undress themselves, stumbling, can't understand consequences",
          "A 'yes' from someone incapacitated is NOT consent",
          "The law protects people from those who would take advantage",
          "Use common sense – when there's any doubt, the answer is no"
        ]
      },
      {
        id: "bystander-5ds-11",
        title: "Being an Empowered Bystander",
        icon: "HandHeart",
        color: "green",
        summary: "Applying the 5 D's framework to real-world scenarios.",
        keyPoints: [
          "Direct: Step in directly if safe",
          "Distract: Create a diversion to break up the situation",
          "Delegate: Get help from others – trusted adults, security, friends",
          "Document: Record only if safe, share only with victim, not social media",
          "Delay: Check in with the affected person afterward",
          "Goal is always to de-escalate, not escalate the situation"
        ]
      }
    ],
    resources: [
      {
        category: "Support Resources",
        links: [
          { title: "RAINN - 24/7 National Sexual Assault Hotline" },
          { title: "Love Is Respect - Teen dating abuse resources" },
          { title: "Connecticut Sexual Assault Crisis Services (CT SACS)" }
        ]
      }
    ],
    faqs: [
      {
        question: "Can sexual violence occur between two people who are equally intoxicated?",
        answer: "If someone is unable to consent because they are incapacitated, then it would be considered sexual violence. If there are two people who are incapacitated, it would be unlikely that they would physically be able to engage in any sexual behavior. However, if two people were equally intoxicated, it becomes a gray area where good judgment must be used."
      }
    ]
  },
  {
    grade: "12th Grade",
    gradeLevel: "High School Year 4",
    intro: "Senior year prepares students for life after high school, whether that's college, the workforce, or both. Topics focus on rape culture, victim blaming, workplace rights, and navigating new environments with increased independence.",
    topics: [
      {
        id: "sexual-harassment-12",
        title: "Sexual Harassment",
        icon: "ShieldAlert",
        color: "red",
        summary: "Final review of sexual harassment before entering adulthood.",
        keyPoints: [
          "Verbal harassment: inappropriate comments, catcalling, discriminatory language",
          "Physical harassment: any unwanted touch on any part of the body",
          "Touch is harassment if unwanted – doesn't need to be repeated",
          "'Sexual' refers to touch of another's body, not necessarily sexual intent",
          "One-time accidents vs. patterns of behavior that constitute harassment"
        ]
      },
      {
        id: "consent-12",
        title: "Consent Framework",
        icon: "CheckCircle",
        color: "green",
        summary: "Comprehensive review of consent principles for adult life.",
        keyPoints: [
          "Equal: No power imbalances (age, money, position, authority)",
          "Honest: Clear about identity, health status, and relevant history",
          "Wanted: Enthusiastic agreement without any coercion",
          "Specific: Each act discussed and agreed upon",
          "Ongoing: Can be withdrawn at any time"
        ]
      },
      {
        id: "equal-relationships-12",
        title: "Equal Relationships & Power",
        icon: "Scale",
        color: "blue",
        summary: "Understanding power dynamics as you enter adult relationships.",
        keyPoints: [
          "Power imbalances make relationships unequal",
          "Adults have power over minors: jobs, money, housing, brain development",
          "The frontal lobe doesn't fully develop until age 25",
          "Illegal relationships: boss/employee under 18, school staff/student, coach/player under 18",
          "In CT, faculty can't have relationships with ANY student in the district",
          "Have open discussions about consent and developmental ability"
        ]
      },
      {
        id: "rape-culture",
        title: "Rape Culture",
        icon: "MessageSquare",
        color: "orange",
        summary: "Understanding how societal attitudes contribute to sexual violence.",
        keyPoints: [
          "Rape culture: an environment where rape is prevalent and normalized due to societal attitudes",
          "Our culture doesn't promote rape, but often normalizes it",
          "College campuses can contribute to views about sexuality and gender norms",
          "New environments with more freedom can lead to inappropriate behavior",
          "Rape culture contributes to: exclusion of male and LGBTQ+ survivors, protecting perpetrators, jokes about sexual violence, victim blaming"
        ]
      },
      {
        id: "victim-blaming",
        title: "Victim Blaming",
        icon: "Heart",
        color: "red",
        summary: "Understanding why victim blaming is harmful and wrong.",
        keyPoints: [
          "Victim blaming questions victims' choices in ways that imply they're responsible",
          "It is NEVER the victim's fault – ever",
          "People respond in ways that feel safest to them – fighting back, shutting down, or freezing",
          "Fear of further harm may prevent fighting back",
          "Tonic immobility: an involuntary 'freeze' response to danger",
          "Support victims by believing them and not questioning their actions"
        ]
      },
      {
        id: "bystander-advanced",
        title: "Being an Empowered Bystander",
        icon: "Users",
        color: "teal",
        summary: "Applying the 5 D's in college and workplace settings.",
        keyPoints: [
          "As you enter work and higher education, bystander skills become even more important",
          "Direct: Confront if safe, especially if you know the people involved",
          "Distract: Change focus without escalating (spill a drink, pretend their ride arrived)",
          "Delegate: Coordinate with friends or authorities to help",
          "Document: Record safely, share only with the victim",
          "Delay: Check in afterward to provide support"
        ],
        activities: [
          {
            title: "College Scenario",
            description: "At a party, you see someone pulling another person toward a bedroom. Apply the 5 D's: Direct if you know them, Distract by 'spilling' a drink, Delegate by getting friends or campus police, Document safely, Delay by checking in the next day.",
            icon: "Building"
          },
          {
            title: "Workplace Scenario",
            description: "A coworker makes a sexual remark about another coworker. Apply the 5 D's: Direct by saying it's unacceptable, Distract by changing the topic, Delegate by having others confront and check on the victim, Document the incident, Delay to offer support later.",
            icon: "Briefcase"
          }
        ]
      },
      {
        id: "title-vii",
        title: "Workplace Rights (Title VII)",
        icon: "Briefcase",
        color: "purple",
        summary: "Understanding your rights against workplace discrimination and harassment.",
        keyPoints: [
          "Title VII provides workplace protections including: safe discrimination-free environment, knowing company harassment policies, reporting to HR/boss",
          "Your right to have complaints taken seriously and investigated",
          "You have the right to do nothing if you choose",
          "You CANNOT be legally fired for: speaking out against harassment, protesting, filing complaints, testifying as a witness",
          "How to report: tell your boss, their supervisor, HR, your union, or file with the EEOC"
        ]
      },
      {
        id: "title-ix-higher-ed",
        title: "Title IX in Higher Education",
        icon: "GraduationCap",
        color: "blue",
        summary: "Understanding expanded Title IX rights at colleges and universities.",
        keyPoints: [
          "Right to know the complaint process (informal mediation or formal hearing)",
          "Right to support services like counseling",
          "Right to have your case treated equally to others",
          "Right to have your case investigated within 60 days",
          "Right to be free from retaliation for reporting",
          "Title IX protects everyone – students and faculty",
          "Covers discrimination based on gender, sexual orientation, and transgender status",
          "Connecticut schools have amnesty: no discipline for drug/alcohol use when reporting sexual violence"
        ]
      },
      {
        id: "clery-act",
        title: "The Clery Act",
        icon: "FileText",
        color: "indigo",
        summary: "Understanding your right to campus safety information.",
        keyPoints: [
          "A federal consumer protection law requiring campus crime transparency",
          "You have the right to know what you're spending money on – including school safety",
          "Named for Jeanne Clery, a student sexually assaulted and murdered at Lehigh University",
          "Before this law, schools didn't have to report crime rates to students",
          "Look up '[School Name] + Clery Act Data' to see three years of campus crime statistics",
          "Consider school size when interpreting data: 10 cases at a 20,000-student school vs. 2,000-student school means different things"
        ],
        activities: [
          {
            title: "Research Activity",
            description: "With your child, look up Clery Act data for colleges they're considering. What does the data tell you about campus climate? Remember that not all incidents are reported, and school size affects interpretation.",
            icon: "Search"
          }
        ]
      }
    ],
    resources: [
      {
        category: "Higher Education Resources",
        links: [
          { title: "Office of Civil Rights - File Title IX complaints" },
          { title: "EEOC - Employment discrimination reporting" },
          { title: "Department of Ed Pending Cases - Schools under investigation" }
        ]
      },
      {
        category: "Support Resources",
        links: [
          { title: "RAINN - 24/7 National Sexual Assault Hotline" },
          { title: "Know Your IX - Student rights organization" },
          { title: "End Rape on Campus - Support and advocacy" }
        ]
      }
    ],
    faqs: [
      {
        question: "What is the Clery Act and why does it matter?",
        answer: "The Clery Act is a federal consumer protection law that requires colleges and universities to be transparent about campus crime statistics. It was created after Jeanne Clery was sexually assaulted and murdered at Lehigh University – at a time when schools weren't required to report crime rates. You can look up any school's Clery Act data to make informed decisions about your safety."
      }
    ]
  }
];
