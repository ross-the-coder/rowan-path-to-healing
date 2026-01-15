import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ChariotDonation: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        asChild
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full px-4 py-2 flex items-center gap-2 font-semibold transition-all hover:scale-105"
        aria-label="Go to donation page"
      >
        <Link to="/donate">
          <Heart className="h-4 w-4" />
          Donate
        </Link>
      </Button>
    </div>
  );
};

export default ChariotDonation;
