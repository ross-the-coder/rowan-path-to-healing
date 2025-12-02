export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Clean and healthy rule",
    definition: "A guideline that helps children understand appropriate versus inappropriate touch, focusing on areas of the body that are private and should be kept clean and healthy."
  },
  {
    term: "Sexual harassment",
    definition: "Unwelcome conduct of a sexual nature that creates an intimidating, hostile, or offensive environment."
  },
  {
    term: "Sexual assault",
    definition: "Any unwanted touch of an intimate part of the body; in the state of Connecticut, this includes the chest, butt, genitals, and inner thigh. In addition, it also includes any unwanted sexual contact."
  },
  {
    term: "Title IX",
    definition: "A federal law that aims to protect students from sex and gender-based discrimination in education programs or activities that receive federal funding."
  },
  {
    term: "Sexting",
    definition: "Sending intimate content through text message, social media direct message, or other messaging system or app."
  },
  {
    term: "Sextortion",
    definition: "A form of blackmail where someone threatens to share intimate images or information unless the victim provides more images, money, or other demands."
  },
  {
    term: "Age of consent",
    definition: "The age at which somebody can legally consent to engaging in sexual activity; in Connecticut, it is 16."
  },
  {
    term: "Child sexual abuse material",
    definition: "Any visual depiction of sexual conduct involving a minor, which is a person less than 18 years old."
  },
  {
    term: "CSAM",
    definition: "Child Sexual Abuse Material - any visual depiction of sexual conduct involving a minor, which is a person less than 18 years old."
  },
  {
    term: "Consent",
    definition: "Agreement to engage in sexual conduct."
  },
  {
    term: "Human trafficking",
    definition: "The exploitation of people through force, fraud, or coercion for the purpose of labor, sexual exploitation, or other forms of abuse."
  },
  {
    term: "Incapacitation",
    definition: "A high level of intoxication that removes someone's ability to consent to sexual behavior."
  },
  {
    term: "Rape",
    definition: "Non-consensual sexual intercourse achieved through force, threat, or when the victim is incapable of giving consent."
  },
  {
    term: "Statutory rape",
    definition: "Sexual activity with a person who is below the legal age of consent, regardless of whether the activity was consensual."
  },
  {
    term: "Rape culture",
    definition: "An environment in which rape is prevalent and normalized due to societal attitudes about gender and sexuality."
  },
  {
    term: "Victim blaming",
    definition: "The act of holding a victim partially or entirely responsible for the harm that befell them, rather than placing responsibility on the perpetrator."
  },
  {
    term: "Title VII",
    definition: "A person's rights in the workplace to be free from discrimination."
  },
  {
    term: "The Clery Act",
    definition: "A federal consumer protection law that requires colleges and universities to be transparent about campus crime policy and statistics."
  },
  {
    term: "Clery Act",
    definition: "A federal consumer protection law that requires colleges and universities to be transparent about campus crime policy and statistics."
  },
  {
    term: "Boundaries",
    definition: "Personal limits that define what behavior is acceptable and what is not in relationships and interactions with others."
  },
  {
    term: "Trusted adult",
    definition: "A safe, reliable person that a child can talk to about problems or concerns, such as a parent, teacher, counselor, or family member."
  },
  {
    term: "Safe touch",
    definition: "Touch that is appropriate, respectful, and does not make someone feel uncomfortable or unsafe."
  },
  {
    term: "Unsafe touch",
    definition: "Touch that is inappropriate, unwanted, or makes someone feel uncomfortable, scared, or confused."
  },
  {
    term: "Body autonomy",
    definition: "The right to control what happens to your own body and to make decisions about your own physical self."
  },
  {
    term: "Bystander",
    definition: "A person who witnesses an event or situation but is not directly involved. Bystanders can choose to intervene and help."
  },
  {
    term: "Grooming",
    definition: "The process by which an abuser builds trust and emotional connection with a child in order to manipulate or exploit them."
  },
  {
    term: "Cyberbullying",
    definition: "Bullying that takes place using electronic technology, including devices, social media, and the internet."
  },
  {
    term: "Digital footprint",
    definition: "The trail of data you leave behind when using the internet, including websites visited, posts made, and information shared online."
  },
  {
    term: "Online predator",
    definition: "Someone who uses the internet to exploit or harm children, often by building relationships with them online."
  },
  {
    term: "Mandated reporter",
    definition: "A person who is legally required to report suspected child abuse or neglect to appropriate authorities."
  },
  {
    term: "Disclosure",
    definition: "When a child tells someone about abuse or an uncomfortable situation they have experienced."
  }
];

// Create a map for quick lookup (case-insensitive)
export const glossaryMap = new Map<string, string>(
  glossaryTerms.map(item => [item.term.toLowerCase(), item.definition])
);
