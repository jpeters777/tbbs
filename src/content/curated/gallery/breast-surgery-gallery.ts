import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const breastSurgeryGalleryPage: GalleryPageContent = {
  slug: "breast-surgery-gallery",
  seo: {
    title: "Breast Surgery Before & After Gallery | Tampa Bay Body Sculpting",
    description:
      "Browse breast surgery before and after photos in Tampa—augmentation, lift, and enhancement results. Book a complimentary virtual consultation.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-e67c52e.png",
      alt: "Woman in lace bra representing breast surgery results in Tampa Bay",
    },
  },
  breadcrumb: { href: "/breasts", label: "Breast" },
  intro: {
    eyebrow: "Before & after · Tampa Bay",
    heroTitle: "Breast Surgery Gallery In Tampa Bay",
    title: "Real Breast Surgery Before & After Results",
    lead: "Browse before and after photos from breast surgery patients—including augmentation and enhancement results from providers in our Tampa Bay network.",
    paragraphs: [
      "Every patient starts from a different place. These photos show healed outcomes for specific individuals—not guarantees for everyone. Use them to clarify your goals, then let your consultation turn inspiration into a safe, personalized plan.",
      "When you're ready, schedule a complimentary virtual consult. Bring photos that reflect the shape and proportion you want—we'll discuss implant options, candidacy, and realistic expectations for your frame.",
    ],
  },
  gallery: {
    title: "Breast Surgery Gallery: Before and After Results",
    intro: "Cases shown in order. Side-by-side breast augmentation and enhancement results.",
  },
  lookFor: {
    title: "What To Look For In Breast Surgery Photos",
    intro: "Focus on proportion and balance—not cup size alone.",
    items: [
      {
        title: "Shape & Symmetry",
        body: "Notice breast shape, upper pole fullness, and nipple position—not just volume. Minor asymmetry before surgery is normal; look for improved balance.",
      },
      {
        title: "Frame Match",
        body: "Compare before photos with a body type similar to yours. Results on a petite frame won't look identical on a taller or broader build.",
      },
      {
        title: "Natural Proportion",
        body: "Quality results harmonize with shoulders, waist, and torso. Avoid comparing to heavily edited social media images.",
      },
      {
        title: "Healed Results",
        body: "Gallery photos typically show outcomes months after surgery— not the swollen early recovery phase.",
      },
    ],
  },
  relatedIntro: "Explore procedure guides for candidacy, recovery, and what to expect.",
  relatedProcedures: [
    {
      title: "Breast Augmentation",
      href: "/breast-augmentation",
      body: "Implant options, sizing, and candidacy for fuller, balanced curves.",
    },
    {
      title: "Breast Lift",
      href: "/breast-lift",
      body: "Restore perkier shape and nipple position when volume is adequate but position has dropped.",
    },
    {
      title: "Breast Reduction",
      href: "/breast-reduction",
      body: "Relieve discomfort and create smaller, proportionate breasts.",
    },
    {
      title: "Breast Rejuvenation",
      href: "/breast-rejuvenation",
      body: "Natural enhancement options including fat transfer breast augmentation.",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      body: "Combined breast and body restoration after pregnancy.",
    },
    {
      title: "Breast Procedures Hub",
      href: "/breasts",
      body: "Browse all breast surgery options in one place.",
    },
  ],
  faqTitle: "Breast Gallery FAQs",
  faqIntro: "Common questions about reviewing breast surgery before and after photos.",
  faqs: [
    {
      q: "Can I Expect These Exact Results?",
      a: "No two patients are identical. Gallery photos show outcomes for specific individuals with unique anatomy, implant choices, and healing. Your consultation defines what's achievable for you.",
    },
    {
      q: "What Procedures Do These Photos Show?",
      a: "Most images reflect breast augmentation or enhancement. Some may include combination body contouring. Your provider clarifies which procedure produced each result during consultation.",
    },
    {
      q: "How Soon After Surgery Are Photos Taken?",
      a: "Before and after galleries typically show healed results at several months post-op—after swelling resolves and implants settle into position.",
    },
    {
      q: "Should I Bring Photos To My Consultation?",
      a: "Yes. Save images that reflect your aesthetic goals—not as promises, but as a starting point for discussing implant type, size, and placement.",
    },
    {
      q: "How Do I Compare Implant Sizes In Photos?",
      a: "Cup size labels can be misleading. Focus on overall proportion relative to the patient's frame and whether the result looks natural for their body.",
    },
    {
      q: "Are These Tampa Bay Patients?",
      a: "Photos represent outcomes from board-certified providers in our Florida network. Individual case details are shared during your complimentary virtual consultation.",
    },
    {
      q: "What If My Body Type Looks Different?",
      a: "That's expected. Look for before photos with similar starting points—chest width, tissue thickness, and degree of asymmetry—for the most useful comparison.",
    },
  ],
  finalCtaTitle: "Ready To Discuss Your Breast Surgery Goals?",
  schemaName: "Breast Surgery Before and After Gallery",
  schemaDescription:
    "Before and after breast surgery photo gallery for augmentation and enhancement results in Tampa Bay.",
};
