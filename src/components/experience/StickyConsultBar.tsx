"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONSULT_URL } from "@/lib/site";
import { TrackedPhoneLink } from "@/components/TrackedPhoneLink";
import { TrackedConsultLink } from "@/components/TrackedConsultLink";
import { useMobileChrome } from "@/components/MobileChromeProvider";

export function StickyConsultBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const { suppressStickyBar } = useMobileChrome();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/consult" || !visible || suppressStickyBar) return null;

  return (
    <div
      className="sticky-consult-bar fixed bottom-0 inset-x-0 z-[60] border-t border-white/10 bg-[rgba(5,5,5,0.92)] backdrop-blur-md"
      role="region"
      aria-label="Book a consultation"
    >
      <div className="container sticky-consult-bar-inner">
        <p className="sticky-consult-bar-text hidden sm:block">
          Ready for a{" "}
          <Link href={CONSULT_URL} className="sticky-consult-bar-link">
            complimentary
          </Link>{" "}
          virtual consultation?
        </p>
        <TrackedPhoneLink
          className="btn btn-outline sticky-consult-bar-btn sticky-consult-bar-call"
          location="sticky-bar"
        >
          Call
        </TrackedPhoneLink>
        <TrackedConsultLink
          className="btn btn-primary sticky-consult-bar-btn sticky-consult-bar-book shadow-[0_0_32px_rgba(101,235,201,0.25)]"
          location="sticky-bar"
        >
          Book consult
        </TrackedConsultLink>
      </div>
    </div>
  );
}
