import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Users, Clock, Shield, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Respond = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Emergency Banner */}
          <div className="bg-emergency text-emergency-foreground rounded-lg p-6 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Phone className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Need Immediate Help?</h2>
            </div>
            <p className="text-lg mb-4">Our 24/7 Crisis Helpline is available right now</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" variant="outline" className="bg-emergency-foreground text-emergency hover:bg-emergency-foreground/90">
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
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Crisis Response Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When trauma occurs, we're here to provide immediate support, advocacy, and guidance 
              to help survivors navigate their path forward with dignity and care.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-secondary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-8 w-8 text-secondary" />
                  <CardTitle className="text-2xl">24/7 Crisis Helpline</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Immediate support available anytime, day or night
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-secondary mt-0.5" />
                    <span>24/7 availability, 365 days a year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Trained crisis counselors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Confidential and compassionate support</span>
                  </li>
                </ul>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-secondary hover:bg-secondary/90">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                      <ChevronDown className="ml-2 h-4 w-4" />
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

            <Card className="border-secondary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-secondary" />
                  <CardTitle className="text-2xl">Crisis Counseling & Advocacy</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Professional support and advocacy services for survivors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Individual crisis counseling sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Legal and medical advocacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Support group facilitation</span>
                  </li>
                </ul>
                <Button variant="outline">Request Advocacy Support</Button>
              </CardContent>
            </Card>
          </div>

          {/* Intake Form Section */}
          <div className="bg-muted rounded-lg p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Connect with a Counselor?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Complete our secure intake form to begin your journey with our crisis counseling and advocacy services. 
              Our team will connect with you within 24 hours.
            </p>
            <Button size="lg">Complete Intake Form</Button>
          </div>

          {/* Additional Resources */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Additional Crisis Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">National Suicide Prevention Lifeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-2">988</p>
                  <p className="text-sm text-muted-foreground">24/7 crisis counseling and suicide prevention</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">National Sexual Assault Hotline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-secondary mb-2">1-800-656-HOPE</p>
                  <p className="text-sm text-muted-foreground">Operated by RAINN</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Text Line</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-secondary mb-2">Text HOME to 741741</p>
                  <p className="text-sm text-muted-foreground">24/7 crisis support via text</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Respond;