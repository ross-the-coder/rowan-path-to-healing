import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

export const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  twitterHandle = "@lovable_dev",
}: SEOProps) => {
  const siteTitle = "The Rowan Center";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "The Rowan Center prevents sexual violence and trauma, provides 24/7 crisis support, and offers trauma-informed mental health care in South Fairfield County, CT.";
  const metaDescription = description || defaultDescription;
  const url = window.location.origin + window.location.pathname;
  const canonicalUrl = canonical || url;
  const defaultOgImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/PUECeMNXGPM0EU8ZdKZuh2IgqUN2/social-images/social-1758906601238-Screenshot 2025-09-26 at 1.09.50 PM.png";
  const image = ogImage || defaultOgImage;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
    </Helmet>
  );
};
