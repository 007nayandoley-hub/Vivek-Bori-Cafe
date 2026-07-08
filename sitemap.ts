import type { MetadataRoute } from "next";

const SITE_URL = "https://vivekboricafe.example.com"; // TODO: update once domain is live

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/menu", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
