import type { PageContent } from "@/lib/content";
import pageJson from "@/content/pages/men.json";
import { createCuratedPage } from "@/lib/premium-curated/build-content";
import { curatedSeoFromPage, curatedVisualsFromPage } from "@/lib/premium-curated/page-json";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { getPageEyebrow, getPageHeroTitle } from "@/lib/premium-page-utils";

const page = pageJson as PageContent;
const heroTitle = `${getPageHeroTitle(page)} In Tampa Bay`;

export const menHubContent: CuratedPageContent = createCuratedPage({
  slug: "men",
  category: "men",
  seo: curatedSeoFromPage(page),
  visuals: curatedVisualsFromPage(page),
  intro: {
    eyebrow: getPageEyebrow(page.slug),
    heroTitle,
    title: "Advanced Male Body Contouring In Tampa Bay",
    lead: "Tampa Bay Body Sculpting connects men with board-certified providers specializing in liposuction, gynecomastia surgery, abdominal etching, tummy tuck, and jawline contouring—for defined, masculine results.",
    paragraphs: [
      "Whether you want a leaner midsection with Male Lipo 360, a flatter chest with gynecomastia surgery, visible ab definition with etching, or jawline refinement with chin lipo—we guide you to the right procedure and provider for your specific goals.",
      "Our approach is personalized and results-focused. We take time to understand what you want to achieve, then match you with a provider known for delivering those outcomes across our Florida network.",
      "We simplify the entire process from complimentary virtual consultation through procedure planning—while helping you access competitive pricing, current specials, and flexible financing options.",
      "Every step is designed to give you clarity, confidence, and results that look natural and masculine.",
    ],
  },
  glance: {
    col1Title: "Procedures we guide",
    col1Items: [
      "Male Lipo 360 & liposuction",
      "Gynecomastia / chest reduction",
      "Abdominal etching (six-pack)",
      "Male tummy tuck & chin lipo",
    ],
    candidates: [
      "Men seeking defined, masculine body contour",
      "Near goal weight in good overall health",
      "Realistic expectations about recovery",
      "Ready for a complimentary virtual consult",
    ],
    benefits: [
      "Personalized provider matching",
      "Transparent pricing & financing",
      "Concierge support through recovery",
      "Natural, masculine aesthetic focus",
    ],
    procedureSnapshot: [
      "Complimentary virtual consultation",
      "Board-certified provider network",
      "Out-of-town patient support available",
      "Dedicated follow-up throughout recovery",
    ],
  },
  howItWorks: {
    title: "How We Guide You Through Men's Body Contouring",
    intro:
      "Our concierge process connects you with the right procedure and provider—not a one-size-fits-all referral. Here is how it works from first contact through results.",
    steps: [
      {
        step: "01",
        title: "Complimentary Virtual Consultation",
        body: "Share your goals, your own photos, and medical history during a free virtual consult. You also review your provider's before & after portfolio with your provider and discuss which procedures—Lipo 360, chest reduction, etching, tummy tuck, or chin lipo—align with your objectives.",
      },
      {
        step: "02",
        title: "Personalized Procedure & Provider Matching",
        body: "Based on your goals, we connect you with a board-certified provider in our Florida network experienced in men's body contouring and known for delivering the outcomes you want.",
      },
      {
        step: "03",
        title: "Transparent Pricing & Financing Review",
        body: "We review procedure costs, current specials, and flexible financing options—so you understand the investment before committing to surgery.",
      },
      {
        step: "04",
        title: "In-Person Pre-Operative Visit",
        body: "Your surgeon conducts a thorough in-person evaluation, confirms your surgical plan, discusses combinations, and sets clear expectations for recovery and results.",
      },
      {
        step: "05",
        title: "Procedure Day & Concierge Support",
        body: "On surgery day, your provider performs your planned procedure—whether lipo, gynecomastia surgery, abdominoplasty, or a combination. Our team remains available for questions throughout recovery.",
      },
      {
        step: "06",
        title: "Recovery Guidance & Follow-Up",
        body: "We provide recovery resources and stay connected through healing. Follow-up with your surgeon ensures you are progressing safely toward your final masculine contour.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Procedure directory",
    title: "Men's Body Contouring Procedures In Tampa Bay",
    intro:
      "Browse our men's procedure guides below. Each links to a dedicated page with candidacy, how it works, recovery, FAQs, and what to expect from board-certified providers.",
    items: [
      {
        title: "Male Lipo 360",
        body: "Circumferential liposuction of the abdomen, waist, flanks, and lower back for a leaner, more athletic masculine torso. The foundation of most men's midsection contouring plans.",
      },
      {
        title: "Male Chest Reduction / Gynecomastia",
        body: "Surgical removal of excess chest fat and glandular tissue for a flatter, firmer, more masculine chest. Liposuction, excision, or both depending on tissue type.",
      },
      {
        title: "Male Abdominal Sculpting / Six-Pack Etching",
        body: "High-definition liposuction around abdominal muscle lines to enhance six-pack and oblique visibility. Best for men near goal weight with good underlying muscle tone.",
      },
      {
        title: "Male Tummy Tuck",
        body: "Abdominoplasty to remove excess abdominal skin and tighten weakened muscles—especially after significant weight loss when liposuction alone is not enough.",
      },
      {
        title: "Male Chin Liposuction",
        body: "Submental fat removal for a stronger, more defined jawline and reduced double chin. Frequently combined with body contouring procedures.",
      },
      {
        title: "Adult Circumcision",
        body: "Surgical foreskin removal for medical, hygiene, or personal reasons. Performed by experienced providers in our men's procedure network.",
      },
    ],
    closingParagraphs: [
      "Not sure which procedure fits your goals? Start with a complimentary virtual consultation—we will help you navigate options honestly.",
      "Many men combine procedures for comprehensive results in one surgical plan when safe and appropriate.",
    ],
  },
  candidacy: {
    title: "Who Is A Good Candidate For Men's Body Contouring?",
    intro:
      "Men's procedure candidacy varies by treatment. General guidelines apply across our body sculpting services—a consultation confirms the right plan for you.",
    idealTitle: "Often A Good Fit",
    ideal: [
      "Near goal weight with specific contour concerns",
      "Good overall health and non-smoker",
      "Realistic expectations about recovery and results",
      "Bothered by fat, chest fullness, skin laxity, or jawline definition",
      "Ready to commit to post-operative care instructions",
    ],
    considerationsTitle: "May Need Evaluation First",
    considerations: [
      "Very high BMI—weight optimization may be recommended first",
      "Active smoking—must stop before most surgical procedures",
      "Uncontrolled medical conditions requiring clearance",
      "Unclear goals—consultation helps clarify the best procedure",
    ],
    closing:
      "Every procedure has specific candidacy criteria. Your complimentary consultation covers the details for whichever treatment interests you.",
  },
  combinations: {
    title: "Popular Men's Procedure Combinations",
    intro:
      "Many Tampa Bay men combine procedures for comprehensive masculine refinement in one surgical plan. These are the most requested combinations.",
  },
  results: {
    title: "What Results Can Men Expect?",
    intro:
      "Results vary by procedure but share a common goal: natural-looking, masculine enhancement that reflects the work you put into your health and fitness.",
    items: [
      {
        title: "Defined Masculine Contours",
        body: "Whether leaner midsection, flatter chest, visible ab lines, or sharper jawline—results are calibrated to masculine proportions, not female body contouring aesthetics.",
      },
      {
        title: "Provider Expertise Matters",
        body: "Men's anatomy and aesthetic goals differ from women's. Our network prioritizes providers experienced in male body sculpting for consistent, natural results.",
      },
      {
        title: "Combination Synergy",
        body: "Pairing Lipo 360 with chest reduction, etching, or chin lipo creates comprehensive upper-body transformation in one recovery timeline.",
      },
      {
        title: "Realistic Timelines",
        body: "Initial improvement appears within weeks; final results refine over 3–6 months depending on procedure. We set honest expectations from the first consult.",
      },
      {
        title: "Long-Term Maintenance",
        body: "Stable weight, fitness, and healthy habits preserve surgical results for years. We discuss maintenance during planning.",
      },
      {
        title: "Confidence & Quality Of Life",
        body: "Many men report improved clothing fit, exercise comfort, and confidence—whether at the gym, beach, or daily life.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Male Surgery Photos At Consult",
      href: "/before-after-photos/male",
      body: "Tampa male surgery before & after photos are reviewed at your complimentary consult—not posted on the website.",
    },
    {
      title: "Male Chest Reduction",
      href: "/male-chest-reduction",
      body: "Gynecomastia surgery for a flatter, more masculine chest.",
    },
    {
      title: "Male Abdominal Sculpting",
      href: "/male-abdominal-sculpting",
      body: "Six-pack abdominal etching for athletic midsection definition.",
    },
    {
      title: "Male Tummy Tuck",
      href: "/male-tummy-tuck",
      body: "Abdominoplasty for loose skin after weight loss.",
    },
    {
      title: "Male Chin Liposuction",
      href: "/male-chin-liposuction",
      body: "Jawline and submental fat removal for a stronger profile.",
    },
    {
      title: "Adult Circumcision",
      href: "/adult-circumcision",
      body: "Foreskin removal for medical, hygiene, or personal reasons.",
    },
    {
      title: "Women's Procedures Hub",
      href: "/women",
      body: "Browse women's body contouring and breast procedures.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible payment plans for men's procedures.",
    },
    {
      title: "Travel Information",
      href: "/travel-information",
      body: "Planning men's procedures from out of town.",
    },
  ],
  relatedIntro: "Explore each men's procedure guide—or start with a complimentary virtual consultation to find your best fit.",
  faqs: [
    {
      q: "What Men's Procedures Does Tampa Bay Body Sculpting Offer?",
      a: "We guide patients through Male Lipo 360, gynecomastia surgery, abdominal etching, male tummy tuck, chin liposuction, and adult circumcision via our board-certified provider network.",
    },
    {
      q: "How Do I Choose The Right Men's Procedure?",
      a: "Start with a complimentary virtual consultation. We review your goals and anatomy, then recommend the procedure—or combination—that best fits your needs.",
    },
    {
      q: "What Is Male Body Contouring?",
      a: "Male body contouring encompasses surgical procedures that sculpt the male physique—removing stubborn fat, flattening the chest, tightening the abdomen, or defining the jawline.",
    },
    {
      q: "Can I Combine Multiple Men's Procedures?",
      a: "Yes. Popular combinations include Lipo 360 with chest reduction, abdominal etching, or chin lipo. Your surgeon determines the safest combination for your anatomy.",
      links: [{ text: "Male Lipo 360", href: "/male-liposuction-360" }],
    },
    {
      q: "What Is The Most Popular Men's Procedure?",
      a: "Male Lipo 360 is the most requested men's body contouring procedure—followed by gynecomastia surgery and abdominal etching.",
    },
    {
      q: "How Much Do Men's Procedures Cost In Tampa?",
      a: "Cost varies by procedure, combinations, and provider. Transparent pricing and financing are reviewed during your complimentary consultation.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "Do You Work With Out-Of-Town Patients?",
      a: "Yes. We support out-of-town patients with travel guidance, procedure planning, and concierge follow-up throughout recovery.",
      links: [{ text: "travel information", href: "/travel-information" }],
    },
    {
      q: "Are Your Providers Board-Certified?",
      a: "Yes. We connect you with carefully selected board-certified providers in Florida experienced in men's body contouring.",
    },
    {
      q: "What Is The Recovery Like For Men's Body Contouring?",
      a: "Recovery varies by procedure—chin lipo is days; tummy tuck is weeks. Each procedure guide covers specific timelines, and we provide recovery resources throughout healing.",
      links: [{ text: "recovery guides", href: "/recovery-guides" }],
    },
    {
      q: "Is Male Body Contouring Different From Female Procedures?",
      a: "Yes. Men's procedures emphasize masculine proportions—defined waist, flat chest, athletic abs, and strong jawline—rather than curves and hourglass shaping.",
    },
    {
      q: "What Is Gynecomastia Surgery?",
      a: "Gynecomastia surgery (male chest reduction) removes excess chest fat and glandular tissue for a flatter, more masculine chest contour.",
      links: [{ text: "male chest reduction", href: "/male-chest-reduction" }],
    },
    {
      q: "What Is Abdominal Etching For Men?",
      a: "Abdominal etching uses high-definition liposuction to enhance visible six-pack and oblique muscle lines for an athletic midsection.",
      links: [{ text: "Male Abdominal Sculpting", href: "/male-abdominal-sculpting" }],
    },
    {
      q: "Can I See Before-And-After Results?",
      a: "Yes. You can review your provider's before & after portfolio with your provider during your complimentary consultation—we do not post patient galleries on our public website. Together you'll discuss what may be realistic for your anatomy and goals.",
    },
    {
      q: "How Do I Schedule A Men's Procedure Consultation?",
      a: "Schedule a complimentary virtual consultation online or call 813-557-6400. We will discuss your goals and connect you with the right provider.",
    },
    {
      q: "Do You Offer Financing For Men's Procedures?",
      a: "Yes. Flexible financing through trusted partners is available for all men's procedures. Plans are reviewed during consultation.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "What Should I Expect At My First Consultation?",
      a: "Your free virtual consult covers goals, medical history, sharing your own photos, reviewing your provider's before & after portfolio with your provider, procedure options, candidacy, pricing, and next steps—no obligation to proceed.",
    },
  ],
  faqTitle: "Men's Body Contouring FAQs",
  faqIntro: "Common questions about men's procedures in Tampa Bay—options, candidacy, combinations, and how to get started.",
  finalCtaTitle: "Ready To Explore Men's Body Contouring In Tampa Bay?",
  schemaProcedureName: "Male Body Contouring",
  schemaAlternateNames: ["Men's Body Sculpting", "Male Cosmetic Surgery", "Men's Procedures"],
  schemaDescription:
    "Explore male body contouring in Tampa Bay including liposuction, gynecomastia surgery, abdominal etching, tummy tuck, and chin liposuction.",
  heroSecondaryCta: "Men's procedures at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "How it works" },
    { href: "#procedure-focus", label: "Procedures" },
    { href: "#candidacy", label: "Candidacy" },
    { href: "#recovery", label: "Recovery" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQs" },
  ],
});
