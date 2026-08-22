import site from "@/content/site.json";

/** Primary public origin — must match Vercel domain redirect (non-www → www). */
export const SITE_URL = "https://www.tampabaybodysculpting.com";

export type NavChild = { label: string; href: string };
export type NavGroup = { label: string; children: NavChild[] };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  groups?: NavGroup[];
};

/** Flatten grouped nav items for mobile menus and simple iteration. */
export function getNavDropdownItems(item: NavItem): NavChild[] {
  if (item.groups?.length) {
    return item.groups.flatMap((group) => group.children);
  }
  return item.children ?? [];
}

export function hasNavDropdown(item: NavItem): boolean {
  return Boolean(item.groups?.length || item.children?.length);
}

export const siteConfig = site as {
  main: NavItem[];
  phone: string;
  phoneHref: string;
  email: string;
  consultUrl: string;
  contactUrl: string;
  paymentUrl: string;
  social: { facebook: string; instagram: string };
  brand: string;
  logo: string;
  googleReviews?: {
    profileUrl?: string;
    ratingValue?: number | null;
    reviewCount?: number | null;
  };
};

export const CONSULT_URL = siteConfig.consultUrl;
export const CONTACT_URL = siteConfig.contactUrl;
export const CHERRY_APPLY_URL = "https://pay.withcherry.com/tampabaybodysculpting";
