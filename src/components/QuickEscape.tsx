import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickEscape = () => {
  const handleEscape = () => {
    // Replace current history entry and redirect to Google (common safe destination)
    // Using replace prevents the back button from returning to this site
    window.location.replace("https://www.google.com");
  };

  return (
    <Button
      onClick={handleEscape}
      className="fixed bottom-6 right-6 z-50 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg rounded-full px-4 py-2 flex items-center gap-2 font-semibold transition-all hover:scale-105"
      aria-label="Quick escape - leave this site immediately"
    >
      <X className="h-4 w-4" />
      Quick Exit
    </Button>
  );
};

export default QuickEscape;
