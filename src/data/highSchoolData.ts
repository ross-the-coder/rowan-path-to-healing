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
  fullContent: string[];
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
        fullContent: [
          "Sexual harassment can be verbal, which may include inappropriate comments, catcalling, or other inappropriate language used either in a sexual manner or in a way that discriminates against a person's gender.",
          "Not only can sexual harassment be verbal, but it can also be physical. It is any touch, on any part of the body.",
          "Touch is considered physical sexual harassment as long as it is unwanted – it does not need to be repeated.",
          "Physical sexual harassment isn't always sexual in nature. The word \"sexual\" is used to reference the touch of somebody else's body.",
          "It can sometimes be tricky to tell whether or not something is sexual harassment. A good way to explain it is through this example:",
          "Example 1: One day at school, someone bumps into you in the hallway. They apologize, and you keep going on with your day. This would NOT be considered sexual harassment. Though the person touched someone when it wasn't wanted, it was an accident and not repeated again.",
          "Example 2: One day at school, someone bumps into you in the hallway. They apologize, and you keep going on with your day. The next day, though, it happens again. It keeps happening every day for an entire week. This WOULD be considered sexual harassment. Though it seems like the first time was unintentional, the person continued to touch someone else when it was unwanted and it continued to happen. When that is the case, it is not an accident."
        ],
        keyPoints: [
          "Sexual harassment can be verbal, including inappropriate comments, catcalling, or discriminatory language",
          "Physical sexual harassment is any unwanted touch on any part of the body",
          "Touch is considered physical sexual harassment as long as it is unwanted – it does not need to be repeated",
          "Physical sexual harassment isn't always sexual in nature – 'sexual' refers to touch of another's body",
          "Accidental, one-time contact is not harassment, but repeated unwanted contact is"
        ],
        conversationStarters: [
          {
            scenario: "Explaining the difference between accidents and harassment",
            dialogues: [
              { speaker: "Parent", text: "If someone bumps into you once in the hallway and apologizes, that's probably an accident. But what if it happens every day for a week?" },
              { speaker: "Child", text: "That seems like they're doing it on purpose." },
              { speaker: "Parent", text: "Exactly. When unwanted contact becomes a pattern, it's harassment, even if each individual incident seems minor. The key is whether it's repeated and unwanted." }
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
        fullContent: [
          "Sexual assault is any unwanted touch to an intimate area of the body.",
          "State law defines what are considered intimate parts of the body in which unwanted touching would be considered sexual assault. In Connecticut, the parts of the body included are the breasts, butt, genitals, and inner thighs.",
          "Your child can label any parts of their body as intimate; however, Connecticut only covers these parts under state law.",
          "Sexual assault covers behaviors that are unwanted – they do not have to be repeated in order to be covered under law.",
          "This is different from sexual harassment, which typically involves repeated behavior on non-intimate areas of the body."
        ],
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
        fullContent: [
          "Sexting is when someone sends intimate content through text message, social media direct message, or other messaging system or app.",
          "It can include written content, images, or videos – and even emojis. For example, the eggplant emoji is often used when sexting in reference to male genitalia.",
          "Talking to your children about sexting is incredibly important, as anyone who is under 18 that takes or sends intimate photos of themselves or others is engaging in illegal behavior.",
          "Child Sexual Abuse Material (or CSAM) is any visual depiction of sexual conduct involving a minor, which is a person less than 18 years old.",
          "In the past, it has been called child pornography – it's important to use the new language because children cannot consent to creating pornography.",
          "Any images created or sent by minors are considered CSAM, even if they agreed to taking or sending the photo. Just because they might have agreed does not mean they consented – again, anyone below the age of 18 cannot consent to taking or sending intimate photos of their bodies.",
          "Our goal is not to get them into trouble for CSAM-related charges. Our goal is to teach minors about the risks to lessen their chances of engaging in this behavior."
        ],
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
            description: "The National Center for Missing and Exploited Children (NCMEC) has a program called Take It Down that can help remove intimate images of minors from the internet. It is done safely with an uploaded photo that is then tagged to locate other copies of the photo on the internet.",
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
        fullContent: [
          "Sextortion often starts when young people believe they are communicating with someone their own age who is interested in a relationship or with someone who is offering something of value.",
          "The person on the other end of the line – whether that's on social media, text, or even video games – could be an acquaintance, friend, or stranger.",
          "This person aims to create feelings of trust with their targets in order to get them to send intimate images or videos.",
          "After the perpetrators have received one or more videos or pictures from their target, they threaten to publish or send that content – or even threaten violence – to get the victim to send more money, photos, videos, or engage in another behavior.",
          "The shame, fear, and confusion young people feel when they are caught in this cycle often prevents them from asking for help or reporting the abuse.",
          "No matter if your child has sent any images, videos, or even money, they are still a victim of a crime and none of this is their fault.",
          "It's important to share with your child that the best way to get out of this sort of situation is to refrain from sending money, save all messages with the sextortionist, and speak to a trusted adult.",
          "The police can support you when a case of sextortion occurs."
        ],
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
              { speaker: "Parent", text: "The most important thing is to tell me or another trusted adult right away. Don't send anything else. Save the messages. The police can help, and it's never your fault – you're a victim of a crime." }
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
        fullContent: [
          "Title IX aims to protect students from sex and gender-based discrimination in education programs or activities that receive federal funding.",
          "The rights students receive from Title IX are:",
          "• Get an equal education",
          "• Be free from discrimination",
          "• Feel safe at school",
          "• Report sexual harassment",
          "• Have action taken by your school to prevent sexual harassment",
          "Your child might have heard of Title IX before because of its original purpose – to aim for equality within scholastic sports programs.",
          "One example to use to explain Title IX might be: The softball team at a high school plays on a field equipped with stadium seating and powerful lights. The team goes over right after school to practice, and can be on the field after it gets dark because of the lighting. The baseball team at the same high school plays on a field with no amenities. The team has to leave school early in order to get in a full practice before the field gets dark.",
          "This situation is an example of a Title IX violation. The baseball team has to miss school in order to get in a full practice, which the softball team does not have to do. The baseball team does not have access to the same resources, like the powerful lights, that the softball team has.",
          "To remedy this situation, the school could either put lights on the baseball field as well, or create a system in which each team plays on the baseball field one day and the softball field the next to make their access to school and sports the same."
        ],
        keyPoints: [
          "Title IX protects students from sex and gender-based discrimination in education programs receiving federal funding",
          "Your rights include: getting an equal education, being free from discrimination, feeling safe at school",
          "You have the right to report sexual harassment and have your school take action to prevent it",
          "Title IX originally aimed for equality in scholastic sports programs",
          "If one sports team gets better facilities that affect academics, that may be a Title IX violation"
        ],
        activities: [
          {
            title: "Title IX Sports Example Discussion",
            description: "Discuss this scenario: If a softball team has stadium lights so they can practice after school, but the baseball team has to leave early for practice, this unequal access to education is a Title IX violation. What solutions could fix this?",
            icon: "Activity"
          }
        ]
      },
      {
        id: "bystander-5ds-9",
        title: "Being an Empowered Bystander: The 5 D's",
        icon: "Users",
        color: "green",
        summary: "Learning the 5 D's framework for safely intervening when you witness harmful situations.",
        fullContent: [
          "Your child might have heard the words 'upstander' or 'bystander' before.",
          "The framework we use is called the 5 D's. It was developed and tested by college students to introduce new ways people can be effective bystanders without directly confronting a situation.",
          "This is incredibly important, as not everybody feels comfortable stepping directly into a situation and getting involved. This framework provides the opportunity for everyone to be a bystander.",
          "Example Scenario: You are in the cafeteria at school and start to hear shouting from another table between two students. When you look over to see what is happening, the two students are standing up and continuing to yell at each other. The students then start getting into a physical fight.",
          "DIRECT: Intervene directly if it's safe to do so. Step into the situation and tell the person to stop.",
          "DISTRACT: Create a diversion to de-escalate the situation. Your child might make a loud noise to get the attention off of the fight. For example, they could drop a metal water bottle. However, it's important to make sure the distraction doesn't escalate the situation – for example, starting a food fight.",
          "DELEGATE: Seek help from a third party, like a trusted adult. Your child might go to a security officer, teacher, principal, or another adult who is present.",
          "DOCUMENT: Take photos or videos, only if it is safe to do so. Check in with policies where you are, like school. Always share the video or image with the victim only and don't post on social media.",
          "DELAY: Check in with the person being harassed afterwards. Wait until later that day and have a conversation to make sure they are okay.",
          "It's important to remind your child that the goal of being a bystander is to de-escalate a situation using one of these techniques. We don't want to escalate a situation which may include, for example, a physical altercation."
        ],
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
        ],
        activities: [
          {
            title: "5 D's Practice Scenarios",
            description: "Walk through the cafeteria fight scenario and discuss each D: What would Direct look like? What distraction could you create? Who would you delegate to? When is it safe to document? How would you delay and check in later?",
            icon: "MessageCircle"
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
        fullContent: [
          "You or your child might have heard of different acronyms to remember the parts of consent. This toolkit is an updated way to measure consent.",
          "EQUAL: There shouldn't be any power imbalances between partners in a sexual relationship. This might include, for example, someone's age, the amount of money they have, or what job they have. It can also include relationships such as between boss and employee, teacher and student, or coach and player. There are specific laws about this, as well:",
          "Between a boss and employee: The younger person must be over the age of 18. However, it is important to discuss the power dynamics at play here.",
          "Between a teacher and student: In the state of Connecticut, it is illegal for any teacher and their student to have a sexual relationship, regardless of age. The law applies not only to students in the school in which the teacher works, but also the rest of the students in the district.",
          "Coach and player: The younger person must be over the age of 18. However, it is important to discuss the power dynamics at play here. In addition, if the coach works for the school, the same rules regarding teacher and student apply instead of the age of 18 rule.",
          "HONEST: People in a sexual relationship need to be clear and upfront about who they are, their sexual health, and any pertinent sexual history. This might look like a conversation between partners before engaging in any sexual behavior.",
          "WANTED: Each sexual encounter must be met with an enthusiastic agreement from all parties involved. No coercion must be used in order to get someone to participate in sexual acts. For example, if someone continued to pressure someone else until they said yes, that would be considered coercion.",
          "SPECIFIC: Each sexual act is discussed and agreed upon by both partners. This would also be part of a conversation between partners before engaging in any sexual behavior.",
          "ONGOING: Consent can be withdrawn at any time. This can be for one specific sexual act or the encounter altogether."
        ],
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
        fullContent: [
          "The age of consent in Connecticut is 16.",
          "There is, however, a close in age exemption law in Connecticut. Also called Romeo and Juliet laws, these statutes state that someone over 13 can engage in sexual behavior with someone else as long as the age difference is less than three years.",
          "It is highly unlikely that someone is born on exactly the same date with a three year difference – so, if it's questionable, the answer is probably no.",
          "While it isn't developmentally appropriate for people so young to be engaging in sexual behavior, the close in age exemption law allows for someone 12 or under to engage in sexual behavior with someone else as long as the age difference is less than two years.",
          "The age of consent law is not to punish kids for doing something wrong – it's to protect kids from adults. That's why the close in age exemption law exists. Kids are different from adults – whether that's because their brains have not developed as much, or because they have less power than an adult.",
          "The age of consent law only covers sexual relationships. While it does not cover romantic relationships, it's important to discuss with your child that these kinds of relationships are still not okay.",
          "One of the most important things to share with your child is that it is never their fault if they are the younger person in an illegal relationship stemming from the age of consent. It is always the older person's responsibility to ensure the relationship is legal.",
          "Not all states have the same age of consent as Connecticut – for example, the state of New York's age of consent is 17, and Delaware is 18."
        ],
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
            title: "Age of Consent Scenarios Activity",
            description: "Discuss which relationships are legal in CT: 16 & 35 (Legal - 16 is above age of consent, but discuss power dynamics), 16 & 17 (Legal), 15 & 18 (Illegal - 3+ year gap and 15 is below age of consent), 14 & 17 (Illegal - same rule applies), 15 & 15 (Legal - both fall within exemption law). Bonus: A 16 and 25 year old have a legal relationship in CT. They go to NYC for the weekend. Is their relationship legal there? (No - NY's age of consent is 17, and the 25 year old would be at fault)",
            icon: "HelpCircle"
          }
        ],
        conversationStarters: [
          {
            scenario: "Discussing age of consent across state lines",
            dialogues: [
              { speaker: "Parent", text: "A 16 year old and a 25 year old have a legal relationship in Connecticut. They go to New York City for the weekend. Would their relationship still be legal there?" },
              { speaker: "Child", text: "I'm not sure..." },
              { speaker: "Parent", text: "In New York, the age of consent is 17, so no – their relationship would be illegal there. The 25 year old is always responsible for knowing the laws. This is why it's important to understand that laws change by state." }
            ]
          }
        ]
      },
      {
        id: "healthy-relationships-10",
        title: "Healthy vs. Unhealthy Relationships",
        icon: "Heart",
        color: "pink",
        summary: "Recognizing the key elements that make relationships healthy and safe.",
        fullContent: [
          "Understanding the difference between healthy and unhealthy relationships is crucial as you navigate social connections.",
          "Key elements of healthy relationships include:",
          "EMPATHY: Understanding and sharing your partner's feelings. Being able to put yourself in their shoes.",
          "BOUNDARIES: Respecting personal limits and space. Everyone has the right to set their own boundaries.",
          "RESPECT: Valuing your partner's thoughts, feelings, and choices. Treating them as an equal.",
          "TRUST: Being reliable and honest with each other. Building confidence in your relationship.",
          "EQUITY: Fair treatment and equal power in the relationship. Neither person dominates.",
          "COMMUNICATION: Open, honest dialogue about feelings and needs. Being able to talk through problems."
        ],
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
        fullContent: [
          "To go back to one of the main tenets of consent, it's important to discuss equal versus unequal relationships.",
          "Power is the main reason why a relationship might be unequal – and there are many kinds of power a person might hold over another.",
          "A great question to ask your child is: What do adults have that kids don't have?",
          "Some responses might include a job, house, car, or money. Another answer might even be about the body's development, such as the frontal lobe which is responsible for decision making, and how it doesn't fully develop until someone is 25.",
          "For all of these reasons, an adult inherently has power over a child.",
          "People can also have power over others based on their relationships. Certain sexual relationships are illegal, including:",
          "• A boss and an employee who is under 18",
          "• Any faculty or staff of a school and a student – In Connecticut, this law prevents any faculty or staff member from having a sexual relationship with any student in the district, not just in the specific school",
          "• A coach and their player who is under 18"
        ],
        keyPoints: [
          "Power imbalances can make relationships unequal – age, money, job position, authority",
          "Adults inherently have power over children (jobs, housing, money, developed decision-making)",
          "The frontal lobe, responsible for decision-making, doesn't fully develop until age 25",
          "A boss and employee under 18 – illegal",
          "Any school faculty/staff and a student (applies to entire district in CT) – illegal",
          "A coach and their player under 18 – illegal"
        ],
        conversationStarters: [
          {
            scenario: "Discussing power in relationships",
            dialogues: [
              { speaker: "Parent", text: "What do adults have that kids don't?" },
              { speaker: "Child", text: "Jobs, money, a car, their own place?" },
              { speaker: "Parent", text: "Right. And their brains are fully developed. All of this means adults have power over kids, which is why relationships between adults and minors aren't just illegal in certain cases – they're inherently unequal." }
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
        fullContent: [
          "Understanding different types of boundaries helps you protect yourself and respect others.",
          "EMOTIONAL BOUNDARIES: Protecting your feelings and mental well-being. This includes the right to have your own thoughts and feelings, to not take responsibility for others' emotions, and to have your feelings respected.",
          "PHYSICAL BOUNDARIES: Personal space and comfort with touch. Everyone has different comfort levels with physical contact, and these should always be respected.",
          "DIGITAL BOUNDARIES: Privacy online, sharing of information and images. This includes who can see your social media, what photos of you can be shared, and how you communicate online.",
          "Everyone has the right to set their own boundaries in each of these areas.",
          "Healthy relationships respect all types of boundaries without question or pushback."
        ],
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
        fullContent: [
          "While your child may not legally be able to use recreational drugs like alcohol or marijuana due to age, and while they may not be using other kinds of drugs, it's important that they still learn the signs of intoxication for a myriad of reasons – including but not limited to their own and others' safety.",
          "When it comes to sexual behavior, use of or intoxication by substances does not always remove somebody's ability to consent. However, that changes when somebody becomes incapacitated.",
          "Signs of incapacitation include:",
          "• An inability to undress oneself",
          "• Stumbling and cannot walk unassisted",
          "• Can't understand what they're agreeing to",
          "• Unable to understand possible consequences such as STDs or pregnancy",
          "If someone who is incapacitated said 'yes,' it still wouldn't be considered consent.",
          "This law leaves a gray area, so good judgment must be used to ensure everyone is engaging in consensual sexual activity.",
          "It's important to share with your child that this law is easy to follow when you use common sense. This law is to protect people from others who, unfortunately, are looking to take advantage of incapacitated people."
        ],
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
        answer: "If someone is unable to consent because they are incapacitated, then it would be considered sexual violence. If there are two people who are incapacitated, it would be unlikely that they would physically be able to engage in any sexual behavior. However, if two people were equally intoxicated (but not incapacitated), it becomes a gray area. Good judgment should always be used."
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
        fullContent: [
          "Understanding the legal considerations around consent is especially important as you get older.",
          "TEACHER AND STUDENT: In the state of Connecticut, it is illegal for any teacher and their student to have a sexual relationship, regardless of age. The law applies not only to students in the school in which the teacher works, but also the rest of the students in the district.",
          "COACH AND PLAYER: The younger person must be over the age of 18. However, it is important to discuss the power dynamics at play here. In addition, if the coach works for the school, the same rules regarding teacher and student apply instead of the age of 18 rule.",
          "BOSS AND EMPLOYEE: Illegal if the employee is under 18.",
          "These laws exist because of the inherent power imbalance in these relationships.",
          "Even legal relationships can be unhealthy if there's a significant power difference."
        ],
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
        title: "Principles of Consent (Review)",
        icon: "CheckCircle",
        color: "green",
        summary: "Reinforcing the key components of valid consent.",
        fullContent: [
          "HONEST: People in a sexual relationship need to be clear and upfront about who they are, their sexual health, and any pertinent sexual history. This might look like a conversation between partners before engaging in any sexual behavior.",
          "WANTED: Each sexual encounter must be met with an enthusiastic agreement from all parties involved. No coercion must be used in order to get someone to participate in sexual acts. For example, if someone continued to pressure someone else until they said yes, that would be considered coercion.",
          "SPECIFIC: Each sexual act is discussed and agreed upon by both partners. This would also be part of a conversation between partners before engaging in any sexual behavior.",
          "ONGOING: Consent can be withdrawn at any time. This can be for one specific sexual act or the encounter altogether."
        ],
        keyPoints: [
          "Honest: Clear and upfront about identity, sexual health, and history",
          "Wanted: Enthusiastic agreement without coercion",
          "Specific: Each act discussed and agreed upon",
          "Ongoing: Can be withdrawn at any time"
        ]
      },
      {
        id: "age-of-consent-11",
        title: "Age of Consent (Review)",
        icon: "Calendar",
        color: "blue",
        summary: "Reinforcing Connecticut's age of consent laws and their implications.",
        fullContent: [
          "The age of consent in Connecticut is 16.",
          "There is, however, a close in age exemption law in Connecticut. Also called Romeo and Juliet laws, these statutes state that someone over 13 can engage in sexual behavior with someone else as long as the age difference is less than three years.",
          "It is highly unlikely that someone is born on exactly the same date with a three year difference – so, if it's questionable, the answer is probably no.",
          "While it isn't developmentally appropriate for people so young to be engaging in sexual behavior, the close in age exemption law allows for someone 12 or under to engage in sexual behavior with someone else as long as the age difference is less than two years.",
          "The age of consent law is not to punish kids for doing something wrong – it's to protect kids from adults.",
          "The age of consent law only covers sexual relationships. While it does not cover romantic relationships, it's important to discuss with your child that these kinds of relationships are still not okay.",
          "One of the most important things to share with your child is that it is never their fault if they are the younger person in an illegal relationship stemming from the age of consent. It is always the older person's responsibility to ensure the relationship is legal."
        ],
        keyPoints: [
          "Connecticut age of consent: 16",
          "Close-in-age exemption: Over 13 can engage with someone within 3 years",
          "For 12 or under: age difference must be less than 2 years",
          "Laws protect kids from adults, not punish kids",
          "It is never the younger person's fault"
        ],
        activities: [
          {
            title: "Age of Consent Scenarios Review",
            description: "Review scenarios: 16 & 35 (Legal but concerning - discuss power dynamics), 16 & 17 (Legal), 15 & 18 (Illegal), 14 & 17 (Illegal), 15 & 15 (Legal under exemption). Cross-state scenario: 16 & 25 traveling to NYC (Illegal in NY where age of consent is 17).",
            icon: "HelpCircle"
          }
        ]
      },
      {
        id: "equal-relationships-11",
        title: "Equal Relationships & Power Dynamics",
        icon: "Users",
        color: "orange",
        summary: "Deeper exploration of power dynamics and their impact on consent.",
        fullContent: [
          "To go back to one of the main tenets of consent, it's important to discuss equal versus unequal relationships.",
          "Power is the main reason why a relationship might be unequal – and there are many kinds of power a person might hold over another.",
          "A great question to ask is: What do adults have that kids don't have?",
          "Some responses might include a job, house, car, or money. Another answer might even be about the body's development, such as the frontal lobe which is responsible for decision making, and how it doesn't fully develop until someone is 25.",
          "For all of these reasons, an adult inherently has power over a child.",
          "People can also have power over others based on their relationships. Certain sexual relationships are illegal, including:",
          "• A boss and an employee who is under 18",
          "• Any faculty or staff of a school and a student – In Connecticut, this law prevents any faculty or staff member from having a sexual relationship with any student in the district",
          "• A coach and their player who is under 18 (if coach is employed by school, faculty/staff rules apply)",
          "In addition to illegal relationships between adults and minors, as well as specific relationships that are considered illegal under the law, it's important to have an open discussion about consent regarding developmental ability."
        ],
        keyPoints: [
          "Power is the main reason relationships become unequal",
          "Adults have power over children (jobs, money, housing, fully developed brains)",
          "The frontal lobe doesn't fully develop until age 25",
          "Illegal relationships include: boss/employee under 18, school faculty/student, coach/player under 18",
          "Consider consent regarding developmental ability"
        ],
        conversationStarters: [
          {
            scenario: "Discussing power and brain development",
            dialogues: [
              { speaker: "Parent", text: "Did you know that the part of your brain responsible for decision-making doesn't fully develop until you're 25?" },
              { speaker: "Child", text: "Really? That seems old." },
              { speaker: "Parent", text: "It's one reason why adults inherently have power over young people – their brains are more developed. It's also why certain relationships with authority figures are illegal, even if you're above the age of consent." }
            ]
          }
        ]
      },
      {
        id: "sexual-harassment-11",
        title: "Sexual Harassment (Review)",
        icon: "ShieldAlert",
        color: "red",
        summary: "Reinforcing understanding of verbal and physical sexual harassment.",
        fullContent: [
          "Sexual harassment can be verbal, which may include inappropriate comments, catcalling, or other inappropriate language used either in a sexual manner or in a way that discriminates against a person's gender.",
          "Not only can sexual harassment be verbal, but it can also be physical. It is any touch, on any part of the body.",
          "Touch is considered physical sexual harassment as long as it is unwanted – it does not need to be repeated.",
          "Physical sexual harassment isn't always sexual in nature. The word 'sexual' is used to reference the touch of somebody else's body.",
          "Example to illustrate: One day at school, someone bumps into you in the hallway. They apologize, and you keep going on with your day. (Not harassment) vs. The same thing happens every day for an entire week. (This IS harassment – when unwanted contact is repeated, it's not an accident.)"
        ],
        keyPoints: [
          "Verbal harassment: inappropriate comments, catcalling, discriminatory language",
          "Physical harassment: any unwanted touch on any part of the body",
          "Does not need to be repeated to be harassment",
          "Repeated 'accidental' contact is harassment"
        ]
      },
      {
        id: "sexual-assault-11",
        title: "Sexual Assault (Review)",
        icon: "AlertOctagon",
        color: "red",
        summary: "Reinforcing understanding of sexual assault under Connecticut law.",
        fullContent: [
          "Sexual assault is any unwanted touch to an intimate area of the body.",
          "State law defines what are considered intimate parts of the body in which unwanted touching would be considered sexual assault. In Connecticut, the parts of the body included are the breasts, butt, genitals, and inner thighs.",
          "Your child can label any parts of their body as intimate; however, Connecticut only covers these parts under state law.",
          "Sexual assault covers behaviors that are unwanted – they do not have to be repeated in order to be covered under law."
        ],
        keyPoints: [
          "Any unwanted touch to intimate areas (breasts, butt, genitals, inner thighs in CT)",
          "Does not have to be repeated to be illegal",
          "You can label any body part as intimate to you personally"
        ]
      },
      {
        id: "intoxication-11",
        title: "Intoxication & Incapacitation (Review)",
        icon: "AlertTriangle",
        color: "red",
        summary: "Reinforcing understanding of how substances affect consent.",
        fullContent: [
          "While you may not legally be able to use recreational drugs like alcohol or marijuana due to age, it's important to learn the signs of intoxication for safety reasons.",
          "When it comes to sexual behavior, use of or intoxication by substances does not always remove somebody's ability to consent. However, that changes when somebody becomes incapacitated.",
          "Signs of incapacitation include: an inability to undress oneself, stumbling and cannot walk unassisted, can't understand what they're agreeing to, and unable to understand possible consequences such as STDs or pregnancy.",
          "If someone who is incapacitated said 'yes,' it still wouldn't be considered consent.",
          "This law leaves a gray area, so good judgment must be used to ensure everyone is engaging in consensual sexual activity.",
          "This law is to protect people from others who would take advantage of incapacitated individuals."
        ],
        keyPoints: [
          "Know signs of intoxication for safety",
          "Intoxication doesn't always remove ability to consent, but incapacitation does",
          "Signs of incapacitation: can't undress, stumbling, can't understand agreement or consequences",
          "A 'yes' from someone incapacitated is NOT consent",
          "Use good judgment – when in doubt, the answer is no"
        ]
      },
      {
        id: "title-ix-11",
        title: "Title IX (Review)",
        icon: "Scale",
        color: "blue",
        summary: "Understanding your educational rights under Title IX.",
        fullContent: [
          "Title IX aims to protect students from sex and gender-based discrimination in education programs or activities that receive federal funding.",
          "The rights students receive from Title IX are:",
          "• Get an equal education",
          "• Be free from discrimination",
          "• Feel safe at school",
          "• Report sexual harassment",
          "• Have action taken by your school to prevent sexual harassment",
          "Your child might have heard of Title IX before because of its original purpose – to aim for equality within scholastic sports programs.",
          "Example: The softball team has stadium lights for evening practice, but the baseball team has to leave early. This unequal access to education is a Title IX violation. Solutions could include adding lights to the baseball field or rotating fields."
        ],
        keyPoints: [
          "Protects from sex/gender discrimination in federally funded education",
          "Rights: equal education, freedom from discrimination, safety, ability to report harassment",
          "Originally aimed at sports equality",
          "Covers unequal access to resources that affects education"
        ]
      },
      {
        id: "bystander-11",
        title: "Being an Empowered Bystander (Review)",
        icon: "Users",
        color: "green",
        summary: "Reviewing the 5 D's framework for bystander intervention.",
        fullContent: [
          "The framework we use is called the 5 D's. It was developed and tested by college students to introduce new ways people can be effective bystanders without directly confronting a situation.",
          "This is incredibly important, as not everybody feels comfortable stepping directly into a situation and getting involved. This framework provides the opportunity for everyone to be a bystander.",
          "Example Scenario: You are in the cafeteria at school and two students start getting into a physical fight.",
          "DIRECT: Intervene directly if safe. Tell the person to stop.",
          "DISTRACT: Create a diversion to de-escalate. Make a loud noise (drop a water bottle), but don't escalate (no food fights).",
          "DELEGATE: Seek help from a third party – security officer, teacher, principal.",
          "DOCUMENT: Take photos/videos only if safe. Check school policies. Share only with victim, not social media.",
          "DELAY: Check in with the affected person afterwards.",
          "The goal is to de-escalate, not escalate the situation."
        ],
        keyPoints: [
          "5 D's allow intervention without direct confrontation",
          "Direct: Intervene if safe",
          "Distract: Create diversion without escalating",
          "Delegate: Get help from authority",
          "Document: Record safely, share only with victim",
          "Delay: Check in afterwards"
        ]
      }
    ],
    resources: [
      {
        category: "Support Resources",
        links: [
          { title: "RAINN (Rape, Abuse & Incest National Network)" },
          { title: "Love Is Respect - Teen Dating Abuse Hotline" },
          { title: "Connecticut Sexual Assault Crisis Services" }
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
    grade: "12th Grade",
    gradeLevel: "High School Year 4",
    intro: "Twelfth grade prepares students for life after high school, including understanding workplace rights, college campus safety, and complex topics like rape culture. This year focuses on the transition to adulthood and increased independence.",
    topics: [
      {
        id: "consent-12",
        title: "Consent Framework (Review)",
        icon: "CheckCircle",
        color: "green",
        summary: "Final review of the consent framework before transitioning to adulthood.",
        fullContent: [
          "EQUAL: There shouldn't be any power imbalances between partners in a sexual relationship. This might include someone's age, the amount of money they have, or what job they have. It can also include relationships such as between boss and employee, teacher and student, or coach and player.",
          "HONEST: People in a sexual relationship need to be clear and upfront about who they are, their sexual health, and any pertinent sexual history. This might look like a conversation between partners before engaging in any sexual behavior.",
          "WANTED: Each sexual encounter must be met with an enthusiastic agreement from all parties involved. No coercion must be used in order to get someone to participate in sexual acts.",
          "SPECIFIC: Each sexual act is discussed and agreed upon by both partners.",
          "ONGOING: Consent can be withdrawn at any time. This can be for one specific sexual act or the encounter altogether."
        ],
        keyPoints: [
          "Equal: No power imbalances",
          "Honest: Clear about identity, health, history",
          "Wanted: Enthusiastic, uncoerced agreement",
          "Specific: Each act agreed upon",
          "Ongoing: Can be withdrawn anytime"
        ]
      },
      {
        id: "equal-relationships-12",
        title: "Equal Relationships & Power (Review)",
        icon: "Scale",
        color: "orange",
        summary: "Understanding power dynamics as you enter adulthood.",
        fullContent: [
          "Power is the main reason why a relationship might be unequal – and there are many kinds of power a person might hold over another.",
          "What do adults have that kids don't have? Jobs, housing, cars, money. And fully developed brains – the frontal lobe responsible for decision-making doesn't fully develop until age 25.",
          "People can also have power over others based on their relationships. Certain sexual relationships are illegal:",
          "• A boss and an employee who is under 18",
          "• Any faculty or staff of a school and a student (in CT, applies to entire district)",
          "• A coach and their player who is under 18 (if employed by school, faculty rules apply)",
          "In addition to illegal relationships, it's important to discuss consent regarding developmental ability.",
          "Even as you become a legal adult, be aware of power dynamics in your relationships."
        ],
        keyPoints: [
          "Power creates inequality in relationships",
          "Adults have advantages: jobs, money, housing, developed brains",
          "Frontal lobe develops until age 25",
          "Be aware of power dynamics even in legal relationships"
        ]
      },
      {
        id: "rape-culture",
        title: "Rape Culture",
        icon: "AlertOctagon",
        color: "red",
        summary: "Understanding how society normalizes sexual violence and how to combat it.",
        fullContent: [
          "Rape culture refers to an environment in which rape is prevalent and normalized due to societal attitudes about gender and sexuality.",
          "It is not that our culture promotes rape, or that we as a society commonly engage in rape – but we normalize it.",
          "The culture on college campuses also contributes to our own views and attitudes about sexuality, sexual behaviors, and gender norms. While individuals may have different views than others, often the societal view dictates actual behavior.",
          "Being on a college campus is a completely new experience and a different environment than people are accustomed to. Many people are experiencing more freedom and a lack of supervision for the first time. Because of this, people can engage in behaviors that are inappropriate and that hurt others.",
          "Rape culture has continuously proven to contribute to acts of sexual violence. Included in this are:",
          "• Exclusion of male and LGBTQ+ victims/survivors from the conversation",
          "• Protection of perpetrators",
          "• Jokes about sexual violence",
          "• Placing an undue burden on victims/survivors, such as victim blaming"
        ],
        keyPoints: [
          "Rape culture: environment where rape is normalized due to societal attitudes",
          "Our culture doesn't promote rape, but normalizes it",
          "College campuses can contribute to problematic attitudes and behaviors",
          "New freedom and lack of supervision can lead to inappropriate behaviors",
          "Rape culture includes: excluding male/LGBTQ+ survivors, protecting perpetrators, jokes about violence, victim blaming"
        ]
      },
      {
        id: "victim-blaming",
        title: "Victim Blaming",
        icon: "ShieldAlert",
        color: "red",
        summary: "Understanding why victim blaming is harmful and why it's never the victim's fault.",
        fullContent: [
          "Victim blaming questions the choices of a victim in a way that directly or indirectly implies they were responsible for what happened to them.",
          "It is never the victim's fault – ever.",
          "Individuals will respond in the way that is safest for them to do so at the time, whether that is with physical response or shutting down.",
          "People may have a fear that they will encounter further harm if they fight back during an act of sexual violence.",
          "Some victims/survivors also experience tonic immobility, which is an involuntary response to a dangerous situation, and can cause someone to 'freeze'.",
          "Understanding these responses helps us support survivors rather than blame them for not reacting the way we might expect."
        ],
        keyPoints: [
          "Victim blaming implies the victim was responsible for what happened",
          "It is NEVER the victim's fault – ever",
          "Victims respond in whatever way feels safest at the time",
          "Fighting back may increase fear of harm",
          "Tonic immobility ('freezing') is an involuntary response to danger"
        ]
      },
      {
        id: "bystander-advanced",
        title: "Being an Empowered Bystander: College & Workplace",
        icon: "Users",
        color: "green",
        summary: "Advanced bystander intervention scenarios for post-high school life.",
        fullContent: [
          "Because you are nearing the time you will be working or in higher education, discussing ways you can be an empowered bystander in these scenarios can prepare you for engaging in these behaviors.",
          "COLLEGE EXAMPLE: You are at a fraternity party with a group of friends. While at the party, you notice one of the fraternity brothers having a conversation with a woman. It looks slightly heated. The fraternity brother grabs the woman's wrist and starts pulling her behind him towards a bedroom.",
          "• Direct: Step into the situation and tell the fraternity brother to stop. Good if you're friends with them, but could be unsafe due to the physical aspect.",
          "• Distract: Make a loud noise (spill a drink) to change focus. Or pretend the woman's ride has arrived to remove her from the situation.",
          "• Delegate: Get your group of friends to take action – one calls campus police while another approaches the woman.",
          "• Document: Take a photo or video, sharing directly with the woman impacted.",
          "• Delay: Check in with the woman the next day to make sure she is safe.",
          "WORKPLACE EXAMPLE: You hear a coworker make a sexual remark about another coworker as they walk by. The target's face turns red and they walk away faster.",
          "• Direct: Tell the colleague their behavior is unacceptable and an example of sexual harassment.",
          "• Distract: Immediately switch the topic to a task that needs to be done.",
          "• Delegate: Coordinate responses – one person confronts the harasser, one checks on the target, another changes the subject for everyone else.",
          "• Document: Take evidence of what happened or the aftermath. Share only with the impacted coworker.",
          "• Delay: Check in with the affected coworker later to make sure they feel safe and provide support."
        ],
        keyPoints: [
          "The 5 D's apply in college and workplace settings",
          "College scenarios may involve parties, dorms, campus events",
          "Workplace scenarios involve coworkers and professional settings",
          "Adapt your approach to the specific situation and your relationship to those involved",
          "Always prioritize safety and support for the person being harassed"
        ],
        activities: [
          {
            title: "College Scenario Discussion",
            description: "Walk through the fraternity party scenario: A fraternity brother grabs a woman's wrist and pulls her toward a bedroom. Discuss how you would apply each of the 5 D's. What feels safest? What might be most effective?",
            icon: "GraduationCap"
          },
          {
            title: "Workplace Scenario Discussion",
            description: "Walk through the workplace scenario: A coworker makes a sexual remark about another coworker. How would you apply each D? Consider: When is Direct appropriate? How might you Delegate effectively?",
            icon: "Briefcase"
          }
        ]
      },
      {
        id: "title-vii",
        title: "Workplace Rights: Title VII",
        icon: "Briefcase",
        color: "blue",
        summary: "Understanding your rights against workplace discrimination and harassment.",
        fullContent: [
          "Talking about workplace and Title VII rights is important no matter what your path is. This doesn't just include students going right into the workforce after high school, but also students going into the workforce after higher education.",
          "The rights provided by Title VII include:",
          "• Work in a safe discrimination-free environment",
          "• Be told about your company's sexual harassment policies, including how to report",
          "• Report the harassment to HR or your boss",
          "• Have your complaint taken seriously and investigated",
          "• Do nothing (you have the right to choose not to report)",
          "Title VII includes sexual harassment and sexual assault.",
          "Legally, you CANNOT be fired for these actions:",
          "• Talking about or speaking out against sexual harassment",
          "• Picketing or protesting against sexual harassment",
          "• Asking your employer what will happen and who will know if you file a complaint",
          "• Filing charges with a government agency",
          "• Suing them",
          "• Testifying as a witness",
          "How to report:",
          "• Tell your boss, your boss' supervisor, or HR depending on what you have in your workplace",
          "• Go to your union, if you have one",
          "• File with the EEOC (the government)"
        ],
        keyPoints: [
          "Right to work in a safe, discrimination-free environment",
          "Right to know harassment policies and reporting procedures",
          "Right to have complaints taken seriously and investigated",
          "Cannot be fired for speaking out, protesting, filing charges, or testifying",
          "Report to: boss/HR, union, or EEOC (government agency)"
        ]
      },
      {
        id: "title-ix-college",
        title: "Title IX in Higher Education",
        icon: "GraduationCap",
        color: "blue",
        summary: "Understanding expanded Title IX rights at colleges and universities.",
        fullContent: [
          "Review: Title IX protects students from sex and gender-based discrimination in education programs receiving federal funding.",
          "Additional rights at higher education institutions include:",
          "• To know what the process is when you file a Title IX complaint, such as an informal mediation or a formal hearing",
          "• To get support services from your college, university, or school, such as counseling",
          "• To have your Title IX case be treated the same as anyone else's would be",
          "• To have your case investigated within 60 days of filing",
          "• To be free of fear of retaliation from your college, university, or school for reporting sexual violence",
          "Further stipulations of Title IX include:",
          "• Applies to and protects everyone (students and faculty)",
          "• Schools have to be proactive in preventing discrimination from occurring",
          "• Covers 'on-campus' violations",
          "• Title IX doesn't just cover sexual violence – it also covers discrimination based on binary gender (male or female), sexual orientation, and against transgender students",
          "• Protects students from harassment from other students, teachers, administration, and staff – as well as systemic discrimination",
          "Title IX resources outside of your institution:",
          "• Office of Civil Rights (if your school fails to follow Title IX protocols, you can file a complaint with the OCR within 180 days)",
          "• Pending Cases Department of Ed (shows colleges under investigation for violating Title IX)",
          "Important to remember:",
          "• Ask about confidentiality rules – some resources may be mandated reporters",
          "• There is amnesty in Connecticut schools – no disciplinary action for drugs or alcohol when reporting sexual violence (as long as it didn't put others' health and safety at risk)"
        ],
        keyPoints: [
          "Right to know the complaint process (mediation vs hearing)",
          "Right to support services like counseling",
          "Right to equal treatment and investigation within 60 days",
          "Right to freedom from retaliation",
          "Protects everyone – students, faculty, all genders, sexual orientations",
          "File with Office of Civil Rights if school fails to follow protocols",
          "CT has amnesty for drugs/alcohol when reporting sexual violence"
        ]
      },
      {
        id: "clery-act",
        title: "The Clery Act",
        icon: "FileText",
        color: "purple",
        summary: "Understanding your right to know about campus safety and crime statistics.",
        fullContent: [
          "The Clery Act is a consumer protection law that requires colleges and universities to be transparent about campus crime policy and statistics.",
          "The Clery Act is a federal law, meaning it covers the entirety of the United States.",
          "One way to explain consumer protection is that you have a right to know what you are spending money on – and that includes your education.",
          "The Clery Act was created to honor Jeanne Clery. She was a student at Lehigh University who was sexually assaulted and murdered in her dorm room by another student. At the time, there was no mandate that required schools to report the crime rates on campus to prospective and current students. At Lehigh University, the violent crime rate was quite high. For this reason, the people choosing to go to Lehigh University, and schools across the nation, had no awareness of whether or not their school was safe.",
          "An activity that might be helpful for both you and your parents to understand more about the campus climate at higher education institutions you are looking to attend would be to look at the Clery Act data.",
          "How to find it: Search 'Name of School + Clery Act Data/Health and Safety Report' online. The data should be available and will include three years worth of information about different crimes that have occurred on campus.",
          "What does this data tell you about the campus climate? What does it tell you about sexual violence at this school?",
          "While the data will not have every instance of crime listed (for various reasons), it does show how many cases have been reported to the school.",
          "The data can also vary by school size – for example, a school with 20,000 students having 10 cases of sexual violence versus a school with 2,000 students having 10 cases leads to different conclusions about campus climate."
        ],
        keyPoints: [
          "Consumer protection law requiring transparency about campus crime",
          "Federal law covering all US colleges and universities",
          "Created to honor Jeanne Clery, murdered at Lehigh University",
          "You have the right to know what you're paying for – including safety",
          "Search '[School Name] + Clery Act Data' to find reports",
          "Reports include 3 years of crime data",
          "Consider school size when evaluating data"
        ],
        activities: [
          {
            title: "Research Clery Act Data",
            description: "Look up the Clery Act data for colleges you're considering. Search '[School Name] + Clery Act Data' online. Review the 3 years of crime statistics. Questions to consider: What does this tell you about campus safety? How does the school size affect interpretation? What patterns do you notice?",
            icon: "Search"
          }
        ]
      }
    ],
    resources: [
      {
        category: "College Preparation",
        links: [
          { title: "Office of Civil Rights - Title IX Information" },
          { title: "Clery Center - Campus Safety Resources" },
          { title: "EEOC - Equal Employment Opportunity Commission" },
          { title: "Know Your IX - Student Rights Organization" }
        ]
      },
      {
        category: "Support Resources",
        links: [
          { title: "RAINN - Rape, Abuse & Incest National Network" },
          { title: "National Sexual Assault Hotline: 1-800-656-4673" },
          { title: "Love Is Respect - Healthy Relationships" }
        ]
      }
    ],
    faqs: [
      {
        question: "What should I do if my school doesn't follow Title IX protocols?",
        answer: "If your school, college, or university fails to follow Title IX protocols, you can file a complaint with the Office of Civil Rights (OCR) within 180 days of reporting to the school. You can also check the Pending Cases Department of Ed to see colleges currently under investigation for Title IX violations."
      },
      {
        question: "Will I get in trouble for drugs or alcohol if I report sexual violence?",
        answer: "In Connecticut schools, there is amnesty for drugs or alcohol when reporting sexual violence, meaning no disciplinary action will be taken as long as your substance use didn't put others' health and safety at risk. This is designed to encourage reporting without fear of getting in trouble for other violations."
      }
    ]
  }
];
