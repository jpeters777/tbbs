import Image from "next/image";
import { CONSULT_URL } from "@/lib/site";

type HeroProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  brandFirst?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  brandFirst = false,
  ctaLabel = "Start a consultation",
  ctaHref = CONSULT_URL,
}: HeroProps) {
  void brandFirst;
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden bg-black text-white text-center">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          className="object-cover hero-media opacity-60"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(101,235,201,0.18),transparent_40%),linear-gradient(180deg,#111,#000)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />

      <div className="container relative z-10 py-28 px-4">
        <h1
          className="animate-fade-up mx-auto max-w-4xl text-[clamp(1.9rem,4.8vw,3.5rem)] uppercase tracking-[0.08em] text-balance text-[var(--color-accent)]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="animate-fade-up-delay mx-auto mt-5 max-w-2xl text-base md:text-lg text-white/90"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {subtitle}
          </p>
        ) : null}
        <div className="animate-fade-up-delay-2 mt-8 flex justify-center">
          <a href={ctaHref} className="btn btn-primary" target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
