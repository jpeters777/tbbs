import siteNav from "@/content/site.json";
import type { ComboGroup } from "@/content/premium-shared-sections";
import {
  bodyCombinationGroups,
  breastCombinationGroups,
  defaultRelatedLinks,
  menCombinationGroups,
  premiumRecoveryIntro,
  premiumRecoveryTips,
  premiumWhyChoose,
  resourcesCombinationGroups,
  womenCombinationGroups,
  genericRecoverySteps,
} from "@/content/premium-shared-sections";
import type { ContentBlock, ContentSection, PageContent } from "@/lib/content";
import type { KeywordLink } from "@/lib/keyword-links";
import {
  extractOverviewParagraphs,
  getPageEyebrow,
  getPageHeroImage,
  getPageHeroTitle,
  normalizeFaqs,
  pickRelatedCards,
  preparePremiumPageSections,
} from "@/lib/premium-page-utils";

export type GlanceGroup = { title: string; items: string[] };

export type RecoveryStep = { step: string; title: string; body: string };

export type DirectoryItem = {
  title: string;
  body: string;
  href?: string;
  links?: KeywordLink[];
};

export type ComparisonData = {
  title: string;
  intro: string;
  columns: { title: string; body: string }[];
};

export type RelatedItem = {
  title: string;
  description: string;
  href: string;
};

const HUB_SLUGS = new Set(["women", "men", "breasts", "resources"]);

const BOILERPLATE_PATTERNS = [
  /^start your complimentary/i,
  /^please reach us at/i,
  /^during a bbl procedure at tampa bay/i,
];

function toKeywordLinks(links?: { href: string; text: string }[]): KeywordLink[] {
  if (!links?.length) return [];
  return links.map((l) => ({ text: l.text, href: l.href }));
}

export function normalizeGlanceTitle(title: string): string {
  return title
    .replace(/\s+during\s+.*/gi, "")
    .replace(/\s+of\s+.*/gi, "")
    .replace(/^who is a good candidate\??$/i, "Good candidates")
    .replace(/^areas treated.*/i, "Areas treated")
    .replace(/^benefits of.*/i, "Key benefits")
    .replace(/^donor areas.*/i, "Donor areas")
    .trim();
}

export function extractGlanceGroups(blocks: ContentBlock[]): GlanceGroup[] | null {
  const groups: GlanceGroup[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type !== "h3" && block.type !== "h4") continue;

    const title = block.text.trim();
    const next = blocks[i + 1];

    if (next?.type === "list") {
      groups.push({ title, items: next.items });
      i += 1;
      continue;
    }

    if (next?.type === "p" && blocks[i + 2]?.type === "list") {
      const list = blocks[i + 2];
      if (list.type === "list") {
        groups.push({ title, items: list.items });
        i += 2;
      }
    }
  }

  return groups.length >= 2 ? groups : null;
}

export function extractProcedurePairs(
  blocks: ContentBlock[]
): DirectoryItem[] | null {
  const pairs: DirectoryItem[] = [];
  const usedP = new Set<number>();

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type !== "h4" && block.type !== "h3") continue;

    for (let j = i + 1; j < blocks.length; j++) {
      const next = blocks[j];
      if (next.type === "p" && !usedP.has(j)) {
        usedP.add(j);
        pairs.push({
          title: block.text,
          body: next.text,
          href: next.links?.[0]?.href,
          links: toKeywordLinks(next.links),
        });
        break;
      }
    }
  }

  return pairs.length >= 2 ? pairs : null;
}

function extractRecoverySteps(blocks: ContentBlock[]): RecoveryStep[] | null {
  const raw: { title: string; body: string }[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type !== "h4") continue;
    const next = blocks[i + 1];
    if (next?.type === "p") {
      const lower = block.text.toLowerCase();
      if (lower.includes("recovery tips") || lower.includes("complete recovery")) continue;
      raw.push({ title: block.text, body: next.text });
      i += 1;
    }
  }

  if (raw.length < 2) return null;

  return raw.slice(0, 4).map((item, index) => ({
    step: String(index + 1).padStart(2, "0"),
    title: item.title.replace(/^first 24 hours after .+$/i, "First 24 Hours").replace(/^first week of recovery$/i, "First Week"),
    body: item.body,
  }));
}

function isRecoverySection(heading: string | null): boolean {
  if (!heading) return false;
  const lower = heading.toLowerCase();
  return lower.includes("recovery") && !lower.includes("(pdf)");
}

