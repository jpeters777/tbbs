"use client";

import Link from "next/link";
import { trackCherryClick } from "@/lib/analytics";
import { CHERRY_APPLY_URL } from "@/lib/site";

type PremiumFinancingCtaProps = {
  /** Analytics label, e.g. "breast-augmentation-recovery". */
  location: string;
  procedureLabel?: string;
};

/** Cherry apply + financing link — placed near recovery/pricing on procedure pages. */
export function PremiumFinancingCta({ location, procedureLabel }: PremiumFinancingCtaProps) {
  return (
    <aside className="premium-financing-cta" aria-label="Financing options">
      <div className="premium-financing-cta-inner">
        <div>
          <p className="premium-eyebrow">Financing</p>
          <h3 className="premium-financing-cta-title">
            {procedureLabel
              ? `Flexible payment plans for ${procedureLabel}`
              : "Flexible payment plans for cosmetic surgery"}
          </h3>
          <p className="premium-financing-cta-copy">
            Transparent pricing is reviewed during your complimentary consultation. Apply with Cherry in minutes for
            flexible monthly payments—many patients move forward sooner rather than waiting to save.
          </p>
        </div>
        <div className="premium-financing-cta-actions">
          <a
            href={CHERRY_APPLY_URL}
            className="btn btn-primary premium-btn-glow"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackCherryClick(location)}
          >
            Apply with Cherry
          </a>
          <Link href="/financing-options" className="btn btn-outline !border-white/25 !text-white">
            View financing options
          </Link>
        </div>
      </div>
    </aside>
  );
}
