import type { KeywordLink } from "@/lib/keyword-links";
import { premiumWhyChoose } from "@/content/premium-shared-sections";

export const lipo360Visuals = {
  hero: {
    src: "/images/blob-10293ad.png",
    alt: "Lipo 360 body contouring results in Tampa Bay",
  },
};

export const lipo360Intro = {
  eyebrow: "Body contouring · Tampa Bay",
  heroTitle: "Lipo 360 in Tampa Bay",
  title: "Sculpt Your Midsection From Every Angle",
  lead: "Comprehensive 360-degree body contouring designed to sculpt your waistline, abdomen, flanks, and lower back for a more balanced silhouette—from every angle.",
  paragraphs: [
    "Lipo 360 is one of today's most popular body contouring procedures because it treats the entire midsection instead of a single area. By removing stubborn fat from the abdomen, waist, flanks, and lower back, Lipo 360 creates a smoother, more proportionate appearance.",
    "Unlike traditional liposuction, which often targets one isolated area, Lipo 360 focuses on creating balance and definition around your entire torso. Many patients combine Lipo 360 with a tummy tuck or Brazilian Butt Lift (BBL) to further enhance their results.",
    "At Tampa Bay Body Sculpting, we provide personalized guidance through our trusted provider network—helping you understand your options and confidently navigate your body contouring journey.",
  ],
};

export const lipo360Glance = {
  areas: ["Abdomen", "Waist & love handles", "Lower back"],
  candidates: [
    "Near goal weight with stubborn midsection fat",
    "Good skin elasticity",
    "Non-smoker in good overall health",
    "Realistic expectations",
  ],
  benefits: [
    "More defined waistline from every angle",
    "Multiple areas treated in one procedure",
    "Smoother, balanced body proportions",
    "Long-lasting results with a stable weight",
  ],
};

export const lipo360Comparison = {
  title: "Lipo 360 Vs. Traditional Liposuction",
  intro:
    "Both procedures permanently remove fat—but Lipo 360 is designed for patients who want a comprehensive midsection transformation rather than treating one area alone.",
  columns: [
    {
      title: "Lipo 360",
      body: "Treats the entire midsection in one plan—abdomen, waist, flanks, and lower back—for a balanced, circumferential result and a more defined waistline.",
    },
    {
      title: "Traditional Liposuction",
      body: "Targets one or more specific areas—such as the arms, thighs, chin, or abdomen—to refine contour where you need it most.",
    },
  ],
};

