// Keywords mapped to primary topics for resource search
// Generated from KidSafe Keywords spreadsheet

export interface KeywordMapping {
  keyword: string;
  topics: string[];
}

export const resourceKeywords: KeywordMapping[] = [
  // Consent & Boundaries
  { keyword: "age of consent", topics: ["Consent", "Boundaries"] },
  { keyword: "bodily autonomy", topics: ["Consent", "Boundaries"] },
  { keyword: "body autonomy", topics: ["Consent", "Boundaries"] },
  { keyword: "boundaries", topics: ["Consent", "Boundaries"] },
  { keyword: "consent", topics: ["Consent", "Boundaries"] },
  { keyword: "healthy boundaries", topics: ["Consent", "Boundaries"] },
  { keyword: "personal boundaries", topics: ["Consent", "Boundaries"] },
  { keyword: "physical boundaries", topics: ["Consent", "Boundaries"] },
  { keyword: "emotional boundaries", topics: ["Consent", "Boundaries"] },
  { keyword: "consent in relationships", topics: ["Consent", "Boundaries"] },
  { keyword: "understanding consent", topics: ["Consent", "Boundaries"] },
  { keyword: "being the boss of your body", topics: ["Consent", "Boundaries"] },
  { keyword: "clean and healthy rule", topics: ["Consent", "Boundaries"] },
  { keyword: "safe touch", topics: ["Consent"] },
  { keyword: "unsafe touch", topics: ["Consent"] },
  { keyword: "permission", topics: ["Consent"] },
  { keyword: "hugging without permission", topics: ["Consent", "Boundaries"] },
  
  // Digital Safety & Internet Safety
  { keyword: "digital safety", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "internet safety", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "online safety", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "cyberbullying", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "social media", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "digital footprint", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "digital citizenship", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "online games", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "gaming safety", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "messaging apps", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "snapchat", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "whatsapp", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "be internet awesome", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "device restrictions", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "digital curfew", topics: ["Digital Safety", "Internet Safety"] },
  { keyword: "private information", topics: ["Digital Safety"] },
  { keyword: "protecting private information", topics: ["Digital Safety"] },
  { keyword: "online predator", topics: ["Digital Safety", "Child Abuse", "Internet Safety"] },
  { keyword: "strangers online", topics: ["Digital Safety", "Internet Safety"] },
  
  // CSAM & Sextortion
  { keyword: "csam", topics: ["CSAM", "Digital Safety"] },
  { keyword: "child sexual abuse material", topics: ["CSAM", "Digital Safety"] },
  { keyword: "sextortion", topics: ["Sextortion", "Digital Safety", "CSAM"] },
  { keyword: "sexting", topics: ["Sexting", "Digital Safety", "CSAM"] },
  { keyword: "nude images", topics: ["Sexting"] },
  { keyword: "intimate images", topics: ["Sexting"] },
  { keyword: "take it down", topics: ["Sexting"] },
  { keyword: "ai-generated content", topics: ["Sexting", "Sextortion", "Digital Safety", "CSAM"] },
  
  // Sexual Violence & Misconduct
  { keyword: "sexual violence", topics: ["Sexual Violence"] },
  { keyword: "sexual assault", topics: ["Sexual Violence", "Sexual Misconduct"] },
  { keyword: "sexual harassment", topics: ["Sexual Misconduct", "School"] },
  { keyword: "rape", topics: ["Sexual Violence", "Sexual Misconduct"] },
  { keyword: "statutory rape", topics: ["Sexual Violence", "Sexual Misconduct"] },
  { keyword: "coercion", topics: ["Sexual Violence", "Sexual Misconduct"] },
  { keyword: "force", topics: ["Sexual Violence", "Sexual Misconduct"] },
  { keyword: "victim blaming", topics: ["Sexual Violence", "Sexual Misconduct"] },
  { keyword: "rape culture", topics: ["Sexual Violence", "Sexual Misconduct"] },
  { keyword: "bystander intervention", topics: ["Sexual Misconduct", "School"] },
  { keyword: "bystander", topics: ["Sexual Misconduct", "School"] },
  { keyword: "5 d's", topics: ["Sexual Misconduct", "School"] },
  { keyword: "upstander", topics: ["Sexual Misconduct"] },
  
  // Child Abuse
  { keyword: "child abuse", topics: ["Child Abuse"] },
  { keyword: "child sexual abuse", topics: ["Child Abuse"] },
  { keyword: "grooming", topics: ["Child Abuse"] },
  { keyword: "signs of abuse", topics: ["Child Abuse"] },
  { keyword: "preventing child sexual abuse", topics: ["Child Abuse"] },
  
  // School & Education
  { keyword: "school", topics: ["School"] },
  { keyword: "elementary school", topics: ["School"] },
  { keyword: "middle school", topics: ["School"] },
  { keyword: "high school", topics: ["School"] },
  { keyword: "title ix", topics: ["School", "Legislation"] },
  { keyword: "title ix coordinator", topics: ["School", "Legislation"] },
  { keyword: "mandated reporter", topics: ["School", "Law Enforcement"] },
  { keyword: "mandated reporting", topics: ["School", "Law Enforcement"] },
  { keyword: "prevention education", topics: ["School"] },
  { keyword: "student advisory", topics: ["School", "Children"] },
  
  // Law Enforcement & Legal
  { keyword: "law enforcement", topics: ["Law Enforcement", "Legal Services"] },
  { keyword: "police", topics: ["Law Enforcement"] },
  { keyword: "report", topics: ["Law Enforcement", "Crisis Support"] },
  { keyword: "reporting", topics: ["Law Enforcement", "Crisis Support"] },
  { keyword: "how to report", topics: ["Law Enforcement", "School"] },
  { keyword: "ct laws", topics: ["Legislation", "Legal Services"] },
  { keyword: "legislation", topics: ["Legislation", "Legal Services"] },
  { keyword: "legal protections", topics: ["Legislation", "Legal Services"] },
  { keyword: "cybertipline", topics: ["Digital Safety", "Law Enforcement"] },
  { keyword: "clery act", topics: ["Legislation", "Legal Services"] },
  { keyword: "romeo and juliet laws", topics: ["Legislation", "Legal Services"] },
  
  // Mental Health & Therapy
  { keyword: "mental health", topics: ["Mental Health", "Therapy"] },
  { keyword: "therapy", topics: ["Mental Health", "Therapy"] },
  { keyword: "counseling", topics: ["Mental Health", "Therapy"] },
  { keyword: "trauma", topics: ["Mental Health", "Therapy"] },
  { keyword: "trauma recovery", topics: ["Mental Health", "Therapy"] },
  { keyword: "emdr", topics: ["Mental Health", "Therapy"] },
  { keyword: "ptsd", topics: ["Mental Health"] },
  { keyword: "anxiety", topics: ["Mental Health"] },
  { keyword: "depression", topics: ["Mental Health"] },
  { keyword: "support groups", topics: ["Mental Health"] },
  { keyword: "crisis counseling", topics: ["Mental Health", "Crisis Support"] },
  { keyword: "healing", topics: ["Mental Health"] },
  
  // Crisis Support
  { keyword: "crisis", topics: ["Crisis Support", "Mental Health"] },
  { keyword: "crisis support", topics: ["Crisis Support", "Mental Health"] },
  { keyword: "crisis helpline", topics: ["Crisis Support", "Mental Health"] },
  { keyword: "24/7", topics: ["Crisis Support", "Mental Health"] },
  { keyword: "immediate support", topics: ["Crisis Support", "Mental Health"] },
  { keyword: "need help now", topics: ["Crisis Support"] },
  { keyword: "hotline", topics: ["Crisis Support"] },
  
  // Empathy & Body Language
  { keyword: "empathy", topics: ["Empathy"] },
  { keyword: "body language", topics: ["Body Language"] },
  { keyword: "nonverbal communication", topics: ["Body Language"] },
  { keyword: "emotions", topics: ["Empathy", "Body Language"] },
  { keyword: "feelings", topics: ["Empathy"] },
  
  // Trusted Adults
  { keyword: "trusted adult", topics: ["Trusted Adults"] },
  { keyword: "trusted adults", topics: ["Trusted Adults"] },
  { keyword: "tell an adult", topics: ["Trusted Adults"] },
  { keyword: "safe adults", topics: ["Trusted Adults"] },
  
  // Relationships
  { keyword: "healthy relationships", topics: ["Relationships"] },
  { keyword: "relationship", topics: ["Relationships"] },
  { keyword: "dating", topics: ["Relationships"] },
  { keyword: "love is respect", topics: ["Relationships"] },
  { keyword: "domestic violence", topics: ["Domestic Violence"] },
  
  // Resources & Support
  { keyword: "resources", topics: ["Resources"] },
  { keyword: "support", topics: ["Support"] },
  { keyword: "help", topics: ["Support", "Crisis Support"] },
  { keyword: "services", topics: ["Support"] },
];

