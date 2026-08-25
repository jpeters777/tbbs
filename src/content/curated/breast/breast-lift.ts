import { createCuratedPage } from "@/lib/premium-curated/build-content";
import type { CuratedPageContent } from "@/lib/premium-curated/types";

const OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export const breastLiftContent: CuratedPageContent = createCuratedPage({
  slug: "breast-lift",
  category: "breast",
  seo: {
    title: "Breast Lift Tampa | Mastopexy | Tampa Bay Body Sculpting",
    description:
      "Breast lift (mastopexy) in Tampa Bay to raise sagging breasts and restore a firmer, more youthful shape. Complimentary consultation with board-certified surgeons.",
    ogImage: OG_IMAGE,
  },
  visuals: {
    hero: {
      src: "/images/blob-5c35b08.png",
      alt: "Woman considering breast lift mastopexy in Tampa Bay",
    },
  },
  intro: {
    eyebrow: "Breast surgery · Tampa Bay",
    heroTitle: "Breast Lift In Tampa Bay",
    title: "Restore A Firmer, More Youthful Breast Shape With Mastopexy",
    lead: "A breast lift (mastopexy) raises sagging breasts, repositions the nipple-areola complex, and removes excess skin—creating a firmer, more elevated contour without necessarily adding volume.",
    paragraphs: [
      "Breast lift surgery addresses ptosis (sagging) caused by pregnancy, breastfeeding, weight fluctuation, aging, or genetics. When nipples point downward or sit below the breast crease, mastopexy restores a more youthful breast position and shape.",
      "A breast lift alone does not significantly increase size. Patients who want both elevation and fullness often combine mastopexy with breast augmentation in a single surgical plan when appropriate.",
      "At Tampa Bay Body Sculpting, we connect you with board-certified plastic surgeons across Florida and guide you from complimentary virtual consultation through recovery—so you understand lift patterns, scar placement, downtime, and realistic outcomes.",
    ],
  },
  glance: {
    col1Title: "Addresses",
    col1Items: [
      "Sagging or drooping breasts (ptosis)",
      "Nipples below the breast crease",
      "Stretched skin & loss of firmness",
      "Post-pregnancy or post-weight-loss laxity",
    ],
    candidates: [
      "Bothered by breast sagging despite good health",
      "Near stable weight with realistic expectations",
      "Non-smoker willing to follow recovery protocol",
      "Finished breastfeeding when possible",
    ],
    benefits: [
      "Raised nipple position & firmer breast shape",
      "Removed excess skin for smoother contour",
      "More youthful, proportional silhouette",
      "Improved bra and clothing fit",
    ],
    procedureSnapshot: [
      "Typically performed under general anesthesia",
      "Surgery often 2–3 hours (varies by lift degree)",
      "Scars vary by lift pattern chosen",
      "Final shape refines over several months",
    ],
  },
  howItWorks: {
    title: "How A Breast Lift Works",
    intro:
      "Mastopexy is a structured reshaping procedure—not just skin tightening. Understanding lift degree, incision pattern, and nipple repositioning helps you see how a firmer, elevated contour is achieved.",
    steps: [
      {
        step: "01",
        title: "Consultation & Lift Planning",
        body: "Your complimentary virtual consult and in-person evaluation assess ptosis grade, skin quality, breast volume, and goals. Together you decide whether lift alone, augmentation plus lift, or reduction fits your anatomy.",
      },
      {
        step: "02",
        title: "Anesthesia & Incision Design",
        body: "Under anesthesia, the surgeon marks incision patterns based on lift degree—periareolar, lollipop (vertical), or anchor (inverted-T)—balancing scar length with correction needed.",
      },
      {
        step: "03",
        title: "Nipple Repositioning",
        body: "The nipple-areola complex is repositioned higher on the breast mound while preserving blood supply and sensation whenever safely possible. Areola size may be reduced if desired.",
      },
      {
        step: "04",
        title: "Skin Removal & Breast Reshaping",
        body: "Excess skin is removed and remaining tissue is reshaped around the new nipple position. Internal sutures support the lifted contour. Implants may be placed in the same session if combined.",
      },
      {
        step: "05",
        title: "Recovery & Garment Wear",
        body: "Expect soreness, swelling, and limited arm motion early on. A surgical bra supports the lifted shape. Activity restrictions protect incisions during the first several weeks.",
      },
      {
        step: "06",
        title: "Final Lifted Contour",
        body: "Swelling improves over weeks; scars mature over months. Most patients see a dramatically firmer, elevated profile once initial healing progresses. Gravity and aging continue naturally over time.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Lift options",
    title: "Mastopexy Patterns & Combination Plans",
    intro:
      "Patients searching for breast lift surgery in Tampa often ask which incision pattern fits their degree of sagging—and whether implants are needed too. The right plan depends on ptosis grade and volume goals.",
    items: [
      {
        title: "Periareolar Lift",
        body: "A circular incision around the areola suits mild ptosis with minimal excess skin. Scarring is limited but correction is modest—best for patients needing a subtle lift.",
      },
      {
        title: "Vertical (Lollipop) Lift",
        body: "Combines a periareolar incision with a vertical scar down the lower pole. Corrects moderate sagging with less scarring than a full anchor pattern.",
      },
      {
        title: "Anchor (Inverted-T) Lift",
        body: "Adds a horizontal incision along the breast crease for significant ptosis and skin excess. Provides the most dramatic reshaping when breasts are substantially drooping.",
      },
      {
        title: "Lift Plus Augmentation",
        body: "When sagging and volume loss coexist, mastopexy plus implants restores both elevation and fullness. Combined surgery is common in mommy makeovers and post-weight-loss plans.",
      },
      {
        title: "Lift After Pregnancy",
        body: "Postpartum ptosis is one of the most common reasons women seek mastopexy. Timing after breastfeeding and family planning is discussed during consultation.",
      },
      {
        title: "Lift Vs. Reduction",
        body: "Breast reduction removes tissue for smaller, lighter breasts while lifting shape. Mastopexy focuses on elevation without significant size decrease—your goals determine the path.",
      },
    ],
    closingParagraphs: [
      "Searching for mastopexy in Tampa Bay is common when bras no longer support shape or nipples sit below the fold.",
      "A complimentary consultation is the fastest way to learn which lift pattern fits your ptosis and whether augmentation should be included.",
    ],
  },
  comparison: {
    title: "Breast Lift Vs. Breast Augmentation",
    intro:
      "Lift and augmentation solve different problems. Mastopexy raises and reshapes; implants add volume. Many Tampa Bay patients benefit from one, the other, or both.",
    columns: [
      {
        title: "Breast Lift (Mastopexy)",
        body: "Raises nipple position, removes excess skin, and creates a firmer shape. Does not significantly increase breast size. Best when sagging—not small volume—is the main concern.",
      },
      {
        title: "Breast Augmentation (Implants)",
        body: "Adds volume with silicone or saline implants. Improves size and symmetry but does not correct significant ptosis on its own. Often combined with lift for fullness plus elevation.",
      },
    ],
  },
  candidacy: {
    title: "Who Is A Good Candidate For A Breast Lift?",
    intro:
      "Ideal candidates are bothered by sagging breasts, in good health, and understand that mastopexy trades excess skin for scars to achieve elevation. A consultation confirms lift degree and combination options.",
    idealTitle: "Often A Good Fit",
    ideal: [
      "Nipples at or below the breast crease",
      "Excess skin or loss of upper-breast fullness",
      "Stable weight and good overall health",
      "Non-smoker with realistic scar expectations",
      "Finished breastfeeding when possible",
    ],
    considerationsTitle: "May Need A Different Or Combined Approach",
    considerations: [
      "Primary goal is larger size—augmentation or lift plus augmentation may fit better",
      "Very large breasts causing pain—reduction may be appropriate",
      "Active smoking or uncontrolled medical conditions",
      "Planning future pregnancies—may want to delay surgery",
    ],
    closing:
      "We help you understand candidacy honestly—including when augmentation plus lift or reduction makes more sense than mastopexy alone.",
  },
  recovery: {
    title: "What To Expect After A Breast Lift",
    intro:
      "Breast lift recovery involves garment wear, scar care, and activity limits while tissues settle into their new position. Following your surgeon's protocol supports smoother healing.",
    steps: [
      {
        step: "01",
        title: "First 24–48 Hours",
        body: "Rest with help at home. Short walks as directed. Soreness, swelling, and tightness are normal. Wear your surgical bra continuously as instructed.",
      },
      {
        step: "02",
        title: "First 1–2 Weeks",
        body: "Many patients return to desk work within one to two weeks. Avoid lifting arms overhead or heavy objects. Drains are uncommon but follow all wound instructions.",
      },
      {
        step: "03",
        title: "Weeks 2–6",
        body: "Swelling improves gradually. Continue bra support. Strenuous exercise and chest workouts remain off-limits until clearance—often around six weeks.",
      },
      {
        step: "04",
        title: "Weeks 6+ And Beyond",
        body: "Gradual return to full activity when approved. Scars fade over months. Final breast shape continues refining as swelling fully resolves.",
      },
    ],
    essentials: [
      {
        title: "Surgical Bra Support",
        body: "A supportive bra maintains lift and reduces tension on incisions. Wear it for the full duration recommended—often several weeks.",
      },
      {
        title: "Scar Care",
        body: "Incision patterns vary by lift type. Keep scars clean, protected from sun, and follow scar treatment guidance when healing allows.",
      },
      {
        title: "Nipple Sensation",
        body: "Temporary numbness or sensitivity changes are common and often improve over months. Report persistent concerns to your care team.",
      },
      {
        title: "Arm Activity Limits",
        body: "Avoid reaching, pushing, and heavy lifting early on to protect repositioned tissue and incisions.",
      },
      {
        title: "Sleep Position",
        body: "Sleeping elevated or on your back may be recommended to reduce swelling and protect the lifted shape.",
      },
      {
        title: "Follow-Up Visits",
        body: "Attend all appointments so your provider can monitor healing, assess symmetry, and clear you for next steps.",
      },
    ],
    tips: [
      "Walk daily as directed to support circulation",
      "Stay hydrated and eat protein-rich meals",
      "Do not smoke—smoking worsens scarring",
      "Avoid heavy lifting until cleared",
      "Protect scars from sun exposure",
      "Attend follow-ups and report unusual symptoms promptly",
    ],
  },
  results: {
    title: "Breast Lift Results & Longevity",
    intro:
      "Mastopexy creates structural elevation by removing excess skin and reshaping tissue. Results are long-lasting, though natural aging and gravity continue over time.",
    items: [
      {
        title: "When You See Your Lifted Shape",
        body: "Initial elevation is visible early; swelling hides final contour. Most patients see dramatic improvement within weeks, with continued refinement over 3–6 months.",
      },
      {
        title: "Scar Maturation",
        body: "Lift scars fade significantly over 6–12 months but remain visible. Pattern choice balances correction with scar length—discussed during planning.",
      },
      {
        title: "Stable Weight Matters",
        body: "Significant weight gain or loss can affect breast shape after mastopexy. Maintaining stable weight helps preserve results.",
      },
      {
        title: "Future Pregnancy",
        body: "Pregnancy and breastfeeding can re-stretch breast tissue. Many surgeons recommend waiting until family planning is complete when possible.",
      },
      {
        title: "Lift Without Implants",
        body: "Mastopexy alone creates firmer, elevated shape but not larger size. Upper-pole fullness may be modest unless implants are added.",
      },
      {
        title: "Long-Term Maintenance",
        body: "A well-performed lift lasts many years. Minor revision is occasionally considered if aging or life changes alter shape over time.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Breast Augmentation",
      href: "/breast-augmentation",
      body: "Implants add volume—often combined with lift when sagging and size loss coexist.",
    },
    {
      title: "Breast Reduction",
      href: "/breast-reduction",
      body: "Reduces breast size while lifting shape for lighter, proportionate breasts.",
    },
    {
      title: "Breast Rejuvenation",
      href: "/breast-rejuvenation",
      body: "Comprehensive breast restoration combining lift with volume enhancement options.",
    },
    {
      title: "Mommy Makeover",
      href: "/mommy-makeover",
      body: "Breast lift is commonly paired with tummy tuck or liposuction after pregnancy.",
    },
    {
      title: "Breast Procedures Hub",
      href: "/breasts",
      body: "Browse all breast surgery options in Tampa Bay.",
    },
    {
      title: "Breast Revision",
      href: "/breast-revision",
      body: "Correct shape or scar issues from prior breast surgery.",
    },
    {
      title: "Breast Implant Exchange",
      href: "/breast-implant-exchange",
      body: "Replace implants when combined with lift revision.",
    },
    {
      title: "Women's Procedures Hub",
      href: "/women",
      body: "Explore women's body and breast procedures in Tampa Bay.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible payment plans for breast lift surgery.",
    },
  ],
  faqs: [
    {
      q: "What Is A Breast Lift?",
      a: "A breast lift (mastopexy) is surgery to raise sagging breasts by removing excess skin and repositioning the nipple-areola complex. It restores a firmer, more youthful breast shape without necessarily adding volume.",
    },
    {
      q: "What Is The Difference Between A Breast Lift And Breast Augmentation?",
      a: "A breast lift addresses sagging and nipple position. Breast augmentation adds volume with implants. Many patients combine both when they want elevation and fullness.",
      links: [{ text: "Breast Augmentation", href: "/breast-augmentation" }],
    },
    {
      q: "Who Is A Good Candidate For A Breast Lift In Tampa?",
      a: "Healthy adults bothered by breast ptosis—nipples below the crease or stretched skin—are often good candidates. Non-smokers with realistic scar expectations tend to have the best experience.",
    },
    {
      q: "Will A Breast Lift Increase My Breast Size?",
      a: "No—a lift alone does not significantly increase size. It reshapes and elevates existing tissue. Patients wanting larger breasts typically add implants in a combined procedure.",
    },
    {
      q: "What Are Breast Lift Scars Like?",
      a: "Scars depend on lift pattern—periareolar, lollipop, or anchor. All involve visible incisions that fade over months. Your surgeon recommends the pattern that balances correction with scar length.",
    },
    {
      q: "What Is Recovery Like After A Breast Lift?",
      a: "Expect soreness, swelling, and bra wear for several weeks. Many patients return to desk work within 1–2 weeks. Strenuous exercise waits until clearance—commonly around six weeks.",
      links: [{ text: "recovery guides", href: "/recovery-guides" }],
    },
    {
      q: "Can A Breast Lift Be Combined With Implants?",
      a: "Yes. Augmentation plus mastopexy is one of the most common combination procedures—restoring both volume and elevation in one surgical plan when safe.",
      links: [{ text: "Breast Augmentation", href: "/breast-augmentation" }],
    },
    {
      q: "Is A Breast Lift Part Of A Mommy Makeover?",
      a: "Yes—breast lift is frequently included in mommy makeovers alongside tummy tuck or liposuction to restore post-pregnancy proportions.",
      links: [{ text: "Mommy Makeover", href: "/mommy-makeover" }],
    },
    {
      q: "How Long Until I See Final Breast Lift Results?",
      a: "Initial elevation appears as swelling subsides—often within weeks. Final shape and scar maturation continue over 3–6 months or longer.",
    },
    {
      q: "Will I Lose Nipple Sensation After A Breast Lift?",
      a: "Temporary numbness or sensitivity changes are common. Permanent sensation loss is possible but not typical. Techniques aim to preserve nerve supply when safely possible.",
    },
    {
      q: "Can I Breastfeed After A Breast Lift?",
      a: "Many women breastfeed after mastopexy, but outcomes vary by technique and prior surgery. Discuss family planning during consultation.",
    },
    {
      q: "How Does A Breast Lift Compare To Breast Reduction?",
      a: "Reduction removes tissue for smaller, lighter breasts while lifting shape. Mastopexy elevates without significant size decrease. Goals determine the right procedure.",
      links: [{ text: "Breast Reduction", href: "/breast-reduction" }],
    },
    {
      q: "How Much Does A Breast Lift Cost In Tampa?",
      a: "Cost varies by lift pattern, combination with implants, surgeon, and facility. Transparent pricing and financing are reviewed during your complimentary consultation.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "How Long Does Breast Lift Surgery Take?",
      a: "Procedure time depends on lift degree and whether augmentation is combined. Many mastopexy procedures take roughly 2–3 hours. Your plan is reviewed during consultation.",
    },
    {
      q: "How Long Do Breast Lift Results Last?",
      a: "Results are long-lasting when weight stays stable. Natural aging and gravity continue over time; some patients consider revision years later.",
    },
    {
      q: "How Do I Schedule A Breast Lift Consultation In Tampa Bay?",
      a: "Schedule a complimentary virtual consultation online or call 813-557-6400. Our team will assess ptosis, discuss lift options, and connect you with board-certified providers.",
      links: [{ text: "virtual consultation", href: "/contact" }],
    },
  ],
  faqTitle: "Breast Lift FAQs",
  faqIntro: "Common questions about mastopexy, scars, recovery, and candidacy in Tampa Bay.",
  finalCtaTitle: "Ready To Explore A Breast Lift In Tampa Bay?",
  schemaProcedureName: "Breast Lift",
  schemaAlternateNames: ["Mastopexy", "Breast Lift Surgery"],
  schemaDescription:
    "Breast lift (mastopexy) in Tampa Bay to raise sagging breasts and restore a firmer, more youthful shape with board-certified providers.",
});