export const lipo360Combinations = {
  title: "Commonly Combined With Lipo 360",
  intro:
    "Many patients pair Lipo 360 with complementary procedures for more comprehensive results in a single surgical plan.",
  groups: [
    {
      label: "Body contouring",
      links: [
        { label: "Tummy Tuck", href: "/tummy-tuck" },
        { label: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" },
        { label: "Mommy Makeover", href: "/mommy-makeover" },
        { label: "Thigh Liposuction", href: "/thigh-liposuction" },
      ],
    },
    {
      label: "Arms & add-ons",
      links: [
        { label: "Arm Lipo 360 / Arm Lift", href: "/arm-lipo-360-arm-lift" },
        { label: "Chin & Neck Liposuction", href: "/female-chin-liposuction" },
        { label: "All Liposuction Options", href: "/liposuction" },
      ],
    },
    {
      label: "Men",
      links: [
        { label: "Male Lipo 360", href: "/male-liposuction-360-1" },
        { label: "Male Abdominal Sculpting", href: "/male-abdominal-sculpting" },
        { label: "Men's Procedures", href: "/men" },
      ],
    },
  ],
};

export const lipo360RecoverySteps = [
  {
    step: "01",
    title: "First 24 Hours",
    body: "Expect mild discomfort, swelling, and bruising. Light walking is encouraged the same day. Your surgical team provides compression garment instructions and post-op care details.",
  },
  {
    step: "02",
    title: "First Week",
    body: "Continue gentle walking, stay hydrated, and prioritize protein-rich meals. Most patients return to light daily activities within several days. Avoid strenuous exercise.",
  },
  {
    step: "03",
    title: "Weeks 2–4",
    body: "Swelling gradually improves and energy returns. Bruising fades. Follow your provider's guidance before increasing activity levels.",
  },
  {
    step: "04",
    title: "Weeks 4–6 And Beyond",
    body: "Many patients resume more strenuous exercise with approval. Final results continue to develop over several months as swelling fully resolves.",
  },
];

export const lipo360RecoveryTips = [
  "Wear your compression garment as directed",
  "Walk daily to support circulation and healing",
  "Stay hydrated and eat protein-rich foods",
  "Follow all post-operative instructions from your provider",
];

export type Lipo360RelatedItem = {
  title: string;
  href: string;
  body: string;
  links?: KeywordLink[];
};

export const lipo360RelatedProcedures: Lipo360RelatedItem[] = [
  {
    title: "Liposuction Hub",
    href: "/liposuction",
    body: "Explore all liposuction options—arm, thigh, chin, male body sculpting, and more.",
  },
  {
    title: "Tummy Tuck",
    href: "/tummy-tuck",
    body: "Remove excess skin and tighten abdominal muscles—often combined with Lipo 360 for comprehensive midsection results.",
  },
  {
    title: "Brazilian Butt Lift (BBL)",
    href: "/brazilian-butt-lift-bbl",
    body: "Uses purified fat from liposuction to enhance buttock shape and volume while improving overall body proportions.",
  },
  {
    title: "Thigh Liposuction",
    href: "/thigh-liposuction",
    body: "Targets inner and outer thigh fullness to complement a slimmer midsection and improve leg proportions.",
  },
  {
    title: "Arm Lipo 360 / Arm Lift",
    href: "/arm-lipo-360-arm-lift",
    body: "Contours the upper arms for a leaner, more toned appearance when combined with midsection sculpting.",
  },
  {
    title: "Male Lipo 360",
    href: "/male-liposuction-360-1",
    body: "Removes stubborn fat from the abdomen, flanks, and lower back for a leaner, more athletic masculine shape.",
  },
  {
    title: "Recovery Guides",
    href: "/recovery-guides",
    body: "Week-by-week recovery timelines, tips, and answers to common post-operative questions.",
  },
  {
    title: "Financing Options",
    href: "/financing-options",
    body: "Flexible payment plans to help fit your procedure into your budget.",
  },
];

export const lipo360WhyChoose = premiumWhyChoose;

export const lipo360Faqs: {
  q: string;
  a: string;
  links?: KeywordLink[];
}[] = [
  {
    q: "What Is Lipo 360?",
    a: "Lipo 360 is a comprehensive liposuction procedure that removes unwanted fat from the entire midsection—including the abdomen, waist, flanks, and lower back. By treating these areas together, it creates a smoother, more balanced, natural-looking body contour.",
  },
  {
    q: "Who Is A Good Candidate For Lipo 360?",
    a: "Ideal candidates are in good overall health, close to their goal weight, and have stubborn midsection fat that has not responded to diet and exercise. A consultation is the best way to determine whether Lipo 360 is right for your goals.",
  },
  {
    q: "What Areas Are Treated With Lipo 360?",
    a: "Lipo 360 targets the upper and lower abdomen, waist, love handles (flanks), lower back, and bra roll—treating the entire circumference of the midsection for a more sculpted silhouette.",
  },
  {
    q: "What Is The Difference Between Lipo 360 And Regular Liposuction?",
    a: "Traditional liposuction typically targets one specific area. Lipo 360 treats the entire midsection in one procedure to create a balanced, 360-degree contour and a more defined waistline.",
    links: [{ text: "liposuction options", href: "/liposuction" }],
  },
  {
    q: "Can Lipo 360 Be Combined With A Tummy Tuck?",
    a: "Yes. Many patients combine Lipo 360 with a tummy tuck to remove excess skin, tighten abdominal muscles, and create a more comprehensive midsection result.",
    links: [{ text: "tummy tuck", href: "/tummy-tuck" }],
  },
  {
    q: "Can Lipo 360 Be Combined With A Brazilian Butt Lift (BBL)?",
    a: "Yes. Lipo 360 is commonly combined with a BBL, using purified fat removed during liposuction to enhance buttock shape and volume while improving overall body proportions.",
    links: [{ text: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" }],
  },
  {
    q: "What Is Recovery Like After Lipo 360?",
    a: "Most patients experience swelling, bruising, and soreness during the first 1–2 weeks. Compression garments support healing. Light walking begins the same day; more strenuous exercise typically resumes around four to six weeks with provider approval.",
    links: [{ text: "recovery guides", href: "/recovery-guides" }],
  },
  {
    q: "Does Lipo 360 Tighten Loose Skin?",
    a: "Lipo 360 removes excess fat but does not significantly tighten loose skin. Patients with moderate to severe skin laxity may benefit from a tummy tuck or other body contouring options.",
    links: [{ text: "tummy tuck", href: "/tummy-tuck" }],
  },
  {
    q: "How Long Do Lipo 360 Results Last?",
    a: "Results can be long-lasting when combined with a stable weight and healthy lifestyle. Fat cells removed during liposuction are permanently eliminated.",
  },
  {
    q: "Can I Finance Lipo 360?",
    a: "Yes. We offer flexible financing options through trusted partners. During your consultation, we review payment plans so you can choose the option that fits your budget.",
    links: [{ text: "financing options", href: "/financing-options" }],
  },
  {
    q: "When Can I Return To Work And Exercise?",
    a: "Many patients return to non-physical work within several days to one week. Light walking is encouraged immediately; more strenuous exercise typically resumes around four to six weeks with provider approval.",
  },
  {
    q: "How Do I Schedule A Lipo 360 Consultation?",
    a: "Schedule a complimentary virtual consultation online or call 813-557-6400. Our team will discuss your goals, review your options, and help you determine the best plan for your body.",
    links: [{ text: "virtual consultation", href: "/resources" }],
  },
];
