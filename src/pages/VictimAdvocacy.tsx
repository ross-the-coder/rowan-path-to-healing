import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Heart, ChevronDown } from "lucide-react";
import { VictimAdvocacyIntakeForm } from "@/components/VictimAdvocacyIntakeForm";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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
                  While counseling and support groups are for ages 10+, our advocacy services support clients of all ages and their families. All advocacy services are free of charge for anyone in our eight-town service area across Lower Fairfield County: <span className="font-medium">Stamford, Norwalk, Darien, Greenwich, New Canaan, Westport, Weston, and Wilton.</span>
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="lg" variant="outline" className="bg-white text-emergency hover:bg-white/90 border-0">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Crisis Helpline
                      <ChevronDown className="ml-2 h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background z-50">
                    <DropdownMenuItem asChild>
                      <a href="tel:2033292929" className="flex items-center gap-2 cursor-pointer">
                        <Phone className="h-4 w-4" />
                        <div>
                          <div className="font-medium">English</div>
                          <div className="text-sm text-muted-foreground">(203) 329-2929</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="tel:8885688332" className="flex items-center gap-2 cursor-pointer">
                        <Phone className="h-4 w-4" />
                        <div>
                          <div className="font-medium">Español</div>
                          <div className="text-sm text-muted-foreground">(888) 568-8332</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <VictimAdvocacyIntakeForm />
            
            <div className="mt-8 text-center">
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <p className="font-roboto text-muted-foreground">
                    Prefer not to use email? Call our Bilingual/Bicultural Intake Coordinator at <span className="font-medium">(203) 348-9346</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VictimAdvocacy;