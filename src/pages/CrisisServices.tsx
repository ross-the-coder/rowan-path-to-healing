import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Users, Shield, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroCrisisImage from "@/assets/hero-crisis-services.jpg";
import { CrisisCounselingIntakeForm } from "@/components/CrisisCounselingIntakeForm";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const CrisisServices = () => {
  return (
    <Layout>
      {/* Full Bleed Hero with Photo Overlay */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroCrisisImage} 
            alt="Diverse group in supportive counseling circle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/85 to-secondary/95"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Crisis Counseling
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Your healing is your choice. The Rowan Center's crisis services provide free, confidential support for survivors of sexual violence—and for their loved ones.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* What We Offer */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">What We Offer</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-seasons text-lg mb-2">24/7 Helpline</h3>
                      <p className="font-roboto text-muted-foreground">
                        Immediate, confidential support whenever you need it
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-seasons text-lg mb-2">Individual Crisis Counseling</h3>
                      <p className="font-roboto text-muted-foreground">
                        One-on-one support for ages 10+
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-seasons text-lg mb-2">Support Groups</h3>
                      <p className="font-roboto text-muted-foreground">
                        Connect with others on their healing journey
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-seasons text-lg mb-2">Accompaniment & Advocacy</h3>
                      <p className="font-roboto text-muted-foreground">
                        Support for medical-forensic exams, police reports, investigations, and court
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6">
                <p className="font-roboto text-center">
                  <span className="font-medium">Services available in:</span> English, Spanish, and Haitian Creole
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-8">How to Get Started</h2>
            
            <CrisisCounselingIntakeForm />

            <div className="mt-8 text-center">
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <CardTitle className="font-seasons text-xl mb-3">Prefer Not to Use Email?</CardTitle>
                  <p className="font-roboto mb-4">
                    Call our Bilingual/Bicultural Intake Coordinator
                  </p>
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    (203) 348-9346
                  </Button>
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

        {/* Additional Services */}
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-8">
              Interested in Other Services?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-seasons">Support Groups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto mb-4">
                    Connect with others who understand your experience through peer-facilitated support groups for survivors ages 10+.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="font-roboto text-sm">Teen survivor groups (ages 10-17)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="font-roboto text-sm">Adult survivor groups (18+)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="font-roboto text-sm">Groups for family members and loved ones</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="font-roboto text-sm">Virtual and in-person options available</span>
                    </div>
                  </div>
                  <p className="font-roboto text-xs text-muted-foreground mb-4">
                    Support groups provide a safe, confidential space to share experiences, learn coping strategies, and connect with others on the healing journey. Facilitated by trained professionals.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/crisis-support">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-[hsl(var(--accent))]/20">
                <CardHeader>
                  <CardTitle className="font-seasons flex items-center gap-2">
                    <Heart className="h-5 w-5 text-[hsl(var(--accent))]" />
                    Long-term Therapy at the Trauma Recovery Clinic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto mb-4">
                    Specialized trauma-informed care for adults on HUSKY insurance
                  </p>
                  <Button variant="outline" className="w-full border-[hsl(var(--accent))] text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/10" asChild>
                    <Link to="/trauma-recovery">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CrisisServices;