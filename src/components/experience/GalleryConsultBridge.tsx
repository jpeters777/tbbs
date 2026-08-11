"use client";

import Link from "next/link";
import { trackConsultClick } from "@/lib/analytics";
import { CONSULT_URL } from "@/lib/site";

type GalleryConsultBridgeProps = {
  location?: string;
};

/** Gallery → consult bridge after before/after cases. */
export function GalleryConsultBridge({ location = "gallery-consult-bridge" }: GalleryConsultBridgeProps) {
  return (
    <aside className="premium-gallery-consult-bridge" aria-label="Book a consultation">
      <div className="container premium-gallery-consult-bridge-inner">
        <div>
          <p className="premium-eyebrow">Next step</p>
          <h2 className="premium-section-title max-w-xl">Interested in results like these?</h2>
          <p className="premium-section-intro max-w-2xl mt-3">
            Every patient&apos;s anatomy and goals are different. Schedule a complimentary virtual consultation to
            discuss candidacy, pricing, and a personalized plan with our Tampa Bay concierge team.
          </p>
        </div>
        <div className="premium-gallery-consult-bridge-actions">
          <a
            href={CONSULT_URL}
            className="btn btn-primary premium-btn-glow"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackConsultClick(location)}
          >
            Book free virtual consult
          </a>
          <Link href="/financing-options" className="inline-link self-center">
            Explore financing →
          </Link>
        </div>
      </div>
    </aside>
  );
}
