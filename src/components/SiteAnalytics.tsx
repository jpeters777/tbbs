"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  getAnalyticsConfig,
  hasAnalyticsConfigured,
  type CookieConsentValue,
} from "@/lib/analytics-config";
import { ANALYTICS_READY_EVENT, flushAnalyticsQueue } from "@/lib/analytics";

function readConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return stored === "accepted" || stored === "declined" ? stored : null;
}

/** Loads GTM and/or GA4 after the visitor accepts cookies. */
export function SiteAnalytics() {
  const { gtmId, gaId } = getAnalyticsConfig();
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);

  useEffect(() => {
    setConsent(readConsent());

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentValue>).detail;
      setConsent(detail);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsent);
  }, []);

  if (!hasAnalyticsConfigured() || consent !== "accepted") {
    return null;
  }

  return (
    <>
      {gtmId ? (
        <>
          <Script id="gtm-loader" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}
      {!gtmId && gaId ? (
        <>
          <Script id="ga4-config" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${gaId}');window.dispatchEvent(new Event('${ANALYTICS_READY_EVENT}'));`}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
            onLoad={() => {
              flushAnalyticsQueue();
              window.dispatchEvent(new Event(ANALYTICS_READY_EVENT));
            }}
          />
        </>
      ) : null}
    </>
  );
}
