import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import logoImage from "@/assets/rowan-center-logo.png";
import ChariotDonation from "./ChariotDonation";
import LanguageSwitcher from "./LanguageSwitcher";
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    t
  } = useTranslation();
  return <header className="sticky top-0 z-50">
      {/* Crisis Banner */}
      <div className="bg-white py-5 px-4 border-b">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-roboto">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:pl-36">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="bg-[hsl(var(--emergency))] hover:bg-[hsl(var(--emergency))]/90 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  {t('crisis.hotline')}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background z-50">
                <DropdownMenuItem asChild>
                  <a href="tel:2033292929" className="flex items-center gap-2 cursor-pointer">
                    <Phone className="h-4 w-4" />
                    <div>
                      <div className="font-medium">{t('common.english')}</div>
                      <div className="text-sm text-muted-foreground">(203) 329-2929</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="tel:8885688332" className="flex items-center gap-2 cursor-pointer">
                    <Phone className="h-4 w-4" />
                    <div>
                      <div className="font-medium">{t('common.spanish')}</div>
                      <div className="text-sm text-muted-foreground">(888) 568-8332</div>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild size="sm" className="bg-[hsl(var(--blue-accent))] hover:bg-[hsl(var(--blue-accent))]/90 text-white">
              <Link to="/kidsafehq">
                {t('nav.kidsafe')}HQ
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white">
              <Link to="/trauma-recovery">
                {t('nav.traumaRecovery')} Clinic
              </Link>
            </Button>
            <LanguageSwitcher />
          </div>
          <ChariotDonation />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-secondary text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center -mt-2 -mb-2 relative z-10">
              <div className="bg-white rounded-lg px-6 py-4" style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)'
            }}>
                <img src={logoImage} alt="The Rowan Center" className="h-20 w-auto" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent">
                      {t('nav.getHelp')}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[450px]">
                        <NavigationMenuLink asChild>
                          <Link to="/crisis-support" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.talkToSomeone')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.talkToSomeoneDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/resources" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.optionsResources')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.optionsResourcesDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/trauma-recovery" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.longTermTherapy')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.longTermTherapyDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent">
                      {t('nav.whoWeAre')}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink asChild>
                          <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.missionVision')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.missionVisionDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/impact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.ourImpact')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.ourImpactDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/financials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.financials')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('footer.nonprofit')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/staff" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.ourTeam')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.ourTeamDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/board-of-directors" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.boardOfDirectors')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.boardDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/careers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.careersInternships')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.careersDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent">
                      {t('nav.whatWeDo')}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink asChild>
                          <Link to="/prevention-education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.preventionEducation')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.preventionDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/crisis-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.crisisServices')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.crisisDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/victim-advocacy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.victimAdvocacy')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.advocacyDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/trauma-recovery" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.traumaRecovery')} Clinic</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.clinicDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent">
                      {t('nav.getInvolved')}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink asChild>
                          <Link to="/donate" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.donate')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.donateDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/events" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.events')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.eventsDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/volunteer" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t('nav.volunteer')}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t('nav.volunteerDesc')}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/blog" className="text-white hover:text-white/80 px-4 py-2">
                        {t('nav.blog')}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden text-white hover:text-white/80" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Navigation menu" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && <nav id="mobile-navigation" className="lg:hidden border-t border-white/20" aria-label="Mobile navigation">
              <div className="py-4 space-y-2">
                <Link to="/crisis-support" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Get Help Now
                </Link>
                <Link to="/about" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Who We Are
                </Link>
                <Link to="/prevention-education" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Prevention Education
                </Link>
                <Link to="/crisis-support" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Crisis Services
                </Link>
                <Link to="/about#team" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Our Team
                </Link>
                <Link to="/board-of-directors" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Board of Directors
                </Link>
                <Link to="/trauma-recovery" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Trauma Recovery
                </Link>
                <Link to="/resources" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Resources
                </Link>
                <Link to="/donate" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Get Involved
                </Link>
                <Link to="/blog" className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                  Blog
                </Link>
              </div>
            </nav>}
        </div>
      </nav>
    </header>;
};
export default Navigation;