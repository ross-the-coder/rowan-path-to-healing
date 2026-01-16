import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import healingImage from "@/assets/family-embracing.jpg";
import kidsafeLogo from "@/assets/kidsafe-hq-logo.png";
import { useTranslation } from "react-i18next";

const KidsafeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#caebff]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white/60">
              <img
                src={healingImage}
                alt="Family learning together about personal safety"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-1 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
                <img src={kidsafeLogo} alt="KidSafeHQ Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-4xl font-seasons font-normal text-[hsl(var(--blue-accent))]">
                {t("pillarsSection.kidsafe.title")}
              </h2>
            </div>
            <p className="text-xl font-roboto font-light text-foreground/90 leading-relaxed">
              {t("pillarsSection.kidsafe.description")}
            </p>
            <div className="space-y-3">
              <div className="font-roboto font-medium text-[hsl(var(--blue-accent))]">
                {t("pillarsSection.kidsafe.resourcesTitle")}
              </div>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--blue-accent))] rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t("pillarsSection.kidsafe.ageAppropriate")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--blue-accent))] rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t("pillarsSection.kidsafe.conversationStarters")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--blue-accent))] rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t("pillarsSection.kidsafe.interactiveActivities")}</span>
                </li>
              </ul>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--blue-accent))] hover:bg-[hsl(var(--blue-accent))]/90 text-white"
            >
              <Link to="/kidsafehq">{t("pillarsSection.kidsafe.explore")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsafeSection;
