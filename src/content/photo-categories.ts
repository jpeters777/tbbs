import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";
import { PHOTO_CATEGORY_CASE_ROOTS } from "@/lib/photo-category-paths";
import {
  CONSULT_PHOTO_FAQ_A,
  CONSULT_PHOTO_FAQ_Q,
  CONSULT_PHOTO_GALLERY_LEAD,
  CONSULT_PHOTO_MEDIUM,
} from "@/content/consult-photo-messaging";

export { PHOTO_CATEGORY_CASE_ROOTS };

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

const PHOTO_HUB = "/before-after-photos";
const GALLERY_FEMALE = "/female-ba-gallery";
const GALLERY_BREAST = "/breast-surgery-gallery";
const GALLERY_MALE = "/male-surgery-gallery";

export const PHOTO_HUB_PATH = PHOTO_HUB;

const hubPage: GalleryPageContent = {
  slug: "before-after-photos",
  canonicalPath: PHOTO_HUB,
  seo: {
    title: "Tampa Before & After Photos | Results at Consult | Tampa Bay Body Sculpting",
    description:
      "Tampa before & after photos are reviewed at your complimentary consult—not posted on this site. See how photo review works and explore Lipo 360, BBL, breast, and male procedure guides.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-10293ad.png",
      alt: "Woman representing Tampa body sculpting consultation and results review",
    },
  },
  breadcrumb: { href: GALLERY_FEMALE, label: "Results at consult" },
  intro: {
    eyebrow: "Results at consultation · Tampa Bay",
    heroTitle: "Tampa Before & After Photos",
    title: "Where Patient Photos Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      CONSULT_PHOTO_MEDIUM,
      "Historical photo URLs on this site now explain how Tampa Bay Body Sculpting handles results: privately, with your provider, during a complimentary consultation. We do not publish patient galleries because we do not have consents to display those images publicly.",
      "Use the procedure pages below to understand candidacy, recovery, and what to look for when you sit down with a portfolio. Then request a consult so you can review photos that relate to your anatomy—not a public slideshow.",
    ],
  },
  gallery: {
    title: "See Photos At Your Complimentary Consult",
    intro:
      "This page is not an online gallery. It tells you where Tampa before and after photos are reviewed and which procedure guide to read first.",
  },
  lookFor: {
    title: "How Photo Review Works At Consult",
    intro: "Come prepared to talk about goals, not to shop a public catalog of patient images.",
    items: [
      {
        title: "Private Portfolio Review",
        body: "Your provider walks through selected cases during the appointment so you can ask about technique, timeline, and whether a result is realistic for your frame.",
      },
      {
        title: "Match Starting Points",
        body: "The most useful photos are patients with a similar starting shape, skin quality, and procedure mix—not the most dramatic transformation online.",
      },
      {
        title: "Procedure Mix Matters",
        body: "Lipo 360, BBL, breast surgery, and male sculpting produce different silhouettes. Clarify which procedures created each result you review.",
      },
      {
        title: "Healed Timing",
        body: "Early swelling is not the final result. Ask when photos were taken so you are comparing healed outcomes, not week-two snapshots.",
      },
    ],
  },
  relatedIntro: "Open the matching photo-category page for the procedure you searched, then read the surgical guide.",
  relatedProcedures: [
    {
      title: "Lipo 360 Photos",
      href: "/before-after-photos/body/lipo-360",
      body: "Where Tampa Lipo 360 before & after photos are reviewed at consult, plus the Lipo 360 procedure guide.",
    },
    {
      title: "BBL Photos",
      href: "/before-after-photos/body/brazilian-butt-lift",
      body: "Brazilian butt lift photo review at consult—fat harvest, transfer, and recovery expectations.",
    },
    {
      title: "Arm Liposuction Photos",
      href: "/before-after-photos/body/arms",
      body: "Arm contouring results are reviewed privately; read the arm lipo / arm lift guide first.",
    },
    {
      title: "Thigh Liposuction Photos",
      href: "/before-after-photos/body/thighs",
      body: "Inner and outer thigh contouring photos at consult, with the thigh liposuction guide.",
    },
    {
      title: "Body Contouring Photos",
      href: "/before-after-photos/body/body-contouring",
      body: "Multi-area body sculpting photo review and the liposuction hub for treatment combinations.",
    },
    {
      title: "Chin & Neck Photos",
      href: "/before-after-photos/face/chin-and-neck-liposuction",
      body: "Jawline and submental liposuction photo review with the chin liposuction guide.",
    },
    {
      title: "Breast Rejuvenation Photos",
      href: "/before-after-photos/breast/breast-rejuvenation",
      body: "Breast restoration and fat-transfer photo review at consult—not an online implant catalog.",
    },
    {
      title: "Male Body Sculpting Photos",
      href: "/before-after-photos/male/male-body-sculpting",
      body: "Men's Lipo 360 and torso sculpting photos are reviewed with your provider at consult.",
    },
    {
      title: "Female Results Hub",
      href: GALLERY_FEMALE,
      body: "How women review Lipo 360, waist, and BBL portfolios during a complimentary Tampa Bay consult.",
    },
    {
      title: "Breast Results Hub",
      href: GALLERY_BREAST,
      body: "How breast augmentation, lift, and rejuvenation photos are reviewed at consult.",
    },
    {
      title: "Male Results Hub",
      href: GALLERY_MALE,
      body: "How men review chest, abdomen, and Lipo 360 photos with a provider.",
    },
  ],
  faqTitle: "Before & After Photo FAQs",
  faqIntro: "Honest answers if you searched for Tampa before and after photos and landed here instead of a public gallery.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Why Aren't Patient Galleries On This Website?",
      a: "We do not have signed consents to display those images publicly, and we do not post patient before & after galleries online. Photo review happens in a complimentary consultation so discussion stays tied to your anatomy and goals.",
    },
    {
      q: "I Had A Link To A Numbered Photo Case. What Happened?",
      a: "Older numbered case URLs now point to the matching procedure photo-category page. That page explains consult photo review and links the current procedure guide—it does not republish patient photos.",
    },
    {
      q: "Can I See Photos Before I Book Surgery?",
      a: "Yes. Request a complimentary consultation. You review your provider's portfolio together before you commit to a surgical plan.",
    },
    {
      q: "Which Page Should I Read If I Want Lipo 360 Results?",
      a: "Start with the Lipo 360 photo-category page, then the Lipo 360 procedure guide. Bring notes about waist, flanks, and whether you are also considering a BBL.",
    },
    {
      q: "How Do I Book A Consultation?",
      a: "Submit the short contact form. We'll connect you with board-certified providers across Florida for a complimentary consult that includes portfolio review.",
    },
  ],
  finalCtaTitle: "Request A Consult To Review Photos",
  schemaName: "Tampa Before and After Photos",
  schemaDescription:
    "Tampa Bay Body Sculpting does not post patient before and after galleries online. Photo review happens at a complimentary consultation, with procedure guides for Lipo 360, BBL, breast surgery, and male body sculpting.",
};

