import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, School, Globe, Download } from "lucide-react";
import { PreventionEducationContactForm } from "@/components/PreventionEducationContactForm";

const PreventionEducation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Sexual Violence Prevention Education
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              The mission of the Education Department at The Rowan Center is to end sexual violence. We advance this mission through evidence-driven education, training, outreach, and primary prevention activities that foster empowerment, connection, and lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-roboto text-muted-foreground mb-6">
              Through responsive communication and meaningful partnerships with community members, schools, and organizations, we, alongside our community, are co-creating a world that is free from sexual violence.
            </p>
            <p className="text-lg font-roboto text-muted-foreground mb-6">
              The Rowan Center offers free relevant and age-appropriate presentations for grades K-12 on the topic of sexual violence prevention. In elementary school, we provide education on digital safety, body safety, and age-appropriate discussions of boundaries. In middle and high school we introduce topics such as sexual harassment, sexting, sextortion, consent, sexual violence resources and reporting; and in high school we discuss college and workplace safety.
            </p>
            <p className="text-lg font-roboto text-muted-foreground mb-6">
              Our curricula suits the unique needs of each grade level and meets the state guidelines in Connecticut General Statute Sec. 17a-101q, which mandates implementation of sexual abuse and assault awareness programs.
            </p>
            <p className="text-lg font-roboto text-muted-foreground mb-8">
              If you would like to schedule a presentation for your class or have any questions on our programming, please email{" "}
              <a href="mailto:ezelenak@therowancenter.org" className="text-secondary hover:underline">
                ezelenak@therowancenter.org
              </a>{" "}
              or fill out the form below. Please know we are always open to making adjustments to our programs to suit your classroom's unique needs if our core presentations are not an ideal fit.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <p className="font-roboto text-muted-foreground">
                <strong>Note:</strong> Parent presentations and teacher presentations are always recommended any time The Rowan Center will be presenting to students. This provides parents an opportunity to ask questions about the program and learn how to continue the lessons at home and allows teachers to incorporate best practices that align with implementing a comprehensive sexual violence prevention program into daily classroom behavior. We understand, however, that this will not always be possible and they are optional. The Rowan Center can also provide parent letter templates that explain our programs and inform parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* K-2 Curriculum Download */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-seasons font-normal mb-6">K-2nd Grade Curriculum</h2>
            <p className="text-lg font-roboto text-muted-foreground mb-8">
              The Rowan Center's K-2nd curriculum has the options of being presented by our trained educators or being led by classroom teachers. Please reach out if you would like to request a presentation for your K-2nd students from one of our trained educators, or download the curriculum below to implement in your school or classroom!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                K-2 Curriculum (2025-2026)
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-5 w-5" />
                Spanish K-2 Curriculum (2025-2026)
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-5 w-5" />
                Spanish Book PDFs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Elementary Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Elementary School Programs</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">3rd-4th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">30-40 minute single session</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• Lessons are tailored for each grade on digital safety, boundaries with peers, and body safety with adults.</li>
                    <li>• Focused online safety discussions on the risks of sharing private information and building critical thinking skills when engaging online.</li>
                    <li>• Using hugs and everyday peer relationship examples, discussion and lesson on body language.</li>
                    <li>• The Clean and Healthy Rule, which explains that adults are not allowed to touch or look at a child's body unless it is to keep them clean or healthy, is used to teach body safety with adults.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">5th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">40-50 minute single session</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• Interactive program that builds on boundaries and body safety topics from earlier sessions or introduces them if students have not had previous content.</li>
                    <li>• Strong emphasis on the importance of digital safety and addresses risks of inappropriate images on the internet in an age-appropriate manner.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Middle School Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Middle School Programs</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">6th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">Minimum single 45-50 minute session, optional second session</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• Online safety with a focus on preventing exploitation</li>
                    <li>• Builds and expands on respecting boundaries and body safety topics</li>
                    <li>• Optional second session covers upstander skills</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">7th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">Minimum single 45-50 minute session, optional second session recommended</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• <strong>Session One:</strong> Understanding Sexual Harassment and Sexting</li>
                    <li>• <strong>Session Two:</strong> Understanding Sextortion and Bystander Intervention skills and strategies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">8th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">Minimum single 45-50 minute session, optional second session recommended</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• <strong>Session One:</strong> Skills for Respectful and Responsible Choices with Consent</li>
                    <li>• <strong>Session Two:</strong> Responsibility and Accountability When Helping Others</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* High School Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">High School Programs</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">9th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">Minimum single 50 minute session (with optional second session) OR single block period length class (80-90 minutes)</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• Define and recognize sexual harassment, including understanding discomfort in body language cues</li>
                    <li>• Learn about Title IX and school rights related to sexual harassment</li>
                    <li>• Discuss risks and legal concerns regarding sexual content online, including sextortion</li>
                    <li>• <strong>Second or longer session:</strong> Empowered bystander skills and strategies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">10th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">Minimum single 50 minute session (with optional second session) OR single block period length class (80-90 minutes)</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• Discusses communication skills that are critical to healthy and consensual relationships</li>
                    <li>• Describes qualities of relationships that contribute to understanding consent</li>
                    <li>• Applies knowledge learned to scenarios and video clips to strengthen understanding</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">11th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">Minimum single 50 minute session (with optional second session) OR single block period length class (80-90 minutes)</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• Discusses definitions and laws related to consent, such as sexual assault and age of consent</li>
                    <li>• Explains power imbalances and their impact on ability to consent</li>
                    <li>• Introduces the Consent Checklist and uses scenarios to help students identify where the Checklist was appropriately used or not</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">12th Grade</CardTitle>
                  <p className="font-roboto text-muted-foreground">Minimum single 50 minute session (with optional second session) OR single block period length class (80-90 minutes)</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li>• Defines legal rights and protections at college or university and in the workplace</li>
                    <li>• Students research the Clery Act for their school and have critical discussions on considering safety at their colleges or universities of interest</li>
                    <li>• Explains the interactions and risks of intoxication and consent</li>
                    <li>• Discusses rape culture and implementing empowered bystander skills to address unsafe actions in the community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Community Programs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Identifying and Preventing Child Sexual Abuse</CardTitle>
                  <p className="font-roboto text-muted-foreground">Length tailored to meet your needs</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Tailored programs for parents, teachers, or any youth-serving professionals or community members.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Working With Victims of Sexual Violence</CardTitle>
                  <p className="font-roboto text-muted-foreground">Length tailored to meet your needs</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto mb-4">
                    Covers trauma-informed practices, resource information and referral process, and best practices.
                  </p>
                  <p className="text-sm font-roboto text-muted-foreground">
                    Tailored programs for police (POST Cert), healthcare workers, or any service professionals.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="font-seasons text-xl">Know Before You Go</CardTitle>
                  <p className="font-roboto text-muted-foreground">Parents and Community • 50-60 minutes recommended</p>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    How to empower your college student to make safer, more informed choices to prevent and address risks of sexual violence in college communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <PreventionEducationContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default PreventionEducation;