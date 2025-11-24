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

export const middleSchoolData: GradeContent[] = [
  {
    grade: "6th Grade",
    gradeLevel: "Middle School Year 1",
    intro: "Middle school is the essential time within a child's development where they build the foundation for their interest and interpersonal skills. This is a crucial period for your child's social and emotional development, where they strengthen their abilities to have positive social interactions, creating a foundation for success.",
    topics: [
      {
        id: "healthy-boundaries",
        title: "Healthy Boundaries",
        icon: "Shield",
        color: "blue",
        summary: "Helping children understand healthy boundaries is one of the most important steps in raising confident, respectful, and emotionally aware individuals.",
        keyPoints: [
          "Boundaries teach kids how to protect their feelings, respect others, and build trusting relationships",
          "Boundaries give children a sense of safety and self-respect",
          "When children know their limits, they are less likely to feel overwhelmed or taken advantage of",
          "Healthy boundaries strengthen relationships by building trust, honesty, and mutual respect",
          "Help kids understand rules as reciprocal - people are in charge of their own bodies",
          "Listening when people are talking is how we stay safe and make sure other people are safe"
        ],
        activities: [
          {
            title: "Create a 'Get a Grown-Up' List",
            description: "Make a list of scenarios when to get an adult: hitting/pushing, someone not taking no for an answer, feeling unsafe or uncomfortable in a situation",
            icon: "ListChecks"
          },
          {
            title: "Practice What You Preach",
            description: "Model empathy and self-awareness. When it comes to learning anything, kids look to their parents for cues on how to behave",
            icon: "Users"
          },
          {
            title: "Use Media Examples",
            description: "Draw on kids' favorite media, pointing out examples of good or bad behavior. Ask how characters might feel in different situations",
            icon: "Tv"
          }
        ],
        conversationStarters: [
          {
            scenario: "Teaching about reciprocal boundaries",
            dialogues: [
              { speaker: "Parent", text: "Sometimes things that seem fun to you are not fun for the other person. Like if you want to jump on your friend's back because that sounds fun, but if you don't ask first and make sure they're ready, someone could end up getting hurt." },
              { speaker: "Child", text: "So I should always ask before doing something to someone else?" },
              { speaker: "Parent", text: "Exactly! And if someone doesn't ask you first, you have the right to say no or tell them to stop." }
            ]
          },
          {
            scenario: "Respecting a child's boundaries",
            dialogues: [
              { speaker: "Child", text: "I don't like being tickled." },
              { speaker: "Parent", text: "I hear you and I won't do it again. Thank you for telling me what makes you uncomfortable. Your feelings are important." }
            ]
          }
        ]
      },
      {
        id: "consent-body-safety",
        title: "Consent & Body Safety",
        icon: "Hand",
        color: "green",
        summary: "Children need to be taught that their bodies are their own, and that they have the right to say 'NO' when it comes to who touches them and whom they touch.",
        keyPoints: [
          "Children have the right to feel safe and be safe",
          "Let children know they're the boss of their bodies",
          "Never force hugs, kisses, or caresses - let them choose how to greet others (wave, high-five, etc.)",
          "Ask for permission before touching children and encourage them to do the same",
          "Help children identify 'safe' adults - those who listen and don't make them feel uncomfortable",
          "Talk about consent outside of the context of sex - borrowing items, posting photos, making plans",
          "Use correct anatomical terms - avoiding alternative words sends the message that body parts are shameful"
        ],
        conversationStarters: [
          {
            scenario: "Teaching body autonomy",
            dialogues: [
              { speaker: "Parent", text: "You don't have to hug Grandma if you don't want to. You can give her a high-five or a wave instead." },
              { speaker: "Child", text: "But won't she be sad?" },
              { speaker: "Parent", text: "Grandma loves you and will understand that you get to choose how to say hello. Your body belongs to you." }
            ]
          },
          {
            scenario: "Discussing consent in everyday life",
            dialogues: [
              { speaker: "Parent", text: "Before you post that photo of your friend, did you ask if it's okay?" },
              { speaker: "Child", text: "No, but they're in my photo..." },
              { speaker: "Parent", text: "It's respectful to ask for consent before sharing photos of others. They might not want that picture online, and that's their choice to make." }
            ]
          }
        ]
      },
      {
        id: "digital-safety",
        title: "Digital Safety",
        icon: "Smartphone",
        color: "purple",
        summary: "Smartphones are essentially little computers, so it's important to understand the risks and implement safeguards to help your child use them safely.",
        keyPoints: [
          "Set clear ground rules: types of sites to visit, apps to download, 'blackout' periods requiring disconnection",
          "Examples: distance learning before social media, no devices during meals, digital curfew after certain hours",
          "Research before you buy - understand device capabilities and restrictions",
          "Go beyond safeguards - time, attention, and active conversation are the best tools",
          "Know the platforms your children use - ask them to show you how they use them",
          "If dealing with cyberbullies or potential abuse, report to website, cell phone provider, law enforcement, or CyberTipline.org"
        ],
        activities: [
          {
            title: "Common Tricks Used by Online Offenders",
            description: "Teach kids to spot: engaging in sexual conversation, directly asking for explicit images, developing rapport through compliments, pretending to be younger, offering incentives",
            icon: "AlertTriangle"
          },
          {
            title: "Spot the Red Flags",
            description: "Watch for: spending increasing time online, getting upset when not allowed device use, taking steps to conceal online activity, receiving gifts from unknown people",
            icon: "Eye"
          },
          {
            title: "Gaming Safety Guidelines",
            description: "Keep consoles in easy-to-supervise locations, never give out personal information, understand cross-play features, be aware of where your child accesses games",
            icon: "Gamepad2"
          }
        ],
        conversationStarters: [
          {
            scenario: "Starting a discussion about gaming",
            dialogues: [
              { speaker: "Parent", text: "Would you show me how some of your favorite games are played?" },
              { speaker: "Child", text: "Sure! This one is really fun..." },
              { speaker: "Parent", text: "How do you respond if someone bothers you while you are gaming?" }
            ]
          },
          {
            scenario: "Discussing online safety",
            dialogues: [
              { speaker: "Parent", text: "Do you feel safe while you are gaming online? Why or why not?" },
              { speaker: "Child", text: "Mostly, but sometimes people say mean things..." },
              { speaker: "Parent", text: "What do you do when that happens? Let's talk about ways you can protect yourself and when to tell an adult." }
            ]
          }
        ]
      },
      {
        id: "clean-healthy-rule",
        title: "Clean & Healthy Rule",
        icon: "Heart",
        color: "red",
        summary: "Understanding when it's appropriate for others to see or touch private body parts.",
        keyPoints: [
          "The only people allowed to touch or look at a child's private areas are guardians/caretakers or healthcare providers",
          "They are only allowed to do so when it is to keep the child clean and/or healthy",
          "As your child grows older, only healthcare providers should see their private areas for medical reasons",
          "No adults or older children should be showing a child their private areas or asking a child to touch their private areas",
          "Use correct anatomical terms for body parts - this helps children communicate clearly if something inappropriate happens"
        ]
      },
      {
        id: "bystander-intervention",
        title: "Bystander Intervention",
        icon: "Users",
        color: "orange",
        summary: "Teaching your child to be an upstander can make them feel empowered and confident when facing tough situations.",
        keyPoints: [
          "An upstander is someone who takes action to prevent or reduce bullying",
          "A bystander is someone who sees bullying but chooses not to step in",
          "By doing nothing, you send a message to the bully that their behavior is acceptable",
          "It takes courage to be an upstander - it may start with becoming more aware of the bullying",
          "There is strength in numbers - every school and community has more caring kids than bullies"
        ],
        activities: [
          {
            title: "What You Can Do as a Bystander",
            description: "Don't laugh, don't encourage, don't participate, stay at safe distance and help target get away, reach out in friendship, support victim privately, tell an adult",
            icon: "HandHeart"
          },
          {
            title: "Becoming an Upstander",
            description: "Take action by: getting others to stand up with you, helping the victim, redirecting the bully away, telling an adult who can help, telling the bully to stop",
            icon: "ShieldCheck"
          },
          {
            title: "Small Interventions, Big Results",
            description: "Two words - 'That's bullying' - can open others' eyes to recognize the problem. Small actions can have big impacts.",
            icon: "MessageCircle"
          }
        ]
      },
      {
        id: "private-information",
        title: "Private Information",
        icon: "Lock",
        color: "indigo",
        summary: "Understanding the difference between secrets and surprises, and what information should stay private.",
        keyPoints: [
          "Secrets: not meant to be told, someone could get hurt if kept, it's unfair for adults to ask kids to keep secrets",
          "Surprises: only kept for a short time, everyone is happy when told",
          "No one should ask a child to keep a secret from their parents, guardians, or teachers",
          "Private information includes: full name, address, phone numbers, email, birthdate, school name, images, usernames/passwords, GPS location, family member names, health information",
          "Personal information also includes pictures or videos that reveal details like school uniforms, street signs, or house numbers"
        ],
        conversationStarters: [
          {
            scenario: "Discussing online privacy",
            dialogues: [
              { speaker: "Parent", text: "Why is it important to keep personal information private online?" },
              { speaker: "Child", text: "So strangers don't know things about me?" },
              { speaker: "Parent", text: "Exactly! Even small details like your school name or city can help someone figure out where you are. What should you do if you accidentally share personal information online?" }
            ]
          },
          {
            scenario: "Understanding secrets vs. surprises",
            dialogues: [
              { speaker: "Parent", text: "Let's talk about the difference between a secret and a surprise. A surprise is something fun that we'll tell soon, like a birthday party. A secret is something we're told never to tell." },
              { speaker: "Child", text: "So surprises are okay but secrets aren't?" },
              { speaker: "Parent", text: "If an adult asks you to keep a secret from me or your teachers, that's not okay, and you should tell me right away." }
            ]
          }
        ]
      },
      {
        id: "reporting",
        title: "Reporting & Trusted Adults",
        icon: "AlertCircle",
        color: "teal",
        summary: "Teaching students that reporting someone who is harming themselves or others is not snitching - it's reporting.",
        keyPoints: [
          "Snitching/Tattling: reporting to an adult in bad faith, finding an issue within a safe situation",
          "Reporting: telling a trusted adult about a dangerous situation, looking out for safety, speaking up when something is wrong or unsafe",
          "A Trusted Adult is someone who: is reliable, caring, non-judgmental; will help and take action; will remain calm; respects boundaries",
          "Trusted adults can be teachers, administrators, counselors, school staff, community members, parents, or relatives",
          "Encourage your child to make a list of trusted adults collaboratively"
        ],
        activities: [
          {
            title: "Create a Trusted Adult List",
            description: "Work with your child to identify multiple trusted adults they can turn to. Make sure the list includes at least one school staff member.",
            icon: "Users"
          },
          {
            title: "Model Being a Trusted Adult",
            description: "Listen without judgment, assist and take action, remain calm when child reaches out, respect their boundaries, help identify other trusted adults",
            icon: "Heart"
          },
          {
            title: "Daily Connection Time",
            description: "Spend time with your child every day. Any time is better than no time. Make it dedicated to connection, not just about safety topics.",
            icon: "Calendar"
          }
        ]
      }
    ],
    resources: [
      {
        category: "Digital Safety Resources",
        links: [
          { title: "NCMEC - Parents' Guide to Smartphone Safety" },
          { title: "NCMEC - Gaming Safely Guide" },
          { title: "NCMEC - AI and Child Safety Online: Guide for Parents" },
          { title: "CyberTipline.org - Report online exploitation" }
        ]
      },
      {
        category: "Support Organizations",
        links: [
          { title: "CT Support Group - Teen support groups and online community" },
          { title: "Boys & Girls Club of Stamford - Gary Wendt Teen Center" },
          { title: "Child Guidance Center of Southern CT - Resource hub (EN/ES)" }
        ]
      }
    ]
  },
  {
    grade: "7th Grade",
    gradeLevel: "Middle School Year 2",
    intro: "As students enter 7th grade, they face more complex social situations and increased online interactions. This year focuses on understanding harassment, assault, and how to navigate challenging situations both online and offline.",
    topics: [
      {
        id: "sexual-harassment",
        title: "Sexual Harassment Prevention",
        icon: "ShieldAlert",
        color: "red",
        summary: "Sexual harassment is unwanted or unwelcome sexual remarks, actions, or physical advances toward another person.",
        keyPoints: [
          "Sexual harassment can be sexual, sex-based, or gender-based, regardless of the harasser's orientation or interests",
          "Connecticut does not have specific criminal statutes for sexual harassment",
          "Physical sexual harassment: any unwanted touching of hair, body, or clothing (e.g., unwanted shoulder massages, hugging without permission)",
          "Verbal sexual harassment: unwanted and repeated words, remarks, or jokes about a person's body, gender, or relationships",
          "Examples include catcalling, sexually explicit jokes, and repeatedly asking someone out",
          "Sexual harassment can also be teasing, intimidating, or offensive comments based on stereotypes or bullying based on sex, gender identity, or sexual orientation"
        ]
      },
      {
        id: "sexual-assault",
        title: "Sexual Assault",
        icon: "AlertOctagon",
        color: "red",
        summary: "In Connecticut, all criminal acts of sexual violence are defined as sexual assault.",
        keyPoints: [
          "Sexual assault is sexual contact with intimate parts of the body (chest, buttocks, genitals, inner thigh) without consent",
          "It includes any contact through use of force, coercion, fraud, or if the person is mentally or physically incapacitated",
          "Sexual intercourse without consent, through force/coercion/fraud, or with an incapacitated person is sexual assault",
          "This includes penetration of the anus, vagina, or mouth with a sexual organ, body part, or object",
          "The statute of limitations for sexual assault depends on the particular crime charged, the victim's age, and whether there is DNA evidence"
        ]
      },
      {
        id: "5ds-bystander",
        title: "The 5Ds of Bystander Intervention",
        icon: "Users",
        color: "blue",
        summary: "Five different methods to support someone who's being harassed: Distract, Delegate, Document, Delay, and Direct.",
        keyPoints: [
          "Distract: Create a distraction to interrupt the behavior (start a conversation, ask a random question, shift attention)",
          "Delegate: Get help from an adult, teacher, counselor, or another student in authority",
          "Document: Record what happened if safe - write down details (who, when, where, what). Only record video/photos if safe and with permission",
          "Delay: Check in afterward - 'Are you okay?' or 'I saw what happened' shows support and care",
          "Direct: When safe, speak up clearly and calmly - 'That's not okay' or 'Leave them alone'",
          "IMPORTANT: Never share documentation without the person's consent - being harassed is already disempowering"
        ]
      },
      {
        id: "sexting",
        title: "Sexting",
        icon: "MessageSquare",
        color: "orange",
        summary: "Sexting is the sharing and receiving of intimate messages and nude or partially nude images via cell phone.",
        keyPoints: [
          "Sexts may be sent through regular text messages, apps like Snapchat and WhatsApp, or through online games",
          "Children may sext to establish intimacy, impress a crush, be funny, or feel pressured by partners",
          "Kids may not foresee a situation where the person they send a sext to shares it with others",
          "Consequences can be academically, socially, and emotionally devastating",
          "Kids who sext may be at risk for sextortion, getting in trouble at school, being bullied, or legal trouble"
        ],
        activities: [
          {
            title: "How to Report NCII (Non-Consensual Intimate Images)",
            description: "Report to the website/app, CyberTipline.org (can report anonymously), the police, or a trusted adult at school",
            icon: "Flag"
          },
          {
            title: "Take It Down Service",
            description: "Free service from NCMEC to remove or stop online sharing of nude/partially nude images of people under 18. You remain anonymous and don't send images to anyone.",
            icon: "ShieldCheck"
          }
        ]
      },
      {
        id: "sextortion",
        title: "Sextortion",
        icon: "ShieldX",
        color: "red",
        summary: "Sextortion often starts when young people believe they are communicating with someone their own age who is interested in a relationship.",
        keyPoints: [
          "Can start on any site, app, messaging platform, or game where people meet and communicate",
          "Perpetrators aim to create feelings of trust to get targets to send intimate images or videos",
          "After receiving content, they threaten to publish it or use violence to get more money, photos, videos, or behaviors",
          "Shame, fear, and confusion often prevent young people from asking for help",
          "No matter what has been sent, the child is still a victim of a crime - none of this is their fault",
          "Best way out: refrain from sending money, save all messages with the sextortionist, speak to a trusted adult",
          "Police can support you, and NCMEC's Take It Down program can help remove intimate images"
        ]
      },
      {
        id: "csam",
        title: "Child Sexual Abuse Material (CSAM)",
        icon: "ShieldAlert",
        color: "red",
        summary: "CSAM is any visual depiction of sexually explicit conduct involving a minor (person less than 18 years old).",
        keyPoints: [
          "These are not just pictures or videos - they are records of real children being sexually abused",
          "Once uploaded, it can be shared endlessly with the click of a button",
          "Previously called 'child pornography' - important to use new language because children cannot consent to creating pornography",
          "Any images created or sent by minors are considered CSAM, even if they consented",
          "CSAM includes: sexual acts involving a minor, images of child's genitals/private areas, live-streamed abuse, AI-generated content, any content that sexualizes or exploits a child",
          "Goal is not to get minors in trouble, but to teach about risks and lessen chances of engaging in this behavior"
        ],
        conversationStarters: [
          {
            scenario: "Teaching body boundaries",
            dialogues: [
              { speaker: "Parent", text: "Let's talk about different types of touches. Safe touches keep you safe and make you feel loved, like hugs or high-fives. Unsafe touches hurt your body or feelings. And there are unwanted touches - these might be safe, but you don't want them at that moment." },
              { speaker: "Child", text: "So I can say no even to safe touches?" },
              { speaker: "Parent", text: "Absolutely! You have the right to say no to any touch that makes you uncomfortable, even from family members. Let's practice saying no in a strong but polite voice." }
            ]
          }
        ]
      },
      {
        id: "title-ix",
        title: "Title IX",
        icon: "Scale",
        color: "purple",
        summary: "Title IX aims to protect students from sex and gender-based discrimination in education programs or activities that receive federal funding.",
        keyPoints: [
          "Student rights from Title IX: get an equal education, be free from discrimination, feel safe at school, report sexual harassment",
          "Schools must take action to prevent sexual harassment",
          "Once a school is made aware of sexual violence, they are legally obligated to respond",
          "Once the Title IX office or designated employee is aware, they must respond - no excuse",
          "Students can file complaints with the Office of Civil Rights (OCR) and have the right to appeal determinations",
          "Appeals must be filed within 60 calendar days and cannot exceed 10 pages (double-spaced)",
          "Can file complaints through state (Commission on Human Rights and Opportunities) or federal agencies (Office for Civil Rights - US Department of Education)"
        ]
      },
      {
        id: "reporting-7th",
        title: "Reporting & Trusted Adults",
        icon: "AlertCircle",
        color: "teal",
        summary: "Understanding the difference between snitching and reporting, and identifying trusted adults.",
        keyPoints: [
          "Snitching/Tattling: reporting to an adult in bad faith, finding an issue within a safe situation",
          "Reporting: telling a trusted adult about a dangerous situation, looking out for safety, speaking up when something is wrong",
          "A Trusted Adult: reliable, caring, non-judgmental; will help and take action; remains calm; respects boundaries",
          "Encourage collaborative creation of a trusted adult list - make sure it includes at least one school staff member",
          "Being a trusted adult requires practice and effort - it's okay to have strong emotions but remain calm when a child discloses something"
        ]
      }
    ],
    resources: [
      {
        category: "Reporting & Support Services",
        links: [
          { title: "CyberTipline.org - Report online exploitation" },
          { title: "Take It Down - NCMEC service to remove intimate images" },
          { title: "Commission on Human Rights and Opportunities (CHRO) - State civil rights agency" },
          { title: "Office for Civil Rights - US Department of Education (Federal)" }
        ]
      },
      {
        category: "Educational Resources",
        links: [
          { title: "National Center for Missing & Exploited Children - Netsmartz Middle School Presentation" },
          { title: "NCMEC - You Sent a Sext. Now What?" },
          { title: "NCMEC - Who is a Trusted Adult?" },
          { title: "Connecticut Law - The Rowan Center" }
        ]
      },
      {
        category: "Additional Support Organizations",
        links: [
          { title: "National Sexual Violence Resource Center (NSVRC)" },
          { title: "Thorn for Parents - Interactive scenarios and guides" },
          { title: "Love146 - Parent and teen capacity building" }
        ]
      }
    ]
  },
  {
    grade: "8th Grade",
    gradeLevel: "Middle School Year 3",
    intro: "In 8th grade, students are preparing for high school and facing more mature topics. This year includes review of previous content plus understanding consent laws and age-appropriate relationships.",
    topics: [
      {
        id: "5ds-review",
        title: "The 5Ds of Bystander Intervention (Review)",
        icon: "Users",
        color: "blue",
        summary: "Review and practice the five methods to support someone who's being harassed.",
        keyPoints: [
          "Distract: Create a distraction to interrupt the behavior",
          "Delegate: Get help from someone in authority",
          "Document: If safe, record details or evidence (but never share without consent)",
          "Delay: Check in afterward to show support",
          "Direct: When safe, speak up clearly and calmly against the behavior",
          "Remember: Being harassed is already disempowering - don't make it worse by publicizing footage without consent"
        ]
      },
      {
        id: "sexting-review",
        title: "Sexting (Review)",
        icon: "MessageSquare",
        color: "orange",
        summary: "Review of sexting risks and how to report non-consensual intimate images.",
        keyPoints: [
          "Sexting can lead to sextortion, school trouble, bullying, or legal issues",
          "Report NCII to: website/app, CyberTipline.org, police, or trusted adult",
          "Use Take It Down service to remove images without sharing them",
          "Never share intimate images without explicit permission from the person in them"
        ]
      },
      {
        id: "sextortion-review",
        title: "Sextortion (Review)",
        icon: "ShieldX",
        color: "red",
        summary: "Understanding and preventing sextortion attempts.",
        keyPoints: [
          "Sextortion starts when perpetrators gain trust and obtain intimate images",
          "They then threaten to publish content unless victim sends more money, photos, or videos",
          "It is NEVER the victim's fault, regardless of what was sent",
          "Best response: don't send money, save all messages, tell a trusted adult immediately",
          "Police and NCMEC's Take It Down program can help"
        ]
      },
      {
        id: "csam-review",
        title: "Child Sexual Abuse Material (Review)",
        icon: "ShieldAlert",
        color: "red",
        summary: "Understanding CSAM and how to stay safe online.",
        keyPoints: [
          "CSAM is any visual depiction of sexually explicit conduct involving a minor",
          "Once uploaded, it spreads endlessly - this is real abuse of real children",
          "Any images created or sent by minors count as CSAM, even with consent",
          "Talk with kids about: body boundaries, consent including online boundaries, what to do if someone makes them uncomfortable",
          "Monitor tech use - not just the screen, but behavior changes",
          "Watch for warning signs: withdrawal, anxiety, inappropriate sexual knowledge, avoidance behaviors, grade drops"
        ]
      }
    ],
    faqs: [
      {
        question: "Why is there an age of consent law?",
        answer: "To protect kids from adults. Age of consent laws exist because adults have more power, experience, and brain development than children and teenagers."
      },
      {
        question: "Why is there a Romeo and Juliet law?",
        answer: "The goal of the age of consent law is to protect kids from adults, not to punish kids. While it may not necessarily be developmentally appropriate, kids shouldn't be punished for engaging in sexual behavior with someone around their same age. The Romeo and Juliet law recognizes this and provides exceptions for close-in-age relationships."
      },
      {
        question: "Will I get in trouble if I engage in sexual behavior with someone above the age of consent and I'm below it?",
        answer: "No. It is always the older person's responsibility, because they have more power. This relates to differences in brain development, life experience, and the power dynamics that exist between adults and minors."
      },
      {
        question: "Shouldn't it be illegal for anyone under 18 to have sex?",
        answer: "The laws surrounding what's legal at various ages differ. For example, you have to be 18 to vote or 21 to purchase alcohol. Different ages are set for different rights and responsibilities. The age of consent (16 in Connecticut) is set based on research about adolescent development and the need to protect young people while recognizing that teenagers make their own decisions about relationships with peers."
      },
      {
        question: "Why would an adult want to have sex with someone who is 16, even if it is legal?",
        answer: "Any adult who seeks out romantic or sexual relationships with teenagers is exhibiting concerning behavior. Even if something is technically legal, it doesn't make it appropriate. Healthy adults form relationships with other adults, not with teenagers. If an adult is pursuing a teenager, it raises serious questions about their judgment and motivations."
      }
    ],
    resources: [
      {
        category: "Legal and Reporting Resources",
        links: [
          { title: "Connecticut Law - The Rowan Center" },
          { title: "CyberTipline.org" },
          { title: "Take It Down - NCMEC" }
        ]
      },
      {
        category: "Support Services",
        links: [
          { title: "National Center for Missing & Exploited Children" },
          { title: "National Sexual Violence Resource Center" },
          { title: "CT Support Group - Teen support groups" }
        ]
      }
    ]
  }
];
