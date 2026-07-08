import type { MetadataRoute } from "next";

const SITE_URL = "https://vivekboricafe.example.com"; // TODO: update once domain is live

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
