import { NewsArticle } from "@/data/newsData";
import { ExternalLink, MapPin } from "lucide-react";

interface NewsTickerProps {
  articles: NewsArticle[];
}

const NewsTicker = ({ articles }: NewsTickerProps) => {
  // Duplicate articles for seamless loop
  const duplicatedArticles = [...articles, ...articles];

  return (
    <div className="bg-primary/10 border border-primary/20 rounded-lg overflow-hidden py-2.5">
      <div className="flex items-center">
        <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shrink-0 flex items-center gap-1 rounded-r">
          <MapPin className="h-3 w-3" />
          CT News
        </div>
        <div className="overflow-hidden flex-grow">
          <div className="flex animate-scroll">
            {duplicatedArticles.map((article, index) => (
              <a
                key={`${article.id}-${index}`}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 whitespace-nowrap hover:text-primary transition-colors group"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {article.source}
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary">
                  {article.title}
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                <span className="text-muted-foreground/50 mx-2">•</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
