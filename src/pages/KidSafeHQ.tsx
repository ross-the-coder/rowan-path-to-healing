import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, School, Users, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import kidSafeHQLogo from "@/assets/kidsafe-hq-logo.png";
import kidsafeHqHero from "@/assets/kidsafe-hq-hero.jpg";
import kidsafeElementary from "@/assets/kidsafe-elementary.jpg";
import kidsafeMiddle from "@/assets/kidsafe-middle.jpg";
import kidsafeHigh from "@/assets/kidsafe-high.jpg";
import kidsafeResources from "@/assets/kidsafe-resources.jpg";
import NewsTicker from "@/components/kidsafe/NewsTicker";
import NewsSection from "@/components/kidsafe/NewsSection";
import { getConnecticutArticles, getAllArticles } from "@/data/newsData";

const KidSafeHQ = () => {
  const { t } = useTranslation();
  const ctArticles = getConnecticutArticles();
  const allArticles = getAllArticles();
  const tickerArticles = ctArticles.slice(0, 5);
  
  const ageGroups = [
    {
      titleKey: "kidsafeHQ.ageGroups.elementary.title",
      descriptionKey: "kidsafeHQ.ageGroups.elementary.description",
      icon: School,
      link: "/kidsafehq/elementary",
      buttonLabel: "Explore Grades K-5",
      color: "from-blue-500/10 to-blue-600/5",
      image: kidsafeElementary
    },
    {
      titleKey: "kidsafeHQ.ageGroups.middle.title",
      descriptionKey: "kidsafeHQ.ageGroups.middle.description",
      icon: Users,
      link: "/kidsafehq/middle",
      buttonLabel: "Explore Grades 6, 7, and 8",
      color: "from-green-500/10 to-green-600/5",
      image: kidsafeMiddle
    },
    {
      titleKey: "kidsafeHQ.ageGroups.high.title",
      descriptionKey: "kidsafeHQ.ageGroups.high.description",
      icon: GraduationCap,
      link: "/kidsafehq/high",
      buttonLabel: "Explore Grades 9, 10, 11, and 12",
      color: "from-purple-500/10 to-purple-600/5",
      image: kidsafeHigh
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
      image: kidsafeResources
    },
    {
      titleKey: "kidsafeHQ.supportCards.resources.title",
      descriptionKey: "kidsafeHQ.supportCards.resources.description",
      icon: BookOpen,
      link: "/kidsafehq/resources",
      buttonLabel: "Dive Deeper",
      color: "from-orange-500/10 to-orange-600/5",
      image: kidsafeResources
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative pt-24 pb-16">
          <div className="absolute inset-0 z-0">
            <img 
              src={kidsafeHqHero} 
              alt="Parent and child having a warm conversation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/85" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
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
          </div>
        </div>

        {/* Age Group Selection - 3 in a row */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('kidsafeHQ.selectAgeGroup')}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ageGroups.map((group) => {
              const IconComponent = group.icon;
              return (
                <Card key={group.titleKey} className={`hover:shadow-lg transition-shadow overflow-hidden bg-gradient-to-br ${group.color}`}>
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={group.image} 
                      alt={t(group.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-7 w-7 text-primary" />
                      <CardTitle className="text-xl">{t(group.titleKey)}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{t(group.descriptionKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
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
                <Card key={card.titleKey} className={`hover:shadow-lg transition-shadow overflow-hidden bg-gradient-to-br ${card.color}`}>
                  <div className="h-36 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={t(card.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-7 w-7 text-primary" />
                      <CardTitle className="text-xl">{t(card.titleKey)}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{t(card.descriptionKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
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
            <NewsTicker articles={tickerArticles} />
          </div>

          {/* News Section */}
          <div className="max-w-6xl mx-auto mt-6">
            <NewsSection articles={allArticles} compact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KidSafeHQ;
