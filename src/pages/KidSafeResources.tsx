import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, ExternalLink, GraduationCap, School, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Aggregated resources from all age groups
const allResources = {
  elementary: {
    title: "Elementary School (K-5)",
    icon: School,
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
      },
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
      }
    ]
  },
  middle: {
    title: "Middle School (6-8)",
    icon: GraduationCap,
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
      },
      {
        category: "Reporting & Support Services",
        links: [
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
      },
      {
        category: "Legal and Reporting Resources",
        links: [
          { title: "Take It Down - NCMEC" }
        ]
      }
    ]
  },
  high: {
    title: "High School (9-12)",
    icon: Building,
    resources: [
      {
        category: "Safety Resources",
        links: [
          { title: "NCMEC Take It Down Program - Remove intimate images of minors" },
          { title: "CyberTipline.org - Report online exploitation" },
          { title: "NCMEC - Online Safety Resources" }
        ]
      },
      {
        category: "Relationship Resources",
        links: [
          { title: "Love Is Respect - National resource for healthy relationships" },
          { title: "Connecticut Coalition Against Domestic Violence" },
          { title: "RAINN - Rape, Abuse & Incest National Network" }
        ]
      },
      {
        category: "Support Resources",
        links: [
          { title: "National Sexual Assault Hotline - 1-800-656-4673" },
          { title: "Connecticut Alliance to End Sexual Violence" }
        ]
      },
      {
        category: "Transition Resources",
        links: [
          { title: "Know Your IX - Student rights organization" },
          { title: "U.S. Equal Employment Opportunity Commission" },
          { title: "Connecticut Commission on Human Rights and Opportunities" }
        ]
      }
    ]
  }
};

const KidSafeResources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-orange-500/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Age Groups
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-12 w-12 text-orange-600" />
              <h1 className="text-4xl font-bold">KidSafe Resources</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              A comprehensive collection of external resources, guides, and articles for parents, educators, and caregivers across all age groups.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="space-y-8">
          {Object.entries(allResources).map(([key, section]) => {
            const IconComponent = section.icon;
            return (
              <Card key={key} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription>Resources for {section.title.toLowerCase()} students and their families</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="multiple" className="w-full">
                    {section.resources.map((resourceGroup, idx) => (
                      <AccordionItem key={idx} value={`${key}-resource-${idx}`}>
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                          <span className="flex items-center gap-2">
                            📚 {resourceGroup.category}
                            <span className="text-xs text-muted-foreground font-normal">
                              ({resourceGroup.links.length} resources)
                            </span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-2 pt-2">
                          {resourceGroup.links.map((link, linkIdx) => (
                            <div 
                              key={linkIdx}
                              className="flex items-start gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                            >
                              <ExternalLink className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{link.title}</span>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
          <CardContent className="pt-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Need More Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you can't find what you're looking for, our team is here to help.
            </p>
            <Button asChild variant="default" className="bg-orange-600 hover:bg-orange-700">
              <Link to="/crisis-services">Contact Support Services</Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default KidSafeResources;