const lipo360Page: GalleryPageContent = {
  slug: "before-after-photos-lipo-360",
  canonicalPath: "/before-after-photos/body/lipo-360",
  seo: {
    title: "Tampa Lipo 360 Before & After Photos | Results at Consult",
    description:
      "Looking for Tampa Lipo 360 before and after photos? They are reviewed at your complimentary consult—not posted on this page. Learn how 360 liposuction results are evaluated.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-10293ad.png",
      alt: "Woman representing Lipo 360 waist contouring consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Lipo 360 · Results at consultation",
    heroTitle: "Tampa Lipo 360 Before & After Photos",
    title: "How Lipo 360 Results Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "If you searched for Tampa Lipo 360 before and after photos, this is the honest answer: they are not published on this URL. You review 360-degree midsection cases with your provider during a complimentary consultation.",
      CONSULT_PHOTO_MEDIUM,
      "Lipo 360 treats abdomen, waist, flanks, and back together. Photos that look 'snatched' online may mix liposuction with BBL, a tummy tuck, or weight change. At consult, ask which areas were treated and how many months post-op the images were taken before you compare them to your own midsection.",
    ],
  },
  gallery: {
    title: "Lipo 360 Photos At Consult—Not On This Page",
    intro:
      "This category page replaces old public Lipo 360 case URLs. It does not display patient images. Use it to prepare for portfolio review and to open the Lipo 360 guide.",
  },
  lookFor: {
    title: "What To Ask When You Review Lipo 360 Photos",
    intro: "360 liposuction is circumferential. Front-only photos hide flank and back contour.",
    items: [
      {
        title: "Front, Side, And Back Views",
        body: "A balanced Lipo 360 result shows a smoother waist from every angle—not a flat abdomen with leftover love handles.",
      },
      {
        title: "Similar Starting Midsection",
        body: "Compare before photos with a similar abdomen and flank fullness. Dramatic cases on different anatomy are poor predictors.",
      },
      {
        title: "Combinations Vs Lipo Alone",
        body: "Many Tampa hourglass photos include BBL or skin tightening. Confirm whether the case is Lipo 360 only.",
      },
      {
        title: "Healed Waist Definition",
        body: "Swelling can hide or exaggerate a waist for weeks. Ask for healed timelines, typically several months after surgery.",
      },
    ],
  },
  relatedIntro: "Read the Lipo 360 guide, then book consult to review photos that match your midsection goals.",
  relatedProcedures: [
    {
      title: "Lipo 360 Procedure Guide",
      href: "/liposuction-360",
      body: "How 360-degree liposuction sculpts waist, abdomen, flanks, and back in Tampa Bay.",
    },
    {
      title: "Female Results Hub",
      href: GALLERY_FEMALE,
      body: "How women review body-sculpting portfolios at a complimentary consult.",
    },
    {
      title: "BBL Photo Review",
      href: "/before-after-photos/body/brazilian-butt-lift",
      body: "If your Lipo 360 plan includes fat transfer, see how BBL photos are reviewed at consult.",
    },
    {
      title: "Feminine Waist Contouring",
      href: "/feminine-waist-contouring",
      body: "Waist-focused sculpting when hourglass proportion is the priority.",
    },
  ],
  faqTitle: "Lipo 360 Photo FAQs",
  faqIntro: "Questions people ask after searching 'Tampa Lipo 360 before after'.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Lipo 360 Before And After Photos?",
      a: "Not on this page. Lipo 360 portfolios are reviewed with your provider at a complimentary consultation so you can discuss waist, flanks, and back contour that relate to your body—not a public gallery.",
    },
    {
      q: "Will Lipo 360 Photos Show My Exact Outcome?",
      a: "No. Skin elasticity, fat distribution, and whether you add BBL or a tummy tuck change the result. Photos illustrate possibilities for similar starting points.",
    },
    {
      q: "Why Did An Old Case Number Redirect Here?",
      a: "Numbered Lipo 360 case URLs now consolidate to this category page. We do not republish those patient images. This page explains consult review and links the current Lipo 360 guide.",
    },
    {
      q: "Should I Bring Waist Goals To Consult?",
      a: "Yes. Notes about clothing fit, flank fullness, and whether you want curve enhancement help your provider select the most relevant portfolio cases.",
    },
    {
      q: "How Do I Request A Consult?",
      a: "Use the contact form. Complimentary consultations include portfolio review with board-certified providers in Florida.",
    },
  ],
  finalCtaTitle: "Review Lipo 360 Photos At Consult",
  schemaName: "Tampa Lipo 360 Before and After Photos",
  schemaDescription:
    "Tampa Lipo 360 before and after photos are reviewed at a complimentary consultation with Tampa Bay Body Sculpting. Patient galleries are not posted on this page.",
};

