import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const KidSafeHigh = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-purple-500/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Age Groups
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-12 w-12 text-purple-600" />
              <h1 className="text-4xl font-bold">High School</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Content coming soon! Resources for teens about healthy relationships, consent, digital safety, and more.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KidSafeHigh;
