import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Calendar, Building } from "lucide-react";

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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Ways to Give</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="font-seasons text-xl">One-Time Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto mb-6">
                    Make an immediate impact with a one-time gift to support our programs and services.
                  </p>
                  <Button className="w-full" size="lg">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="font-seasons text-xl">Monthly Giving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto mb-6">
                    Become a sustaining supporter with a recurring monthly donation.
                  </p>
                  <Button className="w-full" size="lg" variant="outline">
                    Become a Monthly Donor
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="font-seasons text-xl">Corporate Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto mb-6">
                    Partner with us to make a lasting impact in our community.
                  </p>
                  <Button className="w-full" size="lg" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="font-seasons text-xl">Legacy Giving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto mb-6">
                    Create a lasting legacy through planned giving and estate planning.
                  </p>
                  <Button className="w-full" size="lg" variant="outline">
                    Contact Us
                  </Button>
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
      </div>
    </Layout>
  );
};

export default Donate;