import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Landmark, PiggyBank } from "lucide-react";

const Donate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Your donation helps us prevent sexual violence, respond to crisis, and support survivors on their path to healing.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Impact Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-seasons font-normal mb-6">Your Impact</h2>
            <p className="text-lg font-roboto text-muted-foreground">
              Every contribution makes a difference in the lives of survivors and helps us build a safer community for all.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-seasons font-bold text-secondary mb-2">24/7</div>
                <p className="font-roboto text-muted-foreground">
                  Crisis support available every day of the year
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-seasons font-bold text-secondary mb-2">Free</div>
                <p className="font-roboto text-muted-foreground">
                  All services provided at no cost to survivors
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-seasons font-bold text-secondary mb-2">Confidential</div>
                <p className="font-roboto text-muted-foreground">
                  Private support for survivors and their loved ones
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ways to Give */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Ways to Give</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Make a Donation */}
              <Card className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="text-center">
                  <CreditCard className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <CardTitle className="font-seasons text-2xl">Make a Donation</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="font-roboto text-lg font-medium text-foreground mb-4">
                    Yes, I want to support victims and survivors and make our community safer and healthier for everyone!
                  </p>
                  <p className="font-roboto text-muted-foreground mb-6 flex-1">
                    Help make our community safer and healthier for all. Invest in prevention education, advocate for victims and survivors, and ensure that everyone who has been impacted by sexual violence can access the counseling and resources they need to heal and move forward.
                  </p>
                  <Button className="w-full" size="lg">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>

              {/* DAF Donation */}
              <Card className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="text-center">
                  <Landmark className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <CardTitle className="font-seasons text-2xl">Donor Advised Fund</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="font-roboto text-lg font-medium text-foreground mb-4">
                    Give through your DAF
                  </p>
                  <p className="font-roboto text-muted-foreground mb-6 flex-1">
                    Use your Donor Advised Fund to make a tax-advantaged gift to The Rowan Center. DAF donations allow you to recommend grants from your fund to support our mission of healing and prevention.
                  </p>
                  <Button className="w-full" size="lg" variant="outline">
                    Give via DAF
                  </Button>
                </CardContent>
              </Card>

              {/* Endowment */}
              <Card className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="text-center">
                  <PiggyBank className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <CardTitle className="font-seasons text-2xl">Endowment</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="font-roboto text-lg font-medium text-foreground mb-4">
                    Create a lasting legacy
                  </p>
                  <p className="font-roboto text-muted-foreground mb-6 flex-1">
                    An endowment gift ensures The Rowan Center can continue serving survivors for generations to come. Your planned gift provides sustainable funding for our critical programs and services.
                  </p>
                  <Button className="w-full" size="lg" variant="outline">
                    Learn About Endowments
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Giving Options */}
            <div className="mt-12 grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-seasons text-lg mb-2">Matching Gifts</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Many employers match charitable contributions. Check if your company participates.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-seasons text-lg mb-2">Stock Donations</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Donate appreciated securities and receive maximum tax benefits.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-seasons text-lg mb-2">Tribute Gifts</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Honor or remember someone special with a meaningful donation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-seasons text-lg mb-2">Monthly Giving</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Become a sustaining supporter with a recurring monthly donation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-seasons text-center">Other Ways to Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="font-seasons text-lg mb-2">Attend Events</h3>
                    <p className="font-roboto text-muted-foreground mb-4">
                      Join us at upcoming fundraisers and community events
                    </p>
                    <Button variant="outline" asChild>
                      <a href="/events">View Events</a>
                    </Button>
                  </div>
                  <div className="text-center">
                    <h3 className="font-seasons text-lg mb-2">Volunteer</h3>
                    <p className="font-roboto text-muted-foreground mb-4">
                      Become a certified crisis advocate volunteer
                    </p>
                    <Button variant="outline" asChild>
                      <a href="/volunteer">Learn More</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Organization Info */}
        <section className="mt-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <p className="font-roboto text-muted-foreground mb-4">
                  The Rowan Center is a registered 501(c)(3) nonprofit organization.
                </p>
                <p className="font-roboto text-muted-foreground mb-4">
                  <strong>EIN:</strong> 06-1037583
                </p>
                <p className="font-roboto text-muted-foreground mb-6">
                  The Rowan Center is a member of the Connecticut Alliance to End Sexual Violence.
                </p>
                <div className="font-roboto text-muted-foreground mb-4">
                  <p>1111 Summer St, Suite 202</p>
                  <p>Stamford, Connecticut 06905</p>
                </div>
                <p className="font-roboto text-muted-foreground mb-2">
                  <strong>Phone:</strong> (203) 348-9346 — staffed M-F, 9 AM to 5 PM
                </p>
                <p className="font-roboto text-muted-foreground mb-6">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@therowancenter.org" className="text-primary hover:underline">
                    info@therowancenter.org
                  </a>
                </p>
                <p className="font-roboto text-sm text-muted-foreground">
                  © The Rowan Center 2024, all rights reserved.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Donate;