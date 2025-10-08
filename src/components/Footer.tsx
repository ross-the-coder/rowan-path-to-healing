import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterSubscription } from "./NewsletterSubscription";

const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="bg-background border-b border-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <NewsletterSubscription />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">The Rowan Center</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Preventing trauma. Responding to crisis. Supporting healing.
            </p>
            <p className="text-sm text-secondary-foreground/70">
              The Rowan Center exists to prevent sexual violence and other trauma, 
              respond to crisis when harm occurs, and support adult and youth survivors 
              on their path to healing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/prevention-education" className="hover:text-primary-light transition-colors">Prevention Education</Link></li>
              <li><Link to="/crisis-services" className="hover:text-primary-light transition-colors">Crisis Support</Link></li>
              <li><Link to="/trauma-recovery" className="hover:text-primary-light transition-colors">Trauma Recovery</Link></li>
              <li><Link to="/resources" className="hover:text-primary-light transition-colors">Resources</Link></li>
              <li><Link to="/ct-laws-reporting" className="hover:text-primary-light transition-colors">CT Laws & Reporting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emergency" />
                <div>
                  <div className="font-medium">24/7 Crisis Helpline</div>
                  <div>(203) 329-2929</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <div>info@rowancenterfairfield.org</div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>South Fairfield County, CT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-light/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>© 2025 The Rowan Center. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;