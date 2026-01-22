import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Stethoscope, Users, Shield, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";

import traumaRecoveryLogo from "@/assets/trauma-recovery-clinic-logo.png";
import counselingHopeImage from "@/assets/group-therapy-diverse.jpg";
import lukeHeadshot from "@/assets/luke-robbins-headshot.webp";
import isabelHeadshot from "@/assets/isabel-negron-headshot.webp";
import zacharyHeadshot from "@/assets/zachary-boccarossa-headshot.webp";
import tainaHeadshot from "@/assets/taina-colon-headshot.webp";
import talkingIcon from "@/assets/TALKING.png";
import eyeIcon from "@/assets/EDMR.png";
import stabilizationIcon from "@/assets/STABLE.png";
import strengthsIcon from "@/assets/strengths.png";

const teamMembers = [
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
    title: "Assitant Clinical Director",
    credentials: "EMDR Provider",
    bio: "Isabel Negron (she/her) is a Licensed Clinical Social Worker (LCSW) and an EMDR provider since 2022. She is working towards her Certified EMDR Therapist status. Isabel received her MSW from Fairfield University in 2022 and is licensed in Connecticut.",
    details: "Isabel started at The Rowan Center in the Fall of 2021 as a master's-level intern before being asked to join our team after graduating with her MSW. She served as our Bilingual (EN/ES) Intake Coordinator before transitioning into her current role as our first Bilingual (EN/ES) Staff Therapist at the Trauma Recovery Practice at TRP.",
    specialties: "Isabel is able to offer direct client services in English and Spanish. She has experience working with clients exhibiting symptoms of depression, anxiety, and PTSD, and especially with victims and survivors of sexual violence and other forms of trauma.",
    languages: ["English", "Spanish"],
    image: isabelHeadshot,
  },
  {
    name: "Taina Colon, LMSW",
    title: "Staff Therapist and Trauma Fellow (EN/ES)",
    credentials: "",
    bio: "Taina Colon (she/her) received her Masters in Social Work (MSW) from Fordham University in 2024, and is a licensed LMSW in Connecticut. Taina is a trained EMDR Provider, and she is pursuing additional specialization in EMDR.",
    details: "While completing her MSW, Taina completed a year-long internship at The Rowan Center, providing short-term crisis counseling services to victims and survivors of sexual violence in our Counseling program. Taina served as the Bilingual/Bicultural Counselor and Intake Coordinator of the Counseling program at the Rowan Center from June of 2024 until June of 2025, before transitioning into her role in the Trauma Recovery Practice. Taina is a certified sexual assault advocate and counselor in the State of Connecticut.",
    specialties: "Taina is able to offer direct client services in English and Spanish.",
    languages: ["English", "Spanish"],
    image: tainaHeadshot,
  },
  {
    name: "Zachary Boccarossa, LMSW",
    title: "Staff Therapist and Trauma Fellow (EN/ES)",
    credentials: "",
    bio: "Zachary Boccarossa (he/him) received his Masters in Social Work (MSW) from Fairfield University in 2025, and is a licensed LMSW in Connecticut. Zachary is a trained EMDR Provider, and he is pursuing additional specialization in EMDR.",
    details: "Zachary also completed his first year MSW internship at The Rowan Center, providing short-term crisis counseling services to victims and survivors of sexual violence in our Counseling program. Zachary is a certified sexual assault advocate and counselor in the State of Connecticut.",
    specialties: "Zachary is able to offer direct client services in English and Spanish. He has experience working with clients exhibiting symptoms of depression, anxiety, and PTSD, and especially with victims and survivors of sexual violence.",
    languages: ["English", "Spanish"],
    image: zacharyHeadshot,
  },
];

const traumaInformedPractices = [
  "You are always in control of what you share and when.",
  "Therapy is collaborative, not directive.",
  "Your therapist will check in about comfort, consent, and pacing.",
  "Your strengths and resilience are recognized, not just your pain.",
];

