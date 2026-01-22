import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, FileText, Briefcase, Eye, Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroAboutImage from "@/assets/hero-about.jpg";
import staffPhoto from "@/assets/rowan-center-staff.jpg";
import rowanCenterLogo from "@/assets/rowan-center-logo.png";
import oldLogo from "@/assets/old-logo.png";
import logo2019 from "@/assets/logo-2019.png";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";

type TeamMember = {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  image?: string;
  credentials?: string;
  bio?: string;
  details?: string;
  specialties?: string;
  languages?: string[];
};

const About = () => {
  const leadershipTeam: TeamMember[] = [
    {
      name: "Sharon Walker Epps",
      title: "Chief Executive Officer",
      email: "swalkerepps@therowancenter.org",
    },
    {
      name: "Cody Baird",
      title: "Chief Operating Officer",
      email: "cbaird@therowancenter.org",
      phone: "203-487-0653",
    },
    {
      name: "Luke Robbins, LCSW",
      title: "Clinical Director",
      email: "lrobbins@traumarecoveryct.org",
    },
    {
      name: "Leonora Campbell",
      title: "Director of Education and Outreach",
      email: "lcampbell@therowancenter.org",
    },
    {
      name: "Marsha Placide, LPCA, NCC, ATR-P",
      title: "Director of Counseling (EN/HC)",
      email: "mplacide@therowancenter.org",
    },
  ];

  const staffMembers: TeamMember[] = [
    {
      name: "Abby Flores",
      title: "Justice Advocate",
      email: "aflores@therowancenter.org",
    },
    {
      name: "Anthony Guerrero",
      title: "Community Educator (EN/ES)",
      email: "aguerrero@therowancenter.org",
    },
    {
      name: "Charlotte Gaston",
      title: "Community Educator",
      email: "cgaston@therowancenter.org",
    },
    {
      name: "Emma Zelenak",
      title: "Education Coordinator",
      email: "ezelenak@therowancenter.org",
    },
    {
      name: "Isabel Negron, LCSW",
      title: "Assistant Clinical Director",
      email: "inegron@traumarecoveryct.org",
    },
    {
      name: "Kathy Miranda",
      title: "Community Educator (EN/ES)",
      email: "kmiranda@therowancenter.org",
    },
    {
      name: "Raquel Lopez, LCSW",
      title: "Part-time Crisis Counselor & Crisis Advocate Programs Administrator",
      email: "rlopez@therowancenter.org",
    },
    {
      name: "Sarah Anzellotti",
      title: "Crisis Counselor & Data Quality Coordinator",
      email: "sanzellotti@therowancenter.org",
    },
    {
      name: "Taina Colon, LMSW",
      title: "Staff Therapist and Trauma Fellow",
      email: "tcolon@traumarecoveryct.org",
    },
    {
      name: "Zachary Boccarossa, LMSW",
      title: "Staff Therapist and Trauma Fellow",
      email: "zboccarossa@traumarecoveryct.org",
    },
  ];
  return <Layout>
      <SEO 
        title="About Us" 
        description="Learn about The Rowan Center's mission to prevent sexual violence, our leadership team, and our commitment to supporting survivors in our community."
      />
      {/* Full Bleed Hero with Photo Overlay */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroAboutImage} alt="Team members collaborating at The Rowan Center" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Reveal>
            <div className="max-w-3xl text-white">
              <Heart className="h-16 w-16 mb-6 text-white" />
              <h1 className="text-5xl font-seasons font-normal mb-6">
                Who We Are
              </h1>
              <p className="text-xl font-roboto font-light text-white/90 mb-8">
                The Rowan Center exists to prevent sexual violence and other trauma, respond to crisis when harm occurs, and support adult and youth survivors on their path to healing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-seasons font-normal text-foreground mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For 46 years, The Rowan Center has been a beacon of hope and healing in our community, 
              dedicated to preventing sexual violence and supporting survivors on their path to recovery.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Our Journey</h3>
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Horizontal Timeline Line - sits behind the markers */}
                <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-primary via-secondary to-accent hidden md:block"></div>

                <Accordion type="multiple" className="flex gap-6 overflow-x-auto pb-4 md:pb-6 md:px-1 snap-x snap-mandatory">
                  {/* 1977 - Founded */}
                  <AccordionItem value="1977-founded" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-primary/20 shadow-md text-center">
                        <span className="text-primary font-bold text-xs leading-tight">1977</span>
                      </div>
                      <Card className="w-full border-primary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Started as Rape Crisis Group</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              Started in a trailer at Stamford Hospital as the Rape Crisis Group, offering immediate crisis support
                              for survivors.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 1979 - Incorporated */}
                  <AccordionItem value="1979-incorporated" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-md text-center">
                        <span className="text-secondary font-bold text-xs leading-tight">1979</span>
                      </div>
                      <Card className="w-full border-secondary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Became Rape Crisis Center</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              Incorporated as a non-profit and became the Rape Crisis Center.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 1986 - Name change */}
                  <AccordionItem value="1986-name" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-accent/20 shadow-md text-center">
                        <span className="text-accent font-bold text-xs leading-tight">1986</span>
                      </div>
                      <Card className="w-full border-accent/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Rape and Sexual Abuse Crisis Center</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              Expanded name to Rape and Sexual Abuse Crisis Center to reflect broader mission.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 1998 - SACC */}
                  <AccordionItem value="1998-sacc" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-primary/20 shadow-md text-center">
                        <span className="text-primary font-bold text-xs leading-tight">1998</span>
                      </div>
                      <Card className="w-full border-primary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Sexual Abuse Crisis Services</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              Changed name to Sexual Abuse Crisis Services (SACC).
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2001 - Education added */}
                  <AccordionItem value="2001-education" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-md text-center">
                        <span className="text-secondary font-bold text-xs leading-tight">2001</span>
                      </div>
                      <Card className="w-full border-secondary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Education becomes core mission</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              Implemented education as part of the program and became Sexual Assault Crisis and Education Center,
                              adding education to the mission.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2009 - New logo */}
                  <AccordionItem value="2009-logo" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-accent/20 shadow-md text-center">
                        <span className="text-accent font-bold text-xs leading-tight">2009</span>
                      </div>
                      <Card className="w-full border-accent/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">New logo introduced</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <img
                              src={oldLogo}
                              alt="The Rowan Center logo introduced in 2009"
                              className="w-full max-w-[220px] mx-auto mb-4 object-contain"
                            />
                            <p className="text-muted-foreground mb-4 text-sm">
                              A new logo was introduced to represent the organization.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2015 - Advisory Council */}
                  <AccordionItem value="2015-council" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-primary/20 shadow-md text-center">
                        <span className="text-primary font-bold text-xs leading-tight">2015</span>
                      </div>
                      <Card className="w-full border-primary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Advisory Council formed</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Advisory Council was formed to provide guidance and support.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2019 - Rowan Center name */}
                  <AccordionItem value="2019-rowan" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-md text-center">
                        <span className="text-secondary font-bold text-xs leading-tight">2019</span>
                      </div>
                      <Card className="w-full border-secondary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">The Rowan Center name adopted</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <img
                              src={logo2019}
                              alt="The Rowan Center logo introduced in 2019"
                              className="w-full max-w-[220px] mx-auto mb-4 object-contain"
                            />
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Rowan Center name was adopted along with a new logo.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2024 - Trauma Recovery Clinic */}
                  <AccordionItem value="2024-clinic" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-accent/20 shadow-md text-center">
                        <span className="text-accent font-bold text-xs leading-tight">2024</span>
                      </div>
                      <Card className="w-full border-accent/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Trauma Recovery Clinic opened</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Trauma Recovery Clinic opened to provide specialized clinical services for survivors.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2025 - Impact grant */}
                  <AccordionItem value="2025-grant" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-primary/20 shadow-md text-center">
                        <span className="text-primary font-bold text-xs leading-tight">2025</span>
                      </div>
                      <Card className="w-full border-primary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">KidSafeHQ grant awarded</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              Awarded grant from Impact to develop KidSafeHQ.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2025 - Rebrand */}
                  <AccordionItem value="2025-rebrand" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-md text-center">
                        <span className="text-secondary font-bold text-xs leading-tight">2025</span>
                      </div>
                      <Card className="w-full border-secondary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Complete rebrand</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <img
                              src={rowanCenterLogo}
                              alt="The Rowan Center logo"
                              className="h-14 mx-auto mb-4"
                            />
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Rowan Center underwent a complete rebrand to better reflect its mission and community.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2026 - KidSafeHQ Launch */}
                  <AccordionItem value="2026-kidsafe" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-accent/20 shadow-md text-center">
                        <span className="text-accent font-bold text-xs leading-tight">2026</span>
                      </div>
                      <Card className="w-full border-accent/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">KidSafeHQ launched</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              KidSafeHQ launched to provide child safety education and resources.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                </Accordion>
              </div>
            </div>
          </div>

          {/* Key Milestones Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">46+</CardTitle>
                <CardDescription className="text-lg">Years of Service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  [Placeholder - Add milestone about years of service or number of survivors served]
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">20+</CardTitle>
                <CardDescription className="text-lg">Programs & Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  [Placeholder - Add milestone about programs offered or services provided]
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">22,100</CardTitle>
                <CardDescription className="text-lg">Community Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  [Placeholder - Add milestone about community reach, education programs, or impact metrics]
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Section */}
            <Card className="border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative bg-gradient-to-br from-primary/5 via-background to-background">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
              <CardHeader className="text-center pt-8 pb-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center shadow-lg border-2 border-primary/20">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-2 font-seasons font-normal text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-lg text-center leading-relaxed text-foreground/90 font-roboto">
                  The Rowan Center exists to prevent sexual violence and other trauma, respond to crisis when harm occurs,
                  and support adult and youth survivors on their path to healing.
                </p>
              </CardContent>
            </Card>

            {/* Vision Section */}
            <Card className="border-secondary/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative bg-gradient-to-br from-secondary/5 via-background to-background">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/60"></div>
              <CardHeader className="text-center pt-8 pb-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center shadow-lg border-2 border-secondary/20">
                  <Eye className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-3xl mb-2 font-seasons font-normal text-secondary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-lg text-center leading-relaxed text-foreground/90 font-roboto">
                  We envision a future where trauma and abuse are no longer normalized or hidden; where children grow up safe, 
                  communities are educated and equipped to prevent harm, and every survivor has equitable access to care, 
                  justice, and stigma-free healing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Staff Section */}
        <section id="team" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              The Rowan Center staff plays a critical role in supporting survivors of sexual violence. 
              Their services include counseling for survivors to process their experiences, advocacy to 
              help navigate present circumstances such as hospital exams and court proceedings, and 
              community education aimed at preventing sexual violence in the future.
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-12">
            <img 
              src={staffPhoto} 
              alt="The Rowan Center staff members pose for a group photo" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Leadership Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">Leadership Team</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {leadershipTeam.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardHeader className={member.image ? "pb-2" : ""}>
                    <div className="flex flex-col md:flex-row gap-6">
                      {member.image ? (
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-48 h-48 rounded-2xl object-cover object-top border-2 border-primary/20 shadow-md"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                          <Users className="h-7 w-7 text-primary" />
                        </div>
                      )}
                      <div className="flex-1 text-center md:text-left">
                        <CardTitle className="text-2xl mb-1">{member.name}</CardTitle>
                        <CardDescription className="text-primary font-medium text-lg mb-2">
                          {member.title}
                        </CardDescription>
                        {member.credentials && (
                          <p className="text-sm text-accent italic mb-3">{member.credentials}</p>
                        )}
                        
                        <div className="flex flex-col gap-2 mb-4">
                          <a 
                            href={`mailto:${member.email}`}
                            className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            {member.email}
                          </a>
                          {member.phone && (
                            <a 
                              href={`tel:${member.phone}`}
                              className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Phone className="h-4 w-4" />
                              {member.phone}
                            </a>
                          )}
                        </div>

                        {member.languages && (
                          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            {member.languages.map((lang) => (
                              <span 
                                key={lang}
                                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {member.bio && (
                    <CardContent>
                      <div className="space-y-3 text-muted-foreground text-sm border-t pt-4 mt-2">
                        <p>{member.bio}</p>
                        {member.details && <p>{member.details}</p>}
                        {member.specialties && <p className="text-foreground/80 font-medium italic">{member.specialties}</p>}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Staff Members */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">Staff Members</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {staffMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardHeader className={member.image ? "pb-2" : ""}>
                    <div className="flex flex-col md:flex-row gap-6">
                      {member.image ? (
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-48 h-48 rounded-2xl object-cover object-top border-2 border-secondary/20 shadow-md"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                          <Users className="h-7 w-7 text-secondary" />
                        </div>
                      )}
                      <div className="flex-1 text-center md:text-left">
                        <CardTitle className="text-2xl mb-1">{member.name}</CardTitle>
                        <CardDescription className="text-secondary font-medium text-lg mb-2">
                          {member.title}
                        </CardDescription>
                        {member.credentials && (
                          <p className="text-sm text-accent italic mb-3">{member.credentials}</p>
                        )}
                        
                        <div className="flex flex-col gap-2 mb-4">
                          <a 
                            href={`mailto:${member.email}`}
                            className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            {member.email}
                          </a>
                        </div>

                        {member.languages && (
                          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            {member.languages.map((lang) => (
                              <span 
                                key={lang}
                                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {member.bio && (
                    <CardContent>
                      <div className="space-y-3 text-muted-foreground text-sm border-t pt-4 mt-2">
                        <p>{member.bio}</p>
                        {member.details && <p>{member.details}</p>}
                        {member.specialties && <p className="text-foreground/80 font-medium italic">{member.specialties}</p>}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

        </section>

        {/* Quick Links Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Learn More</h2>
            <p className="text-lg text-muted-foreground">
              Explore additional information about our organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Financials & Reports</CardTitle>
                <CardDescription>
                  View our annual reports, financial statements, and transparency documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to="/financials">View Financials</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Join Our Team</CardTitle>
                <CardDescription>
                  Discover career opportunities and make a difference in our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to="/careers">View Careers</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sub-Navigation */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Additional Information</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/board-of-directors">Board of Directors</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/media">In the Media</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/blog">Blog</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>;
};
export default About;