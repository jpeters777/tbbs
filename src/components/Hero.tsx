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
  return (
    <section className="relative min-h-[72vh] flex items-end overflow-hidden bg-[var(--color-bg-dark)] text-white">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          className="object-cover hero-media opacity-70"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(101,235,201,0.28),transparent_35%),linear-gradient(135deg,#1c2421,#101413_60%,#0b0f0e)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />

      <div className="container relative z-10 pb-14 pt-28">
        {brandFirst ? (
          <p
            className="animate-fade-up text-[clamp(2rem,6vw,4.4rem)] leading-[0.95] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tampa Bay Body Sculpting
          </p>
        ) : null}
        <h1
          className="animate-fade-up-delay text-[clamp(1.7rem,4vw,3rem)] max-w-3xl text-balance"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="animate-fade-up-delay-2 mt-4 max-w-2xl text-base md:text-lg text-white/85">
            {subtitle}
          </p>
        ) : null}
        <div className="animate-fade-up-delay-2 mt-7 flex flex-wrap gap-3">
          <a href={ctaHref} className="btn btn-primary" target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
          <a href="tel:8135576400" className="btn btn-outline text-white border-white/70">
            Call 813-557-6400
          </a>
        </div>
      </div>
    </section>
  );
}
