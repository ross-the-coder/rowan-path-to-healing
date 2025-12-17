import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Briefcase, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroAboutImage from "@/assets/hero-about.jpg";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";
const About = () => {
  const teamMembers = [{
    name: "Sarah Johnson",
    title: "Executive Director",
    image: "/placeholder.svg",
    bio: "Sarah has over 15 years of experience in crisis intervention and trauma recovery services."
  }, {
    name: "Dr. Michael Chen",
    title: "Clinical Director",
    image: "/placeholder.svg",
    bio: "Dr. Chen specializes in trauma-informed therapy and leads our clinical team."
  }, {
    name: "Maria Rodriguez",
    title: "Prevention Education Manager",
    image: "/placeholder.svg",
    bio: "Maria develops and implements prevention education programs across Southern Fairfield County."
  }, {
    name: "James Thompson",
    title: "Crisis Response Coordinator",
    image: "/placeholder.svg",
    bio: "James oversees our 24/7 helpline and crisis intervention services."
  }];
  return <Layout>
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

        {/* Team Members Section with Photo */}
        <section className="mb-16 relative">
          {/* Floating Image */}
          <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block">
            <div className="sticky top-8 rounded-2xl overflow-hidden shadow-2xl">
              <img src={teamCollaborationImage} alt="Team collaboration at The Rowan Center" className="w-full h-[400px] object-cover" />
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals working to support our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:mr-[35%]">
            {teamMembers.map((member, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>)}
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
                  <Link to="/about/financials">View Financials</Link>
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
                  <Link to="/about/careers">View Careers</Link>
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
              <Link to="/about/board">Board of Directors</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about/media">Media Center</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about/blog">Blog</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>;
};
export default About;