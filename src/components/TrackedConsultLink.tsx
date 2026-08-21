"use client";

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

export function TrackedConsultLink({
  className,
  children,
  location,
  procedureInterest,
  onClick,
}: TrackedConsultLinkProps) {
  return (
    <a
      href={CONSULT_URL}
      className={className}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        trackConsultClick(location, procedureInterest);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
