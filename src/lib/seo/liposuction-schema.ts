import { liposuctionFaqs, liposuctionProcedureGroups } from "@/content/liposuction-page";

const BASE = "https://tampabaybodysculpting.com";
const PAGE_URL = `${BASE}/liposuction`;

export function buildLiposuctionSchema() {
  const organization = { "@id": `${BASE}/#organization` };

  const webpage = {
    "@type": "MedicalWebPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "Liposuction Tampa | Body Contouring | Tampa Bay Body Sculpting",
    description:
      "Explore liposuction and body contouring in Tampa Bay — Lipo 360, arm, thigh, and chin liposuction, plus male body sculpting. Complimentary virtual consultations.",
    isPartOf: { "@id": `${BASE}/#website` },
    about: organization,
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: liposuctionFaqs.map((faq) => ({
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
    "@id": `${PAGE_URL}/#procedures`,
    name: "Liposuction procedures at Tampa Bay Body Sculpting",
    itemListElement: liposuctionProcedureGroups.flatMap((group, groupIndex) =>
      group.items.map((item, itemIndex) => ({
        "@type": "ListItem",
        position: groupIndex * 10 + itemIndex + 1,
        name: item.title,
        url: `${BASE}${item.href}`,
      }))
    ),
  };

  const medicalProcedure = {
    "@type": "MedicalProcedure",
    name: "Liposuction",
    description:
      "Cosmetic liposuction removes stubborn fat deposits for body contouring. Options include Lipo 360, arm, thigh, chin, and male body sculpting procedures.",
    howPerformed: "Surgical fat removal performed by board-certified providers.",
    procedureType: "https://schema.org/SurgicalProcedure",
    relevantSpecialty: "PlasticSurgery",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, faqPage, procedureList, medicalProcedure],
  };
}

export const liposuctionSeo = {
  title: "Liposuction Tampa | Body Contouring | Tampa Bay Body Sculpting",
  description:
    "Explore liposuction and body contouring in Tampa Bay — Lipo 360, arm, thigh, and chin liposuction, plus male body sculpting. Schedule your complimentary virtual consultation.",
  canonical: PAGE_URL,
  ogImage: "/images/shutterstock_263340653-b2373a9.jpg",
};
