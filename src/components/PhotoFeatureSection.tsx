import counselingHopeImage from "@/assets/group-therapy-diverse.jpg";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const PhotoFeatureSection = () => {
  const { t } = useTranslation();
  
  return <section className="py-20 bg-[hsl(var(--accent))] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Floating Photo with Color Overlay */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-full h-full bg-accent/20 rounded-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img alt="Diverse group of women in supportive group therapy session empowering each other" className="w-full h-[500px] object-cover" src={counselingHopeImage} />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full">
              <Heart className="h-5 w-5 text-white" />
              <span className="text-sm font-roboto font-medium text-white">Heal</span>
            </div>
            
            <h2 className="text-4xl font-seasons font-normal text-white leading-tight">
              {t('photoFeature.title')}
            </h2>
            
            <p className="text-lg font-roboto font-light text-white/85 leading-relaxed">
              {t('photoFeature.description')}
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span className="font-roboto text-white">{t('photoFeature.individualCounseling')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span className="font-roboto text-white">{t('photoFeature.evidenceBased')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span className="font-roboto text-white">{t('photoFeature.comfortableEnvironment')}</span>
              </li>
            </ul>

            <Button asChild size="lg" className="bg-white text-[hsl(var(--accent))] hover:bg-white/90">
              <Link to="/trauma-recovery">
                <Heart className="mr-2 h-5 w-5" />
                {t('photoFeature.learnMore')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default PhotoFeatureSection;