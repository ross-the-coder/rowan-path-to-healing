import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const featuredPost = {
    title: "Understanding Trauma-Informed Care: What It Means for Survivors",
    excerpt: "Exploring the principles of trauma-informed care and how this approach creates safer, more supportive environments for healing and recovery.",
    author: "Dr. Michael Chen",
    date: "March 18, 2024",
    readTime: "7 min read",
    category: "Trauma Recovery",
    image: "/placeholder.svg"
  };

  const blogPosts = [
    {
      title: "Building Resilience: Teaching Children About Body Safety",
      excerpt: "Practical strategies for parents and educators to have age-appropriate conversations about personal safety and boundaries.",
      author: "Maria Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Prevention",
      tags: ["Children", "Education", "Prevention"]
    },
    {
      title: "The Importance of Secondary Trauma Support for First Responders",
      excerpt: "How emergency responders, healthcare workers, and advocates can recognize and address secondary trauma in their work.",
      author: "James Thompson",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Crisis Response",
      tags: ["First Responders", "Secondary Trauma", "Support"]
    },
    {
      title: "Creating Safe Spaces: LGBTQ+ Inclusive Trauma Services",
      excerpt: "Best practices for providing culturally competent and inclusive trauma services to LGBTQ+ survivors.",
      author: "Dr. Sarah Williams",
      date: "February 15, 2024",
      readTime: "8 min read",
      category: "Trauma Recovery",
      tags: ["LGBTQ+", "Inclusion", "Cultural Competency"]
    },
    {
      title: "Supporting a Friend in Crisis: What to Say and Do",
      excerpt: "Guidance for friends and family members on how to provide meaningful support to someone experiencing trauma or crisis.",
      author: "Lisa Chen",
      date: "February 2, 2024",
      readTime: "4 min read",
      category: "Support",
      tags: ["Friends", "Family", "Support", "Crisis"]
    },
    {
      title: "The Role of Art Therapy in Trauma Recovery",
      excerpt: "Exploring how creative expression can be a powerful tool in the healing process for trauma survivors.",
      author: "Dr. Michael Chen",
      date: "January 20, 2024",
      readTime: "6 min read",
      category: "Trauma Recovery",
      tags: ["Art Therapy", "Creative Healing", "Recovery"]
    },
    {
      title: "Workplace Trauma: Recognizing and Responding to Signs",
      excerpt: "How employers and colleagues can create supportive environments and recognize when someone may need help.",
      author: "Jennifer Martinez",
      date: "January 8, 2024",
      readTime: "5 min read",
      category: "Prevention",
      tags: ["Workplace", "Recognition", "Support"]
    }
  ];

  const categories = ["All", "Prevention", "Crisis Response", "Trauma Recovery", "Support"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Rowan Center Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, resources, and expert perspectives on trauma prevention, crisis response, 
            and healing from our team of professionals and community partners.
          </p>
        </div>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search blog posts..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Post</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow border-primary/20">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-48 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8" />
                    </div>
                    Featured Image
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-primary/10 text-primary">Featured</Badge>
                    <Badge variant="outline">{featuredPost.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button>
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button size="sm" variant="ghost">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section>
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Stay Updated</CardTitle>
              <CardDescription className="text-lg">
                Subscribe to our newsletter for the latest blog posts, resources, and updates from The Rowan Center
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email address" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;