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

  // Deduplicate near-identical cards
  const seen = new Set<string>();
  const unique = cards.filter((card) => {
    const key = card.title.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return (
    <section className="section">
      <div className="container">
        {title ? <h2 className="section-title">{title}</h2> : null}
        <div className="grid-cards">
          {unique.map((card) => (
            <Link
              key={`${card.href}-${card.title}`}
              href={card.href}
              className="group border border-[var(--color-border)] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_16px_40px_rgba(16,32,27,0.08)]"
            >
              <h3 className="text-xl mb-2 group-hover:text-[var(--color-bg-forest)]">{card.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">{card.description}</p>
              <span className="text-xs uppercase tracking-[0.12em] font-semibold text-[var(--color-bg-forest)]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
