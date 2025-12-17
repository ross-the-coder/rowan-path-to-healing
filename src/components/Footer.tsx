import { Phone, Mail, MapPin, ChevronDown, Facebook, Instagram, Linkedin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterSubscription } from "./NewsletterSubscription";
import rowanLogo from "@/assets/rowan-center-logo.png";
import charityNavigatorBadge from "@/assets/charity-navigator-4-star.webp";
import candidSeal from "@/assets/candid-seal-platinum-2025.png";
import ctAllianceLogo from "@/assets/ct-alliance-logo.webp";
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

            {/* CT Alliance Membership */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-xs text-white/70 mb-3">
                The Rowan Center is a member of the Connecticut Alliance to End Sexual Violence.
              </p>
              <a 
                href="https://endsexualviolencect.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src={ctAllianceLogo} 
                  alt="Connecticut Alliance to End Sexual Violence" 
                  className="h-12 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              {/* 24/7 Crisis Helpline */}
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

              {/* Trauma Recovery Clinic */}
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/60 flex-shrink-0" />
                <div className="text-white/80">
                  <div className="font-medium text-white">Trauma Recovery Clinic</div>
                  <a href="tel:2034870675" className="hover:text-white underline">(203) 487-0675</a>
                </div>
              </div>

              {/* Main Office */}
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/60 flex-shrink-0" />
                <div className="text-white/80">
                  <div className="font-medium text-white">Main Office</div>
                  <a href="tel:2033489346" className="hover:text-white underline">(203) 348-9346</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@therowancenter.org" className="hover:text-white">info@therowancenter.org</a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>1111 Summer Street, Suite 202</div>
                  <div>Stamford, CT 06905</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2 text-white/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Office Hours</div>
                  <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
                  <div className="text-xs text-white/60 mt-1">Crisis Helpline available 24/7</div>
                </div>
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

            <h4 className="font-semibold mb-3 mt-6 text-white text-lg">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/volunteer" className="text-white/80 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="text-white/80 hover:text-white transition-colors">Donate</Link></li>
              <li><Link to="/events" className="text-white/80 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Towns Served */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Proudly Serving Southern Fairfield County</h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-white/70 mb-6">
              {townsServed.map((town) => (
                <span key={town} className="bg-white/10 px-2 py-1 rounded">
                  {town}
                </span>
              ))}
            </div>

            {/* Certification Badges */}
            <div className="flex gap-4 items-center">
              <a 
                href="https://www.charitynavigator.org/ein/061037583" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={charityNavigatorBadge} 
                  alt="Charity Navigator 4-Star Rating" 
                  className="h-20 bg-white rounded p-1"
                />
              </a>
              <a 
                href="https://www.guidestar.org/profile/06-1037583" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={candidSeal} 
                  alt="Candid Platinum Transparency 2025" 
                  className="h-20"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div className="text-center md:text-left">
              <p>© 2025 The Rowan Center. All rights reserved.</p>
              <p className="text-xs mt-1">The Rowan Center is a registered 501(c)(3) nonprofit organization. EIN: 06-0988641</p>
            </div>
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