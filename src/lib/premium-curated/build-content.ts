import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { premiumWhyChoose } from "@/content/premium-shared-sections";
import {
  bodyCombinationGroups,
  breastCombinationGroups,
  menCombinationGroups,
  resourcesCombinationGroups,
  womenCombinationGroups,
} from "@/content/premium-shared-sections";
import type { ComboGroup } from "@/content/premium-shared-sections";

type PageCategory = "body" | "breast" | "women" | "men" | "resources";

const DEFAULT_RECOVERY_ESSENTIALS = [
  {
    title: "Follow Surgeon Instructions",
    body: "Your provider's post-operative protocol is tailored to your procedure. Follow activity limits, garment wear, and medication guidance exactly.",
  },
  {
    title: "Compression & Support",
    body: "Compression garments or dressings support healing and help tissues settle. Wear them for the full duration recommended.",
  },
  {
    title: "Light Walking",
    body: "Short, frequent walks support healthy circulation early in recovery. Avoid strenuous exercise until cleared.",
  },
  {
    title: "Nutrition & Hydration",
    body: "Protein-rich meals and adequate hydration support tissue repair and energy during healing.",
  },
  {
    title: "Avoid Smoking",
    body: "Smoking impairs healing and can worsen scarring. Most surgeons require patients to stop before and after surgery.",
  },
  {
    title: "Follow-Up Appointments",
    body: "Attend all scheduled visits so your provider can monitor healing, address concerns, and clear you for next steps.",
  },
];

const DEFAULT_RECOVERY_TIPS = [
  "Walk daily as directed to support circulation",
  "Stay hydrated and eat protein-rich meals",
  "Wear compression garments for the full recommended duration",
  "Avoid smoking to support healing",
  "Ask before returning to exercise or heavy lifting",
  "Attend follow-ups and report unusual symptoms promptly",
];

const DEFAULT_RECOVERY_STEPS = [
  {
    step: "01",
    title: "First 24–48 Hours",
    body: "Rest with help at home. Short walks as directed. Mild soreness, swelling, and bruising are normal. Follow all wound and garment instructions.",
  },
  {
    step: "02",
    title: "First 1–2 Weeks",
    body: "Swelling and discomfort gradually improve. Many patients return to light daily activities or desk work within one to two weeks depending on the procedure.",
  },
  {
    step: "03",
    title: "Weeks 2–6",
    body: "Continue garment wear if prescribed. Increase activity only with provider approval. Strenuous exercise typically waits until clearance.",
  },
  {
    step: "04",
    title: "Weeks 6+ And Beyond",
    body: "Gradual return to full activity when approved. Final results continue refining as swelling resolves over weeks to months.",
  },
];

function comboForCategory(category: PageCategory): ComboGroup[] {
  switch (category) {
    case "breast":
      return breastCombinationGroups;
    case "men":
      return menCombinationGroups;
    case "women":
      return womenCombinationGroups;
    case "resources":
      return resourcesCombinationGroups;
    default:
      return bodyCombinationGroups;
  }
}

function breadcrumbForCategory(category: PageCategory): { href: string; label: string } {
  switch (category) {
    case "breast":
      return { href: "/breasts", label: "Breast" };
    case "men":
      return { href: "/men", label: "Men" };
    case "women":
      return { href: "/women", label: "Women" };
    case "resources":
      return { href: "/resources", label: "Resources" };
    default:
      return { href: "/liposuction", label: "Liposuction" };
  }
}

export type CreateCuratedPageInput = {
  slug: string;
  category: PageCategory;
  seo: CuratedPageContent["seo"];
  visuals: CuratedPageContent["visuals"];
  intro: CuratedPageContent["intro"];
  glance: CuratedGlanceInput;
  howItWorks: { title: string; intro: string; steps: CuratedPageContent["howItWorks"]["steps"]; eyebrow?: string };
  focusSection?: CuratedPageContent["focusSection"];
  comparison?: CuratedPageContent["comparison"];
  candidacy: Omit<CuratedPageContent["candidacy"], "eyebrow">;
  combinations?: { title: string; intro: string; groups?: ComboGroup[] };
  recovery?: Partial<CuratedPageContent["recovery"]>;
  results: { title: string; intro: string; items: CuratedPageContent["results"]["items"] };
  relatedProcedures: CuratedPageContent["relatedProcedures"];
  relatedIntro?: CuratedPageContent["relatedIntro"];
  faqs: CuratedPageContent["faqs"];
  faqTitle: string;
  faqIntro: string;
  finalCtaTitle: string;
  schemaProcedureName: string;
  schemaAlternateNames?: string[];
  schemaDescription: string;
  heroSecondaryCta?: string;
  jumpLinks?: CuratedPageContent["jumpLinks"];
  introEyebrowQuestion?: string;
};

