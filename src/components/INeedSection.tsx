import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, BookOpen, Heart, Info } from "lucide-react";
import { Link } from "react-router-dom";

const INeedSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-seasons font-normal text-foreground mb-4">
            I need...
          </h2>
          <p className="text-xl font-roboto font-light text-muted-foreground max-w-2xl mx-auto">
            Tell us what you're looking for, and we'll help you find the right support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-seasons font-normal mb-4 text-foreground">
                To talk to someone right now
              </h3>
              <p className="text-muted-foreground mb-6 font-roboto">
                24/7 crisis helpline for immediate, confidential support
              </p>
              <div className="space-y-4">
                <div className="text-2xl font-roboto font-bold text-secondary">
                  (203) 329-2929
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link to="/crisis-support">Get Help Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-seasons font-normal mb-4 text-foreground">
                To learn about options & resources
              </h3>
              <p className="text-muted-foreground mb-6 font-roboto">
                Browse our comprehensive resource library and support options
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-seasons font-normal mb-4 text-foreground">
                To speak about long-term therapy
              </h3>
              <p className="text-muted-foreground mb-6 font-roboto">
                Specialized trauma-informed therapy at our Trauma Recovery Clinic
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/trauma-recovery">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-purple/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple/20 transition-colors">
                <Info className="h-8 w-8 text-purple" />
              </div>
              <h3 className="text-xl font-seasons font-normal mb-4 text-foreground">
                To learn more about The Rowan Center
              </h3>
              <p className="text-muted-foreground mb-6 font-roboto">
                Discover our mission, impact, and the work we do in the community
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/about">About Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default INeedSection;