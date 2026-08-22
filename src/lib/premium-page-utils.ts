import type { ContentSection, PageContent } from "@/lib/content";
import { imageSrc } from "@/lib/content";
import { getPublicPathForSlug } from "@/lib/public-paths";
import { SITE_URL } from "@/lib/site";
import { toTitleCase } from "@/lib/text";

const SKIP_SECTION_HEADINGS = [
  "contact us",
  "make a payment",
  "connect with us",
  "subscribe",
  "our blogs",
  "ready to take the next step",
  "frequently asked questions",
  "before & after gallery",
  "before and after gallery",
  "recovery guide",
  "liposuction recovery guide",
  "lipo 360 + bbl recovery guide",
  "lipo360 + bbl recovery guide",
  "lipo360 + brazilian butt lift",
  "testimonial",
  "testamonial",
];

const FAQ_JUNK_PATTERNS = [
  /^ready to learn/i,
  /^why choose tampa bay body sculpting/i,
  /^schedule your complimentary/i,
];

export function getPageHeroTitle(page: PageContent): string {
  const raw = page.h1.split("|")[0]?.trim() || page.title.split("|")[0]?.trim() || page.title;
  return toTitleCase(raw);
}

export function getPageEyebrow(slug: string): string {
  if (slug.includes("gallery")) return "Patient results · Tampa Bay";
  if (slug.includes("breast") || slug === "breasts") return "Breast procedures · Tampa Bay";
  if (slug.startsWith("male-") || slug === "men" || slug === "adult-circumcision")
    return "Men's body sculpting · Tampa Bay";
  if (slug === "women" || slug === "labiaplasty" || slug === "mommy-makeover" || slug === "feminine-waist-contouring")
    return "Women's procedures · Tampa Bay";
  if (["resources", "faqs", "financing", "travel", "recovery", "out-of-town"].some((k) => slug.includes(k)))
    return "Patient resources · Tampa Bay";
  return "Body contouring · Tampa Bay";
}

export function normalizeFaqs(faqs: { q: string; a: string }[]): { q: string; a: string }[] {
  const seen = new Set<string>();
  const out: { q: string; a: string }[] = [];

  for (const faq of faqs) {
    const q = toTitleCase(faq.q.trim());
    const a = faq.a.trim();
    if (!q || !a || a.length < 20) continue;
    if (FAQ_JUNK_PATTERNS.some((p) => p.test(q) || p.test(a))) continue;
    const key = q.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ q, a });
  }

  return out.slice(0, 16);
}

function shouldSkipSection(heading: string | null): boolean {
  if (!heading) return false;
  const lower = heading.toLowerCase();
  return SKIP_SECTION_HEADINGS.some((s) => lower.includes(s));
}

export function extractOverviewParagraphs(page: PageContent): string[] {
  const first = page.sections[0];
  if (!first) return page.description ? [page.description] : [];

  const paras = first.blocks.filter((b) => b.type === "p").map((b) => (b.type === "p" ? b.text : ""));
  const cleaned = paras.filter((t) => t.length > 40 && !t.toLowerCase().startsWith("schedule your"));

  if (cleaned.length >= 1) return cleaned.slice(0, 3);
  return page.description ? [page.description] : [];
}

export function preparePremiumPageSections(
  page: PageContent,
  overviewUsed: string[]
): ContentSection[] {
  const overviewSet = new Set(overviewUsed.map((t) => t.trim()));
  let sections = page.sections.filter((s) => !shouldSkipSection(s.heading));

  if (sections[0] && !sections[0].heading) {
    const blocks = sections[0].blocks.filter(
      (b) => !(b.type === "p" && overviewSet.has(b.text.trim()))
    );
    sections[0] = { ...sections[0], blocks };
    if (!sections[0].blocks.length) sections = sections.slice(1);
  }

  const faqInSections = sections.some((s) =>
    (s.heading || "").toLowerCase().includes("faq")
  );
  if (page.faqs?.length || faqInSections) {
    sections = sections.filter((s) => !(s.heading || "").toLowerCase().includes("faq"));
  }

  return sections;
}

export function pickRelatedCards(
  cards: { title: string; description: string; href: string }[],
  pagePath: string
) {
  const filtered = cards.filter((c) => c.href && c.href !== "#" && !c.title.includes("★"));
  const seenHref = new Set<string>();
  const seenTitle = new Set<string>();

  const scored = filtered
    .map((card) => {
      const pathOnly = card.href.split("#")[0].split("?")[0];
      const isOffPage = pathOnly !== pagePath && pathOnly !== "";
      return { card, pathOnly, isOffPage };
    })
    .filter(({ card }) => {
      const titleKey = card.title.toLowerCase();
      if (seenTitle.has(titleKey)) return false;
      seenTitle.add(titleKey);
      return true;
    })
    .sort((a, b) => Number(b.isOffPage) - Number(a.isOffPage));

  const out: typeof filtered = [];
  for (const { card, pathOnly } of scored) {
    const key = pathOnly || card.href;
    if (seenHref.has(key) && !card.href.includes("#")) continue;
    seenHref.add(key);
    out.push(card);
    if (out.length >= 8) break;
  }
  return out;
}

export function getPageHeroImage(page: PageContent): string {
  return imageSrc(page.hero) || "/images/shutterstock_263340653-b2373a9.jpg";
}

export function getCanonicalUrl(page: PageContent): string {
  return `${SITE_URL}${getPublicPathForSlug(page.slug)}`;
}