const bblPage: GalleryPageContent = {
  slug: "before-after-photos-bbl",
  canonicalPath: "/before-after-photos/body/brazilian-butt-lift",
  seo: {
    title: "Tampa BBL Before & After Photos | Results at Consult",
    description:
      "Tampa Brazilian butt lift before and after photos are reviewed at your complimentary consult—not posted here. Learn how BBL results and liposuction harvest areas are evaluated.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-2294999.png",
      alt: "Woman representing Brazilian butt lift consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Brazilian butt lift · Results at consultation",
    heroTitle: "Tampa BBL Before & After Photos",
    title: "How BBL Results Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "Searches for Tampa BBL before and after photos often expect a public grid of buttocks results. We do not post those patient images. You review fat-transfer cases with your provider at a complimentary consult.",
      CONSULT_PHOTO_MEDIUM,
      "A BBL is liposuction plus transfer. Harvested fat from the waist, back, or thighs changes the silhouette as much as the buttocks. At consult, ask which donor areas were treated, how sitting restrictions were followed, and how much volume typically survives—so you are not comparing your anatomy to a filtered social post.",
    ],
  },
  gallery: {
    title: "BBL Photos Are Reviewed Privately",
    intro: "This category URL is for topical search recovery, not an online BBL gallery. No patient photos are displayed here.",
  },
  lookFor: {
    title: "What To Look For In BBL Portfolio Cases",
    intro: "Projection, waist-to-hip balance, and donor-site contour matter together.",
    items: [
      {
        title: "Waist And Hip Relationship",
        body: "Strong BBL results usually include a slimmer waist from liposuction—not volume added to an unchanged midsection.",
      },
      {
        title: "Donor-Site Smoothness",
        body: "Look at back, flanks, and thighs in the after photos. Irregular harvest areas undermine an otherwise rounder buttocks.",
      },
      {
        title: "Sitting And Healing Rules",
        body: "Ask how long the patient avoided direct sitting. Fat survival depends on recovery behavior as much as surgical technique.",
      },
      {
        title: "Similar Frame And Starting Shape",
        body: "Petite and fuller frames keep fat differently. Match before photos to your hip width and available donor fat.",
      },
    ],
  },
  relatedIntro: "Pair photo review with the BBL guide so you understand candidacy, recovery, and combination plans.",
  relatedProcedures: [
    {
      title: "BBL Procedure Guide",
      href: "/brazilian-butt-lift-bbl",
      body: "How Brazilian butt lift fat transfer works in Tampa Bay, including recovery rules.",
    },
    {
      title: "Lipo 360 Photo Review",
      href: "/before-after-photos/body/lipo-360",
      body: "Most BBL plans include circumferential liposuction—see how those photos are reviewed at consult.",
    },
    {
      title: "Female Results Hub",
      href: GALLERY_FEMALE,
      body: "How women review body-sculpting portfolios during a complimentary consult.",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      body: "When BBL is part of a broader postpartum restoration plan.",
    },
  ],
  faqTitle: "BBL Photo FAQs",
  faqIntro: "If you searched for Tampa Brazilian butt lift before and after photos, start here.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Can I See Tampa BBL Before And After Photos?",
      a: "At your complimentary consultation—not on this website. Your provider reviews BBL and liposuction cases that relate to your donor fat and desired projection.",
    },
    {
      q: "Do BBL Photos Guarantee My Result?",
      a: "No. Fat survival, skin quality, and how closely you follow sitting restrictions change outcomes. Photos are examples, not promises.",
    },
    {
      q: "Why Combine BBL Photos With Lipo 360 Photos?",
      a: "Transfer volume comes from harvested fat. Understanding both the waist and the buttocks in the same plan prevents mismatched expectations.",
    },
    {
      q: "Can I Bring Celebrity Or Social Photos?",
      a: "Bring inspiration, then expect a candid conversation about what your anatomy can support. Edited images are poor surgical blueprints.",
    },
    {
      q: "How Do I Book?",
      a: "Submit the contact form to start a complimentary consult that includes portfolio review.",
    },
  ],
  finalCtaTitle: "Review BBL Photos At Consult",
  schemaName: "Tampa BBL Before and After Photos",
  schemaDescription:
    "Tampa Brazilian butt lift before and after photos are reviewed at a complimentary consultation. Patient BBL galleries are not posted on this page.",
};

const armsPage: GalleryPageContent = {
  slug: "before-after-photos-arms",
  canonicalPath: "/before-after-photos/body/arms",
  seo: {
    title: "Tampa Arm Liposuction Before & After Photos | Results at Consult",
    description:
      "Tampa arm liposuction and arm lift before and after photos are reviewed at your complimentary consult—not posted on this page. Learn what to evaluate in upper-arm results.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-ab62aae.png",
      alt: "Woman representing arm contouring consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Arm contouring · Results at consultation",
    heroTitle: "Tampa Arm Liposuction Before & After Photos",
    title: "How Arm Results Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "Arm liposuction and arm-lift photos are not displayed on this category URL. If you searched for Tampa arm lipo before and after pictures, you review them with your provider at a complimentary consult.",
      CONSULT_PHOTO_MEDIUM,
      "Upper-arm contour depends on fat versus loose skin. Liposuction slims fullness; an arm lift addresses sagging tissue. At consult, look for before photos with similar skin laxity so you are not comparing a lipo-only case to someone who needed excision.",
    ],
  },
  gallery: {
    title: "Arm Photos At Consult Only",
    intro: "Old arm case links now land here. This page does not embed patient arm photos.",
  },
  lookFor: {
    title: "What To Evaluate In Arm Portfolio Cases",
    intro: "Skin quality decides whether lipo alone is enough.",
    items: [
      {
        title: "Fat Vs Skin Laxity",
        body: "If the before photo shows hanging skin, liposuction-only after photos on tighter skin will not predict your result.",
      },
      {
        title: "Front And Rear Arm Views",
        body: "Bat-wing fullness often shows from behind. Ask for more than a single flexed biceps angle.",
      },
      {
        title: "Scar Placement If A Lift Was Used",
        body: "Arm-lift cases include scars. Confirm whether the photo is lipo, lift, or both before you set expectations.",
      },
      {
        title: "Balance With Shoulders And Torso",
        body: "Arms should look proportional to the rest of a Lipo 360 or mommy-makeover plan, not isolated.",
      },
    ],
  },
  relatedIntro: "Read the arm procedure guide, then review photos that match your skin quality at consult.",
  relatedProcedures: [
    {
      title: "Arm Lipo 360 / Arm Lift Guide",
      href: "/arm-lipo-360-arm-lift",
      body: "Candidacy, recovery, and when excision is needed versus liposuction alone.",
    },
    {
      title: "Female Results Hub",
      href: GALLERY_FEMALE,
      body: "How women review body-sculpting portfolios at consult.",
    },
    {
      title: "Lipo 360 Photo Review",
      href: "/before-after-photos/body/lipo-360",
      body: "Arm work is often planned with midsection sculpting—see how those photos are reviewed.",
    },
    {
      title: "Liposuction Hub",
      href: "/liposuction",
      body: "All liposuction areas offered in Tampa Bay.",
    },
  ],
  faqTitle: "Arm Photo FAQs",
  faqIntro: "Common questions after searching for Tampa arm lipo before and after photos.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Arm Liposuction Before And After Photos?",
      a: "They are reviewed during your complimentary consultation. This page does not publish patient arm galleries.",
    },
    {
      q: "Is Arm Lipo The Same As An Arm Lift?",
      a: "No. Liposuction removes fat; a lift removes excess skin. Portfolio cases should be labeled so you compare the procedure you actually need.",
    },
    {
      q: "Will I Have Scars?",
      a: "Liposuction uses small access points. An arm lift leaves a longer scar. Your provider explains scar placement when you review lift cases.",
    },
    {
      q: "Can Arms Be Combined With Lipo 360?",
      a: "Often yes, when it is safe to treat multiple areas in one plan. Consult photos should show combination cases separately from arm-only results.",
    },
    {
      q: "How Do I Book?",
      a: "Request a complimentary consult through the contact form to review arm photos with a provider.",
    },
  ],
  finalCtaTitle: "Review Arm Photos At Consult",
  schemaName: "Tampa Arm Liposuction Before and After Photos",
  schemaDescription:
    "Tampa arm liposuction and arm lift before and after photos are reviewed at a complimentary consultation. Patient arm galleries are not posted on this page.",
};

