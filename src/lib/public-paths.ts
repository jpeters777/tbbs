import { SITE_URL } from "@/lib/site";

const SLUG_TO_PUBLIC_PATH: Record<string, string> = {
  "arm-lipo-360----arm-lift": "/arm-lipo-360-arm-lift",
  "female-b-a-gallery": "/female-ba-gallery",
  "male-liposuction-360-1": "/male-liposuction-360",
  "male-tummy-tuck-1": "/male-tummy-tuck",
};

/** Public URL path for a page slug (handles legacy slug aliases). */
export function getPublicPathForSlug(slug: string): string {
  return SLUG_TO_PUBLIC_PATH[slug] ?? `/${slug}`;
}

export function getCanonicalUrlForSlug(slug: string): string {
  return `${SITE_URL}${getPublicPathForSlug(slug)}`;
}

/** Normalize any path or slug form to the public path used in nav and canonicals. */
export function normalizePublicPath(pathOrSlug: string): string {
  const trimmed = pathOrSlug.replace(/\/$/, "") || "/";
  if (trimmed.startsWith("/")) {
    const slug = trimmed.slice(1);
    if (!slug) return "/";
    return getPublicPathForSlug(slug);
  }
  return getPublicPathForSlug(trimmed);
}
