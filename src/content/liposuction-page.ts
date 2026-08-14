import type { KeywordLink } from "@/lib/keyword-links";
import { premiumWhyChoose, premiumWhyChooseItems } from "@/content/premium-shared-sections";

export const liposuctionVisuals = {
  hero: {
    src: "/images/shutterstock_263340653-b2373a9.jpg",
    alt: "Female waist and body contouring in Tampa Bay",
  },
  intro: {
    src: "/images/blob-b4cdcb1.png",
    alt: "Male body sculpting and liposuction consultation in Tampa",
  },
};

export const liposuctionIntro = {
  eyebrow: "Body contouring · Tampa Bay",
  heroTitle: "Liposuction in Tampa Bay",
  title: "Refine Your Shape With Liposuction",
  lead: "Stubborn fat doesn't always respond to diet and exercise. Liposuction permanently removes unwanted fat and enhances natural body contours—whether you're slimming your abdomen, sculpting your waist, defining your arms, or treating multiple areas at once.",
  paragraphs: [
    "At Tampa Bay Body Sculpting, we help you find the right liposuction procedure based on your goals, anatomy, and desired outcome. During your complimentary virtual consultation, we review your photos, walk through representative before & after results privately, discuss options like Lipo 360 or thigh liposuction, and connect you with experienced board-certified providers.",
    "Our concierge team guides you from first consult through recovery—with transparent pricing, financing options, travel support for out-of-town patients, and dedicated follow-up along the way.",
  ],
};

export type LiposuctionProcedureItem = {
  title: string;
  href: string;
  body: string;
  links?: KeywordLink[];
};

export type LiposuctionProcedureGroup = {
  label: string;
  items: LiposuctionProcedureItem[];
};

export const liposuctionProcedureGroups: LiposuctionProcedureGroup[] = [
  {
    label: "Midsection & curves",
    items: [
      {
        title: "Lipo 360",
        href: "/liposuction-360",
        body: "Comprehensive circumferential sculpting of the abdomen, waist, flanks, and lower back for a slimmer, more balanced silhouette.",
      },
      {
        title: "Feminine Waist Contouring",
        href: "/feminine-waist-contouring",
        body: "Precision abdominal and waist sculpting designed to enhance natural curves and create a more defined feminine midsection.",
      },
      {
        title: "Brazilian Butt Lift (BBL)",
        href: "/brazilian-butt-lift-bbl",
        body: "Combines liposuction with fat transfer to enhance buttock shape and volume using your body's own fat.",
      },
    ],
  },
  {
    label: "Arms, legs & face",
    items: [
      {
        title: "Arm Lipo 360 / Arm Lift",
        href: "/arm-lipo-360-arm-lift",
        body: "Contours the upper arms for a leaner, more toned appearance when diet and exercise are not enough.",
      },
      {
        title: "Thigh Liposuction",
        href: "/thigh-liposuction",
        body: "Targets inner and outer thigh fullness to improve leg proportions and create a slimmer lower-body contour.",
      },
      {
        title: "Chin & Neck Liposuction",
        href: "/female-chin-liposuction",
        body: "Refines the jawline and neck by removing submental fat for a sharper, more defined profile.",
      },
      {
        title: "Fat Transfer Breast Augmentation",
        href: "/breast-rejuvenation",
        body: "Uses purified fat from liposuction to naturally enhance breast volume without implants.",
      },
    ],
  },
  {
    label: "Men's body sculpting",
    items: [
      {
        title: "Male Lipo 360",
        href: "/male-liposuction-360-1",
        body: "Removes stubborn fat from the abdomen, flanks, and lower back for a leaner, more athletic masculine shape.",
      },
      {
        title: "Male Abdominal Sculpting",
        href: "/male-abdominal-sculpting",
        body: "Advanced abdominal etching to enhance muscle definition for patients already close to their goal physique.",
      },
      {
        title: "Male Chin Liposuction",
        href: "/male-chin-liposuction",
        body: "Reduces fat beneath the chin and along the jawline for a stronger, more sculpted masculine profile.",
      },
    ],
  },
];

