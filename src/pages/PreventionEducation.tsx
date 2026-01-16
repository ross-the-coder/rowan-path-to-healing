import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Shield, Download, Users, School, Laptop, ClipboardCheck, BookOpen, Sparkles, Globe, ShieldCheck, MessageCircle, HandHeart, GraduationCap, BookCopy, Calculator } from "lucide-react";
import { PreventionEducationContactForm } from "@/components/PreventionEducationContactForm";
import preventionEducationHero from "@/assets/preventioneducation.jpg";
import { SEO } from "@/components/SEO";

const PreventionEducation = () => {
  return (
    <Layout>
      <SEO 
        title="Prevention Education" 
        description="Our prevention education programs work to eliminate sexual violence and other trauma through community engagement and education."
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={preventionEducationHero} alt="Rowan Center staff engaging with community members at an outreach event" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl text-white">
            <Shield className="h-16 w-16 mb-6 text-white" />
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-seasons font-normal mb-4">What Our Prevention Programs Provide</h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Evidence-driven education that helps students, families, and communities build safer, healthier relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="bg-secondary/10 border-secondary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <School className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="font-seasons text-xl">K-12 School-Based Programs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-muted-foreground">
                    Age-appropriate presentations for every grade that build skills around safety, boundaries, and healthy relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Laptop className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="font-seasons text-xl">Digital & Body Safety</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-muted-foreground">
                    Focused lessons on online safety, consent, and body autonomy tailored to each developmental stage.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-emerald-50 border-emerald-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <CardTitle className="font-seasons text-xl">Family & Community Partnership</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-muted-foreground">
                    Optional parent and educator sessions that reinforce learning at home and in the classroom.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <ClipboardCheck className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="font-seasons text-xl">State-Aligned Curriculum</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-muted-foreground">
                    Programs meet Connecticut requirements for sexual abuse and assault awareness education.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="font-roboto text-muted-foreground">
                To schedule a presentation or customize programming for your classroom, email{" "}
                <a href="mailto:ezelenak@therowancenter.org" className="text-secondary hover:underline">
                  ezelenak@therowancenter.org
                </a>{" "}
                or use the form below.
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
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="elementary-3-4" className="border rounded-lg bg-blue-50/60 border-blue-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-seasons text-xl">3rd-4th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">30-40 minute single session</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• Lessons are tailored for each grade on digital safety, boundaries with peers, and body safety with adults.</li>
                    <li>• Focused online safety discussions on the risks of sharing private information and building critical thinking skills when engaging online.</li>
                    <li>• Using hugs and everyday peer relationship examples, discussion and lesson on body language.</li>
                    <li>• The Clean and Healthy Rule, which explains that adults are not allowed to touch or look at a child's body unless it is to keep them clean or healthy, is used to teach body safety with adults.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="elementary-5" className="border rounded-lg bg-sky-50/60 border-sky-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-sky-600" />
                      </div>
                      <span className="font-seasons text-xl">5th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">40-50 minute single session</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• Interactive program that builds on boundaries and body safety topics from earlier sessions or introduces them if students have not had previous content.</li>
                    <li>• Strong emphasis on the importance of digital safety and addresses risks of inappropriate images on the internet in an age-appropriate manner.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Middle School Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Middle School Programs</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="middle-6" className="border rounded-lg bg-emerald-50/60 border-emerald-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="font-seasons text-xl">6th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">Minimum single 45-50 minute session, optional second session</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• Online safety with a focus on preventing exploitation</li>
                    <li>• Builds and expands on respecting boundaries and body safety topics</li>
                    <li>• Optional second session covers upstander skills</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="middle-7" className="border rounded-lg bg-teal-50/60 border-teal-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-teal-600" />
                      </div>
                      <span className="font-seasons text-xl">7th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">Minimum single 45-50 minute session, optional second session recommended</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• <strong>Session One:</strong> Understanding Sexual Harassment and Sexting</li>
                    <li>• <strong>Session Two:</strong> Understanding Sextortion and Bystander Intervention skills and strategies</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="middle-8" className="border rounded-lg bg-cyan-50/60 border-cyan-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-cyan-600" />
                      </div>
                      <span className="font-seasons text-xl">8th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">Minimum single 45-50 minute session, optional second session recommended</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• <strong>Session One:</strong> Skills for Respectful and Responsible Choices with Consent</li>
                    <li>• <strong>Session Two:</strong> Responsibility and Accountability When Helping Others</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* High School Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">High School Programs</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="high-9" className="border rounded-lg bg-purple-50/60 border-purple-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="font-seasons text-xl">9th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">
                      Minimum single 50 minute session (with optional second session) OR single block period length class (80-90 minutes)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• Define and recognize sexual harassment, including understanding discomfort in body language cues</li>
                    <li>• Learn about Title IX and school rights related to sexual harassment</li>
                    <li>• Discuss risks and legal concerns regarding sexual content online, including sextortion</li>
                    <li>• <strong>Second or longer session:</strong> Empowered bystander skills and strategies</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="high-10" className="border rounded-lg bg-fuchsia-50/60 border-fuchsia-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-fuchsia-100 flex items-center justify-center">
                        <BookCopy className="h-5 w-5 text-fuchsia-600" />
                      </div>
                      <span className="font-seasons text-xl">10th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">
                      Minimum single 50 minute session (with optional second session) OR single block period length class (80-90 minutes)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• Discusses communication skills that are critical to healthy and consensual relationships</li>
                    <li>• Describes qualities of relationships that contribute to understanding consent</li>
                    <li>• Applies knowledge learned to scenarios and video clips to strengthen understanding</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="high-11" className="border rounded-lg bg-rose-50/60 border-rose-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                        <Calculator className="h-5 w-5 text-rose-600" />
                      </div>
                      <span className="font-seasons text-xl">11th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">
                      Minimum single 50 minute session (with optional second session) OR single block period length class (80-90 minutes)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• Discusses definitions and laws related to consent, such as sexual assault and age of consent</li>
                    <li>• Explains power imbalances and their impact on ability to consent</li>
                    <li>• Introduces the Consent Checklist and uses scenarios to help students identify where the Checklist was appropriately used or not</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="high-12" className="border rounded-lg bg-amber-50/60 border-amber-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-amber-600" />
                      </div>
                      <span className="font-seasons text-xl">12th Grade</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">
                      Minimum single 50 minute session (with optional second session) OR single block period length class (80-90 minutes)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-3 font-roboto">
                    <li>• Defines legal rights and protections at college or university and in the workplace</li>
                    <li>• Students research the Clery Act for their school and have critical discussions on considering safety at their colleges or universities of interest</li>
                    <li>• Explains the interactions and risks of intoxication and consent</li>
                    <li>• Discusses rape culture and implementing empowered bystander skills to address unsafe actions in the community</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Community Programs</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="community-1" className="border rounded-lg bg-teal-50/60 border-teal-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <HandHeart className="h-5 w-5 text-teal-600" />
                      </div>
                      <span className="font-seasons text-xl">Identifying and Preventing Child Sexual Abuse</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">Length tailored to meet your needs</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p className="font-roboto">
                    Tailored programs for parents, teachers, or any youth-serving professionals or community members.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="community-2" className="border rounded-lg bg-emerald-50/60 border-emerald-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="font-seasons text-xl">Working With Victims of Sexual Violence</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">Length tailored to meet your needs</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p className="font-roboto mb-4">
                    Covers trauma-informed practices, resource information and referral process, and best practices.
                  </p>
                  <p className="text-sm font-roboto text-muted-foreground">
                    Tailored programs for police (POST Cert), healthcare workers, or any service professionals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="community-3" className="border rounded-lg bg-indigo-50/60 border-indigo-100">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Globe className="h-5 w-5 text-indigo-600" />
                      </div>
                      <span className="font-seasons text-xl">Know Before You Go</span>
                    </div>
                    <span className="text-sm font-roboto text-muted-foreground">Parents and Community • 50-60 minutes recommended</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p className="font-roboto">
                    How to empower your college student to make safer, more informed choices to prevent and address risks of sexual violence in college communities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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