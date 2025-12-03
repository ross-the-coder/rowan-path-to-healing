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
          "Sexual harassment can be verbal: inappropriate comments, catcalling, or discriminatory language",
          "Physical sexual harassment: any unwanted touch on any part of the body",
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
          "Sexual assault: any unwanted touch to an intimate area of the body",
          "In Connecticut, intimate parts include: breasts, butt, genitals, and inner thighs",
          "Your child can label any parts of their body as intimate, but Connecticut law specifically covers these areas",
          "Sexual assault covers behaviors that are unwanted – they do not have to be repeated to be covered under law",
          "This is different from sexual harassment, which typically involves repeated behavior on non-intimate areas"
        ]
      },
      {
        id: "sexting-csam-9",
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
          "Sexting: sending intimate content through text, social media, or messaging apps – including written content, images, videos, and even suggestive emojis",
          "Anyone under 18 who takes or sends intimate photos of themselves or others is engaging in illegal behavior",
          "Child Sexual Abuse Material (CSAM): any visual depiction of sexual conduct involving a minor (under 18)",
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
        id: "sextortion-9",
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
          "This situation is an example of a Title IX violation. The baseball team has to miss school in order to get a full practice, which the softball team does not have to do. The baseball team does not have access to the same resources, like the powerful lights, that the softball team has.",
          "To remedy this situation, the school could either put lights on the baseball field as well, or create a system in which each team plays on the baseball field one day and the softball field the next to make their access to school and sports the same."
        ],
        keyPoints: [
          "Title IX: protects students from sex and gender-based discrimination in education programs receiving federal funding",
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
        id: "consent-framework-10",
        title: "Understanding Consent",
        icon: "CheckCircle",
        color: "green",
        summary: "A comprehensive framework for understanding what true consent looks like in relationships.",
        fullContent: [
          "You or your child might have heard of different acronyms to remember the parts of consent. This toolkit is an updated way to measure consent.",
          "EQUAL: There shouldn't be any power imbalances between partners in a sexual relationship. This might include, for example, someone's age, the amount of money they have, or what job they have. It can also include relationships such as between boss and employee, teacher and student, or coach and player. There are specific laws about this, as well:",
          "• Between a boss and employee: The younger person must be over the age of 18. However, it is important to discuss the power dynamics at play here.",
          "• Between a teacher and student: In the state of Connecticut, it is illegal for any teacher and their student to have a sexual relationship, regardless of age. The law applies not only to students in the school in which the teacher works, but also the rest of the students in the district.",
          "• Coach and player: The younger person must be over the age of 18. However, it is important to discuss the power dynamics at play here. In addition, if the coach works for the school, the same rules regarding teacher and student apply instead of the age of 18 rule.",
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
        id: "age-of-consent-10",
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
            description: "Discuss which relationships are legal in CT:\n• 16 & 35: Legal – 16 is above age of consent, but discuss power dynamics\n• 16 & 17: Legal\n• 15 & 18: Illegal – 3+ year gap and 15 is below age of consent\n• 14 & 17: Illegal – same rule applies\n• 15 & 15: Legal – both fall within exemption law\n\nBonus: A 16 and 25 year old have a legal relationship in CT. They go to NYC for the weekend. Is their relationship legal there? (No – NY's age of consent is 17, and the 25 year old would be at fault)",
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
        id: "power-dynamics-10",
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
        id: "intoxication-incapacitation-10",
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
    intro: "Eleventh grade reinforces consent and legal concepts while introducing critical thinking about rape culture, addressing victim blaming, and preparing students for the increased independence that comes with approaching adulthood.",
    topics: [
      {
        id: "rape-culture-11",
        title: "Rape Culture",
        icon: "AlertOctagon",
        color: "red",
        summary: "Understanding how societal attitudes normalize sexual violence and what we can do about it.",
        fullContent: [
          "Rape culture is defined by a society in which sexual violence is accepted and normalized due to the societal attitudes regarding sex and gender.",
          "Rape culture is seen throughout many different outlets:",
          "• Laws – what is and isn't considered illegal, how people who have committed crimes of sexual violence are punished, and how we talk about how cases should or should not be prosecuted. For example, while the age of consent in Connecticut is 16, the age one is considered an adult is 18. This means that, while a minor can have a sexual relationship with an adult, if the adult is caught, they cannot be tried as a sex offender in the state of Connecticut.",
          "• Language – words and phrases that are used that perpetuate rape culture. Some examples might be how we use words like 'bitch,' 'slut,' and 'whore.' Another example might be when people use phrases like 'Boys will be boys' or 'She was asking for it.'",
          "• Media – normalizing behaviors in TV, movies, and print. Things like showing scenes without consent and playing it for laughs, or centering a show or movie around a main character who commits an act of sexual violence and then is shown to be a 'good guy' by the end.",
          "Regardless of what you see in these outlets, it's important to reaffirm that your child can create and maintain healthy boundaries – no matter how common these things can be. We hope these healthy foundations help set your child up for success."
        ],
        keyPoints: [
          "Rape culture: a society in which sexual violence is accepted and normalized due to societal attitudes regarding sex and gender",
          "Seen in laws: how sexual violence crimes are defined, prosecuted, and punished",
          "Seen in language: words like 'slut' or phrases like 'boys will be boys' and 'she was asking for it'",
          "Seen in media: normalizing non-consensual behavior or portraying perpetrators as 'good guys'",
          "Your child can create and maintain healthy boundaries regardless of these societal influences"
        ],
        conversationStarters: [
          {
            scenario: "Discussing rape culture in media",
            dialogues: [
              { speaker: "Parent", text: "Have you ever noticed in movies or TV when something that should be taken seriously is played for laughs?" },
              { speaker: "Child", text: "Like what?" },
              { speaker: "Parent", text: "Sometimes scenes without clear consent are shown as romantic or funny. That's part of what we call 'rape culture' – when media normalizes behaviors that aren't okay. It's important to recognize these messages so we can think critically about them." }
            ]
          }
        ]
      },
      {
        id: "victim-blaming-11",
        title: "Victim Blaming",
        icon: "MessageSquareX",
        color: "orange",
        summary: "Understanding why victim blaming happens and how to counter it.",
        fullContent: [
          "Victim blaming occurs when the victim of a crime or other wrongful act is held responsible for what happened to them.",
          "Victim blaming is incredibly prevalent when it comes to crimes of sexual violence. It can sound like, 'If they wore different clothing…,' 'They shouldn't have been drinking…,' or 'They should have said no more clearly.'",
          "All three of these examples, and more, place the responsibility on the victim when it truly lies on the perpetrator.",
          "One of the main reasons people might victim blame is something called the 'Just World Belief.' The Just World Belief is a cognitive bias where someone believes they live in a world in which good things happen to good people and bad things happen to bad people.",
          "If someone lives with this kind of belief, they think that anyone who had a bad thing happen to them must have done something wrong to deserve it – and that's not true.",
          "One of the most important things to share with your child is that, if they become a victim of any kind of assault, whether that be sexual or not, they will be believed – and it will never be their fault."
        ],
        keyPoints: [
          "Victim blaming: when the victim of a crime is held responsible for what happened to them",
          "Common examples: 'If they wore different clothing...,' 'They shouldn't have been drinking...,' 'They should have said no more clearly'",
          "All of these place responsibility on the victim when it belongs on the perpetrator",
          "Just World Belief: a cognitive bias where people believe good things happen to good people and bad things happen to bad people",
          "This belief leads people to think victims must have done something wrong – which is not true",
          "Most important message: If your child becomes a victim, they will be believed and it will never be their fault"
        ],
        conversationStarters: [
          {
            scenario: "Explaining the Just World Belief",
            dialogues: [
              { speaker: "Parent", text: "Have you ever heard someone say things like 'they shouldn't have been drinking' or 'they should have dressed differently' when talking about someone who was hurt?" },
              { speaker: "Child", text: "Yeah, sometimes." },
              { speaker: "Parent", text: "That's called victim blaming, and it's never okay. People do it because of something called the 'Just World Belief' – thinking that bad things only happen to people who deserve it. But that's not true. If something ever happens to you, it will never be your fault, and I will always believe you." }
            ]
          }
        ]
      },
      {
        id: "bystander-review-11",
        title: "Being an Empowered Bystander: Review",
        icon: "Users",
        color: "green",
        summary: "Reinforcing the 5 D's framework with more complex scenarios.",
        fullContent: [
          "As a review, the 5 D's framework provides ways to safely intervene when you witness harmful situations:",
          "DIRECT: Intervene directly if it's safe to do so. Step into the situation and tell the person to stop.",
          "DISTRACT: Create a diversion to de-escalate the situation without directly confronting anyone.",
          "DELEGATE: Seek help from a third party, like a trusted adult, security, or authority figure.",
          "DOCUMENT: Take photos or videos, only if it is safe to do so. Always share with the victim only, never on social media.",
          "DELAY: Check in with the person being harassed afterwards to offer support.",
          "By 11th grade, students can apply these concepts to more nuanced situations and recognize when intervention is appropriate and safe."
        ],
        keyPoints: [
          "Direct: Intervene directly if safe",
          "Distract: Create a diversion to de-escalate",
          "Delegate: Get help from a trusted adult or authority",
          "Document: Record only if safe, share only with victim",
          "Delay: Check in with the person afterwards",
          "Apply these to more complex situations as you mature"
        ]
      }
    ],
    resources: [
      {
        category: "Support Resources",
        links: [
          { title: "RAINN - Rape, Abuse & Incest National Network" },
          { title: "National Sexual Assault Hotline - 1-800-656-4673" },
          { title: "Connecticut Alliance to End Sexual Violence" }
        ]
      }
    ],
    faqs: [
      {
        question: "What should I do if I notice victim blaming in my own thinking?",
        answer: "Recognizing victim blaming in yourself is the first step to changing it. When you catch yourself thinking 'they could have...' or 'why didn't they...', pause and remind yourself that the responsibility always lies with the person who caused harm, not the person who was harmed. It takes practice to unlearn these thought patterns, but awareness is key."
      }
    ]
  },
  {
    grade: "12th Grade",
    gradeLevel: "High School Year 4",
    intro: "Twelfth grade prepares students for life after high school with essential knowledge about workplace rights, Title IX protections in college, and how to maintain safety as they gain full independence.",
    topics: [
      {
        id: "workplace-rights-12",
        title: "Your Rights as an Employee",
        icon: "Briefcase",
        color: "blue",
        summary: "Understanding your legal protections against harassment and discrimination in the workplace.",
        fullContent: [
          "As your child grows up and begins to enter the workforce, it's important that they understand that sexual harassment is prohibited by law in the workplace.",
          "When your child begins their job search after college or high school, it's important they know that an employer cannot ask them to disclose personal information during the interview process. For example, questions about immigration status, gender identity, and criminal history are off limits in the state of Connecticut.",
          "While their employer might not be able to ask them about their immigration status, your child might still want to be aware of their rights as an immigrant in the workplace. The Fair Labor Standards Act covers undocumented workers as well, which means they cannot be discriminated against based on their gender, they must be paid at least minimum wage, and they have protections against unsafe working conditions.",
          "In addition, your child should be compensated for any overtime worked. Working overtime equates to working over 40 hours in one week."
        ],
        keyPoints: [
          "Sexual harassment is prohibited by law in the workplace",
          "Employers cannot ask about: immigration status, gender identity, or criminal history in CT",
          "The Fair Labor Standards Act covers undocumented workers",
          "All workers have protection against gender discrimination, must be paid minimum wage, and have workplace safety protections",
          "Overtime (over 40 hours per week) must be compensated"
        ],
        conversationStarters: [
          {
            scenario: "Discussing interview rights",
            dialogues: [
              { speaker: "Parent", text: "When you start interviewing for jobs, there are certain things employers can't legally ask you about in Connecticut." },
              { speaker: "Child", text: "Like what?" },
              { speaker: "Parent", text: "They can't ask about your immigration status, gender identity, or criminal history. If an interviewer asks these questions, that's a red flag about the company." }
            ]
          }
        ]
      },
      {
        id: "college-title-ix-12",
        title: "Title IX in College",
        icon: "GraduationCap",
        color: "purple",
        summary: "Understanding how Title IX protections extend to higher education.",
        fullContent: [
          "Title IX continues to protect students in college. This means you have the right to:",
          "• Get an equal education",
          "• Be free from discrimination",
          "• Feel safe at school",
          "• Report sexual harassment",
          "• Have action taken by your school to prevent sexual harassment",
          "Colleges and universities that receive federal funding must have a Title IX coordinator. This person is responsible for handling complaints and ensuring the school complies with Title IX requirements.",
          "If you experience sexual harassment or assault in college, you have the right to report it to your school's Title IX office. The school must investigate and take action to protect you.",
          "Many colleges also have confidential resources like counseling centers where you can get support without triggering an investigation if that's your preference."
        ],
        keyPoints: [
          "Title IX continues to protect you in college",
          "Rights include: equal education, freedom from discrimination, feeling safe, reporting harassment, having action taken",
          "Colleges receiving federal funding must have a Title IX coordinator",
          "You can report sexual harassment or assault to your school's Title IX office",
          "Confidential resources like counseling centers may be available if you prefer support without an investigation"
        ]
      },
      {
        id: "independence-safety-12",
        title: "Safety as an Independent Adult",
        icon: "Shield",
        color: "green",
        summary: "Preparing for maintaining personal safety as you gain full independence.",
        fullContent: [
          "As you transition to adulthood, whether going to college, entering the workforce, or both, you'll have more independence than ever before. With that independence comes the responsibility to maintain your own safety.",
          "Continue to apply what you've learned:",
          "• Use the consent framework (Equal, Honest, Wanted, Specific, Ongoing) in all relationships",
          "• Recognize and avoid situations with power imbalances",
          "• Know the signs of healthy and unhealthy relationships",
          "• Be an empowered bystander using the 5 D's",
          "• Know your rights in the workplace and at school",
          "• Recognize victim blaming and don't participate in it",
          "Remember that you can always reach out for help. Resources like RAINN (1-800-656-4673), local crisis centers, and campus resources are available whenever you need them."
        ],
        keyPoints: [
          "Independence comes with responsibility for your own safety",
          "Continue using the consent framework in all relationships",
          "Recognize power imbalances and unhealthy relationship patterns",
          "Be an empowered bystander",
          "Know your workplace and educational rights",
          "Resources are always available when you need help"
        ],
        activities: [
          {
            title: "Resource Mapping",
            description: "Before starting college or a new job, research and create a list of available resources: Title IX office location and contact, campus counseling center, local crisis hotline, HR department contact, and trusted people you can reach out to.",
            icon: "Map"
          }
        ]
      }
    ],
    resources: [
      {
        category: "Transition Resources",
        links: [
          { title: "RAINN - Rape, Abuse & Incest National Network" },
          { title: "Know Your IX - Student rights organization" },
          { title: "U.S. Equal Employment Opportunity Commission" },
          { title: "Connecticut Commission on Human Rights and Opportunities" }
        ]
      }
    ],
    faqs: [
      {
        question: "What should I do if I experience harassment at work?",
        answer: "Document the harassment by writing down what happened, when, where, and who was involved. Report it to HR or your supervisor. If your company doesn't address it, you can file a complaint with the Connecticut Commission on Human Rights and Opportunities or the U.S. Equal Employment Opportunity Commission. Remember, retaliation for reporting harassment is illegal."
      },
      {
        question: "How do I find my college's Title IX office?",
        answer: "Most colleges list their Title IX coordinator and office on their website, often under Student Affairs or Equity and Compliance. You can also ask at your school's student services or dean's office. It's a good idea to locate these resources before you need them."
      }
    ]
  }
];
