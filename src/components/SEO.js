import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url, type }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type || "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "image": image,
    "publisher": {
      "@type": "Organization",
      "name": "Wealth Riches Gurus",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wealthfortune.site/logo.png"
      }
    }
  };

  return (
    <Helmet>
      {/* Title and Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Wealth Riches Gurus" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
