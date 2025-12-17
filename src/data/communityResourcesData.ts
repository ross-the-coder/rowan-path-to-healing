export interface CommunityResource {
  id: string;
  name: string;
  url: string;
  description: string;
  category: "Community" | "School" | "Partnership" | "Online";
  resourceTypes: string[];
  catchmentArea: "Local" | "State" | "National" | "International";
  phone?: string;
  address?: string;
  tags: string[];
}

export const communityResources: CommunityResource[] = [
  {
    id: "1",
    name: "The Trauma Recovery Clinic at The Rowan Center",
    url: "https://therowancenter.org/trauma-recovery-clinic/",
    description: "Long-term therapy for victims/survivors over 18 with HUSKY. Specialized trauma-focused treatment including EMDR and evidence-based approaches.",
    category: "Community",
    resourceTypes: ["Mental Health", "DV", "Trafficking"],
    catchmentArea: "State",
    phone: "203-487-0675",
    address: "1111 Summer St #202, Stamford, CT 06905",
    tags: ["therapy", "trauma", "EMDR", "counseling"]
  },
  {
    id: "2",
    name: "DVCC (Domestic Violence Crisis Center)",
    url: "https://dvccct.org/",
    description: "Crisis intervention (hotline), individual/group counseling, and housing/financial/employment/legal advocacy services. They have beds available for clients who are also victims/survivors of domestic violence. Can help with OVS compensation in domestic violence cases.",
    category: "Community",
    resourceTypes: ["Legal Services", "DV", "Housing", "Finance", "Mental Health"],
    catchmentArea: "State",
    phone: "(203) 588-9100",
    address: "1111 Summer St #203, Stamford, CT 06905",
    tags: ["domestic violence", "crisis", "housing", "legal", "advocacy"]
  },
  {
    id: "3",
    name: "PEHT (Project to End Human Trafficking)",
    url: "https://buildingonect.org/",
    description: "Provides crisis intervention (hotline) and individual/group counseling to people who have experienced domestic violence. Offers case management, crisis support, transitional housing, residential program, and job training for victims/survivors of human trafficking.",
    category: "Community",
    resourceTypes: ["Trafficking", "Housing", "Employment"],
    catchmentArea: "State",
    phone: "(203) 973-7348",
    address: "105 Woodside Dr, Greenwich, CT 06830",
    tags: ["human trafficking", "crisis", "housing", "job training"]
  },
  {
    id: "4",
    name: "Building One Community",
    url: "https://buildingonecommunity.org/",
    description: "Provides literacy classes, legal services, family services, academic enrichment, workforce development, and skills classes specifically for cases related to immigration.",
    category: "Community",
    resourceTypes: ["Immigration", "Employment", "Legal Services"],
    catchmentArea: "Local",
    phone: "(203) 674-8585",
    address: "417 Shippan Ave, Stamford, CT 06902",
    tags: ["immigration", "legal", "education", "workforce"]
  },
  {
    id: "5",
    name: "Connecticut Institute for Refugees and Immigrants",
    url: "https://cirict.org/",
    description: "Provides refugee services, immigration legal services, Project Rescue for human trafficking, and economic empowerment. Has workforce placement for immigrants and early employment matching grant.",
    category: "Community",
    resourceTypes: ["Immigration", "Employment", "Legal Services", "For Children"],
    catchmentArea: "State",
    phone: "(203) 965-7190",
    address: "175 Atlantic St Room 007, Stamford, CT 06902",
    tags: ["refugees", "immigration", "employment", "trafficking"]
  },
  {
    id: "6",
    name: "Catholic Charities",
    url: "https://ccfairfield.org/",
    description: "Offers support through food and SNAP benefits in the Community Advocacy Program. Provides support with immigration-related requests. Offers housing to people experiencing homelessness.",
    category: "Community",
    resourceTypes: ["Trafficking", "Immigration", "Employment", "Legal Services"],
    catchmentArea: "State",
    phone: "(203) 964-8228",
    address: "174 Richmond Hill Ave, Stamford, CT 06902",
    tags: ["food", "housing", "immigration", "advocacy"]
  },
  {
    id: "7",
    name: "Inspirica",
    url: "https://inspiricact.org/",
    description: "Provides emergency shelter, permanent supportive housing, and affordable housing. Has food pantries and soup kitchens across Southern Fairfield County. Provides job training for the hospitality and food industries.",
    category: "Community",
    resourceTypes: ["Food", "Immigration", "Housing"],
    catchmentArea: "Local",
    phone: "(203) 388-0100",
    address: "141 Franklin St, Stamford, CT 06901",
    tags: ["shelter", "housing", "food", "job training"]
  },
  {
    id: "8",
    name: "The Food Bank of Southern Fairfield County",
    url: "https://foodbanklfc.org/",
    description: "Has soup kitchen, food pantry, job skills programs, supportive services, SNAP benefits, and hygiene products. Has a Financial Opportunity Center.",
    category: "Community",
    resourceTypes: ["Healthcare", "Employment", "For Children", "Food", "Housing"],
    catchmentArea: "Local",
    phone: "(203) 358-8898",
    address: "461 Glenbrook Rd, Stamford, CT 06906",
    tags: ["food", "SNAP", "employment", "financial assistance"]
  },
  {
    id: "9",
    name: "New Covenant Center",
    url: "https://newcovenantcenter.org/",
    description: "Offers food pantries, mobile pantries, home food delivery, and holiday meals. Provides various food assistance programs to the community.",
    category: "Community",
    resourceTypes: ["Food"],
    catchmentArea: "Local",
    phone: "(203) 964-8228",
    address: "174 Richmond Hill Ave, Stamford, CT 06902",
    tags: ["food", "pantry", "meals"]
  },
  {
    id: "10",
    name: "Person to Person",
    url: "https://p2pct.org/",
    description: "Offers a clothing center in Darien and an annual coat giveaway. Emergency financial assistance and the Financial Opportunity Center. Provides weekend meals for students.",
    category: "Community",
    resourceTypes: ["Food", "Clothing", "Finance", "Employment"],
    catchmentArea: "Local",
    phone: "(203) 724-9111",
    address: "425 Fairfield Ave building 1 suite 111, Stamford, CT 06902",
    tags: ["clothing", "financial assistance", "meals", "students"]
  },
  {
    id: "11",
    name: "Filling in the Blanks",
    url: "https://fillingintheblanks.org/",
    description: "Provides weekend meals for students. Provides food programs for people experiencing re-entry after incarceration.",
    category: "Community",
    resourceTypes: ["For Children", "Food"],
    catchmentArea: "Local",
    phone: "(203) 750-0019",
    address: "346 Main Ave #3A, Norwalk, CT 06851",
    tags: ["students", "weekend meals", "re-entry"]
  },
  {
    id: "12",
    name: "Emerge",
    url: "https://emergeconnect.org/",
    description: "Provides emergency shelter, permanent supportive housing, and affordable housing. Provides skillset training for people experiencing re-entry after incarceration.",
    category: "Community",
    resourceTypes: ["Food", "Housing", "Finance", "Employment", "Re-entry"],
    catchmentArea: "State",
    phone: "(203) 562-0171",
    address: "830 Grand Avenue New Haven, CT 06511",
    tags: ["housing", "re-entry", "job training", "shelter"]
  },
  {
    id: "13",
    name: "Silversource",
    url: "https://silversource.org/",
    description: "Provides housing assistance to seniors. Helps with providing prescriptions to seniors. Offers Ride to Wellness, a program to transport seniors to medical appointments. Delivers groceries to homebound seniors.",
    category: "Community",
    resourceTypes: ["Healthcare", "Transportation", "Food", "Housing"],
    catchmentArea: "Local",
    phone: "(203) 324-6584",
    address: "1100 Summer St 2nd floor, Stamford, CT 06905",
    tags: ["seniors", "transportation", "prescriptions", "groceries"]
  },
  {
    id: "14",
    name: "Neighbor to Neighbor",
    url: "https://ntngreenwich.org/",
    description: "Provides a supplemental food program, summer supplement program, and emergency food program. Can provide qualification for programs like SNAP benefits.",
    category: "Community",
    resourceTypes: ["Food"],
    catchmentArea: "Local",
    phone: "(203) 622-9208",
    address: "248 E Putnam Ave, Greenwich, CT 06830",
    tags: ["food", "SNAP", "emergency food"]
  },
  {
    id: "15",
    name: "211 Navigator",
    url: "https://211ct.org/",
    description: "Can provide qualification for benefits. Screens for possible services to provide. Comprehensive database of community resources and referral services.",
    category: "Community",
    resourceTypes: ["Food", "Healthcare", "Child Care"],
    catchmentArea: "State",
    phone: "211",
    tags: ["benefits", "referrals", "screening", "resources"]
  },
  {
    id: "16",
    name: "Kids in Crisis",
    url: "https://kidsincrisis.org/",
    description: "Offers shelters for youth, including Safe Haven and The Cottage (which is specifically for children who are immigrants). Provides housing and therapeutic programs.",
    category: "Community",
    resourceTypes: ["For Children", "Housing"],
    catchmentArea: "Local",
    phone: "(203) 661-1911",
    address: "1 Salem St, Cos Cob, CT 06807",
    tags: ["youth", "shelter", "immigrants", "therapeutic"]
  },
  {
    id: "17",
    name: "Recovery Network of Programs",
    url: "https://rnpinc.org/",
    description: "Provides housing assistance to people struggling with addiction. Offers inpatient, outpatient, as well as housing assistance.",
    category: "Community",
    resourceTypes: ["Housing", "Addiction"],
    catchmentArea: "State",
    phone: "(203) 583-8181",
    address: "1438 Park Ave, Bridgeport, CT 06604",
    tags: ["addiction", "recovery", "housing", "treatment"]
  },
  {
    id: "18",
    name: "Family Centers",
    url: "https://familycenters.org/",
    description: "Provides eviction prevention services and the Self-Sufficiency Program. Provides support with job readiness, transportation, and childcare services. Early care and education and free mental health screenings.",
    category: "Community",
    resourceTypes: ["Housing", "Finance", "Employment", "Transportation", "Child Care", "For Children"],
    catchmentArea: "Local",
    phone: "(203) 324-3167",
    address: "60 Palmer Hill Rd, Stamford, CT 06902",
    tags: ["eviction prevention", "childcare", "employment", "mental health"]
  },
  {
    id: "19",
    name: "Family and Children's Agency",
    url: "https://familyandchildrensagency.org/",
    description: "Offers IICAPS, behavioral after-school programs, summer programs, and TANF case management. Provides supportive housing and addiction services.",
    category: "Community",
    resourceTypes: ["Housing", "For Children", "Addiction"],
    catchmentArea: "Local",
    phone: "(203) 855-8765",
    address: "9 Mott Ave, Norwalk, CT 06850",
    tags: ["after-school", "housing", "addiction", "case management"]
  },
  {
    id: "20",
    name: "Pacific House",
    url: "https://pacifichouse.org/",
    description: "Provides permanent supportive housing for individuals experiencing homelessness in the Stamford area.",
    category: "Community",
    resourceTypes: ["Housing"],
    catchmentArea: "Local",
    phone: "(203) 348-2792",
    address: "597 Pacific St #5814, Stamford, CT 06902",
    tags: ["housing", "homelessness", "supportive housing"]
  },
  {
    id: "21",
    name: "Laurel House Resource Center",
    url: "https://laurelhouse.net/",
    description: "Provides supportive housing to people experiencing mental illness. Provides education, employment support, and supportive housing to people experiencing mental illness.",
    category: "Community",
    resourceTypes: ["Housing", "Mental Health", "Employment"],
    catchmentArea: "Local",
    phone: "(203) 324-1816",
    address: "1616 Washington Blvd, Stamford, CT 06902",
    tags: ["mental health", "housing", "employment", "education"]
  },
  {
    id: "22",
    name: "Malta House",
    url: "https://maltahouse.org/",
    description: "Can provide housing for new/expectant mothers and their babies. Provides a residential program, a graduate program with resources, and community outreach with donations.",
    category: "Community",
    resourceTypes: ["Housing", "Pregnancy"],
    catchmentArea: "Local",
    phone: "(203) 857-0088",
    address: "Behind All Saints School, 139 W Rocks Rd, Norwalk, CT 06851",
    tags: ["pregnancy", "mothers", "babies", "residential"]
  },
  {
    id: "23",
    name: "Centro Bienestar",
    url: "https://centrobienestar.org/",
    description: "Provides mental health services to the Latino community of Stamford. Culturally competent care in Spanish.",
    category: "Community",
    resourceTypes: ["Mental Health"],
    catchmentArea: "International",
    phone: "203-517-9955",
    address: "30 Myano Lane, Suite 20 Stamford, CT 06902",
    tags: ["mental health", "Latino", "Spanish", "therapy"]
  },
  {
    id: "24",
    name: "Community Health Centers of Stamford",
    url: "https://chc1.com/",
    description: "Offers psychiatry and therapy; has in-person and remote sessions available. Comprehensive mental health services.",
    category: "Community",
    resourceTypes: ["Mental Health"],
    catchmentArea: "Local",
    phone: "(203) 323-8160",
    address: "22 5th St, Stamford, CT 06905",
    tags: ["psychiatry", "therapy", "telehealth"]
  },
  {
    id: "25",
    name: "Sasco River Center",
    url: "https://sascorivercenter.org/",
    description: "Provides therapy and psychiatry services for all ages. Comprehensive mental health treatment.",
    category: "Community",
    resourceTypes: ["Mental Health"],
    catchmentArea: "Local",
    phone: "(203) 202-7654",
    address: "330 Post Rd, Darien, CT 06820",
    tags: ["therapy", "psychiatry", "all ages"]
  },
  {
    id: "26",
    name: "CT Legal Aid",
    url: "https://ctlegal.org/",
    description: "Provides a legal hotline, self-help materials, and case support for low-income individuals.",
    category: "Community",
    resourceTypes: ["Legal Services"],
    catchmentArea: "State",
    phone: "(860) 344-0447",
    address: "1177 Summer St 4th floor, Stamford, CT 06905",
    tags: ["legal", "hotline", "low-income"]
  },
  {
    id: "27",
    name: "Victim Rights Center of Connecticut",
    url: "https://victimrights.org/",
    description: "Provides legal support to victims/survivors of sexual violence and other violent crimes. Comprehensive legal advocacy.",
    category: "Community",
    resourceTypes: ["Legal Services"],
    catchmentArea: "State",
    phone: "(203) 350-3515",
    address: "8 Research Pkwy, Wallingford, CT 06492",
    tags: ["legal", "victims", "sexual violence", "advocacy"]
  },
  {
    id: "28",
    name: "She Leads Justice",
    url: "https://sheleadsjustice.org/",
    description: "Women can request legal information or attorney referrals through this organization. Empowering women through legal advocacy.",
    category: "Community",
    resourceTypes: ["Legal Services"],
    catchmentArea: "National",
    phone: "860-524-0601",
    address: "PO Box 320460 Hartford, CT 06132",
    tags: ["women", "legal", "attorney referrals"]
  },
  {
    id: "29",
    name: "Liberation Programs",
    url: "https://liberationprograms.org/",
    description: "Offers outpatient counseling and group counseling, as well as inpatient counseling. Uses a harm-reduction model.",
    category: "Community",
    resourceTypes: ["Addiction"],
    catchmentArea: "Local",
    phone: "(203) 858-3208",
    address: "119 Main St, Stamford, CT 06901",
    tags: ["addiction", "counseling", "harm reduction", "treatment"]
  },
  {
    id: "30",
    name: "Northeast Regional Children's Advocacy Centers",
    url: "https://nrcac.org/",
    description: "Offers case management, case review, forensic interviewing, medical exams in child abuse cases, mental health services, multidisciplinary teams (MDTs), secondary victim/survivor support, and victim advocacy.",
    category: "Community",
    resourceTypes: ["For Children"],
    catchmentArea: "National",
    phone: "(445) 544-8154",
    address: "300 E Hunting Park Ave, Philadelphia, PA 19124",
    tags: ["children", "advocacy", "forensic", "abuse"]
  },
  {
    id: "31",
    name: "New Canaan YMCA - Bennett Center for Behavioral Health",
    url: "https://newcanaanymca.org/",
    description: "The Bennett Center for Behavioral Health offers therapy in a private, welcoming space for individuals, couples, and families ages 6 through older adulthood. All major insurance plans accepted.",
    category: "Community",
    resourceTypes: ["For Children", "Mental Health"],
    catchmentArea: "Local",
    phone: "203-622-1881",
    address: "564 South Ave, New Canaan, CT 06840",
    tags: ["therapy", "families", "children", "insurance accepted"]
  },
  {
    id: "32",
    name: "National Sexual Violence Resource Center (NSVRC)",
    url: "https://nsvrc.org/",
    description: "A national information and resource hub relating to all aspects of sexual violence. Provides research, training, and technical assistance.",
    category: "Online",
    resourceTypes: ["Mental Health", "Education"],
    catchmentArea: "National",
    tags: ["sexual violence", "resources", "research", "training"]
  },
  {
    id: "33",
    name: "RAINN (Rape, Abuse & Incest National Network)",
    url: "https://rainn.org/",
    description: "Nation's largest anti-sexual violence organization. Operates the National Sexual Assault Hotline and provides programs to prevent sexual violence and help survivors.",
    category: "Online",
    resourceTypes: ["Mental Health", "Crisis Support"],
    catchmentArea: "National",
    phone: "1-800-656-4673",
    tags: ["hotline", "sexual assault", "support", "prevention"]
  },
  {
    id: "34",
    name: "Love Is Respect",
    url: "https://loveisrespect.org/",
    description: "National resource for healthy relationships. Provides information, support, and advocacy to young people who have questions or concerns about their dating relationships.",
    category: "Online",
    resourceTypes: ["Education", "For Children"],
    catchmentArea: "National",
    tags: ["relationships", "teens", "dating violence", "education"]
  },
  {
    id: "35",
    name: "National Center for Missing & Exploited Children (NCMEC)",
    url: "https://missingkids.org/",
    description: "Provides resources for online safety, CyberTipline for reporting exploitation, and Take It Down program to remove intimate images of minors.",
    category: "Online",
    resourceTypes: ["For Children", "Online Safety"],
    catchmentArea: "National",
    tags: ["children", "exploitation", "online safety", "reporting"]
  }
];

// Get unique values for filters
export const getUniqueCategories = (): string[] => {
  return ["Community", "School", "Partnership", "Online"];
};

export const getUniqueResourceTypes = (): string[] => {
  const types = new Set<string>();
  communityResources.forEach(r => r.resourceTypes.forEach(t => types.add(t)));
  return Array.from(types).sort();
};

export const getUniqueCatchmentAreas = (): string[] => {
  return ["Local", "State", "National", "International"];
};

export const getUniqueTags = (): string[] => {
  const tags = new Set<string>();
  communityResources.forEach(r => r.tags.forEach(t => tags.add(t)));
  return Array.from(tags).sort();
};
