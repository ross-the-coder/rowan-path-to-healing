export interface FAQ {
  id: number;
  question: string;
  answer: string;
  grades: string[];
  topics: string[];
}

export const faqData: FAQ[] = [
  {
    id: 1,
    question: "What are things that I should report about?",
    answer: "Tell your child that anything that is out of the ordinary, makes them uncomfortable, or is unsafe, needs to be reported to a trusted adult. At this age, focusing on internet topics, peer relationships, and the clean and healthy rule are the most appropriate.",
    grades: ["3rd", "4th", "5th", "6th"],
    topics: ["Reporting", "Trusted adults"]
  },
  {
    id: 2,
    question: "My friends and I joke around but we sometimes say mean things as a joke and we both get it and laugh. What do we do?",
    answer: "Always keep open communication between you and your friends. Now that you know more about body language and how to tell others' emotions, you can usually tell pretty quickly whether someone feels uncomfortable. If you see this is the case, it's no longer a joke. Even before telling the joke, check in with your friend and see if they think it's funny or not.",
    grades: ["5th", "6th"],
    topics: ["Joking vs. being mean"]
  },
  {
    id: 3,
    question: "What if I feel uncomfortable with the doctor checking my private parts? Can I say no to the doctor?",
    answer: "You can always say out loud if something at the doctor feels uncomfortable, and you can also ask more questions about the exam and why you are getting it. You can also ask if there are any things that can be done to make you feel more comfortable, like having a nurse in the room during the check up instead of your grown-up, if you can get the exam next time you go, or if you want a doctor who is the same gender as you to do the exam. You may still have to get the exam, because your grown-ups are in charge of your healthcare, but you can always say it out loud if you are feeling uncomfortable and ask what they can do about it.",
    grades: ["5th", "6th"],
    topics: ["Clean and healthy rule"]
  },
  {
    id: 4,
    question: "What age do I have to be before I can start using Snapchat, Instagram, or TikTok?",
    answer: "Different families have different rules about what age you can use social media. Even though these apps say you have to be 13 to use them, this is because that's the age when advertisers can promote products to young people–it doesn't always mean that that is the age when someone is ready. Different people might be mature enough or ready at different ages, and families might have different rules for keeping everyone safe. You can talk to your grown-up about looking at reviews on Common Sense Media to see what other people think.",
    grades: ["5th", "6th", "7th"],
    topics: ["Social media"]
  },
  {
    id: 5,
    question: "Are feet pics private information or child sexual abuse material?",
    answer: "Even though feet are not usually considered private parts of the body, some adults want pictures of feet for adult reasons. No one should ever ask a young person for pictures of their feet, because it is for adult activities.",
    grades: ["5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"],
    topics: ["Private information", "Child sexual abuse material (CSAM)"]
  },
  {
    id: 6,
    question: "What if someone sends me an explicit photo? Should I screenshot it to show to a trusted adult or should I delete it off my phone?",
    answer: "Definitely don't screenshot the photo. Delete it off your phone as soon as possible. Save the texts around it, though, and show those to a trusted adult.",
    grades: ["7th", "8th", "9th", "10th", "11th", "12th"],
    topics: ["Sexting"]
  },
  {
    id: 7,
    question: "What if someone is sextorting me? Should I delete everything or save it?",
    answer: "If someone is sextorting you, you should keep everything, including any photos you may have sent. Bring all of this to a trusted adult. The photo can be uploaded to NCMEC's Take It Down feature to help get it removed across the internet.",
    grades: ["7th", "8th", "9th", "10th", "11th", "12th"],
    topics: ["Sextortion"]
  },
  {
    id: 8,
    question: "How can I flirt with someone without sexually harassing them?",
    answer: "One of the ways you can tell if something is sexual harassment is if the behavior is unwanted and repeated. Are you constantly flirting with someone, and they aren't flirting back? If so, that would be an example of sexual harassment. A good way to avoid this is to think about your intentions and expectations going into flirting with someone. What are you looking for from this person? What do you expect from them in return for flirting with them?",
    grades: ["7th", "8th", "9th", "10th", "11th", "12th"],
    topics: ["Sexual harassment"]
  },
  {
    id: 9,
    question: "What if I report sexual harassment or sexual assault at school and they don't do anything?",
    answer: "Sometimes the rules and processes in place don't work the way they're supposed to. You can think of the other trusted adults in your life to talk to, and approach them to discuss this.",
    grades: ["7th", "8th", "9th", "10th", "11th", "12th"],
    topics: ["Title IX"]
  },
  {
    id: 10,
    question: "What if someone gives consent and then changes their mind?",
    answer: "Someone cannot give consent and take it back at a later date (this does not apply to withdrawing consent during a sexual act); however, it is important to understand the dynamics of consent to understand that just because someone might have thought they had consent in the moment, they might have ignored or not been educated on something they needed to be aware of for consent. For example, if someone is really drunk and says yes, that wouldn't actually be legal consent. So the next day after the person who said yes becomes sober, they may realize that their vulnerability was taken advantage of and they feel violated. So it's important to be educated on consent and not ignore important things about the situation just because someone said yes.",
    grades: ["7th", "8th", "9th", "10th", "11th", "12th"],
    topics: ["Consent"]
  },
  {
    id: 11,
    question: "What if someone lies about their age when giving consent?",
    answer: "It is always the responsibility of the older person to make sure the person they're with is old enough to consent. It is important that someone who wants to harm young people cannot make excuses. But if someone tried to find out the person's age and the person lied, the legal system is there to make sure all facts are taken into account before someone is found guilty.",
    grades: ["7th", "8th", "9th", "10th", "11th", "12th"],
    topics: ["Consent", "Age of consent"]
  },
  {
    id: 12,
    question: "Why is there an age of consent law?",
    answer: "To protect kids from adults.",
    grades: ["8th", "9th", "10th", "11th", "12th"],
    topics: ["Consent", "Age of consent"]
  },
  {
    id: 13,
    question: "Why is there a Romeo and Juliet law?",
    answer: "The goal of the age of consent law is to protect kids from adults, not to punish kids. While it may not necessarily be developmentally appropriate, kids shouldn't be punished for engaging in sexual behavior with someone around their same age. It doesn't make sense for them to go to jail.",
    grades: ["8th", "9th", "10th", "11th", "12th"],
    topics: ["Consent", "Age of consent"]
  },
  {
    id: 14,
    question: "Will I get in trouble if I engage in sexual behavior with someone above the age of consent and I'm below it?",
    answer: "No. It is always the older person's responsibility, because they have more power. Since it is their responsibility, they will be the one who gets in trouble. Remember that adults' brains are much more developed than childrens', and they have access to money, as well as all that comes with it.",
    grades: ["8th", "9th", "10th"],
    topics: ["Consent", "Age of consent"]
  },
  {
    id: 15,
    question: "Shouldn't it be illegal for anyone under 18 to have sex, since that's when people become adults?",
    answer: "The laws surrounding certain things that are legal for various ages are different. For example, you have to be 18 to vote, or 21 to purchase alcohol. 18 is often considered an \"adult\" because that is when you can be drafted.",
    grades: ["8th", "9th", "10th", "11th", "12th"],
    topics: ["Consent", "Age of consent"]
  },
  {
    id: 16,
    question: "Why would an adult want to have sex with someone who is 16, even if it is legal?",
    answer: "Unfortunately, some adults make choices that are not appropriate and could bring harm to a younger person. Again, just because it is legal does not mean it is okay.",
    grades: ["8th", "9th", "10th", "11th", "12th"],
    topics: ["Consent", "Age of consent"]
  },
  {
    id: 17,
    question: "Can a 16 year old engage in sexting because they are the age of consent?",
    answer: "No, a 16 year old cannot engage in sexting. Though they are the age of consent to engage in sexual behavior, they are not able to consent to the creation of intimate images. The only people who can legally engage in sexting are those over 18 years old.",
    grades: ["9th", "10th", "11th", "12th"],
    topics: ["Consent", "Age of consent", "Sexting"]
  },
  {
    id: 18,
    question: "Why is asking someone out considered sexual harassment, when it's not sexual?",
    answer: "The wording can be kind of confusing. The reason why this is the case is because it is unwanted behavior that is sex-based. Remember, anything that has to do with sex or gender falls under sexual harassment.",
    grades: ["9th", "10th", "11th", "12th"],
    topics: ["Sexual harassment"]
  },
  {
    id: 19,
    question: "Can sexual violence occur between two people who are equally intoxicated?",
    answer: "If someone is unable to consent because they are incapacitated, then it would be considered sexual violence. If there are two people who are incapacitated, it would be unlikely that they would physically be able to engage in any sexual behavior. However, if two people were equally intoxicated, it becomes a gray area. In these cases, ensuring both people are able to give consent is the biggest factor.",
    grades: ["10th", "11th", "12th"],
    topics: ["Sexual assault", "Intoxication/Incapacitation", "Consent"]
  },
  {
    id: 20,
    question: "Can men be raped?",
    answer: "Yes, men can be raped. Though statistics often show women having reported more sexual violence than men, it still occurs against men. It's also important to remember that societal pressures may limit men from coming forward about having experienced rape, so we may hear about it less.",
    grades: ["12th"],
    topics: ["Sexual assault", "Rape", "Rape culture", "Victim blaming"]
  }
];

