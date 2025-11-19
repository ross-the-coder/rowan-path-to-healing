import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";

const KidSafeMiddle = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-br from-green-500/10 via-green-600/5 to-green-500/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Age Groups
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-12 w-12 text-green-600" />
              <h1 className="text-4xl font-bold">Middle School</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Content coming soon! Interactive guides for middle schoolers navigating friendships, emotions, and growing independence.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KidSafeMiddle;
