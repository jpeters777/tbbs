import { CONTACT_URL, CONSULT_URL } from "@/lib/site";
import { premiumWhyChoose } from "@/content/premium-shared-sections";
import { companyStats } from "@/content/company-stats";

export const homeAbout = {
  title: "About Tampa Bay Body Sculpting",
  image: {
    src: "/images/blob-d88ea83.png",
    alt: "Male and female Lipo 360 body contouring in Tampa",
  },
  subtitle: "Personalized Cosmetic Surgery Guidance in Tampa Bay",
  stats: [
    { value: `${companyStats.yearsInBusiness} years`, label: "Serving Tampa Bay patients" },
    { value: companyStats.proceduresGuided, label: "Cosmetic procedures guided" },
    { value: `${companyStats.providerExperienceYears} yrs`, label: "Avg. provider experience" },
  ],
  paragraphs: [
    {
      text: `At Tampa Bay Body Sculpting, we provide a personalized, concierge approach to cosmetic surgery. For ${companyStats.yearsInBusiness} years we have helped patients confidently navigate transformation with vetted board-certified providers, individualized recommendations, transparent pricing, and dedicated support from complimentary consultation through recovery.`,
      links: [{ href: "/how-we-select-providers", text: "how we select providers" }],
    },
    {
      text: "Whether you're considering Lipo 360, body contouring, a tummy tuck, Brazilian Butt Lift (BBL), breast augmentation, chin and neck liposuction, or male body contouring, we help you understand your options and choose the procedures that best align with your goals. Through our trusted board-certified provider network, we simplify the process so you can focus on achieving natural-looking, confidence-building results.",
      links: [
        { href: "/liposuction-360", text: "Lipo 360" },
        { href: "/tummy-tuck", text: "tummy tuck" },
        { href: "/brazilian-butt-lift-bbl", text: "Brazilian Butt Lift (BBL)" },
      ],
    },
  ],
};

export const homeDifference = {
  title: "The Tampa Bay Body Sculpting Difference",
  introTitle: "Why Patients Choose Tampa Bay Body Sculpting",
  intro:
    "Unlike a traditional cosmetic surgery practice, Tampa Bay Body Sculpting provides a concierge experience that helps you navigate every step of your transformation. We educate, guide, coordinate, and support you throughout the process so you can move forward with confidence.",
  contactHref: CONTACT_URL,
  columns: [
    {
      title: "Personalized Care",
      body: "Every cosmetic surgery journey is unique. We take the time to understand your goals, educate you on your options, and provide personalized recommendations tailored to your body, lifestyle, and desired outcome. From your complimentary virtual consultation through recovery, we're here to guide you every step of the way.",
    },
    {
      title: "Trusted Cosmetic Surgery Network",
      body: "We partner with experienced board-certified providers who are known for delivering safe, natural-looking results. Whether you're considering Lipo 360, a tummy tuck, breast surgery, body contouring, or facial procedures, we'll help you find the right approach for your goals with confidence and transparency.",
    },
    {
      title: "Concierge Experience",
      body: "Our concierge approach makes cosmetic surgery simple and stress-free. We provide transparent pricing, financing guidance, travel resources for out-of-town patients, and ongoing support before and after your procedure, ensuring you feel informed, comfortable, and confident throughout your transformation.",
    },
  ],
};

export const homeWhyChoose = {
  title: premiumWhyChoose.title,
  intro: premiumWhyChoose.intro,
  items: premiumWhyChoose.items,
};

export type ProcedureCategory = "body" | "breast" | "face" | "men";

export type HomeProcedureItem = {
  title: string;
  learnAboutLabel?: string;
  href: string;
  image: string;
  imageAlt: string;
  imageClass?: string;
  imageMediaClass?: string;
  body: string;
  links: { href: string; text: string }[];
  category: ProcedureCategory;
  alsoInCategories?: ProcedureCategory[];
};

