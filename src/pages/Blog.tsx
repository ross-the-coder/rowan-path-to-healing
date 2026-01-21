import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Search, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPosts } from "@/hooks/useSanityData";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { urlFor } from "@/lib/sanity";

const Blog = () => {
  const { data: allPosts, isLoading, error } = useBlogPosts();

  // Debug logging
  console.log('Blog Component - Loading:', isLoading, 'Error:', error, 'Posts:', allPosts);

  // Filter featured and regular posts
  const featuredPost = allPosts?.find((post: any) => post.featured);
  const displayPosts = allPosts?.filter((post: any) => !post.featured) || [];

  // Use real Sanity data only (no fallback)
  const displayFeaturedPost = featuredPost;

  const categories = ["All", "Prevention", "Crisis Response", "Trauma Recovery", "Support"];

  // Loading state
  if (isLoading) {
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
          <div className="space-y-6">
            <Skeleton className="h-64 w-full" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-48" />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Error state (show fallback content)
  if (error) {
    console.warn('Failed to load blog posts from Sanity, using fallback data:', error);
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md flex items-center gap-2 text-yellow-800">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Currently showing sample content. Add blog posts in Sanity Studio to see them here.</span>
          </div>
        )}
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
        {displayFeaturedPost && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Post</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-primary/20">
              <div className="md:flex">
                <div className="md:w-1/3">
                  {displayFeaturedPost.featuredImage ? (
                    <img
                      src={urlFor(displayFeaturedPost.featuredImage).width(600).height(400).url()}
                      alt={displayFeaturedPost.title}
                      className="w-full h-48 md:h-full object-cover"
                      onError={(e) => {
                        console.error('Failed to load featured image:', displayFeaturedPost.featuredImage);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="h-48 md:h-full bg-muted flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                          <User className="h-8 w-8" />
                        </div>
                        Featured Image
                      </div>
                    </div>
                  )}
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/10 text-primary">Featured</Badge>
                      <Badge variant="outline">{displayFeaturedPost.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{displayFeaturedPost.title}</CardTitle>
                    <CardDescription className="text-base">{displayFeaturedPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      {displayFeaturedPost.author && (
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {displayFeaturedPost.author.name || displayFeaturedPost.author}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {displayFeaturedPost.publishedDate ? format(new Date(displayFeaturedPost.publishedDate), 'MMMM d, yyyy') : displayFeaturedPost.date}
                      </div>
                    </div>
                    <Button asChild>
                      <Link to={`/blog/${displayFeaturedPost.slug?.current || displayFeaturedPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Posts</h2>
          {displayPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Add content in Sanity Studio to get started!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPosts.map((post: any, index: number) => (
                <Card key={post._id || index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  {post.featuredImage && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={urlFor(post.featuredImage).width(600).height(400).url()}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          console.error('Failed to load post image:', post.featuredImage);
                          e.currentTarget.parentElement!.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      {post.author && (
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author.name || post.author}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.publishedDate ? format(new Date(post.publishedDate), 'MMM d, yyyy') : post.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button size="sm" variant="ghost" asChild>
                        <Link to={`/blog/${post.slug?.current || post.slug}`}>
                          Read More
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.map((tag: string, tagIndex: number) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Blog;