import { createCuratedPage } from "@/lib/premium-curated/build-content";
import type { CuratedPageContent } from "@/lib/premium-curated/types";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const resourcesPage: CuratedPageContent = createCuratedPage({
  slug: "resources",
  category: "resources",
  seo: {
    title: "Cosmetic Surgery Recovery Guides & Resources | Tampa Bay Body Sculpting",
    description:
      "Browse cosmetic surgery resources, recovery guides, financing information, FAQs, and educational articles to help you prepare for your cosmetic procedure.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/shutterstock_359476844_801685051614.JPG",
      alt: "Cosmetic surgery patient resources and educational guides at Tampa Bay Body Sculpting",
    },
  },
  intro: {
    eyebrow: "Patient resources · Tampa Bay",
    heroTitle: "Cosmetic Surgery Resources In Tampa Bay",
    title: "Patient Resources & Planning Center",
    lead: "Choosing cosmetic surgery is an important decision—and having reliable information makes the process feel much more comfortable. Our resource center answers common questions and provides helpful guidance before and after surgery.",
    paragraphs: [
      "Whether you're researching procedure options, planning travel from out of state, exploring financing, or preparing for recovery, you'll find educational content designed to help you make informed decisions every step of the way.",
      "This hub connects you to FAQs, financing options, travel guides, recovery resources, and out-of-town patient checklists—plus recovery guides for popular procedures available from our team during consultation.",
      "Start here to orient yourself—then schedule a complimentary virtual consultation for personalized recommendations tailored to your goals and anatomy.",
    ],
  },
  introEyebrowQuestion: "Where should I start my research?",
  heroSecondaryCta: "Resources at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "How to navigate" },
    { href: "#procedure-focus", label: "Resource library" },
    { href: "#candidacy", label: "Who this helps" },
    { href: "#recovery", label: "Recovery prep" },
    { href: "#results", label: "Guides & galleries" },
    { href: "#faq", label: "FAQs" },
  ],
  glance: {
    col1Title: "Resource categories",
    col1Items: [
      "Financing & payment plans",
      "Travel & out-of-town guides",
      "Recovery timelines & guides",
      "Cosmetic surgery FAQs",
      "Before & after galleries",
      "Virtual consultation",
    ],
    candidates: [
      "First-time cosmetic surgery researchers",
      "Patients preparing for upcoming surgery",
      "Out-of-town patients planning travel",
      "Anyone comparing procedures or costs",
    ],
    benefits: [
      "All patient education in one hub",
      "Links to procedure-specific depth",
      "Recovery guides from our team",
      "Clear path from research to consult",
    ],
    procedureSnapshot: [
      "Free virtual consultation available",
      "Financing through trusted partners",
      "Support for traveling patients",
      "Updated for Tampa Bay searches",
    ],
  },
  howItWorks: {
    title: "How To Navigate Our Resource Center",
    intro:
      "Use this hub as your starting point—then dive into the specific guides that match where you are in your cosmetic surgery journey.",
    steps: [
      {
        step: "01",
        title: "Research Procedures & FAQs",
        body: "Start with our FAQ library for cross-procedure answers about consultations, combining treatments, recovery basics, and results expectations.",
      },
      {
        step: "02",
        title: "Explore Financing If Needed",
        body: "Review flexible monthly payment options through Cherry. Full pricing is discussed transparently during consultation.",
      },
      {
        step: "03",
        title: "Plan Travel For Out-Of-Town Visits",
        body: "Travel Information and the Out-of-Town Patient Guide cover airports, stay length, caregivers, and surgery-day logistics.",
      },
      {
        step: "04",
        title: "Study Recovery Guides",
        body: "Procedure-specific recovery timelines help you plan time off work and understand garment wear, activity limits, and healing milestones.",
      },
      {
        step: "05",
        title: "Browse Before & After Galleries",
        body: "View real patient results in our female body, breast, and male surgery galleries. Photos inform expectations—not replace consultation.",
      },
      {
        step: "06",
        title: "Schedule Your Consultation",
        body: "When you're ready, book a complimentary virtual consultation. Personalized guidance turns general resources into your surgical plan.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Resource library",
    title: "Patient Resources & Planning Tools",
    intro:
      "Each resource below goes deeper on a specific topic. Bookmark this page as your home base throughout your cosmetic surgery journey.",
    items: [
      {
        title: "Financing Options",
        body: "Explore flexible financing solutions and monthly payment plans designed to make your cosmetic surgery experience more accessible.",
      },
      {
        title: "Frequently Asked Questions",
        body: "Answers to common questions about consultations, procedures, recovery, travel, financing, and becoming a patient at Tampa Bay Body Sculpting.",
      },
      {
        title: "Travel Information",
        body: "Helpful guidance for patients traveling to Tampa Bay—including airports, accommodations, and recovery stay recommendations.",
      },
      {
        title: "Recovery Guides",
        body: "Procedure-specific recovery timelines and aftercare recommendations for Lipo 360, BBL, and men's procedures—detailed guides available from our team during consultation.",
      },
      {
        title: "Out-of-Town Patients",
        body: "Step-by-step checklist for patients traveling from outside the Tampa Bay area—from virtual consult through return home.",
      },
      {
        title: "Virtual Consultation",
        body: "Begin your consultation process remotely with personalized guidance before traveling for your procedure.",
      },
    ],
    closingParagraphs: [
      "Recovery guides for Lipo 360, Lipo 360 + BBL, and Male Lipo 360 are available from our team during consultation.",
    ],
  },
  candidacy: {
    title: "Who This Resource Hub Helps",
    intro:
      "This center is for anyone researching or preparing for cosmetic surgery with Tampa Bay Body Sculpting—local or traveling from across the country.",
    idealTitle: "Start here if you",
    ideal: [
      "Are early in your cosmetic surgery research",
      "Need financing, travel, or recovery info in one place",
      "Want recovery guides before your procedure date",
      "Are comparing Tampa providers and want transparent education",
    ],
    considerationsTitle: "Go deeper when ready",
    considerations: [
      "Procedure pages offer surgical detail beyond general resources",
      "Candidacy requires personalized evaluation—not online self-diagnosis",
      "Pricing and financing approval happen during consultation",
      "Galleries show possibilities—not guarantees for your body",
    ],
    closing:
      "Use these resources to prepare—then schedule a complimentary consultation for a plan built around your goals.",
  },
  recovery: {
    title: "Preparing For Recovery",
    intro:
      "Recovery preparation starts before surgery day. Use our guides to understand timelines, then follow your surgeon's personalized instructions.",
    steps: [
      {
        step: "01",
        title: "Read Procedure-Specific Guides",
        body: "Visit Recovery Guides for your treatment type—body contouring, BBL, tummy tuck, breast, or men's procedures.",
      },
      {
        step: "02",
        title: "Request Recovery Guide References",
        body: "Lipo 360, Lipo 360 + BBL, and Male Lipo 360 recovery guides are available from our team during consultation for offline reference during healing.",
      },
      {
        step: "03",
        title: "Prepare Your Recovery Space",
        body: "Stock supplies, arrange help, and plan time off work before surgery—not after.",
      },
      {
        step: "04",
        title: "Plan Travel Around Recovery",
        body: "Out-of-town patients should align hotel stay length with recovery requirements before booking return flights.",
      },
    ],
  },
  results: {
    title: "Guides & Galleries",
    intro:
      "Beyond written guides on this site, procedure-specific recovery references and before-and-after galleries are available from our team during consultation.",
    items: [
      {
        title: "Lipo 360 Recovery Guide",
        body: "Available from our team during consultation—covers garment wear, activity limits, and healing milestones for Lipo 360 patients.",
      },
      {
        title: "Lipo 360 + BBL Recovery Guide",
        body: "Available from our team during consultation—covers donor-area garments and BBL sitting restrictions in one reference.",
      },
      {
        title: "Male Lipo 360 Recovery Guide",
        body: "Available from our team during consultation—recovery guidance tailored to male body contouring patients.",
      },
      {
        title: "Female Body Gallery",
        body: "Before and after photos showcasing Lipo 360, waist contouring, and BBL results.",
      },
      {
        title: "Breast Surgery Gallery",
        body: "Augmentation, lift, and body combination results from breast surgery patients.",
      },
      {
        title: "Male Surgery Gallery",
        body: "Male body sculpting, abdominal contouring, and chest reduction transformations.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "How We Select Providers",
      href: "/how-we-select-providers",
      body: "Our concierge vetting process—11 years, 20,000+ procedures, board-certified network.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible monthly payment plans through Cherry and trusted financing partners.",
    },
    {
      title: "FAQs",
      href: "/faqs",
      body: "Comprehensive answers about consultations, procedures, recovery, travel, and financing.",
    },
    {
      title: "Travel Information",
      href: "/travel-information",
      body: "Planning guidance for patients traveling to Tampa Bay for cosmetic surgery.",
    },
    {
      title: "Recovery Guides",
      href: "/recovery-guides",
      body: "Procedure-specific recovery timelines—detailed guides available from our team during consultation.",
    },
    {
      title: "Out-of-Town Patient Guide",
      href: "/out-of-town-patient-guide",
      body: "Step-by-step checklist for traveling patients from consult through return home.",
    },
    {
      title: "Liposuction Hub",
      href: "/liposuction",
      body: "Explore body contouring procedures including Lipo 360, BBL, and waist sculpting.",
    },
    {
      title: "Female Body Gallery",
      href: "/female-b-a-gallery",
      body: "Before and after body sculpting results for female patients.",
    },
    {
      title: "Breast Procedures",
      href: "/breasts",
      body: "Augmentation, lift, reduction, revision, and rejuvenation options.",
    },
  ],
  faqs: [
    {
      q: "Where should I start if I'm considering cosmetic surgery?",
      a: "Begin by researching the procedures you're interested in and scheduling a consultation. During your consultation, your provider will discuss your goals, review your medical history, and recommend treatment options that fit your needs.",
    },
    {
      q: "How can I prepare for cosmetic surgery?",
      a: "Preparation may include completing required lab work, stopping certain medications as directed, arranging transportation, preparing your recovery area, and purchasing recommended supplies. Our recovery guides provide detailed checklists.",
      links: [{ text: "Recovery Guides", href: "/recovery-guides" }],
    },
    {
      q: "Where can I learn about recovery after surgery?",
      a: "Our recovery guides provide procedure-specific information about healing timelines, activity restrictions, follow-up care, and helpful recovery tips.",
      links: [{ text: "Recovery Guides", href: "/recovery-guides" }],
    },
    {
      q: "Do you offer financing?",
      a: "Yes. We offer financing options to help make cosmetic surgery more affordable. During consultation, we'll discuss payment plans that fit your budget.",
      links: [{ text: "Financing Options", href: "/financing-options" }],
    },
    {
      q: "Do you work with out-of-town patients?",
      a: "Yes. Many patients travel from throughout Florida and other states. We provide guidance to make planning as smooth as possible.",
      links: [{ text: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" }],
    },
    {
      q: "Are virtual consultations available?",
      a: "Yes. Virtual consultations let you discuss goals and receive recommendations before traveling to Tampa Bay for surgery.",
    },
    {
      q: "What recovery guides are available?",
      a: "Recovery guides for Lipo 360, Lipo 360 + BBL, and Male Lipo 360 are available from our team during consultation.",
    },
    {
      q: "Where can I see before and after photos?",
      a: "Browse our female body, breast surgery, and male surgery galleries for real patient transformations.",
      links: [{ text: "Female Body Gallery", href: "/female-b-a-gallery" }],
    },
    {
      q: "How do I contact Tampa Bay Body Sculpting?",
      a: "Reach us at info@tampabaybodysculpting.com or schedule a complimentary virtual consultation online.",
    },
    {
      q: "What procedures do you offer?",
      a: "Body contouring (Lipo 360, BBL, tummy tuck, mommy makeover), breast surgery, and men's procedures including Lipo 360, tummy tuck, and chest reduction.",
      links: [{ text: "Liposuction Hub", href: "/liposuction" }],
    },
    {
      q: "Can I combine multiple procedures?",
      a: "Yes. Many patients combine procedures in one surgical plan. Your provider recommends the safest combination based on your health and goals.",
    },
    {
      q: "How long should out-of-town patients stay in Tampa?",
      a: "Stay length depends on your procedure and healing. Travel and out-of-town guides help you plan; your provider gives final clearance timing.",
      links: [{ text: "Travel Information", href: "/travel-information" }],
    },
    {
      q: "Is there a cost for the virtual consultation?",
      a: "We offer complimentary virtual consultations so you can explore options before committing to surgery.",
    },
    {
      q: "What's the difference between FAQs and procedure pages?",
      a: "FAQs cover cross-procedure topics. Procedure pages go deep on candidacy, technique, recovery, and results for a specific treatment.",
      links: [{ text: "FAQs", href: "/faqs" }],
    },
  ],
  faqTitle: "Resources FAQs",
  faqIntro:
    "Common questions about navigating our patient resource center and preparing for cosmetic surgery in Tampa Bay.",
  finalCtaTitle: "Ready To Take The Next Step?",
  schemaProcedureName: "Cosmetic Surgery Patient Resources",
  schemaAlternateNames: ["Cosmetic Surgery Resource Center Tampa", "Patient Education Hub"],
  schemaDescription:
    "Cosmetic surgery resources including recovery guides, financing, travel information, FAQs, and patient education at Tampa Bay Body Sculpting.",
});
