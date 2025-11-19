import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { elementarySchoolData } from "@/data/kidSafeData";
import { TopicCard } from "@/components/kidsafe/TopicCard";
import { ResourceLinks } from "@/components/kidsafe/ResourceLinks";
import { FAQSection } from "@/components/kidsafe/FAQSection";

const KidSafeElementary = () => {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const handleTopicComplete = (topicId: string) => {
    setCompletedTopics((prev) => {
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Age Groups
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold">Elementary School</h1>
            <p className="text-xl text-muted-foreground">
              Age-appropriate lessons for K-5th grade about safety, boundaries, and healthy relationships
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <Badge variant="secondary" className="text-sm">Interactive Learning</Badge>
              <Badge variant="secondary" className="text-sm">Conversation Starters</Badge>
              <Badge variant="secondary" className="text-sm">Parent Resources</Badge>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12">
        <Tabs defaultValue={elementarySchoolData[0].grade} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {elementarySchoolData.map((gradeData) => (
              <TabsTrigger key={gradeData.grade} value={gradeData.grade}>
                {gradeData.grade}
              </TabsTrigger>
            ))}
          </TabsList>

          {elementarySchoolData.map((gradeData) => (
            <TabsContent key={gradeData.grade} value={gradeData.grade} className="space-y-8">
              {/* Grade Introduction */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    {gradeData.gradeLevel}
                  </CardTitle>
                  <CardDescription className="text-base">{gradeData.intro}</CardDescription>
                </CardHeader>
                {gradeData.highlightMessage && (
                  <CardContent>
                    <div className="flex items-start gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">{gradeData.highlightMessage}</p>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Topics */}
              <div className="space-y-6">
                {gradeData.topics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    isCompleted={completedTopics.has(topic.id)}
                    onComplete={handleTopicComplete}
                  />
                ))}
              </div>

              {/* Resources */}
              <ResourceLinks resources={gradeData.resources} />

              {/* FAQs */}
              {gradeData.faqs && <FAQSection faqs={gradeData.faqs} />}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default KidSafeElementary;
