import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Heart, GraduationCap, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const PillarsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Three Pillars of Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We carry out our mission through prevention education, 24/7 counseling and support, 
            and accessible, trauma-informed mental health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Prevent Pillar */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Prevent</CardTitle>
              <CardDescription className="text-base">
                Education and prevention programs to stop trauma before it happens
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-sm">Prevention Education Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">KidSafeHQ Community Training</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/prevent">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Respond Pillar */}
          <Card className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Respond</CardTitle>
              <CardDescription className="text-base">
                Immediate crisis support and advocacy when trauma occurs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-sm">24/7 Crisis Helpline</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Crisis Counseling & Advocacy</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/respond">Get Help Now</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Trauma Recovery Pillar */}
          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <Stethoscope className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl text-accent">Trauma Recovery</CardTitle>
              <CardDescription className="text-base">
                Professional mental health care on the path to healing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Stethoscope className="h-5 w-5 text-accent" />
                  <span className="text-sm">Trauma-Informed Therapy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-accent" />
                  <span className="text-sm">Accessible Mental Health Care</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/trauma-recovery">Start Healing</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;