import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Search, Calendar, Newspaper, LayoutGrid, List, MapPin } from "lucide-react";
import { newsArticles, NewsArticle, parseDate, getSortedArticles } from "@/data/newsData";
import { format } from "date-fns";

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get unique topics and sources
  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    newsArticles.forEach(article => article.topics.forEach(topic => topics.add(topic)));
    return Array.from(topics).sort();
  }, []);

  const allSources = useMemo(() => {
    const sources = new Set<string>();
    newsArticles.forEach(article => sources.add(article.source));
    return Array.from(sources).sort();
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    let filtered = getSortedArticles(newsArticles);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.source.toLowerCase().includes(query) ||
        article.topics.some(topic => topic.toLowerCase().includes(query))
      );
    }

    if (selectedTopic !== "all") {
      filtered = filtered.filter(article => article.topics.includes(selectedTopic));
    }

    if (selectedSource !== "all") {
      filtered = filtered.filter(article => article.source === selectedSource);
    }

    if (selectedLocation !== "all") {
      if (selectedLocation === "connecticut") {
        filtered = filtered.filter(article => article.isConnecticut);
      } else {
        filtered = filtered.filter(article => !article.isConnecticut);
      }
    }

    return filtered;
  }, [searchQuery, selectedTopic, selectedSource, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTopic("all");
    setSelectedSource("all");
    setSelectedLocation("all");
  };

  const formatDate = (dateStr: string) => {
    try {
      return format(parseDate(dateStr), "MMMM d, yyyy");
    } catch {
      return dateStr;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stay informed about child safety, prevention education, and community resources.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="connecticut">Connecticut</SelectItem>
                  <SelectItem value="national">National/International</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Topics</SelectItem>
                  {allTopics.map(topic => (
                    <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  {allSources.map(source => (
                    <SelectItem key={source} value={source}>{source}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              {(searchQuery || selectedTopic !== "all" || selectedSource !== "all" || selectedLocation !== "all") && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredArticles.length} of {newsArticles.length} articles
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
              <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} formatDate={formatDate} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <ArticleListItem key={article.id} article={article} formatDate={formatDate} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

interface ArticleProps {
  article: NewsArticle;
  formatDate: (date: string) => string;
}

const ArticleCard = ({ article, formatDate }: ArticleProps) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        {article.isConnecticut && (
          <Badge variant="default" className="text-xs">
            <MapPin className="h-3 w-3 mr-1" />
            CT
          </Badge>
        )}
        {article.topics.slice(0, 2).map((topic) => (
          <Badge key={topic} variant="secondary" className="text-xs">
            {topic}
          </Badge>
        ))}
      </div>

      <h3 className="font-semibold text-lg mb-2 line-clamp-3 flex-grow">
        {article.title}
      </h3>

      <div className="mt-auto pt-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(article.date)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">{article.source}</span>
          <Button variant="outline" size="sm" asChild>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ArticleListItem = ({ article, formatDate }: ArticleProps) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {article.isConnecticut && (
            <Badge variant="default" className="text-xs">
              <MapPin className="h-3 w-3 mr-1" />
              CT
            </Badge>
          )}
          {article.topics.map((topic) => (
            <Badge key={topic} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
        <h3 className="font-semibold">{article.title}</h3>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(article.date)}
          </span>
          <span>{article.source}</span>
        </div>
      </div>
      <Button variant="outline" size="sm" asChild className="shrink-0">
        <a href={article.link} target="_blank" rel="noopener noreferrer">
          Read Article <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </Button>
    </CardContent>
  </Card>
);

export default News;
