/** Analytics IDs from environment — set in production (see .env.example). */
export function getAnalyticsConfig() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() || null;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null;

  return { gtmId, gaId };
}

export function hasAnalyticsConfigured() {
  const { gtmId, gaId } = getAnalyticsConfig();
  return Boolean(gtmId || gaId);
}

export const COOKIE_CONSENT_KEY = "tbbs_cookie_consent";
export const COOKIE_CONSENT_EVENT = "tbbs-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";
