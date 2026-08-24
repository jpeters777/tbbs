import { siteConfig, SITE_URL } from "@/lib/site";
import { buildAreaServedSchema } from "@/lib/seo/geo-schema";
import { buildAggregateRatingSchema } from "@/lib/seo/reviews-schema";

const BASE = SITE_URL;
const LOGO_URL = `${BASE}${siteConfig.logo}`;

/** Shared MedicalBusiness node so every page can resolve @id /#organization. */
export function buildOrganizationNode() {
  const aggregateRating = buildAggregateRatingSchema();

  return {
    "@type": "MedicalBusiness",
    "@id": `${BASE}/#organization`,
    name: siteConfig.brand,
    url: `${BASE}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description:
      "Concierge cosmetic surgery guidance in Tampa Bay, Florida — Lipo 360, tummy tuck, breast surgery, body contouring, and male body sculpting with complimentary virtual consultations.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tampa",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: buildAreaServedSchema(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    ...(aggregateRating ? { aggregateRating } : {}),
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    knowsAbout: [
      "Lipo 360",
      "Tummy tuck",
      "Breast augmentation",
      "Brazilian butt lift",
      "Body contouring",
      "Male body sculpting",
      "Gynecomastia surgery",
    ],
  };
}

export function buildBreadcrumbList(
  pageUrl: string,
  pageName: string,
  parents: { name: string; url: string }[] = [],
) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${BASE}/`,
    },
    ...parents.map((parent, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: parent.name,
      item: parent.url,
    })),
    {
      "@type": "ListItem",
      position: parents.length + 2,
      name: pageName,
      item: pageUrl,
    },
  ];

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement,
  };
}
