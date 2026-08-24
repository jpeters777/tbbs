"use client";

import Link from "next/link";
import { trackConsultClick } from "@/lib/analytics";
import { CONTACT_URL } from "@/lib/site";
import { CONSULT_PHOTO_GALLERY_CTA, CONSULT_PHOTO_GALLERY_LEAD } from "@/content/consult-photo-messaging";

type GalleryConsultBridgeProps = {
  location?: string;
};

/** Gallery hub → contact bridge (photos reviewed at consult, not posted online). */
export function GalleryConsultBridge({ location = "gallery-consult-bridge" }: GalleryConsultBridgeProps) {
  return (
    <aside className="premium-gallery-consult-bridge" aria-label="Book a consultation">
      <div className="container premium-gallery-consult-bridge-inner">
        <div>
          <p className="premium-eyebrow">Next step</p>
          <h2 className="premium-section-title max-w-xl">Ready to review results with a provider?</h2>
          <p className="premium-section-intro max-w-2xl mt-3">{CONSULT_PHOTO_GALLERY_LEAD}</p>
        </div>
        <div className="premium-gallery-consult-bridge-actions">
          <Link
            href={CONTACT_URL}
            className="btn btn-primary premium-btn-glow"
            onClick={() => trackConsultClick(location)}
          >
            {CONSULT_PHOTO_GALLERY_CTA}
          </Link>
          <Link href="/financing-options" className="inline-link self-center">
            Explore financing →
          </Link>
        </div>
      </div>
    </aside>
  );
}
