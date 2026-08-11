import type { Metadata } from "next";
import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";
import { gallerySeoFromContent } from "@/lib/seo/gallery-page-schema";
import { ogImageAbsoluteUrl } from "@/lib/seo/og-image";
import { toTitleCase, absoluteSeoTitle } from "@/lib/text";

export function buildGalleryPageMetadata(content: GalleryPageContent): Metadata {
  const seo = gallerySeoFromContent(content);
  const title = toTitleCase(seo.title);
  const ogImageUrl = ogImageAbsoluteUrl(seo.ogImage);

  return {
    title: absoluteSeoTitle(seo.title),
    description: seo.description,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title,
      description: seo.description,
      url: seo.canonical,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: content.visuals.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}
