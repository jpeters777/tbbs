type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ANALYTICS_READY_EVENT = "tbbs-analytics-ready";
const queuedEvents: Array<{ name: string; params: AnalyticsParams }> = [];
let flushTimer: ReturnType<typeof setTimeout> | null = null;

function isGtagReady() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

/** Flush events queued before gtag finished loading. */
export function flushAnalyticsQueue() {
  if (!isGtagReady()) return;

  while (queuedEvents.length > 0) {
    const { name, params } = queuedEvents.shift()!;
    window.gtag!("event", name, params);
  }
}

function scheduleFlush() {
  if (flushTimer || typeof window === "undefined") return;

  let attempts = 0;
  const tick = () => {
    flushAnalyticsQueue();
    attempts += 1;
    if (queuedEvents.length === 0 || attempts >= 20) {
      flushTimer = null;
      return;
    }
    flushTimer = setTimeout(tick, 500);
  };

  flushTimer = setTimeout(tick, 100);
}

if (typeof window !== "undefined") {
  window.addEventListener(ANALYTICS_READY_EVENT, flushAnalyticsQueue);
}

/** Push events to dataLayer / gtag when present (GTM or GA4). Safe no-op on server. */
export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const payload = { event: name, ...params };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (isGtagReady()) {
    window.gtag!("event", name, params);
    return;
  }

  queuedEvents.push({ name, params });
  scheduleFlush();
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

export { ANALYTICS_READY_EVENT };
