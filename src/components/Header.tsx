"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { hasNavDropdown, siteConfig, type NavItem } from "@/lib/site";
import { TrackedPhoneLink } from "@/components/TrackedPhoneLink";
import { TrackedContactLink } from "@/components/TrackedContactLink";
import { MobileNav } from "@/components/MobileNav";
import { useMobileChrome } from "@/components/MobileChromeProvider";

function DesktopDropdown({ item }: { item: NavItem }) {
  if (item.groups?.length) {
    return (
      <div className="absolute right-0 top-full min-w-[280px] border border-[var(--color-border)] bg-black py-2 shadow-xl">
        {item.groups.map((group, groupIdx) => (
          <div key={group.label} className={groupIdx > 0 ? "mt-2 border-t border-[var(--color-border)] pt-2" : ""}>
            <p
              className="px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.12em] text-white/45"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {group.label}
            </p>
            {group.children.map((child, childIdx) => (
              <Link
                key={`${item.label}-${group.label}-${childIdx}-${child.href}`}
                href={child.href}
                className="block px-4 py-2 text-sm text-white/85 hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="mt-2 border-t border-[var(--color-border)] pt-2">
          <Link
            href={item.href}
            className="block px-4 py-2 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
          >
            View all {item.label.toLowerCase()} →
          </Link>
        </div>
      </div>
    );
  }

  if (!item.children?.length) return null;

  return (
    <div className="absolute right-0 top-full min-w-[250px] border border-[var(--color-border)] bg-black py-2 shadow-xl">
      {item.children.map((child, childIdx) => (
        <Link
          key={`${item.label}-${childIdx}-${child.href}`}
          href={child.href}
          className="block px-4 py-2 text-sm text-white/85 hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}

export function Header({ premium = false }: { premium?: boolean }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { setMenuOpen } = useMobileChrome();

  useEffect(() => {
    setMenuOpen(open);
  }, [open, setMenuOpen]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`sticky top-0 z-50 ${premium ? "premium-header" : "bg-black/95 backdrop-blur"}`}>
      <div className="container flex items-center justify-between gap-4 py-3 md:py-4">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)} aria-label={siteConfig.brand}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.brand}
            width={56}
            height={56}
            className="h-12 w-12 object-contain opacity-90"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-end gap-1">
            <nav className="flex items-center">
              {siteConfig.main.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-[0.72rem] uppercase tracking-[0.14em] font-semibold transition-colors border-b-2 ${
                      isActive(item.href)
                        ? "text-[var(--color-accent)] border-[var(--color-accent)]"
                        : "text-white border-transparent hover:text-[var(--color-accent)]"
                    }`}
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {item.label}
                  </Link>
                  {hasNavDropdown(item) && activeMenu === item.label ? <DesktopDropdown item={item} /> : null}
                </div>
              ))}
            </nav>
            <TrackedPhoneLink
              className="pr-3 text-xs tracking-[0.06em] text-white/90"
              location="header-desktop"
            />
          </div>
          <TrackedContactLink
            className="btn btn-primary !py-2.5 !px-4 !text-[0.72rem] shrink-0 premium-btn-glow"
            location="header-desktop"
          >
            Get in touch
          </TrackedContactLink>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <TrackedPhoneLink className="header-mobile-call" location="header-mobile-chrome">
            Call
          </TrackedPhoneLink>
          <TrackedContactLink
            className="btn btn-primary header-mobile-consult premium-btn-glow"
            location="header-mobile"
          >
            Get in touch
          </TrackedContactLink>
          <button
            type="button"
            className="header-mobile-menu"
            aria-expanded={open}
            aria-controls="mobile-site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? <MobileNav open={open} pathname={pathname} onClose={() => setOpen(false)} /> : null}
    </header>
  );
}
