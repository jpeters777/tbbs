import { feminineWaistFaqs, feminineWaistRelatedProcedures } from "@/content/feminine-waist-page";
import { SITE_URL } from "@/lib/site";
import { buildBreadcrumbList, buildOrganizationNode } from "@/lib/seo/organization-schema";

const BASE = SITE_URL;
const PAGE_URL = BASE + "/feminine-waist-contouring";

export function buildFeminineWaistSchema() {
  const organization = { "@id": BASE + "/#organization" };

  const webpage = {
    "@type": "MedicalWebPage",
    "@id": PAGE_URL + "/#webpage",
    url: PAGE_URL,
    name: "Feminine Waist Contouring Tampa | Hourglass Waist Sculpting | Tampa Bay Body Sculpting",
    description:
      "Feminine waist contouring in Tampa Bay for a sculpted waist, hourglass curves, and snatched midsection definition. Lipo 360, BBL combinations. Free virtual consult.",
    isPartOf: { "@id": BASE + "/#website" },
    about: organization,
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": PAGE_URL + "/#faq",
    mainEntity: feminineWaistFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const procedureList = {
    "@type": "ItemList",
    "@id": PAGE_URL + "/#related",
    name: "Related procedures — Feminine Waist Contouring",
    itemListElement: feminineWaistRelatedProcedures.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: BASE + item.href,
    })),
  };

  const medicalProcedure = {
    "@type": "MedicalProcedure",
    name: "Feminine Waist Contouring",
    alternateName: ["Waist contouring liposuction", "Hourglass waist sculpting", "Feminine abdominal sculpting"],
    description:
      "Feminine waist contouring uses circumferential liposuction and body sculpting to narrow the waist, smooth flanks and back fat, and enhance feminine hourglass proportions.",
    howPerformed: "Surgical liposuction and body contouring performed by board-certified providers.",
    preparation: "Complimentary virtual consultation and in-person evaluation to plan waist, flank, and optional BBL or tummy tuck combinations.",
    followup: "Compression garments, gradual return to activity, and follow-up visits to monitor healing and contour.",
    procedureType: "https://schema.org/SurgicalProcedure",
    relevantSpecialty: "PlasticSurgery",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationNode(), webpage, buildBreadcrumbList(PAGE_URL, webpage.name), faqPage, procedureList, medicalProcedure],
  };
}

export const feminineWaistSeo = {
  title: "Feminine Waist Contouring Tampa | Hourglass Waist Sculpting | Tampa Bay Body Sculpting",
  description:
    "Feminine waist contouring in Tampa Bay—sculpted waist, hourglass curves & snatched midsection. Lipo 360 & BBL combinations. Schedule your free virtual consultation today.",
  canonical: PAGE_URL,
  ogImage: "/images/shutterstock_263340653-b2373a9.jpg",
};
