type FeatureItem = {
  title: string;
  body: string;
};

export function FeatureGrid({
  title,
  items,
  titleTone = "accent",
}: {
  title?: string;
  items: FeatureItem[];
  titleTone?: "accent" | "white";
}) {
  if (!items.length) return null;

  return (
    <section className="section section-black">
      <div className="container">
        {title ? (
          <h2 className={`section-title ${titleTone === "white" ? "section-title-white" : ""}`}>
            {title}
          </h2>
        ) : null}
        <div className="feature-grid">
          {items.map((item) => (
            <article key={item.title} className="feature-card">
              <h3 className="feature-card-title">{item.title}</h3>
              <p className="feature-card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
