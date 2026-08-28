import { liposuctionFaqs, liposuctionProcedureGroups } from "@/content/liposuction-page";
import { SITE_URL } from "@/lib/site";
import { buildBreadcrumbList, buildOrganizationNode } from "@/lib/seo/organization-schema";

const BASE = SITE_URL;
const PAGE_URL = `${BASE}/liposuction`;

export function buildLiposuctionSchema() {
  const organization = { "@id": `${BASE}/#organization` };

  const webpage = {
    "@type": "MedicalWebPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: liposuctionSeo.title,
    description: liposuctionSeo.description,
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
    "@graph": [buildOrganizationNode(), webpage, buildBreadcrumbList(PAGE_URL, webpage.name), faqPage, procedureList, medicalProcedure],
  };
}

export const liposuctionSeo = {
  title: "Liposuction & Body Contouring Tampa | Tampa Bay Body Sculpting",
  description:
    "Body contouring and liposuction in Tampa Bay—Lipo 360, BBL, arm, thigh, and chin lipo, plus male body sculpting. Start your complimentary virtual consult.",
  canonical: PAGE_URL,
  ogImage: "/images/shutterstock_263340653-b2373a9.jpg",
};