// Topic to age group mapping for filtering
export const topicToAgeGroup: Record<string, ("elementary" | "middle" | "high")[]> = {
  "Consent": ["elementary", "middle", "high"],
  "Boundaries": ["elementary", "middle", "high"],
  "Digital Safety": ["elementary", "middle", "high"],
  "Internet Safety": ["elementary", "middle", "high"],
  "CSAM": ["middle", "high"],
  "Sextortion": ["middle", "high"],
  "Sexting": ["middle", "high"],
  "Sexual Violence": ["middle", "high"],
  "Sexual Misconduct": ["middle", "high"],
  "Child Abuse": ["elementary", "middle", "high"],
  "School": ["elementary", "middle", "high"],
  "Legislation": ["high"],
  "Legal Services": ["middle", "high"],
  "Law Enforcement": ["elementary", "middle", "high"],
  "Mental Health": ["elementary", "middle", "high"],
  "Therapy": ["middle", "high"],
  "Crisis Support": ["elementary", "middle", "high"],
  "Empathy": ["elementary", "middle"],
  "Body Language": ["elementary", "middle"],
  "Trusted Adults": ["elementary", "middle"],
  "Relationships": ["middle", "high"],
  "Domestic Violence": ["high"],
  "Resources": ["elementary", "middle", "high"],
  "Support": ["elementary", "middle", "high"],
};

