import type { MetadataRoute } from "next";
import { getAllPageSlugs } from "@/lib/content";
import { getPublicPathForSlug } from "@/lib/public-paths";

import { SITE_URL } from "@/lib/site";
import { getPhotoCategoryPaths } from "@/content/photo-categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/consult",
    "/contact",
    ...getAllPageSlugs().map((slug) => getPublicPathForSlug(slug)),
    ...getPhotoCategoryPaths(),
  ];

  return paths.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/consult" || path === "/contact" ? 0.9 : 0.8,
  }));
}
