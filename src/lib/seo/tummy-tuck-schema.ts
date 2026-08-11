import { tummyTuckFaqs, tummyTuckRelatedProcedures } from "@/content/tummy-tuck-page";

const BASE = "https://tampabaybodysculpting.com";
const PAGE_URL = BASE + "/tummy-tuck";

export function buildTummyTuckSchema() {
  const organization = { "@id": BASE + "/#organization" };

  const webpage = {
    "@type": "MedicalWebPage",
    "@id": PAGE_URL + "/#webpage",
    url: PAGE_URL,
    name: "Tummy Tuck Tampa | Abdominoplasty | Tampa Bay Body Sculpting",
    description:
      "Tummy tuck (abdominoplasty) in Tampa Bay—remove excess skin, repair diastasis recti, and restore a flatter abdomen. Full & mini tuck, mommy makeover combos. Free virtual consult.",
    isPartOf: { "@id": BASE + "/#website" },
    about: organization,
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": PAGE_URL + "/#faq",
    mainEntity: tummyTuckFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const procedureList = {
    "@type": "ItemList",
    "@id": PAGE_URL + "/#related",
    name: "Related procedures — Tummy Tuck",
    itemListElement: tummyTuckRelatedProcedures.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: BASE + item.href,
    })),
  };

  const medicalProcedure = {
    "@type": "MedicalProcedure",
    name: "Tummy Tuck",
    alternateName: ["Abdominoplasty", "Mini tummy tuck", "Full abdominoplasty"],
    description:
      "A tummy tuck (abdominoplasty) removes excess abdominal skin and tightens separated abdominal muscles to create a flatter, firmer midsection—often after pregnancy or weight loss.",
    howPerformed: "Surgical abdominoplasty performed by board-certified providers; may include muscle repair and liposuction.",
    preparation: "Complimentary virtual consultation and in-person evaluation to plan full vs mini tuck and combination procedures.",
    followup: "Compression garment, drain care when applicable, activity restrictions, and follow-up visits to monitor healing.",
    procedureType: "https://schema.org/SurgicalProcedure",
    relevantSpecialty: "PlasticSurgery",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, faqPage, procedureList, medicalProcedure],
  };
}

export const tummyTuckSeo = {
  title: "Tummy Tuck Tampa | Abdominoplasty | Tampa Bay Body Sculpting",
  description:
    "Tummy tuck in Tampa Bay—flatter, firmer abdomen with abdominoplasty. Full & mini tuck, diastasis repair, mommy makeover combos. Schedule your free virtual consultation today.",
  canonical: PAGE_URL,
  ogImage: "/images/blob-8f7eab9.png",
};