// Helper functions
export const getUniqueGrades = (): string[] => {
  const grades = new Set<string>();
  faqData.forEach(faq => faq.grades.forEach(g => grades.add(g)));
  return Array.from(grades).sort((a, b) => {
    const gradeOrder: Record<string, number> = {
      "3rd": 3, "4th": 4, "5th": 5, "6th": 6, "7th": 7, "8th": 8,
      "9th": 9, "10th": 10, "11th": 11, "12th": 12
    };
    return (gradeOrder[a] || 0) - (gradeOrder[b] || 0);
  });
};

export const getUniqueTopics = (): string[] => {
  const topics = new Set<string>();
  faqData.forEach(faq => faq.topics.forEach(t => topics.add(t)));
  return Array.from(topics).sort();
};

export const getGradeLevel = (grade: string): "elementary" | "middle" | "high" => {
  const elementaryGrades = ["3rd", "4th", "5th"];
  const middleGrades = ["6th", "7th", "8th"];
  if (elementaryGrades.includes(grade)) return "elementary";
  if (middleGrades.includes(grade)) return "middle";
  return "high";
};

// Topic to resource category mapping
export const topicToResourceMapping: Record<string, { categories: string[]; level: ("elementary" | "middle" | "high")[] }> = {
  "Reporting": { categories: ["Reporting & Support Services", "Educational Resources"], level: ["elementary", "middle"] },
  "Trusted adults": { categories: ["Educational Resources", "Support Organizations"], level: ["elementary", "middle"] },
  "Joking vs. being mean": { categories: ["Empathy", "Body Language"], level: ["elementary", "middle"] },
  "Clean and healthy rule": { categories: ["Boundaries"], level: ["elementary"] },
  "Social media": { categories: ["Digital Safety Resources", "Internet Safety"], level: ["elementary", "middle", "high"] },
  "Private information": { categories: ["Digital Safety Resources", "Safety Resources"], level: ["middle", "high"] },
  "Child sexual abuse material (CSAM)": { categories: ["Reporting & Support Services", "Safety Resources", "Legal and Reporting Resources"], level: ["middle", "high"] },
  "Sexting": { categories: ["Digital Safety Resources", "Educational Resources", "Safety Resources"], level: ["middle", "high"] },
  "Sextortion": { categories: ["Reporting & Support Services", "Safety Resources", "Legal and Reporting Resources"], level: ["middle", "high"] },
  "Sexual harassment": { categories: ["Relationship Resources", "Transition Resources", "Support Resources"], level: ["middle", "high"] },
  "Title IX": { categories: ["Transition Resources", "Legal and Reporting Resources"], level: ["high"] },
  "Consent": { categories: ["Boundaries", "Relationship Resources", "Educational Resources"], level: ["elementary", "middle", "high"] },
  "Age of consent": { categories: ["Educational Resources", "Relationship Resources"], level: ["middle", "high"] },
  "Sexual assault": { categories: ["Support Resources", "Relationship Resources"], level: ["high"] },
  "Intoxication/Incapacitation": { categories: ["Support Resources", "Relationship Resources"], level: ["high"] },
  "Rape": { categories: ["Support Resources", "Relationship Resources"], level: ["high"] },
  "Rape culture": { categories: ["Support Resources", "Additional Support Organizations"], level: ["high"] },
  "Victim blaming": { categories: ["Support Resources", "Additional Support Organizations"], level: ["high"] }
};

export const getRelatedResources = (topics: string[]): { categories: string[]; level: ("elementary" | "middle" | "high")[] } => {
  const categories = new Set<string>();
  const levels = new Set<"elementary" | "middle" | "high">();
  
  topics.forEach(topic => {
    const mapping = topicToResourceMapping[topic];
    if (mapping) {
      mapping.categories.forEach(c => categories.add(c));
      mapping.level.forEach(l => levels.add(l));
    }
  });
  
  return {
    categories: Array.from(categories),
    level: Array.from(levels)
  };
};
