"use client";

import { useEffect, useState } from "react";
import { siteConfig, CONSULT_URL } from "@/lib/site";

export function StickyConsultBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="sticky-consult-bar fixed bottom-0 inset-x-0 z-[60] border-t border-white/10 bg-[rgba(5,5,5,0.92)] backdrop-blur-md"
      role="region"
      aria-label="Book a consultation"
    >
      <div className="container sticky-consult-bar-inner">
        <p className="sticky-consult-bar-text hidden sm:block">
          Ready for a{" "}
          <a
            href={CONSULT_URL}
            className="sticky-consult-bar-link"
            target="_blank"
            rel="noreferrer"
          >
            complimentary
          </a>{" "}
          virtual consultation?
        </p>
        <a href={siteConfig.phoneHref} className="btn btn-outline sticky-consult-bar-btn sticky-consult-bar-call">
          Call now
        </a>
        <a
          href={CONSULT_URL}
          className="btn btn-primary sticky-consult-bar-btn sticky-consult-bar-book shadow-[0_0_32px_rgba(101,235,201,0.25)]"
          target="_blank"
          rel="noreferrer"
        >
          Book free consult
        </a>
      </div>
    </div>
  );
}
