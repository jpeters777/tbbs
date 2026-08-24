import type { PageContent } from "@/lib/content";
import { getCanonicalUrl, normalizeFaqs } from "@/lib/premium-page-utils";
import { toTitleCase } from "@/lib/text";
import { SITE_URL } from "@/lib/site";
import { buildBreadcrumbList, buildOrganizationNode } from "@/lib/seo/organization-schema";

const BASE = SITE_URL;

export function buildPageSchema(page: PageContent) {
  const url = getCanonicalUrl(page);
  const title = toTitleCase(page.title);
  const faqs = normalizeFaqs(page.faqs || []);

  const webpage = {
    "@type": "MedicalWebPage",
    "@id": `${url}/#webpage`,
    url,
    name: title,
    description: page.description,
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#organization` },
    inLanguage: "en-US",
  };

  const graph: Record<string, unknown>[] = [
    buildOrganizationNode(),
    webpage,
    buildBreadcrumbList(url, title),
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  }

  if (page.cards.length > 0) {
    graph.push({
      "@type": "ItemList",
      "@id": `${url}/#related`,
      name: `Related procedures — ${getPageHeroTitleFromPage(page)}`,
      itemListElement: page.cards.slice(0, 8).map((card, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: card.title,
        url: card.href.startsWith("http") ? card.href : `${BASE}${card.href.split("?")[0]}`,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function getPageHeroTitleFromPage(page: PageContent): string {
  return toTitleCase(page.h1.split("|")[0]?.trim() || page.title);
}

export function buildPageMetadata(page: PageContent) {
  const title = toTitleCase(page.title);
  const canonical = getCanonicalUrl(page);
  const ogImage = page.hero?.localSrc || "/images/shutterstock_263340653-b2373a9.jpg";

  return {
    title,
    description: page.description,
    canonical,
    ogImage,
  };
}
