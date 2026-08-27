import { CHERRY_APPLY_URL } from "@/lib/site";
import { normalizePublicPath } from "@/lib/public-paths";

/** Internal keyword → page href map for homepage and rich text (longest phrases first). */
export type KeywordLink = { text: string; href: string };

export const HOMEPAGE_KEYWORD_LINKS: KeywordLink[] = [
  { text: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" },
  { text: "Brazilian butt lifts", href: "/brazilian-butt-lift-bbl" },
  { text: "Brazilian butt lift", href: "/brazilian-butt-lift-bbl" },
  { text: "Brazilian Butt Lift", href: "/brazilian-butt-lift-bbl" },
  { text: "Arm Lipo 360 / Arm Lift", href: "/arm-lipo-360-arm-lift" },
  { text: "chin and neck liposuction", href: "/female-chin-liposuction" },
  { text: "Chin and neck liposuction", href: "/female-chin-liposuction" },
  { text: "Chin & Neck Liposuction", href: "/female-chin-liposuction" },
  { text: "Male chin liposuction", href: "/male-chin-liposuction" },
  { text: "male body contouring", href: "/men" },
  { text: "Male body contouring", href: "/men" },
  { text: "men's body contouring", href: "/men" },
  { text: "Men's body contouring", href: "/men" },
  { text: "men's procedures", href: "/men" },
  { text: "Men's procedures", href: "/men" },
  { text: "Men's Procedures", href: "/men" },
  { text: "men's options", href: "/men" },
  { text: "men's", href: "/men" },
  { text: "Men's", href: "/men" },
  { text: "Male Body Sculpting", href: "/men" },
  { text: "male body sculpting", href: "/men" },
  { text: "Male Abdominal Sculpting", href: "/male-abdominal-sculpting" },
  { text: "abdominal sculpting", href: "/male-abdominal-sculpting" },
  { text: "Male Chest Reduction", href: "/male-chest-reduction" },
  { text: "gynecomastia surgery", href: "/male-chest-reduction" },
  { text: "Male Lipo 360", href: "/male-liposuction-360" },
  { text: "Male Tummy Tuck", href: "/male-tummy-tuck" },
  { text: "Male tummy tuck", href: "/male-tummy-tuck" },
  { text: "Adult Circumcision", href: "/adult-circumcision" },
  { text: "Adult circumcision", href: "/adult-circumcision" },
  { text: "Feminine Waist Contouring", href: "/feminine-waist-contouring" },
  { text: "waist contouring", href: "/feminine-waist-contouring" },
  { text: "Breast Implant Exchange", href: "/breast-implant-exchange" },
  { text: "implant exchange", href: "/breast-implant-exchange" },
  { text: "Breast Rejuvenation", href: "/breast-rejuvenation" },
  { text: "Breast Augmentation", href: "/breast-augmentation" },
  { text: "breast augmentation", href: "/breast-augmentation" },
  { text: "Breast Reduction", href: "/breast-reduction" },
  { text: "Breast Revision", href: "/breast-revision" },
  { text: "Breast Lift", href: "/breast-lift" },
  { text: "Breast Procedures", href: "/breasts" },
  { text: "breast surgery", href: "/breasts" },
  { text: "Mommy Makeover", href: "/mommy-makeover" },
  { text: "Thigh Liposuction", href: "/thigh-liposuction" },
  { text: "Thigh liposuction", href: "/thigh-liposuction" },
  { text: "Arm Liposuction", href: "/arm-lipo-360-arm-lift" },
  { text: "Arm liposuction", href: "/arm-lipo-360-arm-lift" },
  { text: "Chin Liposuction", href: "/female-chin-liposuction" },
  { text: "body contouring", href: "/liposuction" },
  { text: "Body contouring", href: "/liposuction" },
  { text: "women's body contouring", href: "/women" },
  { text: "Women's body contouring", href: "/women" },
  { text: "women's", href: "/women" },
  { text: "Women's", href: "/women" },
  { text: "Lipo 360", href: "/liposuction-360" },
  { text: "Tummy Tuck", href: "/tummy-tuck" },
  { text: "tummy tuck", href: "/tummy-tuck" },
  { text: "Labiaplasty", href: "/labiaplasty" },
  { text: "Gynecomastia", href: "/male-chest-reduction" },
  { text: "gynecomastia", href: "/male-chest-reduction" },
  { text: "financing options", href: "/financing-options" },
  { text: "Financing options", href: "/financing-options" },
  { text: "financing guidance", href: "/financing-options" },
  { text: "Apply with Cherry", href: CHERRY_APPLY_URL },
  { text: "Cherry financing", href: CHERRY_APPLY_URL },
  { text: "Cherry portal", href: CHERRY_APPLY_URL },
  { text: "Cherry", href: CHERRY_APPLY_URL },
  { text: "Travel planning", href: "/travel-information" },
  { text: "travel planning", href: "/travel-information" },
  { text: "travel resources", href: "/travel-information" },
  { text: "traveling patients", href: "/travel-information" },
  { text: "Traveling patients", href: "/travel-information" },
  { text: "Recovery resources", href: "/recovery-guides" },
  { text: "recovery resources", href: "/recovery-guides" },
  { text: "Follow-up care", href: "/recovery-guides" },
  { text: "Local accommodations", href: "/out-of-town-patient-guide" },
  { text: "out-of-town patients", href: "/out-of-town-patient-guide" },
  { text: "facial procedures", href: "/female-chin-liposuction" },
  { text: "liposuction", href: "/liposuction" },
  { text: "Liposuction", href: "/liposuction" },
  { text: "BBL", href: "/brazilian-butt-lift-bbl" },
  { text: "abdomen, chest, flanks, and back", href: "/men" },
  { text: "complimentary virtual consultations", href: "/contact" },
  { text: "complimentary virtual consultation", href: "/contact" },
  { text: "complimentary consultation", href: "/contact" },
  { text: "Virtual consultations", href: "/contact" },
  { text: "breast lift", href: "/breast-lift" },
  { text: "FAQs", href: "/faqs" },
  { text: "Women", href: "/women" },
  { text: "Men", href: "/men" },
  { text: "mommy makeover", href: "/mommy-makeover" },
  { text: "Mommy makeover", href: "/mommy-makeover" },
  { text: "breast reduction", href: "/breast-reduction" },
  { text: "gynecomastia treatment", href: "/male-chest-reduction" },
  { text: "arm and thigh liposuction", href: "/thigh-liposuction" },
  { text: "thigh liposuction", href: "/thigh-liposuction" },
  { text: "virtual consultation", href: "/contact" },
  { text: "virtual consultations", href: "/contact" },
  { text: "recovery resources", href: "/recovery-guides" },
  { text: "Recovery guides", href: "/recovery-guides" },
  { text: "travel information", href: "/travel-information" },
  { text: "out-of-town patient", href: "/out-of-town-patient-guide" },
  { text: "out-of-town patient guide", href: "/out-of-town-patient-guide" },
  { text: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" },
  { text: "male liposuction", href: "/male-liposuction-360" },
  { text: "Male liposuction", href: "/male-liposuction-360" },
  { text: "abdominoplasty", href: "/tummy-tuck" },
  { text: "Abdominoplasty", href: "/tummy-tuck" },
  { text: "abdominal etching", href: "/male-abdominal-sculpting" },
  { text: "Abdominal etching", href: "/male-abdominal-sculpting" },
  { text: "six-pack liposuction", href: "/male-abdominal-sculpting" },
  { text: "Gynecomastia surgery", href: "/male-chest-reduction" },
  { text: "breast revision", href: "/breast-revision" },
  { text: "breast implant exchange", href: "/breast-implant-exchange" },
  { text: "chin liposuction", href: "/female-chin-liposuction" },
  { text: "female chin liposuction", href: "/female-chin-liposuction" },
  { text: "Female Chin Liposuction", href: "/female-chin-liposuction" },
  { text: "arm lipo", href: "/arm-lipo-360-arm-lift" },
  { text: "Arm Lipo 360", href: "/arm-lipo-360-arm-lift" },
  { text: "resources page", href: "/resources" },
  { text: "Resources", href: "/resources" },
  { text: "recovery guides", href: "/recovery-guides" },
  { text: "Recovery Guides", href: "/recovery-guides" },
  { text: "financing", href: "/financing-options" },
  { text: "women's procedures", href: "/women" },
  { text: "Women's Procedures", href: "/women" },
  { text: "female body contouring", href: "/women" },
  { text: "Female body contouring", href: "/women" },
  { text: "male chest reduction", href: "/male-chest-reduction" },
  { text: "Male Chest Reduction", href: "/male-chest-reduction" },
];

export type TextSpan =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

/** Drop keyword links that point to the page being viewed (avoids self-referential highlights). */
export function filterKeywordLinksForPage(
  keywords: KeywordLink[],
  currentPath?: string
): KeywordLink[] {
  if (!currentPath) return keywords;
  const normalized = normalizePublicPath(
    currentPath.length > 1 && currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath.startsWith("/")
        ? currentPath
        : `/${currentPath}`
  );

  return keywords.filter((keyword) => {
    const hrefBase = keyword.href.split("#")[0]!;
    if (hrefBase.startsWith("http")) return true;
    return normalizePublicPath(hrefBase) !== normalized;
  });
}

/** Procedure pages with a dedicated #recovery section for deep linking. */
const PROCEDURE_RECOVERY_PATHS = new Set([
  "/liposuction",
  "/liposuction-360",
  "/brazilian-butt-lift-bbl",
  "/feminine-waist-contouring",
  "/tummy-tuck",
  "/mommy-makeover",
  "/breast-augmentation",
  "/breast-lift",
  "/breast-reduction",
  "/breast-revision",
  "/breast-implant-exchange",
  "/breast-rejuvenation",
  "/breasts",
  "/female-chin-liposuction",
  "/male-chin-liposuction",
  "/male-liposuction-360",
  "/male-chest-reduction",
  "/male-tummy-tuck",
  "/male-abdominal-sculpting",
  "/adult-circumcision",
  "/labiaplasty",
  "/thigh-liposuction",
  "/arm-lipo-360-arm-lift",
  "/women",
  "/men",
]);

export function withProcedureRecoveryAnchor(href: string): string {
  const base = href.split("#")[0]!;
  if (!PROCEDURE_RECOVERY_PATHS.has(base)) return href;
  return `${base}#recovery`;
}

/** On the recovery guides hub, procedure keywords link to each page's recovery section. */
export function applyRecoveryGuideLinks(links: KeywordLink[]): KeywordLink[] {
  return links.map((link) => ({
    ...link,
    href: withProcedureRecoveryAnchor(link.href),
  }));
}

export function getPageKeywordLinks(currentPath?: string): KeywordLink[] {
  const filtered = filterKeywordLinksForPage(HOMEPAGE_KEYWORD_LINKS, currentPath);
  const normalized =
    currentPath && currentPath.length > 1 && currentPath.endsWith("/")
      ? normalizePublicPath(currentPath.slice(0, -1))
      : currentPath
        ? normalizePublicPath(currentPath.startsWith("/") ? currentPath : `/${currentPath}`)
        : undefined;

  let links = filtered;
  if (normalized === "/women" || normalized === "/breasts") {
    links = links.map((link) => {
      if (
        link.href.split("#")[0] === "/liposuction" &&
        (link.text === "body contouring" || link.text === "Body contouring")
      ) {
        return { ...link, href: "/women" };
      }
      return link;
    });
  }
  if (
    normalized &&
    (normalized.startsWith("/male-") || normalized === "/men")
  ) {
    links = links.map((link) => {
      if (link.href.split("#")[0] === "/female-chin-liposuction") {
        if (link.text === "Chin Liposuction" || link.text === "chin liposuction") {
          return { ...link, href: "/male-chin-liposuction" };
        }
        if (link.text === "facial procedures") {
          return { ...link, href: "/male-chin-liposuction" };
        }
      }
      if (
        link.href.split("#")[0] === "/liposuction" &&
        (link.text === "body contouring" || link.text === "Body contouring")
      ) {
        return { ...link, href: "/men" };
      }
      return link;
    });
  }

  if (normalized === "/recovery-guides") {
    return applyRecoveryGuideLinks(links);
  }
  return links;
}

/** True when the match is a whole word/phrase, not a substring (e.g. "men" in "complimentary"). */
function isWholeWordMatch(text: string, start: number, end: number): boolean {
  const isWordChar = (ch: string) => /[a-zA-Z0-9]/.test(ch);
  const isApostrophe = (ch: string) => ch === "'" || ch === "\u2019";
  if (start > 0 && isWordChar(text[start - 1]!)) return false;
  if (end < text.length && isWordChar(text[end]!)) return false;
  // Do not match "Men" inside "Men's" / "Women" inside "Women's"
  if (
    end + 1 < text.length &&
    isApostrophe(text[end]!) &&
    /[sS]/.test(text[end + 1]!)
  ) {
    return false;
  }
  return true;
}

/** Split text into plain and linked spans; longest non-overlapping keyword matches win. */
export function splitTextByKeywordLinks(
  text: string,
  keywords: KeywordLink[] = HOMEPAGE_KEYWORD_LINKS
): TextSpan[] {
  type Match = { start: number; end: number; href: string; value: string };

  const matches: Match[] = [];

  for (const keyword of keywords) {
    const search = keyword.text.toLowerCase();
    const lower = text.toLowerCase();
    let from = 0;

    while (from < text.length) {
      const idx = lower.indexOf(search, from);
      if (idx === -1) break;
      const end = idx + keyword.text.length;
      if (isWholeWordMatch(text, idx, end)) {
        matches.push({
          start: idx,
          end,
          href: keyword.href,
          value: text.slice(idx, end),
        });
      }
      from = idx + 1;
    }
  }

  matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));

  const selected: Match[] = [];
  let cursor = 0;
  for (const match of matches) {
    if (match.start < cursor) continue;
    selected.push(match);
    cursor = match.end;
  }

  if (!selected.length) return [{ type: "text", value: text }];

  const spans: TextSpan[] = [];
  let pos = 0;
  for (const match of selected) {
    if (match.start > pos) {
      spans.push({ type: "text", value: text.slice(pos, match.start) });
    }
    spans.push({ type: "link", value: match.value, href: match.href });
    pos = match.end;
  }
  if (pos < text.length) {
    spans.push({ type: "text", value: text.slice(pos) });
  }

  return spans;
}
