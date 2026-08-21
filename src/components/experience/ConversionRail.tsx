import Link from "next/link";
import { TrackedConsultLink } from "@/components/TrackedConsultLink";
import { TrackedPhoneLink } from "@/components/TrackedPhoneLink";

export function ConversionRail({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      className={`premium-rail ${compact ? "premium-rail--compact" : ""}`}
      aria-label="Schedule a consultation"
    >
      <div className="premium-rail-inner">
        <p className="premium-rail-kicker">Next step</p>
        <h3 className="premium-rail-title">Your transformation starts with a conversation</h3>
        <p className="premium-rail-body">
          Complimentary virtual consult. Personalized recommendations. Transparent guidance—no pressure.
        </p>
        <TrackedConsultLink className="btn btn-primary w-full !py-3.5" location="conversion-rail">
          Start free consultation
        </TrackedConsultLink>
        <TrackedPhoneLink className="btn btn-outline w-full !py-3 !border-white/20 !text-white mt-2" location="conversion-rail" />
        <ul className="premium-rail-list">
          <li>Board-certified provider network</li>
          <li>Financing & travel support</li>
          <li>Serving Tampa Bay & out-of-town patients</li>
        </ul>
        <Link href="/faqs" className="premium-rail-link">
          Read FAQs →
        </Link>
      </div>
    </aside>
  );
}
