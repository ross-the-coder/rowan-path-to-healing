import { useState, useMemo, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, Search, BookOpen, Filter, X, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useKidSafeFAQs } from "@/hooks/useSanityData";
import { getUniqueGrades, getUniqueTopics, getGradeLevel, getRelatedResources, topicToResourceMapping } from "@/data/faqData";
import { searchResources, getAgeGroupLabel, MatchedResource } from "@/utils/resourceMatcher";
import { supabase } from "@/integrations/supabase/client";

const KidSafeFAQ = () => {
  const { data: faqData, isLoading } = useKidSafeFAQs();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Helper function to get unique grades from Sanity data
  const allGrades = useMemo(() => {
    if (!faqData) return [];
    const grades = new Set<string>();
    faqData.forEach((faq: any) => faq.grades?.forEach((g: string) => grades.add(g)));
    return Array.from(grades).sort((a, b) => {
      const gradeOrder: Record<string, number> = {
        "3rd": 3, "4th": 4, "5th": 5, "6th": 6, "7th": 7, "8th": 8,
        "9th": 9, "10th": 10, "11th": 11, "12th": 12
      };
      return (gradeOrder[a] || 0) - (gradeOrder[b] || 0);
    });
  }, [faqData]);

  // Helper function to get unique topics from Sanity data
  const allTopics = useMemo(() => {
    if (!faqData) return [];
    const topics = new Set<string>();
    faqData.forEach((faq: any) => faq.topics?.forEach((t: string) => topics.add(t)));
    return Array.from(topics).sort();
  }, [faqData]);

  const filteredFAQs = useMemo(() => {
    if (!faqData) return [];
    return faqData.filter((faq: any) => {
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
  }, [faqData, searchQuery, selectedGrades, selectedTopics]);

  // Get recommended resources when no FAQs match but there's a search query
  const recommendedResources = useMemo(() => {
    if (filteredFAQs.length === 0 && searchQuery.length >= 2) {
      return searchResources(searchQuery);
    }
    return [];
  }, [filteredFAQs.length, searchQuery]);

  // Track search queries for FAQ improvement
  const lastSavedQuery = useRef<string>("");
  
  useEffect(() => {
    const saveSearchQuery = async () => {
      // Only save if query is meaningful (3+ chars) and different from last saved
      if (searchQuery.length >= 3 && searchQuery !== lastSavedQuery.current) {
        // Debounce: wait 1.5s after user stops typing
        const timeoutId = setTimeout(async () => {
          if (searchQuery === lastSavedQuery.current) return;
          
          lastSavedQuery.current = searchQuery;
          
          const matchedTopics = recommendedResources
            .map(r => r.category)
            .filter((v, i, a) => a.indexOf(v) === i)
            .slice(0, 5);

          await supabase.from("faq_search_queries").insert({
            query: searchQuery,
            had_faq_results: filteredFAQs.length > 0,
            had_resource_results: recommendedResources.length > 0,
            matched_topics: matchedTopics
          });
        }, 1500);

        return () => clearTimeout(timeoutId);
      }
    };

    saveSearchQuery();
  }, [searchQuery, filteredFAQs.length, recommendedResources]);

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

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="bg-gradient-to-br from-teal-500/10 via-teal-600/5 to-teal-500/5 pt-24 pb-12">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-48 mb-4" />
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <Skeleton className="h-12 w-96 mx-auto" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
        </div>
        <main className="flex-1 container mx-auto px-4 py-12">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <Skeleton className="h-12 w-full mb-4" />
            </CardContent>
          </Card>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-32 mt-2" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            Showing {filteredFAQs.length} of {faqData?.length || 0} questions
          </p>
        </div>

        {/* FAQ List */}
        {filteredFAQs.length > 0 ? (
          <Accordion type="multiple" className="space-y-4">
            {filteredFAQs.map((faq: any) => (
              <AccordionItem
                key={faq._id}
                value={`faq-${faq._id}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <div className="flex-1 pr-4">
                    <p className="font-medium text-base">{faq.question}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {faq.grades.slice(0, 3).map(grade => {
                        const level = getGradeLevel(grade);
                        const colorClass = level === "elementary" ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" :
                          level === "middle" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
                            "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
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
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  
                  {/* Related Resources Section */}
                  {(() => {
                    const related = getRelatedResources(faq.topics);
                    if (related.categories.length > 0) {
                      return (
                        <div className="mt-4 p-3 rounded-lg bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="h-4 w-4 text-teal-600" />
                            <span className="text-sm font-medium text-teal-800 dark:text-teal-300">Related Resources</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {related.categories.slice(0, 4).map(category => (
                              <Badge key={category} variant="secondary" className="text-xs bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                                {category}
                              </Badge>
                            ))}
                            {related.categories.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{related.categories.length - 4} more
                              </Badge>
                            )}
                          </div>
                          <Button asChild size="sm" variant="outline" className="text-teal-700 border-teal-300 hover:bg-teal-100 dark:text-teal-300 dark:border-teal-700 dark:hover:bg-teal-900">
                            <Link to="/kidsafehq/resources">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View Resources
                            </Link>
                          </Button>
                        </div>
                      );
                    }
                    return null;
                  })()}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="space-y-6">
            <Card className="text-center py-8">
              <CardContent>
                <HelpCircle className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">No questions found</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find a matching FAQ for your search.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear all filters
                </Button>
              </CardContent>
            </Card>

            {/* Smart Resource Recommendations */}
            {recommendedResources.length > 0 && (
              <Card className="border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-teal-100/30 dark:from-teal-950/30 dark:to-teal-900/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-teal-600" />
                    <CardTitle className="text-lg">Recommended Resources</CardTitle>
                  </div>
                  <CardDescription>
                    Based on your search for "{searchQuery}", these resources might help:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {recommendedResources.map((resource, index) => {
                      const isBestMatch = index === 0 && resource.relevanceScore >= 8;
                      const isHighlyRelevant = index > 0 && index < 3 && resource.relevanceScore >= 6;
                      
                      return (
                        <div
                          key={`${resource.title}-${index}`}
                          className={`p-4 rounded-lg bg-background border transition-colors ${
                            isBestMatch 
                              ? "border-teal-400 dark:border-teal-600 ring-2 ring-teal-200 dark:ring-teal-800" 
                              : "hover:border-teal-300 dark:hover:border-teal-700"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                {resource.url ? (
                                  <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
                                  >
                                    {resource.title}
                                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                                  </a>
                                ) : (
                                  <span className="font-medium">{resource.title}</span>
                                )}
                                {isBestMatch && (
                                  <Badge className="bg-teal-600 text-white text-xs">
                                    <Sparkles className="h-3 w-3 mr-1" />
                                    Best Match
                                  </Badge>
                                )}
                                {isHighlyRelevant && (
                                  <Badge variant="outline" className="border-teal-400 text-teal-700 dark:text-teal-400 text-xs">
                                    Highly Relevant
                                  </Badge>
                                )}
                              </div>
                              {resource.description && (
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                  {resource.description}
                                </p>
                              )}
                            </div>
                            <div className="flex flex-col gap-1 items-end flex-shrink-0">
                              <Badge variant="secondary" className="text-xs whitespace-nowrap">
                                {resource.category}
                              </Badge>
                              <Badge 
                                variant="outline" 
                                className={`text-xs whitespace-nowrap ${
                                  resource.ageGroup === "elementary" ? "border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-400" :
                                  resource.ageGroup === "middle" ? "border-green-300 text-green-700 dark:border-green-700 dark:text-green-400" :
                                  "border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-400"
                                }`}
                              >
                                {getAgeGroupLabel(resource.ageGroup)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/kidsafehq/resources">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Browse All Resources
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
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