type CuratedGlanceInput = {
  col1Title: string;
  col1Items: string[];
  candidates: string[];
  benefits: string[];
  procedureSnapshot: string[];
};

export function createCuratedPage(input: CreateCuratedPageInput): CuratedPageContent {
  const shortName = input.intro.heroTitle.replace(/ In Tampa Bay$/i, "");
  const recovery = {
    eyebrow: "Recovery",
    title: input.recovery?.title ?? `What To Expect After ${shortName}`,
    intro:
      input.recovery?.intro ??
      "Recovery varies by procedure extent and whether combinations are included. Following your surgeon's protocol supports smoother healing and better results.",
    essentialsTitle: input.recovery?.essentialsTitle ?? "Essential Recovery Guidelines",
    essentialsIntro:
      input.recovery?.essentialsIntro ??
      "Follow your surgeon's instructions first. These are the topics patients ask about most.",
    steps: input.recovery?.steps ?? DEFAULT_RECOVERY_STEPS,
    essentials: input.recovery?.essentials ?? DEFAULT_RECOVERY_ESSENTIALS,
    tips: input.recovery?.tips ?? DEFAULT_RECOVERY_TIPS,
  };

  return {
    slug: input.slug,
    seo: input.seo,
    visuals: input.visuals,
    breadcrumb: breadcrumbForCategory(input.category),
    intro: {
      ...input.intro,
      eyebrowQuestion: input.introEyebrowQuestion ?? `What is ${shortName.toLowerCase()}?`,
    },
    heroSecondaryCta: input.heroSecondaryCta ?? `${shortName} at a glance`,
    jumpLinks: input.jumpLinks ?? [
      { href: "#how-it-works", label: "How it works" },
      ...(input.focusSection ? [{ href: "#procedure-focus", label: "Key details" }] : []),
      { href: "#candidacy", label: "Candidacy" },
      { href: "#recovery", label: "Recovery" },
      { href: "#results", label: "Results" },
      { href: "#faq", label: "FAQs" },
    ],
    glance: input.glance,
    howItWorks: {
      eyebrow: input.howItWorks.eyebrow ?? "The procedure",
      title: input.howItWorks.title,
      intro: input.howItWorks.intro,
      steps: input.howItWorks.steps,
      sectionId: "how-it-works",
    },
    focusSection: input.focusSection
      ? { ...input.focusSection, sectionId: input.focusSection.sectionId ?? "procedure-focus" }
      : undefined,
    comparison: input.comparison,
    candidacy: { eyebrow: "Candidacy", ...input.candidacy },
    combinations: {
      title: input.combinations?.title ?? "Commonly Combined Procedures",
      intro:
        input.combinations?.intro ??
        "Many patients combine procedures for comprehensive results in one surgical plan. Explore related options below.",
      groups: input.combinations?.groups ?? comboForCategory(input.category),
    },
    recovery,
    results: {
      eyebrow: "Results",
      title: input.results.title,
      intro: input.results.intro,
      items: input.results.items,
      sectionId: "results",
    },
    relatedProcedures: input.relatedProcedures,
    relatedIntro: input.relatedIntro,
    faqs: input.faqs,
    faqTitle: input.faqTitle,
    faqIntro: input.faqIntro,
    finalCtaTitle: input.finalCtaTitle,
    schemaProcedureName: input.schemaProcedureName,
    schemaAlternateNames: input.schemaAlternateNames,
    schemaDescription: input.schemaDescription,
  };
}

export { premiumWhyChoose };