export const liposuctionTreatmentAreas = [
  "Abdomen and waist",
  "Flanks (love handles) and lower back",
  "Arms and bra line",
  "Inner and outer thighs",
  "Chin, neck, and jawline",
  "Chest (men)",
  "Hips and knees",
];

export const liposuctionTreatmentAreasIntro =
  "Our providers offer liposuction for nearly every area of the body. Many patients combine multiple treatment areas—such as Lipo 360 with arm or thigh liposuction—in one procedure to maximize results.";

export const liposuctionCandidateSignals = [
  {
    title: "Close To Your Goal Weight",
    body: "Liposuction is designed for body contouring—not significant weight loss. Ideal candidates are near their target weight with localized fat deposits.",
  },
  {
    title: "Stubborn Fat That Won't Budge",
    body: "If diet and exercise haven't improved specific areas, liposuction can permanently remove fat cells from those treatment zones.",
  },
  {
    title: "Good Skin Elasticity",
    body: "Liposuction removes fat but does not tighten loose skin. If skin laxity is your main concern, a tummy tuck or lift may be a better fit.",
  },
  {
    title: "Realistic Expectations",
    body: "The best results come from a personalized plan. We help you understand what liposuction can—and cannot—achieve for your body.",
  },
];

export const liposuctionComparison = {
  title: "Liposuction Vs. Lipo 360",
  intro:
    "Many patients ask about the difference between treating one area and comprehensive midsection sculpting. Here is how they compare.",
  columns: [
    {
      title: "Traditional Liposuction",
      body: "Targets one or more specific areas—such as the arms, thighs, chin, or abdomen—to refine contour where you need it most.",
    },
    {
      title: "Lipo 360",
      body: "Treats the entire midsection in one plan—abdomen, waist, flanks, and lower back—for a balanced, circumferential result and a more defined waistline.",
    },
  ],
};