const thighsPage: GalleryPageContent = {
  slug: "before-after-photos-thighs",
  canonicalPath: "/before-after-photos/body/thighs",
  seo: {
    title: "Tampa Thigh Liposuction Before & After Photos | Results at Consult",
    description:
      "Tampa thigh liposuction before and after photos are reviewed at your complimentary consult—not posted here. Learn how inner and outer thigh results are evaluated.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-f945845.png",
      alt: "Woman representing thigh contouring consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Thigh liposuction · Results at consultation",
    heroTitle: "Tampa Thigh Liposuction Before & After Photos",
    title: "How Thigh Results Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "Thigh liposuction before and after photos are not on this page. Tampa inner- and outer-thigh cases are reviewed privately at your complimentary consultation.",
      CONSULT_PHOTO_MEDIUM,
      "Thighs change with stance, swelling, and whether inner, outer, or circumferential liposuction was performed. At consult, ask which zones were treated and whether skin tightening or a lift was part of the plan. Gap-between-the-thighs photos online often ignore skin quality and hip width.",
    ],
  },
  gallery: {
    title: "Thigh Photos Stay Off The Public Site",
    intro: "Historical thigh case URLs redirect here so Google keeps topical context—without republishing patient images.",
  },
  lookFor: {
    title: "What To Check In Thigh Portfolio Cases",
    intro: "Inner and outer thighs behave differently. Do not judge from one cropped after photo.",
    items: [
      {
        title: "Inner Vs Outer Treatment",
        body: "Inner-thigh fullness and saddlebag outer fullness are different problems. Confirm which zones the photo actually shows.",
      },
      {
        title: "Standing Stance",
        body: "Feet together versus apart changes the silhouette. Ask for consistent posing when you review cases.",
      },
      {
        title: "Skin Laxity On The Inner Thigh",
        body: "Liposuction on loose inner-thigh skin can look deflated. Lift or energy-based tightening may be discussed instead.",
      },
      {
        title: "Balance With Hips And Waist",
        body: "Thigh work is often paired with Lipo 360 or BBL. Isolated thigh photos may not match a combination plan.",
      },
    ],
  },
  relatedIntro: "Use the thigh guide for candidacy, then review photos that match your inner- versus outer-thigh concern.",
  relatedProcedures: [
    {
      title: "Thigh Liposuction Guide",
      href: "/thigh-liposuction",
      body: "Inner and outer thigh contouring, recovery, and who is a candidate in Tampa Bay.",
    },
    {
      title: "Female Results Hub",
      href: GALLERY_FEMALE,
      body: "How women review body-sculpting portfolios at consult.",
    },
    {
      title: "BBL Photo Review",
      href: "/before-after-photos/body/brazilian-butt-lift",
      body: "Thighs are sometimes donor sites for fat transfer—see how BBL photos are reviewed.",
    },
    {
      title: "Lipo 360 Guide",
      href: "/liposuction-360",
      body: "Midsection sculpting often planned with lower-body contouring.",
    },
  ],
  faqTitle: "Thigh Photo FAQs",
  faqIntro: "Answers if you searched for Tampa thigh lipo before and after photos.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Thigh Before And After Photos?",
      a: "At consult with your provider. This category page does not display patient thigh galleries.",
    },
    {
      q: "Can Liposuction Create A Thigh Gap?",
      a: "Not reliably. Hip structure and skin quality limit how much inner-thigh space you can create. Portfolio photos should be interpreted with that anatomy in mind.",
    },
    {
      q: "Are Compression Garments Visible In After Photos?",
      a: "Healed photos are typically taken after garments come off. Early after photos in compression are not final results.",
    },
    {
      q: "Should I Be Near Goal Weight?",
      a: "Yes. Thigh liposuction refines contour; it is not a weight-loss operation. Photos of patients who later gained weight will not match a stable plan.",
    },
    {
      q: "How Do I Book?",
      a: "Send the contact form to schedule a complimentary consult that includes thigh photo review.",
    },
  ],
  finalCtaTitle: "Review Thigh Photos At Consult",
  schemaName: "Tampa Thigh Liposuction Before and After Photos",
  schemaDescription:
    "Tampa thigh liposuction before and after photos are reviewed at a complimentary consultation. Patient thigh galleries are not posted on this page.",
};

