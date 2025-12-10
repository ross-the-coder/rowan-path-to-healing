import { useMemo } from "react";
import { ExternalLink, MapPin, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { getConnecticutArticles, parseDate } from "@/data/newsData";
import { format } from "date-fns";

const NewsTickerHome = () => {
  // Get 3 most recent Connecticut articles
  const recentArticles = useMemo(() => {
    return getConnecticutArticles().slice(0, 3);
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      return format(parseDate(dateStr), "MMM d, yyyy");
    } catch {
      return dateStr;
    }
  };

  // Duplicate for seamless loop
  const duplicatedArticles = [...recentArticles, ...recentArticles];

  return (
    <section className="bg-primary/5 border-y border-primary/10 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          {/* Label */}
          <div className="bg-primary text-primary-foreground px-3 py-1.5 text-sm font-semibold shrink-0 flex items-center gap-1.5 rounded">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">CT News</span>
          </div>

          {/* Scrolling ticker */}
          <div className="overflow-hidden flex-grow relative">
            <div className="flex animate-scroll-slow">
              {duplicatedArticles.map((article, index) => (
                <a
                  key={`${article.id}-${index}`}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 whitespace-nowrap hover:text-primary transition-colors group"
                >
                  <span className="text-xs font-medium text-muted-foreground">
                    {formatDate(article.date)}
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary">
                    {article.title.length > 60 ? article.title.substring(0, 60) + "..." : article.title}
                  </span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                  <span className="text-muted-foreground/30 mx-4">|</span>
                </a>
              ))}
            </div>
          </div>

          {/* View all link */}
          <Link
            to="/news"
            className="shrink-0 text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
          >
            <Newspaper className="h-4 w-4" />
            <span className="hidden sm:inline">View All</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsTickerHome;
