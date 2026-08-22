import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { getCanonicalUrlForSlug } from "@/lib/public-paths";
import { resolveOgImage } from "@/lib/seo/og-image";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

export function buildCuratedPageSchema(content: CuratedPageContent) {
  const pageUrl = getCanonicalUrlForSlug(content.slug);

  const webpage = {
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: content.seo.title,
    description: content.seo.description,
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#organization` },
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const procedureList = {
    "@type": "ItemList",
    "@id": `${pageUrl}/#related`,
    name: `Related procedures — ${content.schemaProcedureName}`,
    itemListElement: content.relatedProcedures.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${BASE}${item.href}`,
    })),
  };

  const medicalProcedure = {
    "@type": "MedicalProcedure",
    name: content.schemaProcedureName,
    alternateName: content.schemaAlternateNames,
    description: content.schemaDescription,
    howPerformed: "Performed by board-certified providers in accredited surgical settings.",
    preparation: "Complimentary virtual consultation and personalized surgical planning.",
    followup: "Post-operative care, follow-up visits, and recovery guidance.",
    procedureType: "https://schema.org/SurgicalProcedure",
    relevantSpecialty: "PlasticSurgery",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, faqPage, procedureList, medicalProcedure],
  };
}

export function curatedSeoFromContent(content: CuratedPageContent) {
  return {
    title: content.seo.title,
    description: content.seo.description,
    canonical: getCanonicalUrlForSlug(content.slug),
    ogImage: resolveOgImage(content.seo.ogImage, content.visuals.hero.src),
  };
}
