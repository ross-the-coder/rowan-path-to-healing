import { Button } from "@/components/ui/button";
import { Phone, Heart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import supportGroupImage from "@/assets/support-group.jpg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const HeroSection = () => {
  const {
    t
  } = useTranslation();
  return <section className="relative overflow-hidden">
      {/* Full Bleed Hero with Photo Overlay */}
      <div className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={supportGroupImage} alt={t('hero.imageAlt')} className="w-full h-full object-cover" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70 pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-seasons font-normal leading-tight text-white mb-8">
              {t('hero.tagline1')}{" "}
              <span className="text-white">{t('hero.tagline2')}</span>{" "}
              <span className="text-white">{t('hero.tagline3')}</span>
            </h1>
            
            <p className="text-xl text-white/90 font-roboto font-light leading-relaxed mb-8 max-w-2xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="bg-emergency hover:bg-emergency/90 shadow-button font-roboto font-medium">
                    <Phone className="mr-2 h-5 w-5" />
                    {t('crisis.hotline')}
                    <ChevronDown className="ml-2 h-5 w-5" />
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
              <Button variant="outline" size="lg" asChild className="font-roboto font-medium border-white/80 text-white bg-white/10 hover:bg-white hover:text-secondary backdrop-blur-sm">
                <Link to="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  {t('hero.ctaSupport')}
                </Link>
              </Button>
            </div>

            <div className="text-sm text-white/70 font-roboto">
              <p>{t('hero.servingArea')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-blue-accent text-white py-12 bg-sky-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-seasons font-bold mb-2">24/7</div>
              <div className="font-roboto">{t('stats.crisisSupport')}</div>
            </div>
            <div>
              <div className="text-3xl font-seasons font-bold mb-2">30+</div>
              <div className="font-roboto">{t('stats.yearsServing')}</div>
            </div>
            <div>
              <div className="text-3xl font-seasons font-bold mb-2">{t('stats.free')}</div>
              <div className="font-roboto">{t('stats.confidentialServices')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;