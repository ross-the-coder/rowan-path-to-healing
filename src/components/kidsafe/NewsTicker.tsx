import { NewsArticle } from "@/data/newsData";
import { ExternalLink } from "lucide-react";

interface NewsTickerProps {
  articles: NewsArticle[];
}

const NewsTicker = ({ articles }: NewsTickerProps) => {
  // Duplicate articles for seamless loop
  const duplicatedArticles = [...articles, ...articles];

  return (
    <div className="bg-primary/10 border-y border-primary/20 overflow-hidden py-3">
      <div className="flex animate-scroll">
        {duplicatedArticles.map((article, index) => (
          <a
            key={`${article.id}-${index}`}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 whitespace-nowrap hover:text-primary transition-colors group"
          >
            <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-0.5 rounded">
              {article.source}
            </span>
            <span className="text-sm font-medium text-foreground group-hover:text-primary">
              {article.title}
            </span>
            <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
            <span className="text-muted-foreground mx-4">•</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
