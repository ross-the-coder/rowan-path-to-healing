import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Heart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import counselingImage from "@/assets/counseling-session.jpg";
import outreachImage from "@/assets/community-outreach.jpg";
import healingImage from "@/assets/healing-garden.jpg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const PillarsSection = () => {
  return <section className="py-0">
      {/* Prevent Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={outreachImage} alt="Community outreach volunteers working together at an educational event" className="w-full h-[400px] object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-seasons font-normal">Prevent</h2>
              </div>
              <p className="text-xl font-roboto font-light text-white/90 leading-relaxed">
                Education and awareness programs to prevent sexual violence and trauma before it happens.
              </p>
              <div className="space-y-3">
                <div className="font-roboto font-medium text-white">Our prevention services include:</div>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Community education workshops and presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>School-based prevention programs for all ages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Bystander intervention training</span>
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm">
                <Link to="/prevent">Learn More About Prevention</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Respond Section */}
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-seasons font-normal">Respond</h2>
              </div>
              <p className="text-xl font-roboto font-light text-white/90 leading-relaxed">
                24/7 crisis support and immediate assistance when harm occurs. We're here when you need us most.
              </p>
              <div className="bg-emergency p-6 rounded-lg border border-emergency-foreground/20">
                <div className="text-2xl font-seasons font-bold mb-2 text-white">Crisis Helpline</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 text-white hover:bg-white/10 text-3xl font-roboto font-bold">
                      Call Now
                      <ChevronDown className="ml-2 h-6 w-6" />
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
                <div className="text-sm text-white/90 mt-2">Available 24/7, completely confidential</div>
              </div>
              <div className="space-y-3">
                <div className="font-roboto font-medium text-white">Crisis response services:</div>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>24/7 crisis helpline and text support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Hospital and court accompaniment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Legal advocacy and support</span>
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-secondary backdrop-blur-sm">
                <Link to="/respond">Get Help Now</Link>
              </Button>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img alt="One-on-one counseling session with caring professional" className="w-full h-[400px] object-cover" src="/lovable-uploads/0d5abac7-b4ad-43c6-aef4-4dc83b832aa3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trauma Recovery Section */}
      <div className="bg-color-block-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={healingImage} alt="Peaceful healing garden with people having therapeutic conversations" className="w-full h-[400px] object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-seasons font-normal">Trauma Recovery</h2>
              </div>
              <p className="text-xl font-roboto font-light text-white/90 leading-relaxed">
                Long-term healing support and specialized therapeutic services designed for survivors on their journey to recovery.
              </p>
              <div className="space-y-3">
                <div className="font-roboto font-medium text-white">Recovery services include:</div>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Individual trauma-informed counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Support groups and peer connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Specialized therapy programs</span>
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-accent backdrop-blur-sm">
                <Link to="/trauma-recovery">Explore Recovery Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PillarsSection;