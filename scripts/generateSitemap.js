const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const BASE_URL = "https://wealthfortune.site"; // Change to your domain

// Define your site's important pages
const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  pages.forEach((page) => {
    sitemap.write(page);
  });

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap).then((data) => data.toString());

  // Save the sitemap to the public directory
  fs.writeFileSync("./public/sitemap.xml", sitemapXML, "utf8");

  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
