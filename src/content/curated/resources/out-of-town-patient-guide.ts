import { createCuratedPage } from "@/lib/premium-curated/build-content";
import type { CuratedPageContent } from "@/lib/premium-curated/types";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const outOfTownPatientGuidePage: CuratedPageContent = createCuratedPage({
  slug: "out-of-town-patient-guide",
  category: "resources",
  seo: {
    title: "Out-of-Town Patient Guide | Cosmetic Surgery Travel | Tampa Bay Body Sculpting",
    description:
      "Traveling to Tampa for cosmetic surgery? Learn how to plan your trip, recovery, and return home with confidence.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/17-6f8c86a.png",
      alt: "Travel planning for out-of-town cosmetic surgery patients in Tampa Bay",
    },
  },
  intro: {
    eyebrow: "Patient resources · Tampa Bay",
    heroTitle: "Out-Of-Town Patient Guide In Tampa Bay",
    title: "Traveling To Tampa For Surgery",
    lead: "At Tampa Bay Body Sculpting, we work with patients from across Florida and throughout the United States who travel to Tampa for cosmetic surgery—making the process as simple, comfortable, and stress-free as possible.",
    paragraphs: [
      "From your initial virtual consultation through recovery and your return home, our team helps guide you through every step. This checklist-style guide covers scheduling, medical clearance, what to pack, surgery day, and traveling home safely.",
      "Planning ahead reduces last-minute stress. Book travel early once your surgery date is confirmed, arrange a caregiver for early recovery, and review procedure-specific recovery guides so you know how long to stay in Tampa.",
      "Download our Out-of-Town Patient Guide PDF for offline reference—or use this page as your step-by-step roadmap from first consult to healed results.",
    ],
  },
  introEyebrowQuestion: "How do out-of-town patients plan surgery in Tampa?",
  heroSecondaryCta: "Planning checklist at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "Step-by-step guide" },
    { href: "#procedure-focus", label: "What to prepare" },
    { href: "#candidacy", label: "Who this helps" },
    { href: "#recovery", label: "Recovery stay" },
    { href: "#results", label: "Why choose us" },
    { href: "#faq", label: "FAQs" },
  ],
  glance: {
    col1Title: "Planning checklist",
    col1Items: [
      "Virtual consultation first",
      "Medical clearance if required",
      "Book flights & hotel early",
      "Arrange caregiver support",
      "Pack recovery essentials",
      "Attend follow-up before flying home",
    ],
    candidates: [
      "Patients flying in for cosmetic surgery",
      "Out-of-state body contouring travelers",
      "Anyone without local family support",
      "Patients combining multiple procedures",
    ],
    benefits: [
      "Structured checklist reduces overwhelm",
      "Virtual consult before booking travel",
      "Clear guidance on stay length",
      "Support from consult through recovery",
    ],
    procedureSnapshot: [
      "Arrive 1+ day before surgery",
      "TPA & PIE airports nearby",
      "Caregiver often required",
      "PDF guide available for download",
    ],
  },
  howItWorks: {
    title: "Out-Of-Town Patient Journey Step By Step",
    intro:
      "Follow this sequence from first contact through return home. Your provider may adjust timelines based on your procedure and medical history.",
    steps: [
      {
        step: "01",
        title: "Schedule Your Consultation",
        body: "Many patients begin with a virtual consultation to discuss goals, share their own photos for assessment, review their doctor's before & after portfolio with their doctor, and receive personalized procedure recommendations from an experienced provider within our network.",
      },
      {
        step: "02",
        title: "Complete Medical Clearance",
        body: "Depending on your procedure, medical history, and provider requirements, pre-operative testing or medical clearance may be required before surgery is scheduled.",
      },
      {
        step: "03",
        title: "Plan Your Recovery Timeline",
        body: "Arrange adequate time away from work and personal obligations. Recovery timelines vary depending on the procedure performed—confirm stay length before booking return travel.",
      },
      {
        step: "04",
        title: "Book Travel Early",
        body: "Secure flights and accommodations as soon as your surgery date is confirmed. Consider refundable options in case your timeline shifts for medical reasons.",
      },
      {
        step: "05",
        title: "Surgery Day & In-Town Recovery",
        body: "Follow all surgical team instructions. Have a responsible adult for transportation and early recovery assistance. Attend all follow-up appointments before leaving Tampa.",
      },
      {
        step: "06",
        title: "Travel Home When Cleared",
        body: "Obtain provider clearance before flying or driving long distances. Continue garments, hydration, and activity limits throughout your trip home and beyond.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Preparation details",
    title: "What To Prepare Before You Travel",
    intro:
      "Use these checklists alongside your personalized pre-operative instructions from your surgical team.",
    items: [
      {
        title: "What To Bring",
        body: "Government-issued photo ID, comfortable loose-fitting clothing, slip-on shoes, medications, and compression garments if instructed before travel.",
      },
      {
        title: "Arriving In Tampa",
        body: "Arrive at least one day before your scheduled procedure when possible. Fly into Tampa International (TPA) or St. Pete–Clearwater (PIE).",
      },
      {
        title: "Surgery Day",
        body: "Follow all instructions from your surgical team. Wear comfortable clothing. Arrange transportation—you cannot drive after anesthesia. Have a responsible adult available.",
      },
      {
        title: "Recovery After Surgery",
        body: "Follow post-operative instructions, wear compression garments as directed, stay hydrated, walk frequently as recommended, and attend all follow-up appointments.",
      },
      {
        title: "Traveling Home",
        body: "Obtain clearance from your provider. Follow travel recommendations. Continue garments if instructed. Stay hydrated and walk periodically on longer flights.",
      },
      {
        title: "Download The PDF Guide",
        body: "Our Out-of-Town Patient Guide PDF consolidates this checklist for offline access during your trip. Request access from our team during consultation.",
      },
    ],
    closingParagraphs: [
      "Why patients choose Tampa Bay Body Sculpting: access to experienced providers, personalized guidance, virtual consultation options, and transparent communication throughout your cosmetic surgery journey.",
    ],
  },
  candidacy: {
    title: "Who This Guide Is For",
    intro:
      "This resource is built specifically for patients who don't live in the Tampa Bay area but want cosmetic surgery with our provider network.",
    idealTitle: "Designed for",
    ideal: [
      "Out-of-state patients flying in for surgery",
      "Florida residents outside the immediate Tampa area",
      "Patients without local family to assist during recovery",
      "Anyone who wants a written checklist before travel",
    ],
    considerationsTitle: "Before you book flights",
    considerations: [
      "Confirm caregiver availability for your procedure type",
      "Understand minimum stay length before return travel",
      "Complete medical clearance on your surgeon's timeline",
      "Budget for surgery, travel, hotel, and recovery time off work",
    ],
    closing:
      "Start with a virtual consultation—our team will personalize this checklist for your procedure, dates, and recovery requirements.",
  },
  recovery: {
    title: "Recovery While Away From Home",
    intro:
      "Recovering in a hotel or rental requires extra planning. Set up your space before surgery day so you can rest immediately upon return from the facility.",
    steps: [
      {
        step: "01",
        title: "Set Up Your Recovery Space",
        body: "Before surgery, arrange your hotel room with medications within reach, extra pillows, loose clothing, and easy access to bathroom and hydration.",
      },
      {
        step: "02",
        title: "Caregiver Coverage",
        body: "Most providers require a responsible adult for 24–48 hours after surgery. Confirm your companion's travel dates align with this window.",
      },
      {
        step: "03",
        title: "In-Town Follow-Ups",
        body: "Don't leave Tampa until cleared at follow-up. Wound checks, drain removal, and healing assessments happen before travel home is approved.",
      },
      {
        step: "04",
        title: "Extended Healing At Home",
        body: "Virtual check-ins may continue after you leave. Keep your provider's contact information accessible for questions during early home recovery.",
      },
    ],
  },
  results: {
    title: "Why Patients Choose Tampa Bay Body Sculpting",
    intro:
      "Out-of-town patients trust our team to simplify a complex process—from first virtual consult through safe return home.",
    items: [
      {
        title: "Experienced Provider Network",
        body: "Access to trusted, board-certified cosmetic surgeons specializing in body contouring, breast surgery, and men's procedures.",
      },
      {
        title: "Personalized Guidance",
        body: "Clear communication and step-by-step support—not a generic surgery mill experience.",
      },
      {
        title: "Virtual Consultation Options",
        body: "Begin the process from home before committing to travel dates and accommodations.",
      },
      {
        title: "Out-Of-Town Patient Support",
        body: "Resources for travel, recovery stay, and return-home timing tailored to your procedure.",
      },
      {
        title: "Transparent Planning",
        body: "Honest timelines, pricing review at consultation, and realistic expectations about recovery.",
      },
      {
        title: "Coordinated Journey",
        body: "Assistance connecting consultation, surgery scheduling, and recovery resources in one cohesive experience.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Travel Information",
      href: "/travel-information",
      body: "Airports, accommodations, and concierge-style support for traveling cosmetic surgery patients.",
    },
    {
      title: "Recovery Guides",
      href: "/recovery-guides",
      body: "Procedure-specific healing timelines to determine how long to stay in Tampa.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible monthly payments for your procedure—plan surgical and travel costs together.",
    },
    {
      title: "Lipo 360",
      href: "/liposuction-360",
      body: "Among the most popular procedures for out-of-town body contouring patients.",
    },
    {
      title: "Brazilian Butt Lift (BBL)",
      href: "/brazilian-butt-lift-bbl",
      body: "Requires extended in-town stay and strict early recovery—plan travel accordingly.",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      body: "Combined procedures mean longer recovery—factor into your Tampa stay length.",
    },
    {
      title: "FAQs",
      href: "/faqs",
      body: "Answers about travel, flying after surgery, and becoming a patient from outside Tampa.",
    },
    {
      title: "Resources Hub",
      href: "/resources",
      body: "Central directory for all patient planning resources and downloadable guides.",
    },
  ],
  faqs: [
    {
      q: "How long should I stay in Tampa after surgery?",
      a: "The recommended length of stay varies depending on the procedure and your provider's instructions. Your surgical team will advise you on the appropriate recovery period before traveling home.",
    },
    {
      q: "Can I travel alone?",
      a: "Most providers require a responsible adult during the initial recovery period. We recommend arranging for a companion whenever possible.",
    },
    {
      q: "Are virtual consultations available?",
      a: "Yes. Many patients begin with a virtual consultation before traveling to Tampa—where you can share your own photos, review your doctor's before & after portfolio with your doctor, and discuss next steps.",
    },
    {
      q: "When can I fly after surgery?",
      a: "Travel recommendations vary depending on the procedure performed and your recovery progress. Your provider will advise you on when it is safe to fly.",
    },
    {
      q: "Will I need follow-up appointments?",
      a: "Most procedures require follow-up visits to monitor healing. Your provider will discuss your personalized follow-up schedule before you travel home.",
    },
    {
      q: "Which airport should I use?",
      a: "Tampa International Airport (TPA) and St. Pete–Clearwater International Airport (PIE) are both convenient for patients traveling to Tampa Bay.",
    },
    {
      q: "When should I arrive before surgery?",
      a: "We recommend arriving at least one day before your scheduled procedure whenever possible to settle in and prepare.",
    },
    {
      q: "What should I pack?",
      a: "Photo ID, loose clothing, slip-on shoes, medications, and compression garments if instructed. Avoid heavy luggage you can't carry after surgery.",
    },
    {
      q: "Can I drive myself after surgery?",
      a: "No. Anesthesia and pain medication impair driving. Arrange a caregiver or car service for discharge from the surgical facility.",
    },
    {
      q: "Should I book a hotel near the surgical facility?",
      a: "Staying nearby simplifies follow-up visits and reduces travel strain during early recovery. Our team can suggest general areas to consider.",
    },
    {
      q: "Is medical clearance required?",
      a: "Depending on your procedure and health history, pre-operative labs or medical clearance may be required. Your provider outlines requirements during planning.",
    },
    {
      q: "Can I finance my procedure as an out-of-town patient?",
      a: "Yes. Financing is available regardless of where you live. Review options during your complimentary consultation.",
      links: [{ text: "Financing Options", href: "/financing-options" }],
    },
    {
      q: "Is there a downloadable guide?",
      a: "Yes. Our Out-of-Town Patient Guide PDF is available—request access from our team during consultation.",
    },
    {
      q: "What if my surgery date changes?",
      a: "Dates can shift for medical reasons. Book flexible travel when possible and stay in close contact with our team about timing.",
    },
  ],
  faqTitle: "Out-Of-Town Patient FAQs",
  faqIntro:
    "Common questions from patients traveling to Tampa Bay for cosmetic surgery. Contact us for personalized planning support.",
  finalCtaTitle: "Ready To Plan Your Trip To Tampa?",
  schemaProcedureName: "Out-of-Town Cosmetic Surgery Patient Guide",
  schemaAlternateNames: ["Cosmetic Surgery Travel Guide Tampa", "Out-of-Town Patient Checklist"],
  schemaDescription:
    "Step-by-step out-of-town patient guide for traveling to Tampa Bay for cosmetic surgery including planning, recovery, and return home.",
});
