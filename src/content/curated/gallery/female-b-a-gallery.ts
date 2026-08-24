import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";
import {
  CONSULT_PHOTO_FAQ_A,
  CONSULT_PHOTO_FAQ_Q,
  CONSULT_PHOTO_GALLERY_LEAD,
  CONSULT_PHOTO_MEDIUM,
} from "@/content/consult-photo-messaging";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const femaleBaGalleryPage: GalleryPageContent = {
  slug: "female-b-a-gallery",
  seo: {
    title: "Female Body Sculpting Before & After Photos | Tampa Bay Body Sculpting",
    description:
      "Review Lipo 360, waist contouring, and BBL before & after photos at your complimentary Tampa Bay consult. We do not post patient galleries online.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-10293ad.png",
      alt: "Woman representing body sculpting and Lipo 360 results in Tampa Bay",
    },
  },
  breadcrumb: { href: "/women", label: "Women" },
  intro: {
    eyebrow: "Results at consultation · Tampa Bay",
    heroTitle: "Female Before & After Photos In Tampa Bay",
    title: "How To Review Body Sculpting Results",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      CONSULT_PHOTO_MEDIUM,
      "Use your consult to talk through proportions, waist-to-hip balance, and which combination of Lipo 360, waist contouring, or BBL may fit your anatomy. Photos you review with your provider show specific patients—not guaranteed outcomes.",
    ],
  },
  gallery: {
    title: "See Before & After Photos At Your Consult",
    intro: "Your provider's portfolio is reviewed together during a complimentary consultation—not published on this site.",
  },
  lookFor: {
    title: "What To Look For In Body Contouring Photos",
    intro: "Use these checkpoints when you review photos with your provider—not as a public shopping catalog.",
    items: [
      {
        title: "Waist & Hip Balance",
        body: "Quality body sculpting creates harmony—a slimmer waist, smooth flank transitions, and natural curves. Review front and side views when available.",
      },
      {
        title: "Similar Starting Points",
        body: "Look for before photos with body types or concerns similar to yours. Results on different anatomy aren't directly predictive.",
      },
      {
        title: "Procedure Labels",
        body: "Note whether results come from Lipo 360 alone, BBL, waist contouring, or combinations. Match images to treatments you're considering.",
      },
      {
        title: "Healed Timeline",
        body: "Healed results are typically photographed months after surgery—not during the swollen first weeks. Early recovery looks very different from final outcomes.",
      },
    ],
  },
  relatedIntro: "Explore procedure guides, then open the matching photo-category page that explains consult-only review.",
  relatedProcedures: [
    {
      title: "Lipo 360",
      href: "/liposuction-360",
      body: "360-degree liposuction for a sculpted waist, flanks, and midsection.",
    },
    {
      title: "Brazilian Butt Lift (BBL)",
      href: "/brazilian-butt-lift-bbl",
      body: "Enhance curves using your own purified fat for natural-looking volume.",
    },
    {
      title: "Feminine Waist Contouring",
      href: "/feminine-waist-contouring",
      body: "Hourglass waist sculpting tailored to feminine proportions.",
    },
    {
      title: "Tummy Tuck",
      href: "/tummy-tuck",
      body: "Remove excess skin and repair muscles for a flatter abdomen.",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      body: "Combined breast and body restoration after pregnancy.",
    },
    {
      title: "Lipo 360 Photos At Consult",
      href: "/before-after-photos/body/lipo-360",
      body: "Where Tampa Lipo 360 before & after photos are reviewed—at consult, not on a public gallery page.",
    },
    {
      title: "BBL Photos At Consult",
      href: "/before-after-photos/body/brazilian-butt-lift",
      body: "How Brazilian butt lift photo review works during a complimentary consultation.",
    },
  ],
  faqTitle: "Before & After Photo FAQs",
  faqIntro: "Common questions about reviewing body contouring results before surgery.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "What Procedures Would I See In A Portfolio?",
      a: "Most body contouring portfolios include Lipo 360, waist contouring, BBL, or combinations. Your consultation clarifies which procedures produced each result.",
    },
    {
      q: "Can I Expect Those Exact Results?",
      a: "Outcomes depend on your anatomy, skin elasticity, procedure combination, and healing. Photos illustrate possibilities—not promises.",
    },
    {
      q: "Why Do Some Results Include BBL And Lipo 360?",
      a: "Many Tampa Bay patients combine fat transfer to the buttocks with 360 liposuction for a comprehensive hourglass transformation in one surgical plan.",
    },
    {
      q: "How Long After Surgery Are Result Photos Taken?",
      a: "Portfolios typically show healed results at several months post-op, once swelling subsides and tissues settle.",
    },
    {
      q: "Should I Bring Reference Photos To My Consult?",
      a: "Yes. Save images that reflect your aesthetic direction. Your provider uses them to understand goals while setting realistic expectations.",
    },
    {
      q: "How Do I Book A Consultation?",
      a: "Submit our short contact form or schedule a complimentary virtual consultation. We'll connect you with board-certified providers across Florida.",
    },
  ],
  finalCtaTitle: "Ready To Explore Your Body Contouring Options?",
  schemaName: "Female Body Sculpting Before and After Photos",
  schemaDescription:
    "How to review Lipo 360, waist contouring, and BBL before and after photos at a complimentary consultation with Tampa Bay Body Sculpting. Patient galleries are not posted publicly.",
};