export const homeProcedures: {
  title: string;
  items: HomeProcedureItem[];
} = {
  title: "Popular Cosmetic Surgery Procedures",
  items: [
    {
      title: "Lipo 360",
      href: "/liposuction-360",
      image: "/images/blob-10293ad.png",
      imageAlt: "Lipo 360 body contouring results in Tampa",
      body: "Sculpt your waistline with comprehensive circumferential liposuction designed to target stubborn fat around the abdomen, flanks, and back. Lipo 360 creates a smoother, more defined silhouette while enhancing your body's natural contours for balanced, natural-looking results.",
      links: [{ href: "/liposuction-360", text: "Lipo 360" }],
      category: "body",
    },
    {
      title: "Tummy Tuck",
      href: "/tummy-tuck",
      image: "/images/blob-8f7eab9.png",
      imageAlt: "Woman representing tummy tuck surgery",
      body: "Restore a flatter, firmer abdomen by removing excess skin and tightening weakened abdominal muscles. Whether after pregnancy or significant weight loss, a tummy tuck can dramatically improve your midsection and help you feel more confident in your appearance.",
      links: [{ href: "/tummy-tuck", text: "tummy tuck" }],
      category: "body",
    },
    {
      title: "Brazilian Butt Lift",
      href: "/brazilian-butt-lift-bbl",
      image: "/images/blob-2294999.png",
      imageAlt: "Brazilian butt lift BBL",
      body: "Enhance your curves using your body's own fat with a Brazilian Butt Lift. By combining liposuction with fat transfer, a BBL creates fuller, more balanced contours while maintaining a natural appearance.",
      links: [{ href: "/brazilian-butt-lift-bbl", text: "Brazilian Butt Lift" }],
      category: "body",
    },
    {
      title: "Arm Lipo 360 / Arm Lift",
      href: "/arm-lipo-360-arm-lift",
      image: "/images/blob-ab62aae.png",
      imageAlt: "Person pinching upper arm skin with arrows indicating arm liposuction",
      imageClass: "premium-procedure-image--crop premium-procedure-image--crop-arm",
      body: "Remove stubborn fat from the upper arms and create a leaner, more toned appearance. Arm liposuction helps refine arm contour when diet and exercise alone are not enough.",
      links: [{ href: "/arm-lipo-360-arm-lift", text: "Arm liposuction" }],
      category: "body",
    },
    {
      title: "Thigh Liposuction",
      href: "/thigh-liposuction",
      image: "/images/blob-56b3a68.png",
      imageAlt: "Woman in bikini showing toned thighs and waist",
      body: "Target stubborn fat along the inner and outer thighs to create smoother, more proportionate leg contours and a slimmer lower-body silhouette.",
      links: [{ href: "/thigh-liposuction", text: "Thigh liposuction" }],
      category: "body",
    },
    {
      title: "Feminine Waist Contouring",
      learnAboutLabel: "Feminine Waist Contour",
      href: "/feminine-waist-contouring",
      image: "/images/shutterstock_263340653-b2373a9.jpg",
      imageAlt: "Female body waist contouring",
      body: "Create a slimmer waist and more balanced curves with feminine abdominal sculpting and waist contouring tailored to your goals and anatomy.",
      links: [{ href: "/feminine-waist-contouring", text: "waist contouring" }],
      category: "body",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      image: "/images/blob-0773ab0.png",
      imageAlt: "Woman representing mommy makeover surgery",
      body: "Restore your pre-pregnancy shape with a customized combination of breast and body contouring procedures designed to address the changes that follow childbirth.",
      links: [{ href: "/mommy-makeover", text: "Mommy Makeover" }],
      category: "body",
    },
    {
      title: "Breast Augmentation",
      href: "/breast-augmentation",
      image: "/images/blob-71f8471.png",
      imageAlt: "Woman representing breast augmentation with implants",
      body: "Enhance your confidence with breast augmentation tailored to your desired size, shape, and overall proportions. Whether using implants or fat transfer, our trusted surgeons help create balanced, natural-looking results that complement your body.",
      links: [{ href: "/breast-augmentation", text: "implants" }],
      category: "breast",
    },
    {
      title: "Breast Lift",
      href: "/breast-lift",
      image: "/images/blob-5c35b08.png",
      imageAlt: "Woman considering a breast lift",
      body: "Raise and reshape sagging breasts to restore a firmer, more youthful appearance with improved symmetry and natural feminine contours.",
      links: [{ href: "/breast-lift", text: "Breast lift" }],
      category: "breast",
    },
    {
      title: "Breast Reduction",
      href: "/breast-reduction",
      image: "/images/blob-4202c05.png",
      imageAlt: "Woman representing breast reduction surgery",
      body: "Remove excess breast tissue and skin to create a smaller, lighter, more balanced breast shape while relieving discomfort and improving proportions.",
      links: [{ href: "/breast-reduction", text: "Breast reduction" }],
      category: "breast",
    },
    {
      title: "Breast Rejuvenation",
      href: "/breast-rejuvenation",
      image: "/images/blob-d9d6b23.png",
      imageAlt: "Breast rejuvenation procedure",
      body: "Explore tailored breast rejuvenation options—including augmentation and lift techniques—to restore a more youthful breast appearance.",
      links: [{ href: "/breast-rejuvenation", text: "Breast rejuvenation" }],
      category: "breast",
    },
    {
      title: "Breast Revision",
      href: "/breast-revision",
      image: "/images/blob-2412f2d.png",
      imageAlt: "Breast revision surgery",
      body: "Correct or improve the results of a previous breast surgery with personalized revision planning focused on comfort, symmetry, and natural-looking outcomes.",
      links: [{ href: "/breast-revision", text: "Breast revision" }],
      category: "breast",
    },
    {
      title: "Breast Implant Exchange",
      href: "/breast-implant-exchange",
      image: "/images/blob-6c75d85.png",
      imageAlt: "Woman in white bra representing breast implant exchange",
      body: "Replace or upgrade existing breast implants to improve comfort, aesthetics, and long-term satisfaction with personalized surgical guidance.",
      links: [{ href: "/breast-implant-exchange", text: "implant exchange" }],
      category: "breast",
    },
    {
      title: "Chin & Neck Liposuction",
      href: "/female-chin-liposuction",
      image: "/images/blob-504fd1c.png",
      imageAlt: "Woman in profile showing defined jawline and chin",
      imageClass: "premium-procedure-image--crop-chin",
      body: "Refine your profile by removing stubborn fat beneath the chin and along the neck for a more sculpted appearance. Chin and neck liposuction can improve jawline definition and create a slimmer, more youthful facial contour.",
      links: [{ href: "/female-chin-liposuction", text: "Chin and neck liposuction" }],
      category: "face",
    },
    {
      title: "Labiaplasty",
      href: "/labiaplasty",
      image: "/images/blob-832e2e0.png",
      imageAlt: "Labiaplasty cosmetic procedure",
      body: "Reshape or reduce the labia minora to improve comfort and appearance with a personalized approach tailored to your anatomy and goals.",
      links: [{ href: "/labiaplasty", text: "Labiaplasty" }],
      category: "body",
    },
    {
      title: "Male Lipo 360",
      href: "/male-liposuction-360",
      image: "/images/blob-dbc3bdb.png",
      imageAlt: "Male body sculpting and Lipo 360 results",
      body: "Remove stubborn fat from the abdomen, waist, flanks, and lower back to create a slimmer, more defined masculine shape from every angle.",
      links: [{ href: "/male-liposuction-360", text: "Male Lipo 360" }],
      category: "men",
    },
    {
      title: "Male Chest Reduction",
      href: "/male-chest-reduction",
      image: "/images/shutterstock_125481776.jpg",
      imageAlt: "Man representing male chest reduction surgery",
      body: "Treat gynecomastia by reducing excess chest fat and glandular tissue for a flatter, firmer, more masculine chest and restored confidence.",
      links: [{ href: "/male-chest-reduction", text: "gynecomastia surgery" }],
      category: "men",
    },
    {
      title: "Male Abdominal Sculpting",
      href: "/male-abdominal-sculpting",
      image: "/images/blob-446b4f6.png",
      imageAlt: "Man representing cosmetic abdominal sculpting",
      body: "Enhance natural abdominal muscle definition with precision liposuction techniques designed to create a leaner, more athletic-looking midsection.",
      links: [{ href: "/male-abdominal-sculpting", text: "abdominal sculpting" }],
      category: "men",
    },
    {
      title: "Male Chin Liposuction",
      href: "/male-chin-liposuction",
      image: "/images/blob-4476c7a.png",
      imageAlt: "Man representing male chin liposuction",
      body: "Remove excess fat beneath the chin and along the jawline to create a sharper, more defined facial profile with natural masculine contours.",
      links: [{ href: "/male-chin-liposuction", text: "Male chin liposuction" }],
      category: "men",
      alsoInCategories: ["face"],
    },
    {
      title: "Male Tummy Tuck",
      href: "/male-tummy-tuck-1",
      image: "/images/blob-5af89aa.png",
      imageAlt: "Man representing male tummy tuck surgery",
      body: "Remove excess abdominal skin and tighten the midsection for a firmer, more toned appearance—especially after significant weight loss.",
      links: [{ href: "/male-tummy-tuck-1", text: "Male tummy tuck" }],
      category: "men",
    },
    {
      title: "Adult Circumcision",
      href: "/adult-circumcision",
      image: "/images/blob-ea57644.png",
      imageAlt: "Man representing adult circumcision consultation",
      body: "A surgical procedure to remove the foreskin for medical, hygiene, cosmetic, or personal reasons with guidance from experienced providers.",
      links: [{ href: "/adult-circumcision", text: "Adult circumcision" }],
      category: "men",
    },
  ],
};