const clinicalApproach = [
  {
    title: "Talk therapy",
    description: "Exploring thoughts and feelings in a supportive dialogue to process trauma and build resilience.",
    icon: <img src={talkingIcon} alt="" className="h-12 w-12 drop-shadow-md" />,
  },
  {
    title: "EMDR",
    description: "Eye Movement Desensitization and Reprocessing to help reduce the distress of traumatic memories.",
    icon: <img src={eyeIcon} alt="" className="h-12 w-12 drop-shadow-md" />,
  },
  {
    title: "Stabilization and grounding",
    description: "Focusing on grounding techniques and emotional regulation to establish a foundation of safety and calm.",
    icon: <img src={stabilizationIcon} alt="" className="h-12 w-12 drop-shadow-md" />,
  },
  {
    title: "Strength-based and relational work",
    description: "Identifying and building upon personal strengths and resources to foster growth and positive outcomes.",
    icon: <img src={strengthsIcon} alt="" className="h-12 w-12 drop-shadow-md" />,
  },
];

const whoWeServe = [
  "Sexual violence or abuse",
  "Childhood trauma",
  "Intimate partner or dating violence",
  "Trafficking or exploitation",
  "Medical or institutional trauma",
  "Gun violence",
  "Loss, grief, or chronic stress",
  "Combat trauma",
];

