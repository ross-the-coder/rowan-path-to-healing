import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Mail } from "lucide-react";
import { useBoardMembers } from "@/hooks/useSanityData";
import { Skeleton } from "@/components/ui/skeleton";

const BoardOfDirectors = () => {
  const { data: allMembers, isLoading, error } = useBoardMembers();
  
  // Separate officers from regular board members based on title
  const officers = allMembers?.filter(member => 
    member.title?.includes("Chair") || 
    member.title?.includes("Treasurer") || 
    member.title?.includes("Secretary")
  ) || [];
  
  const boardMembers = allMembers?.filter(member => 
    !member.title?.includes("Chair") && 
    !member.title?.includes("Treasurer") && 
    !member.title?.includes("Secretary")
  ) || [];

  // Show loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-14 w-14 rounded-full" />
                  <Skeleton className="h-6 w-48 mt-4" />
                  <Skeleton className="h-4 w-32 mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-32 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Board of Directors
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated board members bring diverse expertise and unwavering commitment 
            to advancing The Rowan Center's mission of preventing trauma and supporting healing.
          </p>
        </div>

        {/* Board Officers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Board Officers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {officers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {member.title}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Board Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Board Members</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-7 w-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advisory Council */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Advisory Council</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Michael P. Diliberto",
                  "Dr. Catherine Ford, MD",
                  "Whitney Franklin",
                  "Lee Ganshaw, PNP",
                  "Robert Hagan",
                  "Colleen O'Neil",
                  "Stephanie Paulmeno, MS, RN, NHA",
                  "Jayme Stevenson, Former Board Member",
                  "Kate Vivanco, EdM, LCSW",
                  "Gayle Weinstein, Former Chair of the Board",
                  "Rebecca Wilson, LMSW",
                ].map((name, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Governance */}
        <section className="mb-16">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-4">Governance & Oversight</CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Our board ensures effective governance, strategic direction, and accountability to our community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Strategic Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Developing and monitoring our 3-year strategic plan to expand services and community impact
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Financial Oversight</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensuring responsible financial management and transparent reporting to stakeholders
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Community Accountability</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintaining strong connections with community needs and survivor voices in our decision-making
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card className="border-secondary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl mb-4">Contact the Board</CardTitle>
              <CardDescription>
                Questions, feedback, or suggestions for the Board of Directors? We want to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Board communications are handled through our Executive Director's office to ensure 
                proper coordination and response.
              </p>
              <a 
                href="mailto:board@rowancenternor.org?subject=Board Inquiry" 
                className="text-primary hover:underline font-medium"
              >
                board@rowancenternor.org
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default BoardOfDirectors;