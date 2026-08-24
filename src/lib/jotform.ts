/** Short contact form — name, phone, procedure interest, etc. */
export const JOTFORM_CONTACT_ID = "261329129717057";

/** Full HIPAA virtual consultation intake — medical history, photos, procedures. */
export const JOTFORM_VIRTUAL_CONSULT_ID = "212097230845050";

const CONTACT_EMBED_BASE = `https://hipaa.jotform.com/${JOTFORM_CONTACT_ID}`;
const VIRTUAL_CONSULT_EMBED_BASE = `https://hipaa.jotform.com/${JOTFORM_VIRTUAL_CONSULT_ID}`;

export function buildContactEmbedSrc() {
  return CONTACT_EMBED_BASE;
}

export function buildJotformEmbedSrc(procedureInterest?: string | null) {
  if (!procedureInterest?.trim()) return VIRTUAL_CONSULT_EMBED_BASE;

  const params = new URLSearchParams({
    procedureInterest: procedureInterest.trim(),
  });
  return `${VIRTUAL_CONSULT_EMBED_BASE}?${params.toString()}`;
}

export function buildConsultPageHref(procedureInterest?: string | null) {
  if (!procedureInterest?.trim()) return "/consult";

  const params = new URLSearchParams({ procedureInterest: procedureInterest.trim() });
  return `/consult?${params.toString()}`;
}

export function buildContactPageHref(procedureInterest?: string | null) {
  if (!procedureInterest?.trim()) return "/contact";

  const params = new URLSearchParams({ procedureInterest: procedureInterest.trim() });
  return `/contact?${params.toString()}`;
}
