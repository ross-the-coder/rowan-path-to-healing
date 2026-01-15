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
  fullContent?: string[];
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
        fullContent: [
          "It's important that your child practices what permission looks like in practice.",
          "One goal is to have children ask to use something belonging to someone else before taking it. You can practice this with your child by passing a belonging back and forth while modeling permission language. For example:",
          "Parent: Can I borrow the item you're holding?",
          "Child: Yes. (hands parent item)",
          "Child: Can I borrow the item you're holding?",
          "Parent: Yes. (hands child item)",
          "Another important topic is to have children ask before touching someone else. You can practice this in a similar way while modeling the language. For example:",
          "Parent: Can I give you a hug?",
          "Child: Yes. (hugs parent)",
          "Child: Can I give you a hug?",
          "Parent: Yes. (hugs child)",
          "You can also discuss what to do when someone else says \"no\". Repeat these example scenarios with your child, with the answer being no instead, and model appropriate responses, such as:",
          "That's okay!",
          "That's fine!",
          "No problem!",
          "Talk to your child about how they might feel if somebody says \"no\" to them. Do they feel neutral, sad, angry? Tell them that those feelings are normal to have, and they can talk to a trusted adult about them."
        ],
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
        fullContent: [
          "Children have their own boundaries—even if it's hard to verbalize them. It's important to teach children the words they can use to set boundaries with others.",
          "Tell your child that it's okay to not want to hug or touch someone, even if they are family. They can use the word \"no\". Even phrases like \"no thanks,\" \"I'm okay,\" or \"I'm not sure\" count as a no.",
          "If someone disrespects their no, remind them to tell a trusted adult like yourself—we'll cover trusted adults this year, as well.",
          "As discussed in the permission section, modeling behavior to children is incredibly important. By modeling, we show children that adults also engage in this behavior, and encourage them to follow. One way that you can continue to model boundaries to your child is to let them know when you will be touching them and narrating the interaction. As young children, parents often do need to touch a child to keep them clean or healthy—so doing this will allow the child to know when a touch is safe.",
          "For example, if your child scrapes their knee, you can narrate what you are doing to keep them healthy. A sample script might be:",
          "I am touching your leg now to take a look at your knee.",
          "I am going to use this cleaner to make sure I get all of the dirt out. It may sting a little bit—just let me know if it hurts too much.",
          "I am going to touch the injury to put this ointment on. It will help your scrape feel better."
        ],
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
        fullContent: [
          "Children experience a wide range of emotions—and it's important to not make them seem either negative or positive. Labeling emotions as neutral, whether they are ours or our child's, allows the child to recognize that feelings are normal.",
          "We want children to be able to feel, identify, and handle the emotions that come up.",
          "To start, we can teach children how to identify their emotions—whether they are strong or quiet. We can talk about how they might feel inside, or how their bodies might react.",
          "Happy: smiling, bouncy, giggling",
          "Calm: quiet, relaxed, slow breathing",
          "Sad: teary, quiet, ball in throat",
          "Angry: tight muscles, words that feel like they're going to spill out",
          "With your child, make a plan for how they might handle their emotions. What emotions are hard for them to handle? How can they return to a calm baseline? What emotions do they enjoy feeling?",
          "To return to a calm baseline, you can recommend:",
          "Talking to a trusted adult about how they're feeling.",
          "Mindfulness exercises for kids, like taking a few deep breaths in and out or coloring.",
          "Letting energy out safely, like running around or playing."
        ],
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
        fullContent: [
          "From a young age, it's important to incorporate recognizing the feelings of others into conversations with children.",
          "Now that we've taught them about their own emotions, we can teach them how to recognize the same feelings in others.",
          "Have your child practice questioning how others might feel based on the actions they take or words they might say. For example:",
          "If someone took something that belongs to you without your permission, how might you feel?",
          "Given that, how do we think somebody might feel if we took something that belonged to them without their permission?"
        ],
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
        fullContent: [
          "At this age, we should encourage children to talk to the trusted adults in their lives when they feel uncomfortable, when something is wrong, and when someone doesn't follow the rules.",
          "Share with your child that the following things should always be shared with a trusted adult:",
          "If they feel unsafe for any reason",
          "If someone asks them to keep a secret",
          "If someone hurts their emotions",
          "If someone hurts their body",
          "If they know someone else got hurt",
          "Making a list of trusted adults with your child is a great way to prepare them with a safe, reliable group of people to approach if they encounter a situation where adult intervention is needed.",
          "One way you can create this list with your child is by working on an activity called the Telling Tree. Work with your child to come up with one trusted adult to put in each section of the tree. This is a great way to start a discussion, including the following questions:",
          "How has this adult shown that they are safe?",
          "What kinds of things can I tell this person?",
          "Make sure, when doing this activity, that your child has people from multiple different aspects of their life, including: home, school, activities, etc."
        ],
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
      },
      {
        id: "clean-healthy-rule-k",
        title: "Clean & Healthy Rule",
        icon: "Heart",
        color: "bg-pink-100 text-pink-700",
        summary: "Understanding who should help with private body parts",
        fullContent: [
          "The clean and healthy rule covers two main topics: the only people that should ever ask permission to touch a child's body or look at their private parts are trusted adults who are keeping them clean or healthy.",
          "At this age, you can begin to talk to your child about who is safe to give permission to look at or touch their body, and why this is the case.",
          "Clean: Share with your child that, when they were very small, they could not keep themselves clean. You or another caregiver had to do that for them, like giving them a bath.",
          "Now that they are older, though, they don't need as much help keeping themselves clean.",
          "Sometimes, though, there are times when they may need help—like if they have a cast that needs a special covering before a shower, or if they have hair on their head that they need help washing.",
          "Tell your child that no adults should be offering to help keep them clean, and if they do, to tell you or another trusted adult.",
          "Healthy: Talk to your child about the importance of making sure they are healthy and growing properly. At yearly checkups, their pediatrician does need to look at or touch their private parts (of course, with their guardian's permission).",
          "However, a doctor or medical provider who is not doing a checkup or making sure they are healthy does not count as a doctor who can look at or touch their private parts. For example, a doctor who is making sure a child's foot is healing from a break does not need to look at their private parts.",
          "Remind your child that you will be in the room with them, and if they ever feel uncomfortable, you can set up a signal—like a hand squeeze or a special word.",
          "Tell your child that when it doesn't make sense for a doctor or medical provider to be looking at specific areas of the body, they shouldn't be doing so, and to tell you or another trusted adult."
        ],
        keyPoints: [
          "Only trusted adults keeping you clean or healthy should touch private areas",
          "You don't need as much help staying clean as you get older",
          "Doctors and nurses help keep you healthy during check-ups",
          "No adults should offer to help clean you - tell a trusted adult if this happens",
          "Tell a trusted adult about any confusing or uncomfortable touches"
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
    grade: "1",
    gradeLevel: "1st Grade",
    intro: "First grade is an exciting time of growth and independence. Children are developing stronger social connections and beginning to understand more complex concepts about personal safety, boundaries, and healthy relationships.",
    topics: [
      {
        id: "permission-1st",
        title: "Permission",
        icon: "HandHeart",
        color: "bg-blue-100 text-blue-700",
        summary: "Continuing to reinforce asking before taking or touching",
        fullContent: [
          "It's important that your child practices what permission looks like in practice.",
          "One goal is to have children ask to use something belonging to someone else before taking it. You can practice this with your child by passing a belonging back and forth while modeling permission language. For example:",
          "Parent: Can I borrow the item you're holding?",
          "Child: Yes. (hands parent item)",
          "Child: Can I borrow the item you're holding?",
          "Parent: Yes. (hands child item)",
          "Another important topic is to have children ask before touching someone else. You can practice this in a similar way while modeling the language. For example:",
          "Parent: Can I give you a hug?",
          "Child: Yes. (hugs parent)",
          "Child: Can I give you a hug?",
          "Parent: Yes. (hugs child)",
          "You can also discuss what to do when someone else says \"no\". Repeat these example scenarios with your child, with the answer being no instead, and model appropriate responses, such as:",
          "That's okay!",
          "That's fine!",
          "No problem!",
          "Talk to your child about how they might feel if somebody says \"no\" to them. Do they feel neutral, sad, angry? Tell them that those feelings are normal to have, and they can talk to a trusted adult about them."
        ],
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
        id: "boundaries-1st",
        title: "Boundaries",
        icon: "Shield",
        color: "bg-purple-100 text-purple-700",
        summary: "Helping children understand and set their own boundaries",
        fullContent: [
          "Children have their own boundaries—even if it's hard to verbalize them. It's important to teach children the words they can use to set boundaries with others.",
          "Tell your child that it's okay to not want to hug or touch someone, even if they are family. They can use the word \"no\". Even phrases like \"no thanks,\" \"I'm okay,\" or \"I'm not sure\" count as a no.",
          "If someone disrespects their no, remind them to tell a trusted adult like yourself—we'll cover trusted adults this year, as well.",
          "As discussed in the permission section, modeling behavior to children is incredibly important. By modeling, we show children that adults also engage in this behavior, and encourage them to follow. One way that you can continue to model boundaries to your child is to let them know when you will be touching them and narrating the interaction. As young children, parents often do need to touch a child to keep them clean or healthy—so doing this will allow the child to know when a touch is safe.",
          "For example, if your child scrapes their knee, you can narrate what you are doing to keep them healthy. A sample script might be:",
          "I am touching your leg now to take a look at your knee.",
          "I am going to use this cleaner to make sure I get all of the dirt out. It may sting a little bit—just let me know if it hurts too much.",
          "I am going to touch the injury to put this ointment on. It will help your scrape feel better."
        ],
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
        id: "emotions-1st",
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
        id: "empathy-1st",
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
        id: "trusted-adults-1st",
        title: "Trusted Adults",
        icon: "Users",
        color: "bg-rose-100 text-rose-700",
        summary: "Knowing who to talk to when something is wrong",
        fullContent: [
          "At this age, we should encourage children to talk to the trusted adults in their lives when they feel uncomfortable, when something is wrong, and when someone doesn't follow the rules.",
          "Share with your child that the following things should always be shared with a trusted adult:",
          "If they feel unsafe for any reason",
          "If someone asks them to keep a secret",
          "If someone hurts their emotions",
          "If someone hurts their body",
          "If they know someone else got hurt",
          "Making a list of trusted adults with your child is a great way to prepare them with a safe, reliable group of people to approach if they encounter a situation where adult intervention is needed.",
          "One way you can create this list with your child is by working on an activity called the Telling Tree. Work with your child to come up with one trusted adult to put in each section of the tree. This is a great way to start a discussion, including the following questions:",
          "How has this adult shown that they are safe?",
          "What kinds of things can I tell this person?",
          "Make sure, when doing this activity, that your child has people from multiple different aspects of their life, including: home, school, activities, etc."
        ],
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
      },
      {
        id: "body-language-1st",
        title: "Reading Body Language",
        icon: "User",
        color: "bg-cyan-100 text-cyan-700",
        summary: "Understanding how emotions show up in faces and bodies",
        fullContent: [
          "In previous years, your child has learned more about their own emotions and how they can have empathy for others. At this age, discussing the emotions other people have, and how they show up through their bodies, is a helpful way to promote connection and empathy.",
          "First, talk to your child about different things people's faces may show. You can share these examples with them to get the conversation started.",
          "What do emotions look like on my face?",
          "For example, a child may say they know they are happy when they smile.",
          "What do emotions look like on other people's faces?",
          "For example, a child may say that they can tell when their friend is sad because they will be frowning.",
          "Next, talk to your child about different things people's bodies may show.",
          "What do emotions look like on my body?",
          "For example, a child may say that they know they are frustrated when they are crossing their arms.",
          "What do emotions look like on other people's bodies?",
          "For example, a child may say that they can tell when their friend is excited when they are standing on their tip toes.",
          "Finally, talk to your child about how we can react to what other people's faces and bodies are telling us, even though it's not with words.",
          "For example, if we see through someone's body language that they are angry (their fists are clenched, their face is red), should we ask them if it's okay if we hug them?"
        ],
        keyPoints: [
          "Emotions show up on people's faces (smiling = happy, frowning = sad)",
          "Emotions show up in body language (crossed arms, clenched fists)",
          "We can respond to what bodies tell us, even without words",
          "Check body language before asking for hugs or touch"
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
        id: "clean-healthy-1st",
        title: "Clean & Healthy Rule",
        icon: "Heart",
        color: "bg-pink-100 text-pink-700",
        summary: "Understanding who should help with private body parts",
        fullContent: [
          "The clean and healthy rule covers two main topics: the only people that should ever ask permission to touch a child's body or look at their private parts are trusted adults who are keeping them clean or healthy.",
          "At this age, you can begin to talk to your child about who is safe to give permission to look at or touch their body, and why this is the case.",
          "Clean: Share with your child that, when they were very small, they could not keep themselves clean. You or another caregiver had to do that for them, like giving them a bath.",
          "Now that they are older, though, they don't need as much help keeping themselves clean.",
          "Sometimes, though, there are times when they may need help—like if they have a cast that needs a special covering before a shower, or if they have hair on their head that they need help washing.",
          "Tell your child that no adults should be offering to help keep them clean, and if they do, to tell you or another trusted adult.",
          "Healthy: Talk to your child about the importance of making sure they are healthy and growing properly. At yearly checkups, their pediatrician does need to look at or touch their private parts (of course, with their guardian's permission).",
          "However, a doctor or medical provider who is not doing a checkup or making sure they are healthy does not count as a doctor who can look at or touch their private parts. For example, a doctor who is making sure a child's foot is healing from a break does not need to look at their private parts.",
          "Remind your child that you will be in the room with them, and if they ever feel uncomfortable, you can set up a signal—like a hand squeeze or a special word.",
          "Tell your child that when it doesn't make sense for a doctor or medical provider to be looking at specific areas of the body, they shouldn't be doing so, and to tell you or another trusted adult."
        ],
        keyPoints: [
          "Only trusted adults keeping you clean or healthy should touch private areas",
          "You don't need as much help staying clean as you get older",
          "Doctors and nurses help keep you healthy during check-ups",
          "No adults should offer to help clean you - tell a trusted adult if this happens",
          "Tell a trusted adult about any confusing or uncomfortable touches"
        ]
      },
      {
        id: "joking-vs-mean-1st",
        title: "Joking vs. Being Mean",
        icon: "MessageCircle",
        color: "bg-orange-100 text-orange-700",
        summary: "Understanding the difference between jokes and mean behavior",
        fullContent: [
          "Now that you've covered emotions, empathy, and recognizing body language with your child, you can begin to discuss the importance of words when it comes to interacting with others.",
          "At this age, recognizing what comes across as a joke or as mean is a great way to help your child understand not only their own interactions, but also the world around them.",
          "The golden rule when it comes to joking versus being mean is that a joke is never about something somebody cannot change about themselves, or something about who they are. This can include:",
          "The way they look.",
          "The clothes they wear.",
          "The food they eat.",
          "When discussing these topics, you can begin to touch lightly on some of the more difficult topics surrounding meanness. Though your child may not fully be able to understand topics such as racism or homophobia, they will be able to recognize how the behaviors and language that fall under these topics are mean.",
          "For example, you can talk to your child about how it's never okay to make fun of someone's skin color. This is because this is about the way they look, which is something somebody cannot change about themselves. You can also add that many people in the world do make fun of others' skin colors, and it's been happening for a long time, but that does not make it okay.",
          "As with every group of children, this generation has its own slang. When kids start to say words that have a mean connotation, as if they were a joke, have a conversation with your child about the words' meaning and how they were using the word.",
          "For example, the slang phrase \"big back\" has surged in popularity. It typically means someone who eats a lot, or is overweight. Talk to your child about whether or not they've heard this phrase, in what context, and whether they would use it. Some children may use this phrase jokingly, but make sure to discuss that the intention does not always equal the impact."
        ],
        keyPoints: [
          "A joke is never about something someone cannot change about themselves",
          "Jokes shouldn't be about how someone looks, their clothes, or what they eat",
          "Mean behavior includes making fun of things people can't change",
          "Intention doesn't always equal impact - even if meant as a joke, it can still be mean",
          "Talk about slang words that might seem funny but are actually mean"
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
    grade: "2",
    gradeLevel: "2nd Grade",
    intro: "Second graders are becoming more aware of social dynamics and relationships. This is an important year to reinforce concepts of consent, boundaries, and personal safety in age-appropriate ways.",
    topics: [
      {
        id: "permission-2nd",
        title: "Permission",
        icon: "HandHeart",
        color: "bg-blue-100 text-blue-700",
        summary: "Continuing to reinforce asking before taking or touching",
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
        id: "boundaries-2nd",
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
        id: "emotions-2nd",
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
        id: "empathy-2nd",
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
        id: "trusted-adults-2nd",
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
    grade: "3",
    gradeLevel: "3rd Grade",
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
  },
  {
    grade: "4",
    gradeLevel: "4th Grade",
    intro: "Fourth graders are developing more independence online and offline. This grade focuses on deeper understanding of internet safety, body autonomy, and recognizing uncomfortable situations.",
    highlightMessage: "Building on 3rd grade concepts with increased focus on digital citizenship and personal safety.",
    topics: [
      {
        id: "online-safety-4th",
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
        id: "body-language-4th",
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
        id: "clean-healthy-4th",
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
  },
  {
    grade: "5",
    gradeLevel: "5th Grade",
    intro: "Fifth grade marks a transition toward middle school. Students are navigating more complex social situations and need tools to handle peer pressure, healthy relationships, and online safety.",
    highlightMessage: "Preparing for middle school with comprehensive safety education and relationship skills.",
    topics: [
      {
        id: "online-safety-5th",
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
        id: "body-language-5th",
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
        id: "clean-healthy-5th",
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
