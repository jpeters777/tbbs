"use client";

import { trackPhoneClick } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

type TrackedPhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
  /** Where on the page this link appears — used for analytics. */
  location: string;
};

export function TrackedPhoneLink({ className, children, location }: TrackedPhoneLinkProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      className={className}
      onClick={() => trackPhoneClick(location)}
    >
      {children ?? siteConfig.phone}
    </a>
  );
}
