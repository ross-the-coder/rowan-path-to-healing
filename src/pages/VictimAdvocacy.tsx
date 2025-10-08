import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Heart } from "lucide-react";

const VictimAdvocacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Victim Advocacy & Accompaniment
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Our survivor-centered, trauma-informed advocates walk alongside you to navigate systems and make sure your needs are met—you decide what happens next.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Main Content */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-seasons">Who We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-lg">
                  While counseling and support groups are for ages 10+, our advocacy services support clients of all ages and their families. All advocacy services are free of charge for anyone in our eight-town service area across lower Fairfield County: <span className="font-medium">Stamford, Norwalk, Darien, Greenwich, New Canaan, Westport, Weston, and Wilton.</span>
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="font-seasons text-xl">What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-roboto">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>24/7 helpline for immediate, confidential support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Crisis Advocates for accompaniment to the hospital, police, and court</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Justice Advocacy providing information and referrals, help with victim benefits & compensation, Paid Leave, and support during police reports, investigations, and court proceedings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="font-seasons text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto">
                    Your advocate will explain each step, answer questions, and keep you informed. You can choose the supports you want—our role is to provide comfort, resources, and knowledgeable guidance throughout the process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Crisis Helpline */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-emergency text-white border-0">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-seasons font-medium mb-4">Need Help Now?</h3>
                <p className="text-lg font-roboto mb-6">Call our 24/7 crisis helpline</p>
                <Button size="lg" variant="outline" className="bg-white text-emergency hover:bg-white/90 border-0">
                  <Phone className="mr-2 h-5 w-5" />
                  (203) 329-2929
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-seasons text-center">Request Advocacy Services</CardTitle>
                <p className="text-center font-roboto text-muted-foreground">
                  Share a working email address so we can schedule your first conversation. You may use a first name only if you prefer.
                </p>
                <p className="text-center font-roboto text-sm text-muted-foreground mt-2">
                  Prefer not to use email? Call our Bilingual/Bicultural Intake Coordinator at (203) 348-9346
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded-lg text-center">
                  <p className="font-roboto text-muted-foreground">
                    Contact form coming soon. Please call the numbers above to connect with our advocacy team.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VictimAdvocacy;