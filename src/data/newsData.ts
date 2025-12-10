export interface NewsArticle {
  id: string;
  title: string;
  link: string;
  topics: string[];
  contentType: string;
  source: string;
  date: string;
  isConnecticut: boolean;
}

export const newsArticles: NewsArticle[] = [
  // Connecticut Local Articles
  {
    id: "1",
    title: "Investigation into hundreds files of suspected child sex abuse material leads to CT man's arrest",
    link: "https://www.courant.com/2025/10/20/investigation-into-hundreds-files-of-suspected-child-sex-abuse-material-leads-to-ct-mans-arrest/",
    topics: ["CSAM", "Law Enforcement"],
    contentType: "News",
    source: "Hartford Courant",
    date: "10/20/2025",
    isConnecticut: true
  },
  {
    id: "2",
    title: "Police: Rocky Hill man tried to arrange meeting with detective posing as teen",
    link: "https://www.wtnh.com/news/connecticut/hartford/police-rocky-hill-man-tried-to-arrange-meeting-with-detective-posing-as-teen/",
    topics: ["Child Abuse", "Law Enforcement"],
    contentType: "News",
    source: "News 8",
    date: "10/10/2025",
    isConnecticut: true
  },
  {
    id: "3",
    title: "Former Westport Weston YMCA employee charged with possessing child sex abuse images",
    link: "https://www.ctpost.com/news/article/westport-weston-ymca-child-pornography-brian-myer-19556806.php",
    topics: ["CSAM", "Law Enforcement"],
    contentType: "News",
    source: "CT Post",
    date: "9/20/2025",
    isConnecticut: true
  },
  {
    id: "4",
    title: "New Britain man sentenced to 20 years in prison for filming his sexual abuse of a child",
    link: "https://www.ctinsider.com/news/article/new-britain-orlando-guzman-prison-sexual-abuse-21055758.php",
    topics: ["Child Abuse", "Law Enforcement"],
    contentType: "News",
    source: "CT Insider",
    date: "9/18/2025",
    isConnecticut: true
  },
  {
    id: "5",
    title: "Former CT preschool teacher gets 24 years in prison for producing, sharing child sex abuse material",
    link: "https://www.courant.com/2025/09/09/former-ct-preschool-teacher-gets-24-years-in-prison-for-producing-sharing-child-sex-abuse-materials/",
    topics: ["CSAM", "School", "Law Enforcement"],
    contentType: "News",
    source: "Hartford Courant",
    date: "9/9/2025",
    isConnecticut: true
  },
  {
    id: "6",
    title: "Hartford Man Sentenced to 10 Years in Prison for Possessing Child Sexual Abuse Videos and Images",
    link: "https://www.justice.gov/usao-ct/pr/hartford-man-sentenced-10-years-prison-possessing-child-sexual-abuse-videos-and-images",
    topics: ["CSAM", "Law Enforcement"],
    contentType: "News",
    source: "United States Attorney's Office | District of Connecticut",
    date: "9/9/2025",
    isConnecticut: true
  },
  {
    id: "7",
    title: "Connecticut priest sexually assaulted 8-year-old boy at gunpoint",
    link: "https://www.ctinsider.com/news/article/hartford-archdiocese-priest-gunpoint-sex-assault-21028573.php",
    topics: ["Child Abuse"],
    contentType: "News",
    source: "CT Insider",
    date: "9/3/2025",
    isConnecticut: true
  },
  {
    id: "8",
    title: "Connecticut State Police sees record number of child cybercrime tips in July",
    link: "https://www.nbcconnecticut.com/news/local/connecticut-state-police-record-number-child-cybercrime-tips/3631526/",
    topics: ["Digital Safety", "Law Enforcement"],
    contentType: "News",
    source: "NBC Connecticut",
    date: "8/28/2025",
    isConnecticut: true
  },
  {
    id: "9",
    title: "Former shoreline daycare owners facing pair of lawsuits for inappropriately touching boys",
    link: "https://www.nbcconnecticut.com/investigations/former-shoreline-daycare-owners-facing-pair-of-lawsuits/3629768/",
    topics: ["Child Abuse"],
    contentType: "News",
    source: "NBC Connecticut",
    date: "8/25/2025",
    isConnecticut: true
  },
  {
    id: "10",
    title: "Stamford man sentenced to 10 years for sexually assaulting, photographing 7-year-old girl",
    link: "https://www.stamfordadvocate.com/news/article/stamford-sexual-assault-ludy-gonzalez-10-years-20815695.php",
    topics: ["Child Abuse", "Law Enforcement"],
    contentType: "News",
    source: "Stamford Advocate",
    date: "8/13/2025",
    isConnecticut: true
  },
  {
    id: "11",
    title: "Guilty Plea For Suspect In Norwalk Sex Trafficking Case",
    link: "https://patch.com/connecticut/norwalk/guilty-plea-suspect-norwalk-sex-trafficking-case-report",
    topics: ["Sex Trafficking", "Law Enforcement"],
    contentType: "News",
    source: "Patch",
    date: "8/13/2025",
    isConnecticut: true
  },
  {
    id: "12",
    title: "Recent arrest in Connecticut highlights concerns about safety of children online",
    link: "https://www.fox61.com/article/news/local/recent-arrest-in-ct-highlights-concerns-about-safety-of-children-online/520-8f9eb6e3-8477-48b9-8d2c-e359e83ab3c2",
    topics: ["Digital Safety", "Law Enforcement"],
    contentType: "News",
    source: "Fox 61",
    date: "7/23/2025",
    isConnecticut: true
  },
  {
    id: "13",
    title: "Norwalk Man arrested for sexually assaulting 5-year-old child",
    link: "https://www.wfsb.com/2025/07/17/man-arrested-sexually-assaulting-5-year-old-child/",
    topics: ["Child Abuse", "Law Enforcement"],
    contentType: "News",
    source: "Eyewitness News 3",
    date: "7/17/2025",
    isConnecticut: true
  },
  {
    id: "14",
    title: "Norwalk man working as Uber driver sexually assaulted Darien teen",
    link: "https://www.stamfordadvocate.com/news/darien/article/darien-sexual-assault-uber-driver-arrest-interiano-20774077.php",
    topics: ["Sexual Assault"],
    contentType: "News",
    source: "Stamford Advocate",
    date: "7/17/2025",
    isConnecticut: true
  },
  {
    id: "15",
    title: "What are the new AI laws in Connecticut?",
    link: "https://ctmirror.org/2025/07/14/ct-ai-laws-session/",
    topics: ["AI", "Legislation"],
    contentType: "Article",
    source: "CT Mirror",
    date: "7/14/2025",
    isConnecticut: true
  },
  {
    id: "16",
    title: "Former female CT school employee charged with sexual assault of 11-year-old boy may take plea",
    link: "https://www.ctinsider.com/news/article/columbia-eo-smith-child-sex-alyson-cranick-20396947.php",
    topics: ["Child Abuse", "School"],
    contentType: "News",
    source: "CT Insider",
    date: "6/28/2025",
    isConnecticut: true
  },
  {
    id: "17",
    title: "A 22-year-old Connecticut man is accused of using TikTok and online games like Fortnite to prey on children",
    link: "https://dailyvoice.com/connecticut/newcanaan/ct-predator-targeted-young-gamers-with-vile-demands-feds-say-he-exploited-dozens-of-kids/",
    topics: ["Digital Safety", "Child Abuse"],
    contentType: "News",
    source: "Daily Voice | New Canaan",
    date: "6/25/2025",
    isConnecticut: true
  },
  {
    id: "18",
    title: "CT Man charged after allegedly demanding sexual images from 8-year-old in exchange for playing Fortnite",
    link: "https://www.wfsb.com/2025/06/25/man-charged-after-allegedly-demanding-sexual-images-8-year-old-exchange-playing-fortnite/",
    topics: ["Digital Safety", "Sextortion"],
    contentType: "News",
    source: "Eyewitness News 3",
    date: "6/25/2025",
    isConnecticut: true
  },
  {
    id: "19",
    title: "CT therapist made 'inappropriate remarks' before sexually assaulting teen boy patient",
    link: "https://www.newstimes.com/news/article/ridgefield-therapist-sex-assault-lawsuit-insight-20334586.php",
    topics: ["Child Abuse"],
    contentType: "News",
    source: "Newstimes",
    date: "6/17/2025",
    isConnecticut: true
  },
  {
    id: "20",
    title: "Connecticut students are dating AI. The explicit content reveals the dark side of chatbots",
    link: "https://www.ctinsider.com/projects/2025/ct-students-ai-chatbot-boyfriends-dating-schools/",
    topics: ["AI", "Digital Safety"],
    contentType: "News",
    source: "CT Insider",
    date: "5/8/2025",
    isConnecticut: true
  },
  {
    id: "21",
    title: "Norwalk high softball coach from Wilton charged with sexual assaults on school grounds",
    link: "https://www.thehour.com/news/article/norwalk-high-softball-coach-nadel-sexual-assault-20319455.php",
    topics: ["Sexual Assault", "School"],
    contentType: "News",
    source: "The Hour",
    date: "5/9/2025",
    isConnecticut: true
  },
  {
    id: "22",
    title: "CT woman took teens to Mohegan Sun before house party where they were sexually assaulted",
    link: "https://www.greenwichtime.com/news/article/montville-ct-jennifer-hobbs-arbnb-sexual-assaults-20269970.php",
    topics: ["Sexual Assault"],
    contentType: "News",
    source: "Greenwich Time",
    date: "4/11/2025",
    isConnecticut: true
  },
  {
    id: "23",
    title: "A 24-year-old Hartford man is accused of inappropriately touching two minors and sending sexually explicit text messages",
    link: "https://patch.com/connecticut/westhartford/west-hartford-school-para-charged-sexual-assault-whpd",
    topics: ["Child Abuse", "School"],
    contentType: "News",
    source: "Patch",
    date: "3/11/2025",
    isConnecticut: true
  },
  {
    id: "24",
    title: "Danbury brothel raid leads to 5 arrests in human trafficking case involving 15-year-old girls",
    link: "https://www.newstimes.com/news/article/danbury-brothel-chappelle-street-human-trafficking-20217877.php",
    topics: ["Sex Trafficking", "Law Enforcement"],
    contentType: "News",
    source: "Newstimes",
    date: "3/12/2025",
    isConnecticut: true
  },
  {
    id: "25",
    title: "CT opera house director faces sex assault victim at sentencing",
    link: "https://www.ctinsider.com/waterbury/article/thomaston-opera-house-sexual-assaults-checovetes-20213933.php",
    topics: ["Sexual Assault", "Law Enforcement"],
    contentType: "News",
    source: "CT Insider",
    date: "3/11/2025",
    isConnecticut: true
  },
  {
    id: "26",
    title: "Guilford man faces new charges in sexual assaults of Weston boy he met on Snapchat",
    link: "https://www.ctinsider.com/news/article/guilford-child-sex-assault-john-degennaro-snapchat-20213388.php",
    topics: ["Child Abuse", "Digital Safety"],
    contentType: "News",
    source: "CT Insider",
    date: "3/10/2025",
    isConnecticut: true
  },
  {
    id: "27",
    title: "NY Resident charged with sextortion in Wilton",
    link: "https://patch.com/connecticut/wilton/ny-resident-charged-financial-sextortion-investigation-wilton",
    topics: ["Sextortion", "Law Enforcement"],
    contentType: "News",
    source: "Patch",
    date: "3/10/2025",
    isConnecticut: true
  },
  {
    id: "28",
    title: "Sexual Assault numbers up in CT; advocates say we don't have enough data to help victims",
    link: "https://www.wfsb.com/2025/02/17/sexual-assault-numbers-up-ct-advocates-say-we-dont-have-enough-data-help-victims/",
    topics: ["Sexual Assault"],
    contentType: "News",
    source: "Eyewitness News 3",
    date: "2/17/2025",
    isConnecticut: true
  },
  {
    id: "29",
    title: "Former Stamford Resident Sentenced to More Than 26 Years in Federal Prison for Recording His Sexual Abuse of a Minor",
    link: "https://www.justice.gov/usao-ct/pr/former-stamford-resident-sentenced-more-26-years-federal-prison-recording-his-sexual",
    topics: ["Child Abuse", "Law Enforcement"],
    contentType: "News",
    source: "United States Attorney's Office | District of Connecticut",
    date: "2/20/2025",
    isConnecticut: true
  },
  {
    id: "30",
    title: "Norwalk Man Who Kidnapped New Canaan Woman To Live Out His Rape Fantasy Gets 25 Years",
    link: "https://dailyvoice.com/connecticut/newcanaan/norwalk-man-who-kidnapped-new-canaan-woman-to-live-out-his-rape-fantasy-gets-25-years-state/",
    topics: ["Sexual Assault", "Law Enforcement"],
    contentType: "News",
    source: "Daily Voice",
    date: "2/19/2025",
    isConnecticut: true
  },
  // National/International Articles
  {
    id: "31",
    title: "A day after Newsom kills AI kid safety bill, Altman announces ChatGPT erotica",
    link: "https://sfstandard.com/2025/10/14/openai-chatgpt-erotica-sam-altman/",
    topics: ["AI", "Legislation"],
    contentType: "News",
    source: "The San Francisco Standard",
    date: "10/14/2025",
    isConnecticut: false
  },
  {
    id: "32",
    title: "Florida man arrested of using AI to create child pornography, deputies say",
    link: "https://www.wesh.com/article/man-uses-ai-to-create-child-pornography/68135279",
    topics: ["AI", "CSAM", "Law Enforcement"],
    contentType: "News",
    source: "Wesh",
    date: "9/30/2025",
    isConnecticut: false
  },
  {
    id: "33",
    title: "260 suspected scammers arrested in pan-African cybercrime operation",
    link: "https://www.interpol.int/en/News-and-Events/News/2025/260-suspected-scammers-arrested-in-pan-African-cybercrime-operation",
    topics: ["Law Enforcement", "Digital Safety", "Sextortion"],
    contentType: "News",
    source: "Interpol",
    date: "9/26/2025",
    isConnecticut: false
  },
  {
    id: "34",
    title: "Middle School Boy Accused of Catfishing Classmates in Sextortion Scheme",
    link: "https://www.nytimes.com/2025/09/22/nyregion/rockland-sextortion-charges.html",
    topics: ["Sextortion", "School", "Digital Safety"],
    contentType: "News",
    source: "New York Times",
    date: "9/22/2025",
    isConnecticut: false
  },
  {
    id: "35",
    title: "Their teenage sons died by suicide. Now, they are sounding an alarm about AI chatbots",
    link: "https://www.npr.org/sections/shots-health-news/2025/09/19/nx-s1-5545749/ai-chatbots-safety-openai-meta-characterai-teens-suicide",
    topics: ["AI", "Digital Safety"],
    contentType: "News",
    source: "NPR",
    date: "9/19/2025",
    isConnecticut: false
  },
  {
    id: "36",
    title: "Fieldstone Middle School student arrested in months-long sextortion investigation in Stony Point",
    link: "https://abc7ny.com/post/fieldstone-middle-school-student-arrested-months-long-sextortion-investigation-stony-point/17835432/",
    topics: ["Sextortion", "School"],
    contentType: "News",
    source: "abc 7",
    date: "9/17/2025",
    isConnecticut: false
  },
  {
    id: "37",
    title: "A.I.-Generated Images of Child Sexual Abuse Are Flooding the Internet",
    link: "https://www.nytimes.com/2025/07/10/technology/ai-csam-child-sexual-abuse.html",
    topics: ["AI", "CSAM"],
    contentType: "News",
    source: "New York Times",
    date: "7/10/2025",
    isConnecticut: false
  },
  {
    id: "38",
    title: "UK bans porn depicting act that has become a 'sexual norm'",
    link: "https://www.itleftnomarks.com.au/resources/uk-bans-porn-depicting-act-that-has-become-a-sexual-norm/",
    topics: ["Sexual Misconduct", "Legislation"],
    contentType: "News",
    source: "Women's Health NSW",
    date: "6/23/2025",
    isConnecticut: false
  },
  {
    id: "39",
    title: "College Student Allegedly Created Undressed Images Of Classmates With AI, Then Sold Them",
    link: "https://www.huffpost.com/entry/college-student-deepfake-ai-classmates_n_6841e432e4b0bac0813e7372",
    topics: ["AI", "School"],
    contentType: "News",
    source: "Huffpost",
    date: "6/5/2025",
    isConnecticut: false
  },
  {
    id: "40",
    title: "'Sextortion' Scams Involving Apple Messages Ended in Tragedy for These Boys",
    link: "https://www.wsj.com/tech/personal-tech/sextortion-scam-teens-apple-imessage-app-159e82a8",
    topics: ["Sextortion", "Digital Safety"],
    contentType: "News",
    source: "The Wall Street Journal",
    date: "6/7/2025",
    isConnecticut: false
  },
  {
    id: "41",
    title: "A teen died after being blackmailed with A.I.-generated nudes. His family is fighting for change",
    link: "https://www.cbsnews.com/news/sextortion-generative-ai-scam-elijah-heacock-take-it-down-act/",
    topics: ["AI", "Sextortion"],
    contentType: "News",
    source: "CBS News",
    date: "5/31/2025",
    isConnecticut: false
  },
  {
    id: "42",
    title: "Snapchat under fire for child safety concerns amid rising cybercrime",
    link: "https://abc3340.com/news/abc-3340-news-iteam/snapchat-under-fire-for-child-safety-concerns-amid-rising-cybercrime",
    topics: ["Digital Safety"],
    contentType: "News",
    source: "abc 3340 News",
    date: "5/29/2025",
    isConnecticut: false
  },
  {
    id: "43",
    title: "FBI opens inquiry into 764, online group that sexually exploits and encourages minors to self-harm",
    link: "https://www.theguardian.com/us-news/2025/may/11/fbi-investigation-764-online-group",
    topics: ["Digital Safety", "Law Enforcement"],
    contentType: "News",
    source: "The Guardian",
    date: "5/11/2025",
    isConnecticut: false
  },
  {
    id: "44",
    title: "FBI has opened 250 investigations tied to violent online network '764' that preys on teens",
    link: "https://abcnews.go.com/US/fbi-opened-250-investigations-tied-violent-online-network/story?id=121480884",
    topics: ["Law Enforcement", "Digital Safety"],
    contentType: "News",
    source: "abc News",
    date: "5/6/2025",
    isConnecticut: false
  },
  {
    id: "45",
    title: "Discord App Exposes Children to Abuse and Graphic Content, Lawsuit Says",
    link: "https://www.nytimes.com/2025/04/17/nyregion/discord-lawsuit-new-jersey.html",
    topics: ["Digital Safety"],
    contentType: "News",
    source: "The NY Times",
    date: "4/17/2025",
    isConnecticut: false
  },
  {
    id: "46",
    title: "Pennsylvania man charged with possessing AI-generated child pornography",
    link: "https://www.cbsnews.com/pittsburgh/news/pennsylvania-man-charged-ai-generated-child-pornography/",
    topics: ["AI", "CSAM", "Law Enforcement"],
    contentType: "News",
    source: "CBS News",
    date: "4/14/2025",
    isConnecticut: false
  },
  {
    id: "47",
    title: "Risks to children playing Roblox 'deeply disturbing', say researchers",
    link: "https://www.theguardian.com/technology/2025/apr/14/risks-children-roblox-deeply-disturbing-researchers",
    topics: ["Digital Safety", "Sextortion"],
    contentType: "Article",
    source: "The Guardian",
    date: "4/14/2025",
    isConnecticut: false
  },
  {
    id: "48",
    title: "Teacher accused of creating AI-generated child pornography of students",
    link: "https://www.wfsb.com/2025/03/13/teacher-accused-creating-ai-generated-child-pornography-students/",
    topics: ["AI", "CSAM", "School"],
    contentType: "News",
    source: "WMC/Grey News",
    date: "3/13/2025",
    isConnecticut: false
  },
  {
    id: "49",
    title: "AI-generated child abuse global hit leads to dozens of arrests",
    link: "https://www.bbc.com/news/articles/czxnnzz558eo",
    topics: ["AI", "CSAM", "Law Enforcement"],
    contentType: "News",
    source: "BBC",
    date: "2/28/2025",
    isConnecticut: false
  },
  {
    id: "50",
    title: "25 arrested in global hit against AI-generated child sexual abuse material",
    link: "https://www.europol.europa.eu/media-press/newsroom/news/25-arrested-in-global-hit-against-ai-generated-child-sexual-abuse-material",
    topics: ["AI", "Law Enforcement", "CSAM"],
    contentType: "News",
    source: "Europol",
    date: "2/28/2025",
    isConnecticut: false
  }
];

// Helper function to parse date string and return Date object
export const parseDate = (dateStr: string): Date => {
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const month = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
  return new Date(dateStr);
};

// Get sorted articles by date (most recent first)
export const getSortedArticles = (articles: NewsArticle[]): NewsArticle[] => {
  return [...articles].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
};

// Get Connecticut local articles
export const getConnecticutArticles = (): NewsArticle[] => {
  return getSortedArticles(newsArticles.filter(article => article.isConnecticut));
};

// Get all articles sorted by date
export const getAllArticles = (): NewsArticle[] => {
  return getSortedArticles(newsArticles);
};
