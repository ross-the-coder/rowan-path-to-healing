import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, School, Users } from "lucide-react";
import { Link } from "react-router-dom";
import kidSafeHQLogo from "@/assets/kidsafe-hq-logo.png";
import kidsafeHqHero from "@/assets/kidsafe-hq-hero.jpg";
import kidsafeElementary from "@/assets/kidsafe-elementary.jpg";
import kidsafeMiddle from "@/assets/kidsafe-middle.jpg";
import kidsafeHigh from "@/assets/kidsafe-high.jpg";
import kidsafeResources from "@/assets/kidsafe-resources.jpg";

const KidSafeHQ = () => {
  const ageGroups = [
    {
      title: "Elementary School",
      description: "Age-appropriate lessons for K-5th grade about safety, boundaries, and healthy relationships",
      icon: School,
      link: "/kidsafehq/elementary",
      color: "from-blue-500/10 to-blue-600/5",
      image: kidsafeElementary
    },
    {
      title: "Middle School",
      description: "Interactive guides for middle schoolers navigating friendships, emotions, and growing independence",
      icon: Users,
      link: "/kidsafehq/middle",
      color: "from-green-500/10 to-green-600/5",
      image: kidsafeMiddle
    },
    {
      title: "High School",
      description: "Resources for teens about healthy relationships, consent, digital safety, and more",
      icon: GraduationCap,
      link: "/kidsafehq/high",
      color: "from-purple-500/10 to-purple-600/5",
      image: kidsafeHigh
    },
    {
      title: "Resources",
      description: "Additional materials, guides, and external resources for parents, educators, and caregivers",
      icon: BookOpen,
      link: "/kidsafehq/resources",
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
                Interactive guides to help you have important conversations with your children about safety, boundaries, and healthy relationships
              </p>
            </div>
          </div>
        </div>

        {/* Age Group Selection */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Select an Age Group</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ageGroups.map((group) => {
              const IconComponent = group.icon;
              return (
                <Card key={group.title} className={`hover:shadow-lg transition-shadow overflow-hidden bg-gradient-to-br ${group.color}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={group.image} 
                      alt={group.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">{group.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={group.link}>Explore Content</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KidSafeHQ;
