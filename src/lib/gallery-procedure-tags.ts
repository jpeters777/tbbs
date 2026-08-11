const TAG_RULES: { label: string; pattern: RegExp }[] = [
  { label: "Lipo 360", pattern: /\blipo\s*360\b/i },
  { label: "Ab Sculpting", pattern: /6\s*pack|ab\s*sculpt|abdominal definition|abdominal etching/i },
  { label: "Chin Lipo", pattern: /\bchin liposuction\b|\bchin lipo\b/i },
  { label: "Gynecomastia", pattern: /\bgynecomastia\b|\bchest reduction\b/i },
  { label: "Flanks", pattern: /\bflanks\b/i },
  { label: "Tummy Tuck", pattern: /\btummy tuck\b|\babdominoplasty\b/i },
  { label: "Male Body", pattern: /\bmale\b/i },
];

/** Derive visible procedure tags from gallery image alt text. */
export function procedureTagsFromAlt(alt: string): string[] {
  const tags = TAG_RULES.filter(({ pattern }) => pattern.test(alt)).map(({ label }) => label);
  return tags.length > 0 ? tags : ["Body Contouring"];
}
