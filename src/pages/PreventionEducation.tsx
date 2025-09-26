import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, School, Globe } from "lucide-react";

const PreventionEducation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Prevention Education
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Alongside walking with survivors through healing and treatment, we work to prevent harm before it happens with comprehensive, age-appropriate education for students, caregivers, and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery & Access Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Delivery & Access</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons font-medium mb-2">Trauma-Informed</h3>
                  <p className="text-sm font-roboto text-muted-foreground">Programs are trauma-informed, age-appropriate, and aligned with state guidelines</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons font-medium mb-2">Multilingual</h3>
                  <p className="text-sm font-roboto text-muted-foreground">Available in English and Spanish (additional languages by request)</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons font-medium mb-2">Eight Towns</h3>
                  <p className="text-sm font-roboto text-muted-foreground">Offered at no cost to schools in Stamford, Norwalk, Darien, Greenwich, New Canaan, Westport, Weston, and Wilton</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <School className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons font-medium mb-2">Flexible</h3>
                  <p className="text-sm font-roboto text-muted-foreground">We can adapt length to fit class periods, assemblies, or PD schedules</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-16">
              <p className="text-lg font-roboto text-muted-foreground mb-6">
                As a member of the Connecticut Alliance to End Sexual Violence (The Alliance), The Rowan Center supports schools in meeting the state mandate (CGS §17a-101q) for sexual abuse and assault awareness education.
              </p>
              <Button size="lg">Contact Our Education Team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Elementary Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Elementary School Programs</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Tools for Parents: Talking About Boundaries & Preventing Child Sexual Abuse</CardTitle>
                  <p className="font-roboto text-muted-foreground">Parents/guardians of K–2 • 50–60 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Build confidence discussing body boundaries, the "clean and healthy" rule, and practical strategies to prevent abuse. Learn signs of abuse and how to respond to a disclosure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Being the Boss of Your Body</CardTitle>
                  <p className="font-roboto text-muted-foreground">Grades 3–5 • 35–40 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Bodily autonomy, physical and emotional boundaries, and how to get help. Includes age-appropriate reporting tools.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Being the Boss of Your Body + Internet Safety</CardTitle>
                  <p className="font-roboto text-muted-foreground">Grades 4–5 • 45–50 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    All of the above, plus online safety: protecting private information, recognizing unsafe interactions, and what to do when something feels uncomfortable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Middle School Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Middle School Programs</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Being the Boss of Your Body + Internet Safety</CardTitle>
                  <p className="font-roboto text-muted-foreground">Grade 6 • 45–50 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Online safety basics, managing digital interactions, and reinforcing bodily autonomy and reporting options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Joking vs. Harassment: Respecting Boundaries & Making School Safer</CardTitle>
                  <p className="font-roboto text-muted-foreground">Grades 7–8 • 45 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Understanding verbal, non-verbal, written, and physical harassment. Distinguish flirting from harassment using real-life scenarios; learn how and where to report.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Understanding Consent</CardTitle>
                  <p className="font-roboto text-muted-foreground">Grade 8 • 45–55 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Foundations of consent, personal boundaries and values, myths and facts, and where to get help.
                  </p>
                  <p className="text-sm font-roboto text-muted-foreground mt-2">
                    Note: This is not sex education; content is age-appropriate for younger teens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* High School Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">High School Programs</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Consent in Relationships</CardTitle>
                  <p className="font-roboto text-muted-foreground">Grades 9–10 • 45–55 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Skills for respectful conversations, setting expectations, avoiding pressure, and accessing resources.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Sexual Harassment Prevention</CardTitle>
                  <p className="font-roboto text-muted-foreground">Grades 9–10 • 45–55 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Types of harassment, real-world scenarios, reporting options, and a primer on Title IX rights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Know Before You Go</CardTitle>
                  <p className="font-roboto text-muted-foreground">Grades 11–12 • 60–75 minutes or two 40-minute sessions</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Preparing for college/workforce: prevalence and resources, reporting options, bystander intervention, and key protections (e.g., Title IX and the Clery Act).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Adult Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Adult and Community Programs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">The Teacher's Guide</CardTitle>
                  <p className="font-roboto text-muted-foreground">School staff • 60–75 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto mb-4">
                    Best practices for discussing consent and boundaries; taking disclosures and mandated reporting.
                  </p>
                  <ul className="space-y-2 text-sm font-roboto text-muted-foreground">
                    <li>• Elementary focus: myths and misconceptions about child sexual abuse</li>
                    <li>• Middle/High focus: age of consent, sexting, harassment, and assault</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Parent Talk</CardTitle>
                  <p className="font-roboto text-muted-foreground">Parents/guardians • 60–75 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Developmentally appropriate strategies for conversations about sex, consent, boundaries, and safety—at home and online.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Sexual Harassment in the Workplace</CardTitle>
                  <p className="font-roboto text-muted-foreground">Businesses/organizations (3+ employees) • 60–75 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Legal definitions and complaint processes; strategies to prevent harassment. Meets Connecticut employer requirements. Certificate provided.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Working with Victims of Sexual Violence</CardTitle>
                  <p className="font-roboto text-muted-foreground">Law enforcement/criminal justice • 75–90 minutes</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Trauma, trauma-informed interviewing, and best practices. Facilitated by instructors certified under Connecticut standards; counts toward state-mandated continuing education hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rowan Roundtables */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-seasons font-normal mb-8">Rowan Roundtables</h2>
            <p className="text-lg font-roboto text-muted-foreground mb-6">
              The Rowan Roundtable is a safe space dedicated to supporting dialogue between students. Roundtables are purposeful discussions designed to be inclusive and give everyone the opportunity to participate.
            </p>
            <p className="font-roboto text-muted-foreground mb-8">
              Our advocates can facilitate conversations about difficult issues, including, but not limited to, boundaries, consent, gender expectations, sexual violence, and the intersections of different forms of bias and discrimination.
            </p>
            <p className="font-roboto text-muted-foreground mb-8">
              Roundtables are usually 60 – 90 minutes long. Participants will set a goal for the conversation and the moderator will keep the conversation on track.
            </p>
            <Button size="lg">
              Schedule a Rowan Roundtable
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreventionEducation;