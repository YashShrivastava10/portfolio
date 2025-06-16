import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.yashshrivastava.in";

  const pages = [
    "/",
    "/about",
    "/skills",
    "/experience",
    "/projects",
    "/contact",
  ];

  const lastModified = new Date().toISOString();

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.9,
  }));
}