export const liposuctionRecoverySteps = [
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

export const liposuctionRecoveryTips = [
  "Wear your compression garment as directed",
  "Walk daily to support circulation and healing",
  "Stay hydrated and eat protein-rich foods",
  "Follow all post-operative instructions from your provider",
  "Review our recovery guides for procedure-specific timelines",
];

export const liposuctionCombinations = {
  title: "Commonly Combined Procedures",
  intro:
    "Many patients combine liposuction with complementary procedures for more comprehensive results in a single surgical plan.",
  groups: [
    {
      label: "Body contouring",
      links: [
        { label: "Lipo 360", href: "/liposuction-360" },
        { label: "Tummy Tuck", href: "/tummy-tuck" },
        { label: "Mommy Makeover", href: "/mommy-makeover" },
        { label: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" },
      ],
    },
    {
      label: "Breast",
      links: [
        { label: "Breast Augmentation", href: "/breast-augmentation" },
        { label: "Breast Lift", href: "/breast-lift" },
        { label: "Fat Transfer Augmentation", href: "/breast-rejuvenation" },
      ],
    },
    {
      label: "Men & face",
      links: [
        { label: "Male Abdominal Sculpting", href: "/male-abdominal-sculpting" },
        { label: "Male Chest Reduction", href: "/male-chest-reduction" },
        { label: "Chin & Neck Liposuction", href: "/female-chin-liposuction" },
      ],
    },
  ],
};

export const liposuctionWhyChoose = {
  ...premiumWhyChoose,
  items: [
    {
      title: "Personalized Procedure Matching",
      body: "We learn your goals and match you with the liposuction approach—and surgeon—best suited to your anatomy and desired outcome.",
    },
    ...premiumWhyChooseItems.slice(1),
  ],
};

export const liposuctionFaqs: {
  q: string;
  a: string;
  links?: KeywordLink[];
}[] = [
  {
    q: "What Is Liposuction?",
    a: "Liposuction is a cosmetic procedure that removes stubborn fat deposits that have not improved with diet and exercise. It is designed for body contouring—not weight loss—and helps create a slimmer, more sculpted appearance.",
  },
  {
    q: "What Areas Can Be Treated With Liposuction?",
    a: "Our providers treat nearly every area of the body, including the abdomen, waist, flanks, back, arms, thighs, chin and neck, chest (men), hips, and knees. Popular options include Lipo 360, arm liposuction, thigh liposuction, chin liposuction, and male liposuction.",
  },
  {
    q: "Who Is A Good Candidate For Liposuction?",
    a: "You may be a good candidate if you are close to your ideal weight, have stubborn fat that won't respond to exercise, are in good overall health, and want body contouring rather than significant weight loss. If loose skin is your primary concern, a tummy tuck may provide better results.",
    links: [{ text: "tummy tuck", href: "/tummy-tuck" }],
  },
  {
    q: "What Is The Difference Between Liposuction And Lipo 360?",
    a: "Traditional liposuction removes fat from one or more specific areas. Lipo 360 is a comprehensive body contouring plan that treats the entire midsection—abdomen, flanks, waist, and lower back—for a balanced, circumferential result.",
  },
  {
    q: "What Is Recovery Like After Liposuction?",
    a: "Recovery depends on how many areas are treated. Most patients walk the same day, return to light activities within several days, wear a compression garment for several weeks, and see final results develop over several months. See our recovery guides for detailed timelines.",
    links: [{ text: "recovery guides", href: "/recovery-guides" }],
  },
  {
    q: "Is Liposuction Permanent?",
    a: "Yes. Fat cells removed during liposuction are permanently eliminated. Maintaining a stable weight and healthy lifestyle helps preserve your results long term.",
  },
  {
    q: "Can Liposuction Help Me Lose Weight?",
    a: "Liposuction is not a weight-loss procedure. It works best for patients who are already near their goal weight but have localized fat deposits that diet and exercise have not improved.",
  },
  {
    q: "Will Liposuction Tighten Loose Skin?",
    a: "Liposuction removes fat but does not significantly tighten loose skin. Patients with excess skin may benefit from a tummy tuck, arm lift, or thigh lift combined with or instead of liposuction.",
    links: [
      { text: "tummy tuck", href: "/tummy-tuck" },
      { text: "arm lift", href: "/arm-lipo-360-arm-lift" },
      { text: "thigh lift", href: "/thigh-liposuction" },
    ],
  },
  {
    q: "Can Multiple Areas Be Treated During One Surgery?",
    a: "Yes. Many patients combine the abdomen, flanks, back, arms, and other areas in one procedure for more comprehensive body contouring.",
  },
  {
    q: "Can Liposuction Be Combined With Other Procedures?",
    a: "Absolutely. Liposuction is frequently combined with tummy tuck, mommy makeover, Brazilian butt lift (BBL), breast augmentation, breast lift, and male body sculpting procedures. Your provider will recommend the safest combination for your goals.",
    links: [
      { text: "mommy makeover", href: "/mommy-makeover" },
      { text: "Brazilian butt lift (BBL)", href: "/brazilian-butt-lift-bbl" },
    ],
  },
  {
    q: "Is Liposuction A Good Option For Men?",
    a: "Yes. Liposuction is one of the most popular cosmetic procedures for men. It can refine the abdomen, flanks, chest, back, and neck. We also offer Male Lipo 360, male abdominal sculpting, and male chest reduction for masculine, athletic-looking results.",
    links: [{ text: "Male Lipo 360", href: "/male-liposuction-360-1" }],
  },
  {
    q: "What Financing Options Are Available?",
    a: "We offer financing options to help make liposuction more affordable. During your consultation, we review payment plans and financing solutions so you can choose the option that fits your budget.",
    links: [{ text: "financing options", href: "/financing-options" }],
  },
  {
    q: "How Do I Schedule A Liposuction Consultation?",
    a: "Schedule a complimentary virtual consultation online or call 813-557-6400. Our team will discuss your goals, review your options, and help you determine the best liposuction plan for your body.",
    links: [
      { text: "virtual consultation", href: "/resources" },
      { text: "FAQs", href: "/faqs" },
    ],
  },
];
