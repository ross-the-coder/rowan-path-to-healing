import therapistImage from "@/assets/therapist.jpeg";
import traumaRecoveryLogo from "@/assets/rowan-center-logo-trp-dark-bg.png";
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
              <img
                alt="One-on-one counseling session with caring professional"
                className="w-full h-[500px] object-cover"
                src={therapistImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <span className="text-4xl font-seasons font-normal text-white">Heal</span>
            </div>
            
            <h2 className="text-lg font-roboto font-light text-white leading-relaxed">
              Long-term Therapy
            </h2>
            
            <p className="text-lg font-roboto font-light text-white/85 leading-relaxed">
              {t('photoFeature.description')}
            </p>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="font-roboto text-white">Long-term therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="font-roboto text-white">{t('photoFeature.individualCounseling')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="font-roboto text-white">
                    Eye Movement Desensitization and Reprocessing (EMDR)
                  </span>
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
              <div className="flex justify-center lg:justify-end">
                <img
                  src={traumaRecoveryLogo}
                  alt="Trauma Recovery Clinic logo"
                  className="h-24 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

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