const bodyContouringPage: GalleryPageContent = {
  slug: "before-after-photos-body-contouring",
  canonicalPath: "/before-after-photos/body/body-contouring",
  seo: {
    title: "Tampa Body Contouring Before & After Photos | Results at Consult",
    description:
      "Tampa body contouring before and after photos are reviewed at your complimentary consult—not posted on this page. Learn how multi-area sculpting results are evaluated.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/shutterstock_263340653-b2373a9.jpg",
      alt: "Woman representing body contouring consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Body contouring · Results at consultation",
    heroTitle: "Tampa Body Contouring Before & After Photos",
    title: "How Combination Results Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "Body contouring before and after photos on the old site mixed multiple areas in one case. Those images are not republished here. You review combination plans—liposuction, skin tightening, and fat transfer—at a complimentary Tampa Bay consult.",
      CONSULT_PHOTO_MEDIUM,
      "A 'body contouring' label can mean Lipo 360, arms plus thighs, or a mommy makeover. At consult, insist on procedure lists for each photo set so you know whether you are looking at fat removal, muscle repair, or both.",
    ],
  },
  gallery: {
    title: "Combination Photos Belong In Consult",
    intro: "This page answers 'where are Tampa body contouring before and afters?' without pretending the photos live on the website.",
  },
  lookFor: {
    title: "How To Read Multi-Area Portfolio Cases",
    intro: "Combination surgery is not one procedure. Labels prevent apples-to-oranges comparisons.",
    items: [
      {
        title: "Written Procedure List",
        body: "Ask which areas were liposuctioned, whether a tummy tuck was included, and if fat was transferred.",
      },
      {
        title: "Similar Starting Weight",
        body: "Multi-area photos of patients 40 pounds lighter than you will not forecast your contour.",
      },
      {
        title: "Staging Vs Single Session",
        body: "Some results required two surgeries. A single after photo can hide a staged plan.",
      },
      {
        title: "Healed Versus Early Afters",
        body: "Combination cases swell longer. Confirm the month the after photos were taken.",
      },
    ],
  },
  relatedIntro: "Start with the liposuction hub, then open the specific photo-category page for your main concern.",
  relatedProcedures: [
    {
      title: "Liposuction Hub",
      href: "/liposuction",
      body: "All body-contouring and liposuction options in Tampa Bay.",
    },
    {
      title: "Lipo 360 Photo Review",
      href: "/before-after-photos/body/lipo-360",
      body: "Circumferential midsection photos reviewed at consult.",
    },
    {
      title: "Female Results Hub",
      href: GALLERY_FEMALE,
      body: "How women review body-sculpting portfolios at consult.",
    },
    {
      title: "Tummy Tuck Guide",
      href: "/tummy-tuck",
      body: "When skin and muscle repair—not fat removal alone—drive the after photo.",
    },
  ],
  faqTitle: "Body Contouring Photo FAQs",
  faqIntro: "If a search for Tampa body contouring before and afters brought you here, this is what the URL now means.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Body Contouring Before And After Photos?",
      a: "Reviewed at your complimentary consultation. This page does not host a public multi-area gallery.",
    },
    {
      q: "What Counts As Body Contouring In A Portfolio?",
      a: "Any mix of liposuction, fat transfer, and skin-tightening surgery. Your provider should name the procedures on each case you review.",
    },
    {
      q: "Why Not Post Combination Galleries Online?",
      a: "We do not have consents to display those patient images, and public galleries invite apples-to-oranges comparisons without a clinician present.",
    },
    {
      q: "Which Guide Should I Read First?",
      a: "If your priority is the midsection, start with Lipo 360. If several areas bother you, start with the liposuction hub, then book consult for photo review.",
    },
    {
      q: "How Do I Book?",
      a: "Use the contact form for a complimentary consult that includes portfolio review.",
    },
  ],
  finalCtaTitle: "Review Body Contouring Photos At Consult",
  schemaName: "Tampa Body Contouring Before and After Photos",
  schemaDescription:
    "Tampa body contouring before and after photos are reviewed at a complimentary consultation. Patient combination galleries are not posted on this page.",
};

const chinPage: GalleryPageContent = {
  slug: "before-after-photos-chin-neck",
  canonicalPath: "/before-after-photos/face/chin-and-neck-liposuction",
  seo: {
    title: "Tampa Chin & Neck Liposuction Before & After Photos | Results at Consult",
    description:
      "Tampa chin and neck liposuction before and after photos are reviewed at your complimentary consult—not posted on this page. Learn how jawline results are evaluated.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-1a6bc00.png",
      alt: "Woman representing chin and neck liposuction consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Chin & neck liposuction · Results at consultation",
    heroTitle: "Tampa Chin & Neck Liposuction Before & After Photos",
    title: "How Jawline Results Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "Chin and neck liposuction before and after photos are not published on this URL. Submental and jawline cases are reviewed with your provider at a complimentary consult.",
      CONSULT_PHOTO_MEDIUM,
      "A sharper profile depends on fat volume, skin recoil, and bone structure. Lighting and chin position change photos dramatically. At consult, look at true profile and three-quarter views and ask whether platysma banding or skin laxity needed more than liposuction.",
    ],
  },
  gallery: {
    title: "Chin Photos Are Not An Online Gallery",
    intro: "Former chin-and-neck case pages now point here so the topic stays on Liposuction of the jawline—without patient images.",
  },
  lookFor: {
    title: "What To Study In Chin And Neck Cases",
    intro: "Profile photos without consistent head position are easy to misread.",
    items: [
      {
        title: "True Profile Consistency",
        body: "Before and after should use the same chin elevation. Looking down hides fullness; looking up fakes a neck.",
      },
      {
        title: "Skin Recoil Under The Chin",
        body: "Liposuction on loose neck skin can look crepey. A neck lift conversation may be more honest than more fat removal.",
      },
      {
        title: "Male Vs Female Jawline Goals",
        body: "Masculine and feminine plans differ. Use the matching chin liposuction guide for your anatomy.",
      },
      {
        title: "Swelling Timeline",
        body: "The neck stays firm in a garment early on. Healed photos at several months are the useful comparison.",
      },
    ],
  },
  relatedIntro: "Read the chin liposuction guide that matches your anatomy, then review photos at consult.",
  relatedProcedures: [
    {
      title: "Chin & Neck Liposuction Guide",
      href: "/female-chin-liposuction",
      body: "Submental liposuction for a sharper jawline and neck contour.",
    },
    {
      title: "Male Chin Liposuction",
      href: "/male-chin-liposuction",
      body: "Jawline contouring planned for male anatomy.",
    },
    {
      title: "Female Results Hub",
      href: GALLERY_FEMALE,
      body: "How women review portfolios at a complimentary consult.",
    },
    {
      title: "Liposuction Hub",
      href: "/liposuction",
      body: "Body and facial liposuction options in Tampa Bay.",
    },
  ],
  faqTitle: "Chin & Neck Photo FAQs",
  faqIntro: "If you searched for Tampa chin lipo before and after photos, here is the accurate next step.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Chin And Neck Before And After Photos?",
      a: "Reviewed at your complimentary consultation. This page does not display patient face or neck galleries.",
    },
    {
      q: "Will Chin Lipo Give Me A Model Jawline?",
      a: "Bone structure sets the ceiling. Fat removal refines the angle under the chin; it cannot create a new mandible.",
    },
    {
      q: "Is This The Same As Kybella Photos?",
      a: "No. Surgical liposuction and injectable fat-dissolving treatments are different. Ask which method produced each case you review.",
    },
    {
      q: "Can Chin Lipo Be Combined With Body Lipo?",
      a: "Sometimes, when it is safe. Combination photos should be labeled so you know the recovery involved more than the neck.",
    },
    {
      q: "How Do I Book?",
      a: "Request a consult via the contact form to review chin and neck photos with a provider.",
    },
  ],
  finalCtaTitle: "Review Chin & Neck Photos At Consult",
  schemaName: "Tampa Chin and Neck Liposuction Before and After Photos",
  schemaDescription:
    "Tampa chin and neck liposuction before and after photos are reviewed at a complimentary consultation. Patient facial galleries are not posted on this page.",
};

