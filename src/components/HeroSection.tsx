import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import supportGroupImage from "@/assets/support-group.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero Content */}
      <div className="bg-secondary/10 text-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-seasons font-normal leading-tight">
                Preventing trauma.{" "}
                <span className="text-secondary">Responding to crisis.</span>{" "}
                <span className="text-accent">Supporting healing.</span>
              </h1>
              
              <p className="text-xl text-foreground/80 font-roboto font-light leading-relaxed">
                The Rowan Center exists to prevent sexual violence and other trauma, 
                respond to crisis when harm occurs, and support adult and youth survivors 
                on their path to healing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emergency hover:bg-emergency/90 shadow-button font-roboto font-medium">
                  <Phone className="mr-2 h-5 w-5" />
                  24/7 Crisis Helpline: (203) 329-2929
                </Button>
                <Button variant="outline" size="lg" asChild className="font-roboto font-medium border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <Link to="/contact">
                    <Heart className="mr-2 h-5 w-5" />
                    Get Support
                  </Link>
                </Button>
              </div>

              <div className="text-sm text-foreground/70 font-roboto">
                <p>Serving South Fairfield County, Connecticut</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={supportGroupImage} 
                  alt="Support group discussion with diverse young people in a welcoming environment"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-seasons font-bold mb-2">24/7</div>
              <div className="font-roboto">Crisis Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-seasons font-bold mb-2">30+</div>
              <div className="font-roboto">Years Serving Our Community</div>
            </div>
            <div>
              <div className="text-3xl font-seasons font-bold mb-2">Free</div>
              <div className="font-roboto">Confidential Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;