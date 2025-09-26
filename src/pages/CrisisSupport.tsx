import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Heart } from "lucide-react";

const CrisisSupport = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-primary">
        {/* Hero Section */}
        <section className="py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <Phone className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Crisis Support
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8 max-w-3xl mx-auto">
              Free, confidential support available 24/7 for survivors of sexual violence and their loved ones.
            </p>
            
            <Card className="bg-emergency backdrop-blur-sm border-emergency-foreground/20 max-w-md mx-auto mb-8">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-seasons font-bold mb-2 text-white">Crisis Helpline</div>
                <div className="text-4xl font-roboto font-bold mb-2 text-white">(203) 329-2929</div>
                <div className="text-white/90 font-roboto">Available 24/7, completely confidential</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-seasons font-normal text-foreground mb-4">
                Your healing is your choice.
              </h2>
              <p className="text-xl font-roboto font-light text-muted-foreground max-w-3xl mx-auto">
                The Rowan Center's crisis services provide free, confidential support for survivors of sexual violence—and for their loved ones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="font-seasons">24/7 Helpline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-muted-foreground">
                    Immediate, confidential support available around the clock.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-secondary mb-4" />
                  <CardTitle className="font-seasons">Crisis Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-muted-foreground">
                    Individual crisis counseling for ages 10 and up.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-accent mb-4" />
                  <CardTitle className="font-seasons">Support Groups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-muted-foreground">
                    Peer support groups facilitated by trained professionals.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-seasons font-normal mb-6 text-foreground">What we offer:</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-3 font-roboto">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>24/7 helpline for immediate, confidential support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Individual crisis counseling (ages 10+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Support groups</span>
                  </li>
                </ul>
                <ul className="space-y-3 font-roboto">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Accompaniment & advocacy for medical-forensic exams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Support for police reports and court proceedings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Services available in English, Spanish, and Haitian Creole</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-seasons font-normal text-center mb-8">How to get started</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-seasons font-bold text-primary mb-2">1</div>
                    <h3 className="font-seasons text-lg mb-2">Call our helpline</h3>
                    <p className="text-sm font-roboto text-muted-foreground">(203) 329-2929 for immediate support</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-seasons font-bold text-secondary mb-2">2</div>
                    <h3 className="font-seasons text-lg mb-2">Contact form</h3>
                    <p className="text-sm font-roboto text-muted-foreground">Fill out our form to schedule your first conversation</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-seasons font-bold text-accent mb-2">3</div>
                    <h3 className="font-seasons text-lg mb-2">Intake coordinator</h3>
                    <p className="text-sm font-roboto text-muted-foreground">Call (203) 348-9346 if you prefer not to use email</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="font-roboto">
                  Access Contact Form
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CrisisSupport;