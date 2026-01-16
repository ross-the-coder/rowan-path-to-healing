import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, FileText, Briefcase, Eye, Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroAboutImage from "@/assets/hero-about.jpg";
import staffPhoto from "@/assets/rowan-center-staff.jpg";
import lukeHeadshot from "@/assets/luke-robbins-headshot.webp";
import isabelHeadshot from "@/assets/isabel-negron-headshot.webp";
import zacharyHeadshot from "@/assets/zachary-boccarossa-headshot.webp";
import tainaHeadshot from "@/assets/taina-colon-headshot.webp";
import { SEO } from "@/components/SEO";

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
      name: "Sarah Anzellotti",
      title: "Crisis Counselor & Data Quality Coordinator",
      email: "sanzellotti@therowancenter.org",
    },
    {
      name: "Abby Flores",
      title: "Justice Advocate",
      email: "aflores@therowancenter.org",
    },
    {
      name: "Charlotte Gaston",
      title: "Community Educator",
      email: "cgaston@therowancenter.org",
    },
    {
      name: "Anthony Guerrero",
      title: "Community Educator (EN/ES)",
      email: "aguerrero@therowancenter.org",
    },
    {
      name: "Raquel Lopez, LMSW",
      title: "Part-time Counselor & Crisis Advocate Programs Administrator",
      email: "rlopez@therowancenter.org",
    },
    {
      name: "Kathy Miranda",
      title: "Community Educator (EN/ES)",
      email: "kmiranda@therowancenter.org",
    },
    {
      name: "Emma Zelenak",
      title: "Education Coordinator",
      email: "ezelenak@therowancenter.org",
    },
  ];

  const traumaRecoveryTeam: TeamMember[] = [
    {
      name: "Luke Robbins, LCSW",
      title: "Clinical Director (EN/ES/FR)",
      credentials: "EMDRIA-Approved Facilitator and EMDR Certified Provider",
      bio: "Luke Robbins (he/him/his) is a Licensed Clinical Social Worker (LCSW), a Certified EMDR Provider, an EMDRIA-approved EMDR Consultant, and an Approved EMDR Facilitator. Luke received his MSW from the University of Chicago in 2015 and is licensed in Connecticut, Indiana, and Maine.",
      details: "Luke started at The Rowan Center in the Fall of 2019 as the Director of Counseling. Since then, Luke has served as the supervisor and coordinator of our master's-level counseling internship program, and as our Chief Operating Officer, before transitioning to his current role of Clinical Director in June of 2023. In addition to overseeing the day-to-day operations of the Trauma Recovery Practice at The Rowan Center, Luke continues to provide clinical supervision to the LMSWs on our staff, as well as to the MSW interns in both our short-term crisis counseling program and in the practice.",
      specialties: "Luke is able to offer direct client services in English, French, and Spanish. He has experience working with clients exhibiting symptoms of depression, anxiety, PTSD, and OCD, as well as victims and survivors of sexual violence, first responders, adults who suffered trauma as children, anger issues, difficulties with self-esteem and self-reliance, sleep disturbance, and individuals who identify as sex addicts.",
      languages: ["English", "Spanish", "French"],
      image: lukeHeadshot,
    },
    {
      name: "Isabel Negron, LCSW",
      title: "Assistant Practice Director",
      credentials: "EMDR Provider",
      bio: "Isabel Negron (she/her) is a Licensed Clinical Social Worker (LCSW) and an EMDR provider since 2022. She is working towards her Certified EMDR Therapist status. Isabel received her MSW from Fairfield University in 2022 and is licensed in Connecticut.",
      details: "Isabel started at The Rowan Center in the Fall of 2021 as a master's-level intern before being asked to join our team after graduating with her MSW. She served as our Bilingual (EN/ES) Intake Coordinator before transitioning into her current role as our first Bilingual (EN/ES) Staff Therapist at the Trauma Recovery Practice at TRP.",
      specialties: "Isabel is able to offer direct client services in English and Spanish. She has experience working with clients exhibiting symptoms of depression, anxiety, and PTSD, and especially with victims and survivors of sexual violence and other forms of trauma.",
      languages: ["English", "Spanish"],
      image: isabelHeadshot,
    },
    {
      name: "Zachary Boccarossa, LMSW",
      title: "Staff Therapist and Trauma Fellow (EN/ES)",
      credentials: "",
      bio: "Zachary Boccarossa (he/him) received his Masters in Social Work (MSW) from Fairfield University in 2025, and is a licensed LMSW in Connecticut. Zachary is a trained EMDR Provider, and he is pursuing additional specialization in EMDR.",
      details: "Zachary also completed his first year MSW internship at The Rowan Center, providing short-term crisis counseling services to victims and survivors of sexual violence in our Counseling program. Zachary is a certified sexual assault advocate and counselor in the State of Connecticut.",
      specialties: "He is able to offer direct client services in English and Spanish. He has experience working with clients exhibiting symptoms of depression, anxiety, and PTSD, and especially with victims and survivors of sexual violence.",
      languages: ["English", "Spanish"],
      image: zacharyHeadshot,
    },
    {
      name: "Taina Colon, LMSW",
      title: "Staff Therapist and Trauma Fellow (EN/ES)",
      credentials: "",
      bio: "Taina Colon (she/her) received her Masters in Social Work (MSW) from Fordham University in 2024, and is a licensed LMSW in Connecticut. Taina is a trained EMDR Provider, and she is pursuing additional specialization in EMDR.",
      details: "While completing her MSW, Taina completed a year-long internship at The Rowan Center, providing short-term crisis counseling services to victims and survivors of sexual violence in our Counseling program. Taina served as the Bilingual/Bicultural Counselor and Intake Coordinator of the Counseling program at the Rowan Center from June of 2024 until June of 2025, before transitioning into her role in the Trauma Recovery Practice. Taina is a certified sexual assault advocate and counselor in the State of Connecticut.",
      specialties: "She is able to offer direct client services in English and Spanish.",
      languages: ["English", "Spanish"],
      image: tainaHeadshot,
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
          <div className="max-w-3xl text-white">
            <Heart className="h-16 w-16 mb-6 text-white" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Who We Are
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              The Rowan Center exists to prevent sexual violence and other trauma, respond to crisis when harm occurs, and support adult and youth survivors on their path to healing.
            </p>
          </div>
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
                  {/* 1979 - Founded */}
                  <AccordionItem value="1979-founded" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-primary/20 shadow-md text-center">
                        <span className="text-primary font-bold text-xs leading-tight">1979</span>
                      </div>
                      <Card className="w-full border-primary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Founded to serve Lower Fairfield County</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Rowan Center begins providing counseling, advocacy, and community education for survivors
                              in Lower Fairfield County.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 1979 - Stamford Hospital */}
                  <AccordionItem value="1979-hospital" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-md text-center">
                        <span className="text-secondary font-bold text-xs leading-tight">1979</span>
                      </div>
                      <Card className="w-full border-secondary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Began at Stamford Hospital</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Center starts in a trailer behind Stamford Hospital, offering immediate crisis support
                              for survivors arriving at the hospital.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 1980s - Summer Street */}
                  <AccordionItem value="1980s-summer" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-accent/20 shadow-md text-center">
                        <span className="text-accent font-bold text-xs leading-tight">1980s</span>
                      </div>
                      <Card className="w-full border-accent/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Early growth on Summer Street</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              As community needs grow, services expand beyond the hospital setting and move into an office
                              on Summer Street in Stamford.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* Late 1980s–1990s - Inclusive name */}
                  <AccordionItem value="late-1980s-name" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-primary/20 shadow-md text-center">
                        <span className="text-primary font-bold text-xs leading-tight">Late 1980s–1990s</span>
                      </div>
                      <Card className="w-full border-primary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">A more inclusive name</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The organization adopts the name Sexual Assault Crisis Center to reflect that survivors can
                              be of any gender.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 1990s - Glenbrook Road */}
                  <AccordionItem value="1990s-glenbrook" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-md text-center">
                        <span className="text-secondary font-bold text-xs leading-tight">1990s</span>
                      </div>
                      <Card className="w-full border-secondary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Move to Glenbrook Road</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              To support expanding services, the Center relocates to Glenbrook Road in Stamford.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 1990s - Fire resilience */}
                  <AccordionItem value="1990s-fire" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-accent/20 shadow-md text-center">
                        <span className="text-accent font-bold text-xs leading-tight">1990s</span>
                      </div>
                      <Card className="w-full border-accent/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Resilience after a fire</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              After a devastating office fire, services relocate to Dock Street so support can continue
                              without interruption.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2000 - Education focus */}
                  <AccordionItem value="2000-education" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-primary/20 shadow-md text-center">
                        <span className="text-primary font-bold text-xs leading-tight">2000</span>
                      </div>
                      <Card className="w-full border-primary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Education becomes a core focus</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The organization updates its name to include education, strengthening its commitment to
                              prevention.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* Oct 2013 - Return to Summer Street */}
                  <AccordionItem value="2013-summer" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-md text-center">
                        <span className="text-secondary font-bold text-xs leading-tight">Oct 2013</span>
                      </div>
                      <Card className="w-full border-secondary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Return to Summer Street with room to grow</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Rowan Center returns to Summer Street in a much larger space to support continued
                              growth and expanded services.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* 2018 - 1111 Summer Street */}
                  <AccordionItem value="2018-1111" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-accent/20 shadow-md text-center">
                        <span className="text-accent font-bold text-xs leading-tight">2018</span>
                      </div>
                      <Card className="w-full border-accent/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">New home at 1111 Summer Street</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Center moves to 1111 Summer Street, where it is based today.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* Today - 24/7 support */}
                  <AccordionItem value="today-support" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-primary/20 shadow-md text-center">
                        <span className="text-primary font-bold text-xs leading-tight">Today</span>
                      </div>
                      <Card className="w-full border-primary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">24/7 support, healing, and prevention</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              Survivors can access a 24-hour hotline, crisis counseling, support groups, advocacy and
                              accompaniment (medical, police, and court), and prevention education for schools and the
                              community.
                            </p>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </div>
                  </AccordionItem>

                  {/* Today - statewide network */}
                  <AccordionItem value="today-network" className="border-none shrink-0 w-[260px] md:w-[320px] snap-center">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="min-w-[3.5rem] min-h-[3.5rem] px-3 bg-background rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-md text-center">
                        <span className="text-secondary font-bold text-xs leading-tight">Today</span>
                      </div>
                      <Card className="w-full border-secondary/20">
                        <AccordionTrigger className="hover:no-underline px-5 py-3">
                          <CardHeader className="flex-1 text-center p-0">
                            <CardTitle className="text-lg">Part of a statewide Connecticut network</CardTitle>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 text-sm">
                              The Rowan Center is one of nine regional sexual assault crisis programs working together
                              across Connecticut to end sexual violence.
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
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto md:[&>*:last-child]:col-span-2 md:[&>*:last-child]:max-w-xl md:[&>*:last-child]:justify-self-center">
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

          {/* Trauma Recovery Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">Trauma Recovery Team</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {traumaRecoveryTeam.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardHeader className={member.image ? "pb-2" : ""}>
                    <div className="flex flex-col md:flex-row gap-6">
                      {member.image ? (
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-48 h-48 rounded-2xl object-cover object-top border-2 border-accent/20 shadow-md"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                          <Users className="h-7 w-7 text-accent" />
                        </div>
                      )}
                      <div className="flex-1 text-center md:text-left">
                        <CardTitle className="text-2xl mb-1">{member.name}</CardTitle>
                        <CardDescription className="text-accent font-medium text-lg mb-2">
                          {member.title}
                        </CardDescription>
                        {member.credentials && (
                          <p className="text-sm text-accent italic mb-3">{member.credentials}</p>
                        )}
                        
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

          {/* About Staff */}
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Prevention & Education</CardTitle>
              <CardDescription className="text-lg max-w-3xl mx-auto">
                With a focus on promoting a safer and more supportive community, the center's staff 
                delivers age-appropriate awareness and prevention education to various groups, including 
                K-12 students, colleges, corporations, law enforcement, and community organizations.
              </CardDescription>
            </CardHeader>
          </Card>
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
              <Link to="/media">Media Center</Link>
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