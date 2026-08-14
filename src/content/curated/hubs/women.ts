import type { PageContent } from "@/lib/content";
import pageJson from "@/content/pages/women.json";
import { createCuratedPage } from "@/lib/premium-curated/build-content";
import { curatedSeoFromPage, curatedVisualsFromPage } from "@/lib/premium-curated/page-json";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { getPageEyebrow, getPageHeroTitle } from "@/lib/premium-page-utils";

const page = pageJson as PageContent;
const heroTitle = `${getPageHeroTitle(page)} In Tampa Bay`;

export const womenHubContent: CuratedPageContent = createCuratedPage({
  slug: "women",
  category: "women",
  seo: curatedSeoFromPage(page),
  visuals: curatedVisualsFromPage(page),
  intro: {
    eyebrow: getPageEyebrow(page.slug),
    heroTitle,
    title: "Advanced Female Body Contouring In Tampa Bay",
    lead: "Tampa Bay Body Sculpting connects women with board-certified providers specializing in liposuction, BBL, tummy tuck, waist contouring, and breast procedures—for beautiful, natural feminine results.",
    paragraphs: [
      "Whether you want to contour your midsection with Lipo 360, enhance curves with a Brazilian Butt Lift (BBL), restore your figure with a tummy tuck, or refine your waist with feminine contouring—we guide you to the right procedure and provider.",
      "Our approach is personalized and results-focused. We take time to understand the look you are hoping to achieve, then match you with a provider known for delivering those outcomes across our Florida network.",
      "We simplify the entire process from complimentary virtual consultation through procedure planning—while helping you access competitive pricing, current specials, and flexible financing options.",
      "Every step is designed to give you clarity, confidence, and results that look naturally beautiful and feminine.",
      "Partners and spouses often ask about men's procedures too—gynecomastia surgery, male tummy tuck, and dad bod sculpting are among our most requested men's guides. Explore our men's hub when someone in your household is researching alongside you.",
    ],
  },
  glance: {
    col1Title: "Procedures we guide",
    col1Items: [
      "Lipo 360 & liposuction",
      "Brazilian Butt Lift (BBL)",
      "Tummy tuck & mommy makeover",
      "Waist, arm, thigh & chin contouring",
    ],
    candidates: [
      "Women seeking enhanced feminine silhouette",
      "Near goal weight in good overall health",
      "Realistic expectations about recovery",
      "Ready for a complimentary virtual consult",
    ],
    benefits: [
      "Personalized provider matching",
      "Transparent pricing & financing",
      "Concierge support through recovery",
      "Natural, feminine aesthetic focus",
    ],
    procedureSnapshot: [
      "Complimentary virtual consultation",
      "Board-certified provider network",
      "Out-of-town patient support available",
      "Dedicated follow-up throughout recovery",
    ],
  },
  howItWorks: {
    title: "How We Guide You Through Women's Body Contouring",
    intro:
      "Our concierge process connects you with the right procedure and provider for your feminine aesthetic goals. Here is how it works from first contact through results.",
    steps: [
      {
        step: "01",
        title: "Complimentary Virtual Consultation",
        body: "Share your goals, your own photos, and medical history during a free virtual consult. We also review representative before & after results privately and discuss Lipo 360, BBL, tummy tuck, waist contouring, or other procedures that align with your vision.",
      },
      {
        step: "02",
        title: "Personalized Procedure & Provider Matching",
        body: "Based on your goals, we connect you with a board-certified provider experienced in female body contouring and known for delivering the feminine results you want.",
      },
      {
        step: "03",
        title: "Transparent Pricing & Financing Review",
        body: "We review procedure costs, current specials, and flexible financing options—so you understand the investment before committing to surgery.",
      },
      {
        step: "04",
        title: "In-Person Pre-Operative Visit",
        body: "Your surgeon conducts a thorough evaluation, confirms your surgical plan, discusses combinations like mommy makeover or BBL with lipo, and sets clear recovery expectations.",
      },
      {
        step: "05",
        title: "Procedure Day & Concierge Support",
        body: "Your provider performs your planned procedure—whether lipo, BBL, abdominoplasty, or a combination. Our team remains available throughout your recovery journey.",
      },
      {
        step: "06",
        title: "Recovery Guidance & Follow-Up",
        body: "We provide recovery resources and stay connected through healing. Follow-up with your surgeon ensures you progress safely toward your final feminine contour.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Procedure directory",
    title: "Women's Body Contouring Procedures In Tampa Bay",
    intro:
      "Browse our women's procedure guides below. Each links to a dedicated page with candidacy, how it works, recovery, FAQs, and what to expect from board-certified providers.",
    items: [
      {
        title: "Lipo 360",
        body: "Comprehensive circumferential liposuction of the abdomen, waist, flanks, and lower back for a slimmer, more sculpted feminine silhouette and defined waistline.",
      },
      {
        title: "Brazilian Butt Lift (BBL)",
        body: "Fat transfer to enhance buttock shape and volume using your body's own fat—creating fuller curves and a balanced hourglass figure when combined with waist lipo.",
      },
      {
        title: "Feminine Waist Contouring",
        body: "Precision abdominal and waist sculpting designed to enhance natural curves and create an elegant, feminine midsection with smooth contour transitions.",
      },
      {
        title: "Tummy Tuck (Abdominoplasty)",
        body: "Removes excess abdominal skin and tightens separated muscles for a flatter, smoother stomach—especially after pregnancy or significant weight loss.",
      },
      {
        title: "Mommy Makeover",
        body: "Combines tummy tuck, breast surgery, and body contouring to restore pre-pregnancy shape in one comprehensive surgical plan when safe.",
      },
      {
        title: "Thigh, Arm & Chin Liposuction",
        body: "Targeted contouring for inner/outer thighs, upper arms, and jawline—refining areas that resist diet and exercise for balanced feminine proportions.",
      },
    ],
    closingParagraphs: [
      "Not sure which procedure fits your goals? Start with a complimentary virtual consultation—we will help you navigate options honestly.",
      "Many women combine procedures like BBL with Lipo 360 or tummy tuck for comprehensive feminine transformation.",
    ],
  },
  candidacy: {
    title: "Who Is A Good Candidate For Women's Body Contouring?",
    intro:
      "Women's procedure candidacy varies by treatment. General guidelines apply across our services—a consultation confirms the right plan for you.",
    idealTitle: "Often A Good Fit",
    ideal: [
      "Near goal weight with specific contour concerns",
      "Good overall health and non-smoker",
      "Realistic expectations about recovery and results",
      "Bothered by stubborn fat, loose skin, or loss of curves",
      "Ready to commit to post-operative care instructions",
    ],
    considerationsTitle: "May Need Evaluation First",
    considerations: [
      "Very high BMI—weight optimization may be recommended first",
      "Active smoking—must stop before most surgical procedures",
      "Planning future pregnancies—may affect tummy tuck timing",
      "Unclear goals—consultation helps clarify the best procedure",
    ],
    closing:
      "Every procedure has specific candidacy criteria. Your complimentary consultation covers the details for whichever treatment interests you.",
  },
  combinations: {
    title: "Popular Women's Procedure Combinations",
    intro:
      "Many Tampa Bay women combine procedures for comprehensive feminine enhancement in one surgical plan. These are the most requested combinations. Partners often ask about men's procedures too—see our men's hub for gynecomastia surgery, male tummy tuck, and dad bod sculpting.",
  },
  results: {
    title: "What Results Can Women Expect?",
    intro:
      "Results vary by procedure but share a common goal: natural-looking feminine enhancement that enhances your curves and silhouette.",
    items: [
      {
        title: "Natural Feminine Contours",
        body: "Whether a slimmer waist, fuller curves, flatter abdomen, or refined thighs—results are calibrated to feminine proportions and your unique anatomy.",
      },
      {
        title: "Provider Expertise Matters",
        body: "Female body contouring requires understanding of feminine aesthetic goals. Our network prioritizes providers experienced in delivering beautiful, natural results.",
      },
      {
        title: "Combination Synergy",
        body: "Pairing BBL with Lipo 360, tummy tuck with breast surgery, or waist contouring with thigh lipo creates comprehensive transformation in one recovery.",
      },
      {
        title: "Realistic Timelines",
        body: "Initial improvement appears within weeks; final results refine over 3–6 months depending on procedure. BBL and tummy tuck may have longer refinement periods.",
      },
      {
        title: "Long-Term Maintenance",
        body: "Stable weight and healthy habits preserve surgical results for years. We discuss maintenance during planning.",
      },
      {
        title: "Confidence & Quality Of Life",
        body: "Many women report improved clothing fit, restored post-pregnancy confidence, and satisfaction with their feminine silhouette.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Lipo 360",
      href: "/liposuction-360",
      body: "Circumferential midsection liposuction for a slimmer, sculpted waist.",
    },
    {
      title: "Brazilian Butt Lift (BBL)",
      href: "/brazilian-butt-lift-bbl",
      body: "Fat transfer to enhance buttock curves and volume.",
    },
    {
      title: "Feminine Waist Contouring",
      href: "/feminine-waist-contouring",
      body: "Precision waist and abdominal sculpting for feminine curves.",
    },
    {
      title: "Tummy Tuck",
      href: "/tummy-tuck",
      body: "Abdominoplasty for loose skin and muscle separation.",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      body: "Combined body and breast restoration after pregnancy.",
    },
    {
      title: "Breast Procedures Hub",
      href: "/breasts",
      body: "Augmentation, lift, reduction, and revision options.",
    },
    {
      title: "Thigh Liposuction",
      href: "/thigh-liposuction",
      body: "Inner and outer thigh contouring for balanced leg proportions.",
    },
    {
      title: "Labiaplasty",
      href: "/labiaplasty",
      body: "Surgical reshaping for comfort and aesthetic goals.",
    },
    {
      title: "Men's Procedures Hub",
      href: "/men",
      body: "Browse men's body sculpting options.",
    },
  ],
  relatedIntro: "Explore each women's procedure guide—or start with a complimentary virtual consultation to find your best fit.",
  faqs: [
    {
      q: "What Women's Procedures Does Tampa Bay Body Sculpting Offer?",
      a: "We guide patients through Lipo 360, BBL, tummy tuck, feminine waist contouring, mommy makeover, thigh and arm lipo, chin lipo, labiaplasty, and breast procedures via our provider network.",
    },
    {
      q: "How Do I Choose The Right Women's Procedure?",
      a: "Start with a complimentary virtual consultation. We review your goals and anatomy, then recommend the procedure—or combination—that best fits your feminine aesthetic vision.",
    },
    {
      q: "What Is Female Body Contouring?",
      a: "Female body contouring encompasses surgical procedures that enhance a woman's silhouette—slimming the waist, restoring curves, flattening the abdomen, or refining specific areas.",
    },
    {
      q: "Can I Combine A BBL With Other Procedures?",
      a: "Yes. BBL is commonly combined with Lipo 360, tummy tuck, or breast procedures for comprehensive hourglass enhancement in one surgical plan when safe.",
      links: [
        { text: "Brazilian Butt Lift", href: "/brazilian-butt-lift-bbl" },
        { text: "Lipo 360", href: "/liposuction-360" },
      ],
    },
    {
      q: "What Is The Most Popular Women's Procedure?",
      a: "Lipo 360 and BBL are among the most requested women's body contouring procedures—followed by tummy tuck and mommy makeover.",
    },
    {
      q: "What Is A Mommy Makeover?",
      a: "A mommy makeover combines body and breast procedures—typically tummy tuck, liposuction, and breast surgery—to restore pre-pregnancy shape.",
      links: [{ text: "mommy makeover", href: "/mommy-makeover" }],
    },
    {
      q: "How Much Do Women's Procedures Cost In Tampa?",
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
      a: "Yes. We connect you with carefully selected board-certified providers in Florida experienced in female body contouring.",
    },
    {
      q: "What Is Recovery Like For Women's Body Contouring?",
      a: "Recovery varies by procedure—chin lipo is days; BBL and tummy tuck require weeks with specific restrictions. Each guide covers timelines in detail.",
      links: [{ text: "recovery guides", href: "/recovery-guides" }],
    },
    {
      q: "What Is Feminine Waist Contouring?",
      a: "Feminine waist contouring uses precision liposuction to sculpt the abdomen and waistline for a slimmer, more defined feminine silhouette.",
      links: [{ text: "Feminine Waist Contouring", href: "/feminine-waist-contouring" }],
    },
    {
      q: "Can I Get Breast Procedures Through Tampa Bay Body Sculpting?",
      a: "Yes. We guide patients through breast augmentation, lift, reduction, revision, and rejuvenation via our provider network.",
      links: [{ text: "breast procedures", href: "/breasts" }],
    },
    {
      q: "Can I See Before-And-After Results?",
      a: "Yes. Before & after photos are reviewed privately during your complimentary consultation—not posted on our public website. Your provider will walk through representative results and discuss what may be realistic for your anatomy and goals.",
    },
    {
      q: "How Do I Schedule A Women's Procedure Consultation?",
      a: "Schedule a complimentary virtual consultation online or call 813-557-6400. We will discuss your goals and connect you with the right provider.",
    },
    {
      q: "Do You Offer Financing For Women's Procedures?",
      a: "Yes. Flexible financing through trusted partners is available. Payment plans are reviewed during consultation.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "What Should I Expect At My First Consultation?",
      a: "Your free virtual consult covers goals, medical history, sharing your own photos, privately reviewing representative before & after results, procedure options, candidacy, pricing, and next steps—no obligation to proceed.",
    },
  ],
  faqTitle: "Women's Body Contouring FAQs",
  faqIntro: "Common questions about women's procedures in Tampa Bay—options, candidacy, combinations, and how to get started.",
  finalCtaTitle: "Ready To Explore Women's Body Contouring In Tampa Bay?",
  schemaProcedureName: "Female Body Contouring",
  schemaAlternateNames: ["Women's Body Sculpting", "Female Cosmetic Surgery", "Women's Procedures"],
  schemaDescription:
    "Explore female body contouring in Tampa Bay including liposuction, BBL, tummy tuck, waist contouring, and breast procedures.",
  heroSecondaryCta: "Women's procedures at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "How it works" },
    { href: "#procedure-focus", label: "Procedures" },
    { href: "#candidacy", label: "Candidacy" },
    { href: "#recovery", label: "Recovery" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQs" },
  ],
});
