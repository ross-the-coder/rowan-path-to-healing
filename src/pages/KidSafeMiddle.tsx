import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { middleSchoolData } from "@/data/middleSchoolData";
import { TopicCard } from "@/components/kidsafe/TopicCard";
import { FAQSection } from "@/components/kidsafe/FAQSection";
import { ResourceLinks } from "@/components/kidsafe/ResourceLinks";

const KidSafeMiddle = () => {
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
      
      <div className="bg-gradient-to-br from-green-500/10 via-green-600/5 to-green-500/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Age Groups
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-12 w-12 text-green-600" />
              <h1 className="text-4xl font-bold">Middle School Safety Guide</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Interactive guides for middle schoolers navigating friendships, emotions, digital life, and growing independence. Essential topics for ages 11-14.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="6th" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="6th">6th Grade</TabsTrigger>
              <TabsTrigger value="7th">7th Grade</TabsTrigger>
              <TabsTrigger value="8th">8th Grade</TabsTrigger>
            </TabsList>

            {middleSchoolData.map((gradeData) => (
              <TabsContent key={gradeData.grade} value={gradeData.grade.split(' ')[0].toLowerCase()}>
                <div className="space-y-8">
                  {/* Grade Introduction */}
                  <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-2xl">{gradeData.grade}</CardTitle>
                      <CardDescription className="text-base">{gradeData.gradeLevel}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{gradeData.intro}</p>
                      {gradeData.highlightMessage && (
                        <div className="mt-4 p-4 bg-green-100 border-l-4 border-l-green-500 rounded">
                          <p className="font-medium text-green-900">{gradeData.highlightMessage}</p>
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

export default KidSafeMiddle;
