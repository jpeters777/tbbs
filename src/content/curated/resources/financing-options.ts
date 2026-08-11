import { createCuratedPage } from "@/lib/premium-curated/build-content";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { CHERRY_APPLY_URL } from "@/lib/site";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const financingOptionsPage: CuratedPageContent = createCuratedPage({
  slug: "financing-options",
  category: "resources",
  seo: {
    title: "Cosmetic Surgery Financing Tampa | Payment Plans | Tampa Bay Body Sculpting",
    description:
      "Explore cosmetic surgery financing in Tampa with flexible monthly payment plans through Cherry. Apply online and schedule your consultation today.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-504fd1c.png",
      alt: "Woman planning cosmetic surgery budget and financing options",
    },
  },
  intro: {
    eyebrow: "Patient resources · Tampa Bay",
    heroTitle: "Cosmetic Surgery Financing In Tampa Bay",
    title: "Flexible Payment & Financing Solutions",
    lead: "We understand that cosmetic surgery is a personal investment—which is why we offer financing options to help make your procedure more accessible without delaying the results you've been planning for.",
    paragraphs: [
      "At Tampa Bay Body Sculpting, we believe achieving your cosmetic goals should be both exciting and financially manageable. Flexible financing allows many patients to spread the cost of their procedure into affordable monthly payments rather than paying the full amount upfront.",
      "During your complimentary consultation, our team reviews your treatment plan, explains total procedure cost, and helps you explore Cherry financing options that fit your budget.",
      "Applying is quick, and many qualified applicants receive a decision within minutes. Whether you're planning Lipo 360, a mommy makeover, breast surgery, or men's body contouring, financing can help you move forward when you're ready.",
    ],
  },
  introEyebrowQuestion: "How does cosmetic surgery financing work?",
  heroSecondaryCta: "Financing at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "How financing works" },
    { href: "#procedure-focus", label: "Payment options" },
    { href: "#candidacy", label: "Who this helps" },
    { href: "#recovery", label: "Planning tips" },
    { href: "#results", label: "Benefits" },
    { href: "#faq", label: "FAQs" },
  ],
  glance: {
    col1Title: "What's available",
    col1Items: [
      "Cherry financing partner",
      "Flexible monthly payments",
      "Fast online application",
      "Soft credit check options",
      "Quick approval decisions",
      "Down payment + finance balance",
    ],
    candidates: [
      "Patients ready for surgery but prefer monthly payments",
      "Those comparing cost vs. waiting to save",
      "Qualified applicants seeking flexible terms",
      "Anyone reviewing budget during consultation",
    ],
    benefits: [
      "Schedule surgery sooner rather than waiting years to save",
      "Predictable monthly payments for easier budgeting",
      "Transparent pricing reviewed at consultation",
      "Multiple procedures may qualify under one plan",
    ],
    procedureSnapshot: [
      "Apply online in minutes",
      "Decision often same day",
      "Works with most cosmetic procedures",
      "Team guides you through the process",
    ],
  },
  howItWorks: {
    title: "How Cosmetic Surgery Financing Works",
    intro:
      "Financing turns a single surgical investment into manageable monthly payments. Here's the typical path from consultation to approved payment plan.",
    steps: [
      {
        step: "01",
        title: "Consultation & Treatment Plan",
        body: "Your journey starts with a complimentary virtual consultation. You'll receive a personalized treatment plan and transparent pricing for your procedure or combination of procedures.",
      },
      {
        step: "02",
        title: "Review Total Cost & Budget",
        body: "Our team walks through the full surgical cost—including surgeon, facility, and anesthesia when applicable—so you know exactly what you're financing before you apply.",
      },
      {
        step: "03",
        title: "Apply With Cherry",
        body: "We partner with Cherry for flexible monthly payment plans. Our team walks you through the application and helps you understand terms, monthly payments, and approval details.",
      },
      {
        step: "04",
        title: "Apply Online",
        body: "Complete a secure online application—often in just a few minutes. Many programs use a soft credit check for pre-qualification without affecting your credit score initially.",
      },
      {
        step: "05",
        title: "Receive Your Decision",
        body: "Many applicants receive a financing decision within minutes. Approved amounts and monthly payment estimates depend on credit approval and selected program terms.",
      },
      {
        step: "06",
        title: "Schedule Surgery With Confidence",
        body: "Once financing is in place, coordinate your surgery date with our team. Monthly payments begin per your agreement—you focus on results, not upfront sticker shock.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Financing details",
    title: "Payment Options & What You Can Finance",
    intro:
      "Most cosmetic procedures offered through Tampa Bay Body Sculpting may be eligible for financing. Here's what patients typically ask about when reviewing payment plans.",
    items: [
      {
        title: "Cherry — Featured Partner",
        body: "Cherry offers fast applications, flexible monthly payments, and quick approvals for many qualified patients. Apply securely online through our Cherry portal.",
      },
      {
        title: "Monthly Payment Plans",
        body: "Spread the cost of your procedure over time with predictable monthly payments. Available terms depend on your approval and selected financing program.",
      },
      {
        title: "Down Payment + Financing",
        body: "Many patients make a partial down payment and finance the remaining balance. During consultation, we'll review combinations that fit your customized treatment plan.",
      },
      {
        title: "Body Contouring Procedures",
        body: "Lipo 360, tummy tuck, BBL, mommy makeover, thigh and arm liposuction, and feminine waist contouring commonly qualify for financing.",
      },
      {
        title: "Breast & Men's Procedures",
        body: "Breast augmentation, lift, reduction, revision, and men's Lipo 360, tummy tuck, and chest reduction may also be eligible. Confirm during your consultation.",
      },
      {
        title: "Transparent Pricing First",
        body: "Financing doesn't replace understanding your total cost. We review pricing clearly before you apply—no surprises, no pressure.",
      },
    ],
    closingParagraphs: [
      "Ready to learn more? Schedule a consultation and we'll discuss your treatment plan, review pricing, and help determine which financing option best fits your needs.",
    ],
  },
  candidacy: {
    title: "Who Financing Helps Most",
    intro:
      "Financing is designed for patients who are ready for surgery but prefer spreading cost over time—not for those who aren't yet prepared for the commitment of elective surgery.",
    idealTitle: "Often a good fit",
    ideal: [
      "Stable income and good credit seeking flexible payment terms",
      "Patients who'd rather schedule now than wait years to save",
      "Those who've completed consultation and understand total cost",
      "Anyone comparing monthly payment options across programs",
    ],
    considerationsTitle: "Keep in mind",
    considerations: [
      "Approval depends on credit review and partner terms",
      "Interest rates and terms vary by program and applicant",
      "Financing covers surgical cost—not a substitute for medical clearance",
      "Budget realistically for monthly payments alongside recovery time off work",
    ],
    closing:
      "A complimentary consultation is the best place to review pricing, explore financing, and decide whether monthly payments make sense for your timeline.",
  },
  recovery: {
    title: "Financial Planning For Recovery",
    intro:
      "Beyond procedure cost, plan for recovery-related expenses—time off work, compression garments, medications, and travel if you're coming from out of town.",
    steps: [
      {
        step: "01",
        title: "Budget Procedure + Recovery Time",
        body: "Factor in days or weeks away from work depending on your procedure. Financing covers surgical fees; plan separately for lost income or PTO if needed.",
      },
      {
        step: "02",
        title: "Account For Travel & Stay",
        body: "Out-of-town patients should budget for flights, accommodations, and extended stay near Tampa Bay. See our Travel Information guide for planning tips.",
      },
      {
        step: "03",
        title: "Recovery Supplies",
        body: "Compression garments, pillows, and post-op supplies may add to upfront costs. Your pre-operative instructions list what's recommended.",
      },
      {
        step: "04",
        title: "Review Full Picture At Consult",
        body: "Our team helps you understand total investment—surgical financing plus practical recovery expenses—so you can plan with confidence.",
      },
    ],
    essentials: [
      {
        title: "Know Your Total Cost",
        body: "Understand the full surgical quote before applying for financing. Transparent pricing is reviewed during your complimentary consultation.",
      },
      {
        title: "Compare Payment Terms",
        body: "Monthly payment amount, term length, and interest vary by program. Ask questions until the numbers make sense for your budget.",
      },
      {
        title: "Plan Recovery Income",
        body: "If your job requires physical activity, confirm downtime with your provider and plan finances for the recovery window.",
      },
      {
        title: "Avoid Rushing",
        body: "Financing makes surgery accessible—but it doesn't replace thoughtful planning. Take time to understand your plan before committing.",
      },
    ],
  },
  results: {
    title: "Why Patients Choose To Finance",
    intro:
      "Flexible financing removes a common barrier—helping patients move forward with confidence when they're ready for results, not when they've saved every dollar upfront.",
    items: [
      {
        title: "Schedule Sooner",
        body: "Many patients choose financing to proceed with surgery on their timeline rather than delaying months or years while saving the full amount.",
      },
      {
        title: "Predictable Budgeting",
        body: "Fixed monthly payments make it easier to plan alongside rent, car payments, and other obligations—especially with approved terms upfront.",
      },
      {
        title: "Invest In Long-Term Confidence",
        body: "Body contouring and breast surgery results can last years with stable habits. Financing spreads a one-time investment into manageable payments.",
      },
      {
        title: "Combine Procedures Efficiently",
        body: "Financing a mommy makeover or combination plan may cost less overall than staging procedures separately over time.",
      },
      {
        title: "Quick, Convenient Application",
        body: "Online applications take minutes. Many patients complete the process during or right after their consultation.",
      },
      {
        title: "Support From Our Team",
        body: "We're happy to answer financing questions and guide you through the application—so you never navigate payment options alone.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Lipo 360",
      href: "/liposuction-360",
      body: "Comprehensive midsection sculpting—one of the most commonly financed body contouring procedures in Tampa Bay.",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      body: "Combined tummy tuck, breast surgery, and liposuction plans often financed as a single treatment investment.",
    },
    {
      title: "Tummy Tuck",
      href: "/tummy-tuck",
      body: "Abdominoplasty for a flatter, firmer midsection—eligible for flexible monthly payment plans.",
    },
    {
      title: "Breast Procedures",
      href: "/breasts",
      body: "Augmentation, lift, reduction, and revision options with financing reviewed during consultation.",
    },
    {
      title: "Brazilian Butt Lift (BBL)",
      href: "/brazilian-butt-lift-bbl",
      body: "Enhance curves with your own fat—explore financing for combined liposuction and fat transfer.",
    },
    {
      title: "Men's Procedures",
      href: "/men",
      body: "Male Lipo 360, tummy tuck, and chest reduction may qualify for the same flexible payment options.",
    },
    {
      title: "FAQs",
      href: "/faqs",
      body: "More answers about consultations, recovery, travel, and general cosmetic surgery questions.",
    },
    {
      title: "Resources Hub",
      href: "/resources",
      body: "Central directory for financing, recovery guides, travel planning, and patient education.",
    },
  ],
  faqs: [
    {
      q: "Do you offer financing for cosmetic surgery?",
      a: "Yes. We offer financing through Cherry. Qualified patients may be eligible for flexible monthly payment plans based on credit approval.",
      links: [{ text: "Apply with Cherry", href: CHERRY_APPLY_URL }],
    },
    {
      q: "Can I make monthly payments?",
      a: "Yes. Many patients choose monthly payment plans to spread the cost of their cosmetic procedure over time. Available payment options depend on your financing approval and selected program.",
    },
    {
      q: "Which cosmetic procedures can be financed?",
      a: "Most cosmetic procedures offered through Tampa Bay Body Sculpting may be eligible for financing, including Lipo 360, tummy tuck, mommy makeover, breast procedures, body contouring, and male cosmetic surgery.",
    },
    {
      q: "How do I apply for financing?",
      a: "Applying is quick and easy. We partner with Cherry to provide flexible payment options. Complete a secure online application—many applicants receive a decision within minutes. Our team is happy to help you choose the best option.",
      links: [{ text: "Apply with Cherry", href: CHERRY_APPLY_URL }],
    },
    {
      q: "Can I finance part of my procedure?",
      a: "Yes. Many patients make a down payment and finance the remaining balance. During your consultation, we'll review payment options for your customized treatment plan.",
    },
    {
      q: "Does applying for financing affect my credit score?",
      a: "Many financing partners offer pre-qualification with a soft credit check that doesn't impact your score. Full application may involve a hard inquiry depending on the program—terms are explained before you commit.",
    },
    {
      q: "How much does cosmetic surgery cost in Tampa?",
      a: "Cost varies by procedure, surgeon, facility, and whether combinations are included. Transparent pricing is reviewed during your complimentary consultation—not quoted generically online.",
    },
    {
      q: "Can I finance a mommy makeover?",
      a: "Yes. Combined procedures like mommy makeovers are commonly financed as a single treatment plan. Your consultation outlines total cost and available payment options.",
      links: [{ text: "Mommy Makeover", href: "/mommy-makeover" }],
    },
    {
      q: "What is Cherry financing?",
      a: "Cherry is our financing partner for cosmetic surgery, offering flexible monthly payment plans with a fast online application. Many qualified patients receive a decision within minutes.",
      links: [{ text: "Apply with Cherry", href: CHERRY_APPLY_URL }],
    },
    {
      q: "What if I'm not approved for financing?",
      a: "If your Cherry application isn't approved, our team can discuss alternatives—such as adjusting your treatment plan, making a larger down payment, or planning surgery for a later date when you're ready.",
    },
    {
      q: "When do monthly payments start?",
      a: "Payment start dates and terms depend on your approved financing agreement. Your partner provides full disclosure before you sign.",
    },
    {
      q: "Can out-of-town patients use financing?",
      a: "Yes. Financing is available regardless of where you live. Many traveling patients finance their procedure and plan travel costs separately.",
      links: [{ text: "Travel Information", href: "/travel-information" }],
    },
    {
      q: "Do I need a consultation before applying?",
      a: "We recommend completing your consultation first so you know exactly what you're financing. Our team can then guide you through the application with accurate pricing.",
    },
    {
      q: "Are there hidden fees?",
      a: "Your surgical quote and financing agreement should be reviewed transparently. Ask our team to walk through every line item during consultation.",
    },
  ],
  faqTitle: "Financing FAQs",
  faqIntro:
    "Common questions about cosmetic surgery payment plans, Cherry financing, and monthly payments in Tampa Bay. Contact us if you need personalized guidance.",
  finalCtaTitle: "Ready To Explore Financing For Your Procedure?",
  schemaProcedureName: "Cosmetic Surgery Financing",
  schemaAlternateNames: ["Cosmetic Surgery Payment Plans Tampa", "Cherry Financing Tampa Bay"],
  schemaDescription:
    "Flexible cosmetic surgery financing and monthly payment plans through Cherry at Tampa Bay Body Sculpting in Tampa, Florida.",
});
