type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Push events to dataLayer / gtag when present (GTM or GA4). Safe no-op on server. */
export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const payload = { event: name, ...params };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function trackPhoneClick(location: string) {
  trackEvent("phone_click", { location, link_type: "tel" });
}

export function trackConsultClick(location: string, procedureInterest?: string) {
  trackEvent("consult_click", {
    location,
    ...(procedureInterest ? { procedure_interest: procedureInterest } : {}),
  });
}

export function trackCherryClick(location: string) {
  trackEvent("cherry_apply_click", { location });
}
