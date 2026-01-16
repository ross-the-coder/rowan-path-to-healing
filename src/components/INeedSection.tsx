import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, BookOpen, Heart, Info, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import supportHandsImage from "@/assets/support-hands.jpg";
import counselingSessionImage from "@/assets/counseling-session.jpg";
import resourcesLearningImage from "@/assets/resources-learning.jpg";
import heroAboutImage from "@/assets/hero-about.jpg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const INeedSection = () => {
  const { t } = useTranslation();
  
  return <section className="py-16 relative overflow-hidden">
      {/* Background with subtle photo overlay */}
      <div className="absolute inset-0 z-0">
        <img src={supportHandsImage} alt="Supporting hands" className="w-full h-full object-cover opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-seasons font-normal text-foreground mb-4">
            {t('iNeedSection.title')}
          </h2>
          <p className="text-xl font-roboto font-light text-muted-foreground max-w-2xl mx-auto">
            {t('iNeedSection.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="group relative h-full min-h-[360px] overflow-hidden hover:shadow-lg transition-all duration-300 border-0 hover:-translate-y-1">
            <div className="absolute inset-0">
              <img src={supportHandsImage} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/80" />
            </div>
            <CardContent className="relative z-10 p-8 text-center h-full flex flex-col text-white">
              <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/25 transition-colors">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-seasons font-normal mb-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                  {t('iNeedSection.talkNow.title')}
                </h3>
                <p className="text-white/95 mb-6 font-roboto drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                  {t('iNeedSection.talkNow.description')}
                </p>
              </div>
              <div className="space-y-4 mt-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full bg-white/90 text-slate-900 hover:bg-white">
                      <Phone className="mr-2 h-4 w-4" />
                      {t('iNeedSection.talkNow.callHelpline')}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background z-50 w-full">
                    <DropdownMenuItem asChild>
                      <a href="tel:2033292929" className="flex items-center gap-2 cursor-pointer">
                        <Phone className="h-4 w-4" />
                        <div>
                          <div className="font-medium">{t('iNeedSection.talkNow.english')}</div>
                          <div className="text-sm text-muted-foreground">(203) 329-2929</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="tel:8885688332" className="flex items-center gap-2 cursor-pointer">
                        <Phone className="h-4 w-4" />
                        <div>
                          <div className="font-medium">{t('iNeedSection.talkNow.spanish')}</div>
                          <div className="text-sm text-muted-foreground">(888) 568-8332</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button asChild size="sm" className="w-full bg-secondary hover:bg-secondary/90">
                  <Link to="/crisis-support">{t('iNeedSection.talkNow.getHelpNow')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative h-full min-h-[360px] overflow-hidden hover:shadow-lg transition-all duration-300 border-0 hover:-translate-y-1">
            <div className="absolute inset-0">
              <img src={resourcesLearningImage} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/80" />
            </div>
            <CardContent className="relative z-10 p-8 text-center h-full flex flex-col text-white">
              <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/25 transition-colors">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-seasons font-normal mb-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                  {t('iNeedSection.learnOptions.title')}
                </h3>
                <p className="text-white/95 mb-6 font-roboto drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                  {t('iNeedSection.learnOptions.description')}
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full mt-auto bg-white/90 text-slate-900 hover:bg-white">
                <Link to="/resources">{t('iNeedSection.learnOptions.exploreResources')}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative h-full min-h-[360px] overflow-hidden hover:shadow-lg transition-all duration-300 border-0 hover:-translate-y-1">
            <div className="absolute inset-0">
              <img src={counselingSessionImage} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/80" />
            </div>
            <CardContent className="relative z-10 p-8 text-center h-full flex flex-col text-white">
              <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/25 transition-colors">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-seasons font-normal mb-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                  {t('iNeedSection.longTermTherapy.title')}
                </h3>
                <p className="text-white/95 mb-6 font-roboto drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                  {t('iNeedSection.longTermTherapy.description')}
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full mt-auto bg-white/90 text-slate-900 hover:bg-white">
                <Link to="/trauma-recovery">{t('iNeedSection.longTermTherapy.learnMore')}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative h-full min-h-[360px] overflow-hidden hover:shadow-lg transition-all duration-300 border-0 hover:-translate-y-1">
            <div className="absolute inset-0">
              <img src={heroAboutImage} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/80" />
            </div>
            <CardContent className="relative z-10 p-8 text-center h-full flex flex-col text-white">
              <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/25 transition-colors">
                <Info className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-seasons font-normal mb-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                  {t('iNeedSection.aboutUs.title')}
                </h3>
                <p className="text-white/95 mb-6 font-roboto drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                  {t('iNeedSection.aboutUs.description')}
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full mt-auto bg-white/90 text-slate-900 hover:bg-white">
                <Link to="/about">{t('iNeedSection.aboutUs.aboutUs')}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default INeedSection;