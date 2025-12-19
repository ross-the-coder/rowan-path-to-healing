import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, ExternalLink, GraduationCap, School, Building, Search, BookText, X, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { glossaryTerms } from "@/data/glossaryData";
import { kidSafeResourcesData, searchResources } from "@/data/kidSafeResourcesData";
import { searchKeywords, getAllTopics } from "@/data/resourceKeywordsData";

const iconMap = {
  elementary: School,
  middle: GraduationCap,
  high: Building,
};

const KidSafeResources = () => {
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [resourceSearch, setResourceSearch] = useState("");
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<Set<string>>(new Set());
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const allTopics = useMemo(() => getAllTopics(), []);

  const filteredTerms = glossaryTerms
    .filter(
      (item) =>
        item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
    )
    .sort((a, b) => a.term.localeCompare(b.term));

  // Search results
  const searchResults = useMemo(() => {
    if (!resourceSearch.trim()) {
      return null;
    }
    const { results, matchedAgeGroups } = searchResources(resourceSearch);
    return { results, matchedAgeGroups };
  }, [resourceSearch]);

  // Filter resources based on selected age groups and topics
  const filteredResources = useMemo(() => {
    // If searching, return search results grouped by age group
    if (searchResults && searchResults.results.length > 0) {
      const grouped: Record<string, { category: string; resources: typeof searchResults.results }[]> = {};
      
      for (const result of searchResults.results) {
        // Apply age group filter
        const ageKey = kidSafeResourcesData.find(ag => ag.title === result.ageGroup)?.key || "";
        if (selectedAgeGroups.size > 0 && !selectedAgeGroups.has(ageKey)) {
          continue;
        }
        
        if (!grouped[result.ageGroup]) {
          grouped[result.ageGroup] = [];
        }
        
        // Find or create category
        let categoryGroup = grouped[result.ageGroup].find(c => c.category === result.category);
        if (!categoryGroup) {
          categoryGroup = { category: result.category, resources: [] };
          grouped[result.ageGroup].push(categoryGroup);
        }
        categoryGroup.resources.push(result);
      }
      
      return grouped;
    }
    
    // No search, return all resources with age group filter
    const result: Record<string, typeof kidSafeResourcesData[0]> = {};
    
    for (const ageGroup of kidSafeResourcesData) {
      if (selectedAgeGroups.size > 0 && !selectedAgeGroups.has(ageGroup.key)) {
        continue;
      }
      result[ageGroup.title] = ageGroup;
    }
    
    return result;
  }, [searchResults, selectedAgeGroups]);

  const toggleAgeGroup = (key: string) => {
    const newSet = new Set(selectedAgeGroups);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setSelectedAgeGroups(newSet);
  };

  const toggleTopic = (topic: string) => {
    const newSet = new Set(selectedTopics);
    if (newSet.has(topic)) {
      newSet.delete(topic);
    } else {
      newSet.add(topic);
    }
    setSelectedTopics(newSet);
    
    // When a topic is selected, also update the search to include related keywords
    if (newSet.size > 0) {
      setResourceSearch(Array.from(newSet).join(" "));
    } else {
      setResourceSearch("");
    }
  };

  const clearFilters = () => {
    setSelectedAgeGroups(new Set());
    setSelectedTopics(new Set());
    setResourceSearch("");
  };

  const hasActiveFilters = selectedAgeGroups.size > 0 || selectedTopics.size > 0 || resourceSearch.trim().length > 0;

  // Suggested topics based on current search
  const suggestedTopics = useMemo(() => {
    if (!resourceSearch.trim()) return [];
    const { topics } = searchKeywords(resourceSearch);
    return topics.slice(0, 5);
  }, [resourceSearch]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-orange-500/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/kidsafehq">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Age Groups
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-12 w-12 text-orange-600" />
              <h1 className="text-4xl font-bold">KidSafe Resources</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              A comprehensive collection of external resources, guides, and articles for parents, educators, and caregivers across all age groups.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Search Section */}
        <Card className="mb-8 overflow-hidden border-primary/20">
          <CardHeader className="bg-gradient-to-r from-orange-500/10 to-orange-600/5">
            <CardTitle className="text-xl flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Resources
            </CardTitle>
            <CardDescription>
              Search by topic, keyword, or phrase to find relevant resources
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for consent, internet safety, sextortion, boundaries..."
                  value={resourceSearch}
                  onChange={(e) => setResourceSearch(e.target.value)}
                  className="pl-10 pr-10"
                />
                {resourceSearch && (
                  <button
                    onClick={() => setResourceSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              {/* Suggested Topics */}
              {suggestedTopics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Related topics:</span>
                  {suggestedTopics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setResourceSearch(topic.toLowerCase())}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Filter Toggle */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="gap-2"
                >
                  <Filter className="h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
                
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear all filters
                  </Button>
                )}
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="space-y-4 pt-4 border-t">
                  {/* Age Group Filters */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Filter by Age Group</h4>
                    <div className="flex flex-wrap gap-2">
                      {kidSafeResourcesData.map((ageGroup) => (
                        <Badge
                          key={ageGroup.key}
                          variant={selectedAgeGroups.has(ageGroup.key) ? "default" : "outline"}
                          className="cursor-pointer transition-colors"
                          onClick={() => toggleAgeGroup(ageGroup.key)}
                        >
                          {ageGroup.title}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Topic Filters */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Filter by Topic</h4>
                    <div className="flex flex-wrap gap-2">
                      {allTopics.map((topic) => (
                        <Badge
                          key={topic}
                          variant={selectedTopics.has(topic) ? "default" : "outline"}
                          className="cursor-pointer transition-colors text-xs"
                          onClick={() => toggleTopic(topic)}
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Search Results Summary */}
        {searchResults && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              Found <span className="font-semibold text-foreground">{searchResults.results.length}</span> resources 
              {resourceSearch && <> matching "<span className="font-semibold text-foreground">{resourceSearch}</span>"</>}
            </p>
          </div>
        )}

        {/* Glossary Section */}
        <Card className="mb-8 overflow-hidden border-primary/20">
          <Collapsible open={isGlossaryOpen} onOpenChange={setIsGlossaryOpen}>
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/15 hover:to-secondary/15 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookText className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">Glossary of Terms</CardTitle>
                      <CardDescription>
                        {glossaryTerms.length} important terms and definitions
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {isGlossaryOpen ? "Click to collapse" : "Click to expand"}
                  </div>
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Search for a term or scroll through the list below to find definitions for key concepts used throughout KidSafeHQ.
                </p>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for a term..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="max-h-96 overflow-y-auto space-y-3 pr-2">
                  {filteredTerms.length > 0 ? (
                    filteredTerms.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
                      >
                        <h4 className="font-semibold text-primary">{item.term}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.definition}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground py-4">
                      No terms found matching "{glossarySearch}"
                    </p>
                  )}
                </div>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        <h2 className="text-2xl font-bold mb-6">Resources by Age Group</h2>
        
        {/* Display filtered/searched resources */}
        {searchResults && searchResults.results.length > 0 ? (
          // Search results view
          <div className="space-y-8">
            {Object.entries(filteredResources).map(([ageGroupTitle, categories]) => {
              const ageGroupData = kidSafeResourcesData.find(ag => ag.title === ageGroupTitle);
              if (!ageGroupData) return null;
              const IconComponent = iconMap[ageGroupData.key];
              
              return (
                <Card key={ageGroupTitle} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl">{ageGroupTitle}</CardTitle>
                        <CardDescription>
                          {(categories as { category: string; resources: unknown[] }[]).reduce((acc, c) => acc + c.resources.length, 0)} matching resources
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Accordion type="multiple" className="w-full" defaultValue={(categories as { category: string }[]).map((c, i) => `${ageGroupData.key}-resource-${i}`)}>
                      {(categories as { category: string; resources: { resource: { title: string; keywords: string[] } }[] }[]).map((categoryGroup, idx) => (
                        <AccordionItem key={idx} value={`${ageGroupData.key}-resource-${idx}`}>
                          <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                            <span className="flex items-center gap-2">
                              📚 {categoryGroup.category}
                              <span className="text-xs text-muted-foreground font-normal">
                                ({categoryGroup.resources.length} resources)
                              </span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="space-y-2 pt-2">
                            {categoryGroup.resources.map((item, linkIdx) => (
                              <div 
                                key={linkIdx}
                                className="flex items-start gap-2 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors border border-orange-200 dark:border-orange-800"
                              >
                                <ExternalLink className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <span className="text-sm font-medium">{item.resource.title}</span>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {item.resource.keywords.slice(0, 3).map((kw, kwIdx) => (
                                      <Badge key={kwIdx} variant="outline" className="text-xs">
                                        {kw}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : searchResults && searchResults.results.length === 0 ? (
          // No search results
          <Card className="p-8 text-center">
            <div className="text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No resources found</h3>
              <p>Try searching for different keywords or browse all resources below.</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Show all resources
              </Button>
            </div>
          </Card>
        ) : (
          // Default view - all resources
          <div className="space-y-8">
            {Object.entries(filteredResources).map(([key, ageGroup]) => {
              const section = ageGroup as typeof kidSafeResourcesData[0];
              const IconComponent = iconMap[section.key];
              return (
                <Card key={key} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <CardDescription>Resources for {section.title.toLowerCase()} students and their families</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Accordion type="multiple" className="w-full">
                      {section.resources.map((resourceGroup, idx) => (
                        <AccordionItem key={idx} value={`${section.key}-resource-${idx}`}>
                          <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                            <span className="flex items-center gap-2">
                              📚 {resourceGroup.category}
                              <span className="text-xs text-muted-foreground font-normal">
                                ({resourceGroup.links.length} resources)
                              </span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="space-y-2 pt-2">
                            {resourceGroup.links.map((link, linkIdx) => (
                              <div 
                                key={linkIdx}
                                className="flex items-start gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                              >
                                <ExternalLink className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                  <span className="text-sm">{link.title}</span>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {link.keywords.slice(0, 3).map((kw, kwIdx) => (
                                      <Badge key={kwIdx} variant="outline" className="text-xs opacity-60">
                                        {kw}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* No results from filtering */}
        {!searchResults && Object.keys(filteredResources).length === 0 && (
          <Card className="p-8 text-center">
            <div className="text-muted-foreground">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No resources match your filters</h3>
              <p>Try adjusting your filters to see more resources.</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          </Card>
        )}

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
          <CardContent className="pt-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Need More Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you can't find what you're looking for, our team is here to help.
            </p>
            <Button asChild variant="default" className="bg-orange-600 hover:bg-orange-700">
              <Link to="/crisis-services">Contact Support Services</Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default KidSafeResources;
