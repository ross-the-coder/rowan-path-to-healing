import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { elementarySchoolData } from "@/data/kidSafeData";
import { TopicCard } from "@/components/kidsafe/TopicCard";
import { ResourceLinks } from "@/components/kidsafe/ResourceLinks";
import { FAQSection } from "@/components/kidsafe/FAQSection";

const ElementarySchool = () => {
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/kidsafehq">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to KidSafeHQ
              </Button>
            </Link>
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Elementary School</h1>
              <p className="text-xl text-muted-foreground">
                Interactive guides for K-5th grade about safety, boundaries, and healthy relationships
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="K" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="K">K</TabsTrigger>
              <TabsTrigger value="1">1st</TabsTrigger>
              <TabsTrigger value="2">2nd</TabsTrigger>
              <TabsTrigger value="3">3rd</TabsTrigger>
              <TabsTrigger value="4">4th</TabsTrigger>
              <TabsTrigger value="5">5th</TabsTrigger>
            </TabsList>

            {elementarySchoolData.map((gradeData) => (
              <TabsContent key={gradeData.grade} value={gradeData.grade}>
                <Card className="mb-8 border-primary/20">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-3xl">{gradeData.gradeLevel}</CardTitle>
                        <CardDescription className="mt-2 text-base">{gradeData.intro}</CardDescription>
                      </div>
                    </div>
                    {gradeData.highlightMessage && (
                      <Badge variant="secondary" className="w-fit mt-4">
                        {gradeData.highlightMessage}
                      </Badge>
                    )}
                  </CardHeader>
                </Card>

                <div className="space-y-6">
                  {gradeData.topics.map((topic) => (
                    <TopicCard
                      key={topic.id}
                      topic={topic}
                      isCompleted={completedTopics.has(topic.id)}
                      onToggleComplete={() => handleTopicComplete(topic.id)}
                    />
                  ))}
                </div>

                <ResourceLinks resources={gradeData.resources} />
                
                {gradeData.faqs && <FAQSection faqs={gradeData.faqs} />}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ElementarySchool;
