import { createCuratedPage } from "@/lib/premium-curated/build-content";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { CHERRY_APPLY_URL } from "@/lib/site";
import {
  CONSULT_PHOTO_FAQ_A,
  CONSULT_PHOTO_FAQ_Q,
  CONSULT_PHOTO_MEDIUM,
} from "@/content/consult-photo-messaging";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const faqsPage: CuratedPageContent = createCuratedPage({
  slug: "faqs",
  category: "resources",
  seo: {
    title: "Cosmetic Surgery FAQs | Frequently Asked Questions | Tampa Bay Body Sculpting",
    description:
      "Find answers to FAQ's about cosmetic surgery, body contouring, breast procedures, recovery, financing, consultations, and traveling for surgery.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/shutterstock_359476844_801685051614.JPG",
      alt: "Patient researching cosmetic surgery information at Tampa Bay Body Sculpting",
    },
  },
  intro: {
    eyebrow: "Patient resources · Tampa Bay",
    heroTitle: "Cosmetic Surgery FAQs In Tampa Bay",
    title: "Everything You Need To Know About Cosmetic Surgery",
    lead: "Choosing cosmetic surgery is a personal decision—and it's natural to have questions along the way. Whether you're just beginning your research or preparing for your procedure, we're here to provide clear, helpful information.",
    paragraphs: [
      "Below are answers to many of the questions we hear most often about consultations, procedures, recovery, financing, and travel. Topics span body contouring, breast surgery, and men's cosmetic procedures across our Tampa Bay provider network.",
      "Every patient has unique goals and anatomy. These FAQs offer general guidance—your complimentary virtual consultation is where recommendations become personalized to your body and timeline.",
      "If you don't see your question answered here, our team is always happy to help. Contact Tampa Bay Body Sculpting or schedule a consultation to discuss your goals with confidence.",
    ],
  },
  introEyebrowQuestion: "What do patients ask most often?",
  heroSecondaryCta: "Common questions at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "How to use this guide" },
    { href: "#procedure-focus", label: "Topic areas" },
    { href: "#candidacy", label: "Who this helps" },
    { href: "#recovery", label: "Recovery basics" },
    { href: "#results", label: "What to expect" },
    { href: "#faq", label: "All FAQs" },
  ],
  glance: {
    col1Title: "Topics covered",
    col1Items: [
      "Consultations & virtual visits",
      "Body contouring & breast procedures",
      "Recovery timelines & aftercare",
      "Financing & payment plans",
      "Travel & out-of-town patients",
      "Results, scars & longevity",
    ],
    candidates: [
      "First-time cosmetic surgery researchers",
      "Patients comparing procedure options",
      "Out-of-town patients planning travel",
      "Anyone preparing for a consultation",
    ],
    benefits: [
      "Clear answers before you commit",
      "Cross-procedure guidance in one place",
      "Links to deeper recovery & travel guides",
      "Confidence heading into your consult",
    ],
    procedureSnapshot: [
      "Updated for common Tampa Bay searches",
      "Covers body, breast & men's procedures",
      "Financing & travel FAQs included",
      "Start here, then book a consult",
    ],
  },
  howItWorks: {
    title: "How To Use This FAQ Resource",
    intro:
      "This page is organized to mirror the questions patients ask at every stage—from first Google search through recovery planning. Follow the journey below or jump straight to the FAQ section.",
    steps: [
      {
        step: "01",
        title: "Research Your Procedure Options",
        body: "Start with broad questions: What procedures do we offer? Can I combine treatments? How do I know which option fits my goals? Use these answers to narrow your focus before scheduling.",
      },
      {
        step: "02",
        title: "Schedule A Consultation",
        body: "Virtual and in-person consultations are available. You'll discuss goals, review medical history, and receive personalized recommendations—not generic advice from a blog post.",
      },
      {
        step: "03",
        title: "Understand Recovery & Results",
        body: "Recovery varies by procedure. Review general timelines here, then visit our Recovery Guides for procedure-specific detail on garments, activity limits, and healing milestones.",
      },
      {
        step: "04",
        title: "Explore Financing If Needed",
        body: "Many patients use flexible monthly payment plans through Cherry. Apply online or visit our financing page—full pricing and plan options are reviewed during your consultation.",
      },
      {
        step: "05",
        title: "Plan Travel If You're Out Of Town",
        body: "Patients fly in from across Florida and the U.S. Travel FAQs cover airports, stay length, flying home, and caregiver requirements. See our Out-of-Town Patient Guide for step-by-step planning.",
      },
      {
        step: "06",
        title: "Ask What's Still Unclear",
        body: "Didn't find your answer? Contact our team or book a complimentary virtual consultation. No question is too small when you're making a personal investment in yourself.",
      },
    ],
  },
  focusSection: {
    eyebrow: "FAQ topic areas",
    title: "What These Answers Cover",
    intro:
      "Our FAQ library spans the full patient journey—so you can find guidance whether you're comparing Lipo 360 to a tummy tuck or planning your return flight after surgery.",
    items: [
      {
        title: "Consultations & Getting Started",
        body: "How to schedule, virtual consult availability, choosing the right procedure, and what to expect in your first conversation with our team.",
      },
      {
        title: "Procedures We Offer",
        body: "Body contouring (Lipo 360, BBL, tummy tuck, mommy makeover), breast surgery, and men's procedures including male Lipo 360, chest reduction, and abdominal sculpting.",
      },
      {
        title: "Combining Procedures",
        body: "Many patients combine a tummy tuck with Lipo 360, breast surgery with body contouring, or multiple contouring areas in one plan. Safety and timing depend on your health and goals.",
      },
      {
        title: "Recovery & Healing",
        body: "General recovery timelines, when to return to activities, garment wear, and where to find procedure-specific recovery guides—detailed references available from our team during consultation.",
      },
      {
        title: "Financing & Cost",
        body: "Monthly payment options through trusted partners, what can be financed, and how pricing is reviewed transparently during consultation.",
      },
      {
        title: "Travel & Out-of-Town Care",
        body: "Airports, recommended stay length, flying home, caregiver needs, and support for patients traveling to Tampa Bay from outside the area.",
      },
    ],
    closingParagraphs: [
      "These answers reflect what patients ask most—but your situation is unique. A complimentary consultation turns general guidance into a plan built for your anatomy and timeline.",
    ],
  },
  candidacy: {
    title: "Who This FAQ Resource Helps",
    intro:
      "This page is for anyone researching cosmetic surgery in Tampa Bay—whether you're local, traveling from another state, or still deciding if surgery is right for you.",
    idealTitle: "Especially helpful if you",
    ideal: [
      "Are comparing procedures and want plain-language answers",
      "Need clarity on recovery, financing, or travel before booking",
      "Want to know what's normal before your first consultation",
      "Are an out-of-town patient planning a surgical trip to Tampa",
    ],
    considerationsTitle: "When to go deeper",
    considerations: [
      "Procedure-specific candidacy requires an in-person or virtual evaluation",
      "Exact pricing and financing approval depend on your treatment plan",
      "Travel timelines are personalized based on your surgery and healing",
      "Medical history may affect recommendations beyond general FAQs",
    ],
    closing:
      "Use this page as your starting point—then schedule a consultation for answers tailored to your body, health, and goals.",
  },
  recovery: {
    title: "Recovery Basics Across Procedures",
    intro:
      "Recovery timelines vary by procedure, but patients ask about the same themes: downtime, garments, scars, and when results appear. These fundamentals apply across body contouring, breast, and men's surgery.",
    steps: [
      {
        step: "01",
        title: "First Few Days",
        body: "Rest with help at home. Mild soreness, swelling, and bruising are normal. Follow wound care, garment, and medication instructions exactly.",
      },
      {
        step: "02",
        title: "First 1–2 Weeks",
        body: "Many patients return to light daily activities or desk work within one to two weeks depending on the procedure. Activity limits protect healing.",
      },
      {
        step: "03",
        title: "Weeks 2–6",
        body: "Continue compression or support garments if prescribed. Increase activity only with provider approval. Strenuous exercise typically waits until clearance.",
      },
      {
        step: "04",
        title: "Months 3–6 And Beyond",
        body: "Swelling continues resolving; scars mature. Final results refine over weeks to months. Stable weight and healthy habits help preserve outcomes long term.",
      },
    ],
  },
  results: {
    title: "What To Expect From Your Results",
    intro:
      "Patients often ask how long results last, when they'll see final outcomes, and whether scarring is visible. These themes apply across the procedures we help coordinate in Tampa Bay.",
    items: [
      {
        title: "Long-Lasting Outcomes",
        body: "Most cosmetic surgery results are long-lasting when combined with a healthy lifestyle and stable weight. Maintaining good nutrition and regular exercise helps preserve results for many years.",
      },
      {
        title: "Timeline To Final Results",
        body: "Initial improvements appear as swelling decreases, but final results may continue developing over several months as tissues settle and scars mature.",
      },
      {
        title: "Scarring",
        body: "Most procedures involve some scarring. Incisions are placed strategically whenever possible, and scars typically improve as they mature. Follow post-operative and scar care instructions.",
      },
      {
        title: "Realistic Expectations",
        body: "Results depend on anatomy, procedure extent, and healing. Your consultation sets honest expectations—what's achievable for your body, not a filtered photo.",
      },
      {
        title: "Before & After Photos At Consultation",
        body: CONSULT_PHOTO_MEDIUM,
      },
      {
        title: "Maintaining Results",
        body: "Weight stability, smoking cessation, and following aftercare guidance all support long-term satisfaction. Your provider reviews lifestyle factors during planning.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Recovery Guides",
      href: "/recovery-guides",
      body: "Procedure-specific recovery timelines and garment guidance for Lipo 360, BBL, tummy tuck, and more—detailed guides available from our team during consultation.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible monthly payment plans through Cherry to help fit your procedure into your budget. Apply online in minutes.",
    },
    {
      title: "Travel Information",
      href: "/travel-information",
      body: "Planning guidance for patients traveling to Tampa Bay—including airports, accommodations, and recovery stay recommendations.",
    },
    {
      title: "Out-of-Town Patient Guide",
      href: "/out-of-town-patient-guide",
      body: "Step-by-step checklist for patients flying in for surgery—from virtual consult through return home.",
    },
    {
      title: "Liposuction Hub",
      href: "/liposuction",
      body: "Explore all liposuction and body contouring options including Lipo 360, BBL, and feminine waist contouring.",
    },
    {
      title: "Breast Procedures",
      href: "/breasts",
      body: "Augmentation, lift, reduction, revision, and rejuvenation options with Tampa Bay providers.",
    },
    {
      title: "Men's Procedures",
      href: "/men",
      body: "Male Lipo 360, tummy tuck, chest reduction, and abdominal sculpting for men seeking refined contour.",
    },
    {
      title: "Resources Hub",
      href: "/resources",
      body: "Central directory for financing, travel, recovery, FAQs, and patient planning tools.",
    },
  ],
  faqs: [
    {
      q: "How do I schedule a consultation?",
      a: "Scheduling a consultation is simple. Complete our online consultation request form or contact Tampa Bay Body Sculpting directly. We'll discuss your goals, review your medical history, and help determine which procedure may be right for you.",
    },
    {
      q: "Are virtual consultations available for cosmetic surgery?",
      a: "Yes, virtual consultations are available for many body contouring and cosmetic surgery procedures. You can discuss goals, share your own photos for assessment, review representative before & after results privately, and begin planning remotely before traveling to Tampa Bay.",
    },
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "How do I know which procedure is right for me?",
      a: "Every patient has unique goals and anatomy. During your consultation, your provider will evaluate your concerns, discuss your desired results, and recommend a personalized treatment plan designed specifically for you.",
    },
    {
      q: "What procedures do you offer?",
      a: "We work with trusted surgeons offering a wide range of cosmetic procedures, including Lipo 360, tummy tuck, mommy makeover, Brazilian Butt Lift (BBL), breast augmentation, breast lift, breast reduction, arm liposuction, thigh liposuction, chin and neck liposuction, male Lipo 360, male tummy tuck, male chest reduction, and male abdominal sculpting.",
    },
    {
      q: "Can I combine multiple procedures?",
      a: "Yes. Many patients combine procedures such as a tummy tuck with Lipo 360, breast surgery with body contouring, or multiple body contouring procedures. Your provider will recommend the safest combination based on your health and cosmetic goals.",
    },
    {
      q: "How long is recovery after cosmetic surgery?",
      a: "Recovery varies depending on the procedure performed. Many patients return to light daily activities within several days to two weeks, while final healing continues over several months. Your provider will provide personalized recovery instructions for your procedure.",
    },
    {
      q: "Where can I learn more about recovery?",
      a: "Visit our Recovery Guides page for procedure-specific recovery timelines, healing tips, and helpful information to prepare for your recovery.",
      links: [{ text: "Recovery Guides", href: "/recovery-guides" }],
    },
    {
      q: "Do you offer financing?",
      a: "Yes. We offer financing through Cherry, allowing many qualified patients to make affordable monthly payments for their cosmetic procedures. Apply securely online—many applicants receive a decision within minutes.",
      links: [
        { text: "Apply with Cherry", href: CHERRY_APPLY_URL },
        { text: "financing options", href: "/financing-options" },
      ],
    },
    {
      q: "How do I apply for Cherry financing?",
      a: "Complete a secure online application through our Cherry portal. Many qualified patients receive a decision within minutes. Our team can also walk you through the process during your complimentary consultation.",
      links: [{ text: "Apply with Cherry", href: CHERRY_APPLY_URL }],
    },
    {
      q: "How long will my results last?",
      a: "Most cosmetic surgery results are long-lasting when combined with a healthy lifestyle and stable weight. Maintaining good nutrition and regular exercise can help preserve your results for many years.",
    },
    {
      q: "Will I have scars?",
      a: "Most cosmetic procedures involve some scarring. Your provider carefully places incisions whenever possible, and scars typically continue to improve as they mature over time. Following your post-operative instructions and scar care recommendations can help optimize healing.",
    },
    {
      q: "How soon will I see my final results?",
      a: "Initial improvements are often visible as swelling begins to decrease, but final results may continue to develop over several months as your body heals.",
    },
    {
      q: "I live outside Tampa. Can I still become a patient?",
      a: "Absolutely. Many of our patients travel from throughout Florida and across the United States. We provide virtual consultations and help guide out-of-town patients throughout the entire process.",
      links: [{ text: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" }],
    },
    {
      q: "Do you provide travel information?",
      a: "Yes. Our Travel Information page offers helpful guidance for patients traveling to the Tampa Bay area, including planning tips and what to expect before and after surgery.",
      links: [{ text: "Travel Information", href: "/travel-information" }],
    },
    {
      q: "How long should I stay in Tampa after cosmetic surgery?",
      a: "The recommended length of stay after cosmetic surgery in Tampa varies depending on the procedure performed and your individual recovery process. During your consultation, your provider will discuss recovery expectations and provide personalized travel recommendations.",
    },
    {
      q: "Can I travel alone for surgery?",
      a: "Depending on the procedure, patients may need assistance during the initial recovery period after cosmetic surgery. Our team can help guide you through recommended recovery planning, transportation, and post-operative support prior to traveling.",
    },
    {
      q: "When can I fly home after surgery?",
      a: "Travel timelines after liposuction, tummy tuck, BBL, or other cosmetic procedures vary based on the surgery performed and your healing progress. Your provider will give personalized recommendations regarding when it is appropriate and safe to fly home after surgery.",
    },
    {
      q: "Which airport is closest to Tampa Bay Body Sculpting?",
      a: "Tampa International Airport (TPA) and St. Pete–Clearwater International Airport (PIE) both provide convenient access for patients traveling to the Tampa Bay area for cosmetic surgery.",
    },
    {
      q: "How soon can I return to normal activities after surgery?",
      a: "Recovery timelines vary depending on the procedure performed and your individual healing process. Your provider will discuss recovery expectations, activity restrictions, and post-operative instructions during your consultation.",
    },
    {
      q: "Will I need someone to help me after surgery?",
      a: "Depending on the procedure, patients may require assistance during the initial recovery period. Our team can help guide you through recommended recovery planning and post-operative support.",
    },
    {
      q: "What procedures are most popular for traveling patients?",
      a: "Many traveling patients visit Tampa Bay for procedures such as Lipo 360, Brazilian Butt Lift (BBL), tummy tuck, breast surgery, male Lipo 360, and advanced body contouring treatments.",
    },
    {
      q: "Didn't find your answer?",
      a: "If you still have questions, we're here to help. Contact Tampa Bay Body Sculpting to schedule a consultation, and our team will be happy to answer your questions and help you feel confident about your cosmetic surgery journey.",
    },
  ],
  faqTitle: "Cosmetic Surgery FAQs",
  faqIntro:
    "Answers to the questions patients ask most about consultations, procedures, recovery, financing, and travel. Reach us at info@tampabaybodysculpting.com if you need more help.",
  finalCtaTitle: "Still Have Questions? We're Here To Help",
  schemaProcedureName: "Cosmetic Surgery Patient FAQ",
  schemaAlternateNames: ["Cosmetic Surgery FAQs", "Plastic Surgery FAQ Tampa"],
  schemaDescription:
    "Frequently asked questions about cosmetic surgery, body contouring, breast procedures, recovery, financing, and travel at Tampa Bay Body Sculpting.",
});
