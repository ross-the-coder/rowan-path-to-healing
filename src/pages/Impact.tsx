import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import ImpactStatistics from "@/components/ImpactStatistics";

const Impact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">Our Impact</h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              The Rowan Center served <span class="stat-highlight">8,244 people</span> through direct services, provided
              mental health support to <span class="stat-highlight">723 counseling clients</span>, and educated over{" "}
              <span class="stat-highlight">22,100 individuals</span> through presentations and outreach. With a{" "}
              <span class="stat-highlight">68% increase in outreach activities</span>, we've expanded our reach to
              strengthen community resilience and support.
            </p>{" "}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Interactive Statistics */}
        <ImpactStatistics />

        {/* Service Areas */}
        <section className="mb-16 mt-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">How We Serve Our Community</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-seasons text-2xl">Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-lg mb-4">
                    We provide age-appropriate education to students, parents, educators, and professionals throughout
                    Lower Fairfield County. Our programs help prevent sexual violence before it occurs by teaching
                    boundaries, consent, and bystander intervention.
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
                    Our 24/7 helpline and crisis advocates provide immediate support when survivors need it most. From
                    hospital accompaniment to court advocacy, we walk alongside survivors every step of the way.
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
                    Through crisis counseling, support groups, and our Trauma Recovery Practice, we provide
                    comprehensive mental health services to help survivors heal. Our trauma-informed approach centers
                    survivors' choices and needs.
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
                  For detailed information about our programs, services, and financial data, please visit our Financials
                  page to access our annual reports.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/financials"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                  >
                    View Annual Reports
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                  >
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
