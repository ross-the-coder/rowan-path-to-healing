import counselingHopeImage from "@/assets/family-embracing.jpg";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
const PhotoFeatureSection = () => {
  return <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Floating Photo with Color Overlay */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-full h-full bg-accent/20 rounded-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img alt="Family embracing on porch at sunset, showing hope and healing" className="w-full h-[500px] object-cover" src={counselingHopeImage} />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-sm font-roboto font-medium text-accent">Trauma Recovery</span>
            </div>
            
            <h2 className="text-4xl font-seasons font-normal text-foreground leading-tight">
              A Safe Space for Your Healing Journey
            </h2>
            
            <p className="text-lg font-roboto font-light text-muted-foreground leading-relaxed">
              At The Rowan Center, we provide trauma-informed care in a welcoming environment 
              designed to support your path to healing. Our experienced therapists are here to 
              walk alongside you every step of the way.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <span className="font-roboto text-foreground">Individual trauma-informed counseling</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <span className="font-roboto text-foreground">Evidence-based therapeutic approaches</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <span className="font-roboto text-foreground">Comfortable, peaceful environment</span>
              </li>
            </ul>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/trauma-recovery">
                <Heart className="mr-2 h-5 w-5" />
                Learn About Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default PhotoFeatureSection;