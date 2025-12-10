import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Calendar, Newspaper, Search, X, MapPin, ChevronDown, Check, LayoutGrid, List, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllArticles, parseDate } from "@/data/newsData";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import kidSafeHQLogo from "@/assets/kidsafe-hq-logo.png";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ITEMS_PER_PAGE_GRID = 9;

const KidSafeNews = () => {
  const allArticles = getAllArticles();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [showCtOnly, setShowCtOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique topics and sources
  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    allArticles.forEach(article => {
      article.topics.forEach(topic => topics.add(topic));
    });
    return Array.from(topics).sort();
  }, [allArticles]);

  const allSources = useMemo(() => {
    const sources = new Set<string>();
    allArticles.forEach(article => sources.add(article.source));
    return Array.from(sources).sort();
  }, [allArticles]);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return allArticles.filter(article => {
      const matchesSearch = searchQuery === "" || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTopics = selectedTopics.length === 0 ||
        article.topics.some(t => selectedTopics.includes(t));

      const matchesSources = selectedSources.length === 0 ||
        selectedSources.includes(article.source);

      const matchesCt = !showCtOnly || article.isConnecticut;

      return matchesSearch && matchesTopics && matchesSources && matchesCt;
    });
  }, [allArticles, searchQuery, selectedTopics, selectedSources, showCtOnly]);

  // Pagination for grid view
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE_GRID);
  const paginatedArticles = viewMode === "grid" 
    ? filteredArticles.slice((currentPage - 1) * ITEMS_PER_PAGE_GRID, currentPage * ITEMS_PER_PAGE_GRID)
    : filteredArticles;

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTopics, selectedSources, showCtOnly]);

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const toggleSource = (source: string) => {
    setSelectedSources(prev => 
      prev.includes(source) 
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTopics([]);
    setSelectedSources([]);
    setShowCtOnly(false);
  };

  const hasActiveFilters = searchQuery || selectedTopics.length > 0 || selectedSources.length > 0 || showCtOnly;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-primary/5 border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/kidsafehq">
                <img src={kidSafeHQLogo} alt="KidSafeHQ" className="h-16 w-auto" />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Newspaper className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">In the News</h1>
            </div>
            <p className="text-muted-foreground mt-2">
              Stay informed about child safety issues, legislation, and awareness efforts
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar and Source Dropdown Row */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Source Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    Sources
                    {selectedSources.length > 0 && (
                      <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                        {selectedSources.length}
                      </Badge>
                    )}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 max-h-80 overflow-y-auto bg-background z-50" align="start">
                  <DropdownMenuLabel>Filter by Source</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {allSources.map(source => (
                    <DropdownMenuCheckboxItem
                      key={source}
                      checked={selectedSources.includes(source)}
                      onCheckedChange={() => toggleSource(source)}
                    >
                      {source}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* View Toggle */}
              <div className="flex items-center border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none gap-1.5"
                >
                  <LayoutGrid className="h-4 w-4" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none gap-1.5"
                >
                  <List className="h-4 w-4" />
                  List
                </Button>
              </div>
            </div>

            {/* CT Filter Toggle and Clear */}
            <div className="flex items-center gap-4">
              <Button
                variant={showCtOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowCtOnly(!showCtOnly)}
                className="gap-2"
              >
                <MapPin className="h-4 w-4" />
                Connecticut Only
              </Button>
              
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
                  <X className="h-4 w-4" />
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Topic Filters */}
            <div>
              <h3 className="text-sm font-medium mb-2">Filter by Topic</h3>
              <div className="flex flex-wrap gap-2">
                {allTopics.map(topic => (
                  <Badge
                    key={topic}
                    variant="secondary"
                    className={`cursor-pointer transition-all ${
                      selectedTopics.includes(topic) 
                        ? "ring-2 ring-primary ring-offset-2" 
                        : "hover:opacity-80"
                    }`}
                    onClick={() => toggleTopic(topic)}
                  >
                    {selectedTopics.includes(topic) && <Check className="h-3 w-3 mr-1" />}
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Selected Sources Display */}
            {selectedSources.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Selected sources:</span>
                {selectedSources.map(source => (
                  <Badge
                    key={source}
                    variant="secondary"
                    className="cursor-pointer gap-1"
                    onClick={() => toggleSource(source)}
                  >
                    {source}
                    <X className="h-3 w-3" />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {viewMode === "grid" ? `${paginatedArticles.length} of ` : ""}{filteredArticles.length} articles
              {viewMode === "grid" && totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
            </p>
          </div>

          {/* Grid View */}
          {viewMode === "grid" && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        <span>{format(parseDate(article.date), "MMMM d, yyyy")}</span>
                        {article.isConnecticut && (
                          <>
                            <span className="mx-1">•</span>
                            <span className="flex items-center gap-1 text-primary font-medium">
                              <MapPin className="h-3 w-3" />
                              CT
                            </span>
                          </>
                        )}
                      </div>
                      <div className="text-xs font-medium text-primary mb-2">{article.source}</div>
                      <a 
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-lg leading-tight hover:text-primary transition-colors line-clamp-3"
                      >
                        {article.title}
                      </a>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end pt-0">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {article.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a 
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Read Article
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="border rounded-lg divide-y">
              {paginatedArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span>{format(parseDate(article.date), "MMM d, yyyy")}</span>
                      <span>•</span>
                      <span className="font-medium text-primary">{article.source}</span>
                      {article.isConnecticut && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-0.5 text-primary">
                            <MapPin className="h-3 w-3" />
                            CT
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="font-medium text-sm leading-snug group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {article.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary" />
                </a>
              ))}
            </div>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your filters.</p>
              <Button variant="link" onClick={clearFilters}>Clear filters</Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KidSafeNews;
