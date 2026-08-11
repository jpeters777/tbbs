"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  CONSULT_URL,
  getNavDropdownItems,
  hasNavDropdown,
  siteConfig,
  type NavItem,
} from "@/lib/site";
import { TrackedPhoneLink } from "@/components/TrackedPhoneLink";

/** Fast paths surfaced at the top of the mobile menu — procedures first, then hubs. */
const MOBILE_QUICK_LINKS = [
  { label: "Lipo 360", href: "/liposuction-360" },
  { label: "Tummy Tuck", href: "/tummy-tuck" },
  { label: "BBL", href: "/brazilian-butt-lift-bbl" },
  { label: "Breast", href: "/breasts" },
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
] as const;

function navSectionForPath(pathname: string, items: NavItem[]): string | null {
  for (const item of items) {
    if (item.href === "/" && pathname === "/") return item.label;
    if (item.href !== "/" && (pathname === item.href || pathname.startsWith(`${item.href}/`))) {
      return item.label;
    }
    const children = getNavDropdownItems(item);
    for (const child of children) {
      if (pathname === child.href || pathname.startsWith(`${child.href}/`)) {
        return item.label;
      }
    }
  }
  return null;
}

type MobileNavProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileNav({ open, pathname, onClose }: MobileNavProps) {
  const activeSection = useMemo(
    () => navSectionForPath(pathname, siteConfig.main),
    [pathname]
  );
  const [expanded, setExpanded] = useState<string | null>(activeSection);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) setExpanded(activeSection);
  }, [open, activeSection]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [open]);

  if (!open || !mounted) return null;

  const toggleSection = (label: string) => {
    setExpanded((current) => (current === label ? null : label));
  };

  return createPortal(
    <div
      id="mobile-site-menu"
      className="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <button type="button" className="mobile-nav-backdrop" aria-label="Close menu" onClick={onClose} />
      <div className="mobile-nav-panel">
        <div className="mobile-nav-quick">
          <p className="mobile-nav-quick-label">Quick find</p>
          <div className="mobile-nav-quick-grid">
            {MOBILE_QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-quick-link${
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? " is-active"
                    : ""
                }`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <nav className="mobile-nav-sections" aria-label="Primary">
          {siteConfig.main.map((item) => {
            const hasDropdown = hasNavDropdown(item);
            const isExpanded = expanded === item.label;

            if (!hasDropdown) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-row mobile-nav-row--link${
                    pathname === item.href ? " is-active" : ""
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href} className="mobile-nav-section">
                <button
                  type="button"
                  className={`mobile-nav-row mobile-nav-row--toggle${isExpanded ? " is-open" : ""}${
                    activeSection === item.label ? " is-active" : ""
                  }`}
                  aria-expanded={isExpanded}
                  onClick={() => toggleSection(item.label)}
                >
                  <span>{item.label}</span>
                  <span className="mobile-nav-chevron" aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                {isExpanded ? (
                  <div className="mobile-nav-children">
                    <Link href={item.href} className="mobile-nav-hub-link" onClick={onClose}>
                      View {item.label} hub →
                    </Link>
                    {item.groups?.length
                      ? item.groups.map((group) => (
                          <div key={group.label} className="mobile-nav-group">
                            <p className="mobile-nav-group-label">{group.label}</p>
                            {group.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`mobile-nav-child-link${
                                  pathname === child.href ? " is-active" : ""
                                }`}
                                onClick={onClose}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))
                      : item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`mobile-nav-child-link${
                              pathname === child.href ? " is-active" : ""
                            }`}
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="mobile-nav-footer">
          <TrackedPhoneLink className="mobile-nav-phone" location="header-mobile" onClick={onClose} />
          <a
            href={CONSULT_URL}
            className="btn btn-primary mobile-nav-consult premium-btn-glow"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
          >
            Free virtual consult
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