function isGlanceSection(heading: string | null): boolean {
  if (!heading) return false;
  return heading.toLowerCase().includes("at a glance") || heading.toLowerCase().includes("quick facts");
}

function isComparisonSection(heading: string | null): boolean {
  if (!heading) return false;
  const lower = heading.toLowerCase();
  return lower.includes(" vs ") || lower.includes("versus") || lower.includes("compare") || lower.includes("difference");
}

function filterIntroParagraphs(slug: string, paragraphs: string[]): string[] {
  return paragraphs
    .filter((p) => {
      if (p.length < 40) return false;
      if (BOILERPLATE_PATTERNS.some((re) => re.test(p))) return false;
      if (slug !== "brazilian-butt-lift-bbl" && /during a bbl procedure at tampa bay/i.test(p)) return false;
      return true;
    })
    .slice(0, 3);
}

function getIntroTitle(page: PageContent, shortTitle: string): string {
  const first = page.sections[0];
  const h4 = first?.blocks.find((b) => b.type === "h4");
  if (h4 && h4.type === "h4") {
    const t = h4.text.trim();
    if (t.length < 80) return t;
  }
  return shortTitle;
}

function getPageCategory(slug: string): "body" | "breast" | "women" | "men" | "resources" | "hub" {
  if (HUB_SLUGS.has(slug)) return "hub";
  if (slug.includes("breast") || slug === "breasts") return "breast";
  if (slug.startsWith("male-") || slug === "men" || slug === "adult-circumcision" || slug === "pwag")
    return "men";
  if (slug === "labiaplasty" || slug === "mommy-makeover" || slug === "feminine-waist-contouring") return "women";
  if (["faqs", "financing", "travel", "recovery", "resources", "out-of-town"].some((k) => slug.includes(k)))
    return "resources";
  return "body";
}

export function getCombinationGroups(slug: string): { title: string; intro: string; groups: ComboGroup[] } {
  const category = getPageCategory(slug);
  const intro =
    "Many patients combine procedures for more comprehensive results in a single surgical plan. Explore related options below.";

  if (category === "breast") {
    return { title: "Commonly Combined Breast Procedures", intro, groups: breastCombinationGroups };
  }
  if (category === "men") {
    return { title: "Commonly Combined Men's Procedures", intro, groups: menCombinationGroups };
  }
  if (category === "women") {
    return { title: "Commonly Combined Women's Procedures", intro, groups: womenCombinationGroups };
  }
  if (category === "resources") {
    return { title: "Explore Procedures & Resources", intro, groups: resourcesCombinationGroups };
  }
  return { title: "Commonly Combined Procedures", intro, groups: bodyCombinationGroups };
}

export function getDefaultRelated(slug: string, path: string): RelatedItem[] {
  for (const item of siteNav.main) {
    if (item.href === path && item.children?.length) {
      return item.children
        .filter((c) => c.href !== path)
        .slice(0, 8)
        .map((c) => ({
          title: c.label,
          description: `Learn more about ${c.label.toLowerCase()} at Tampa Bay Body Sculpting.`,
          href: c.href,
        }));
    }

    const inGroup = item.children?.some((c) => c.href === path);
    if (inGroup && item.children) {
      return item.children
        .filter((c) => c.href !== path)
        .slice(0, 8)
        .map((c) => ({
          title: c.label,
          description: `Learn more about ${c.label.toLowerCase()} at Tampa Bay Body Sculpting.`,
          href: c.href,
        }));
    }
  }

  return defaultRelatedLinks
    .filter((l) => !l.href.includes(slug))
    .slice(0, 8)
    .map((l) => ({ title: l.title, description: l.description, href: l.href }));
}

