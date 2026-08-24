import Link from "next/link";
import { trustSignals } from "@/content/premium-home";

/** Shared black trust strip below hero sections. */
export function PremiumTrustStrip() {
  return (
    <section className="premium-trust" aria-label="Why patients trust us">
      <div className="container premium-trust-grid">
        {trustSignals.map((item) => {
          const content = (
            <>
              <p className="premium-trust-label">{item.label}</p>
              <p className="premium-trust-detail">{item.detail}</p>
            </>
          );

          const isInternal = item.href?.startsWith("/");

          return (
            <div key={item.label} className="premium-trust-item">
              {item.href ? (
                isInternal ? (
                  <Link href={item.href} className="premium-trust-link">
                    {content}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="premium-trust-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                )
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
