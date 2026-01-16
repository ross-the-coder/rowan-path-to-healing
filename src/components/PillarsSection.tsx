import { Button } from "@/components/ui/button";
import { Shield, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import outreachImage from "@/assets/community-outreach.jpg";
import counselingHopeImage from "@/assets/group-therapy-diverse.jpg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
const PillarsSection = () => {
  const { t } = useTranslation();
  
  return <section className="py-0">
      {/* Prevent Section */}
      <div className="text-white py-20 bg-sky-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-primary/10">
                <img src={outreachImage} alt="Community outreach volunteers working together at an educational event" className="w-full h-[400px] object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-seasons font-normal">{t('pillarsSection.prevent.title')}</h2>
              </div>
              <p className="text-xl font-roboto font-light text-white/90 leading-relaxed">
                {t('pillarsSection.prevent.description')}
              </p>
              <div className="space-y-3">
                <div className="font-roboto font-medium text-white">{t('pillarsSection.prevent.servicesTitle')}</div>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t('pillarsSection.prevent.communityWorkshops')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t('pillarsSection.prevent.schoolPrograms')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t('pillarsSection.prevent.bystanderTraining')}</span>
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm">
                <Link to="/prevention-education">{t('pillarsSection.prevent.learnMore')}</Link>
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
                <h2 className="text-4xl font-seasons font-normal">{t('pillarsSection.respond.title')}</h2>
              </div>
              <p className="text-xl font-roboto font-light text-white/90 leading-relaxed">
                {t('pillarsSection.respond.description')}
              </p>
              <div className="bg-emergency p-6 rounded-lg border border-emergency-foreground/20">
                <div className="text-2xl font-seasons font-bold mb-2 text-white">{t('pillarsSection.respond.crisisHelpline')}</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 text-white hover:bg-white/10 text-3xl font-roboto font-bold">
                      {t('pillarsSection.respond.callNow')}
                      <ChevronDown className="ml-2 h-6 w-6" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background z-50">
                    <DropdownMenuItem asChild>
                      <a href="tel:2033292929" className="flex items-center gap-2 cursor-pointer">
                        <Phone className="h-4 w-4" />
                        <div>
                          <div className="font-medium">{t('pillarsSection.respond.english')}</div>
                          <div className="text-sm text-muted-foreground">(203) 329-2929</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="tel:8885688332" className="flex items-center gap-2 cursor-pointer">
                        <Phone className="h-4 w-4" />
                        <div>
                          <div className="font-medium">{t('pillarsSection.respond.spanish')}</div>
                          <div className="text-sm text-muted-foreground">(888) 568-8332</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="text-sm text-white/90 mt-2">{t('pillarsSection.respond.available247')}</div>
              </div>
              <div className="space-y-3">
                <div className="font-roboto font-medium text-white">{t('pillarsSection.respond.servicesTitle')}</div>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t('pillarsSection.respond.helplineSupport')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t('pillarsSection.respond.accompaniment')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Crisis Counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t('pillarsSection.respond.legalAdvocacy')}</span>
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-secondary backdrop-blur-sm">
                <Link to="/crisis-support">{t('pillarsSection.respond.getHelpNow')}</Link>
              </Button>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="Diverse group of women in supportive group therapy session empowering each other"
                  className="w-full h-[400px] object-cover"
                  src={counselingHopeImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default PillarsSection;