// Function to search resources by keyword
export function searchKeywords(query: string): { topics: string[]; ageGroups: Set<string> } {
  const normalizedQuery = query.toLowerCase().trim();
  const matchedTopics = new Set<string>();
  const matchedAgeGroups = new Set<string>();
  
  if (!normalizedQuery) {
    return { topics: [], ageGroups: new Set() };
  }
  
  // Search through all keywords
  for (const mapping of resourceKeywords) {
    if (mapping.keyword.includes(normalizedQuery) || normalizedQuery.includes(mapping.keyword)) {
      mapping.topics.forEach(topic => {
        matchedTopics.add(topic);
        // Add age groups for this topic
        const ageGroups = topicToAgeGroup[topic] || [];
        ageGroups.forEach(ag => matchedAgeGroups.add(ag));
      });
    }
  }
  
  // Also do a fuzzy match on topic names directly
  Object.keys(topicToAgeGroup).forEach(topic => {
    if (topic.toLowerCase().includes(normalizedQuery)) {
      matchedTopics.add(topic);
      const ageGroups = topicToAgeGroup[topic] || [];
      ageGroups.forEach(ag => matchedAgeGroups.add(ag));
    }
  });
  
  return { topics: Array.from(matchedTopics), ageGroups: matchedAgeGroups };
}

// Get all unique topics
export function getAllTopics(): string[] {
  return Object.keys(topicToAgeGroup).sort();
}
