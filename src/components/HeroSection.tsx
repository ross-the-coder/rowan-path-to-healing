import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-background py-20 border-b border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-seasons font-normal text-foreground mb-6 leading-tight">
            Preventing trauma.{" "}
            <span className="text-primary">Responding to crisis.</span>{" "}
            <span className="text-accent">Supporting healing.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-roboto font-light leading-relaxed">
            The Rowan Center exists to prevent sexual violence and other trauma, 
            respond to crisis when harm occurs, and support adult and youth survivors 
            on their path to healing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-emergency hover:bg-emergency/90 shadow-button font-roboto font-medium">
              <Phone className="mr-2 h-5 w-5" />
              24/7 Crisis Helpline: (203) 329-2929
            </Button>
            <Button variant="outline" size="lg" asChild className="font-roboto font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">
                <Heart className="mr-2 h-5 w-5" />
                Get Support
              </Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground font-roboto">
            <p>Serving South Fairfield County, Connecticut</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;