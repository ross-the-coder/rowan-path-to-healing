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
import { faqData as fallbackFaqData, getGradeLevel, getRelatedResources } from "@/data/faqData";
import { getAgeGroupLabel } from "@/utils/resourceMatcher";
import { supabase } from "@/integrations/supabase/client";

const KidSafeFAQ = () => {
  const { data: sanityData, isLoading: isSanityLoading, error } = useKidSafeFAQs();
  
  // Use fallback data if sanityData is not available
  const faqData = useMemo(() => {
    if (sanityData && Array.isArray(sanityData) && sanityData.length > 0) {
      return sanityData;
    }
    return fallbackFaqData;
  }, [sanityData]);

  // If we have fallback data, we don't need to show a full-page loading skeleton
  const isLoading = isSanityLoading && (!faqData || faqData.length === 0);
  
  useEffect(() => {
    if (error) {
      console.error("KidSafeFAQ: Error loading FAQs from Sanity, using fallback data:", error);
    }
    if (sanityData) {
      console.log("KidSafeFAQ: Successfully loaded FAQs from Sanity. Count:", sanityData.length);
    }
  }, [sanityData, error]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined);

  // Optimize allGrades and allTopics by calculating them from fallbackData once
  // since they are mostly static and Sanity data structure should match
  const allGrades = useMemo(() => {
    const grades = new Set<string>();
    // Use fallbackFaqData for faster initial render of filters
    // This is safe because grade levels are constant
    fallbackFaqData.forEach((faq: any) => {
      if (faq && Array.isArray(faq.grades)) {
        faq.grades.forEach((g: string) => {
          if (g) grades.add(g);
        });
      }
    });
    return Array.from(grades).sort((a, b) => {
      const gradeOrder: Record<string, number> = {
        "3rd": 3, "4th": 4, "5th": 5, "6th": 6, "7th": 7, "8th": 8,
        "9th": 9, "10th": 10, "11th": 11, "12th": 12
      };
      return (gradeOrder[a] || 0) - (gradeOrder[b] || 0);
    });
  }, []);

  // Helper function to get unique topics from Sanity data
  const allTopics = useMemo(() => {
    if (!faqData || !Array.isArray(faqData)) return [];
    const topics = new Set<string>();
    faqData.forEach((faq: any) => {
      if (faq && Array.isArray(faq.topics)) {
        faq.topics.forEach((t: string) => {
          if (t) topics.add(t);
        });
      }
    });
    return Array.from(topics).sort();
  }, [faqData]);

  const filteredFAQs = useMemo(() => {
    if (!faqData || !Array.isArray(faqData)) return [];
    
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const hasSearch = normalizedQuery.length > 0;
    const hasGradeFilter = selectedGrades.length > 0;
    const hasTopicFilter = selectedTopics.length > 0;
    const hasAnyFilter = hasSearch || hasGradeFilter || hasTopicFilter;
    
    // Early return if no filters - just return all FAQs
    if (!hasAnyFilter) {
      return faqData;
    }

    const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length >= 2);

    const results: any[] = [];

    // Use for loop for better performance with large datasets
    for (let i = 0; i < faqData.length; i++) {
      const faq = faqData[i];
      let relevance = 0;

      // Safe access to fields to prevent crashes
      const question = (faq?.question || "").toLowerCase();
      const answer = (faq?.answer || "").toLowerCase();
      const faqTopics = Array.isArray(faq?.topics) ? faq.topics : [];
      const faqGrades = Array.isArray(faq?.grades) ? faq.grades : [];

      // Grade filter - strict (early exit if doesn't match)
      if (hasGradeFilter) {
        const matchesGrade = faqGrades.some((g: string) => selectedGrades.includes(g));
        if (!matchesGrade) continue; // Skip this FAQ
      }

      // Topic filter - strict (early exit if doesn't match)
      if (hasTopicFilter) {
        const matchesTopic = faqTopics.some((t: string) => selectedTopics.includes(t));
        if (!matchesTopic) continue; // Skip this FAQ
      }

      // Search matching logic
      if (hasSearch) {
        // Exact match boosts
        if (question.includes(normalizedQuery)) relevance += 20;
        if (answer.includes(normalizedQuery)) relevance += 10;
        if (faqTopics.some((t: string) => t.toLowerCase().includes(normalizedQuery))) relevance += 15;

        // Word-based matching
        for (let j = 0; j < queryWords.length; j++) {
          const word = queryWords[j];
          if (question.includes(word)) relevance += 5;
          if (answer.includes(word)) relevance += 2;
          if (faqTopics.some((t: string) => t.toLowerCase().includes(word))) relevance += 3;
        }

        // If no match found, skip this FAQ
        if (relevance === 0) continue;
      } else {
        relevance = 1; // Default relevance when no search
      }

      results.push({ ...faq, relevance });
    }

    // Sort by relevance if there was a search query
    if (hasSearch) {
      results.sort((a: any, b: any) => b.relevance - a.relevance);
    }

    return results;
  }, [faqData, searchQuery, selectedGrades, selectedTopics]);

  // Get recommended resources when no FAQs match but there's a search query
  const recommendedResources = useMemo(() => {
    if (filteredFAQs.length === 0 && searchQuery.length >= 2) {
      return searchResources(searchQuery);
    }
    return [];
  }, [filteredFAQs.length, searchQuery]);

  // Track search queries for FAQ improvement (optimized - only save when user stops typing)
  const lastSavedQuery = useRef<string>("");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Clear any existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Only save if query is meaningful (3+ chars) and different from last saved
    if (searchQuery.length >= 3 && searchQuery !== lastSavedQuery.current) {
      // Debounce: wait 2s after user stops typing (increased to reduce DB calls)
      saveTimeoutRef.current = setTimeout(async () => {
        if (searchQuery === lastSavedQuery.current) return;
        
        lastSavedQuery.current = searchQuery;
        
        try {
          const matchedTopics = recommendedResources
            .map(r => r.category)
            .filter((v, i, a) => a.indexOf(v) === i)
            .slice(0, 5);

          // Use insert with error handling to prevent blocking
          await supabase.from("faq_search_queries").insert({
            query: searchQuery,
            had_faq_results: filteredFAQs.length > 0,
            had_resource_results: recommendedResources.length > 0,
            matched_topics: matchedTopics
          }).catch(err => {
            // Silently fail - don't block UI
            console.warn("Failed to save search query:", err);
          });
        } catch (err) {
          // Silently fail - don't block UI
          console.warn("Error saving search query:", err);
        }
      }, 2000);
    }

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
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

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="bg-gradient-to-br from-teal-500/10 via-teal-600/5 to-teal-500/5 pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Skeleton className="h-10 w-48" />
            </div>
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <Skeleton className="h-12 w-96 mx-auto" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
        </div>
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
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
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show error state only if we don't even have fallback data (unlikely but safe)
  if (error && (!faqData || faqData.length === 0)) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-24 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <HelpCircle className="h-16 w-16 text-red-500 mx-auto" />
            <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
            <p className="text-muted-foreground">
              We're having trouble loading the FAQs right now. Please check your internet connection and try again.
            </p>
            {error && (
              <div className="text-left space-y-2">
                <p className="text-xs font-bold text-red-600">Error Details:</p>
                <pre className="text-xs bg-slate-100 p-4 rounded overflow-auto max-h-48 border border-red-200">
                  {JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}
                </pre>
              </div>
            )}
            <Button asChild>
              <Link to="/kidsafehq">Return to KidSafeHQ</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Display a small notification if using fallback data due to error or still loading live data
  const renderNetworkWarning = () => {
    const isUsingFallback = faqData === fallbackFaqData;
    const isActuallySanityData = sanityData && Array.isArray(sanityData) && sanityData.length > 0;
    
    if (isUsingFallback && !isActuallySanityData) {
      return (
        <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800/50 py-2.5 px-4 transition-all animate-in fade-in slide-in-from-top-4 duration-500">
          <p className="text-amber-800 dark:text-amber-300 text-xs text-center flex items-center justify-center gap-2 font-medium">
            <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            {isSanityLoading 
              ? "Loading live updates... showing core library in the meantime."
              : "Note: We're showing our core FAQ library while we refresh our live connection."
            }
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {renderNetworkWarning()}

      <div className="bg-gradient-to-br from-teal-500/10 via-teal-600/5 to-teal-500/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to KidSafeHQ
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
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 overflow-hidden border-teal-100 dark:border-teal-900 shadow-lg">
            <div className="h-2 bg-teal-600 w-full" />
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-1 group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-teal-600 transition-colors" />
                  <Input
                    placeholder="Search questions, answers, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg border-teal-100 focus-visible:ring-teal-500 transition-all shadow-sm"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={showFilters ? "default" : "outline"}
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 h-12 px-6 ${showFilters ? "bg-teal-600 hover:bg-teal-700" : "border-teal-100"}`}
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                    {hasActiveFilters && (
                      <Badge variant="secondary" className="ml-1 bg-white/20 text-white border-none">
                        {selectedGrades.length + selectedTopics.length}
                      </Badge>
                    )}
                  </Button>
                  {hasActiveFilters && (
                    <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground hover:text-teal-600 h-12">
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>
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
          <div className="flex items-center justify-between mb-6 px-1">
            <p className="text-muted-foreground font-medium">
              {filteredFAQs.length === 0 && searchQuery.length > 0 
                ? "No exact matches found. See our recommendations below."
                : `Showing ${filteredFAQs.length} of ${faqData?.length || 0} questions`
              }
            </p>
          </div>

          {/* FAQ List */}
          {filteredFAQs.length > 0 ? (
            <Accordion 
              type="single" 
              collapsible 
              value={openAccordion}
              onValueChange={(value) => {
                setOpenAccordion(value);
              }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq: any, index: number) => {
                // Ensure unique ID - use index as fallback if _id is missing
                const uniqueId = faq._id || faq.id || `faq-item-${index}`;
                const accordionValue = `faq-${uniqueId}`;
                return (
                <AccordionItem
                  key={uniqueId}
                  value={accordionValue}
                  className="border rounded-xl px-4 bg-card shadow-sm hover:shadow-md transition-all duration-200 border-teal-50 dark:border-teal-900/50 scroll-mt-24"
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-5 [&[data-state=open]]:pb-2"
                  >
                    <div className="flex-1 pr-4">
                      <p className="font-semibold text-lg text-foreground/90 leading-snug group-data-[state=open]:text-teal-700 transition-colors">{faq.question}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {faq.grades?.slice(0, 3).map(grade => {
                          const level = getGradeLevel(grade);
                          const colorClass = level === "elementary" ? "bg-blue-50 text-blue-700 border-blue-100" :
                            level === "middle" ? "bg-green-50 text-green-700 border-green-100" :
                              "bg-purple-50 text-purple-700 border-purple-100";
                          return (
                            <Badge key={grade} variant="outline" className={`text-[10px] uppercase tracking-wider font-bold ${colorClass}`}>
                              {grade}
                            </Badge>
                          );
                        })}
                        {faq.grades?.length > 3 && (
                          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-bold">
                            +{faq.grades.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="h-px bg-teal-50 dark:bg-teal-900/30 mb-4" />
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {faq.answer}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-sm font-medium text-foreground/70">Topics:</span>
                      {faq.topics?.map(topic => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-teal-100 dark:hover:bg-teal-900 hover:text-teal-700 dark:hover:text-teal-300 cursor-pointer transition-colors"
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
                      const related = getRelatedResources(faq.topics || []);
                      if (related.categories.length > 0) {
                        return (
                          <div className="mt-4 p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/50">
                            <div className="flex items-center gap-2 mb-3">
                              <BookOpen className="h-4 w-4 text-teal-600" />
                              <span className="text-sm font-bold text-teal-800 dark:text-teal-300">Related Resources</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {related.categories.slice(0, 4).map(category => (
                                <Badge key={category} variant="secondary" className="text-[10px] bg-white dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 border-teal-100 dark:border-teal-800">
                                  {category}
                                </Badge>
                              ))}
                              {related.categories.length > 4 && (
                                <Badge variant="secondary" className="text-[10px]">
                                  +{related.categories.length - 4} more
                                </Badge>
                              )}
                            </div>
                            <Button asChild size="sm" variant="outline" className="h-8 bg-white hover:bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800 dark:hover:bg-teal-900">
                              <Link to={`/kidsafehq/resources?topic=${encodeURIComponent((faq.topics || []).join(","))}`}>
                                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
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
              );
              })}
            </Accordion>
          ) : (
            <div className="space-y-6">
              <Card className="text-center py-12 border-dashed border-2">
                <CardContent>
                  <HelpCircle className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">No questions found</h3>
                  <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                    We couldn't find a matching FAQ for your search. Try different keywords or clear your filters.
                  </p>
                  <Button variant="outline" onClick={clearFilters} className="border-teal-200 text-teal-700 hover:bg-teal-50">
                    Clear all filters
                  </Button>
                </CardContent>
              </Card>

              {/* Smart Resource Recommendations */}
              {recommendedResources.length > 0 && (
                <Card className="border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50 to-teal-100/30 dark:from-teal-950/30 dark:to-teal-900/20 overflow-hidden">
                  <div className="h-1.5 bg-teal-500 w-full" />
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
                            className={`p-4 rounded-xl bg-background border transition-all duration-200 ${
                              isBestMatch 
                                ? "border-teal-400 dark:border-teal-600 ring-2 ring-teal-200 dark:ring-teal-800 shadow-md" 
                                : "hover:border-teal-300 dark:hover:border-teal-700 shadow-sm"
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
                                      className="font-bold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1.5"
                                    >
                                      {resource.title}
                                      <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                                    </a>
                                  ) : (
                                    <span className="font-bold">{resource.title}</span>
                                  )}
                                  {isBestMatch && (
                                    <Badge className="bg-teal-600 text-white text-[10px] uppercase font-bold tracking-wider">
                                      Best Match
                                    </Badge>
                                  )}
                                  {isHighlyRelevant && (
                                    <Badge variant="outline" className="border-teal-400 text-teal-700 dark:text-teal-400 text-[10px] uppercase font-bold tracking-wider">
                                      Highly Relevant
                                    </Badge>
                                  )}
                                </div>
                                {resource.description && (
                                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                    {resource.description}
                                  </p>
                                )}
                              </div>
                              <div className="flex flex-col gap-1.5 items-end flex-shrink-0">
                                <Badge variant="secondary" className="text-[10px] whitespace-nowrap bg-slate-100">
                                  {resource.category}
                                </Badge>
                                <Badge 
                                  variant="outline" 
                                  className={`text-[10px] whitespace-nowrap font-bold uppercase ${
                                    resource.ageGroup === "elementary" ? "border-blue-200 text-blue-700 bg-blue-50/50" :
                                    resource.ageGroup === "middle" ? "border-green-200 text-green-700 bg-green-50/50" :
                                    "border-purple-200 text-purple-700 bg-purple-50/50"
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
                    <div className="mt-6 pt-4 border-t border-teal-100 dark:border-teal-900/50">
                      <Button asChild variant="outline" className="w-full h-11 border-teal-200 text-teal-700 hover:bg-teal-50">
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
          <Card className="mt-12 bg-gradient-to-r from-teal-500/10 via-teal-600/5 to-teal-500/10 border-teal-200 dark:border-teal-800 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-full w-32 bg-teal-600/5 -skew-x-12 translate-x-16" />
            <CardHeader className="relative">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Looking for More Resources?</CardTitle>
                  <CardDescription className="text-base">
                    {filteredFAQs.length === 0
                      ? "We couldn't find a matching FAQ, but our resource library may have what you need."
                      : "Explore our comprehensive resource library for additional guides and materials."}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 shadow-md">
                  <Link to="/kidsafehq/resources">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Browse Resources
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 bg-white">
                  <Link to="/crisis-support">Contact Support Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KidSafeFAQ;
