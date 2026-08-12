
export type JumpLink = {
  href: string;
  label: string;
};

/** Sticky on-page research chips for mobile procedure/flagship pages. */
export function PremiumJumpNav({
  links,
  label = "On this page",
}: {
  links: JumpLink[];
  label?: string;
}) {
  if (links.length === 0) return null;

  return (
    <nav className="premium-jump-nav" aria-label={label}>
      <div className="container premium-jump-nav-scroller">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="premium-jump-nav-link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
