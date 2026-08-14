export const premiumWhyChooseItems = [
  {
    title: "Personalized Procedure Matching",
    body: "We learn your goals and match you with the right approach—and surgeon—based on your anatomy and desired outcome.",
  },
  {
    title: "Complimentary Virtual Consultations",
    body: "Start from home with a no-pressure consult. Share your goals, review your doctor's before & after portfolio with your doctor, ask questions, and begin planning before you travel to Tampa Bay.",
  },
  {
    title: "Transparent Pricing & Financing",
    body: "Understand procedure costs upfront and explore financing options that fit your budget before you commit.",
  },
  {
    title: "Support Through Recovery",
    body: "From travel planning for out-of-town patients to recovery resources and follow-up care, we stay with you beyond surgery day.",
  },
  {
    title: "Board-Certified Provider Network",
    body: "We connect you with experienced, board-certified providers across Florida who prioritize patient safety and natural-looking results—not a one-size-fits-all referral.",
  },
  {
    title: "Travel & Out-of-Town Patient Support",
    body: "Many patients travel to Tampa Bay for surgery. We help coordinate lodging, travel timing, and recovery planning so your trip feels organized—not overwhelming.",
  },
];

export const premiumWhyChoose = {
  title: "Why Patients Choose Tampa Bay Body Sculpting",
  intro:
    "We provide concierge guidance—not a one-size-fits-all sales pitch. Every step is designed to help you move forward with clarity and confidence.",
  items: premiumWhyChooseItems,
};

export const premiumRecoveryTips = [
  "Wear your compression garment as directed",
  "Walk daily to support circulation and healing",
  "Stay hydrated and eat protein-rich foods",
  "Follow all post-operative instructions from your provider",
];

export const premiumRecoveryIntro =
  "Recovery varies by procedure and treatment areas. Following your provider's instructions helps promote optimal healing and results.";

export const genericRecoverySteps = [
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

export type ComboGroup = {
  label: string;
  links: { label: string; href: string }[];
};

export const bodyCombinationGroups: ComboGroup[] = [
  {
    label: "Body contouring",
    links: [
      { label: "Lipo 360", href: "/liposuction-360" },
      { label: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" },
      { label: "Tummy Tuck", href: "/tummy-tuck" },
      { label: "Mommy Makeover", href: "/mommy-makeover" },
    ],
  },
  {
    label: "Arms, legs & face",
    links: [
      { label: "Arm Lipo 360 / Arm Lift", href: "/arm-lipo-360-arm-lift" },
      { label: "Thigh Liposuction", href: "/thigh-liposuction" },
      { label: "Chin & Neck Liposuction", href: "/female-chin-liposuction" },
    ],
  },
  {
    label: "Explore further",
    links: [
      { label: "All Liposuction Options", href: "/liposuction" },
      { label: "Women's Procedures", href: "/women" },
      { label: "Men's Procedures", href: "/men" },
    ],
  },
];

export const breastCombinationGroups: ComboGroup[] = [
  {
    label: "Breast procedures",
    links: [
      { label: "Breast Augmentation", href: "/breast-augmentation" },
      { label: "Breast Lift", href: "/breast-lift" },
      { label: "Breast Reduction", href: "/breast-reduction" },
      { label: "Breast Rejuvenation", href: "/breast-rejuvenation" },
    ],
  },
  {
    label: "Revision & exchange",
    links: [
      { label: "Breast Revision", href: "/breast-revision" },
      { label: "Breast Implant Exchange", href: "/breast-implant-exchange" },
    ],
  },
  {
    label: "Combined with body",
    links: [
      { label: "Mommy Makeover", href: "/mommy-makeover" },
      { label: "Lipo 360", href: "/liposuction-360" },
      { label: "Breast Procedures Hub", href: "/breasts" },
    ],
  },
];

export const menCombinationGroups: ComboGroup[] = [
  {
    label: "Men's body sculpting",
    links: [
      { label: "Male Lipo 360", href: "/male-liposuction-360" },
      { label: "Male Abdominal Sculpting", href: "/male-abdominal-sculpting" },
      { label: "Male Chest Reduction", href: "/male-chest-reduction" },
      { label: "Male Tummy Tuck", href: "/male-tummy-tuck" },
    ],
  },
  {
    label: "Face & other",
    links: [
      { label: "Male Chin Liposuction", href: "/male-chin-liposuction" },
      { label: "Adult Circumcision", href: "/adult-circumcision" },
    ],
  },
  {
    label: "Explore further",
    links: [
      { label: "Men's Hub", href: "/men" },
      { label: "Liposuction Hub", href: "/liposuction" },
      { label: "Recovery Guides", href: "/recovery-guides" },
    ],
  },
];

export const womenCombinationGroups: ComboGroup[] = [
  {
    label: "Midsection & curves",
    links: [
      { label: "Lipo 360", href: "/liposuction-360" },
      { label: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" },
      { label: "Tummy Tuck", href: "/tummy-tuck" },
      { label: "Feminine Waist Contouring", href: "/feminine-waist-contouring" },
    ],
  },
  {
    label: "Arms, legs & more",
    links: [
      { label: "Mommy Makeover", href: "/mommy-makeover" },
      { label: "Thigh Liposuction", href: "/thigh-liposuction" },
      { label: "Labiaplasty", href: "/labiaplasty" },
    ],
  },
  {
    label: "Explore further",
    links: [
      { label: "Women's Hub", href: "/women" },
      { label: "Breast Procedures", href: "/breasts" },
      { label: "Liposuction Hub", href: "/liposuction" },
    ],
  },
];

export const resourcesCombinationGroups: ComboGroup[] = [
  {
    label: "Patient resources",
    links: [
      { label: "Financing Options", href: "/financing-options" },
      { label: "Travel Information", href: "/travel-information" },
      { label: "Recovery Guides", href: "/recovery-guides" },
      { label: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" },
    ],
  },
  {
    label: "Popular procedures",
    links: [
      { label: "Lipo 360", href: "/liposuction-360" },
      { label: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" },
      { label: "Breast Augmentation", href: "/breast-augmentation" },
    ],
  },
  {
    label: "Get started",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Liposuction Hub", href: "/liposuction" },
      { label: "Resources Hub", href: "/resources" },
    ],
  },
];

export const defaultRelatedLinks = [
  { title: "Liposuction Hub", description: "Explore all liposuction and body contouring options in Tampa Bay.", href: "/liposuction" },
  { title: "Lipo 360", description: "Comprehensive midsection sculpting for a slimmer, balanced silhouette.", href: "/liposuction-360" },
  { title: "Brazilian Butt Lift (BBL)", description: "Enhance curves using your own fat through liposuction and fat transfer.", href: "/brazilian-butt-lift-bbl" },
  { title: "Recovery Guides", description: "Week-by-week recovery timelines, tips, and post-operative guidance.", href: "/recovery-guides" },
  { title: "Financing Options", description: "Flexible payment plans to help fit your procedure into your budget.", href: "/financing-options" },
];
