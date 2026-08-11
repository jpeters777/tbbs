import type { KeywordLink } from "@/lib/keyword-links";
import type { ComboGroup } from "@/content/premium-shared-sections";

export type CuratedStep = { step: string; title: string; body: string };

export type CuratedCard = {
  title: string;
  body: string;
  id?: string;
  href?: string;
  phases?: { label: string; text: string }[];
  highlights?: string[];
};

export type CuratedRelatedItem = {
  title: string;
  href: string;
  body: string;
  links?: KeywordLink[];
};

export type CuratedFaq = { q: string; a: string; links?: KeywordLink[] };

export type CuratedGlance = {
  col1Title: string;
  col1Items: string[];
  candidates: string[];
  benefits: string[];
  procedureSnapshot: string[];
};

export type CuratedPageContent = {
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
    eyebrowQuestion?: string;
  };
  heroSecondaryCta: string;
  jumpLinks: { href: string; label: string }[];
  glance: CuratedGlance;
  howItWorks: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: CuratedStep[];
    sectionId?: string;
  };
  focusSection?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: CuratedCard[];
    closingParagraphs: string[];
    sectionId?: string;
  };
  comparison?: {
    title: string;
    intro: string;
    columns?: CuratedCard[];
    rows?: {
      procedure: string;
      deskWork: string;
      exercise: string;
      garment: string;
    }[];
    links?: { href: string; label: string }[];
  };
  candidacy: {
    eyebrow: string;
    title: string;
    intro: string;
    idealTitle: string;
    ideal: string[];
    considerationsTitle: string;
    considerations: string[];
    closing: string;
  };
  combinations: {
    title: string;
    intro: string;
    groups: ComboGroup[];
  };
  recovery: {
    eyebrow: string;
    title: string;
    intro: string;
    essentialsTitle: string;
    essentialsIntro: string;
    steps: CuratedStep[];
    essentials: CuratedCard[];
    tips: string[];
  };
  results: {
    eyebrow: string;
    title: string;
    intro: string;
    items: CuratedCard[];
    sectionId?: string;
  };
  relatedProcedures: CuratedRelatedItem[];
  relatedIntro?: string;
  faqs: CuratedFaq[];
  faqTitle: string;
  faqIntro: string;
  finalCtaTitle: string;
  schemaProcedureName: string;
  schemaAlternateNames?: string[];
  schemaDescription: string;
};
