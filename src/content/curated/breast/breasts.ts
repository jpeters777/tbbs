import { createCuratedPage } from "@/lib/premium-curated/build-content";
import type { CuratedPageContent } from "@/lib/premium-curated/types";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const breastsContent: CuratedPageContent = createCuratedPage({
  slug: "breasts",
  category: "breast",
  seo: {
    title: "Breast Surgery Tampa | Breast Procedures Hub | Tampa Bay Body Sculpting",
    description:
      "Explore breast surgery in Tampa Bay—augmentation, lift, reduction, rejuvenation, revision, and implant exchange. Find the right procedure with a complimentary consultation.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-e67c52e.png",
      alt: "Woman representing breast surgery procedures in Tampa Bay",
    },
  },
  intro: {
    eyebrow: "Breast surgery · Tampa Bay",
    heroTitle: "Breast Procedures In Tampa Bay",
    title: "Your Guide To Breast Surgery Options In Tampa",
    lead: "From augmentation and lift to reduction, rejuvenation, revision, and implant exchange—explore Tampa Bay breast procedures matched to your goals, anatomy, and timeline with board-certified providers.",
    paragraphs: [
      "Breast surgery is not one procedure—it is a family of options tailored to what you want to change. Volume, position, size, symmetry, and correction after prior surgery each point to a different path.",
      "Tampa Bay Body Sculpting connects you with experienced board-certified plastic surgeons across Florida. We help you compare procedures, understand candidacy, and plan from complimentary virtual consultation through recovery.",
      "Whether you are researching your first breast procedure or seeking revision after prior surgery, this hub guides you to the right page—and the right provider—for your goals.",
    ],
  },
  introEyebrowQuestion: "Which breast procedure is right for you?",
  heroSecondaryCta: "Breast procedures at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "How it works" },
    { href: "#procedure-focus", label: "Procedures" },
    { href: "#candidacy", label: "Candidacy" },
    { href: "#recovery", label: "Recovery" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQs" },
  ],
  glance: {
    col1Title: "Procedures we guide",
    col1Items: [
      "Breast augmentation (implants)",
      "Breast lift (mastopexy)",
      "Breast reduction",
      "Breast rejuvenation & revision",
    ],
    candidates: [
      "Women seeking breast enhancement or correction",
      "Healthy adults with realistic expectations",
      "Post-pregnancy or post-weight-change concerns",
      "Prior breast surgery patients needing revision",
    ],
    benefits: [
      "Matched to the right procedure & provider",
      "Board-certified surgeon network in Florida",
      "Complimentary virtual consultation",
      "Transparent pricing & financing guidance",
    ],
    procedureSnapshot: [
      "Procedure varies by individual goals",
      "Most performed under general anesthesia",
      "Recovery timelines differ by technique",
      "Results refine over weeks to months",
    ],
  },
  howItWorks: {
    title: "How To Choose Your Breast Procedure",
    intro:
      "Selecting the right breast surgery starts with identifying your primary concern—volume, position, size, or correction—and matching it to the procedure designed for that goal.",
    steps: [
      {
        step: "01",
        title: "Identify Your Primary Goal",
        body: "Ask whether you want larger breasts, lifted shape, smaller size, natural rejuvenation, or correction after prior surgery. Your main concern determines which procedure category fits first.",
      },
      {
        step: "02",
        title: "Complimentary Virtual Consultation",
        body: "Schedule a free virtual consult to discuss goals, medical history, and timing. Our team listens first—then guides you toward the procedure pages and providers best suited to your needs.",
      },
      {
        step: "03",
        title: "Explore Procedure-Specific Pages",
        body: "Each breast procedure has a dedicated page with candidacy, technique details, recovery, and FAQs. Use this hub to navigate to augmentation, lift, reduction, rejuvenation, revision, or implant exchange.",
      },
      {
        step: "04",
        title: "In-Person Evaluation With Your Surgeon",
        body: "Your matched board-certified provider performs a physical evaluation—assessing tissue, symmetry, and anatomy—to confirm the procedure plan and discuss combinations if appropriate.",
      },
      {
        step: "05",
        title: "Surgical Planning & Scheduling",
        body: "Together you finalize technique, implant choices (if applicable), combination procedures, and surgical date. Financing, travel, and pre-operative instructions are reviewed.",
      },
      {
        step: "06",
        title: "Procedure, Recovery & Results",
        body: "Surgery is performed in an accredited setting. Recovery and follow-up care are guided by your provider. Results refine over weeks to months depending on the procedure performed.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Procedure directory",
    title: "Breast Procedures Available In Tampa Bay",
    intro:
      "Use this directory to navigate to the breast surgery procedure that matches your goal. Each link leads to a detailed page with technique information, candidacy, recovery, and FAQs.",
    items: [
      {
        title: "Breast Augmentation",
        body: "Increase breast size and improve symmetry with silicone or saline implants. The most requested enhancement procedure—ideal for volume loss after pregnancy or natural underdevelopment. → /breast-augmentation",
      },
      {
        title: "Breast Lift (Mastopexy)",
        body: "Raise sagging breasts and restore a firmer, more youthful shape without necessarily adding volume. Common after pregnancy, breastfeeding, or weight change. → /breast-lift",
      },
      {
        title: "Breast Reduction",
        body: "Reduce breast size to relieve back, neck, and shoulder pain and create proportionate, lighter breasts. Functional and aesthetic improvement combined. → /breast-reduction",
      },
      {
        title: "Breast Rejuvenation",
        body: "Tailored restoration combining lift, implants, or fat transfer breast augmentation for natural shape and volume recovery after life changes. → /breast-rejuvenation",
      },
      {
        title: "Breast Revision",
        body: "Corrective surgery for unsatisfactory prior results—capsular contracture, malposition, asymmetry, rippling, or shape changes. → /breast-revision",
      },
      {
        title: "Breast Implant Exchange",
        body: "Replace existing implants for updated size, profile, fill type, or routine maintenance as part of long-term implant care. → /breast-implant-exchange",
      },
    ],
    closingParagraphs: [
      "Not sure which procedure fits? Start with a complimentary virtual consultation—we help you compare options honestly.",
      "Many Tampa Bay patients combine breast procedures with body contouring in mommy makeover or comprehensive restoration plans.",
    ],
    sectionId: "procedure-focus",
  },
  candidacy: {
    title: "Who Is A Good Candidate For Breast Surgery?",
    intro:
      "Candidacy varies by procedure—but healthy adults with clear goals and realistic expectations are the foundation. A consultation matches your anatomy to the right breast surgery path.",
    idealTitle: "Often A Good Fit",
    ideal: [
      "Clear aesthetic or functional breast concerns",
      "Good overall health and stable weight",
      "Non-smoker willing to follow recovery protocol",
      "Realistic expectations about scars and downtime",
      "Finished breastfeeding when possible (timing discussed)",
    ],
    considerationsTitle: "Procedure Selection Depends On",
    considerations: [
      "Volume loss → augmentation or rejuvenation",
      "Sagging → breast lift or lift plus augmentation",
      "Oversized breasts → reduction",
      "Prior surgery concerns → revision or implant exchange",
    ],
    closing:
      "We help you navigate candidacy across all breast procedures—connecting you with the right page and provider for your specific goals.",
  },
  recovery: {
    title: "What To Expect After Breast Surgery",
    intro:
      "Recovery varies by procedure—augmentation is often shorter than lift or reduction. Your surgeon's protocol is tailored to the techniques performed.",
    steps: [
      {
        step: "01",
        title: "First 24–48 Hours",
        body: "Rest with help at home. Short walks as directed. Soreness, swelling, and bra or garment wear are standard across breast procedures.",
      },
      {
        step: "02",
        title: "First 1–2 Weeks",
        body: "Return to light activity or desk work varies by procedure extent. Arm and lifting restrictions protect healing incisions and tissue.",
      },
      {
        step: "03",
        title: "Weeks 2–6",
        body: "Continue support garments. Strenuous exercise typically waits until clearance—commonly around six weeks.",
      },
      {
        step: "04",
        title: "Weeks 6+ And Beyond",
        body: "Gradual return to full activity when approved. Final results continue refining over 3–6 months depending on the procedure.",
      },
    ],
  },
  results: {
    title: "Breast Surgery Results & What To Expect",
    intro:
      "Results depend on the procedure performed—but structural surgical changes create lasting improvement when weight stays stable and follow-up care is maintained.",
    items: [
      {
        title: "Procedure-Specific Outcomes",
        body: "Augmentation adds volume; lift elevates shape; reduction decreases size and relieves symptoms; rejuvenation restores combined goals; revision corrects prior results.",
      },
      {
        title: "Timeline To Final Results",
        body: "Initial improvement appears as swelling subsides—often within weeks. Final contour typically refines over 3–6 months across most breast procedures.",
      },
      {
        title: "Combination Procedures",
        body: "Mommy makeover and lift-plus-augmentation plans address multiple concerns in one surgical timeline when safe and appropriate.",
      },
      {
        title: "Stable Weight Matters",
        body: "Weight change affects breast appearance over time regardless of procedure. Stable habits preserve results.",
      },
      {
        title: "Implant Maintenance",
        body: "Patients with implants should follow routine monitoring and understand long-term exchange expectations.",
      },
      {
        title: "Long-Term Satisfaction",
        body: "Well-matched procedures with realistic expectations consistently rank among the highest-satisfaction cosmetic surgeries.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Breast Surgery Photos At Consult",
      href: "/before-after-photos/breast",
      body: "Tampa breast before & after photos are reviewed at your complimentary consult—not posted on the website.",
    },
    {
      title: "Breast Lift",
      href: "/breast-lift",
      body: "Mastopexy to raise sagging breasts and restore youthful shape.",
    },
    {
      title: "Breast Reduction",
      href: "/breast-reduction",
      body: "Reduce size and relieve physical discomfort from oversized breasts.",
    },
    {
      title: "Breast Rejuvenation",
      href: "/breast-rejuvenation",
      body: "Combined restoration with lift, implants, or fat transfer breast augmentation.",
    },
    {
      title: "Breast Revision",
      href: "/breast-revision",
      body: "Corrective surgery for prior breast procedure concerns.",
    },
    {
      title: "Breast Implant Exchange",
      href: "/breast-implant-exchange",
      body: "Replace existing implants for updated size or style.",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      body: "Breast procedures combined with tummy tuck and body contouring.",
    },
    {
      title: "Women's Procedures Hub",
      href: "/women",
      body: "Browse all women's body and breast procedures.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible payment plans for breast surgery.",
    },
  ],
  faqs: [
    {
      q: "What Breast Procedures Does Tampa Bay Body Sculpting Offer?",
      a: "We guide patients through breast augmentation, breast lift, breast reduction, breast rejuvenation, breast revision, and breast implant exchange—with board-certified providers across Florida.",
    },
    {
      q: "How Do I Choose The Right Breast Procedure?",
      a: "Start with your primary goal: volume (augmentation), elevation (lift), size decrease (reduction), combined restoration (rejuvenation), or correction (revision/exchange). A complimentary consultation helps narrow the fit.",
    },
    {
      q: "What Is The Most Popular Breast Surgery In Tampa?",
      a: "Breast augmentation with implants is the most requested procedure. Breast lift and mommy makeover combinations are also highly popular—especially after pregnancy.",
      links: [{ text: "Breast Augmentation", href: "/breast-augmentation" }],
    },
    {
      q: "Can I Combine Breast Procedures?",
      a: "Yes. Lift plus augmentation, reduction with lift, and breast surgery within mommy makeovers are common combinations when safe and appropriate.",
      links: [{ text: "Mommy Makeover", href: "/mommy-makeover" }],
    },
    {
      q: "What Is The Difference Between Augmentation And A Breast Lift?",
      a: "Augmentation adds volume with implants. A breast lift raises sagging tissue without significantly increasing size. Many patients combine both.",
      links: [
        { text: "Breast Augmentation", href: "/breast-augmentation" },
        { text: "Breast Lift", href: "/breast-lift" },
      ],
    },
    {
      q: "What Is Breast Rejuvenation?",
      a: "Rejuvenation is a tailored plan combining lift, implants, or fat transfer breast augmentation to restore shape and volume after pregnancy, aging, or weight change.",
      links: [{ text: "Breast Rejuvenation", href: "/breast-rejuvenation" }],
    },
    {
      q: "When Do I Need Breast Revision Instead Of Exchange?",
      a: "Exchange replaces implants in healthy pockets. Revision is corrective surgery for complications like capsular contracture, malposition, or asymmetry.",
      links: [
        { text: "Breast Revision", href: "/breast-revision" },
        { text: "Breast Implant Exchange", href: "/breast-implant-exchange" },
      ],
    },
    {
      q: "Does Insurance Cover Breast Surgery?",
      a: "Cosmetic augmentation and lift are typically self-pay. Breast reduction may be covered when medical necessity criteria are met. We help you understand options during consultation.",
      links: [{ text: "Breast Reduction", href: "/breast-reduction" }],
    },
    {
      q: "What Is Recovery Like After Breast Surgery?",
      a: "Recovery varies by procedure. Most breast surgeries involve soreness, swelling, bra wear, and activity limits for several weeks. Many patients return to desk work within 1–2 weeks.",
      links: [{ text: "recovery guides", href: "/recovery-guides" }],
    },
    {
      q: "How Much Does Breast Surgery Cost In Tampa?",
      a: "Cost varies by procedure, surgeon, facility, and combinations. Transparent pricing and financing are reviewed during your complimentary consultation.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "Can Breast Surgery Be Part Of A Mommy Makeover?",
      a: "Yes—breast augmentation, lift, or reduction is a core mommy makeover component, often combined with tummy tuck or liposuction.",
      links: [{ text: "Mommy Makeover", href: "/mommy-makeover" }],
    },
    {
      q: "How Do I See Before-And-After Results?",
      a: "During your complimentary virtual consultation, your provider discusses expected outcomes matched to your anatomy and goals.",
    },
    {
      q: "Are Breast Procedures Safe?",
      a: "When performed by board-certified plastic surgeons in accredited facilities, breast surgery has a strong safety record. Your consultation covers risks and technique options.",
    },
    {
      q: "What If I Had Prior Breast Surgery And Am Unhappy?",
      a: "Breast revision and implant exchange address unsatisfactory results or complications from prior surgery. A revision-experienced consultation assesses what improvement is achievable.",
      links: [{ text: "Breast Revision", href: "/breast-revision" }],
    },
    {
      q: "Do You Offer Virtual Consultations For Breast Surgery?",
      a: "Yes. Complimentary virtual consultations are the starting point for all breast procedures—we discuss goals and guide you to the right procedure page and provider.",
      links: [{ text: "virtual consultation", href: "/resources" }],
    },
    {
      q: "How Do I Schedule A Breast Surgery Consultation In Tampa Bay?",
      a: "Schedule online or call 813-557-6400. Our team will help you navigate breast procedure options and connect you with board-certified providers in Florida.",
      links: [{ text: "virtual consultation", href: "/resources" }],
    },
  ],
  faqTitle: "Breast Surgery FAQs",
  faqIntro: "Common questions about choosing and planning breast procedures in Tampa Bay.",
  finalCtaTitle: "Ready To Find Your Breast Procedure In Tampa Bay?",
  schemaProcedureName: "Breast Surgery",
  schemaAlternateNames: ["Breast Procedures", "Cosmetic Breast Surgery"],
  schemaDescription:
    "Breast surgery hub in Tampa Bay covering augmentation, lift, reduction, rejuvenation, revision, and implant exchange with board-certified providers.",
});
