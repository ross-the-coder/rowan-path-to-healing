import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, BookOpen, AlertCircle, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const KidSafeHQ = () => {
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
                <Card>
                  <CardHeader>
                    <CardTitle className="font-seasons">Elementary School Resources</CardTitle>
                    <CardDescription>Age-appropriate safety resources for grades K-5</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-seasons text-lg mb-2">Body Safety & Boundaries</h3>
                        <p className="font-roboto text-muted-foreground">
                          Teaching children about body autonomy, appropriate touch, and how to speak up when something doesn't feel right.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-seasons text-lg mb-2">Online Safety Basics</h3>
                        <p className="font-roboto text-muted-foreground">
                          Introduction to internet safety, protecting personal information, and recognizing unsafe online interactions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="middle" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-seasons">Middle School Resources</CardTitle>
                    <CardDescription>Safety resources for grades 6-8</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-seasons text-lg mb-2">Digital Citizenship</h3>
                        <p className="font-roboto text-muted-foreground">
                          Understanding social media risks, cyberbullying, and responsible online behavior.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-seasons text-lg mb-2">Consent & Boundaries</h3>
                        <p className="font-roboto text-muted-foreground">
                          Age-appropriate discussions about consent, personal boundaries, and healthy relationships.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="high" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-seasons">High School Resources</CardTitle>
                    <CardDescription>Safety resources for grades 9-12</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-seasons text-lg mb-2">Healthy Relationships</h3>
                        <p className="font-roboto text-muted-foreground">
                          Understanding consent, recognizing warning signs of unhealthy relationships, and knowing where to get help.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-seasons text-lg mb-2">College Preparation</h3>
                        <p className="font-roboto text-muted-foreground">
                          Resources about Title IX, campus safety, and bystander intervention.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="college" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-seasons">College Resources</CardTitle>
                    <CardDescription>Resources for college students and young adults</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-seasons text-lg mb-2">Campus Safety</h3>
                        <p className="font-roboto text-muted-foreground">
                          Know your rights under Title IX, reporting options, and campus resources.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-seasons text-lg mb-2">Support Services</h3>
                        <p className="font-roboto text-muted-foreground">
                          Connecting with counseling, advocacy, and recovery resources on and off campus.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
