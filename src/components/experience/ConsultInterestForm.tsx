"use client";

import { useMemo, useState } from "react";
import { homeExploreProcedures } from "@/content/home-sections";
import { trackConsultClick } from "@/lib/analytics";
import { CONSULT_URL, siteConfig } from "@/lib/site";
import { TrackedPhoneLink } from "@/components/TrackedPhoneLink";

const PROCEDURE_OPTIONS = [
  { value: "", label: "Select a procedure (optional)" },
  ...homeExploreProcedures.links.map((link) => ({ value: link.label, label: link.label })),
  { value: "Other / Not sure yet", label: "Other / Not sure yet" },
];

type ConsultInterestFormProps = {
  className?: string;
  location?: string;
};

/** Two-step consult funnel: procedure interest → contact options. */
export function ConsultInterestForm({
  className = "",
  location = "consult-interest-form",
}: ConsultInterestFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [procedure, setProcedure] = useState("");

  const consultHref = useMemo(() => {
    if (!procedure || procedure === "Other / Not sure yet") return CONSULT_URL;
    const params = new URLSearchParams({ procedureInterest: procedure });
    return `${CONSULT_URL}?${params.toString()}`;
  }, [procedure]);

  return (
    <div className={`premium-consult-form ${className}`.trim()} aria-label="Consultation interest form">
      <div className="premium-consult-form-steps" aria-hidden="true">
        <span className={step === 1 ? "is-active" : step > 1 ? "is-done" : ""}>1. Procedure</span>
        <span className={step === 2 ? "is-active" : ""}>2. Contact</span>
      </div>

      {step === 1 ? (
        <div className="premium-consult-form-panel">
          <p className="premium-eyebrow">Get started</p>
          <h3 className="premium-consult-form-title">What are you interested in?</h3>
          <p className="premium-consult-form-intro">
            Tell us what you&apos;re researching so we can personalize your complimentary virtual consultation.
          </p>
          <label className="premium-consult-form-label" htmlFor="procedure-interest">
            Procedure interest
          </label>
          <select
            id="procedure-interest"
            className="premium-consult-form-select"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
          >
            {PROCEDURE_OPTIONS.map((opt) => (
              <option key={opt.value || "default"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button type="button" className="btn btn-primary premium-btn-glow mt-6" onClick={() => setStep(2)}>
            Continue →
          </button>
        </div>
      ) : (
        <div className="premium-consult-form-panel">
          <p className="premium-eyebrow">Step 2</p>
          <h3 className="premium-consult-form-title">
            {procedure ? `Great — let's talk about ${procedure}` : "Ready to connect?"}
          </h3>
          <p className="premium-consult-form-intro">
            Choose how you&apos;d like to reach our Tampa Bay concierge team. There is no obligation and your
            consultation is complimentary.
          </p>
          <div className="premium-consult-form-actions">
            <a
              href={consultHref}
              className="btn btn-primary premium-btn-glow"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackConsultClick(location, procedure || undefined)}
            >
              Book free virtual consult
            </a>
            <TrackedPhoneLink className="btn btn-outline !border-white/25 !text-white" location={`${location}-phone`}>
              Call {siteConfig.phone}
            </TrackedPhoneLink>
          </div>
          <button type="button" className="inline-link mt-4" onClick={() => setStep(1)}>
            ← Change procedure
          </button>
        </div>
      )}
    </div>
  );
}
