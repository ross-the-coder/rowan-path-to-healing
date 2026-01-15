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
        fullContent: [
          "Spend some time reviewing boundaries with your child. You have discussed the basics of them in previous years, and now your child can likely verbalize them to you.",
          "Remind your child that it's okay to not want to hug or touch someone, even if they are family. They can use the word \"no\". Even phrases like \"no thanks,\" \"I'm okay,\" or \"I'm not sure\" count as a no.",
          "If someone disrespects their no, remind them to tell a trusted adult like yourself—we'll cover trusted adults this year, as well.",
          "As discussed in the permission section, modeling behavior to children is incredibly important. By modeling, we show children that adults also engage in this behavior, and encourage them to follow. One way that you can continue to model boundaries to your child is to let them know when you will be touching them and narrating the interaction. As young children, parents often do need to touch a child to keep them clean or healthy—so doing this will allow the child to know when a touch is safe.",
          "For example, if your child scrapes their knee, you can narrate what you are doing to keep them healthy. A sample script might be: I am touching your leg now to take a look at your knee. I am going to use this cleaner to make sure I get all of the dirt out. It may sting a little bit—just let me know if it hurts too much. I am going to touch the injury to put this ointment on. It will help your scrape feel better.",
          "Have a conversation with your child and see what their boundaries are. Do they not like being hugged by anyone other than you? Do they like having alone time for a little bit after school? It's helpful to work through this so that you can share a healthy relationship with your child."
        ],
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
        fullContent: [
          "Children need to be taught that their bodies are their own, and that they have the right to say 'NO' when it comes to who touches them and whom they touch.",
          "Children have the right to feel safe and be safe. Let children know they're the boss of their bodies.",
          "Never force hugs, kisses, or caresses - let them choose how to greet others (wave, high-five, etc.).",
          "Ask for permission before touching children and encourage them to do the same.",
          "Help children identify 'safe' adults - those who listen and don't make them feel uncomfortable.",
          "Talk about consent outside of the context of sex - borrowing items, posting photos, making plans.",
          "Use correct anatomical terms - avoiding alternative words sends the message that body parts are shameful."
        ],
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
        fullContent: [
          "Before kids start navigating the internet, it's important for them to understand and recognize what private information is.",
          "Private information includes any facts about yourself that tell someone more about who you are.",
          "They can include, but are not limited to: Full name, Age, Address, School name.",
          "Even pictures of ourselves are examples of private information. Share with your child that even just a photo of their face can tell someone on the internet a lot about who they are.",
          "For example, a child may be wearing a t-shirt with the name of their school on it in a photo. We shouldn't be sharing our faces or the name of our school on the internet, so we shouldn't post this photo!",
          "When talking to children about the internet, share with them the importance of only talking to people that they know. The goal is not to scare them, but to help them recognize that there are lots of strangers on the internet.",
          "Tell your child that the only people they should be interacting with on the internet are people from real life. This is the case because we know these are safe people who have our best interest in mind.",
          "In addition, tell your child that there are many strangers on the internet—just like there are many strangers in real life. We don't know these people at all, so sharing anything or interacting with them wouldn't be safe.",
          "It is also important to tell your child that there might be people who we know in real life who do engage in unsafe behaviors online. Tell your child that any behavior that would make them uncomfortable if a stranger did it is also not okay if it is somebody they know.",
          "Cover all platforms when discussing strangers with your child – whether that's social media or video games. Just as people can add someone on Instagram or Facebook, they can do the same on gaming platforms like Roblox or Fortnite.",
          "Now that your child has learned about the foundations of safe interactions on the internet, you can begin discussing the topic of scams.",
          "Share with your child that scams are a way for someone to get something from you in an unfair way.",
          "Tell them that there are many different ways people can scam someone else—whether it's saying there's a free item for a giveaway, or to ask for a credit card in exchange for an item that may not seem realistic for the price.",
          "Make sure your child knows that they can come to you or another trusted adult if they see something that looks suspicious, or could possibly be a scam. An adult can help them figure out if it's real.",
          "One big rule when it comes to scams is to never insert any personal information. This builds on previous discussions about private information you've had with your child—even if it's to get something free, tell them to approach a trusted adult no matter what.",
          "Ensure your child knows that the goal is to keep them safe; not to prevent them from finding cool things.",
          "We've covered the basics of refraining from talking to strangers online—but, now that video games have incorporated many ways for people to talk online, and these games are marketed to children, it's important to share more about video game safety.",
          "Many video games nowadays have chat features, even games that primarily market towards children. The same standards apply here as to social media—children shouldn't be interacting with others. Because we don't share our private information online, and others shouldn't as well, we don't know if these are people from real life. The only people we should be interacting with in video games are people we know in real life.",
          "Lots of video games also allow for players to make in-game purchases, whether it is for tokens or virtual items. Set ground rules with your child: are these purchases something that you or your family are willing to make? If so, tell the child that they need to ask permission before making these purchases. If not, you can have a conversation with your child about purchases that might be made in real life that could have more value (such as an experience or item)."
        ],
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
        fullContent: [
          "The clean and healthy rule covers two main topics: the only people that should ever ask permission to touch a child's body or look at their private parts are trusted adults who are keeping them clean or healthy.",
          "Clean: Share with your child that, when they were younger, they could not keep themselves clean. You or another caregiver had to do that for them, like giving them a bath.",
          "Now that they are older, though, they don't need help keeping themselves clean.",
          "Sometimes, though, there are times when they may need help—like if they have a cast that needs a special covering before a shower, or if they have hair on their head that they need help washing.",
          "Tell your child that no adults should be offering to help keep them clean, and if they do, to tell you or another trusted adult.",
          "Healthy: Talk to your child about the importance of making sure they are healthy. Sometimes, trusted adults like doctors or nurses need to look at or touch parts of their body to make sure they are healthy.",
          "These trusted adults will always explain what they are doing and why they need to touch or look at certain parts of the body.",
          "If someone is touching or looking at private parts and they are not keeping the child clean or healthy, that is not okay and the child should tell a trusted adult immediately."
        ],
        keyPoints: [
          "The only people allowed to touch or look at a child's private areas are guardians/caretakers or healthcare providers",
          "They are only allowed to do so when it is to keep the child clean and/or healthy",
          "As your child grows older, only healthcare providers should see their private areas for medical reasons",
          "No adults or older children should be showing a child their private areas or asking a child to touch their private areas",
          "Use correct anatomical terms for body parts - this helps children communicate clearly if something inappropriate happens"
        ]
      },
      {
        id: "social-media",
        title: "Social Media",
        icon: "Share2",
        color: "pink",
        summary: "Navigating social media safely with clear guidelines and agreements.",
        fullContent: [
          "In previous years, you've discussed the importance of keeping private information to yourself—whether that's your full name or pictures.",
          "Your child is likely starting to gain interest in using social media at this age.",
          "Similar standards reflect previous topics, such as refraining from interacting with strangers. When discussing social media, this means: Not answering direct messages from people we don't know. Not commenting on strangers' posts. Keeping our accounts—and therefore photos of ourselves, and things about us—private.",
          "You and your child can even make a social media agreement so that they can participate safely with guidance. Make a list of the agreements you and your child share—and make sure both of you follow them! Modeling the behavior you expect out of your child helps them recognize what is safe and appropriate.",
          "Follow your child on social media to see who they are interacting with and what they are posting. If anything questionable happens, you'll be able to intervene quickly."
        ],
        keyPoints: [
          "Don't answer direct messages from people you don't know",
          "Don't comment on strangers' posts",
          "Keep accounts private—photos and information about you should be protected",
          "Create a social media agreement together with clear guidelines",
          "Parents should follow their child on social media to monitor interactions"
        ]
      },
      {
        id: "bystander-intervention",
        title: "Bystander Intervention",
        icon: "Users",
        color: "orange",
        summary: "Teaching your child to be an upstander can make them feel empowered and confident when facing tough situations.",
        fullContent: [
          "Teaching your child to be an upstander can make them feel empowered and confident when facing tough situations.",
          "An upstander is someone who takes action to prevent or reduce bullying. A bystander is someone who sees bullying but chooses not to step in.",
          "By doing nothing, you send a message to the bully that their behavior is acceptable.",
          "It takes courage to be an upstander - it may start with becoming more aware of the bullying.",
          "There is strength in numbers - every school and community has more caring kids than bullies.",
          "What you can do as a bystander: Don't laugh, don't encourage, don't participate. Stay at a safe distance and help the target get away. Reach out in friendship. Support the victim privately. Tell an adult.",
          "Becoming an upstander means taking action by: getting others to stand up with you, helping the victim, redirecting the bully away, telling an adult who can help, telling the bully to stop.",
          "Small interventions can have big results. Two words - 'That's bullying' - can open others' eyes to recognize the problem."
        ],
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
        fullContent: [
          "Understanding the difference between secrets and surprises, and what information should stay private is crucial for your child's safety.",
          "Secrets: not meant to be told, someone could get hurt if kept, it's unfair for adults to ask kids to keep secrets.",
          "Surprises: only kept for a short time, everyone is happy when told.",
          "No one should ask a child to keep a secret from their parents, guardians, or teachers.",
          "Private information includes: full name, address, phone numbers, email, birthdate, school name, images, usernames/passwords, GPS location, family member names, health information.",
          "Personal information also includes pictures or videos that reveal details like school uniforms, street signs, or house numbers.",
          "Teach your child that if an adult asks them to keep a secret from you, they should tell you immediately. Secrets that adults ask children to keep are almost always unsafe."
        ],
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
        fullContent: [
          "Teaching students that reporting someone who is harming themselves or others is not snitching - it's reporting.",
          "Snitching/Tattling: reporting to an adult in bad faith, finding an issue within a safe situation.",
          "Reporting: telling a trusted adult about a dangerous situation, looking out for safety, speaking up when something is wrong or unsafe.",
          "A Trusted Adult is someone who: is reliable, caring, non-judgmental; will help and take action; will remain calm; respects boundaries.",
          "Trusted adults can be teachers, administrators, counselors, school staff, community members, parents, or relatives.",
          "Encourage your child to make a list of trusted adults collaboratively. Make sure the list includes at least one school staff member.",
          "Model being a trusted adult: Listen without judgment, assist and take action, remain calm when child reaches out, respect their boundaries, help identify other trusted adults.",
          "Spend time with your child every day. Any time is better than no time. Make it dedicated to connection, not just about safety topics."
        ],
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
        fullContent: [
          "Sexual harassment can be words, such as inappropriate comments or language towards others. These comments have to do with someone's looks or gender.",
          "Sexual harassment can also be physical. It is any touch, on any part of the body.",
          "Physical sexual harassment isn't always necessarily sexual. It becomes sexual harassment when it has to do with someone's body.",
          "It can sometimes be tricky to tell whether or not something is sexual harassment. A good way to explain it is through this example.",
          "One day at school, someone bumps into you in the hallway. They apologize, and you keep going on with your day. This would NOT be considered sexual harassment. Though the person touched someone when it wasn't wanted, it was an accident and not repeated again.",
          "One day at school, someone bumps into you in the hallway. They apologize, and you keep going on with your day. The next day, though, it happens again. It keeps happening every day for an entire week. This WOULD be considered sexual harassment. Though it seems like the first time was unintentional, the person continued to touch someone else when it was unwanted and it continued to happen. When that is the case, it is not an accident.",
          "Some more questions to talk about with your child are: How many times do you think you can ask someone out after they say no?",
          "This question might get a few different responses from your child. Here are some that you might hear, and ways to engage.",
          "0 Times: Your child might say that when someone says no, that means no. They could also add that it wouldn't be appropriate to disrespect someone else's wishes. In this case, you can talk to your child about how else they have come to this conclusion.",
          "1 Time: Your child might state that they would not repeatedly ask someone, but might ask again if the context of the situation has changed. For example, they could share that they might ask a year later, when they've gotten closer to the person, or if that person is now out of a relationship. In this case, you can ask your child what other scenarios they think it might be appropriate to ask one more time—and what scenarios it wouldn't make sense to ask again.",
          "2+ Times: Your child could share that they would ask someone else multiple times to go out with them. For example, they may share that the context could change, similarly to children who share that they would ask one more time. However, some children might state that the person might change their mind if they keep asking. In this case, discuss with your child the importance of letting people come to their own conclusions—for example, if you ask someone out and they say no, you can see if they eventually come to you to ask them out, and then you know it's real versus asking them out multiple times.",
          "What can you do or say if someone says no when you ask them out?",
          "You can start with discussing how your child might feel when turning someone down. Might they feel sorry, anxious, embarrassed, upset? Why? This discussion can help build empathy in understanding how the person that might turn them down would be feeling.",
          "You can then discuss how your child would want someone who asked them out to respond if turned down. Would they prefer someone quiet, loud, neutral, upset? The response here will typically be neutral and kind. This conversation can help shape how your child might respond.",
          "Now, you can ask your child what they can say when someone says no when they ask them out. Here are some examples of what they could say:",
          "\"No problem.\" - This tells the other person that their no is neutral.",
          "\"Thanks for being open with me.\" - This makes the other person feel as though they've been listened to.",
          "\"No worries. Let me know if you ever want to do anything.\" - This leaves the door open, but invites the other person to make the first move.",
          "\"That's just fine.\" - This tells the other person that their response is okay and has not deeply affected them.",
          "Finally, you can talk to your child about what they might do when someone says no when they ask them out. It might be helpful to go over things that they shouldn't do, such as yelling, hurting, or pressuring. However, make sure to tell your child that it is okay and normal to be upset if someone turns them down. It's important to make sure, however, that our responses do not make the other person feel upset, too."
        ],
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
        fullContent: [
          "Sexual assault is any unwanted touch to an intimate area of the body.",
          "In Connecticut, the parts of the body considered intimate are the chest, butt, genitals, and inner thighs.",
          "You can share with your child that they can label any parts of their body as intimate, whether that's their hair, legs, arms, and so forth. It's important that children know that they have the right to decide their body boundaries.",
          "However, you can let your child know that touching of any of these parts of their body only would fall under sexual harassment.",
          "When thinking of the differences between sexual harassment and sexual assault, your child may wonder whether someone who continues hugging them without permission.",
          "In this case, hugging would fall under sexual harassment, because it has to do with touch of the body.",
          "However, you can tell your child that if a person also touches an intimate part of their body when hugging them, that crosses the line into sexual assault."
        ],
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
        fullContent: [
          "Five different methods to support someone who's being harassed: Distract, Delegate, Document, Delay, and Direct.",
          "Distract: Create a distraction to interrupt the behavior (start a conversation, ask a random question, shift attention). This can help de-escalate a situation without directly confronting the harasser.",
          "Delegate: Get help from an adult, teacher, counselor, or another student in authority. Sometimes the best way to help is to bring in someone who can intervene safely.",
          "Document: Record what happened if safe - write down details (who, when, where, what). Only record video/photos if safe and with permission. Documentation can be important for reporting later.",
          "Delay: Check in afterward - 'Are you okay?' or 'I saw what happened' shows support and care. Sometimes the most important thing is to let someone know they're not alone.",
          "Direct: When safe, speak up clearly and calmly - 'That's not okay' or 'Leave them alone'. This should only be done if you feel safe doing so.",
          "IMPORTANT: Never share documentation without the person's consent - being harassed is already disempowering. Always ask before sharing any photos, videos, or written accounts of what happened."
        ],
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
        fullContent: [
          "Sexting is when someone sends intimate content through text message, social media direct message, or other messaging system or app.",
          "It can include written content, images, or videos—and even emojis.",
          "For example, the eggplant emoji is often used when sexting in reference to male genitalia.",
          "Make sure to talk to your child about sexting—even if this seems like a young age to discuss it. One of the most important reasons to discuss sexting at this age is to ensure children know that any intimate images of themselves or their peers are considered Child Sexual Abuse Material.",
          "Child Sexual Abuse Material (or CSAM) is any visual depiction of sexual conduct involving a minor, which is a person less than 18 years old.",
          "In the past, it has been called child pornography—it's important to use the new language because children cannot consent to creating pornography.",
          "Any images created or sent by minors are considered CSAM, even if they agreed to taking or sending the photo. Just because they might have agreed does not mean they consented — again, anyone below the age of 18 cannot consent to taking or sending intimate photos of their bodies.",
          "Our goal is not to get them into trouble for CSAM-related charges. Our goal is to teach minors about the risks to lessen their chances of engaging in this behavior.",
          "One way to have this conversation with your child is to discuss risks that may come with sexting. Have your child generate some ideas, then go through this list together:",
          "Sexting under 18 is considered Child Sexual Abuse Material. The person might get in trouble for sending the photo.",
          "The photo might get screenshotted and shared around or posted online.",
          "Random people might be able to see a private photo."
        ],
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
        fullContent: [
          "Sextortion is a way people try to scam, or get something else out of, someone else. It's a harmful behavior that can hurt others.",
          "Sextortion typically starts when someone believes they are communicating with someone else their own age who is interested in a relationship, or might have something else important, like money or fame.",
          "The person on the other end of the line—whether that's on social media, text, or even video games—could be someone your child knows or a stranger.",
          "This person wants to get the target to trust them in order to send intimate photos or videos.",
          "After the perpetrators have received intimate material from their target, they threaten to publish or send that content—or even threaten violence—to get the victim to send more money or intimate content.",
          "Children who experience sextortion often feel shame, fear, and confusion. This can make them less likely to ask for help or report the sextortion.",
          "No matter if your child has sent any images, videos, or even money, they are still a victim of a crime and none of this is their fault.",
          "It's important to share with your child that the best way to get out of this sort of situation is to refuse to send money, save all messages with the perpetrator, and speak to a trusted adult.",
          "The police can support you and your child when a case of sextortion occurs.",
          "The National Center for Missing and Exploited Children (NCMEC) has a program called Take It Down that can help remove intimate images of minors from the internet. It is done safely with an uploaded photo that is then tagged to locate other copies of the photo on the internet."
        ],
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
        fullContent: [
          "CSAM is any visual depiction of sexually explicit conduct involving a minor (person less than 18 years old).",
          "These are not just pictures or videos - they are records of real children being sexually abused.",
          "Once uploaded, it can be shared endlessly with the click of a button.",
          "Previously called 'child pornography' - important to use new language because children cannot consent to creating pornography.",
          "Any images created or sent by minors are considered CSAM, even if they consented. Just because a minor agreed to take or send a photo does not mean they legally consented - anyone below the age of 18 cannot consent to creating intimate images.",
          "CSAM includes: sexual acts involving a minor, images of child's genitals/private areas, live-streamed abuse, AI-generated content, any content that sexualizes or exploits a child.",
          "Our goal is not to get minors in trouble, but to teach about risks and lessen chances of engaging in this behavior. We want to protect children, not punish them."
        ],
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
        fullContent: [
          "Title IX aims to protect students from sex and gender-based discrimination in education programs or activities that receive federal funding.",
          "Student rights from Title IX: get an equal education, be free from discrimination, feel safe at school, report sexual harassment.",
          "Schools must take action to prevent sexual harassment.",
          "Once a school is made aware of sexual violence, they are legally obligated to respond.",
          "Once the Title IX office or designated employee is aware, they must respond - no excuse.",
          "Students can file complaints with the Office of Civil Rights (OCR) and have the right to appeal determinations.",
          "Appeals must be filed within 60 calendar days and cannot exceed 10 pages (double-spaced).",
          "Can file complaints through state (Commission on Human Rights and Opportunities) or federal agencies (Office for Civil Rights - US Department of Education).",
          "Title IX originally aimed for equality in scholastic sports programs. If one sports team gets better facilities that affect academics, that may be a Title IX violation."
        ],
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
        fullContent: [
          "Understanding the difference between snitching and reporting, and identifying trusted adults is crucial for your child's safety.",
          "Snitching/Tattling: reporting to an adult in bad faith, finding an issue within a safe situation.",
          "Reporting: telling a trusted adult about a dangerous situation, looking out for safety, speaking up when something is wrong.",
          "A Trusted Adult: reliable, caring, non-judgmental; will help and take action; remains calm; respects boundaries.",
          "Encourage collaborative creation of a trusted adult list - make sure it includes at least one school staff member.",
          "Being a trusted adult requires practice and effort - it's okay to have strong emotions but remain calm when a child discloses something.",
          "Help your child understand that reporting is about keeping people safe, not about getting someone in trouble. It's an act of care and protection."
        ],
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
        fullContent: [
          "Review and practice the five methods to support someone who's being harassed: Distract, Delegate, Document, Delay, and Direct.",
          "Distract: Create a distraction to interrupt the behavior. This can help de-escalate a situation without directly confronting the harasser.",
          "Delegate: Get help from someone in authority. Sometimes the best way to help is to bring in someone who can intervene safely.",
          "Document: If safe, record details or evidence (but never share without consent). Documentation can be important for reporting later.",
          "Delay: Check in afterward to show support. Sometimes the most important thing is to let someone know they're not alone.",
          "Direct: When safe, speak up clearly and calmly against the behavior. This should only be done if you feel safe doing so.",
          "Remember: Being harassed is already disempowering - don't make it worse by publicizing footage without consent. Always ask before sharing any photos, videos, or written accounts of what happened."
        ],
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
        fullContent: [
          "Review of sexting risks and how to report non-consensual intimate images.",
          "Sexting is when someone sends intimate content through text message, social media direct message, or other messaging system or app. It can include written content, images, or videos—and even emojis.",
          "Sexting can lead to sextortion, school trouble, bullying, or legal issues.",
          "Any intimate images of minors are considered Child Sexual Abuse Material (CSAM), even if they agreed to taking or sending the photo. Anyone below the age of 18 cannot consent to creating intimate images.",
          "Report NCII (Non-Consensual Intimate Images) to: website/app, CyberTipline.org, police, or trusted adult.",
          "Use Take It Down service from NCMEC to remove images without sharing them. It is done safely with an uploaded photo that is then tagged to locate other copies of the photo on the internet.",
          "Never share intimate images without explicit permission from the person in them. Even if someone sent you an image, you don't have the right to share it with others."
        ],
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
        fullContent: [
          "Understanding and preventing sextortion attempts is crucial for your child's safety.",
          "Sextortion is a way people try to scam, or get something else out of, someone else. It's a harmful behavior that can hurt others.",
          "Sextortion starts when perpetrators gain trust and obtain intimate images. The person on the other end could be someone your child knows or a stranger on social media, text, or even video games.",
          "They then threaten to publish content unless victim sends more money, photos, or videos. They may also threaten violence.",
          "It is NEVER the victim's fault, regardless of what was sent. No matter if your child has sent any images, videos, or even money, they are still a victim of a crime.",
          "Best response: don't send money, save all messages, tell a trusted adult immediately.",
          "Police and NCMEC's Take It Down program can help. The police can support you and your child when a case of sextortion occurs, and Take It Down can help remove intimate images of minors from the internet."
        ],
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
        fullContent: [
          "Understanding CSAM and how to stay safe online is essential as your child prepares for high school.",
          "CSAM is any visual depiction of sexually explicit conduct involving a minor (person less than 18 years old).",
          "These are not just pictures or videos - they are records of real children being sexually abused. Once uploaded, it spreads endlessly - this is real abuse of real children.",
          "Previously called 'child pornography' - important to use new language because children cannot consent to creating pornography.",
          "Any images created or sent by minors count as CSAM, even with consent. Just because a minor agreed to take or send a photo does not mean they legally consented.",
          "Talk with kids about: body boundaries, consent including online boundaries, what to do if someone makes them uncomfortable.",
          "Monitor tech use - not just the screen, but behavior changes. Watch for warning signs: withdrawal, anxiety, inappropriate sexual knowledge, avoidance behaviors, grade drops.",
          "Our goal is not to get minors in trouble, but to teach about risks and lessen chances of engaging in this behavior."
        ],
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
