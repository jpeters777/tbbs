type FeatureItem = {
  title: string;
  body: string;
};

export function FeatureGrid({
  title,
  items,
  sectionTitleTone = "accent",
  cardTitleTone = "white",
}: {
  title?: string;
  items: FeatureItem[];
  sectionTitleTone?: "accent" | "white";
  cardTitleTone?: "accent" | "white";
}) {
  if (!items.length) return null;

  const cardTitleClass =
    cardTitleTone === "accent" ? "feature-card-title--accent" : "feature-card-title--white";

  return (
    <section className="section section-black">
      <div className="container">
        {title ? (
          <h2
            className={`section-title ${sectionTitleTone === "white" ? "section-title-white" : ""}`}
          >
            {title}
          </h2>
        ) : null}
        <div className="feature-grid">
          {items.map((item) => (
            <article key={item.title} className="feature-card">
              <h3 className={`feature-card-title ${cardTitleClass}`}>{item.title}</h3>
              <p className="feature-card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
