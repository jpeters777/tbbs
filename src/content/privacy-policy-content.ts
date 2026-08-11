import { siteConfig } from "@/lib/site";

export const privacyPolicyContent = {
  seo: {
    title: "Privacy Policy | Tampa Bay Body Sculpting",
    description:
      "Privacy Policy for Tampa Bay Body Sculpting — how we collect, use, and protect your information when you visit our website or request a cosmetic surgery consultation.",
  },
  hero: {
    src: "/images/shutterstock_359476844_801685051614.JPG",
    alt: "Tampa Bay Body Sculpting patient resources",
  },
  lastUpdated: "August 10, 2026",
  intro:
    "Tampa Bay Body Sculpting respects your privacy. This policy explains what information we collect, how we use it, and the choices you have when you visit our website or contact our team about cosmetic surgery guidance in Tampa Bay, Florida.",
  sections: [
    {
      id: "who-we-are",
      title: "Who We Are",
      paragraphs: [
        `${siteConfig.brand} provides concierge cosmetic surgery guidance—we help patients explore procedures, connect with board-certified providers, and navigate consultation through recovery. We are not a hospital or surgical facility.`,
        `If you have questions about this policy, contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We may collect information you choose to provide when you contact us or request a consultation, including your name, email address, phone number, procedure interests, and any message you submit through our forms.",
        "When you visit our website, we may automatically collect technical data such as your browser type, device type, pages viewed, referring URL, and general location (city/region level) through analytics tools—only if you accept cookies.",
        "Phone calls or texts to our published number may be logged for quality and follow-up purposes.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      paragraphs: [
        "We use your information to respond to inquiries, schedule complimentary virtual consultations, coordinate referrals to providers in our network, and provide concierge support before and after surgery.",
        "We use analytics data to understand how visitors use our site so we can improve content, navigation, and the patient experience.",
        "We do not sell your personal information to third parties for their marketing purposes.",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [
        "Our consultation and contact forms are hosted by Jotform. Information you submit through those forms is processed according to Jotform's privacy practices and our instructions for handling patient inquiries.",
        "Financing applications through Cherry are handled on Cherry's secure platform when you choose to apply.",
        "If you accept cookies, Google Analytics and/or Google Tag Manager may collect usage data to help us measure site performance. Google's policies apply to that processing.",
        "Our site may link to social platforms (Facebook, Instagram), Google Maps reviews, and provider websites. Those services have their own privacy policies.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies & Analytics",
      paragraphs: [
        "We use cookies and similar technologies to analyze website traffic and optimize your experience. Analytics cookies are loaded only after you click Accept on our cookie banner.",
        "If you decline cookies, we do not load analytics scripts. Essential site functionality (navigation, forms linked externally) still works.",
        "You can clear cookies at any time through your browser settings. Clearing cookies will show the consent banner again on your next visit.",
      ],
    },
    {
      id: "medical-information",
      title: "Medical & Health Information",
      paragraphs: [
        "Information shared through consultation forms may include health-related details you choose to provide. We use that information only to facilitate your consultation and provider matching.",
        "Tampa Bay Body Sculpting is a patient guidance service. Surgical care, medical records, and treatment decisions are handled by the board-certified providers you choose to work with, under their policies and applicable law.",
        "This website is for informational purposes only and does not replace professional medical advice, diagnosis, or treatment.",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention & Security",
      paragraphs: [
        "We retain inquiry and consultation information for as long as needed to respond to your request, provide concierge support, and meet legitimate business or legal requirements.",
        "We use reasonable administrative and technical measures to protect information we handle, but no internet transmission is completely secure.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Choices & Rights",
      paragraphs: [
        "You may request access to, correction of, or deletion of personal information we hold about you by emailing us at the address below.",
        "You may opt out of analytics cookies by clicking Decline on our cookie banner or clearing site data in your browser.",
        "Residents of certain states may have additional privacy rights under applicable law. Contact us to exercise those rights.",
      ],
    },
    {
      id: "children",
      title: "Children's Privacy",
      paragraphs: [
        "Our services are intended for adults considering cosmetic surgery. We do not knowingly collect personal information from children under 18.",
      ],
    },
    {
      id: "changes",
      title: "Changes To This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The Last updated date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.",
      ],
    },
  ],
} as const;
