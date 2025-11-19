import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { elementarySchoolData } from "@/data/kidSafeData";
import { TopicCard } from "@/components/kidsafe/TopicCard";
import { ResourceLinks } from "@/components/kidsafe/ResourceLinks";
import { FAQSection } from "@/components/kidsafe/FAQSection";

const KidSafeHQ = () => {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const handleTopicComplete = (topicId: string) => {
    setCompletedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <GraduationCap className="h-10 w-10 text-primary" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KidSafeHQ
              </h1>
              <Sparkles className="h-10 w-10 text-secondary" />
            </div>
            <p className="text-xl text-muted-foreground">
              Interactive guides to help you have important conversations with your children about safety, boundaries, and healthy relationships
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                📚 Grade-Specific Content
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                💬 Conversation Starters
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                🎯 Practice Activities
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="K" className="w-full">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Select Your Child's Grade Level
            </h2>
            <TabsList className="grid w-full max-w-md grid-cols-2 h-auto gap-2 bg-muted p-2">
              {elementarySchoolData.map((grade) => (
                <TabsTrigger 
                  key={grade.grade} 
                  value={grade.grade}
                  className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {grade.gradeLevel}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {elementarySchoolData.map((gradeData) => (
            <TabsContent key={gradeData.grade} value={gradeData.grade} className="space-y-8">
              {/* Introduction Card */}
              <Card className="border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardTitle className="text-2xl">Welcome to {gradeData.gradeLevel}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {gradeData.intro}
                  </CardDescription>
                  {gradeData.highlightMessage && (
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm font-medium text-primary flex items-start gap-2">
                        <Sparkles className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        {gradeData.highlightMessage}
                      </p>
                    </div>
                  )}
                </CardHeader>
              </Card>

              {/* Topics Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Core Topics</h3>
                  <Badge variant="outline" className="text-sm">
                    {completedTopics.size} / {gradeData.topics.length} completed
                  </Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                  {gradeData.topics.map((topic) => (
                    <TopicCard
                      key={topic.id}
                      topic={topic}
                      onComplete={handleTopicComplete}
                      isCompleted={completedTopics.has(topic.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Resources */}
              <ResourceLinks resources={gradeData.resources} />

              {/* FAQs */}
              {gradeData.faqs && <FAQSection faqs={gradeData.faqs} />}

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">Need More Support?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team is here to help with additional resources, workshops, and guidance
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="/crisis-support" className="text-primary hover:underline font-medium">
                      Crisis Support →
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a href="/prevention-education" className="text-primary hover:underline font-medium">
                      Prevention Education →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default KidSafeHQ;
