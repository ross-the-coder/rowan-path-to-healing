import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Briefcase, Mail } from "lucide-react";

const BoardOfDirectors = () => {
  const boardMembers = [
    {
      name: "Patricia Williams",
      title: "Board Chair",
      profession: "Former CEO, Fairfield County Community Foundation",
      tenure: "Board member since 2018",
      expertise: "Non-profit leadership, strategic planning, community development",
      bio: "Patricia brings over 25 years of non-profit leadership experience to The Rowan Center. Her vision and strategic guidance have been instrumental in our organizational growth and community impact."
    },
    {
      name: "Dr. Robert Martinez",
      title: "Vice Chair",
      profession: "Psychiatrist, Yale New Haven Health",
      tenure: "Board member since 2019",
      expertise: "Mental health, trauma treatment, clinical oversight",
      bio: "Dr. Martinez provides clinical expertise and mental health advocacy. His medical background ensures our programs maintain the highest standards of care and evidence-based practices."
    },
    {
      name: "Jennifer Chen",
      title: "Treasurer",
      profession: "CFO, Stamford Technology Group",
      tenure: "Board member since 2020",
      expertise: "Financial management, accounting, business operations",
      bio: "Jennifer oversees our financial health and ensures responsible stewardship of donor funds. Her business acumen helps us operate efficiently and transparently."
    },
    {
      name: "Michael Thompson",
      title: "Secretary",
      profession: "Partner, Thompson & Associates Law Firm",
      tenure: "Board member since 2017",
      expertise: "Legal counsel, policy development, advocacy",
      bio: "Michael provides legal expertise and helps navigate complex policy issues. His advocacy work has been crucial in advancing survivor rights and organizational compliance."
    },
    {
      name: "Lisa Rodriguez",
      title: "Board Member",
      profession: "Director of Education, Stamford Public Schools",
      tenure: "Board member since 2021",
      expertise: "Education, youth development, prevention programs",
      bio: "Lisa brings deep knowledge of educational systems and youth development. She helps ensure our prevention programs are effective and age-appropriate."
    },
    {
      name: "David Park",
      title: "Board Member",
      profession: "Marketing Director, Hartford Insurance Group",
      tenure: "Board member since 2022",
      expertise: "Marketing, communications, community outreach",
      bio: "David leads our marketing and communications strategy, helping us reach more community members and raise awareness about our services."
    }
  ];

  const committees = [
    {
      name: "Executive Committee",
      description: "Provides leadership and oversight between board meetings",
      members: ["Patricia Williams", "Dr. Robert Martinez", "Jennifer Chen", "Michael Thompson"]
    },
    {
      name: "Finance Committee",
      description: "Reviews financial performance and ensures fiscal responsibility",
      members: ["Jennifer Chen", "David Park", "Patricia Williams"]
    },
    {
      name: "Programs Committee",
      description: "Oversees program effectiveness and development",
      members: ["Dr. Robert Martinez", "Lisa Rodriguez", "Michael Thompson"]
    },
    {
      name: "Development Committee",
      description: "Focuses on fundraising and donor relations",
      members: ["David Park", "Patricia Williams", "Lisa Rodriguez"]
    }
  ];

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

        {/* Board Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Board Members</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium text-base">
                        {member.title}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">{member.profession}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.tenure}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <h4 className="font-semibold text-sm text-foreground mb-1">Expertise:</h4>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Board Committees */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Board Committees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {committees.map((committee, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 mb-3 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{committee.name}</CardTitle>
                  <CardDescription>{committee.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-sm mb-2">Committee Members:</h4>
                  <ul className="space-y-1">
                    {committee.members.map((memberName, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {memberName}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
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