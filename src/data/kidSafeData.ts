// KidSafeHQ Data Structure
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

export const elementarySchoolData: GradeContent[] = [
  {
    grade: "K",
    gradeLevel: "Kindergarten",
    intro: "Your child entering school for the first time can be a daunting experience for all people involved. During this big transition period, it's important to ensure your child is able to experience social interactions with other students in a healthy, meaningful way.",
    topics: [
      {
        id: "permission",
        title: "Permission",
        icon: "HandHeart",
        color: "bg-blue-100 text-blue-700",
        summary: "Teaching children to ask before taking or touching",
        keyPoints: [
          "Ask to use something belonging to someone else before taking it",
          "Ask before touching someone else",
          "Practice what to say when someone says 'no'",
          "Understand that feelings after hearing 'no' are normal"
        ],
        conversationStarters: [
          {
            scenario: "Practicing with objects",
            dialogues: [
              { speaker: "Parent", text: "Can I borrow the item you're holding?" },
              { speaker: "Child", text: "Yes. (hands parent item)" },
              { speaker: "Child", text: "Can I borrow the item you're holding?" },
              { speaker: "Parent", text: "Yes. (hands child item)" }
            ]
          },
          {
            scenario: "Practicing with touch",
            dialogues: [
              { speaker: "Parent", text: "Can I give you a hug?" },
              { speaker: "Child", text: "Yes. (hugs parent)" },
              { speaker: "Child", text: "Can I give you a hug?" },
              { speaker: "Parent", text: "Yes. (hugs child)" }
            ]
          },
          {
            scenario: "When someone says no",
            dialogues: [
              { speaker: "Parent", text: "Can I borrow your toy?" },
              { speaker: "Child", text: "No." },
              { speaker: "Parent", text: "That's okay! / That's fine! / No problem!" }
            ]
          }
        ],
        activities: [
          {
            title: "Pass the Object",
            description: "Take turns passing a toy or object back and forth while practicing permission language",
            icon: "Repeat"
          },
          {
            title: "Feelings Check-In",
            description: "Talk about how it feels when someone says 'no' and validate those emotions",
            icon: "Heart"
          }
        ]
      },
      {
        id: "boundaries",
        title: "Boundaries",
        icon: "Shield",
        color: "bg-purple-100 text-purple-700",
        summary: "Helping children understand and set their own boundaries",
        keyPoints: [
          "Children have their own boundaries, even if hard to verbalize",
          "It's okay to not want to hug or touch someone, even family",
          "They can use 'no', 'no thanks', 'I'm okay', or 'I'm not sure'",
          "If someone disrespects their 'no', tell a trusted adult",
          "Model boundaries by narrating safe touches"
        ],
        conversationStarters: [
          {
            scenario: "Narrating safe medical care",
            dialogues: [
              { speaker: "Parent", text: "I am touching your leg now to take a look at your knee." },
              { speaker: "Parent", text: "I am going to use this cleaner to make sure I get all of the dirt out. It may sting a little bit–just let me know if it hurts too much." },
              { speaker: "Parent", text: "I am going to touch the injury to put this ointment on. It will help your scrape feel better." }
            ]
          }
        ],
        activities: [
          {
            title: "Practice Saying No",
            description: "Role-play scenarios where it's okay to say no to hugs or touches",
            icon: "MessageCircle"
          },
          {
            title: "Trusted Adult List",
            description: "Create a list together of trusted adults they can talk to",
            icon: "Users"
          }
        ]
      },
      {
        id: "emotions",
        title: "Emotions",
        icon: "Smile",
        color: "bg-yellow-100 text-yellow-700",
        summary: "Identifying and handling feelings in healthy ways",
        keyPoints: [
          "All emotions are neutral - not negative or positive",
          "Teach children to identify their emotions",
          "Understand how emotions feel in their body",
          "Create a plan for returning to calm baseline"
        ],
        conversationStarters: [
          {
            scenario: "Identifying emotions in the body",
            dialogues: [
              { speaker: "Parent", text: "How do you know when you're happy?" },
              { speaker: "Child", text: "I'm smiling and bouncy!" },
              { speaker: "Parent", text: "How do you know when you're sad?" },
              { speaker: "Child", text: "I feel a ball in my throat and want to cry." }
            ]
          }
        ],
        activities: [
          {
            title: "Emotion Faces",
            description: "Draw or make faces showing different emotions together",
            icon: "Smile"
          },
          {
            title: "Calming Strategies",
            description: "Practice deep breathing, coloring, or running around to release energy",
            icon: "Wind"
          }
        ]
      },
      {
        id: "empathy",
        title: "Empathy",
        icon: "HeartHandshake",
        color: "bg-green-100 text-green-700",
        summary: "Recognizing and caring about others' feelings",
        keyPoints: [
          "Recognize feelings in others",
          "Practice questioning how others might feel",
          "Connect actions to emotions in others"
        ],
        conversationStarters: [
          {
            scenario: "Perspective taking",
            dialogues: [
              { speaker: "Parent", text: "If someone took something that belongs to you without your permission, how might you feel?" },
              { speaker: "Child", text: "Sad or angry!" },
              { speaker: "Parent", text: "How do we think somebody might feel if we took something that belonged to them?" },
              { speaker: "Child", text: "Probably sad or angry too." }
            ]
          }
        ]
      },
      {
        id: "trusted-adults",
        title: "Trusted Adults",
        icon: "Users",
        color: "bg-rose-100 text-rose-700",
        summary: "Knowing who to talk to when something is wrong",
        keyPoints: [
          "Talk to trusted adults when feeling uncomfortable",
          "Share if they feel unsafe for any reason",
          "Tell an adult if someone asks them to keep a secret",
          "Report if someone hurts their emotions or body",
          "Let adults know if someone else got hurt"
        ],
        activities: [
          {
            title: "Telling Tree",
            description: "Create a visual 'tree' with branches showing all their trusted adults",
            icon: "TreePine"
          },
          {
            title: "Practice Reporting",
            description: "Role-play scenarios of when to tell a trusted adult",
            icon: "MessageSquare"
          }
        ]
      }
    ],
    resources: [
      {
        category: "Boundaries",
        links: [
          { title: "8 Ways to Teach Kids about Consent and Healthy Boundaries" },
          { title: "Growing Kids and Boundaries: Teaching Consent By Age and Stage" },
          { title: "Teaching Kids About Boundaries - Child Mind Institute" },
          { title: "Teaching your child to set boundaries with friends" },
          { title: "Why Children Need Boundaries: A Guide For Parents" }
        ]
      },
      {
        category: "Empathy",
        links: [
          { title: "Key Strategies to Teach Children Empathy" },
          { title: "The caring child: How to teach empathy (age 5)" },
          { title: "Empathy Activities for Kind and Not-Bored Kids" },
          { title: "Social Skills: Empathy at Age 5 | PBS KIDS for Parents" }
        ]
      }
    ]
  },
  {
    grade: "3-5",
    gradeLevel: "3rd-5th Grade",
    intro: "Now that your child understands the basis of empathy and emotions, they can begin learning more specifically about why these are foundational topics. With the advent of the internet, it's important to introduce topics related to internet safety.",
    highlightMessage: "Starting in 3rd grade, we introduce online safety and the clean and healthy rule as children gain more autonomy.",
    topics: [
      {
        id: "online-safety",
        title: "Online Safety",
        icon: "Globe",
        color: "bg-indigo-100 text-indigo-700",
        summary: "Navigating the internet safely and protecting private information",
        keyPoints: [
          "Private information tells someone more about who you are",
          "Only interact with people you know in real life",
          "Don't share photos, full name, or location online",
          "Tell a trusted adult about uncomfortable online interactions",
          "Strangers exist on social media AND gaming platforms"
        ],
        conversationStarters: [
          {
            scenario: "What is private information?",
            dialogues: [
              { speaker: "Parent", text: "What are some things about you that are private?" },
              { speaker: "Child", text: "My full name, where I live, my phone number?" },
              { speaker: "Parent", text: "Exactly! Even pictures of your face can tell strangers about you. That's why we keep them private." }
            ]
          }
        ],
        activities: [
          {
            title: "Public vs Private Game",
            description: "Sort information cards into 'okay to share' and 'keep private' categories",
            icon: "Lock"
          },
          {
            title: "Social Media Agreement",
            description: "Create a family agreement about safe social media use together",
            icon: "FileCheck"
          }
        ]
      },
      {
        id: "body-language",
        title: "Reading Body Language",
        icon: "User",
        color: "bg-cyan-100 text-cyan-700",
        summary: "Understanding how emotions show up in faces and bodies",
        keyPoints: [
          "Emotions show up on people's faces (smiling = happy, frowning = sad)",
          "Emotions show up in body language (crossed arms, clenched fists)",
          "We can respond to what bodies tell us, even without words",
          "Check body language before asking for hugs or touch"
        ],
        conversationStarters: [
          {
            scenario: "Reading emotions",
            dialogues: [
              { speaker: "Parent", text: "If someone's face is red and their fists are clenched, what might they be feeling?" },
              { speaker: "Child", text: "Angry or frustrated?" },
              { speaker: "Parent", text: "Right! So would that be a good time to ask them for a hug?" },
              { speaker: "Child", text: "Probably not - maybe they need space first." }
            ]
          }
        ],
        activities: [
          {
            title: "Emotion Charades",
            description: "Act out emotions using only face and body - others guess the feeling",
            icon: "Drama"
          },
          {
            title: "Feelings Journal",
            description: "Draw or describe how different emotions look and feel",
            icon: "BookOpen"
          }
        ]
      },
      {
        id: "clean-healthy",
        title: "Clean & Healthy Rule",
        icon: "Heart",
        color: "bg-pink-100 text-pink-700",
        summary: "Understanding who should help with private body parts",
        keyPoints: [
          "Only trusted adults keeping you clean or healthy should touch private areas",
          "You don't need as much help staying clean as you get older",
          "Doctors and nurses help keep you healthy during check-ups",
          "No adults should offer to help clean you - tell a trusted adult if this happens",
          "Tell a trusted adult about any confusing or uncomfortable touches"
        ],
        conversationStarters: [
          {
            scenario: "When is it okay?",
            dialogues: [
              { speaker: "Parent", text: "When you were little, I had to give you baths. Do you need that help now?" },
              { speaker: "Child", text: "No, I can do it myself now!" },
              { speaker: "Parent", text: "That's right! If someone offers to help you when you don't need it, what should you do?" },
              { speaker: "Child", text: "Say no and tell you about it." }
            ]
          }
        ]
      }
    ],
    resources: [
      {
        category: "Internet Safety",
        links: [
          { title: "Internet Safety for Kids - The Annie E. Casey Foundation" },
          { title: "8 Internet Safety Rules for Kids" },
          { title: "Be Internet Awesome" },
          { title: "A Guide to Internet Safety for Kids in 2025" },
          { title: "Internet Safety Activity Book" },
          { title: "Online Safety Worksheet" }
        ]
      },
      {
        category: "Body Language",
        links: [
          { title: "Nonverbal communication: body language and tone of voice" },
          { title: "3 Tips on Helping Kids Understand Emotions and Body Language" }
        ]
      },
      {
        category: "Boundaries + Consent",
        links: [
          { title: "Growing Kids and Boundaries: Teaching Consent By Age and Stage" }
        ]
      }
    ],
    faqs: [
      {
        question: "What, specifically, do I report about?",
        answer: "Remind your child that the same rules stand: anything that is out of the ordinary, makes them uncomfortable, or is unsafe, needs to be reported to a trusted adult. At this age, focus on internet topics like social media or video games, peer relationships, and the clean and healthy rule."
      }
    ]
  }
];
