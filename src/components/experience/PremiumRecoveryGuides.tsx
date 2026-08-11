"use client";

import Link from "next/link";
import { useEffect } from "react";
import { RichText } from "@/components/RichText";
import type { CuratedCard } from "@/lib/premium-curated/types";

type NavItem = { href: string; label: string };

export function PremiumRecoveryGuides({
  items,
  nav,
  pagePath,
}: {
  items: CuratedCard[];
  nav: NavItem[];
  pagePath: string;
}) {
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      const guides = document.querySelectorAll<HTMLDetailsElement>(".premium-recovery-guide");

      if (id) {
        guides.forEach((guide) => {
          guide.open = guide.id === id;
        });
        const target = document.getElementById(id);
        if (target instanceof HTMLDetailsElement && target.open) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      const first = guides[0];
      if (first) first.open = true;
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div className="premium-recovery-guides mt-10">
      {nav.length ? (
        <nav className="premium-recovery-nav" aria-label="Jump to procedure guides">
          {nav.map((link) => (
            <a key={link.href} href={link.href} className="premium-recovery-nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}

      {items.map((item, index) =>
        item.phases?.length ? (
          <details
            key={item.title}
            id={item.id}
            className="premium-recovery-guide"
            open={index === 0}
          >
            <summary className="premium-recovery-guide-summary-row">
              <span className="premium-recovery-guide-num">{String(index + 1).padStart(2, "0")}</span>
              <div className="premium-recovery-guide-heading">
                <span className="premium-recovery-guide-title">{item.title}</span>
                <RichText
                  as="p"
                  className="premium-recovery-guide-lead"
                  text={item.body}
                  autoLinkKeywords
                  currentPath={pagePath}
                />
              </div>
              <span className="premium-recovery-guide-toggle" aria-hidden="true" />
            </summary>

            <div className="premium-recovery-guide-panel">
              {item.highlights?.length ? (
                <div className="premium-recovery-keypoints">
                  <p className="premium-recovery-label">Key points</p>
                  <ul className="premium-checklist">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <RichText
                          as="span"
                          text={highlight}
                          autoLinkKeywords
                          currentPath={pagePath}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="premium-recovery-timeline-wrap">
                <p className="premium-recovery-label">Recovery timeline</p>
                <ol className="premium-recovery-timeline">
                  {item.phases.map((phase) => (
                    <li key={phase.label} className="premium-recovery-timeline-step">
                      <h4>{phase.label}</h4>
                      <RichText
                        as="p"
                        text={phase.text}
                        autoLinkKeywords
                        currentPath={pagePath}
                      />
                    </li>
                  ))}
                </ol>
              </div>

              {item.href ? (
                <Link href={item.href} className="premium-recovery-guide-link">
                  View full recovery section →
                </Link>
              ) : null}
            </div>
          </details>
        ) : null
      )}
    </div>
  );
}
