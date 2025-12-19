import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, Search, BookOpen, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { faqData, getUniqueGrades, getUniqueTopics, getGradeLevel } from "@/data/faqData";

const KidSafeFAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const allGrades = getUniqueGrades();
  const allTopics = getUniqueTopics();

  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      // Search filter
      const matchesSearch = searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Grade filter
      const matchesGrade = selectedGrades.length === 0 ||
        faq.grades.some(g => selectedGrades.includes(g));

      // Topic filter
      const matchesTopic = selectedTopics.length === 0 ||
        faq.topics.some(t => selectedTopics.includes(t));

      return matchesSearch && matchesGrade && matchesTopic;
    });
  }, [searchQuery, selectedGrades, selectedTopics]);

  const toggleGrade = (grade: string) => {
    setSelectedGrades(prev =>
      prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]
    );
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const clearFilters = () => {
    setSelectedGrades([]);
    setSelectedTopics([]);
    setSearchQuery("");
  };

  const hasActiveFilters = selectedGrades.length > 0 || selectedTopics.length > 0 || searchQuery !== "";

  // Get related resources based on search/filter
  const getRelatedResourcesLink = () => {
    if (selectedTopics.length > 0 || searchQuery) {
      return `/kidsafehq/resources`;
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="bg-gradient-to-br from-teal-500/10 via-teal-600/5 to-teal-500/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Age Groups
            </Link>
          </Button>

          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="h-12 w-12 text-teal-600" />
              <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Common questions from students about safety, consent, relationships, and more. Search or filter by grade level and topic.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search questions, answers, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-1">
                    {selectedGrades.length + selectedTopics.length + (searchQuery ? 1 : 0)}
                  </Badge>
                )}
              </Button>
              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>

            {showFilters && (
              <div className="space-y-4 pt-4 border-t">
                <div>
                  <h4 className="font-medium mb-2 text-sm">Filter by Grade Level</h4>
                  <div className="flex flex-wrap gap-2">
                    {allGrades.map(grade => {
                      const level = getGradeLevel(grade);
                      const colorClass = level === "elementary" ? "bg-blue-100 hover:bg-blue-200 text-blue-800" :
                        level === "middle" ? "bg-green-100 hover:bg-green-200 text-green-800" :
                          "bg-purple-100 hover:bg-purple-200 text-purple-800";
                      return (
                        <Badge
                          key={grade}
                          variant={selectedGrades.includes(grade) ? "default" : "outline"}
                          className={`cursor-pointer transition-colors ${selectedGrades.includes(grade) ? "" : colorClass}`}
                          onClick={() => toggleGrade(grade)}
                        >
                          {grade} Grade
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Filter by Topic</h4>
                  <div className="flex flex-wrap gap-2">
                    {allTopics.map(topic => (
                      <Badge
                        key={topic}
                        variant={selectedTopics.includes(topic) ? "default" : "outline"}
                        className="cursor-pointer transition-colors"
                        onClick={() => toggleTopic(topic)}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredFAQs.length} of {faqData.length} questions
          </p>
        </div>

        {/* FAQ List */}
        {filteredFAQs.length > 0 ? (
          <Accordion type="multiple" className="space-y-4">
            {filteredFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <div className="flex-1 pr-4">
                    <p className="font-medium text-base">{faq.question}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {faq.grades.slice(0, 3).map(grade => {
                        const level = getGradeLevel(grade);
                        const colorClass = level === "elementary" ? "bg-blue-100 text-blue-700" :
                          level === "middle" ? "bg-green-100 text-green-700" :
                            "bg-purple-100 text-purple-700";
                        return (
                          <Badge key={grade} variant="secondary" className={`text-xs ${colorClass}`}>
                            {grade}
                          </Badge>
                        );
                      })}
                      {faq.grades.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{faq.grades.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-muted-foreground">Topics:</span>
                    {faq.topics.map(topic => (
                      <Badge
                        key={topic}
                        variant="outline"
                        className="text-xs cursor-pointer hover:bg-primary/10"
                        onClick={() => {
                          if (!selectedTopics.includes(topic)) {
                            toggleTopic(topic);
                          }
                        }}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear all filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Related Resources Section */}
        <Card className="mt-12 bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-950/30 dark:to-teal-900/20 border-teal-200 dark:border-teal-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-teal-600" />
              <div>
                <CardTitle className="text-lg">Looking for More Resources?</CardTitle>
                <CardDescription>
                  {filteredFAQs.length === 0
                    ? "We couldn't find a matching FAQ, but our resource library may have what you need."
                    : "Explore our comprehensive resource library for additional guides and materials."}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default" className="bg-teal-600 hover:bg-teal-700">
                <Link to="/kidsafehq/resources">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Resources
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/crisis-services">Contact Support Services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default KidSafeFAQ;