const breastRejuvenationPage: GalleryPageContent = {
  slug: "before-after-photos-breast-rejuvenation",
  canonicalPath: "/before-after-photos/breast/breast-rejuvenation",
  seo: {
    title: "Tampa Breast Rejuvenation Before & After Photos | Results at Consult",
    description:
      "Tampa breast rejuvenation before and after photos are reviewed at your complimentary consult—not posted on this page. Learn how lift, volume, and fat-transfer results are evaluated.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-d9d6b23.png",
      alt: "Woman representing breast rejuvenation consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Breast rejuvenation · Results at consultation",
    heroTitle: "Tampa Breast Rejuvenation Before & After Photos",
    title: "How Breast Restoration Photos Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "Breast rejuvenation before and after photos from the old numbered cases are not shown here. You review restoration, lift, and fat-transfer examples with your provider at a complimentary consult.",
      CONSULT_PHOTO_MEDIUM,
      "Rejuvenation is not one implant size. It may combine a lift, volume replacement, or fat transfer after pregnancy or weight change. At consult, match before photos to nipple position and tissue thickness—not cup-size labels that ignore your chest wall.",
    ],
  },
  gallery: {
    title: "Breast Rejuvenation Photos Stay Private",
    intro: "This URL keeps topical equity for historical breast-rejuvenation cases without displaying patient breasts.",
  },
  lookFor: {
    title: "What To Compare In Rejuvenation Cases",
    intro: "Position, volume, and scar pattern all change the after photo.",
    items: [
      {
        title: "Nipple Position And Fold",
        body: "A lift changes where the nipple sits. Augmentation-only photos will not predict a rejuvenation plan that includes mastopexy.",
      },
      {
        title: "Fat Transfer Vs Implants",
        body: "Fat-transfer volume is subtler and depends on donor fat. Do not compare those afters to high-profile implant cases.",
      },
      {
        title: "Chest Width And Tissue Thickness",
        body: "The most useful before photos share your frame. Cleavage on a wider chest will not copy onto a narrow one.",
      },
      {
        title: "Healed Implant Settle",
        body: "Early afters sit high. Ask for photos taken after implants have dropped and softened, usually months later.",
      },
    ],
  },
  relatedIntro: "Read the rejuvenation guide, then review photos that match your lift-versus-volume needs.",
  relatedProcedures: [
    {
      title: "Breast Rejuvenation Guide",
      href: "/breast-rejuvenation",
      body: "Restoration options including lift, volume, and fat transfer in Tampa Bay.",
    },
    {
      title: "Breast Surgery Photo Hub",
      href: "/before-after-photos/breast",
      body: "How all breast-procedure photos are reviewed at consult.",
    },
    {
      title: "Breast Results Hub",
      href: GALLERY_BREAST,
      body: "Consult-only breast photo review for augmentation, lift, and reduction.",
    },
    {
      title: "Breast Lift Guide",
      href: "/breast-lift",
      body: "When position—not volume—is the main concern.",
    },
  ],
  faqTitle: "Breast Rejuvenation Photo FAQs",
  faqIntro: "Questions after searching for Tampa breast rejuvenation before and after photos.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Breast Rejuvenation Before And After Photos?",
      a: "At your complimentary consultation. This page does not publish patient breast galleries.",
    },
    {
      q: "Is Rejuvenation The Same As Augmentation?",
      a: "Not always. Rejuvenation often includes a lift or fat transfer to restore shape after pregnancy or weight change. Photos should be labeled accordingly.",
    },
    {
      q: "Why Did Old Case IDs Redirect Here?",
      a: "Numbered breast-rejuvenation URLs now point to this category so topical relevance stays on breast restoration—without showing those images.",
    },
    {
      q: "Should I Bring Bra-Size Goals?",
      a: "Bring inspiration photos and a sense of proportion. Cup size is a poor surgical measurement compared with base width and tissue coverage.",
    },
    {
      q: "How Do I Book?",
      a: "Submit the contact form for a complimentary consult that includes breast portfolio review.",
    },
  ],
  finalCtaTitle: "Review Breast Rejuvenation Photos At Consult",
  schemaName: "Tampa Breast Rejuvenation Before and After Photos",
  schemaDescription:
    "Tampa breast rejuvenation before and after photos are reviewed at a complimentary consultation. Patient breast galleries are not posted on this page.",
};

