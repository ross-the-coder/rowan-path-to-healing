import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mail, Phone } from "lucide-react";
import staffPhoto from "@/assets/rowan-center-staff.webp";

interface TeamMember {
  name: string;
  title: string;
  email: string;
  phone?: string;
  image?: string;
  credentials?: string;
  languages?: string[];
  bio?: string;
  details?: string;
  specialties?: string;
}

const Staff = () => {
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
      title: "Director of Counseling",
      email: "mplacide@therowancenter.org",
    },
  ];

  const staffMembers: TeamMember[] = [
    {
      name: "Sarah Anzellotti",
      title: "Adult Counselor and Advocate",
      email: "sanzellotti@therowancenter.org",
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
