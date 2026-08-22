import { lipo360Faqs, lipo360RelatedProcedures } from "@/content/lipo-360-page";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;
const PAGE_URL = BASE + "/liposuction-360";

export function buildLipo360Schema() {
  const organization = { "@id": BASE + "/#organization" };

  const webpage = {
    "@type": "MedicalWebPage",
    "@id": PAGE_URL + "/#webpage",
    url: PAGE_URL,
    name: "Lipo 360 Tampa | Liposuction & Waist Contouring | Tampa Bay Body Sculpting",
    description:
      "Discover Lipo 360 in Tampa Bay to sculpt your waist, abdomen, flanks, and back. Complimentary virtual consultations with Tampa Bay Body Sculpting.",
    isPartOf: { "@id": BASE + "/#website" },
    about: organization,
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": PAGE_URL + "/#faq",
    mainEntity: lipo360Faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const procedureList = {
    "@type": "ItemList",
    "@id": PAGE_URL + "/#related",
    name: "Related procedures — Lipo 360",
    itemListElement: lipo360RelatedProcedures.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: BASE + item.href,
    })),
  };

  const medicalProcedure = {
    "@type": "MedicalProcedure",
    name: "Lipo 360",
    description:
      "Lipo 360 is a comprehensive liposuction procedure that removes fat from the entire midsection—abdomen, waist, flanks, and lower back—for balanced body contouring.",
    howPerformed: "Surgical fat removal performed by board-certified providers.",
    procedureType: "https://schema.org/SurgicalProcedure",
    relevantSpecialty: "PlasticSurgery",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, faqPage, procedureList, medicalProcedure],
  };
}

export const lipo360Seo = {
  title: "Lipo 360 Tampa | Liposuction & Waist Contouring | Tampa Bay Body Sculpting",
  description:
    "Discover Lipo 360 in Tampa Bay to sculpt your waist, abdomen, flanks, and back. Schedule your complimentary virtual consultation with Tampa Bay Body Sculpting.",
  canonical: PAGE_URL,
  ogImage: "/images/blob-10293ad.png",
};
