"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.brand}
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />
          <span
            className="hidden sm:block text-[1.05rem] leading-tight tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tampa Bay
            <br />
            Body Sculpting
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.main.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="px-3 py-2 text-sm uppercase tracking-[0.08em] font-semibold hover:text-[var(--color-bg-forest)]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {item.label}
              </Link>
              {item.children && activeMenu === item.label ? (
                <div className="absolute left-0 top-full min-w-[240px] border border-[var(--color-border)] bg-white py-2 shadow-lg">
                  {item.children.map((child, childIdx) => (
                    <Link
                      key={`${item.label}-${childIdx}-${child.href}`}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-accent-soft)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="hidden md:inline-flex text-sm font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {siteConfig.phone}
          </a>
          <a href={siteConfig.consultUrl} className="btn btn-primary !py-2.5 !px-3.5 !text-xs" target="_blank" rel="noreferrer">
            Consultation
          </a>
          <button
            type="button"
            className="lg:hidden border border-[var(--color-border)] px-3 py-2 text-xs uppercase tracking-wider"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <div className="container py-4 flex flex-col gap-2">
            {siteConfig.main.map((item) => (
              <div key={item.href} className="border-b border-[var(--color-border)] pb-2">
                <Link
                  href={item.href}
                  className="block py-2 font-semibold uppercase tracking-wide text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="pl-3 flex flex-col gap-1 pb-2">
                    {item.children.map((child, childIdx) => (
                      <Link
                        key={`m-${item.label}-${childIdx}-${child.href}`}
                        href={child.href}
                        className="py-1 text-sm text-[var(--color-text-muted)]"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <a href={siteConfig.phoneHref} className="py-2 font-semibold">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
