import { homeExploreProcedures } from "@/content/home-sections";
import { homeFaqs } from "@/content/home-faqs";
import { siteConfig, SITE_URL } from "@/lib/site";
import { buildOrganizationNode } from "@/lib/seo/organization-schema";

const BASE = SITE_URL;

/** Full JSON-LD graph for homepage SEO + AIO (AI search). */
export function buildHomeSchema() {
  const organization = buildOrganizationNode();

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
    name: "Tampa Bay Body Sculpting | Body Contouring & Lipo 360 in Tampa",
    description:
      "Body sculpting and body contouring in Tampa Bay—Lipo 360, BBL, tummy tuck, breast surgery, and men's procedures. Start your complimentary virtual consult.",
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
