import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Video, BookOpen, Download, ExternalLink } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "article" | "video" | "guide";
  category: string;
  tags: string[];
  url: string;
  downloadUrl?: string;
  author?: string;
  publishDate?: string;
  readTime?: string;
}

const mockResources: Resource[] = [
  {
    id: "1",
    title: "Understanding Trauma-Informed Care",
    description: "A comprehensive guide for professionals working with trauma survivors.",
    type: "pdf",
    category: "Professional Resources",
    tags: ["trauma", "care", "professional"],
    url: "/resources/trauma-informed-care.pdf",
    downloadUrl: "/resources/trauma-informed-care.pdf",
    author: "The Rowan Center",
    publishDate: "2024",
    readTime: "15 min"
  },
  {
    id: "2",
    title: "Supporting a Friend in Crisis",
    description: "Learn how to provide support when someone you care about experiences trauma.",
    type: "article",
    category: "Support Resources",
    tags: ["friends", "support", "crisis"],
    url: "/resources/supporting-friend",
    author: "Dr. Sarah Johnson",
    publishDate: "2024",
    readTime: "8 min"
  },
  {
    id: "3",
    title: "Healing Through Art Therapy",
    description: "Explore creative approaches to trauma recovery and emotional healing.",
    type: "video",
    category: "Recovery Resources",
    tags: ["art", "therapy", "healing"],
    url: "/resources/art-therapy-video",
    author: "Art Therapy Institute",
    publishDate: "2024",
    readTime: "22 min"
  },
  {
    id: "4",
    title: "Safety Planning Workbook",
    description: "A step-by-step guide to creating your personal safety plan.",
    type: "guide",
    category: "Safety Resources",
    tags: ["safety", "planning", "prevention"],
    url: "/resources/safety-planning",
    downloadUrl: "/resources/safety-planning.pdf",
    author: "The Rowan Center",
    publishDate: "2024",
    readTime: "12 min"
  },
  {
    id: "5",
    title: "Understanding Consent",
    description: "Educational resource about consent, boundaries, and healthy relationships.",
    type: "pdf",
    category: "Education",
    tags: ["consent", "education", "relationships"],
    url: "/resources/understanding-consent.pdf",
    downloadUrl: "/resources/understanding-consent.pdf",
    author: "Prevention Team",
    publishDate: "2024",
    readTime: "10 min"
  },
  {
    id: "6",
    title: "Mindfulness for Trauma Recovery",
    description: "Guided meditation and mindfulness practices for healing.",
    type: "video",
    category: "Recovery Resources",
    tags: ["mindfulness", "meditation", "recovery"],
    url: "/resources/mindfulness-video",
    author: "Wellness Center",
    publishDate: "2024",
    readTime: "18 min"
  }
];

const categories = ["All", "Professional Resources", "Support Resources", "Recovery Resources", "Safety Resources", "Education"];

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredResources, setFilteredResources] = useState(mockResources);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterResources(query, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterResources(searchQuery, category);
  };

  const filterResources = (query: string, category: string) => {
    let filtered = mockResources;

    if (category !== "All") {
      filtered = filtered.filter(resource => resource.category === category);
    }

    if (query) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query.toLowerCase()) ||
        resource.description.toLowerCase().includes(query.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
    }

    setFilteredResources(filtered);
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5" />;
      case "video":
        return <Video className="h-5 w-5" />;
      case "article":
        return <BookOpen className="h-5 w-5" />;
      case "guide":
        return <FileText className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "bg-red-100 text-red-800";
      case "video":
        return "bg-blue-100 text-blue-800";
      case "article":
        return "bg-green-100 text-green-800";
      case "guide":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-seasons font-normal text-foreground mb-4">
            Resource Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-roboto font-light leading-relaxed">
            Access educational materials, guides, and resources to support prevention, crisis response, and healing.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className="font-roboto"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="h-full shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getResourceIcon(resource.type)}
                    <Badge className={getResourceColor(resource.type)}>
                      {resource.type.toUpperCase()}
                    </Badge>
                  </div>
                  {resource.readTime && (
                    <span className="text-sm text-muted-foreground">{resource.readTime}</span>
                  )}
                </div>
                <CardTitle className="font-seasons text-xl">{resource.title}</CardTitle>
                <CardDescription className="font-roboto">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {resource.author && (
                  <div className="text-sm text-muted-foreground">
                    By {resource.author} • {resource.publishDate}
                  </div>
                )}

                <div className="flex gap-2 pt-4">
                  <Button asChild className="flex-1" size="sm">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </a>
                  </Button>
                  {resource.downloadUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.downloadUrl} download>
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-roboto">
              No resources found matching your search criteria.
            </p>
          </div>
        )}

        {/* Contact for More Resources */}
        <div className="mt-16 text-center">
          <div className="bg-color-block-light rounded-2xl p-8">
            <h3 className="text-2xl font-seasons font-normal mb-4">Need More Resources?</h3>
            <p className="text-muted-foreground font-roboto mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team can help you access additional resources 
              and materials tailored to your specific needs.
            </p>
            <Button asChild size="lg">
              <a href="mailto:resources@rowancenterfsc.org">
                Contact Our Resource Team
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;