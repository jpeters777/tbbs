"use client";

import { TrackedContactLink } from "@/components/TrackedContactLink";
import { CONSULT_PHOTO_GALLERY_CTA, CONSULT_PHOTO_GALLERY_LEAD } from "@/content/consult-photo-messaging";
import Link from "next/link";

type GalleryConsultBridgeProps = {
  location?: string;
};

/** Gallery hub → contact bridge (photos reviewed at consult, not posted online). */
export function GalleryConsultBridge({ location = "gallery-consult-bridge" }: GalleryConsultBridgeProps) {
  return (
    <aside className="premium-gallery-consult-bridge" aria-label="Get in touch">
      <div className="container premium-gallery-consult-bridge-inner">
        <div>
          <p className="premium-eyebrow">Next step</p>
          <h2 className="premium-section-title max-w-xl">Ready to review results with a provider?</h2>
          <p className="premium-section-intro max-w-2xl mt-3">{CONSULT_PHOTO_GALLERY_LEAD}</p>
        </div>
        <div className="premium-gallery-consult-bridge-actions">
          <TrackedContactLink className="btn btn-primary premium-btn-glow" location={location}>
            {CONSULT_PHOTO_GALLERY_CTA}
          </TrackedContactLink>
          <Link href="/financing-options" className="inline-link self-center">
            Explore financing →
          </Link>
        </div>
      </div>
    </aside>
  );
}
