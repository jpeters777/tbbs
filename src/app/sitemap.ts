import type { MetadataRoute } from "next";
import { getAllPageSlugs } from "@/lib/content";
import { getPublicPathForSlug } from "@/lib/public-paths";

import { SITE_URL } from "@/lib/site";
import { getPhotoCategoryPaths } from "@/content/photo-categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Array.from(
    new Set([
      "/",
      "/consult",
      "/contact",
      ...getAllPageSlugs().map((slug) => getPublicPathForSlug(slug)),
      ...getPhotoCategoryPaths(),
    ]),
  );

  return paths.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    changeFrequency: path === "/" ? "weekly" : path === "/contact" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/contact"
          ? 0.9
          : path === "/consult"
            ? 0.6
            : 0.8,
  }));
}
