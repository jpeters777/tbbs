import Link from "next/link";
import { PremiumFinancingCta } from "@/components/experience/PremiumFinancingCta";
import { CONSULT_URL } from "@/lib/site";

type PremiumCostSectionProps = {
  /** Short procedure name for copy, e.g. "BBL" or "Lipo 360". */
  procedureLabel: string;
  /** Analytics location passed to Cherry CTA. */
  location: string;
  /** Optional extra sentence under the intro. */
  detail?: string;
};

/**
 * Investment & financing block for flagship/procedure pages.
 * Keeps pricing transparent without inventing dollar amounts.
 */
export function PremiumCostSection({
  procedureLabel,
  location,
  detail,
}: PremiumCostSectionProps) {
  return (
    <section className="premium-section premium-section--soft" id="cost">
      <div className="container max-w-3xl">
        <p className="premium-eyebrow">Investment</p>
        <h2 className="premium-section-title">{procedureLabel} cost &amp; financing</h2>
        <p className="premium-section-intro mt-4">
          {detail ??
            `Your ${procedureLabel} plan is personalized—cost depends on techniques, combinations, surgeon, facility, and anesthesia. We review clear pricing during your complimentary virtual consultation so you know exactly what is included before you decide.`}
        </p>
        <ul className="premium-checklist mt-6">
          <li>Personalized quote reviewed on your free consult—no obligation</li>
          <li>Flexible monthly payments available through Cherry financing</li>
          <li>Guidance on what is typically included vs. separate facility fees</li>
        </ul>
        <div className="flex flex-wrap gap-3 mt-8">
          <a href={CONSULT_URL} className="btn btn-primary premium-btn-glow" target="_blank" rel="noreferrer">
            Get your pricing consult
          </a>
          <Link href="/financing-options" className="btn btn-outline !border-white/25 !text-white">
            Explore financing
          </Link>
        </div>
        <div className="mt-10">
          <PremiumFinancingCta location={location} procedureLabel={procedureLabel} />
        </div>
      </div>
    </section>
  );
}
