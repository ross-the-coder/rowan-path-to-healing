import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Users, Shield } from "lucide-react";
import { TraumaRecoveryIntakeForm } from "@/components/TraumaRecoveryIntakeForm";

import lukeHeadshot from "@/assets/luke-robbins-headshot.webp";
import isabelHeadshot from "@/assets/isabel-negron-headshot.webp";
import zacharyHeadshot from "@/assets/zachary-boccarossa-headshot.webp";
import tainaHeadshot from "@/assets/taina-colon-headshot.webp";

const teamMembers = [
  {
    name: "Luke Robbins, LCSW",
    title: "Clinical Director (EN/ES/FR)",
    credentials: "EMDRIA-Approved Facilitator and EMDR Certified Provider",
    bio: "Luke Robbins (he/him/his) is a Licensed Clinical Social Worker (LCSW), a Certified EMDR Provider, an EMDRIA-approved EMDR Consultant, and an Approved EMDR Facilitator. Luke received his MSW from the University of Chicago in 2015 and is licensed in Connecticut, Indiana, and Maine.",
    details: "Luke started at The Rowan Center in the Fall of 2019 as the Director of Counseling. Since then, Luke has served as the supervisor and coordinator of our master's-level counseling internship program, and as our Chief Operating Officer, before transitioning to his current role of Clinical Director in June of 2023. In addition to overseeing the day-to-day operations of the Trauma Recovery Clinic at The Rowan Center, Luke continues to provide clinical supervision to the LMSWs on our staff, as well as to the MSW interns in both our short-term crisis counseling program and in the clinic.",
    specialties: "Luke is able to offer direct client services in English, French, and Spanish. He has experience working with clients exhibiting symptoms of depression, anxiety, PTSD, and OCD, as well as victims and survivors of sexual violence, first responders, adults who suffered trauma as children, anger issues, difficulties with self-esteem and self-reliance, sleep disturbance, and individuals who identify as sex addicts.",
    languages: ["English", "Spanish", "French"],
    image: lukeHeadshot,
  },
  {
    name: "Isabel Negron, LCSW",
    title: "Assistant Clinic Director",
    credentials: "EMDR Provider",
    bio: "Isabel Negron (she/her) is a Licensed Clinical Social Worker (LCSW) and an EMDR provider since 2022. She is working towards her Certified EMDR Therapist status. Isabel received her MSW from Fairfield University in 2022 and is licensed in Connecticut.",
    details: "Isabel started at The Rowan Center in the Fall of 2021 as a master's-level intern before being asked to join our team after graduating with her MSW. She served as our Bilingual (EN/ES) Intake Coordinator before transitioning into her current role as our first Bilingual (EN/ES) Staff Therapist at the Trauma Recovery Clinic at TRC.",
    specialties: "Isabel is able to offer direct client services in English and Spanish. She has experience working with clients exhibiting symptoms of depression, anxiety, and PTSD, and especially with victims and survivors of sexual violence and other forms of trauma.",
    languages: ["English", "Spanish"],
    image: isabelHeadshot,
  },
  {
    name: "Zachary Boccarossa, LMSW",
    title: "Bilingual (EN/ES) Staff Therapist and Trauma Fellow",
    credentials: "",
    bio: "Zachary Boccarossa (he/him) received his Masters in Social Work (MSW) from Fairfield University in 2025, and is a licensed LMSW in Connecticut. Zachary is a trained EMDR Provider, and he is pursuing additional specialization in EMDR.",
    details: "Zachary also completed his first year MSW internship at The Rowan Center, providing short-term crisis counseling services to victims and survivors of sexual violence in our Counseling program. Zachary is a certified sexual assault advocate and counselor in the State of Connecticut.",
    specialties: "He is able to offer direct client services in English and Spanish. He has experience working with clients exhibiting symptoms of depression, anxiety, and PTSD, and especially with victims and survivors of sexual violence.",
    languages: ["English", "Spanish"],
    image: zacharyHeadshot,
  },
  {
    name: "Taina Colon, LMSW",
    title: "Bilingual (EN/ES) Staff Therapist and Trauma Fellow",
    credentials: "",
    bio: "Taina Colon (she/her) received her Masters in Social Work (MSW) from Fordham University in 2024, and is a licensed LMSW in Connecticut. Taina is a trained EMDR Provider, and she is pursuing additional specialization in EMDR.",
    details: "While completing her MSW, Taina completed a year-long internship at The Rowan Center, providing short-term crisis counseling services to victims and survivors of sexual violence in our Counseling program. Taina served as the Bilingual/Bicultural Counselor and Intake Coordinator of the Counseling program at the Rowan Center from June of 2024 until June of 2025, before transitioning into her role in the Trauma Recovery Clinic. Taina is a certified sexual assault advocate and counselor in the State of Connecticut.",
    specialties: "She is able to offer direct client services in English and Spanish.",
    languages: ["English", "Spanish"],
    image: tainaHeadshot,
  },
];

const TraumaRecovery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">The Trauma Recovery Clinic</h1>
            <p className="text-2xl font-roboto font-light text-white/90 mb-4">
              All survivors of trauma deserve hope and healing.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="container mx-auto px-4">

          {/* About TRC Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                The Trauma Recovery Clinic (TRC) at The Rowan Center offers long-term, trauma-informed 
                clinical therapy to help survivors of trauma heal.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                If you or someone you know has experienced trauma of any kind, our team of therapists 
                is here to help. Connect with the Trauma Recovery Clinic today to learn more about the 
                services we offer, including talk therapy, EMDR, and other clinical therapy modalities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-background rounded-xl p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold text-foreground">Insurance</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We are currently serving trauma victims and survivors on the HUSKY health insurance plan.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold text-foreground">Eligibility</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Clients must be at least 18 years old.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Stethoscope className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold text-foreground">Fully Licensed</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The TRC is fully licensed by the CT Department of Public Health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Intake Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-foreground mb-6">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Complete Intake Form</h3>
                <p className="text-sm text-muted-foreground">Fill out our secure intake form to help us understand your needs</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">Meet with our intake coordinator to discuss your goals and preferences</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Begin Treatment</h3>
                <p className="text-sm text-muted-foreground">Start your healing journey with a therapist matched to your needs</p>
              </div>
            </div>
            
            <TraumaRecoveryIntakeForm />
          </div>

          {/* Meet the Team Section */}
          <div className="mb-16">
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
                    index % 2 === 0 ? 'bg-muted/30' : 'bg-accent/5'
                  }`}
                >
                  {/* Team member photo */}
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-48 h-48 rounded-2xl object-cover object-top border-2 border-accent/20 shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.title}</p>
                      {member.credentials && (
                        <p className="text-sm text-accent italic">{member.credentials}</p>
                      )}
                    </div>

                    {/* Language badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.languages.map((lang) => (
                        <span 
                          key={lang}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
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

          {/* Support Information */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">You Don't Have to Heal Alone</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Healing from trauma takes time, and everyone's journey is different. Our experienced, 
              trauma-informed therapists are here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">Learn More About Our Therapists</Button>
              <Button variant="outline" size="lg">Insurance & Payment Options</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TraumaRecovery;