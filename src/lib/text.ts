/** Capitalize the first letter of each word for headings and page titles. */
export function toTitleCase(text: string): string {
  return text.replace(/\S+/g, (word) => {
    if (/^\d/.test(word)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}
