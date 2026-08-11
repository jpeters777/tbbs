import type { Metadata } from "next";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { curatedSeoFromContent } from "@/lib/seo/curated-page-schema";
import { ogImageAbsoluteUrl } from "@/lib/seo/og-image";
import { toTitleCase, absoluteSeoTitle } from "@/lib/text";

export function buildCuratedPageMetadata(content: CuratedPageContent): Metadata {
  const seo = curatedSeoFromContent(content);
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
