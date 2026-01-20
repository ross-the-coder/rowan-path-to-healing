import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReciteMeButton from "@/components/ReciteMeButton";
import QuickEscape from "@/components/QuickEscape";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, School, Users, HelpCircle, ShieldCheck, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AlertRibbon from "@/components/AlertRibbon";
import kidSafeHQLogo from "@/assets/kidsafe-hq-logo.png";
import kidsafeHqHero from "@/assets/kidsafe-hq-hero.jpg";
import kidsafeElementary from "@/assets/kidsafe-elementary.jpg";
import kidsafeMiddle from "@/assets/kidsafe-middle.jpg";
import kidsafeHigh from "@/assets/kidsafe-high.jpg";
import kidsafeResources from "@/assets/kidsafe-resources.jpg";
import NewsTicker from "@/components/kidsafe/NewsTicker";
import NewsSection from "@/components/kidsafe/NewsSection";
import { getConnecticutArticles, getAllArticles } from "@/data/newsData";
import { Reveal } from "@/components/Reveal";

const KidSafeHQ = () => {
  const { t } = useTranslation();
  const ctArticles = getConnecticutArticles();
  const allArticles = getAllArticles();
  const tickerArticles = ctArticles.slice(0, 5);
  
  const highlights = [
    {
      title: "Age-appropriate lessons",
      description: "Built for each stage of child development.",
      icon: Sparkles,
    },
    {
      title: "Conversation starters",
      description: "Make tough topics feel easier to talk about.",
      icon: MessageCircle,
    },
    {
      title: "Practical guides",
      description: "Clear steps and activities families can use.",
      icon: BookOpen,
    },
    {
      title: "Trusted safety info",
      description: "Evidence-driven, community-informed content.",
      icon: ShieldCheck,
    },
  ];

  const ageGroups = [
    {
      titleKey: "kidsafeHQ.ageGroups.elementary.title",
      descriptionKey: "kidsafeHQ.ageGroups.elementary.description",
      icon: School,
      link: "/kidsafehq/elementary",
      buttonLabel: "Explore Grades K-5",
      color: "from-blue-500/10 to-blue-600/5",
      badge: "Grades K-5",
      accent: "border-blue-500",
      image: kidsafeElementary,
    },
    {
      titleKey: "kidsafeHQ.ageGroups.middle.title",
      descriptionKey: "kidsafeHQ.ageGroups.middle.description",
      icon: Users,
      link: "/kidsafehq/middle",
      buttonLabel: "Explore Grades 6, 7, and 8",
      color: "from-green-500/10 to-green-600/5",
      badge: "Grades 6-8",
      accent: "border-green-500",
      image: kidsafeMiddle,
    },
    {
      titleKey: "kidsafeHQ.ageGroups.high.title",
      descriptionKey: "kidsafeHQ.ageGroups.high.description",
      icon: GraduationCap,
      link: "/kidsafehq/high",
      buttonLabel: "Explore Grades 9, 10, 11, and 12",
      color: "from-purple-500/10 to-purple-600/5",
      badge: "Grades 9-12",
      accent: "border-purple-500",
      image: kidsafeHigh,
    }
  ];

  const supportCards = [
    {
      titleKey: "kidsafeHQ.supportCards.faq.title",
      descriptionKey: "kidsafeHQ.supportCards.faq.description",
      icon: HelpCircle,
      link: "/kidsafehq/faqs",
      buttonLabel: "Do you have a question?",
      color: "from-teal-500/10 to-teal-600/5",
      badge: "FAQs",
      accent: "border-teal-500",
      image: kidsafeResources,
    },
    {
      titleKey: "kidsafeHQ.supportCards.resources.title",
      descriptionKey: "kidsafeHQ.supportCards.resources.description",
      icon: BookOpen,
      link: "/kidsafehq/resources",
      buttonLabel: "Dive Deeper",
      color: "from-orange-500/10 to-orange-600/5",
      badge: "Resources",
      accent: "border-orange-500",
      image: kidsafeResources,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.08)_0,_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.08)_0,_transparent_50%)] opacity-70" />
        {/* Hero Section */}
        <div className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${kidsafeHqHero})` }}
              aria-label="Parent and child having a warm conversation"
              role="img"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/85" />
          </div>
          <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <Reveal>
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src={kidSafeHQLogo} 
                    alt="KidSafeHQ by The Rowan Center" 
                    className="h-48 w-auto"
                  />
                </div>
                <p className="text-xl text-muted-foreground">
                {t('kidsafeHQ.hero.subtitle')}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {highlights.map((highlight) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={highlight.title} className="bg-white/80 backdrop-blur rounded-xl border border-white/60 p-4 text-left shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-secondary/15 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="font-semibold text-sm">{highlight.title}</div>
                    </div>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
            </Reveal>
          </div>
        </div>

        <AlertRibbon />

        {/* Age Group Selection - 3 in a row */}
        <div className="container mx-auto px-4 py-16 relative">
          <div className="absolute top-0 right-10 h-28 w-28 rounded-full bg-blue-100 blur-2xl" />
          <div className="absolute bottom-6 left-6 h-24 w-24 rounded-full bg-purple-100 blur-2xl" />
          <h2 className="text-3xl font-bold text-center mb-12">{t('kidsafeHQ.selectAgeGroup')}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ageGroups.map((group) => {
              const IconComponent = group.icon;
              return (
                <Card
                  key={group.titleKey}
                  className={`group overflow-hidden bg-gradient-to-br ${group.color} flex flex-col border-t-8 ${group.accent} shadow-[0_20px_40px_-25px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.6)]`}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={group.image} 
                      alt={t(group.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-white/80 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <CardTitle className="text-xl">{t(group.titleKey)}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{t(group.descriptionKey)}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="mb-3">
                      <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary">
                        {group.badge}
                      </span>
                    </div>
                    <Button asChild className="w-full">
                      <Link to={group.link}>{group.buttonLabel}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ and Resources - 2 in a row */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8">
            {supportCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={card.titleKey}
                  className={`group overflow-hidden bg-gradient-to-br ${card.color} flex flex-col border-t-8 ${card.accent} shadow-[0_20px_40px_-25px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.6)]`}
                >
                  <div className="h-36 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={t(card.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-white/80 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <CardTitle className="text-xl">{t(card.titleKey)}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{t(card.descriptionKey)}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="mb-3">
                      <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary">
                        {card.badge}
                      </span>
                    </div>
                    <Button asChild className="w-full">
                      <Link to={card.link}>{card.buttonLabel}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* News Ticker - CT Local */}
          <div className="max-w-6xl mx-auto mt-10">
            <div className="rounded-2xl bg-secondary/5 border border-secondary/10 p-6 md:p-8 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.5)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div>
                  <span className="inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                    Latest Safety Updates
                  </span>
                  <h3 className="text-2xl font-semibold mt-2">News & Resources</h3>
                </div>
              </div>
              <NewsTicker articles={tickerArticles} />
              <div className="mt-6">
                <NewsSection articles={allArticles} compact />
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
      <ReciteMeButton />
      <QuickEscape />
    </div>
  );
};

export default KidSafeHQ;
