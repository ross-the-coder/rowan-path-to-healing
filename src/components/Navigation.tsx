import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      {/* Crisis Banner */}
      <div className="bg-emergency text-emergency-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-sm font-medium">
          <Phone className="h-4 w-4" />
          <span>Crisis? Call our 24/7 Helpline: (203) 329-2929</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            The Rowan Center
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/prevent" className="text-foreground hover:text-primary transition-colors">
              Prevent
            </Link>
            <Link to="/respond" className="text-foreground hover:text-primary transition-colors">
              Respond
            </Link>
            <Link to="/trauma-recovery" className="text-foreground hover:text-primary transition-colors">
              Trauma Recovery
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                About
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/financials" className="w-full">Financials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/careers" className="w-full">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/board" className="w-full">Board of Directors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/media" className="w-full">Media</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild>
              <Link to="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/prevent" className="text-foreground hover:text-primary transition-colors">
                Prevent
              </Link>
              <Link to="/respond" className="text-foreground hover:text-primary transition-colors">
                Respond
              </Link>
              <Link to="/trauma-recovery" className="text-foreground hover:text-primary transition-colors">
                Trauma Recovery
              </Link>
              <div className="space-y-2">
                <Link to="/about" className="text-foreground hover:text-primary transition-colors block">
                  About Us
                </Link>
                <div className="pl-4 space-y-2 text-sm">
                  <Link to="/about/financials" className="text-muted-foreground hover:text-primary transition-colors block">
                    Financials
                  </Link>
                  <Link to="/about/careers" className="text-muted-foreground hover:text-primary transition-colors block">
                    Careers
                  </Link>
                  <Link to="/about/board" className="text-muted-foreground hover:text-primary transition-colors block">
                    Board of Directors
                  </Link>
                  <Link to="/about/media" className="text-muted-foreground hover:text-primary transition-colors block">
                    Media
                  </Link>
                  <Link to="/about/blog" className="text-muted-foreground hover:text-primary transition-colors block">
                    Blog
                  </Link>
                </div>
              </div>
              <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button asChild className="w-fit">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;