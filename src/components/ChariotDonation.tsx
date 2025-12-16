import { useState } from "react";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chariot-tile': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { cid: string }, HTMLElement>;
    }
  }
}

interface ChariotDonationProps {
  position?: "floating" | "top";
}

const ChariotDonation: React.FC<ChariotDonationProps> = ({ position = "floating" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerClass = position === "floating" 
    ? "fixed bottom-6 left-6 z-50" 
    : "relative";

  return (
    <div className={containerClass}>
      {isExpanded ? (
        <div className="animate-scale-in bg-background rounded-lg shadow-xl p-4 relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(false)}
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-muted hover:bg-muted/80"
            aria-label="Close donation widget"
          >
            <X className="h-3 w-3" />
          </Button>
          <chariot-tile cid="live_94b0c45a4d4331c03a8a7aba670bd6bfe484c5ceec4f468525a7a77addc78c88"></chariot-tile>
        </div>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full px-4 py-2 flex items-center gap-2 font-semibold transition-all hover:scale-105"
          aria-label="Open donation widget"
        >
          <Heart className="h-4 w-4" />
          Donate
        </Button>
      )}
    </div>
  );
};

export default ChariotDonation;
