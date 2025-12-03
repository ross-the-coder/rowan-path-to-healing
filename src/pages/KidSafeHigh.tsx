import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { highSchoolData } from "@/data/highSchoolData";
import { TopicCard } from "@/components/kidsafe/TopicCard";
import { FAQSection } from "@/components/kidsafe/FAQSection";
import { ResourceLinks } from "@/components/kidsafe/ResourceLinks";

const KidSafeHigh = () => {
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
      
      <div className="bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-purple-500/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Age Groups
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-12 w-12 text-purple-600" />
              <h1 className="text-4xl font-bold">High School Safety Guide</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Comprehensive guides for high schoolers on consent, healthy relationships, legal rights, and preparing for life after graduation. Essential topics for ages 14-18.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="9th" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="9th">9th Grade</TabsTrigger>
              <TabsTrigger value="10th">10th Grade</TabsTrigger>
              <TabsTrigger value="11th">11th Grade</TabsTrigger>
              <TabsTrigger value="12th">12th Grade</TabsTrigger>
            </TabsList>

            {highSchoolData.map((gradeData) => (
              <TabsContent key={gradeData.grade} value={gradeData.grade.split(' ')[0].toLowerCase()}>
                <div className="space-y-8">
                  {/* Grade Introduction */}
                  <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
                    <CardHeader>
                      <CardTitle className="text-2xl">{gradeData.grade}</CardTitle>
                      <CardDescription className="text-base">{gradeData.gradeLevel}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{gradeData.intro}</p>
                      {gradeData.highlightMessage && (
                        <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-900/30 border-l-4 border-l-purple-500 rounded">
                          <p className="font-medium text-purple-900 dark:text-purple-100">{gradeData.highlightMessage}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Progress Tracker */}
                  <Card className="border-primary/20">
                    <CardHeader className="bg-primary/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Your Progress</CardTitle>
                          <CardDescription>
                            {completedTopics.size} of {gradeData.topics.length} topics completed
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-8 w-8 text-primary" />
                          <span className="text-2xl font-bold text-primary">
                            {Math.round((completedTopics.size / gradeData.topics.length) * 100)}%
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Topics */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Topics for {gradeData.grade}</h2>
                    {gradeData.topics.map((topic) => (
                      <TopicCard
                        key={topic.id}
                        topic={topic}
                        onComplete={handleTopicComplete}
                        isCompleted={completedTopics.has(topic.id)}
                      />
                    ))}
                  </div>

                  {/* FAQs */}
                  {gradeData.faqs && <FAQSection faqs={gradeData.faqs} />}

                  {/* Resources */}
                  <ResourceLinks resources={gradeData.resources} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KidSafeHigh;
