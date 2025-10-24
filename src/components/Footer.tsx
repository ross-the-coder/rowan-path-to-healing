import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterSubscription } from "./NewsletterSubscription";
import rowanLogo from "@/assets/rowan-center-logo.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return <footer className="bg-[hsl(var(--blue-accent))] text-white">
      {/* Newsletter Section */}
      <div className="bg-background border-b border-[hsl(var(--blue-accent))]/20">
        <div className="container mx-auto px-4 py-8">
          <NewsletterSubscription />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src={rowanLogo} 
              alt="The Rowan Center" 
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-white/80 mb-4">
              Preventing trauma. Responding to crisis. Supporting healing.
            </p>
            <p className="text-sm text-white/70">
              The Rowan Center exists to prevent sexual violence and other trauma, 
              respond to crisis when harm occurs, and support adult and youth survivors 
              on their path to healing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/prevention-education" className="text-white/80 hover:text-white transition-colors">Prevention Education</Link></li>
              <li><Link to="/crisis-services" className="text-white/80 hover:text-white transition-colors">Crisis Support</Link></li>
              <li><Link to="/trauma-recovery" className="text-white/80 hover:text-white transition-colors">Trauma Recovery</Link></li>
              <li><Link to="/resources" className="text-white/80 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/ct-laws-reporting" className="text-white/80 hover:text-white transition-colors">CT Laws & Reporting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emergency" />
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
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4" />
                <div>info@rowancenterfairfield.org</div>
              </div>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>South Fairfield County, CT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>© 2025 The Rowan Center. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;