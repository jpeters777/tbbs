export function Testimonials({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {items.map((item) => (
            <blockquote
              key={item.slice(0, 40)}
              className="border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/85"
            >
              <p className="text-[var(--color-accent)] mb-3 tracking-[0.2em]">★★★★★</p>
              <p>{item}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
