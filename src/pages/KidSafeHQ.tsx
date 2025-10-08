import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, AlertCircle, ExternalLink, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const KidSafeHQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const resources = {
    elementary: [
      {
        title: "Body Safety & Boundaries",
        description: "Teaching children about body autonomy, appropriate touch, and how to speak up when something doesn't feel right.",
        topics: ["boundaries", "body safety", "consent", "prevention"]
      },
      {
        title: "Online Safety Basics",
        description: "Introduction to internet safety, protecting personal information, and recognizing unsafe online interactions.",
        topics: ["online safety", "internet", "privacy", "cyberbullying"]
      },
      {
        title: "Trusted Adults",
        description: "Helping children identify safe adults they can talk to when they need help or feel uncomfortable.",
        topics: ["support", "communication", "trust", "reporting"]
      }
    ],
    middle: [
      {
        title: "Digital Citizenship",
        description: "Understanding social media risks, cyberbullying, and responsible online behavior.",
        topics: ["social media", "cyberbullying", "digital literacy", "online safety"]
      },
      {
        title: "Consent & Boundaries",
        description: "Age-appropriate discussions about consent, personal boundaries, and healthy relationships.",
        topics: ["consent", "boundaries", "relationships", "communication"]
      },
      {
        title: "Recognizing Manipulation",
        description: "Teaching youth to identify grooming behaviors and coercive tactics used by predators.",
        topics: ["grooming", "manipulation", "warning signs", "prevention"]
      }
    ],
    high: [
      {
        title: "Healthy Relationships",
        description: "Understanding consent, recognizing warning signs of unhealthy relationships, and knowing where to get help.",
        topics: ["relationships", "consent", "dating violence", "red flags"]
      },
      {
        title: "College Preparation",
        description: "Resources about Title IX, campus safety, and bystander intervention.",
        topics: ["Title IX", "college", "bystander intervention", "campus safety"]
      },
      {
        title: "Digital Safety & Sexting",
        description: "Understanding the legal and personal consequences of sharing intimate images, and how to protect yourself online.",
        topics: ["sexting", "privacy", "legal consequences", "online safety"]
      }
    ],
    college: [
      {
        title: "Campus Safety",
        description: "Know your rights under Title IX, reporting options, and campus resources.",
        topics: ["Title IX", "reporting", "campus resources", "rights"]
      },
      {
        title: "Support Services",
        description: "Connecting with counseling, advocacy, and recovery resources on and off campus.",
        topics: ["counseling", "advocacy", "support", "recovery"]
      },
      {
        title: "Bystander Intervention",
        description: "Learn how to safely intervene when you witness concerning situations and support survivors.",
        topics: ["bystander", "intervention", "prevention", "community"]
      }
    ]
  };

  const filterResources = (resourceList: typeof resources.elementary) => {
    if (!searchQuery) return resourceList;
    
    const query = searchQuery.toLowerCase();
    return resourceList.filter(resource => 
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.topics.some(topic => topic.toLowerCase().includes(query))
    );
  };
  const monitoringTools = [
    {
      name: "Aura Kids",
      description: "Block harmful content and manage how much time kids spend online. Peace of mind while children game online with cyberbullying and online predator threat alerts.",
      url: "#"
    },
    {
      name: "Qustodio",
      description: "This app offers a dashboard that shows you recent activity for any connected device - including time spent on specific apps & sites while allowing you to filter out sites.",
      url: "#"
    },
    {
      name: "Bark",
      description: "Advanced content monitoring for all your kid's devices. Scans texts, social media, images, videos, and audio detecting potential risks such as cyberbullying, self-harm, and inappropriate content.",
      url: "#"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[hsl(var(--blue-accent))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              KidSafeHQ
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Resources, tools, and guidance to keep children safe online and in their communities.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search Section */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources by topic (e.g., consent, cyberbullying, boundaries)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Searching for: <span className="font-medium">"{searchQuery}"</span>
              </p>
            )}
          </div>
        </section>

        {/* Resources by Age */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Resources By Age</h2>
            
            <Tabs defaultValue="elementary" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="elementary" className="font-roboto">Elementary</TabsTrigger>
                <TabsTrigger value="middle" className="font-roboto">Middle School</TabsTrigger>
                <TabsTrigger value="high" className="font-roboto">High School</TabsTrigger>
                <TabsTrigger value="college" className="font-roboto">College</TabsTrigger>
              </TabsList>
              
              <TabsContent value="elementary" className="space-y-4">
                {filterResources(resources.elementary).length > 0 ? (
                  filterResources(resources.elementary).map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="font-seasons text-lg">{resource.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {resource.topics.map((topic, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-roboto text-muted-foreground">
                          {resource.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <p className="font-roboto text-muted-foreground">
                        No resources found matching "{searchQuery}". Try different keywords.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="middle" className="space-y-4">
                {filterResources(resources.middle).length > 0 ? (
                  filterResources(resources.middle).map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="font-seasons text-lg">{resource.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {resource.topics.map((topic, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-roboto text-muted-foreground">
                          {resource.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <p className="font-roboto text-muted-foreground">
                        No resources found matching "{searchQuery}". Try different keywords.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="high" className="space-y-4">
                {filterResources(resources.high).length > 0 ? (
                  filterResources(resources.high).map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="font-seasons text-lg">{resource.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {resource.topics.map((topic, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-roboto text-muted-foreground">
                          {resource.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <p className="font-roboto text-muted-foreground">
                        No resources found matching "{searchQuery}". Try different keywords.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="college" className="space-y-4">
                {filterResources(resources.college).length > 0 ? (
                  filterResources(resources.college).map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="font-seasons text-lg">{resource.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {resource.topics.map((topic, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-roboto text-muted-foreground">
                          {resource.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <p className="font-roboto text-muted-foreground">
                        No resources found matching "{searchQuery}". Try different keywords.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Monitoring Tools */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Monitoring Tools</h2>
            <p className="text-center font-roboto text-muted-foreground mb-8">
              Recommended tools to help parents monitor and protect their children's online activity
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {monitoringTools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-seasons">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-roboto text-sm text-muted-foreground mb-4">
                      {tool.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-seasons text-lg">
                  How do I talk to my child about online safety?
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  Start age-appropriate conversations early and keep them ongoing. Focus on creating an open environment where your child feels comfortable coming to you with concerns. Use real-world examples and discuss what to do if they encounter something uncomfortable online.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-seasons text-lg">
                  What are warning signs that my child might be experiencing cyberbullying?
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  Watch for changes in behavior such as avoiding devices they once enjoyed, seeming anxious after being online, withdrawing from friends and activities, or showing changes in mood or sleep patterns. Keep communication open and let your child know you're there to support them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-seasons text-lg">
                  How much screen time is appropriate for my child?
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  Screen time recommendations vary by age. Focus on balancing screen time with other activities, ensuring online content is age-appropriate, and having regular conversations about what they're doing online. Quality matters as much as quantity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="font-seasons text-lg">
                  What should I do if my child tells me about abuse?
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  Stay calm and listen without judgment. Believe your child and thank them for sharing. Don't ask leading questions or interrogate them. Reassure them it's not their fault and that you're there to help. Contact The Rowan Center or law enforcement for guidance on next steps. We're here 24/7 at (203) 348-9346.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="font-seasons text-lg">
                  How can I tell if an app or game is safe for my child?
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  Check the app's age rating, read reviews from other parents, review privacy settings, and test the app yourself. Look for features like in-app purchases, chat capabilities, and content sharing. Use parental controls and monitoring tools to stay informed about your child's online activities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="font-seasons text-lg">
                  What is grooming and how can I protect my child?
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  Grooming is when someone builds a relationship with a child to gain their trust for the purpose of abuse. Red flags include adults seeking alone time with your child, giving excessive gifts or special attention, or asking them to keep secrets. Teach your child about appropriate boundaries, encourage open communication, and monitor their online and offline relationships.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Tips & Help */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[hsl(var(--blue-accent))]/10 border-[hsl(var(--blue-accent))]/20">
              <CardHeader>
                <AlertCircle className="h-10 w-10 text-[hsl(var(--blue-accent))] mx-auto mb-4" />
                <CardTitle className="text-2xl font-seasons text-center">Need More Help?</CardTitle>
                <CardDescription className="text-center text-base">
                  Our team is here to provide guidance and support
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-roboto mb-6">
                  If you have concerns about your child's safety or need additional resources, please don't hesitate to reach out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[hsl(var(--blue-accent))] hover:bg-[hsl(var(--blue-accent))]/90">
                    Contact Us
                  </Button>
                  <Button size="lg" variant="outline" className="border-[hsl(var(--blue-accent))] text-[hsl(var(--blue-accent))] hover:bg-[hsl(var(--blue-accent))]/10">
                    Browse All Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default KidSafeHQ;
