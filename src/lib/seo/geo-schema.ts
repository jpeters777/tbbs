import { tampaBayGeoTargets } from "@/content/company-stats";

/** Geographic targeting for MedicalBusiness / service area schema. */
export function buildAreaServedSchema() {
  return [
    { "@type": "State", name: "Florida" },
    { "@type": "AdministrativeArea", name: "Tampa Bay Area" },
    ...tampaBayGeoTargets.map((city) => ({
      "@type": "City" as const,
      name: city,
      containedInPlace: { "@type": "State" as const, name: "Florida" },
    })),
  ];
}
