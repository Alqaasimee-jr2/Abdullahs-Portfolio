import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/portfolio";

const BASE_URL = "https://abdullah-qaasim-falade.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/writing`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.9 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${BASE_URL}/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: project.featured ? 0.9 : 0.75,
  }));

  return [...staticRoutes, ...projectRoutes];
}
