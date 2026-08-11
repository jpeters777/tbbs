import type { Metadata } from "next";

/** Capitalize the first letter of each word for headings and page titles. */
export function toTitleCase(text: string): string {
  return text.replace(/\S+/g, (word) => {
    if (/^\d/.test(word)) return word;

    const parenAcronym = word.match(/^\(([A-Za-z]{2,})\)$/);
    if (parenAcronym) return `(${parenAcronym[1].toUpperCase()})`;

    if (/^[A-Z]{2,}$/.test(word)) return word;

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

/** Page title that bypasses the root layout template (avoids doubled brand suffix). */
export function absoluteSeoTitle(title: string): Metadata["title"] {
  return { absolute: toTitleCase(title) };
}
