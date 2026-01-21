import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPost } from "@/hooks/useSanityData";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || "");

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-6 w-3/4 mb-8" />
          <Skeleton className="h-64 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline">{post.category}</Badge>
            {post.tags && post.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author.name || post.author}</span>
              </div>
            )}
            {post.publishedDate && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedDate}>
                  {format(new Date(post.publishedDate), 'MMMM d, yyyy')}
                </time>
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={urlFor(post.featuredImage).width(1200).height(600).url()}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          {post.body && (
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                  h2: ({children}) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
                  h3: ({children}) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
                  h4: ({children}) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({children}) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                  number: ({children}) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                },
                marks: {
                  strong: ({children}) => <strong className="font-bold">{children}</strong>,
                  em: ({children}) => <em className="italic">{children}</em>,
                  link: ({value, children}) => (
                    <a
                      href={value?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          )}
        </div>

        {/* Author Bio */}
        {post.author && post.author.bio && (
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-start gap-4">
              {post.author.photo && (
                <img
                  src={post.author.photo}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h3 className="font-bold text-lg mb-2">About {post.author.name}</h3>
                <p className="text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default BlogPost;
