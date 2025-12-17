import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Phone, BookOpen, TrendingUp } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Phone,
      number: "4,000",
      label: "Crisis calls answered annually",
      description: "24/7 support for survivors and their loved ones"
    },
    {
      icon: Users,
      number: "22,100",
      label: "Students educated",
      description: "Prevention programs across 8 towns"
    },
    {
      icon: BookOpen,
      number: "150+",
      label: "Professional training sessions",
      description: "Educating teachers, law enforcement, and community professionals"
    },
    {
      icon: TrendingUp,
      number: "30+",
      label: "Years of service",
      description: "Supporting Southern Fairfield County since our founding"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Our Impact
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Every day, The Rowan Center works to prevent sexual violence, respond to crisis, and support survivors on their healing journey.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Statistics */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">By the Numbers</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <stat.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <div>
                        <div className="text-4xl font-seasons font-bold text-secondary mb-2">
                          {stat.number}
                        </div>
                        <CardTitle className="font-seasons text-xl mb-2">
                          {stat.label}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-roboto text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">How We Serve Our Community</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-2xl">Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-lg mb-4">
                    We provide age-appropriate education to students, parents, educators, and professionals throughout Southern Fairfield County. Our programs help prevent sexual violence before it occurs by teaching boundaries, consent, and bystander intervention.
                  </p>
                  <p className="font-roboto text-muted-foreground">
                    Serving 8 towns: Stamford, Norwalk, Darien, Greenwich, New Canaan, Westport, Weston, and Wilton
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-2xl">Crisis Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-lg mb-4">
                    Our 24/7 helpline and crisis advocates provide immediate support when survivors need it most. From hospital accompaniment to court advocacy, we walk alongside survivors every step of the way.
                  </p>
                  <p className="font-roboto text-muted-foreground">
                    Free, confidential support available in English, Spanish, and Haitian Creole
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-2xl">Healing & Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-lg mb-4">
                    Through crisis counseling, support groups, and our Trauma Recovery Clinic, we provide comprehensive mental health services to help survivors heal. Our trauma-informed approach centers survivors' choices and needs.
                  </p>
                  <p className="font-roboto text-muted-foreground">
                    Long-term therapy, support groups, and individual counseling available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Annual Report */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-seasons text-center">Learn More</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-roboto mb-6">
                  For detailed information about our programs, services, and financial data, please visit our Financials page to access our annual reports.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/financials" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                    View Annual Reports
                  </a>
                  <a href="/about" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                    About Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Impact;