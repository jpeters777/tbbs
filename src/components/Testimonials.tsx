export function Testimonials({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {items.map((item, idx) => (
            <blockquote
              key={`testimonial-${idx}`}
              className="border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 text-sm leading-relaxed text-[var(--color-text-muted)]"
            >
              <p className="text-white mb-3 tracking-[0.2em]">★★★★★</p>
              <p>{item}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
