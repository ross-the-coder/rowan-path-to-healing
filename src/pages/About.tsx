import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Briefcase, Eye, Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroAboutImage from "@/assets/hero-about.jpg";
import staffPhoto from "@/assets/rowan-center-staff.webp";
import { SEO } from "@/components/SEO";

const About = () => {
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
        {/* Mission Section */}
        <section className="mb-16">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="">
              <p className="text-lg text-center leading-relaxed">The Rowan Center exists to prevent sexual violence and other trauma, respond to crisis when harm occurs,
and support adult and youth survivors on their path to healing. </p>
            </CardContent>
          </Card>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <Card className="border-secondary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center leading-relaxed">
                We envision a future where trauma and abuse are no longer normalized or hidden; where children grow up safe, 
                communities are educated and equipped to prevent harm, and every survivor has equitable access to care, 
                justice, and stigma-free healing.
              </p>
            </CardContent>
          </Card>
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
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
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
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
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