const breastHubPage: GalleryPageContent = {
  slug: "before-after-photos-breast",
  canonicalPath: "/before-after-photos/breast",
  seo: {
    title: "Tampa Breast Surgery Before & After Photos | Results at Consult",
    description:
      "Tampa breast surgery before and after photos—augmentation, lift, reduction, and rejuvenation—are reviewed at your complimentary consult, not posted on this page.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-e67c52e.png",
      alt: "Woman representing breast surgery consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Breast surgery · Results at consultation",
    heroTitle: "Tampa Breast Surgery Before & After Photos",
    title: "How Breast Procedure Photos Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "This breast photo hub is not a public implant catalog. Augmentation, lift, reduction, revision, and rejuvenation photos are reviewed with your provider at a complimentary consult.",
      CONSULT_PHOTO_MEDIUM,
      "Each breast procedure produces a different after photo. A reduction after is not an augmentation after. Use the procedure guides to name the surgery you want, then review matching cases in person so implant style, scar pattern, and nipple position are discussed with a clinician—not guessed from a homepage grid.",
    ],
  },
  gallery: {
    title: "Breast Photos Are Reviewed At Consult",
    intro: "Choose a procedure guide below, then book consult. Numbered historical cases for rejuvenation live under the rejuvenation category page.",
  },
  lookFor: {
    title: "How To Compare Breast Procedure Photos",
    intro: "Procedure type first, cup-size marketing never.",
    items: [
      {
        title: "Name The Procedure",
        body: "Augmentation, lift, reduction, revision, and rejuvenation are different operations. Mixing their after photos creates false expectations.",
      },
      {
        title: "Frame And Soft-Tissue Coverage",
        body: "Look for a similar chest width and tissue thickness in before photos before you fall in love with an after.",
      },
      {
        title: "Scar And Incision Pattern",
        body: "Lollipop, anchor, and inframammary scars show differently. Ask which pattern produced the case you like.",
      },
      {
        title: "Healed Settle And Symmetry",
        body: "Early photos still look swollen and high. Healed images are the fair comparison, and perfect symmetry is uncommon.",
      },
    ],
  },
  relatedIntro: "Open the matching breast guide, the rejuvenation photo category, or the consult-only breast gallery hub.",
  relatedProcedures: [
    {
      title: "Breast Rejuvenation Photos",
      href: "/before-after-photos/breast/breast-rejuvenation",
      body: "Category page for historical rejuvenation case URLs and consult photo review.",
    },
    {
      title: "Breast Results Hub",
      href: GALLERY_BREAST,
      body: "How to review breast portfolios at a complimentary Tampa Bay consult.",
    },
    {
      title: "Breast Augmentation Guide",
      href: "/breast-augmentation",
      body: "Implant options, sizing, and candidacy.",
    },
    {
      title: "Breast Procedures Hub",
      href: "/breasts",
      body: "All breast surgery options in one place.",
    },
  ],
  faqTitle: "Breast Surgery Photo FAQs",
  faqIntro: "If you searched for Tampa breast before and after photos, this hub explains what happens next.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Breast Before And After Photos?",
      a: "Reviewed privately at consult. Neither this hub nor the rejuvenation category page displays patient breast images.",
    },
    {
      q: "Which Breast Photo Page Should I Use?",
      a: "Use this hub for all breast procedures. If you had a numbered rejuvenation case URL, that path now explains rejuvenation-specific photo review.",
    },
    {
      q: "Can I See Augmentation And Lift In The Same Portfolio?",
      a: "Often yes, because many patients need both. Your provider will separate combination cases from implant-only cases.",
    },
    {
      q: "Are Online Cup-Size Charts Useful?",
      a: "They are a starting point only. Tissue, implant profile, and chest wall matter more than a letter size.",
    },
    {
      q: "How Do I Book?",
      a: "Use the contact form to request a complimentary consult with breast portfolio review.",
    },
  ],
  finalCtaTitle: "Review Breast Photos At Consult",
  schemaName: "Tampa Breast Surgery Before and After Photos",
  schemaDescription:
    "Tampa breast surgery before and after photos are reviewed at a complimentary consultation. Patient breast galleries are not posted on this page.",
};

const maleSculptingPage: GalleryPageContent = {
  slug: "before-after-photos-male-body-sculpting",
  canonicalPath: "/before-after-photos/male/male-body-sculpting",
  seo: {
    title: "Tampa Male Body Sculpting Before & After Photos | Results at Consult",
    description:
      "Tampa male body sculpting before and after photos are reviewed at your complimentary consult—not posted on this page. Learn how men's Lipo 360 and torso results are evaluated.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/shutterstock_125481776.jpg",
      alt: "Man representing male body sculpting consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Male body sculpting · Results at consultation",
    heroTitle: "Tampa Male Body Sculpting Before & After Photos",
    title: "How Men's Torso Results Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "Male body sculpting before and after photos from old numbered cases are not displayed here. Men's Lipo 360, chest, and abdominal cases are reviewed with your provider at a complimentary consult.",
      CONSULT_PHOTO_MEDIUM,
      "Masculine contouring aims for a flatter flank, natural chest, and athletic midsection—not an hourglass. At consult, separate gym-built muscle from surgical fat removal, and ask whether gynecomastia surgery or etching was included in the after photo.",
    ],
  },
  gallery: {
    title: "Male Sculpting Photos Are Consult-Only",
    intro: "This category captures historical male-body-sculpting URLs without republishing patient photos.",
  },
  lookFor: {
    title: "What To Look For In Men's Portfolio Cases",
    intro: "Male after photos should look like a natural torso, not a copied female waist.",
    items: [
      {
        title: "Flank And Waist Taper",
        body: "Male Lipo 360 should slim love handles without carving an hourglass. Check back and oblique views.",
      },
      {
        title: "Chest Contour If Gynecomastia Was Treated",
        body: "A flatter chest with natural nipple position is the goal. Confirm whether gland excision was part of the case.",
      },
      {
        title: "Abdominal Etching Versus Fat Removal",
        body: "Six-pack lines may be etching plus training. Ask what the surgery actually did versus what the gym did.",
      },
      {
        title: "Skin Quality After Weight Loss",
        body: "Loose abdominal skin may need a male tummy tuck. Lipo-only photos will not predict that pathway.",
      },
    ],
  },
  relatedIntro: "Read the men's procedure guides, then review photos that match chest versus midsection goals.",
  relatedProcedures: [
    {
      title: "Male Lipo 360 Guide",
      href: "/male-liposuction-360",
      body: "Circumferential midsection liposuction planned for male anatomy.",
    },
    {
      title: "Male Surgery Photo Hub",
      href: "/before-after-photos/male",
      body: "How all men's surgery photos are reviewed at consult.",
    },
    {
      title: "Male Results Hub",
      href: GALLERY_MALE,
      body: "Consult-only male photo review for chest, abdomen, and Lipo 360.",
    },
    {
      title: "Male Chest Reduction",
      href: "/male-chest-reduction",
      body: "Gynecomastia surgery for a flatter masculine chest.",
    },
  ],
  faqTitle: "Male Body Sculpting Photo FAQs",
  faqIntro: "If you searched for Tampa male lipo before and after photos, this is the accurate landing page.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Male Body Sculpting Before And After Photos?",
      a: "At your complimentary consultation. This page does not publish patient photos of men's torsos.",
    },
    {
      q: "Is Male Lipo 360 The Same As Female Lipo 360?",
      a: "Treatment areas overlap, but the aesthetic goal is a masculine taper. Review male cases—not female hourglass photos—for planning.",
    },
    {
      q: "Why Did Numbered Male Cases Redirect Here?",
      a: "Old male-body-sculpting case IDs now consolidate to this category so the topic stays on men's results review without showing those images.",
    },
    {
      q: "Can I Get A Six-Pack From Photos I See At Consult?",
      a: "Etching can enhance existing muscle. It cannot create visible abs without muscle development and a lean enough fat layer.",
    },
    {
      q: "How Do I Book?",
      a: "Submit the contact form for a complimentary men's consult that includes portfolio review.",
    },
  ],
  finalCtaTitle: "Review Male Sculpting Photos At Consult",
  schemaName: "Tampa Male Body Sculpting Before and After Photos",
  schemaDescription:
    "Tampa male body sculpting before and after photos are reviewed at a complimentary consultation. Patient galleries are not posted on this page.",
};

