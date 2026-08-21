"use client";

import {
  buildContactEmbedSrc,
  buildJotformEmbedSrc,
  JOTFORM_CONTACT_ID,
  JOTFORM_VIRTUAL_CONSULT_ID,
} from "@/lib/jotform";

type JotformEmbedProps =
  | {
      form: "virtual-consult";
      procedureInterest?: string | null;
    }
  | {
      form: "contact";
    };

/** Embedded JotForm — same backend, notifications, and HIPAA settings as hosted forms. */
export function JotformEmbed(props: JotformEmbedProps) {
  const isContact = props.form === "contact";
  const src = isContact ? buildContactEmbedSrc() : buildJotformEmbedSrc(props.procedureInterest);
  const formId = isContact ? JOTFORM_CONTACT_ID : JOTFORM_VIRTUAL_CONSULT_ID;
  const frameClass = isContact ? "jotform-embed-frame jotform-embed-frame--contact" : "jotform-embed-frame";

  return (
    <div className="jotform-embed-wrap">
      <iframe
        id={`JotFormIFrame-${formId}`}
        title={isContact ? "Contact form" : "Free virtual consultation form"}
        src={src}
        className={frameClass}
        allow="geolocation; microphone; camera; fullscreen; payment"
        loading="lazy"
      />
    </div>
  );
}
