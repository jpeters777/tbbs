"use client";

import { buildJotformEmbedSrc, JOTFORM_VIRTUAL_CONSULT_ID } from "@/lib/jotform";

type JotformEmbedProps = {
  procedureInterest?: string | null;
};

/** Embedded JotForm consult — same backend, notifications, and HIPAA plan as the hosted form. */
export function JotformEmbed({ procedureInterest }: JotformEmbedProps) {
  const src = buildJotformEmbedSrc(procedureInterest);

  return (
    <div className="jotform-embed-wrap">
      <iframe
        id={`JotFormIFrame-${JOTFORM_VIRTUAL_CONSULT_ID}`}
        title="Free virtual consultation form"
        src={src}
        className="jotform-embed-frame"
        allow="geolocation; microphone; camera; fullscreen; payment"
        loading="lazy"
      />
    </div>
  );
}
