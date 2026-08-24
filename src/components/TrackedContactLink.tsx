"use client";

import Link from "next/link";
import { buildContactPageHref } from "@/lib/jotform";
import { trackContactClick } from "@/lib/analytics";
import { CONTACT_URL } from "@/lib/site";

type TrackedContactLinkProps = {
  className?: string;
  children: React.ReactNode;
  /** Where on the page this link appears — used for analytics. */
  location: string;
  procedureInterest?: string;
  onClick?: () => void;
};

function resolveHref(procedureInterest?: string) {
  if (CONTACT_URL.startsWith("/")) {
    return buildContactPageHref(procedureInterest);
  }
  if (!procedureInterest) return CONTACT_URL;
  const params = new URLSearchParams({ procedureInterest });
  return `${CONTACT_URL}?${params.toString()}`;
}

/** Primary conversion CTA — short contact form at /contact. */
export function TrackedContactLink({
  className,
  children,
  location,
  procedureInterest,
  onClick,
}: TrackedContactLinkProps) {
  const href = resolveHref(procedureInterest);

  const handleClick = () => {
    trackContactClick(location, procedureInterest);
    onClick?.();
  };

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" onClick={handleClick}>
      {children}
    </a>
  );
}