const maleHubPage: GalleryPageContent = {
  slug: "before-after-photos-male",
  canonicalPath: "/before-after-photos/male",
  seo: {
    title: "Tampa Male Surgery Before & After Photos | Results at Consult",
    description:
      "Tampa male surgery before and after photos—Lipo 360, chest reduction, and abdominal sculpting—are reviewed at your complimentary consult, not posted on this page.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/shutterstock_125481776.jpg",
      alt: "Man representing male surgery consultation in Tampa Bay",
    },
  },
  breadcrumb: { href: PHOTO_HUB, label: "Before & After Photos" },
  intro: {
    eyebrow: "Male surgery · Results at consultation",
    heroTitle: "Tampa Male Surgery Before & After Photos",
    title: "How Men's Procedure Photos Are Reviewed",
    lead: CONSULT_PHOTO_GALLERY_LEAD,
    paragraphs: [
      "This male photo hub covers chest reduction, abdominal sculpting, chin lipo, and Lipo 360. None of those patient photos are published here. You review them with a provider at a complimentary consult.",
      CONSULT_PHOTO_MEDIUM,
      "Men often arrive with gym photos or social transformations that mix steroids, lighting, and surgery. At consult, your provider will pull cases that match your chest, abdomen, or neck concern and explain what surgery can and cannot change.",
    ],
  },
  gallery: {
    title: "Male Photos Are Not Posted Online",
    intro: "Numbered male-body-sculpting cases redirect to the sculpting category. This hub explains men's photo review across procedures.",
  },
  lookFor: {
    title: "How Men Should Use Portfolio Review",
    intro: "Pick the procedure first, then look for a similar starting torso.",
    items: [
      {
        title: "Chest, Midsection, Or Neck",
        body: "Gynecomastia, Lipo 360, and chin lipo are different operations. Do not grade a chest after photo against a waist goal.",
      },
      {
        title: "Natural Masculine Lines",
        body: "Good male results look athletic and proportionate—not over-suctioned or feminized at the waist.",
      },
      {
        title: "Honest Fitness Context",
        body: "Ask what the patient did in the gym. Surgery removes fat; it does not replace training.",
      },
      {
        title: "Recovery Time Off Work",
        body: "Desk-job downtime differs from physical jobs. Use consult photos to talk timeline, not just shape.",
      },
    ],
  },
  relatedIntro: "Go to the male sculpting photo category for historical case URLs, or open a procedure guide.",
  relatedProcedures: [
    {
      title: "Male Body Sculpting Photos",
      href: "/before-after-photos/male/male-body-sculpting",
      body: "Category page for historical male sculpting case URLs and torso photo review.",
    },
    {
      title: "Male Results Hub",
      href: GALLERY_MALE,
      body: "Consult-only male surgery photo review.",
    },
    {
      title: "Men's Procedures Hub",
      href: "/men",
      body: "All male body sculpting options in Tampa Bay.",
    },
    {
      title: "Male Lipo 360 Guide",
      href: "/male-liposuction-360",
      body: "360-degree liposuction for a leaner masculine midsection.",
    },
  ],
  faqTitle: "Male Surgery Photo FAQs",
  faqIntro: "Answers if you searched for Tampa male surgery before and after photos.",
  faqs: [
    {
      q: CONSULT_PHOTO_FAQ_Q,
      a: CONSULT_PHOTO_FAQ_A,
    },
    {
      q: "Where Are Tampa Male Before And After Photos?",
      a: "Reviewed at your complimentary consultation. This hub does not display patient photos.",
    },
    {
      q: "What Is The Difference Between This Hub And Male Body Sculpting Photos?",
      a: "This hub covers all men's procedures. The sculpting category is the canonical landing page for old numbered male-body-sculpting case URLs.",
    },
    {
      q: "Do You Show Gynecomastia Photos Online?",
      a: "No. Chest-reduction cases are reviewed in consult so we can talk about gland versus fat and scar placement privately.",
    },
    {
      q: "Should I Lose Weight First?",
      a: "Being near a stable weight improves sculpting results. Liposuction is not a substitute for weight loss.",
    },
    {
      q: "How Do I Book?",
      a: "Use the contact form to start a complimentary men's consult with portfolio review.",
    },
  ],
  finalCtaTitle: "Review Male Surgery Photos At Consult",
  schemaName: "Tampa Male Surgery Before and After Photos",
  schemaDescription:
    "Tampa male surgery before and after photos are reviewed at a complimentary consultation. Patient galleries are not posted on this page.",
};

const PHOTO_CATEGORY_PAGES: GalleryPageContent[] = [
  hubPage,
  lipo360Page,
  bblPage,
  armsPage,
  thighsPage,
  bodyContouringPage,
  chinPage,
  breastHubPage,
  breastRejuvenationPage,
  maleHubPage,
  maleSculptingPage,
];

const PHOTO_CATEGORY_BY_PATH: Record<string, GalleryPageContent> = Object.fromEntries(
  PHOTO_CATEGORY_PAGES.map((page) => [page.canonicalPath, page]),
);

export function getPhotoCategoryByPath(path: string): GalleryPageContent | null {
  const normalized = path.replace(/\/$/, "") || "/";
  return PHOTO_CATEGORY_BY_PATH[normalized] ?? null;
}

export function getPhotoCategoryPaths(): string[] {
  return PHOTO_CATEGORY_PAGES.map((page) => page.canonicalPath!).filter(Boolean);
}

export function getPhotoCategoryStaticParams(): { path: string[] }[] {
  return getPhotoCategoryPaths().map((fullPath) => {
    if (fullPath === PHOTO_HUB) return { path: [] };
    return { path: fullPath.replace(`${PHOTO_HUB}/`, "").split("/") };
  });
}
