import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";
import {
  CONSULT_PHOTO_FAQ_A,
  CONSULT_PHOTO_FAQ_Q,
  CONSULT_PHOTO_GALLERY_LEAD,
  CONSULT_PHOTO_MEDIUM,
} from "@/content/consult-photo-messaging";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const breastSurgeryGalleryPage: GalleryPageContent = {
  slug: "breast-surgery-gallery",
  seo: {
    title: "Breast Surgery Before & After Photos | Tampa Bay Body Sculpting",
    description:
      "Review breast augmentation, lift, and enhancement before & after photos at your complimentary Tampa Bay consult. We do not post patient galleries online.",
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
    eyebrow: "Results at consultation · Tampa Bay",
    heroTitle: "Breast Surgery Photos In Tampa Bay",
    title: "How To Review Breast Surgery Results",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      CONSULT_PHOTO_MEDIUM,
      "Bring inspiration photos that reflect the shape and proportion you want. At consult, we'll discuss implant options, candidacy, and realistic expectations for your frame.",
    ],
  },
  gallery: {
    title: "See Breast Before & After Photos At Your Consult",
    intro: "Your provider's breast surgery portfolio is reviewed together during a complimentary consultation—not published on this site.",
  },
  lookFor: {
    title: "What To Look For In Breast Surgery Photos",
    intro: "Focus on proportion and balance when you review photos with your provider—not cup size alone.",
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
        body: "Healed outcomes are typically photographed months after surgery—not during the swollen early recovery phase.",
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
  faqTitle: "Breast Photo Review FAQs",
  faqIntro: "Common questions about reviewing breast surgery results before surgery.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Can I Expect Exact Results From Photos I Review?",
      a: "No two patients are identical. Portfolio photos show outcomes for specific individuals with unique anatomy, implant choices, and healing. Your consultation defines what's achievable for you.",
    },
    {
      q: "What Procedures Would I See In A Portfolio?",
      a: "Most images reflect breast augmentation, lift, reduction, or enhancement. Some may include combination body contouring. Your provider clarifies which procedure produced each result during consultation.",
    },
    {
      q: "How Soon After Surgery Are Photos Taken?",
      a: "Portfolios typically show healed results at several months post-op—after swelling resolves and implants settle into position.",
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
      q: "What If My Body Type Looks Different?",
      a: "That's expected. Look for before photos with similar starting points—chest width, tissue thickness, and degree of asymmetry—for the most useful comparison.",
    },
  ],
  finalCtaTitle: "Ready To Discuss Your Breast Surgery Goals?",
  schemaName: "Breast Surgery Before and After Photos",
  schemaDescription:
    "How to review breast augmentation and enhancement before and after photos at a complimentary consultation with Tampa Bay Body Sculpting. Patient galleries are not posted publicly.",
};
