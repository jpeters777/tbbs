import type { KeywordLink } from "@/lib/keyword-links";
import {
  CONSULT_PHOTO_FAQ_A,
  CONSULT_PHOTO_FAQ_Q,
} from "@/content/consult-photo-messaging";

/** Top homepage FAQs — concise, factual answers optimized for SEO and AI search (AIO). */
export const homeFaqs: {
  q: string;
  a: string;
  links?: KeywordLink[];
}[] = [
  {
    q: "What Is Tampa Bay Body Sculpting?",
    a: "Tampa Bay Body Sculpting is a concierge cosmetic surgery guidance service in Tampa Bay, Florida. We help patients explore procedures such as Lipo 360, tummy tuck, breast surgery, and male body sculpting, connect with board-certified providers, and navigate consultation through recovery.",
  },
  {
    q: "What Cosmetic Surgery Procedures Are Offered?",
    a: "Popular procedures include Lipo 360, tummy tuck, mommy makeover, Brazilian butt lift (BBL), breast augmentation, breast lift, breast reduction, arm and thigh liposuction, chin and neck liposuction, and male body sculpting including gynecomastia treatment. Browse body contouring, breast, and men's procedure hubs for full guides.",
    links: [
      { text: "body contouring", href: "/liposuction" },
      { text: "breast", href: "/breasts" },
      { text: "men's procedure", href: "/men" },
    ],
  },
  {
    q: "Are Virtual Consultations Available?",
    a: "Yes. Complimentary virtual consultations are available so you can discuss goals, share your own photos for assessment, review your doctor's before & after portfolio with your doctor, and begin planning from home before traveling to Tampa Bay. Visit our resources page to learn more.",
    links: [{ text: "resources page", href: "/resources" }],
  },
  {
    q: CONSULT_PHOTO_FAQ_Q,
    a: CONSULT_PHOTO_FAQ_A,
  },
  {
    q: "Do You Offer Financing For Cosmetic Surgery?",
    a: "Yes. Financing options are available to help qualified patients manage the cost of cosmetic procedures with affordable monthly payments. See our financing options page for details.",
    links: [{ text: "financing options page", href: "/financing-options" }],
  },
  {
    q: "Do Out-Of-Town Patients Travel To Tampa Bay For Surgery?",
    a: "Yes. Many patients travel from across Florida and the United States. We provide travel planning support, recovery resources, and guidance for out-of-town patients through our travel information and out-of-town patient guide.",
    links: [
      { text: "travel information", href: "/travel-information" },
      { text: "out-of-town patient guide", href: "/out-of-town-patient-guide" },
    ],
  },
  {
    q: "How Do I Schedule A Consultation?",
    a: "Schedule a free virtual consultation through our online form or call 813-557-6400. Our team will discuss your goals, help you explore procedure options like Lipo 360 or tummy tuck, and point you to FAQs and recovery guides as needed.",
    links: [
      { text: "FAQs", href: "/faqs" },
      { text: "recovery guides", href: "/recovery-guides" },
    ],
  },
];

export type HomeFaq = (typeof homeFaqs)[number];
