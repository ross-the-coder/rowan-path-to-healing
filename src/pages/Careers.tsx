import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Briefcase } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Clinical Therapist",
      department: "Trauma Recovery",
      type: "Full-time",
      location: "Stamford, CT",
      description: "Provide trauma-informed therapy to adult and youth survivors in individual and group settings.",
      requirements: ["Master's degree in Social Work, Psychology, or related field", "Licensed or license-eligible", "Experience with trauma therapy preferred"],
      posted: "2 days ago"
    },
    {
      title: "Prevention Education Specialist",
      department: "Prevention",
      type: "Full-time",
      location: "South Fairfield County",
      description: "Develop and deliver prevention education programs in schools and community settings.",
      requirements: ["Bachelor's degree required", "Experience in education or youth services", "Strong presentation skills"],
      posted: "1 week ago"
    },
    {
      title: "Crisis Response Advocate",
      department: "Crisis Response",
      type: "Part-time",
      location: "Remote/On-call",
      description: "Provide crisis intervention and advocacy services to survivors via our 24/7 helpline.",
      requirements: ["40-hour crisis intervention training", "Bilingual preferred", "Available for evening/weekend shifts"],
      posted: "3 days ago"
    }
  ];

  const benefits = [
    "Comprehensive health insurance",
    "Retirement plan with matching",
    "Professional development opportunities",
    "Flexible work arrangements",
    "Generous PTO and sick leave",
    "Student loan assistance program"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dedicated team working to prevent trauma, respond to crisis, 
            and support healing in our community. Make a meaningful difference every day.
          </p>
        </div>

        {/* Why Work Here */}
        <section className="mb-16">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-4">Why Work at The Rowan Center?</CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Join a mission-driven organization where your work directly impacts lives and creates lasting change in our community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Supportive Team</h3>
                  <p className="text-muted-foreground">Work alongside passionate professionals in a collaborative environment</p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Meaningful Impact</h3>
                  <p className="text-muted-foreground">See the direct positive impact of your work on survivors and families</p>
                </div>
                <div className="text-center">
                  <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-muted-foreground">Advance your career with ongoing training and development programs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">{position.title}</CardTitle>
                      <CardDescription className="text-lg">{position.department}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{position.type}</Badge>
                      <Badge variant="outline">{position.posted}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits & Culture */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Benefits & Perks</CardTitle>
                <CardDescription>We value our employees and offer comprehensive benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Culture</CardTitle>
                <CardDescription>What makes working here special</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Trauma-Informed Workplace</h4>
                    <p className="text-sm text-muted-foreground">We practice what we preach with a supportive, understanding work environment.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Work-Life Balance</h4>
                    <p className="text-sm text-muted-foreground">Flexible schedules and remote work options to support your well-being.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">Regular training, conferences, and professional development opportunities.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Process */}
        <section>
          <Card className="border-secondary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Ready to Apply?</CardTitle>
              <CardDescription className="text-lg">
                Don't see a position that fits? We're always looking for passionate individuals to join our team.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                <Button size="lg" className="w-full">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Browse All Positions
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  Submit General Application
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions about employment? Contact our HR team at 
                <a href="mailto:hr@rowancenternor.org" className="text-primary hover:underline ml-1">
                  hr@rowancenternor.org
                </a>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Careers;