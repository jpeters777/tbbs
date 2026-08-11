"use client";

import { trackPhoneClick } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

type TrackedPhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
  /** Where on the page this link appears — used for analytics. */
  location: string;
  onClick?: () => void;
};

export function TrackedPhoneLink({ className, children, location, onClick }: TrackedPhoneLinkProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      className={className}
      onClick={() => {
        trackPhoneClick(location);
        onClick?.();
      }}
    >
      {children ?? siteConfig.phone}
    </a>
  );
}