export function preparePremiumPageData(page: PageContent) {
  const heroTitle = getPageHeroTitle(page);
  const eyebrow = getPageEyebrow(page.slug);
  const heroImage = getPageHeroImage(page);
  const overview = extractOverviewParagraphs(page);
  const heroLead = overview[0] || page.description;
  const shortTitle = heroTitle.split(" in ")[0]?.trim() || heroTitle;

  const introParagraphs = filterIntroParagraphs(
    page.slug,
    overview.length > 1 ? overview.slice(1) : page.description ? [page.description] : []
  );

  const sections = preparePremiumPageSections(page, overview);

  let glance: { sectionTitle: string; groups: GlanceGroup[] } | null = null;
  let recovery: { title: string; steps: RecoveryStep[] } | null = null;
  let comparison: ComparisonData | null = null;
  let procedureDirectory: { title: string; intro: string; items: DirectoryItem[] } | null = null;

  const remaining: ContentSection[] = [];

  for (const section of sections) {
    const heading = section.heading || "";

    if (isGlanceSection(heading) || (!glance && extractGlanceGroups(section.blocks))) {
      const groups = extractGlanceGroups(section.blocks);
      if (groups) {
        glance = { sectionTitle: heading || `${shortTitle} At A Glance`, groups };
        continue;
      }
    }

    if (isRecoverySection(heading)) {
      const steps = extractRecoverySteps(section.blocks);
      if (steps) {
        recovery = { title: heading, steps };
        continue;
      }
    }

    if (isComparisonSection(heading)) {
      const pairs = extractProcedurePairs(section.blocks);
      if (pairs && pairs.length >= 2) {
        comparison = {
          title: heading,
          intro: "Compare your options to understand which approach best fits your goals.",
          columns: pairs.slice(0, 2).map((p) => ({ title: p.title, body: p.body })),
        };
        continue;
      }
    }

    if (HUB_SLUGS.has(page.slug)) {
      const pairs = extractProcedurePairs(section.blocks);
      if (pairs && pairs.length >= 2) {
        if (!procedureDirectory) {
          procedureDirectory = {
            title: heading || "Procedures We Guide Patients Through",
            intro:
              "Browse by category. Each procedure links to a dedicated guide with candidacy, recovery, and what to expect.",
            items: [],
          };
        }
        procedureDirectory.items.push(...pairs);
        continue;
      }
    }

    remaining.push(section);
  }

  if (!glance) {
    for (const section of [...remaining]) {
      const groups = extractGlanceGroups(section.blocks);
      if (groups) {
        glance = { sectionTitle: section.heading || `${shortTitle} At A Glance`, groups };
        const idx = remaining.indexOf(section);
        if (idx >= 0) remaining.splice(idx, 1);
        break;
      }
    }
  }

  const cardRelated = pickRelatedCards(page.cards, page.path).map((c) => ({
    title: c.title,
    description: c.description,
    href: c.href,
  }));

  const related = cardRelated.length > 0 ? cardRelated : getDefaultRelated(page.slug, page.path);
  const combinations = getCombinationGroups(page.slug);
  const category = getPageCategory(page.slug);
  const faqs = normalizeFaqs(page.faqs || []);

  const shouldShowDefaultRecovery =
    !recovery &&
    !HUB_SLUGS.has(page.slug) &&
    category !== "resources" &&
    !page.slug.includes("gallery");

  const recoveryBlock = recovery
    ? { ...recovery, intro: premiumRecoveryIntro, tips: premiumRecoveryTips }
    : shouldShowDefaultRecovery
      ? {
          title: `What To Expect After ${shortTitle}`,
          steps: genericRecoverySteps,
          intro: premiumRecoveryIntro,
          tips: premiumRecoveryTips,
        }
      : null;

  const isFemaleBaGallery = page.slug === "female-b-a-gallery";
  const isGallery =
    page.slug.includes("gallery") ||
    isFemaleBaGallery ||
    page.slug === "male-surgery-gallery" ||
    page.slug === "breast-surgery-gallery";

  const gallerySectionHeading =
    page.sections.find((s) => (s.heading || "").toLowerCase().includes("before and after"))?.heading ??
    `${heroTitle} — before & after`;

  return {
    page,
    heroTitle,
    eyebrow,
    heroImage,
    heroAlt: page.hero?.alt || heroTitle,
    heroLead,
    shortTitle,
    intro: {
      eyebrow: `What is ${shortTitle}?`,
      title: getIntroTitle(page, shortTitle),
      paragraphs: introParagraphs.length > 0 ? introParagraphs : [page.description].filter(Boolean),
    },
    glance,
    comparison,
    combinations,
    recovery: recoveryBlock,
    procedureDirectory,
    contentSections: remaining,
    related,
    whyChoose: premiumWhyChoose,
    faqs,
    isFemaleBaGallery,
    isGallery,
    gallerySectionHeading,
    finalCtaTitle: `Ready To Explore ${shortTitle} In Tampa Bay?`,
  };
}
