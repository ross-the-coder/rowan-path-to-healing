import { Phone, Mail, MapPin, ChevronDown, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterSubscription } from "./NewsletterSubscription";
import rowanLogo from "@/assets/rowan-center-logo.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const townsServed = [
    "Darien", "Greenwich", "New Canaan", "Norwalk", 
    "Stamford", "Weston", "Westport", "Wilton"
  ];

  return (
    <footer className="bg-[hsl(var(--blue-accent))] text-white">
      {/* Newsletter Section */}
      <div className="bg-background border-b border-[hsl(var(--blue-accent))]/20">
        <div className="container mx-auto px-4 py-8">
          <NewsletterSubscription />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <img 
              src={rowanLogo} 
              alt="The Rowan Center" 
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-white/80 mb-4 text-sm">
              A Sexual Assault Resource Agency
            </p>
            <p className="text-sm text-white/70 mb-4">
              Preventing trauma. Responding to crisis. Supporting healing.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://www.facebook.com/therowancenter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/therowancenter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/therowancenter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emergency flex-shrink-0" />
                <div className="text-white/80">
                  <div className="font-medium text-white">24/7 Crisis Helpline</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-white/80 hover:text-white hover:bg-transparent">
                        <span className="underline">(203) 329-2929</span>
                        <ChevronDown className="h-3 w-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background z-50">
                      <DropdownMenuItem asChild>
                        <a href="tel:2033292929" className="flex items-center gap-2 cursor-pointer">
                          <Phone className="h-4 w-4" />
                          <div>
                            <div className="font-medium">English</div>
                            <div className="text-sm text-muted-foreground">(203) 329-2929</div>
                          </div>
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="tel:8885688332" className="flex items-center gap-2 cursor-pointer">
                          <Phone className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Español</div>
                            <div className="text-sm text-muted-foreground">(888) 568-8332</div>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/60 flex-shrink-0" />
                <div className="text-white/80">
                  <div className="font-medium text-white">Trauma Recovery Clinic</div>
                  <a href="tel:2034870675" className="hover:text-white underline">(203) 487-0675</a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@therowancenter.org" className="hover:text-white">info@therowancenter.org</a>
              </div>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>South Fairfield County, CT</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/prevention-education" className="text-white/80 hover:text-white transition-colors">Prevention Education</Link></li>
              <li><Link to="/crisis-services" className="text-white/80 hover:text-white transition-colors">Crisis Support</Link></li>
              <li><Link to="/victim-advocacy" className="text-white/80 hover:text-white transition-colors">Victim Advocacy</Link></li>
              <li><Link to="/trauma-recovery" className="text-white/80 hover:text-white transition-colors">Trauma Recovery</Link></li>
              <li><Link to="/resources" className="text-white/80 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/ct-laws-reporting" className="text-white/80 hover:text-white transition-colors">CT Laws & Reporting</Link></li>
            </ul>
          </div>

          {/* Towns Served & Certification Badges */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Proudly Serving</h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-white/70 mb-6">
              {townsServed.map((town, index) => (
                <span key={town} className="bg-white/10 px-2 py-1 rounded">
                  {town}
                </span>
              ))}
            </div>
            
            {/* Certification Badges Placeholder */}
            <div className="flex gap-3 mt-4">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ed07927a-cbba-47b3-9280-820eff27dc01.png" 
                  alt="Charity Certification" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f903cc06-e1be-4e30-9696-bead5dad2d04.png" 
                  alt="Charity Certification" 
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2025 The Rowan Center. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/donate" className="hover:text-white transition-colors">Donate</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;