import type { PageContent } from "@/lib/content";
import pageJson from "@/content/pages/adult-circumcision.json";
import { createCuratedPage } from "@/lib/premium-curated/build-content";
import { curatedSeoFromPage, curatedVisualsFromPage } from "@/lib/premium-curated/page-json";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { getPageEyebrow, getPageHeroTitle } from "@/lib/premium-page-utils";

const page = pageJson as PageContent;
const heroTitle = `${getPageHeroTitle(page)} In Tampa Bay`;

export const adultCircumcisionContent: CuratedPageContent = createCuratedPage({
  slug: "adult-circumcision",
  category: "men",
  seo: {
    ...curatedSeoFromPage(page),
    title: "Adult Circumcision Tampa | Men's Procedure | Tampa Bay Body Sculpting",
    description:
      "Expert adult circumcision in Tampa for medical, hygiene, or personal reasons. Schedule your confidential complimentary consultation today.",
  },
  visuals: curatedVisualsFromPage(page),
  intro: {
    eyebrow: getPageEyebrow(page.slug),
    heroTitle,
    title: "Adult Circumcision For Medical, Hygiene & Personal Reasons",
    lead: "Adult circumcision is a surgical procedure that removes the foreskin from the penis—performed for medical, hygiene, cosmetic, religious, or personal reasons under local or general anesthesia.",
    paragraphs: [
      "Men choose adult circumcision for many reasons: recurrent infections, phimosis (tight foreskin), hygiene preferences, discomfort during activity, or personal aesthetic goals. The procedure is typically completed within about an hour.",
      "Unlike infant circumcision, adult procedures require a defined recovery period with activity restrictions and wound care. Your provider discusses anesthesia options, technique, and expected healing timeline during consultation.",
      "Adult circumcision is one of several men's procedures offered through Tampa Bay Body Sculpting's provider network—alongside body contouring, gynecomastia surgery, and abdominal sculpting.",
      "We connect you with experienced providers across Florida and guide you from confidential virtual consultation through recovery with clear, honest expectations.",
    ],
  },
  glance: {
    col1Title: "Addresses",
    col1Items: [
      "Phimosis (tight or non-retractable foreskin)",
      "Recurrent infections or irritation",
      "Hygiene & personal preference",
      "Medical or cosmetic concerns",
    ],
    candidates: [
      "Healthy adult men seeking circumcision",
      "Medical indication or personal choice",
      "Realistic expectations about recovery",
      "Non-smoker in good overall health",
    ],
    benefits: [
      "Improved genital hygiene",
      "Resolution of foreskin-related discomfort",
      "Personal or aesthetic preference achieved",
      "Typically outpatient with defined recovery",
    ],
    procedureSnapshot: [
      "Usually completed within about one hour",
      "Local or general anesthesia options",
      "Outpatient procedure",
      "Full healing over several weeks",
    ],
  },
  howItWorks: {
    title: "How Adult Circumcision Works",
    intro:
      "Adult circumcision is a straightforward surgical procedure with established techniques. Understanding each phase helps you prepare for surgery and recovery.",
    steps: [
      {
        step: "01",
        title: "Confidential Consultation & Evaluation",
        body: "Your provider reviews medical history, reasons for circumcision, and anatomy. Together you discuss surgical technique, anesthesia preference, risks, benefits, and recovery expectations in a confidential setting.",
      },
      {
        step: "02",
        title: "Anesthesia & Preoperative Preparation",
        body: "The procedure may be performed under local anesthesia with sedation or general anesthesia depending on your preference and the provider's recommendation. Preoperative instructions cover fasting and medication guidelines.",
      },
      {
        step: "03",
        title: "Foreskin Removal & Surgical Technique",
        body: "The surgeon removes the foreskin using a precise surgical technique—sleeve, forceps-guided, or other established methods. Hemostasis and careful tissue handling support optimal healing and appearance.",
      },
      {
        step: "04",
        title: "Wound Closure & Dressing",
        body: "Incisions are closed with absorbable sutures. A sterile dressing is applied. Your provider reviews immediate post-operative care before you return home the same day.",
      },
      {
        step: "05",
        title: "Early Recovery & Activity Limits",
        body: "Expect mild swelling and discomfort for several days. Activity restrictions—including sexual activity and strenuous exercise—protect healing during the initial recovery phase.",
      },
      {
        step: "06",
        title: "Full Healing & Final Result",
        body: "Complete healing typically occurs over several weeks. Follow-up visits monitor progress. Final appearance and comfort continue improving as tissues fully mature.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Procedure details",
    title: "Medical, Hygiene & Personal Reasons For Adult Circumcision",
    intro:
      "Men considering adult circumcision in Tampa often have specific medical or personal motivations. These are the most common reasons and what the procedure addresses.",
    items: [
      {
        title: "Phimosis & Paraphimosis",
        body: "Phimosis is a tight foreskin that cannot fully retract over the glans. Paraphimosis is when a retracted foreskin becomes trapped. Circumcision permanently resolves foreskin restriction when conservative treatments are insufficient.",
      },
      {
        title: "Recurrent Infections (Balanitis)",
        body: "Repeated inflammation or infection of the foreskin or glans (balanitis or balanoposthitis) may indicate circumcision when hygiene measures and medical treatment do not prevent recurrence.",
      },
      {
        title: "Hygiene & Personal Preference",
        body: "Some men choose circumcision for easier genital hygiene or personal aesthetic preference. The decision is individual—discussed confidentially during consultation without judgment.",
      },
      {
        title: "Discomfort During Activity",
        body: "Foreskin tightness, friction, or irritation during exercise, intimacy, or daily activity may improve after circumcision when foreskin anatomy is the underlying cause.",
      },
      {
        title: "Local Vs. General Anesthesia",
        body: "Many adult circumcisions are performed under local anesthesia with sedation as an outpatient procedure. General anesthesia may be preferred for patient comfort or combined surgical plans.",
      },
      {
        title: "Recovery & Activity Restrictions",
        body: "Adult circumcision requires a defined recovery with wound care, swelling management, and temporary restrictions on sexual activity and strenuous exercise—typically for several weeks.",
      },
    ],
    closingParagraphs: [
      "Adult circumcision is a personal medical decision best made with accurate information and experienced guidance.",
      "A confidential complimentary consultation covers your reasons, candidacy, technique, and recovery expectations.",
    ],
  },
  candidacy: {
    title: "Who Is A Candidate For Adult Circumcision?",
    intro:
      "Healthy adult men seeking circumcision for medical, hygiene, cosmetic, or personal reasons may be candidates. A consultation determines the best treatment plan.",
    idealTitle: "Often A Good Fit",
    ideal: [
      "Medical indication such as phimosis or recurrent infections",
      "Personal or hygiene-related preference for circumcision",
      "Good overall health and non-smoker",
      "Realistic expectations about recovery and results",
      "Willing to follow post-operative care instructions",
    ],
    considerationsTitle: "Requires Careful Evaluation",
    considerations: [
      "Active infection—may need treatment before surgery",
      "Bleeding disorders or anticoagulant medications—medical clearance needed",
      "Unrealistic cosmetic expectations—discussed during consultation",
      "Unable to follow activity restrictions during recovery",
    ],
    closing:
      "We provide confidential, honest guidance—including when medical treatment without surgery may be appropriate first.",
  },
  recovery: {
    title: "What To Expect After Adult Circumcision",
    intro:
      "Adult circumcision recovery requires wound care and activity restrictions. Following your provider's protocol supports proper healing and optimal results.",
    steps: [
      {
        step: "01",
        title: "First 24–48 Hours",
        body: "Rest and take prescribed pain medication as directed. Mild swelling and discomfort are normal. Keep the dressing clean and dry per instructions.",
      },
      {
        step: "02",
        title: "First Week",
        body: "Swelling peaks then begins improving. Avoid strenuous activity, heavy lifting, and sexual activity. Wound care and hygiene instructions must be followed carefully.",
      },
      {
        step: "03",
        title: "Weeks 2–4",
        body: "Most daily activities can resume. Sexual activity and strenuous exercise remain restricted until cleared—commonly 4–6 weeks. Continue monitoring for proper healing.",
      },
      {
        step: "04",
        title: "Weeks 4–6 And Beyond",
        body: "Full healing typically completes over several weeks. Follow-up visits confirm recovery progress. Final appearance continues settling over time.",
      },
    ],
    essentials: [
      {
        title: "Wound Care & Hygiene",
        body: "Follow your provider's cleaning instructions precisely. Proper hygiene prevents infection and supports optimal healing during recovery.",
      },
      {
        title: "Activity Restrictions",
        body: "Avoid sexual activity, strenuous exercise, and activities that put pressure on the surgical site until cleared—typically 4–6 weeks.",
      },
      {
        title: "Swelling Management",
        body: "Swelling is normal and peaks within the first few days. Elevation and prescribed care help manage discomfort.",
      },
      {
        title: "Pain Management",
        body: "Take prescribed medications as directed. Most patients describe manageable discomfort rather than severe pain during recovery.",
      },
      {
        title: "Signs To Report",
        body: "Contact your provider for increasing pain, fever, unusual drainage, bleeding, or signs of infection.",
      },
      {
        title: "Follow-Up Appointments",
        body: "Attend all scheduled visits so your provider can monitor healing and address concerns promptly.",
      },
    ],
    tips: [
      "Follow wound care instructions exactly as prescribed",
      "Wear loose, comfortable clothing during early recovery",
      "Avoid sexual activity until cleared by your provider",
      "Do not smoke—smoking impairs healing",
      "Take prescribed medications on schedule",
      "Attend all follow-up appointments",
    ],
  },
  results: {
    title: "Adult Circumcision Results & Outcomes",
    intro:
      "Adult circumcision provides permanent foreskin removal. Outcomes include resolved medical symptoms, improved hygiene, and achievement of personal aesthetic goals.",
    items: [
      {
        title: "Permanent Foreskin Removal",
        body: "Circumcision permanently removes the foreskin. The procedure is not reversible—decision-making during consultation is important.",
      },
      {
        title: "Medical Symptom Resolution",
        body: "Men with phimosis, recurrent infections, or foreskin-related discomfort often experience significant improvement after healing completes.",
      },
      {
        title: "Hygiene Benefits",
        body: "Many men find genital hygiene simpler after circumcision. This is a commonly cited personal benefit.",
      },
      {
        title: "Healing Timeline",
        body: "Initial healing occurs over 1–2 weeks. Complete tissue maturation takes several weeks. Patience during recovery is essential.",
      },
      {
        title: "Appearance Expectations",
        body: "Final cosmetic appearance settles over weeks. Your provider discusses realistic expectations during confidential consultation.",
      },
      {
        title: "Long-Term Satisfaction",
        body: "Men who carefully considered their decision and followed recovery protocols typically report satisfaction with medical and personal outcomes.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Men's Procedures Hub",
      href: "/men",
      body: "Browse all men's procedures including body contouring and gynecomastia surgery.",
    },
    {
      title: "Male Lipo 360",
      href: "/male-liposuction-360",
      body: "Circumferential midsection liposuction for masculine body sculpting.",
    },
    {
      title: "Male Chest Reduction",
      href: "/male-chest-reduction",
      body: "Gynecomastia surgery for a flatter, more masculine chest.",
    },
    {
      title: "Male Abdominal Sculpting",
      href: "/male-abdominal-sculpting",
      body: "Six-pack abdominal etching for athletic midsection definition.",
    },
    {
      title: "Male Tummy Tuck",
      href: "/male-tummy-tuck",
      body: "Abdominoplasty for loose abdominal skin after weight loss.",
    },
    {
      title: "Male Chin Liposuction",
      href: "/male-chin-liposuction",
      body: "Jawline contouring for a stronger facial profile.",
    },
    {
      title: "Financing Options",
      href: "/financing-options",
      body: "Flexible payment plans for men's procedures.",
    },
    {
      title: "Recovery Guides",
      href: "/recovery-guides",
      body: "General post-operative recovery resources.",
    },
  ],
  faqs: [
    {
      q: "What Is Adult Circumcision?",
      a: "Adult circumcision is surgery to remove the foreskin from the penis. It may be performed for medical, hygiene, cosmetic, religious, or personal reasons under local or general anesthesia.",
    },
    {
      q: "Why Do Men Choose Adult Circumcision?",
      a: "Common reasons include phimosis, recurrent infections, hygiene preferences, discomfort during activity, and personal aesthetic choice. Each patient's motivation is discussed confidentially during consultation.",
    },
    {
      q: "Who Is A Candidate For Adult Circumcision?",
      a: "Healthy adult men seeking circumcision for medical or personal reasons may be candidates. A consultation evaluates your anatomy, health history, and goals.",
    },
    {
      q: "Is Adult Circumcision Painful?",
      a: "The procedure is performed under anesthesia so you do not feel pain during surgery. Mild discomfort during recovery is manageable with prescribed medication.",
    },
    {
      q: "What Is Recovery Like After Adult Circumcision?",
      a: "Most patients experience mild swelling and discomfort for several days. Light activities resume within a few days; sexual activity and strenuous exercise wait until clearance—commonly 4–6 weeks.",
      links: [{ text: "recovery guides", href: "/recovery-guides" }],
    },
    {
      q: "How Long Does Adult Circumcision Take?",
      a: "The procedure is typically completed within about one hour as an outpatient surgery.",
    },
    {
      q: "What Anesthesia Is Used For Adult Circumcision?",
      a: "Local anesthesia with sedation or general anesthesia may be used depending on patient preference and the provider's recommendation.",
    },
    {
      q: "What Is Phimosis?",
      a: "Phimosis is a condition where the foreskin cannot fully retract over the glans. When conservative treatments fail, circumcision may be recommended.",
    },
    {
      q: "Can Adult Circumcision Treat Recurrent Infections?",
      a: "Yes—when recurrent balanitis or foreskin-related infections persist despite medical treatment and hygiene measures, circumcision may be recommended.",
    },
    {
      q: "When Can I Return To Work After Circumcision?",
      a: "Many men return to desk work within a few days. Jobs requiring physical exertion may require more time off. Your provider gives specific guidance.",
    },
    {
      q: "When Can I Resume Sexual Activity?",
      a: "Sexual activity is typically restricted for 4–6 weeks or until your provider confirms adequate healing.",
    },
    {
      q: "Is Adult Circumcision Reversible?",
      a: "No—circumcision permanently removes the foreskin. Decision-making during consultation should include careful consideration of this permanence.",
    },
    {
      q: "How Much Does Adult Circumcision Cost In Tampa?",
      a: "Cost varies by provider, anesthesia type, and facility. Pricing is reviewed during your confidential consultation.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "Is Adult Circumcision Confidential?",
      a: "Yes. Consultations and procedures are handled with full patient confidentiality through our provider network.",
    },
    {
      q: "What Are The Risks Of Adult Circumcision?",
      a: "As with any surgery, risks include bleeding, infection, scarring, and healing complications. Your provider discusses risks and how to minimize them during consultation.",
    },
    {
      q: "How Do I Schedule An Adult Circumcision Consultation?",
      a: "Schedule a confidential complimentary virtual consultation online or call 813-557-6400. We will connect you with experienced providers in Florida.",
    },
  ],
  faqTitle: "Adult Circumcision FAQs",
  faqIntro: "Common questions about adult circumcision in Tampa Bay—candidacy, recovery, and what to expect.",
  finalCtaTitle: "Ready To Learn More About Adult Circumcision In Tampa Bay?",
  schemaProcedureName: "Adult Circumcision",
  schemaAlternateNames: ["Circumcision for Adults", "Adult Male Circumcision"],
  schemaDescription:
    "Adult circumcision removes the foreskin for medical, hygiene, or personal reasons in Tampa Bay with experienced providers.",
});
