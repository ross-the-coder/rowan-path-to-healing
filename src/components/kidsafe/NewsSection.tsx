import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Newspaper } from "lucide-react";
import { NewsArticle, parseDate } from "@/data/newsData";
import { format } from "date-fns";

interface NewsSectionProps {
  articles: NewsArticle[];
  showAll?: boolean;
}

const NewsSection = ({ articles, showAll = false }: NewsSectionProps) => {
  const displayArticles = showAll ? articles : articles.slice(0, 6);

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Newspaper className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">In the News</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3" />
                  <span>{format(parseDate(article.date), "MMMM d, yyyy")}</span>
                  <span className="mx-1">•</span>
                  <span className="font-medium text-primary">{article.source}</span>
                </div>
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
      </div>
    </div>
  );
};

export default NewsSection;
