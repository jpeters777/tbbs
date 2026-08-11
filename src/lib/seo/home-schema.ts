import { homeExploreProcedures } from "@/content/home-sections";
import { homeFaqs } from "@/content/home-faqs";
import { companyStats } from "@/content/company-stats";
import { siteConfig } from "@/lib/site";
import { buildAreaServedSchema } from "@/lib/seo/geo-schema";
import { buildAggregateRatingSchema } from "@/lib/seo/reviews-schema";

const BASE = "https://tampabaybodysculpting.com";

/** Full JSON-LD graph for homepage SEO + AIO (AI search). */
export function buildHomeSchema() {
  const organization = {
    "@type": "MedicalBusiness",
    "@id": `${BASE}/#organization`,
    name: siteConfig.brand,
    url: `${BASE}/`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description:
      "Concierge cosmetic surgery guidance in Tampa Bay, Florida — Lipo 360, tummy tuck, breast surgery, body contouring, and male body sculpting with complimentary virtual consultations.",
    areaServed: buildAreaServedSchema(),
    ...(buildAggregateRatingSchema()
      ? { aggregateRating: buildAggregateRatingSchema() }
      : {}),
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

  const website = {
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: `${BASE}/`,
    name: siteConfig.brand,
    publisher: { "@id": `${BASE}/#organization` },
    inLanguage: "en-US",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${BASE}/#webpage`,
    url: `${BASE}/`,
    name: "Tampa Bay Body Sculpting | Cosmetic Surgery, Lipo 360 & Tummy Tuck",
    description:
      "Considering cosmetic surgery in Tampa? Explore Lipo 360, tummy tuck, breast surgery, body contouring, and male body sculpting. Schedule your free consultation.",
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#organization` },
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${BASE}/#faq`,
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const procedureList = {
    "@type": "ItemList",
    "@id": `${BASE}/#procedures`,
    name: "Cosmetic surgery procedures at Tampa Bay Body Sculpting",
    itemListElement: homeExploreProcedures.links.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.label,
      url: `${BASE}${link.href}`,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, webpage, faqPage, procedureList],
  };
}
