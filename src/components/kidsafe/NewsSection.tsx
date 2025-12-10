import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Newspaper, ArrowRight, MapPin } from "lucide-react";
import { NewsArticle, parseDate } from "@/data/newsData";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface NewsSectionProps {
  articles: NewsArticle[];
  compact?: boolean;
}

const NewsSection = ({ articles, compact = false }: NewsSectionProps) => {
  const displayArticles = compact ? articles.slice(0, 4) : articles;

  if (compact) {
    return (
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Newspaper className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">In the News</h2>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link to="/kidsafehq/news">
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="divide-y">
                {displayArticles.map((article) => (
                  <a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-4 first:pt-0 last:pb-0 hover:bg-muted/50 -mx-2 px-2 rounded transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
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
                        <h3 className="font-medium text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary" />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayArticles.map((article) => (
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
  );
};

export default NewsSection;