const TraumaRecovery = () => {
  return (
    <Layout>
      
      <SEO 
        title="Trauma Recovery Practice Mockup" 
        description="Mockup page for the Trauma Recovery Practice at The Rowan Center."
      />
      {/* Hero Section */}
      <section className="relative min-h-[620px] sm:min-h-[680px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={counselingHopeImage} 
            alt="Diverse group of women in supportive group therapy session empowering each other"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#7464a2] to-transparent"></div>
        </div>
      </section>

      <section className="bg-[#7464a2] text-white">
        <div className="container mx-auto px-4 pt-16 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-seasons font-bold mb-16">
              All Survivors of Trauma Deserve
              <span className="block">Hope and Healing</span>
            </h1>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white text-foreground rounded-2xl p-8 md:p-12 shadow-2xl shadow-[rgba(0,0,0,0.25)] border border-white/60 -mt-2 relative z-10">
              <div className="flex flex-col items-center text-center">
                <img 
                  src={traumaRecoveryLogo} 
                  alt="The Rowan Center - Trauma Recovery Practice" 
                  className="w-48 sm:w-56 md:w-64 mb-6"
                />
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  The Trauma Recovery Practice (TRP) at The Rowan Center is designed for adults who are seeking
                  longer-term therapeutic support after experiencing trauma.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  We understand that healing is not linear, and that beginning therapy can feel vulnerable,
                  intimidating, or uncertain. Our role is to walk alongside you, at a pace that feels right for you.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="bg-white rounded-xl p-6 border border-[#7464a2]/20 shadow-xl shadow-[rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-[#7464a2]" />
                  <h3 className="font-semibold text-foreground">Insurance</h3>
                </div>
                <p className="text-muted-foreground">
                  We are currently serving trauma victims and survivors on the HUSKY health insurance plan.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#7464a2]/20 shadow-xl shadow-[rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-[#7464a2]" />
                  <h3 className="font-semibold text-foreground">Eligibility</h3>
                </div>
                <p className="text-muted-foreground">
                  Clients must be at least 18 years old.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#7464a2]/20 shadow-xl shadow-[rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Stethoscope className="h-6 w-6 text-[#7464a2]" />
                  <h3 className="font-semibold text-foreground">Fully Licensed</h3>
                </div>
                <p className="text-muted-foreground">
                  The Practice is fully licensed by the CT Department of Public Health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#7464a2]/10">
        <div className="container mx-auto px-4">
          {/* Trauma-Informed Care */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-seasons font-normal text-foreground mb-4">What We Mean by Trauma-Informed Care</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Trauma-informed care means that your experiences, boundaries, and autonomy are respected at every
                stage of therapy. Our clinicians work from the understanding that trauma can affect how people feel
                in their bodies, how they relate to others, and how safe the world feels.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-[#7464a2]/20 shadow-xl shadow-[rgba(116,100,162,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(116,100,162,0.3)]">
                <h3 className="text-xl font-semibold text-foreground mb-4">In practice, this means</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {traumaInformedPractices.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#7464a2] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#7464a2]/20 shadow-xl shadow-[rgba(116,100,162,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(116,100,162,0.3)]">
                <h3 className="text-xl font-semibold text-foreground mb-4">A steady, respectful relationship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on creating a therapeutic relationship that feels steady, respectful, and supportive.
                  You guide the pace, and your therapist will work with you to keep care grounded in safety, trust,
                  and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Clinical Approach */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-seasons font-normal text-foreground mb-4">Our Clinical Approach</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our therapists are trained in evidence-based, trauma-responsive modalities that support healing while
                minimizing the risk of re-traumatization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clinicalApproach.map((service) => (
                <div
                  key={service.title}
                  className="flex items-stretch overflow-hidden rounded-2xl border border-[#7464a2]/20 shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)] bg-white min-h-[170px]"
                >
                  <div className="flex w-20 sm:w-24 items-center justify-center bg-[#7464a2] text-white shrink-0">
                    {service.icon}
                  </div>
                  <div className="px-8 py-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mt-6">
              Your therapist will work with you to identify goals that feel meaningful, whether that is reducing
              distress, improving relationships, reconnecting with yourself, or feeling more grounded day to day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Who We Serve */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-seasons font-normal text-foreground mb-4">Who We Serve</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The Trauma Recovery Practice serves adults (18+) who have experienced trauma of any kind, including
                but not limited to the following.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {whoWeServe.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-[#7464a2] text-white text-sm font-medium shadow-md shadow-[rgba(116,100,162,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(116,100,162,0.3)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              You do not need to label your experience for it to be valid.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Access & Privacy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#7464a2]/20 shadow-xl shadow-[rgba(116,100,162,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(116,100,162,0.3)]">
              <h3 className="text-xl font-semibold text-foreground mb-3">Accessibility and Insurance</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are currently able to serve clients using HUSKY Health insurance. We recognize that access to
                long-term therapy is a major barrier for many survivors, and expanding access remains a core
                priority of this practice.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#7464a2]/20 shadow-xl shadow-[rgba(116,100,162,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(116,100,162,0.3)]">
              <h3 className="text-xl font-semibold text-foreground mb-3">Privacy and Confidentiality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy matters. Services are confidential and provided in accordance with state and federal
                laws. Therapists will review confidentiality and its limits with you so you can make informed
                choices about your care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* FAQs */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-seasons font-normal text-foreground mb-4">FAQs</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Answers to common questions about trauma recovery therapy and the intake process.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="types-of-trauma" className="border rounded-2xl overflow-hidden bg-white shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)]">
                  <AccordionTrigger className="text-left font-semibold text-white bg-[#7464a2] px-6 py-4 hover:no-underline">
                    What types of trauma can you help?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4 px-6 pb-6 pt-4">
                    <p>
                      According to the American Psychological Association, trauma is “an emotional response to a
                      terrible event like an accident, crime, natural disaster, physical or emotional abuse, neglect,
                      experiencing or witnessing violence, death of a loved one, war, and more. Immediately after the
                      event, shock and denial are typical. Longer term reactions include unpredictable emotions,
                      flashbacks, strained relationships, and even physical symptoms like headaches or nausea.”
                    </p>
                    <p>
                      Our team members are trained to support clients who have experienced any of those examples of
                      trauma, as well as others not listed, including domestic violence. Specifically, every member of
                      our team is a Certified Sexual Violence Crisis Counselor and Advocate in the State of
                      Connecticut and is specially trained to support victims and survivors of sexual violence.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="emdr" className="border rounded-2xl overflow-hidden bg-white shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)]">
                  <AccordionTrigger className="text-left font-semibold text-white bg-[#7464a2] px-6 py-4 hover:no-underline">
                    What is EMDR and what does it feel like?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4 px-6 pb-6 pt-4">
                    <p>
                      EMDR, or Eye Movement Desensitization and Reprocessing, is a therapy approach that can help some
                      people process distressing or overwhelming experiences in a way that feels more manageable over
                      time.
                    </p>
                    <p>
                      EMDR does not require you to describe your experiences in detail. Instead, it focuses on how
                      memories, emotions, and sensations are held in the body and nervous system. During EMDR, your
                      therapist will guide you through a structured process that includes brief periods of bilateral
                      stimulation, such as eye movements, tapping, or tones, while checking in regularly about your
                      comfort.
                    </p>
                    <p>
                      People experience EMDR differently. Some describe it as focused and grounding, while others
                      notice emotional or physical sensations as memories shift. You remain present and in control
                      throughout the process. You can pause, slow down, or stop at any time, and your therapist will
                      work with you to ensure the pace feels supportive.
                    </p>
                    <p>
                      EMDR is always optional. Your therapist will explain the approach fully and explore whether it
                      feels like a good fit for you.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="therapy-length" className="border rounded-2xl overflow-hidden bg-white shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)]">
                  <AccordionTrigger className="text-left font-semibold text-white bg-[#7464a2] px-6 py-4 hover:no-underline">
                    How long does therapy last?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4 px-6 pb-6 pt-4">
                    <p>
                      There is no single timeline for therapy. The length of treatment is shaped by your goals, needs,
                      and what feels right for you.
                    </p>
                    <p>
                      Some people come to therapy with a specific focus and choose to work for a defined period of
                      time. Others find value in longer-term support as they build stability, explore patterns, or
                      work toward deeper healing. Therapy can also change over time, shifting in focus as your needs
                      evolve.
                    </p>
                    <p>
                      You and your therapist will check in regularly about how therapy is feeling and whether
                      adjustments are needed. You are not expected to commit to a set length of time in advance, and
                      you can revisit your goals whenever you choose.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="not-sure" className="border rounded-2xl overflow-hidden bg-white shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)]">
                  <AccordionTrigger className="text-left font-semibold text-white bg-[#7464a2] px-6 py-4 hover:no-underline">
                    What if I am not sure therapy is right for me?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4 px-6 pb-6 pt-4">
                    <p>
                      It is very common to feel uncertain about starting therapy. You might have questions,
                      hesitations, or mixed feelings, especially if you have had difficult experiences in the past or
                      are unsure what to expect.
                    </p>
                    <p>
                      An initial consultation is simply a chance to learn more, ask questions, and see how the
                      interaction feels. It is not a commitment to ongoing therapy. You do not need to know exactly
                      what you want to work on or how to explain your experiences.
                    </p>
                    <p>
                      Taking time to decide is allowed. Whether you choose to continue, pause, or explore other
                      options, your choice is respected. Seeking information is already a meaningful step toward care,
                      even if you are not ready to begin therapy right now.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="session-length" className="border rounded-2xl overflow-hidden bg-white shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)]">
                  <AccordionTrigger className="text-left font-semibold text-white bg-[#7464a2] px-6 py-4 hover:no-underline">
                    How long are the sessions?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-6 pt-4">
                    Sessions are scheduled for 60 minutes and last between 53 and 59 minutes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="first-session" className="border rounded-2xl overflow-hidden bg-white shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)]">
                  <AccordionTrigger className="text-left font-semibold text-white bg-[#7464a2] px-6 py-4 hover:no-underline">
                    What should I expect at my first session?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-6 pt-4">
                    The first session is focused on making sure each client understands their rights and
                    responsibilities and setting expectations for working together. The remaining time is spent
                    starting on the initial diagnostic assessment and settling on the client’s desired treatment
                    goals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documents" className="border rounded-2xl overflow-hidden bg-white shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)]">
                  <AccordionTrigger className="text-left font-semibold text-white bg-[#7464a2] px-6 py-4 hover:no-underline">
                    What documents do I need to bring?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-6 pt-4">
                    Our system will offer new clients the opportunity to complete their intake forms and upload photos
                    of necessary documents prior to their first session. For clients who prefer to do that in person,
                    a government-issued photo ID and HUSKY card are required at intake.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="husky-insurance" className="border rounded-2xl overflow-hidden bg-white shadow-lg shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(116,100,162,0.28)]">
                  <AccordionTrigger className="text-left font-semibold text-white bg-[#7464a2] px-6 py-4 hover:no-underline">
                    How does HUSKY insurance work at the clinic?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4 px-6 pb-6 pt-4">
                    <p>
                      Adult prospective clients who have HUSKY insurance will have their coverage verified by our team
                      before the first session wherever possible, and otherwise before a second session. For clients
                      whose coverage is confirmed, no further action is required on the part of the client. Our team
                      will take care of all billing and reimbursement matters.
                    </p>
                    <p>
                      It is important to note that HUSKY prohibits providers from charging any fee directly to the
                      client, including for no-shows and late cancellations. As such, it is important for our clients
                      to know that attendance to scheduled sessions is very important, and that a pattern of missed
                      sessions can result in termination of services. Those policies are outlined in the documents
                      provided to the client at intake.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Intake Process */}
          <div>
            <h2 className="text-2xl font-bold text-center text-foreground mb-6">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-[#7464a2]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#7464a2] font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Request an Intake</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out our secure intake form to help us understand your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#7464a2]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#7464a2] font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Meet with our intake coordinator to discuss your goals and preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#7464a2]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#7464a2] font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Begin Treatment</h3>
                <p className="text-sm text-muted-foreground">
                  Start your healing journey with a therapist matched to your needs.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg" className="px-8 bg-[#7464a2] hover:bg-[#7464a2]/90">
                <Link to="/trauma-recovery/intake">Complete the Intake Form</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Meet the Team Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-seasons font-normal text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced, trauma-informed clinicians are here to support you on your healing journey.
              </p>
            </div>

            <div className="space-y-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className={`flex flex-col lg:flex-row gap-8 p-8 rounded-2xl ${
                    index % 2 === 0 ? 'bg-white' : 'bg-white'
                  } border border-[#7464a2]/10 shadow-xl shadow-[rgba(116,100,162,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(116,100,162,0.28)]`}
                >
                  {/* Team member photo */}
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-48 h-48 rounded-2xl object-cover object-top border-2 border-[#7464a2]/20 shadow-lg shadow-[rgba(116,100,162,0.2)]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.title}</p>
                      {member.credentials && (
                        <p className="text-sm text-[#7464a2] italic">{member.credentials}</p>
                      )}
                    </div>

                    {/* Language badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.languages.map((lang) => (
                        <span 
                          key={lang}
                          className="px-3 py-1 bg-[#7464a2]/10 text-[#7464a2] text-sm rounded-full font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3 text-muted-foreground">
                      <p>{member.bio}</p>
                      <p>{member.details}</p>
                      <p className="text-foreground/80">{member.specialties}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Support Information */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">You Don't Have to Heal Alone</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Healing from trauma takes time, and everyone's journey is different. Our experienced, 
              trauma-informed therapists are here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-[#7464a2] text-[#7464a2] hover:bg-[#7464a2]/10">
                Learn More About Our Therapists
              </Button>
              <Button variant="outline" size="lg" className="border-[#7464a2] text-[#7464a2] hover:bg-[#7464a2]/10">
                Insurance & Payment Options
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TraumaRecovery;