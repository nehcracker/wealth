const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

// Define your base URL
const BASE_URL = "https://wealthfortune.site"; // Change this to your actual domain

// Define your site pages
const pages = [
  "/",
  "/about",
  "/contact",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  pages.forEach((page) => {
    sitemap.write({ url: page, changefreq: "daily", priority: 0.8 });
  });

  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", sitemapData.toString());
  console.log("✅ Sitemap successfully generated!");
}

generateSitemap().catch(console.error);
