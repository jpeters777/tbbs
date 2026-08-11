import type { MetadataRoute } from "next";
import { getAllPageSlugs } from "@/lib/content";
import { getPublicPathForSlug } from "@/lib/public-paths";

const BASE = "https://tampabaybodysculpting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...getAllPageSlugs().map((slug) => getPublicPathForSlug(slug))];

  return paths.map((path) => ({
    url: path === "/" ? `${BASE}/` : `${BASE}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
