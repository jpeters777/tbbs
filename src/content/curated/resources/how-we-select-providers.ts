import { createCuratedPage } from "@/lib/premium-curated/build-content";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { companyStats } from "@/content/company-stats";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const howWeSelectProvidersPage: CuratedPageContent = createCuratedPage({
  slug: "how-we-select-providers",
  category: "resources",
  seo: {
    title: "How We Select Providers | Concierge Cosmetic Surgery Tampa Bay",
    description:
      "Learn how Tampa Bay Body Sculpting vets board-certified cosmetic surgery providers—11 years in business, 20,000+ procedures guided, and 20+ years average surgical experience in our network.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/shutterstock_263340653-b2373a9.jpg",
      alt: "Board-certified cosmetic surgery provider network in Tampa Bay",
    },
  },
  intro: {
    eyebrow: "Our concierge model · Tampa Bay",
    heroTitle: "How We Select Providers",
    title: "A Vetted Network Built On Experience, Safety & Results",
    lead: `For ${companyStats.yearsInBusiness} years, Tampa Bay Body Sculpting has guided patients through cosmetic surgery with a concierge model—not a single-surgeon practice. We connect you with board-certified providers who meet our standards for experience, safety, and natural-looking outcomes.`,
    paragraphs: [
      `Our team has supported ${companyStats.proceduresGuided} cosmetic procedures across Florida. That volume gives us insight into which providers consistently deliver excellent results, communicate clearly, and support patients through recovery.`,
      `Every provider in our network is board-certified and vetted for surgical experience—typically ${companyStats.providerExperienceYears} years in cosmetic and body contouring procedures. We evaluate credentials, complication rates, patient feedback, and aesthetic philosophy before making a referral.`,
      "We do not employ surgeons directly. Instead, we act as your advocate—matching your goals, anatomy, and budget with the right provider and procedure plan. You receive transparent pricing guidance, financing options, travel support, and concierge follow-up from first consult through recovery.",
      "This model lets you access multiple specialists across Tampa Bay and Florida without researching dozens of practices on your own. Our role is to simplify the process so you can move forward with confidence.",
    ],
  },
  introEyebrowQuestion: "Why does provider selection matter?",
  heroSecondaryCta: "Our standards at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "Selection process" },
    { href: "#procedure-focus", label: "What we evaluate" },
    { href: "#candidacy", label: "Who we help" },
    { href: "#results", label: "Why patients trust us" },
    { href: "#faq", label: "FAQs" },
  ],
  glance: {
    col1Title: "By the numbers",
    col1Items: [
      `${companyStats.yearsInBusiness} years serving Tampa Bay patients`,
      `${companyStats.proceduresGuided} cosmetic procedures guided`,
      `${companyStats.providerExperienceYears} years avg. provider experience`,
      "Board-certified provider network",
      "Florida-wide surgical access",
      "Concierge support through recovery",
    ],
    candidates: [
      "Patients who want expert guidance—not a hard sell",
      "Those comparing multiple procedure options",
      "Out-of-town patients needing coordination",
      "Anyone who values transparent pricing & financing",
    ],
    benefits: [
      "Vetted specialists matched to your goals",
      "No obligation complimentary consultation",
      "Transparent pricing before you commit",
      "Dedicated support before & after surgery",
    ],
    procedureSnapshot: [
      "Virtual consult to understand goals",
      "Provider matching based on procedure & aesthetic",
      "In-person pre-op with your surgeon",
      "Concierge follow-up through recovery",
    ],
  },
  howItWorks: {
    title: "How Our Provider Selection Process Works",
    intro:
      "We treat provider selection as a structured concierge service—not a referral list. Here is how we match patients with the right surgeon.",
    steps: [
      {
        step: "01",
        title: "Understand Your Goals & Anatomy",
        body: "Your complimentary virtual consultation covers what you want to change, your medical history, and realistic outcomes. We identify which procedures—Lipo 360, tummy tuck, breast surgery, male body contouring, or combinations—align with your vision.",
      },
      {
        step: "02",
        title: "Screen For Board Certification & Experience",
        body: `We only work with board-certified cosmetic surgeons who demonstrate ${companyStats.providerExperienceYears} years of relevant experience, hospital privileges, and a track record in the procedures you are considering.`,
      },
      {
        step: "03",
        title: "Match Aesthetic Philosophy & Specialty",
        body: "Different surgeons excel at different outcomes—natural BBL curves, athletic male ab sculpting, or refined breast proportions. We match you based on specialty fit, not convenience alone.",
      },
      {
        step: "04",
        title: "Review Pricing, Financing & Timeline",
        body: "Before you commit, we walk through transparent pricing, Cherry financing options, and recovery expectations so there are no surprises.",
      },
      {
        step: "05",
        title: "Coordinate Surgery & Recovery Support",
        body: "From scheduling and travel planning to post-operative check-ins, our concierge team stays involved so you are never navigating the process alone.",
      },
    ],
  },
  focusSection: {
    sectionId: "procedure-focus",
    eyebrow: "Our standards",
    title: "What We Evaluate Before Recommending A Provider",
    intro:
      "Not every board-certified surgeon is the right fit for every patient. These are the criteria we use when building your short list.",
    items: [
      {
        id: "credentials",
        title: "Board Certification & Hospital Privileges",
        body: "Active board certification in plastic or cosmetic surgery, verified credentials, and privileges at accredited surgical facilities.",
      },
      {
        id: "experience",
        title: "Procedure-Specific Experience",
        body: `Demonstrated volume and outcomes in the procedures you are considering—whether gynecomastia surgery, male tummy tuck, BBL, or breast augmentation.`,
      },
      {
        id: "safety",
        title: "Safety Record & Protocols",
        body: "Clear pre-operative screening, anesthesia standards, and complication management protocols that prioritize patient safety.",
      },
      {
        id: "results",
        title: "Before & After Consistency",
        body: "Results that align with your aesthetic goals—natural, proportionate, and appropriate for your body type.",
      },
      {
        title: "Patient Communication & Support",
        body: "Surgeons and teams who explain options clearly, set realistic expectations, and remain accessible through recovery.",
      },
    ],
    closingParagraphs: [
      "Ready to learn how we match patients with providers? Schedule a complimentary virtual consultation—there is no obligation.",
    ],
  },
  candidacy: {
    title: "Patients Who Benefit From Our Concierge Model",
    intro:
      "Our model is designed for patients who want guidance, transparency, and access—not a one-size-fits-all sales pitch.",
    idealTitle: "Often a good fit",
    ideal: [
      "First-time cosmetic surgery patients researching options",
      "Patients comparing procedures or combination plans",
      "Out-of-town visitors traveling to Tampa Bay for surgery",
      "Men exploring gynecomastia, dad bod surgery, or male body contouring",
      "Women planning mommy makeovers, BBL, or breast procedures",
    ],
    considerationsTitle: "Keep in mind",
    considerations: [
      "We connect you with independent surgeons—we do not employ providers directly",
      "Lowest price alone is not a safe way to choose a surgeon",
      "Pre-operative evaluations and medical clearance are required before surgery",
      "Realistic expectations about recovery timelines are essential",
    ],
    closing:
      "If you want a thoughtful, supported path to cosmetic surgery, our team is here to help you find the right provider—not push a single option.",
  },
  results: {
    title: "Why Patients Choose Our Concierge Approach",
    intro:
      "After 11 years and more than 20,000 procedures guided, patients tell us the difference is clarity, support, and access.",
    items: [
      {
        title: "Experience You Can Measure",
        body: `${companyStats.yearsInBusiness} years in business and ${companyStats.proceduresGuided} procedures guided give us pattern recognition most individual practices cannot offer.`,
      },
      {
        title: "Provider Choice, Not Lock-In",
        body: "We match you with specialists suited to your procedure—not whoever is available that week.",
      },
      {
        title: "Transparent From Day One",
        body: "Pricing, financing, travel, and recovery expectations are reviewed before you schedule surgery.",
      },
      {
        title: "Support Through Recovery",
        body: "Concierge follow-up, recovery guides, and direct access to our team when questions arise after surgery.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible monthly payments through Cherry—apply online in minutes.",
    },
    {
      title: "Recovery Guides",
      href: "/recovery-guides",
      body: "Procedure-specific recovery timelines and what to expect week by week.",
    },
    {
      title: "Men's Procedures",
      href: "/men",
      body: "Gynecomastia surgery, male tummy tuck, dad bod sculpting, and more.",
    },
    {
      title: "Women's Procedures",
      href: "/women",
      body: "Lipo 360, BBL, tummy tuck, breast surgery, and feminine contouring.",
    },
  ],
  faqs: [
    {
      q: "Does Tampa Bay Body Sculpting employ the surgeons?",
      a: "No. We are a concierge guidance service that connects you with independent, board-certified providers in our vetted network. You choose your surgeon with our support—we do not employ them directly.",
    },
    {
      q: "How do you vet cosmetic surgery providers?",
      a: `We evaluate board certification, years of experience (typically ${companyStats.providerExperienceYears} in relevant procedures), safety protocols, before-and-after consistency, and patient feedback before recommending a provider.`,
    },
    {
      q: "How many procedures has your team supported?",
      a: `Our concierge team has guided ${companyStats.proceduresGuided} cosmetic procedures over ${companyStats.yearsInBusiness} years serving Tampa Bay and Florida patients.`,
    },
    {
      q: "Is the initial consultation really free?",
      a: "Yes. Your complimentary virtual consultation covers your goals, candidacy, provider matching, and transparent pricing guidance. There is no obligation to schedule surgery.",
    },
    {
      q: "Can out-of-town patients use your concierge service?",
      a: "Absolutely. We regularly support patients traveling from Miami, Orlando, Jacksonville, and other states with virtual consults, travel planning, and recovery coordination in Tampa Bay.",
    },
  ],
  faqTitle: "Provider Selection FAQs",
  faqIntro: "Common questions about our concierge model, provider vetting, and how we guide Tampa Bay patients.",
  finalCtaTitle: "Ready to meet your matched provider?",
  schemaProcedureName: "Cosmetic Surgery Provider Selection",
  schemaDescription:
    "Concierge cosmetic surgery guidance and board-certified provider selection in Tampa Bay, Florida.",
});
