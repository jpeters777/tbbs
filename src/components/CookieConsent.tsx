"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  hasAnalyticsConfigured,
  type CookieConsentValue,
} from "@/lib/analytics-config";

function publishConsent(value: CookieConsentValue) {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
}

/** Cookie notice — required before analytics scripts load. */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasAnalyticsConfigured()) return;
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    publishConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    publishConsent("declined");
    setVisible(false);
  };

  return (
    <div className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title" aria-live="polite">
      <div className="cookie-consent-inner container">
        <div className="cookie-consent-copy">
          <p id="cookie-consent-title" className="cookie-consent-title">
            This website uses cookies
          </p>
          <p className="cookie-consent-text">
            We use cookies to analyze website traffic and improve your experience. By accepting, you
            agree to our use of analytics cookies. See our{" "}
            <Link href="/privacy-policy" className="cookie-consent-link">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button type="button" className="btn btn-outline cookie-consent-decline" onClick={decline}>
            Decline
          </button>
          <button type="button" className="btn btn-primary cookie-consent-accept" onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
