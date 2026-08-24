import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";
import { getCanonicalUrlForSlug } from "@/lib/public-paths";
import { resolveOgImage } from "@/lib/seo/og-image";
import { SITE_URL } from "@/lib/site";
import { buildBreadcrumbList, buildOrganizationNode } from "@/lib/seo/organization-schema";

const BASE = SITE_URL;

function pageUrlFromContent(content: GalleryPageContent) {
  if (content.canonicalPath) {
    return `${SITE_URL}${content.canonicalPath}`;
  }
  return getCanonicalUrlForSlug(content.slug);
}

export function buildGalleryPageSchema(content: GalleryPageContent) {
  const pageUrl = pageUrlFromContent(content);
  const nestedPhotoCategory =
    Boolean(content.canonicalPath) && content.canonicalPath !== "/before-after-photos";
  const breadcrumbParents = nestedPhotoCategory
    ? [{ name: "Before & After Photos", url: `${BASE}/before-after-photos` }]
    : [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode(),
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
      buildBreadcrumbList(pageUrl, content.seo.title, breadcrumbParents),
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
}

export function gallerySeoFromContent(content: GalleryPageContent) {
  return {
    title: content.seo.title,
    description: content.seo.description,
    canonical: pageUrlFromContent(content),
    ogImage: resolveOgImage(content.seo.ogImage, content.visuals.hero.src),
  };
}