export const homeTravel = {
  title: "Why Patients Travel to Tampa Bay Body Sculpting for Cosmetic Surgery",
  subtitle: "Patients Visit Us From Across Florida and Beyond",
  body: "Whether you're traveling from Miami, Orlando, Jacksonville, Sarasota, Clearwater, St. Petersburg, or another state, our team helps simplify your experience.",
  bullets: [
    "Virtual consultations",
    "Financing options",
    "Travel planning",
    "Recovery resources",
    "Local accommodations",
    "Follow-up care",
  ],
  image: "/images/shutterstock_359476844_801685051614.JPG",
};

export const homeExploreProcedures = {
  title: "Explore Cosmetic Surgery Procedures",
  intro:
    "Whether you're researching your options or ready to schedule a consultation, explore our comprehensive guides for today's most popular cosmetic surgery procedures.",
  links: [
    { label: "Lipo 360", href: "/liposuction-360" },
    { label: "Tummy Tuck", href: "/tummy-tuck" },
    { label: "Breast Augmentation", href: "/breast-augmentation" },
    { label: "Breast Lift", href: "/breast-lift" },
    { label: "Breast Reduction", href: "/breast-reduction" },
    { label: "BBL", href: "/brazilian-butt-lift-bbl" },
    { label: "Chin Liposuction", href: "/female-chin-liposuction" },
    { label: "Arm Liposuction", href: "/arm-lipo-360-arm-lift" },
    { label: "Thigh Liposuction", href: "/thigh-liposuction" },
    { label: "Male Body Sculpting", href: "/men" },
    { label: "Gynecomastia Surgery Tampa", href: "/male-chest-reduction" },
    { label: "Dad Bod Surgery Tampa", href: "/male-abdominal-sculpting" },
    { label: "Male Tummy Tuck Tampa", href: "/male-tummy-tuck" },
    { label: "Mommy Makeover", href: "/mommy-makeover" },
    { label: "Women's Procedures", href: "/women" },
    { label: "Resources & FAQs", href: "/resources" },
  ],
};

export { CONSULT_URL };
