import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Camera } from "lucide-react";

const Media = () => {
  const newsClips = [
    {
      title: "Impact Fairfield County Awards $100K Grants to Two Local Nonprofits",
      outlet: "Greenwich Sentinel",
      date: "August 18, 2025",
      type: "News Article",
      url: "https://www.greenwichsentinel.com/2025/08/18/impact-fairfield-county-awards-100k-grants-to-two-local-nonprofits/"
    },
    {
      title: "Impact FFC – 10 Years of Impact + 2025 Grant Winners Announced",
      outlet: "Ashforth",
      date: "2025",
      type: "News Article",
      url: "https://ashforth.com/impact-fcc-10-years-of-impact/e"
    },
    {
      title: "Parents need to talk to kids about porn. “Don’t be afraid to say, ‘this isn’t real.’”",
      outlet: "CT Insider",
      date: "September 7, 2025",
      type: "Opinion",
      url: "https://www.ctinsider.com/opinion/article/porn-safety-ct-rowan-21034254.php"
    },
    {
      title: "WM: Connecting Indiana to Kenya",
      outlet: "Wabash College News",
      date: "March 28, 2025",
      type: "News Article",
      url: "https://www.wabash.edu/news/story/13444"
    },
    {
      title: "“Learn Before You Leave” College Safety Panel Set for April 9; Register Today",
      outlet: "Greenwich Free Press",
      date: "April 8, 2025",
      type: "News Article",
      summary: "The “Learn Before You Leave” College Safety Panel is set for Wednesday, April 9, 2025 at 7:00pm at Greenwich Library. The event is designed for high school juniors and seniors and their families. Members of Greenwich High School’s Rowan Center Student Advisory Board, in partnership with The Rowan Center and Greenwich Library, have organized a panel on college safety designed for current high school juniors and seniors and their families. The second annual “Learn Before You Leave” will take place on Wednesday, April 9, 7:00-8:00 pm, at the Greenwich Library’s Marx Family Black Box Theater.",
      url: "https://greenwichfreepress.com/schools/learn-before-you-leave-college-safety-panel-set-for-april-9-register-today-229206/"
    },
    {
      title: "Westport Recognizes April As Sexual Assault Awareness Month",
      outlet: "Patch",
      date: "April 7, 2025",
      type: "News Article",
      summary: "The Rowan Center, in partnership with the Town of Westport, will host Proclamation Day 2025 at Westport Town Hall to officially recognize April as Sexual Assault Awareness Month (SAAM). The event will take place on Tuesday, April 8th, from 10:30 a.m. to 12:00 p.m. at Westport Town Hall, 110 Myrtle Avenue, Westport, CT.",
      url: "https://patch.com/connecticut/westport/westport-recognize-april-sexual-assault-awareness-month"
    },
    {
      title: "Opinion: Digital innovation and the rising threat to children",
      outlet: "Stamford Advocate",
      date: "September 4, 2024",
      type: "Opinion",
      summary: "As the new school year begins, we are returning to routine, learning, and growth. With many schools implementing policies that limit cell phone use during the day, our children will have fewer opportunities to be online while in class. However, this makes it even more crucial for parents to be vigilant about their online activities at home.",
      url: "https://www.stamfordadvocate.com/opinion/article/rowan-threat-children-exploitation-19739118.php"
    },
    {
      title: "Student-organized panel for college-bound teens features valuable advice",
      outlet: "Greenwich Free Press",
      date: "June 2, 2024",
      type: "News Article",
      summary: "Members of The Rowan Center’s Student Advisory Board organized a panel on college safety at the Greenwich Library. High school students and parents gathered to learn more about college challenges, mental health, sexual and domestic violence, and more from an esteemed panel including leadership from The Rowan Center, UCONN, Fordham EMS, and Kids in Crisis. Greenwich High School senior Jackson Kim wrote a great recap of the event in the Greenwich Free Press.",
      url: "https://greenwichfreepress.com/schools/student-organized-panel-for-college-bound-teens-features-valuable-advice-217597/"
    },
    {
      title: "Opinion: The untold consequences of sexual violence",
      outlet: "CT Post",
      date: "April 26, 2024",
      type: "Opinion",
      summary: "April is Sexual Assault Awareness and Prevention Month. It’s an annual opportunity to learn about sexual violence, how it damages our communities, and what we can each do to prevent it. At The Rowan Center, we are working hard every day of the year to help survivors and victims heal, advocate for them, and educate our communities. The demand for our services is only growing and we need your help.",
      url: "https://www.ctpost.com/opinion/article/ct-rape-sexual-assault-19422053.php"
    },
    {
      title: "If NCHS wants to prepare students for college, teach sexual assault curriculum",
      outlet: "NCHS Courant",
      date: "June 6, 2024",
      type: "Opinion",
      summary: "As with any issue in society, the absence of conversation does not mean an absence of the issue altogether. Such a concept applies to the conversation surrounding sexual assault in schools, as the choice against its incorporation in health classrooms does not protect students from abuse; rather, it leaves them unequipped in times of crisis.",
      url: "https://nchscourant.com/lack-of-sexual-assault-curriculum-provokes-conversation-amongst-students/"
    },
    {
      title: "We Must Do Better: Rowan Center, Officials Highlight Sexual Assault",
      outlet: "Patch",
      date: "April 3, 2023",
      type: "News Article",
      summary: "Several state and local elected officials representing towns in lower Fairfield County, along with volunteers and staff members from the Rowan Center, gathered outside of Greenwich Town Hall on Monday morning to highlight Sexual Assault Awareness Month.",
      url: "https://patch.com/connecticut/greenwich/we-must-do-better-rowan-center-officials-highlight-sexual-assault"
    },
    {
      title: "Arrests of Connecticut teachers in child sex abuse cases show need for more changes, lawmaker says",
      outlet: "CT Insider",
      date: "April 14, 2024",
      type: "News Article",
      summary: "Two Connecticut teachers were arrested this month after they were accused of sexually assaulting minors, stressing the urgency for legislators to develop policies that will establish stronger procedures to report incidents and protect students.",
      url: "https://www.ctinsider.com/news/article/ct-school-sex-abuse-students-teacher-policy-19397763.php"
    },
    {
      title: "Greenwich’s charity boxing match draws 900 to cheer on local fighters from cops to school board chair",
      outlet: "Darien Times",
      date: "October 2, 2023",
      type: "News Article",
      summary: "GREENWICH — Joe Kelly, the chair of Greenwich’s Board of Education, was a winner at Glove Up Greenwich, a charity boxing event, if only for a few minutes. The scorekeepers initially said Kelly bested Josh Berman, a lawyer from Scarsdale, N.Y., and both left the ring before they were called back. “Ladies and gentlemen, there was a discrepancy in the judges scorecard,” announcer Paul Grassi said shortly after the Kelly/Berman bout ended. “By split decision, your winner, Josh ‘The Verdict’ Berman!”",
      url: "https://www.darientimes.com/news/article/greenwich-boxing-match-charity-stamford-18401715.php?mibextid=Zxz2cZ#photo-24297881"
    },
    {
      title: "Greenwich police vs firefighters? Charity boxing match could feature local rivals, MMA fighter says",
      outlet: "Greenwich Time",
      date: "July 19, 2023",
      type: "News Article",
      summary: "GREENWICH — Roger Sherman Baldwin Park, home of soft rock concerts and lazy harbor strolls, will soon host a raucous crowd cheering as muscle-bound amateurs try to punch each other in the face. Kastriot Xhema, a Greenwich native and professional MMA fighter, is organizing “Glove Up Greenwich,” a boxing event on Sept. 30 that will raise money for local charities. The fights will transform Roger Sherman Baldwin Park with a massive 40 foot by 40 foot square truss decked out with display screens on all sides.",
      url: "https://www.greenwichtime.com/news/article/greenwich-kastriot-xhema-glove-up-boxing-18177322.php"
    },
    {
      title: "Human trafficking can happen anywhere, and to anyone",
      outlet: "Stamford Advocate",
      date: "January 28, 2023",
      type: "Opinion",
      summary: "Human trafficking happens right here in Connecticut. Recent headlines make this abundantly clear: “Bristol Man Charged with Sex Trafficking, Related Offenses,” “Bridgeport man charged with trafficking, prostituting teenaged girl,” “Arrests made in connection to juvenile sex trafficking: Norwalk Police.” In 2021, the Department of Family and Children received 241 reports of child trafficking in Connecticut. Since its inception in 2007, the Human Trafficking Hotline has identified 508 human trafficking cases involving Connecticut victims. And between the years of 2016 and 2021, Connecticut logged 456 arrests for human trafficking-related offenses.",
      url: "https://www.ctinsider.com/opinion/article/opinion-human-trafficking-happens-ct-17746873.php"
    },
    {
      title: "Sexual violence victims seek more help as reports of rape fluctuate in Norwalk",
      outlet: "The Hour",
      date: "October 6, 2021",
      type: "News Article",
      summary: "NORWALK — Reports of rape have fluctuated over the last five years, going up 33 percent in 2020 in the city, according to recent FBI crime data. Whether that’s an increase in reporting or an increase in the crime rate is uncertain, but victims of sexual violence appear to be seeking more counseling and support services. “While perhaps simple instances of disclosure might not have changed, one of the things that we saw that was very dramatic last year was the actual number of services provided to those clients,” said Luke Robbins, director of counseling for The Rowan Center, which supports victims of sexual violence in eight towns in lower Fairfield County.",
      url: "https://www.thehour.com/news/article/Sexual-violence-victims-seek-more-help-as-reports-16514574.php"
    },
    {
      title: "Opinion: Rowan Center following mission",
      outlet: "Stamford Advocate",
      date: "March 28, 2020",
      type: "Opinion",
      summary: "We are in truly unprecedented times, and there are so many urgent and pressing needs in our community and around the nation. At The Rowan Center, the sexual assault resource agency serving Darien, Greenwich, New Canaan, Norwalk, Stamford, Weston, Westport and Wilton, we have responded to the COVID-19 crisis as many other agencies and businesses have: we have shuttered our office and canceled our in-school education programs, and our staff are practicing social isolation to ensure our collective health and safety. But the problem of sexual violence persists and can be exacerbated during such times of strife, stress, and isolation.",
      url: "https://www.stamfordadvocate.com/opinion/article/Opinion-Rowan-Center-following-mission-15163393.php"
    },
    {
      title: "John Breunig: A CT sexual assault crisis center braces for the holidays",
      outlet: "Stamford Advocate",
      date: "November 21, 2020",
      type: "News Article",
      summary: "A-Zoom discussion with two experts on sexual assault has pivoted into a therapy session with tips that could be useful for anyone, at any time, particularly during the holiday season. “The biggest piece of advice I give someone who is trying to make themselves a safe satellite in somebody else’s orbit during the holidays would be the same thing we teach about being trauma-informed,” explains Luke Robbins, who oversees counseling for the Stamford-based Rowan Center.",
      url: "https://www.stamfordadvocate.com/news/article/John-Breunig-A-sexual-assault-crisis-center-15744878.php"
    },
    {
      title: "Opinion: Sexual harassment is in the news. But who is thinking about the victims?",
      outlet: "Stamford Advocate",
      date: "March 6, 2021",
      type: "Opinion",
      summary: "“A governor, A Congressman and a doctor walk into their workplaces …” If only this were “just a joke,” but sexual violence isn’t funny. There are new sexual harassment allegations against public officials in the news. Media accounts tell us that the allegations are serious, but mostly for the potential repercussions for the harassers. Yes, these accused perpetrators will be scrutinized, judged, and possibly punished if they are found to have committed the actions and possible crimes of which they are accused. Any punishment will likely only occur in the Court of Public Opinion, however, as criminal harassment cases are rarely prosecuted. Yes, it is a big story when someone with a high profile is accused of sexual harassment — will they be forced to resign, will they be fired, will other accusers come forward?",
      url: "https://www.stamfordadvocate.com/opinion/article/Opinion-Sexual-harassment-is-in-the-news-But-16005524.php"
    }
  ];

  const mediaItems: Array<{
    title: string;
    outlet: string;
    date: string;
    type: string;
    url?: string;
    summary?: string;
  }> = newsClips.map(clip => ({
    title: clip.title,
    outlet: clip.outlet,
    date: clip.date,
    type: clip.type,
    url: clip.url,
    summary: clip.summary,
  }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Media Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resources for journalists, media professionals, and community partners covering 
            The Rowan Center's work and impact in Southern Fairfield County.
          </p>
        </div>

        {/* Media Contact */}
        <section className="mb-16">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-4">Media Inquiries</CardTitle>
              <CardDescription className="text-lg">
                For interviews, quotes, or additional information about The Rowan Center
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Media Contact</h3>
                  <p className="text-muted-foreground">Sarah Johnson, Executive Director</p>
                  <p className="text-muted-foreground">media@therowancenter.org</p>
                  <p className="text-muted-foreground">(203) 329-2929 ext. 101</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-muted-foreground">Same-day response for urgent inquiries</p>
                  <p className="text-muted-foreground">24-48 hours for standard requests</p>
                  <p className="text-muted-foreground">Available for interviews M-F 9am-5pm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recently in the Media */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Recently in the Media</h2>
          <div className="space-y-4">
            {mediaItems.map((clip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{clip.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{clip.outlet}</p>
                      {clip.summary ? (
                        <p className="text-muted-foreground text-sm mb-3">{clip.summary}</p>
                      ) : null}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {clip.date}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {clip.type}
                        </Badge>
                      </div>
                    </div>
                    {clip.url ? (
                      <Button asChild size="sm" variant="outline">
                        <a href={clip.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Article
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Guidelines */}
        <section>
          <Card className="border-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Media Guidelines</CardTitle>
              <CardDescription>Important considerations when covering trauma and crisis services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Survivor Privacy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Always protect survivor identity and confidentiality</li>
                    <li>• Use trauma-informed language in reporting</li>
                    <li>• Focus on services and support, not graphic details</li>
                    <li>• Provide resources and helpline information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Photography & Video</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Prior approval required for facility photography</li>
                    <li>• No identifying information in backgrounds</li>
                    <li>• Staff interviews available by appointment</li>
                    <li>• B-roll footage available upon request</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Media;