import { createCuratedPage } from "@/lib/premium-curated/build-content";
import type { CuratedPageContent } from "@/lib/premium-curated/types";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const travelInformationPage: CuratedPageContent = createCuratedPage({
  slug: "travel-information",
  category: "resources",
  seo: {
    title: "Cosmetic Surgery Travel Tampa | Out-of-Town Patient Planning | Tampa Bay Body Sculpting",
    description:
      "Planning cosmetic surgery travel to Tampa Bay? Get airport info, hotel guidance, recovery stay timelines, and concierge support for out-of-town patients before, during, and after surgery.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/17-6f8c86a.png",
      alt: "Luxury travel to Tampa Bay for cosmetic surgery",
    },
  },
  intro: {
    eyebrow: "Patient resources · Tampa Bay",
    heroTitle: "Travel For Cosmetic Surgery In Tampa Bay",
    title: "Personalized Guidance For Traveling Patients",
    lead: "Tampa Bay Body Sculpting proudly works with patients traveling from across Florida and throughout the United States for advanced body contouring and cosmetic procedures.",
    paragraphs: [
      "Our team provides personalized guidance throughout the process—from your initial virtual consultation to procedure planning and recovery recommendations—to help make your experience as seamless and comfortable as possible.",
      "The Tampa Bay area offers convenient airport access, luxury accommodations, beautiful waterfront locations, and a private, relaxing environment for recovery. We can provide recommendations for nearby hotels, transportation, and recovery resources.",
      "Whether you're driving from elsewhere in Florida or flying in from across the country, this guide covers what to plan before, during, and after your surgical visit to Tampa.",
    ],
  },
  introEyebrowQuestion: "What should traveling patients know?",
  heroSecondaryCta: "Travel planning at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "Travel journey" },
    { href: "#procedure-focus", label: "Key planning areas" },
    { href: "#candidacy", label: "Who this helps" },
    { href: "#recovery", label: "Recovery stay" },
    { href: "#results", label: "Why Tampa Bay" },
    { href: "#faq", label: "FAQs" },
  ],
  glance: {
    col1Title: "Planning essentials",
    col1Items: [
      "Virtual consultation before travel",
      "Arrive 1+ day before surgery",
      "TPA & PIE airport access",
      "Hotels & extended-stay options",
      "Caregiver & transportation",
      "Follow-up before flying home",
    ],
    candidates: [
      "Patients outside the Tampa Bay area",
      "Out-of-state cosmetic surgery travelers",
      "Anyone combining surgery with a planned trip",
      "Patients needing concierge-style guidance",
    ],
    benefits: [
      "Start consult remotely before booking flights",
      "Experienced support for traveling patients",
      "Convenient airports & recovery-friendly stays",
      "Clear guidance on stay length & return travel",
    ],
    procedureSnapshot: [
      "Popular: Lipo 360, BBL, tummy tuck, breast",
      "Stay length varies by procedure",
      "Caregiver often required early recovery",
      "Follow-ups before clearance to fly",
    ],
  },
  howItWorks: {
    eyebrow: "Your travel journey",
    title: "Your Cosmetic Surgery Travel Journey",
    intro:
      "Traveling for surgery requires a little extra planning—but with the right preparation, it can be a seamless experience. Follow these phases from first consult to return home.",
    steps: [
      {
        step: "01",
        title: "Virtual Consultation From Home",
        body: "Begin remotely to discuss goals, share your own photos for assessment, review your provider's before & after portfolio with your provider, and receive personalized procedure recommendations. Many traveling patients complete this step before booking flights.",
      },
      {
        step: "02",
        title: "Confirm Surgery Date & Pre-Op",
        body: "Once approved, coordinate your surgical date. Complete any required labs, medical clearance, and pre-operative instructions from your provider.",
      },
      {
        step: "03",
        title: "Book Travel & Accommodations",
        body: "Secure flights and a recovery-friendly place to stay near your surgical facility. Arrive at least one day before surgery when possible.",
      },
      {
        step: "04",
        title: "Surgery Day & Initial Recovery",
        body: "Arrange transportation to and from the facility. Have a responsible adult available to assist during the first 24–48 hours if required.",
      },
      {
        step: "05",
        title: "In-Town Follow-Up & Healing",
        body: "Attend scheduled follow-up appointments. Your provider monitors healing and advises when it's safe to travel home.",
      },
      {
        step: "06",
        title: "Return Home With Instructions",
        body: "Travel only when cleared. Continue compression garments, activity limits, and aftercare per your provider's personalized instructions.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Travel planning",
    title: "Concierge-Style Support For Traveling Patients",
    intro:
      "We help coordinate the details that make out-of-town surgery manageable—so you can focus on healing, not logistics.",
    items: [
      {
        title: "Virtual Consultations",
        body: "Start your consultation process remotely with personalized guidance before traveling for your procedure.",
      },
      {
        title: "Luxury Accommodations",
        body: "Recommendations for nearby hotels, recovery-friendly stays, and comfortable accommodations throughout the Tampa Bay area.",
      },
      {
        title: "Transportation Planning",
        body: "Guidance on getting to and from the surgical facility, including surgery-day rides and local transportation options.",
      },
      {
        title: "Recovery Planning",
        body: "Important details including garments, aftercare supplies, activity restrictions, and post-procedure support before you travel home.",
      },
      {
        title: "Airport Access",
        body: "Tampa International Airport (TPA) and St. Pete–Clearwater International Airport (PIE) both offer convenient access for traveling patients.",
      },
      {
        title: "Tampa Bay Experience",
        body: "Enjoy waterfront surroundings and a relaxing environment during your stay—while respecting recovery activity limits.",
      },
    ],
    closingParagraphs: [
      "During your consultation, we help guide you through next steps based on your procedure, timeline, and individual goals.",
    ],
  },
  candidacy: {
    title: "Who This Travel Guide Helps",
    intro:
      "This resource is designed for anyone considering or planning cosmetic surgery in Tampa Bay from outside the immediate area.",
    idealTitle: "Especially helpful if you",
    ideal: [
      "Live outside Tampa Bay and want to plan a surgical trip",
      "Need clarity on how long to stay after surgery",
      "Want hotel and airport guidance before booking",
      "Are comparing Tampa providers from another state",
    ],
    considerationsTitle: "Plan with your provider",
    considerations: [
      "Stay length depends on your specific procedure and healing",
      "Some surgeries require a caregiver—confirm before traveling alone",
      "Flying home too early can increase risk—follow clearance timing",
      "Medical clearance and pre-op requirements vary by patient",
    ],
    closing:
      "Schedule a complimentary virtual consultation to receive personalized travel recommendations for your procedure and recovery timeline.",
  },
  combinations: {
    title: "Plan Your Trip & Procedure Together",
    intro:
      "Travel planning works best alongside procedure research. Explore related resources and the surgeries traveling patients most often book in Tampa Bay.",
    groups: [
      {
        label: "Travel resources",
        links: [
          { label: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" },
          { label: "Recovery Guides", href: "/recovery-guides" },
          { label: "Financing Options", href: "/financing-options" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
      {
        label: "Popular with travelers",
        links: [
          { label: "Lipo 360", href: "/liposuction-360" },
          { label: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" },
          { label: "Lipo 360 + BBL", href: "/lipo-360-bbl" },
          { label: "Tummy Tuck", href: "/tummy-tuck" },
          { label: "Breast Procedures", href: "/breasts" },
          { label: "Men's Procedures", href: "/men" },
        ],
      },
    ],
  },
  recovery: {
    title: "Recovery Stay In Tampa Bay",
    intro:
      "How long you remain in the area after surgery depends on your procedure and healing progress. Plan accommodations for the full recommended recovery window—not just surgery day.",
    essentialsTitle: "Travel Recovery Essentials",
    essentialsIntro:
      "Every procedure has different clearance timing. These are the travel planning topics out-of-town patients ask about most.",
    steps: [
      {
        step: "01",
        title: "First 24–48 Hours",
        body: "Rest with assistance. No driving. Short walks as directed. Many patients stay in a hotel or rental close to their provider for easy follow-up access.",
      },
      {
        step: "02",
        title: "First Week",
        body: "Attend initial follow-up visits. Swelling and discomfort gradually improve. Confirm caregiver availability throughout this period.",
      },
      {
        step: "03",
        title: "Before Flying Home",
        body: "Obtain explicit clearance from your provider. BBL, tummy tuck, and combination procedures often require longer in-town stays than liposuction alone.",
      },
      {
        step: "04",
        title: "Continued Healing At Home",
        body: "Follow all travel recommendations—hydration, walking on flights, garment wear, and activity limits continue after you leave Tampa.",
      },
    ],
    essentials: [
      {
        title: "Book Flexible Travel",
        body: "Surgery dates can shift for medical reasons. Refundable or changeable flights and hotel bookings reduce stress if your timeline adjusts.",
      },
      {
        title: "Arrange A Caregiver",
        body: "Many procedures require a responsible adult for surgery-day transport and the first 24–48 hours. Confirm requirements before traveling alone.",
      },
      {
        title: "Plan Stay Length By Procedure",
        body: "Liposuction may allow a shorter Tampa stay than BBL, tummy tuck, or combination surgery. Review recovery guides and confirm timing with your provider.",
      },
      {
        title: "Pack For Recovery",
        body: "Loose clothing, slip-on shoes, medications, ID, and compression garments if instructed. See the Out-of-Town Patient Guide for a full packing checklist.",
      },
      {
        title: "Know Your Airports",
        body: "Tampa International (TPA) and St. Pete–Clearwater (PIE) both serve the area. Choose based on flight availability and your accommodation location.",
      },
      {
        title: "Wait For Flight Clearance",
        body: "Do not fly until your provider clears you. Early travel—especially after BBL or tummy tuck—can increase complication risk.",
      },
    ],
    tips: [
      "Arrive at least one day before surgery when possible",
      "Book a recovery-friendly hotel or extended-stay near your provider",
      "Arrange surgery-day transportation—you cannot drive after anesthesia",
      "Attend all in-town follow-ups before booking your return flight",
      "Stay hydrated and walk during travel once cleared to fly",
      "Keep emergency contact info and post-op instructions accessible",
    ],
  },
  results: {
    title: "Why Patients Choose Tampa Bay",
    intro:
      "Patients travel to Tampa Bay for experienced providers, refined results, and a supportive out-of-town patient experience.",
    items: [
      {
        title: "Experienced Provider Network",
        body: "Access to board-certified cosmetic surgeons specializing in body contouring, breast surgery, and men's procedures.",
      },
      {
        title: "Virtual Consult Convenience",
        body: "Start the process from home—discuss goals and receive recommendations before committing to travel dates.",
      },
      {
        title: "Convenient Access",
        body: "Two international airports, major highways, and a wide range of accommodations near surgical facilities.",
      },
      {
        title: "Popular Procedures",
        body: "Lipo 360, BBL, tummy tuck, breast surgery, and men's body contouring draw patients from across the country.",
      },
      {
        title: "Personalized Support",
        body: "Our team provides clear communication and ongoing guidance throughout consultation, surgery, and recovery.",
      },
      {
        title: "Recovery-Friendly Environment",
        body: "Waterfront settings and private accommodations support a calm healing experience during your stay.",
      },
    ],
  },
  relatedIntro:
    "Continue planning with step-by-step checklists, recovery timelines, and procedure guides tailored to out-of-town patients.",
  relatedProcedures: [
    {
      title: "Out-of-Town Patient Guide",
      href: "/out-of-town-patient-guide",
      body: "Detailed checklist covering what to bring, surgery day, and traveling home after cosmetic surgery.",
    },
    {
      title: "Recovery Guides",
      href: "/recovery-guides",
      body: "Procedure-specific recovery timelines to help you plan how long to stay in Tampa after surgery.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible payment plans for your procedure—plan surgical and travel costs together.",
    },
    {
      title: "Lipo 360",
      href: "/liposuction-360",
      body: "Popular with traveling patients—comprehensive midsection sculpting in Tampa Bay.",
    },
    {
      title: "Brazilian Butt Lift (BBL)",
      href: "/brazilian-butt-lift-bbl",
      body: "Advanced fat transfer body contouring with strict early recovery requirements for travelers.",
    },
    {
      title: "Tummy Tuck",
      href: "/tummy-tuck",
      body: "Abdominoplasty for a flatter abdomen—plan extended stay for proper follow-up.",
    },
    {
      title: "FAQs",
      href: "/faqs",
      body: "More answers about travel, flying after surgery, and out-of-town patient support.",
    },
    {
      title: "Resources Hub",
      href: "/resources",
      body: "Central directory for all patient planning and educational resources.",
    },
  ],
  faqs: [
    {
      q: "Do you work with patients who live outside the Tampa Bay area?",
      a: "Yes. We regularly assist patients from throughout Florida and across the United States. Many consultations can begin virtually, making it convenient to start the process before traveling.",
    },
    {
      q: "When should I arrive before my surgery?",
      a: "It is recommended patients arrive at least one day before surgery. Your provider may recommend a different timeline depending on your procedure and treatment plan.",
    },
    {
      q: "How long should I stay in Tampa after surgery?",
      a: "The recommended length of stay varies depending on your procedure and recovery progress. Your provider will advise you on when it is safe to travel home after your follow-up evaluation.",
      links: [{ text: "Recovery Guides", href: "/recovery-guides" }],
    },
    {
      q: "Can I fly after cosmetic surgery?",
      a: "Many patients are able to fly home after surgery, but the timing depends on the procedure performed and your provider's recommendations. Always follow your provider's instructions before making travel arrangements.",
    },
    {
      q: "Will I need someone to travel with me?",
      a: "For many cosmetic procedures, a responsible adult is required to drive you home after surgery and assist during the initial recovery period. Your provider will explain caregiver requirements before your procedure.",
    },
    {
      q: "Can you recommend hotels or accommodations?",
      a: "Yes. Our team can provide general recommendations for hotels and extended-stay accommodations located near our providers' surgical facilities.",
    },
    {
      q: "Which airport should I fly into?",
      a: "Tampa International Airport (TPA) and St. Pete–Clearwater International Airport (PIE) both provide convenient access for patients traveling to the Tampa Bay area.",
    },
    {
      q: "Can I start with a virtual consultation?",
      a: "Yes. Virtual consultations allow you to discuss goals, share your own photos for assessment, review your provider's before & after portfolio with your provider, and begin planning before booking travel.",
    },
    {
      q: "What procedures are most popular for traveling patients?",
      a: "Many traveling patients visit for Lipo 360, BBL, tummy tuck, breast surgery, male Lipo 360, and advanced body contouring treatments.",
    },
    {
      q: "How do I arrange transportation on surgery day?",
      a: "You cannot drive yourself home after anesthesia. Arrange a responsible adult or car service for surgery day pickup—our team can discuss local options during planning.",
    },
    {
      q: "Should I book refundable travel?",
      a: "Surgery dates can occasionally shift for medical reasons. Flexible or refundable bookings reduce stress if your timeline changes.",
    },
    {
      q: "What should I pack for recovery in Tampa?",
      a: "Comfortable loose clothing, slip-on shoes, medications, identification, and compression garments if instructed. See our Out-of-Town Patient Guide for a full checklist.",
      links: [{ text: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" }],
    },
    {
      q: "Can I combine my trip with vacation activities?",
      a: "Recovery requires rest and activity limits—not sightseeing or swimming. Plan a calm stay focused on healing; enjoy Tampa Bay after you're cleared for normal activity.",
    },
    {
      q: "How do follow-up visits work for out-of-town patients?",
      a: "In-person follow-ups occur while you're in Tampa before travel home. Additional check-ins may be virtual depending on your provider's protocol.",
    },
    {
      q: "How is this different from the Out-of-Town Patient Guide?",
      a: "This page focuses on travel logistics—airports, accommodations, stay length, and flying home. The Out-of-Town Patient Guide is a step-by-step checklist covering medical clearance, packing, surgery day, and return travel in more detail.",
      links: [{ text: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" }],
    },
  ],
  faqTitle: "Travel FAQs",
  faqIntro:
    "Common questions from patients traveling to Tampa Bay for cosmetic surgery. Contact our team for personalized planning guidance.",
  finalCtaTitle: "Planning Cosmetic Surgery Travel To Tampa?",
  schemaProcedureName: "Cosmetic Surgery Travel Planning",
  schemaAlternateNames: [
    "Travel for Cosmetic Surgery Tampa",
    "Out-of-Town Surgery Travel Tampa Bay",
    "Cosmetic Surgery Travel Information",
  ],
  schemaDescription:
    "Travel information and planning guidance for out-of-town patients having cosmetic surgery in Tampa Bay, Florida—including airports, accommodations, recovery stay length, and return travel.",
});
