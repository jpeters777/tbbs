import { bblFaqs, bblRelatedProcedures } from "@/content/bbl-page";
import { SITE_URL } from "@/lib/site";
import { buildBreadcrumbList, buildOrganizationNode } from "@/lib/seo/organization-schema";

const BASE = SITE_URL;
const PAGE_URL = BASE + "/brazilian-butt-lift-bbl";

export function buildBblSchema() {
  const organization = { "@id": BASE + "/#organization" };

  const webpage = {
    "@type": "MedicalWebPage",
    "@id": PAGE_URL + "/#webpage",
    url: PAGE_URL,
    name: "BBL Tampa | Brazilian Butt Lift (BBL) Guide | Tampa Bay Body Sculpting",
    description:
      "Complete Brazilian Butt Lift (BBL) guide for Tampa Bay—how it works, low BMI candidacy & hip dips, ultrasound-guided safety, recovery, and fat transfer vs implants.",
    isPartOf: { "@id": BASE + "/#website" },
    about: organization,
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": PAGE_URL + "/#faq",
    mainEntity: bblFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const procedureList = {
    "@type": "ItemList",
    "@id": PAGE_URL + "/#related",
    name: "Related procedures — Brazilian Butt Lift (BBL)",
    itemListElement: bblRelatedProcedures.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: BASE + item.href,
    })),
  };

  const medicalProcedure = {
    "@type": "MedicalProcedure",
    name: "Brazilian Butt Lift (BBL)",
    description:
      "A Brazilian Butt Lift (BBL) uses liposuction and fat transfer to enhance buttock volume and shape while contouring donor areas such as the abdomen, waist, and flanks.",
    howPerformed:
      "Surgical liposuction and subcutaneous-only, ultrasound-guided fat transfer performed by board-certified providers.",
    preparation:
      "Complimentary virtual consultation, in-person pre-operative evaluation, and candidacy review before surgery.",
    followup:
      "Compression garments, modified sitting and sleeping, lymphatic massage when approved, and follow-up visits to monitor healing and results.",
    procedureType: "https://schema.org/SurgicalProcedure",
    relevantSpecialty: "PlasticSurgery",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationNode(), webpage, buildBreadcrumbList(PAGE_URL, webpage.name), faqPage, procedureList, medicalProcedure],
  };
}

export const bblSeo = {
  title: "BBL Tampa | Brazilian Butt Lift (BBL) Guide | Tampa Bay Body Sculpting",
  description:
    "Complete Brazilian Butt Lift (BBL) guide for Tampa Bay—how it works, low BMI candidacy & hip dips, ultrasound-guided safety, recovery, and fat transfer vs implants. Schedule your complimentary virtual consultation.",
  canonical: PAGE_URL,
  ogImage: "/images/blob-2294999.png",
};
