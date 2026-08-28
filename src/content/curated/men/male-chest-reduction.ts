import type { PageContent } from "@/lib/content";
import pageJson from "@/content/pages/male-chest-reduction.json";
import { createCuratedPage } from "@/lib/premium-curated/build-content";
import { curatedSeoFromPage, curatedVisualsFromPage } from "@/lib/premium-curated/page-json";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { getPageEyebrow, getPageHeroTitle } from "@/lib/premium-page-utils";

const page = pageJson as PageContent;
const heroTitle = `${getPageHeroTitle(page)} In Tampa Bay`;
const pageSeo = curatedSeoFromPage(page);

export const maleChestReductionContent: CuratedPageContent = createCuratedPage({
  slug: "male-chest-reduction",
  category: "men",
  seo: {
    ...pageSeo,
    title: "Gynecomastia Surgery Tampa | Male Chest Reduction | Tampa Bay Body Sculpting",
    description:
      "Gynecomastia surgery and male breast reduction in Tampa Bay to treat enlarged male breast tissue and restore a flatter, masculine chest. Start your complimentary virtual consult.",
  },
  visuals: curatedVisualsFromPage(page),
  intro: {
    eyebrow: getPageEyebrow(page.slug),
    heroTitle,
    title: "Restore A Flatter, More Masculine Chest With Gynecomastia Surgery",
    lead: "Male chest reduction (gynecomastia surgery / male breast reduction) removes excess fat and glandular tissue to create a flatter, firmer, more masculine chest—restoring confidence when diet and exercise have not been enough.",
    paragraphs: [
      "Gynecomastia is a common condition that causes enlargement of male breast tissue due to genetics, hormonal changes, weight fluctuations, medications, or aging. Firm glandular tissue often does not respond to exercise alone—surgical removal is frequently the most effective solution. Many men search for male breast reduction when they want a clearer name for the same procedure.",
      "Every procedure is customized: some men achieve excellent results with liposuction alone, while others require excision of firm glandular tissue beneath the nipple. Your provider determines the right approach during consultation.",
      "Male chest reduction is commonly combined with Male Lipo 360, abdominal etching, or chin liposuction for comprehensive upper-body sculpting. Results are typically long-lasting when you maintain a stable weight.",
      "At Tampa Bay Body Sculpting, we connect you with experienced board-certified providers across Florida and guide you from complimentary virtual consultation through recovery.",
    ],
  },
  glance: {
    col1Title: "Treats",
    col1Items: [
      "Excess chest fat & glandular tissue",
      "Gynecomastia (enlarged male breasts)",
      "Puffy or protruding nipples",
      "Asymmetric chest fullness",
    ],
    candidates: [
      "Bothered by chest fullness despite diet & exercise",
      "Near goal weight and in good health",
      "Stable weight for several months",
      "Realistic expectations about scars & recovery",
    ],
    benefits: [
      "Flatter, firmer, more masculine chest",
      "Improved confidence & clothing fit",
      "Greater comfort during exercise",
      "Long-lasting results with stable weight",
    ],
    procedureSnapshot: [
      "Outpatient surgery under anesthesia",
      "Liposuction, excision, or both",
      "Compression vest post-operatively",
      "Final contour refines over weeks to months",
    ],
  },
  howItWorks: {
    title: "How Male Chest Reduction Works",
    intro:
      "Gynecomastia surgery is tailored to the cause of your chest enlargement—not a one-size-fits-all procedure. Understanding each phase helps you know what to expect from consultation through final results.",
    steps: [
      {
        step: "01",
        title: "Consultation & Gynecomastia Evaluation",
        body: "Your provider evaluates chest fullness, skin quality, and whether fat, glandular tissue, or both are contributing. Together you discuss liposuction-only vs. combined excision, scar placement, and combination procedures.",
      },
      {
        step: "02",
        title: "Anesthesia & Incision Planning",
        body: "Under anesthesia, the surgeon plans discreet incisions—often around the areola edge or in natural chest creases. Incision choice depends on tissue type, amount to remove, and skin elasticity.",
      },
      {
        step: "03",
        title: "Liposuction & Tissue Removal",
        body: "Liposuction removes excess fatty tissue across the chest. When firm glandular tissue is present, it is excised through a small incision—typically beneath the nipple—to flatten the chest contour.",
      },
      {
        step: "04",
        title: "Chest Contouring & Symmetry",
        body: "The surgeon sculpts both sides for balanced, natural-looking masculine proportions. Nipple position and size may be adjusted when needed as part of the overall plan.",
      },
      {
        step: "05",
        title: "Recovery & Compression Vest",
        body: "Expect mild swelling, bruising, and soreness. A compression vest supports healing and helps skin adhere smoothly. Activity limits protect incisions during the first several weeks.",
      },
      {
        step: "06",
        title: "Final Chest Results",
        body: "Swelling improves over weeks; final chest contour becomes more visible as healing progresses. Maintaining stable weight helps preserve long-term results.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Gynecomastia options",
    title: "Liposuction, Gland Removal & Combination Plans",
    intro:
      "Men searching for gynecomastia surgery in Tampa often wonder whether liposuction alone is enough or if gland excision is required. These are the approaches your provider considers.",
    items: [
      {
        title: "Liposuction-Only Chest Reduction",
        body: "When chest enlargement is primarily fatty tissue, liposuction alone may create a flat, natural contour with minimal scarring. Best for men with good skin elasticity and soft tissue fullness.",
      },
      {
        title: "Glandular Tissue Excision",
        body: "Firm glandular tissue beneath the nipple often requires surgical removal—it does not respond to liposuction or exercise. Excision through a small areolar incision is the standard approach.",
      },
      {
        title: "Combined Liposuction & Excision",
        body: "Many gynecomastia cases involve both fat and gland tissue. Combining techniques addresses the full chest for the flattest, most masculine result.",
      },
      {
        title: "Pseudogynecomastia Vs. True Gynecomastia",
        body: "Pseudogynecomastia is fat-dominant chest fullness often improved with weight loss or lipo. True gynecomastia includes firm glandular tissue requiring excision. Your provider distinguishes between them during exam.",
      },
      {
        title: "Combination With Male Lipo 360",
        body: "Chest reduction pairs naturally with circumferential midsection lipo for comprehensive upper-body sculpting—one of the most requested men's combination plans in Tampa Bay.",
      },
      {
        title: "Long-Term Results & Weight Stability",
        body: "Removed glandular tissue typically does not return. Significant weight gain, certain medications, or hormonal conditions can affect results over time—discussed honestly during consultation.",
      },
    ],
    closingParagraphs: [
      "Gynecomastia affects many men and is treatable with the right surgical plan.",
      "A complimentary consultation confirms whether liposuction, excision, or a combination approach fits your anatomy.",
    ],
  },
  comparison: {
    title: "Gynecomastia Surgery Vs. Exercise & Liposuction Alone",
    intro:
      "Not all chest fullness responds to the same treatment. Understanding the difference helps you choose the approach that actually addresses your tissue type.",
    columns: [
      {
        title: "Male Chest Reduction (Gynecomastia Surgery)",
        body: "Surgical removal of excess fat and/or firm glandular tissue for a flatter, masculine chest. Required when gland tissue or persistent fullness does not improve with diet, exercise, or liposuction alone.",
      },
      {
        title: "Exercise & Liposuction Only",
        body: "Exercise and weight loss may reduce fatty chest fullness but cannot remove firm glandular tissue. Liposuction alone works when fat—not gland—is the primary cause. Your provider determines which applies to you.",
      },
    ],
  },
  candidacy: {
    title: "Who Is A Good Candidate For Male Chest Reduction?",
    intro:
      "Ideal candidates are healthy men bothered by chest fullness that has not improved with lifestyle changes. A consultation confirms whether liposuction, gland excision, or both is needed.",
    idealTitle: "Often A Good Fit",
    ideal: [
      "Excess chest fullness despite diet & exercise",
      "Gynecomastia from genetics, hormones, or weight change",
      "Near goal weight and in good overall health",
      "Non-smoker with realistic scar expectations",
      "Stable weight for several months",
    ],
    considerationsTitle: "May Need Evaluation Or A Different Approach",
    considerations: [
      "Recent significant weight loss—may need time to stabilize first",
      "Medications or hormonal conditions causing gynecomastia—medical evaluation may be needed",
      "Primarily fatty tissue with good skin tone—liposuction alone may suffice",
      "Active smoking or uncontrolled medical conditions",
    ],
    closing:
      "We help you understand candidacy honestly—including when medical evaluation for underlying causes should come before surgery.",
  },
  recovery: {
    title: "What To Expect After Gynecomastia Surgery",
    intro:
      "Gynecomastia recovery is typically straightforward compared to larger body procedures. Compression vest wear and activity limits support optimal chest contour.",
    steps: [
      {
        step: "01",
        title: "First 24–48 Hours",
        body: "Rest with help at home. Mild swelling, bruising, and chest tightness are normal. Wear your compression vest as directed. Short walks support circulation.",
      },
      {
        step: "02",
        title: "First 1–2 Weeks",
        body: "Many patients return to light daily activities within a few days. Avoid strenuous chest workouts and heavy lifting. Garment wear continues per protocol.",
      },
      {
        step: "03",
        title: "Weeks 2–6",
        body: "Swelling improves; chest contour becomes more visible. Strenuous exercise waits until clearance—commonly around 4–6 weeks.",
      },
      {
        step: "04",
        title: "Weeks 6+ And Beyond",
        body: "Gradual return to full activity when approved. Scars continue fading over months. Final chest shape refines as swelling fully resolves.",
      },
    ],
    essentials: [
      {
        title: "Compression Vest",
        body: "Wear your compression garment for the full recommended duration. It reduces swelling and helps the chest heal with a smooth, flat contour.",
      },
      {
        title: "Incision Care",
        body: "Keep incisions clean and dry per instructions. Areolar incisions are typically well-concealed but require proper care during healing.",
      },
      {
        title: "Activity Restrictions",
        body: "Avoid chest-focused workouts, heavy lifting, and contact sports until cleared. Overexertion early can affect healing and contour.",
      },
      {
        title: "If Combined With Lipo 360",
        body: "Additional treated areas may bruise and swell alongside the chest. Follow the strictest activity and garment guidelines in your combined plan.",
      },
      {
        title: "Scar Maturation",
        body: "Scars fade significantly over months. Sun protection and scar care may be recommended when healing allows.",
      },
      {
        title: "Follow-Up Visits",
        body: "Attend all appointments so your provider can monitor healing and confirm you are progressing safely.",
      },
    ],
    tips: [
      "Wear your compression vest for the full recommended duration",
      "Walk daily as directed to support circulation",
      "Avoid chest workouts until cleared by your provider",
      "Stay hydrated and eat protein-rich meals",
      "Do not smoke—smoking impairs healing",
      "Report unusual pain, fever, or drainage changes promptly",
    ],
  },
  results: {
    title: "Gynecomastia Surgery Results & Longevity",
    intro:
      "Removed fat and glandular tissue create structural change—not temporary tightening. With stable weight, male chest reduction results are typically long-lasting.",
    items: [
      {
        title: "When You See Your Flatter Chest",
        body: "Initial improvement is visible as swelling subsides—often within weeks. Final chest contour continues refining over 2–3 months or longer.",
      },
      {
        title: "Permanent Tissue Removal",
        body: "Excised glandular tissue does not grow back. Removed fat cells in treated areas do not return—though significant weight gain can affect overall appearance.",
      },
      {
        title: "Confidence & Lifestyle Benefits",
        body: "Many men report improved comfort during exercise, better-fitting clothing, and greater confidence in situations where they remove their shirt.",
      },
      {
        title: "Combination Procedure Outcomes",
        body: "When paired with Male Lipo 360 or abdominal etching, comprehensive plans address chest and midsection concerns in one recovery timeline.",
      },
      {
        title: "Scar Expectations",
        body: "Incisions are placed as discreetly as possible—typically around the areola. Scars fade over time but are part of any surgical procedure.",
      },
      {
        title: "Maintaining Results",
        body: "Stable weight, healthy habits, and addressing underlying hormonal or medication causes help preserve your masculine chest contour long term.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Male Lipo 360",
      href: "/male-liposuction-360",
      body: "Circumferential midsection liposuction—commonly combined with chest reduction for comprehensive upper-body sculpting.",
    },
    {
      title: "Male Abdominal Sculpting",
      href: "/male-abdominal-sculpting",
      body: "Six-pack abdominal etching to enhance muscle definition alongside chest contouring.",
    },
    {
      title: "Male Chin Liposuction",
      href: "/male-chin-liposuction",
      body: "Jawline refinement frequently paired with chest and body procedures.",
    },
    {
      title: "Male Tummy Tuck",
      href: "/male-tummy-tuck",
      body: "Abdominoplasty for loose abdominal skin when body contouring extends beyond the chest.",
    },
    {
      title: "Men's Procedures Hub",
      href: "/men",
      body: "Browse all men's body sculpting options in Tampa Bay.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible payment plans for gynecomastia surgery.",
    },
    {
      title: "Recovery Guides",
      href: "/recovery-guides",
      body: "Post-operative timelines and tips for men's procedure recovery.",
    },
  ],
  faqs: [
    {
      q: "What Is Gynecomastia?",
      a: "Gynecomastia is enlargement of male breast tissue caused by hormonal imbalances, genetics, medications, weight gain, aging, or other factors. Firm glandular tissue often does not improve with exercise or weight loss alone.",
    },
    {
      q: "What Is Male Chest Reduction Surgery?",
      a: "Male chest reduction—also called gynecomastia surgery or male breast reduction—removes excess fat and/or glandular tissue to create a flatter, more masculine chest contour using liposuction, excision, or both.",
    },
    {
      q: "Is Male Breast Reduction The Same As Gynecomastia Surgery?",
      a: "Yes. Male breast reduction and gynecomastia surgery refer to the same type of procedure: reducing excess male breast tissue for a flatter, more masculine chest. Your provider chooses liposuction, gland excision, or both based on your anatomy.",
    },
    {
      q: "Who Is A Good Candidate For Gynecomastia Surgery In Tampa?",
      a: "Healthy men bothered by chest fullness that has not improved with diet or exercise are often good candidates. Your provider evaluates tissue type and overall health during consultation.",
    },
    {
      q: "Can Liposuction Alone Treat Gynecomastia?",
      a: "It depends. Some men have primarily fatty tissue improved with liposuction alone. Others have firm glandular tissue requiring surgical excision. Your provider determines the appropriate approach during exam.",
    },
    {
      q: "What Causes Gynecomastia?",
      a: "Common causes include hormonal changes, genetics, certain medications, weight fluctuations, aging, and medical conditions. A consultation helps identify whether an underlying cause should be addressed before surgery.",
    },
    {
      q: "How Is Male Chest Reduction Performed?",
      a: "The procedure is customized to your anatomy. Liposuction removes fatty tissue; excision removes firm glandular tissue through a small incision—often around the areola. Many cases require both techniques.",
    },
    {
      q: "What Is Recovery Like After Gynecomastia Surgery?",
      a: "Most patients return to light daily activities within a few days. Swelling, bruising, and compression vest wear are expected. Strenuous chest workouts wait until provider clearance—commonly 4–6 weeks.",
      links: [{ text: "recovery guides", href: "/recovery-guides" }],
    },
    {
      q: "Will I Have Scars After Male Chest Reduction?",
      a: "Every surgical procedure creates some scarring. Incisions are placed as discreetly as possible—typically around the areola edge. Scars fade significantly over time.",
    },
    {
      q: "Are Gynecomastia Surgery Results Permanent?",
      a: "Removed glandular tissue typically does not return. Maintaining stable weight and addressing underlying hormonal or medication causes helps preserve results long term.",
    },
    {
      q: "Can Male Chest Reduction Be Combined With Other Procedures?",
      a: "Yes. Chest reduction is commonly combined with Male Lipo 360, abdominal etching, chin liposuction, or other body contouring for comprehensive results.",
      links: [{ text: "Male Lipo 360", href: "/male-liposuction-360" }],
    },
    {
      q: "How Much Does Gynecomastia Surgery Cost In Tampa?",
      a: "Cost varies by technique, combinations, surgeon, and facility. Transparent pricing and financing are reviewed during your complimentary consultation.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "What Are The Benefits Of Male Chest Reduction?",
      a: "Benefits include a flatter, firmer, more masculine chest, improved clothing fit, greater exercise comfort, and increased confidence.",
    },
    {
      q: "How Long Until I See Final Results?",
      a: "Initial improvement appears as swelling subsides—often within weeks. Final chest contour typically refines over 2–3 months.",
    },
    {
      q: "Is Gynecomastia Common?",
      a: "Yes—gynecomastia affects many men at some point in life. It is a treatable condition, and surgery is a well-established solution when lifestyle changes are not enough.",
    },
    {
      q: "Can I Finance Gynecomastia Surgery?",
      a: "Yes. Flexible financing through trusted partners is available. Payment plans are reviewed during your consultation.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "How Do I Schedule A Gynecomastia Consultation In Tampa Bay?",
      a: "Schedule a complimentary virtual consultation online or call 813-557-6400. We will discuss your chest concerns, review candidacy, and connect you with board-certified providers.",
    },
  ],
  faqTitle: "Male Chest Reduction & Gynecomastia FAQs",
  faqIntro: "Common questions about gynecomastia surgery in Tampa Bay—causes, techniques, recovery, and results.",
  finalCtaTitle: "Ready To Explore Male Chest Reduction In Tampa Bay?",
  schemaProcedureName: "Male Chest Reduction",
  schemaAlternateNames: ["Gynecomastia Surgery", "Male Breast Reduction", "Gynecomastia Treatment"],
  schemaDescription:
    "Male chest reduction (gynecomastia surgery) removes excess fat and glandular tissue for a flatter, more masculine chest in Tampa Bay.",
});
