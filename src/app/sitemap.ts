import type { MetadataRoute } from "next";
import { getAllPageSlugs } from "@/lib/content";
import { getPublicPathForSlug } from "@/lib/public-paths";

const BASE = "https://tampabaybodysculpting.com";

const UNPUBLISHED_GALLERY_SLUGS = new Set([
  "female-b-a-gallery",
  "breast-surgery-gallery",
  "male-surgery-gallery",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/consult",
    "/contact",
    ...getAllPageSlugs()
      .filter((slug) => !UNPUBLISHED_GALLERY_SLUGS.has(slug))
      .map((slug) => getPublicPathForSlug(slug)),
  ];

  return paths.map((path) => ({
    url: path === "/" ? `${BASE}/` : `${BASE}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/consult" || path === "/contact" ? 0.9 : 0.8,
  }));
}
