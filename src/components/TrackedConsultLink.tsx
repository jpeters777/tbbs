"use client";

import Link from "next/link";
import { buildConsultPageHref } from "@/lib/jotform";
import { trackConsultClick } from "@/lib/analytics";
import { CONSULT_URL } from "@/lib/site";

type TrackedConsultLinkProps = {
  className?: string;
  children: React.ReactNode;
  /** Where on the page this link appears — used for analytics. */
  location: string;
  procedureInterest?: string;
  onClick?: () => void;
};

function resolveHref(procedureInterest?: string) {
  if (CONSULT_URL.startsWith("/")) {
    return buildConsultPageHref(procedureInterest);
  }
  if (!procedureInterest) return CONSULT_URL;
  const params = new URLSearchParams({ procedureInterest });
  return `${CONSULT_URL}?${params.toString()}`;
}

export function TrackedConsultLink({
  className,
  children,
  location,
  procedureInterest,
  onClick,
}: TrackedConsultLinkProps) {
  const href = resolveHref(procedureInterest);

  const handleClick = () => {
    trackConsultClick(location, procedureInterest);
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
