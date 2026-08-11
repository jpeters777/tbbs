import type { CuratedFaq, CuratedRelatedItem } from "@/lib/premium-curated/types";

export type GalleryLookForItem = { title: string; body: string };

export type GalleryPageContent = {
  slug: string;
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  visuals: { hero: { src: string; alt: string } };
  breadcrumb: { href: string; label: string };
  intro: {
    eyebrow: string;
    heroTitle: string;
    title: string;
    lead: string;
    paragraphs: string[];
  };
  gallery: {
    title: string;
    intro?: string;
  };
  lookFor: {
    title: string;
    intro: string;
    items: GalleryLookForItem[];
  };
  relatedProcedures: CuratedRelatedItem[];
  relatedIntro: string;
  faqs: CuratedFaq[];
  faqTitle: string;
  faqIntro: string;
  finalCtaTitle: string;
  schemaName: string;
  schemaDescription: string;
};
