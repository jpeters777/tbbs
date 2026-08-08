import Link from "next/link";

type Card = {
  title: string;
  description: string;
  href: string;
};

export function ProcedureCards({
  title,
  cards,
}: {
  title?: string;
  cards: Card[];
}) {
  if (!cards.length) return null;

  const seen = new Set<string>();
  const unique = cards.filter((card) => {
    const key = card.title.toLowerCase();
    if (seen.has(key)) return false;
    if (key.includes("★")) return false;
    seen.add(key);
    return true;
  });

  return (
    <section className="section section-black">
      <div className="container">
        {title ? <h2 className="section-title">{title}</h2> : null}
        <div className="feature-grid">
          {unique.map((card) => (
            <Link key={`${card.href}-${card.title}`} href={card.href} className="feature-card group">
              <h3 className="feature-card-title feature-card-title--white group-hover:text-[var(--color-accent)] transition-colors">
                {card.title}
              </h3>
              <p className="feature-card-body">{card.description}</p>
              <span className="inline-block mt-3 text-xs uppercase tracking-[0.12em] font-semibold text-[var(--color-accent)]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
