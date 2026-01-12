import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mail, Phone } from "lucide-react";
import staffPhoto from "@/assets/rowan-center-staff.webp";
import lukeHeadshot from "@/assets/luke-robbins-headshot.webp";
import isabelHeadshot from "@/assets/isabel-negron-headshot.webp";
import zacharyHeadshot from "@/assets/zachary-boccarossa-headshot.webp";
import tainaHeadshot from "@/assets/taina-colon-headshot.webp";

const Staff = () => {
  const leadershipTeam = [
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
      title: "Clinical Director (EN/ES/FR)",
      email: "lrobbins@therowancenter.org",
      phone: "203-487-0675",
      image: lukeHeadshot,
      credentials: "EMDRIA-Approved Facilitator and EMDR Certified Provider",
      bio: "Luke Robbins (he/him/his) is a Licensed Clinical Social Worker (LCSW), a Certified EMDR Provider, an EMDRIA-approved EMDR Consultant, and an Approved EMDR Facilitator. Luke received his MSW from the University of Chicago in 2015 and is licensed in Connecticut, Indiana, and Maine.",
      details: "Luke started at The Rowan Center in the Fall of 2019 as the Director of Counseling. Since then, Luke has served as the supervisor and coordinator of our master's-level counseling internship program, and as our Chief Operating Officer, before transitioning to his current role of Clinical Director in June of 2023. In addition to overseeing the day-to-day operations of the Trauma Recovery Practice at The Rowan Center, Luke continues to provide clinical supervision to the LMSWs on our staff, as well as to the MSW interns in both our short-term crisis counseling program and in the practice.",
      specialties: "Luke is able to offer direct client services in English, French, and Spanish. He has experience working with clients exhibiting symptoms of depression, anxiety, PTSD, and OCD, as well as victims and survivors of sexual violence, first responders, adults who suffered trauma as children, anger issues, difficulties with self-esteem and self-reliance, sleep disturbance, and individuals who identify as sex addicts.",
      languages: ["English", "Spanish", "French"],
    },
    {
      name: "Leonora Campbell",
      title: "Director of Education and Outreach",
      email: "lcampbell@therowancenter.org",
    },
    {
      name: "Marsha Placide, LPCA, NCC, ATR-P",
      title: "Director of Counseling",
      email: "mplacide@therowancenter.org",
    },
  ];

  const staffMembers = [
    {
      name: "Sarah Anzellotti",
      title: "Adult Counselor and Advocate",
      email: "sanzellotti@therowancenter.org",
    },
    {
      name: "Zachary Boccarossa, LMSW",
      title: "Bilingual (EN/ES) Staff Therapist and Trauma Fellow",
      email: "zboccarossa@therowancenter.org",
      image: zacharyHeadshot,
      bio: "Zachary Boccarossa (he/him) received his Masters in Social Work (MSW) from Fairfield University in 2025, and is a licensed LMSW in Connecticut. Zachary is a trained EMDR Provider, and he is pursuing additional specialization in EMDR.",
      details: "Zachary also completed his first year MSW internship at The Rowan Center, providing short-term crisis counseling services to victims and survivors of sexual violence in our Counseling program. Zachary is a certified sexual assault advocate and counselor in the State of Connecticut.",
      specialties: "He is able to offer direct client services in English and Spanish. He has experience working with clients exhibiting symptoms of depression, anxiety, and PTSD, and especially with victims and survivors of sexual violence.",
      languages: ["English", "Spanish"],
    },
    {
      name: "Taina Colon, LMSW",
      title: "Bilingual (EN/ES) Staff Therapist and Trauma Fellow",
      email: "tcolon@therowancenter.org",
      image: tainaHeadshot,
      bio: "Taina Colon (she/her) received her Masters in Social Work (MSW) from Fordham University in 2024, and is a licensed LMSW in Connecticut. Taina is a trained EMDR Provider, and she is pursuing additional specialization in EMDR.",
      details: "While completing her MSW, Taina completed a year-long internship at The Rowan Center, providing short-term crisis counseling services to victims and survivors of sexual violence in our Counseling program. Taina served as the Bilingual/Bicultural Counselor and Intake Coordinator of the Counseling program at the Rowan Center from June of 2024 until June of 2025, before transitioning into her role in the Trauma Recovery Practice. Taina is a certified sexual assault advocate and counselor in the State of Connecticut.",
      specialties: "She is able to offer direct client services in English and Spanish.",
      languages: ["English", "Spanish"],
    },
    {
      name: "Abby Flores",
      title: "Justice Advocate",
      email: "aflores@therowancenter.org",
    },
    {
      name: "Charlotte Gaston",
      title: "Community Educator and Advocate",
      email: "cgaston@therowancenter.org",
    },
    {
      name: "Anthony Guerrero",
      title: "Prevention Educator – KidSafeHQ",
      email: "aguerrero@therowancenter.org",
    },
    {
      name: "Raquel Lopez, LMSW",
      title: "Part-time Counselor & Crisis Advocate Programs Administrator",
      email: "rlopez@therowancenter.org",
    },
    {
      name: "Kathy Miranda",
      title: "Community Educator and Advocate",
      email: "kmiranda@therowancenter.org",
    },
    {
      name: "Isabel Negron, LCSW",
      title: "Assistant Practice Director",
      email: "inegron@trcattherowancenter.org",
      image: isabelHeadshot,
      credentials: "EMDR Provider",
      bio: "Isabel Negron (she/her) is a Licensed Clinical Social Worker (LCSW) and an EMDR provider since 2022. She is working towards her Certified EMDR Therapist status. Isabel received her MSW from Fairfield University in 2022 and is licensed in Connecticut.",
      details: "Isabel started at The Rowan Center in the Fall of 2021 as a master's-level intern before being asked to join our team after graduating with her MSW. She served as our Bilingual (EN/ES) Intake Coordinator before transitioning into her current role as our first Bilingual (EN/ES) Staff Therapist at the Trauma Recovery Practice at TRC.",
      specialties: "Isabel is able to offer direct client services in English and Spanish. She has experience working with clients exhibiting symptoms of depression, anxiety, and PTSD, and especially with victims and survivors of sexual violence and other forms of trauma.",
      languages: ["English", "Spanish"],
    },
    {
      name: "Emma Zelenak",
      title: "Education Coordinator",
      email: "ezelenak@therowancenter.org",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Staff
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Rowan Center staff plays a critical role in supporting survivors of sexual violence. 
            Their services include counseling for survivors to process their experiences, advocacy to 
            help navigate present circumstances such as hospital exams and court proceedings, and 
            community education aimed at preventing sexual violence in the future.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16">
          <img 
            src={staffPhoto} 
            alt="The Rowan Center staff members pose for a group photo" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Leadership Team</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
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
        </section>

        {/* Staff Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
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
        </section>

        {/* About Staff */}
        <section>
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
      </div>
    </Layout>
  );
};

export default Staff;
