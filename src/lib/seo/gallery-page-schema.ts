import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";
import { getCanonicalUrlForSlug } from "@/lib/public-paths";
import { resolveOgImage } from "@/lib/seo/og-image";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

export function buildGalleryPageSchema(content: GalleryPageContent) {
  const pageUrl = getCanonicalUrlForSlug(content.slug);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: content.seo.title,
        description: content.seo.description,
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${BASE}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "ImageGallery",
        name: content.schemaName,
        description: content.schemaDescription,
        url: pageUrl,
      },
    ],
  };
}

export function gallerySeoFromContent(content: GalleryPageContent) {
  return {
    title: content.seo.title,
    description: content.seo.description,
    canonical: getCanonicalUrlForSlug(content.slug),
    ogImage: resolveOgImage(content.seo.ogImage, content.visuals.hero.src),
  };
}
