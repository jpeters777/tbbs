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
    title: "Adult Circumcision Tampa | Confidential Men's Procedure | Tampa Bay Body Sculpting",
    description:
      "Confidential adult circumcision in Tampa Bay for medical, hygiene, or personal reasons. Call 813-557-6400 or request a complimentary consult—discreet concierge support from start to recovery.",
  },
  visuals: curatedVisualsFromPage(page),
  introEyebrowQuestion: "What is adult circumcision?",
  heroSecondaryCta: "Adult circumcision at a glance",
  jumpLinks: [
    { href: "#how-it-works", label: "How it works" },
    { href: "#procedure-focus", label: "Privacy & reasons" },
    { href: "#compare", label: "Adult vs infant" },
    { href: "#candidacy", label: "Candidacy" },
    { href: "#recovery", label: "Recovery" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQs" },
  ],
  intro: {
    eyebrow: getPageEyebrow(page.slug),
    heroTitle,
    title: "Confidential Adult Circumcision For Medical, Hygiene & Personal Reasons",
    lead: "Adult circumcision is surgical removal of the foreskin—performed for medical need, hygiene preference, or personal choice—with local anesthesia and a defined recovery. At Tampa Bay Body Sculpting, you get discreet concierge support from first contact through healing.",
    paragraphs: [
      "Men choose adult circumcision for many reasons: phimosis (tight foreskin), recurrent irritation or infection, hygiene preference, discomfort during activity, or personal aesthetic goals. The procedure is typically completed in about an hour as outpatient surgery.",
      "Unlike infant circumcision, adult procedures require intentional recovery—wound care, activity limits, and temporary restrictions on sexual activity. Your surgeon discusses technique, anesthesia, risks, and healing timeline in a private consultation.",
      "Adult circumcision is offered through our trusted provider network alongside other men's procedures. We coordinate your plan, quote, scheduling, and next steps while your surgeon handles medical care and surgical decisions.",
      "Prefer to talk? Call 813-557-6400. Prefer to write? Use our short contact form. Both are confidential, and both are a normal first step—no pressure and no obligation.",
    ],
  },
  glance: {
    col1Title: "Addresses",
    col1Items: [
      "Phimosis (tight or non-retractable foreskin)",
      "Recurrent infections or irritation",
      "Hygiene & personal preference",
      "Discomfort during activity or intimacy",
    ],
    candidates: [
      "Healthy adult men seeking circumcision",
      "Medical indication or personal choice",
      "Realistic expectations about recovery",
      "Able to follow post-op activity limits",
    ],
    benefits: [
      "Improved genital hygiene for many men",
      "Relief from foreskin-related discomfort when anatomy is the cause",
      "Personal or aesthetic preference addressed",
      "Typically outpatient with a clear recovery plan",
    ],
    procedureSnapshot: [
      "Usually completed within about one hour",
      "Local anesthesia",
      "Outpatient procedure",
      "Full healing over several weeks",
    ],
  },
  howItWorks: {
    eyebrow: "Your path with TBBS",
    title: "How Adult Circumcision Works With Our Concierge Support",
    intro:
      "Most men want two things before they move forward: privacy, and a clear picture of what happens next. Here is the typical path from first contact to recovery—without guessing.",
    steps: [
      {
        step: "01",
        title: "Call Or Short Form — Confidential First Step",
        body: "Reach us at 813-557-6400 or through our short contact form. Tell us you are inquiring about adult circumcision. We keep the conversation discreet. There is no long medical form required just to start talking.",
      },
      {
        step: "02",
        title: "Complimentary Virtual Consult & Guidance",
        body: "We review your goals, timing, and questions, then guide you through next steps with our provider network. Your surgeon later evaluates candidacy and surgical details—TBBS coordinates the process and keeps communication clear.",
      },
      {
        step: "03",
        title: "Provider Evaluation & Surgical Plan",
        body: "Your provider reviews medical history, anatomy, and reasons for circumcision in a confidential setting. Together you discuss technique, local anesthesia, risks, benefits, and recovery expectations. Medical decisions belong to your surgeon.",
      },
      {
        step: "04",
        title: "Quote, Financing & Scheduling",
        body: "After the recommended plan is clear, we prepare your quote and walk through payment options—including Cherry financing when appropriate. You schedule when you are ready. No surprise pressure on the first call.",
      },
      {
        step: "05",
        title: "Surgery Day — Anesthesia & Technique",
        body: "Adult circumcision is an outpatient procedure. Under local anesthesia, your surgeon removes the foreskin using an established technique suited to your anatomy, then closes with absorbable sutures and a sterile dressing.",
      },
      {
        step: "06",
        title: "Recovery Support & Follow-Up",
        body: "You go home the same day with wound-care instructions. Early swelling and mild discomfort are common. We help you stay on track with follow-ups while your provider monitors healing and clears activity—including sexual activity—when it is safe.",
      },
    ],
  },
  focusSection: {
    eyebrow: "Privacy, reasons & decisions",
    title: "Discretion, Medical Reasons & When Surgery Can Wait",
    intro:
      "Adult circumcision is personal. Men researching this in Tampa Bay often care as much about confidentiality as about technique. These are the topics patients ask about most—answered plainly.",
    items: [
      {
        title: "Privacy & Discretion",
        body: "Consultations, scheduling, and correspondence are handled confidentially. We do not discuss your inquiry with anyone else. Many men prefer to call rather than leave a detailed written trail—and that is completely fine.",
      },
      {
        title: "What Happens When You Call Or Write",
        body: "A real person on our team responds. We confirm you are asking about adult circumcision, answer process and timing questions we can address, and explain complimentary consult next steps. You will not be pressured to book surgery on the first conversation.",
      },
      {
        title: "Phimosis & Paraphimosis",
        body: "Phimosis is a tight foreskin that cannot fully retract over the glans. Paraphimosis is when a retracted foreskin becomes trapped. Circumcision can permanently resolve foreskin restriction when conservative care is not enough—your surgeon decides medical necessity.",
      },
      {
        title: "Recurrent Infections (Balanitis)",
        body: "Repeated inflammation or infection of the foreskin or glans may point toward circumcision when hygiene measures and medical treatment do not stop recurrence. Active infection is often treated first before elective surgery.",
      },
      {
        title: "Hygiene & Personal Preference",
        body: "Some men choose circumcision for easier hygiene or personal preference. That decision is individual. We discuss it without judgment in a confidential consult.",
      },
      {
        title: "When Surgery May Wait",
        body: "Not every foreskin concern needs immediate surgery. Mild irritation, treatable infection, or issues better addressed with medical care first may mean waiting. Honest guidance includes when not to rush—and when a surgical plan makes sense.",
      },
      {
        title: "Local Anesthesia",
        body: "Adult circumcision is typically performed under local anesthesia as outpatient surgery. Your provider explains what to expect for comfort during the procedure.",
      },
      {
        title: "Cost Framing (No Guesswork Online)",
        body: "Pricing depends on provider, anesthesia, and facility. We review your quote after consultation—not a one-size number on a webpage. Flexible financing through Cherry may be available once your plan is set.",
      },
    ],
    closingParagraphs: [
      "Adult circumcision is a personal medical decision. Accurate information, privacy, and an experienced surgical plan matter more than rushing.",
      "Call 813-557-6400 or use our short contact form to start a confidential complimentary consult—whichever feels easier.",
    ],
    sectionId: "procedure-focus",
  },
  comparison: {
    title: "Adult Circumcision Vs. Infant Circumcision",
    intro:
      "Same procedure name—different recovery, anesthesia, and decision-making. Understanding the difference helps adult patients set realistic expectations.",
    columns: [
      {
        title: "Adult Circumcision",
        body: "Performed on grown men for medical, hygiene, or personal reasons. Local anesthesia and recovery are discussed in advance. Healing requires intentional wound care and activity limits—often several weeks before sexual activity resumes. The decision is yours, with surgical guidance from your provider.",
      },
      {
        title: "Infant Circumcision",
        body: "Performed in newborns with a different clinical setting and recovery pattern. Adults cannot use infant timelines as a guide. If you were not circumcised as an infant—or need revision for a medical issue—adult planning and adult recovery rules apply.",
      },
    ],
  },
  candidacy: {
    title: "Who Is A Candidate For Adult Circumcision?",
    intro:
      "Healthy adult men seeking circumcision for medical, hygiene, cosmetic, or personal reasons may be candidates. Your surgeon confirms candidacy after evaluation—TBBS helps you prepare and coordinate the process.",
    idealTitle: "Often A Good Fit",
    ideal: [
      "Medical indication such as phimosis or recurrent foreskin-related infections",
      "Personal or hygiene-related preference for circumcision",
      "Good overall health; non-smoker preferred for healing",
      "Realistic expectations about recovery and permanence",
      "Willing to follow post-operative care and activity limits",
    ],
    considerationsTitle: "Requires Careful Evaluation",
    considerations: [
      "Active infection—often needs treatment before elective surgery",
      "Bleeding disorders or anticoagulant medications—medical clearance required",
      "Expectations that surgery solves unrelated sexual or relationship issues",
      "Unable to follow activity restrictions during recovery",
    ],
    closing:
      "We give confidential, honest guidance—including when non-surgical care should come first. Your provider makes the final medical recommendation.",
  },
  combinations: {
    title: "Related Men's Procedures",
    intro:
      "Adult circumcision is usually planned as a standalone procedure. If you are also exploring body contouring or chest surgery, browse related men's options below—or ask us during your consult what can be staged safely.",
  },
  recovery: {
    title: "What To Expect After Adult Circumcision",
    intro:
      "Adult circumcision recovery is manageable for most men when instructions are followed. Swelling, mild discomfort, and temporary activity limits are normal. Your provider's protocol comes first.",
    essentialsTitle: "Essential Recovery Guidelines",
    essentialsIntro: "These are the topics patients ask about most. Follow your surgeon's written instructions if they differ.",
    steps: [
      {
        step: "01",
        title: "First 24–48 Hours",
        body: "Rest and take prescribed pain medication as directed. Mild swelling and discomfort are normal. Keep the dressing clean and dry. Short walks are usually fine; avoid straining.",
      },
      {
        step: "02",
        title: "First Week",
        body: "Swelling often peaks, then improves. Avoid strenuous activity, heavy lifting, and sexual activity. Follow wound-care and hygiene instructions carefully. Many men return to desk work within a few days if comfortable.",
      },
      {
        step: "03",
        title: "Weeks 2–4",
        body: "Daily activities usually feel more normal. Sexual activity and vigorous exercise typically remain restricted until cleared—commonly around 4–6 weeks. Continue monitoring healing and attend follow-ups.",
      },
      {
        step: "04",
        title: "Weeks 4–6 And Beyond",
        body: "Tissue continues to settle. Your provider clears return to intimacy and full exercise when healing is adequate. Final comfort and appearance keep improving as swelling fully resolves.",
      },
    ],
    essentials: [
      {
        title: "Wound Care & Hygiene",
        body: "Follow cleaning instructions exactly. Proper hygiene reduces infection risk and supports clean healing.",
      },
      {
        title: "Activity Restrictions",
        body: "Avoid sexual activity, strenuous exercise, and pressure on the surgical site until cleared—often 4–6 weeks.",
      },
      {
        title: "Swelling Management",
        body: "Swelling is expected early on. Supportive underwear, rest, and prescribed care help manage discomfort.",
      },
      {
        title: "Pain Management",
        body: "Most men describe manageable discomfort rather than severe pain. Take medications as directed; do not wait until pain peaks.",
      },
      {
        title: "Signs To Report",
        body: "Contact your provider for increasing pain, fever, unusual drainage, heavy bleeding, or signs of infection.",
      },
      {
        title: "Follow-Up Appointments",
        body: "Keep scheduled visits so healing can be checked and questions answered promptly.",
      },
    ],
    tips: [
      "Follow wound-care instructions exactly as prescribed",
      "Wear loose, supportive clothing during early recovery",
      "Avoid sexual activity until your provider clears you",
      "Do not smoke—smoking impairs healing",
      "Take prescribed medications on schedule",
      "Attend all follow-up appointments",
    ],
  },
  results: {
    title: "Adult Circumcision Results & Outcomes",
    intro:
      "Adult circumcision permanently removes the foreskin. Outcomes may include resolved medical symptoms, simpler hygiene, and achievement of personal goals—once healing is complete.",
    items: [
      {
        title: "Permanent Foreskin Removal",
        body: "Circumcision is not reversible. Consultation should include careful consideration of permanence before you schedule.",
      },
      {
        title: "Medical Symptom Resolution",
        body: "Men with phimosis, recurrent infections, or foreskin-related discomfort often see meaningful improvement after healing—when foreskin anatomy was the underlying issue.",
      },
      {
        title: "Hygiene Benefits",
        body: "Many men find genital hygiene simpler after circumcision. Results vary by individual anatomy and habits.",
      },
      {
        title: "Healing Timeline",
        body: "Early healing occurs over the first 1–2 weeks. Fuller tissue maturation takes several weeks. Patience protects your result.",
      },
      {
        title: "Appearance Expectations",
        body: "Final appearance settles as swelling resolves. Your surgeon discusses realistic cosmetic expectations privately before surgery.",
      },
      {
        title: "Long-Term Satisfaction",
        body: "Men who understood recovery, followed instructions, and chose the procedure for clear reasons typically report satisfaction with medical and personal outcomes.",
      },
    ],
  },
  relatedProcedures: [
    {
      title: "Men's Procedures Hub",
      href: "/men",
      body: "Browse men's body contouring, chest, and facial procedures in one place.",
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
      body: "Abdominal etching for athletic midsection definition.",
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
      body: "Cherry financing and payment guidance after your quote.",
    },
    {
      title: "Get In Touch",
      href: "/contact",
      body: "Short confidential form—or call 813-557-6400—to start.",
    },
  ],
  relatedIntro: "Exploring other men's procedures or ready to inquire? Start here.",
  faqs: [
    {
      q: "What Is Adult Circumcision?",
      a: "Adult circumcision is surgery to remove the foreskin from the penis. It may be performed for medical, hygiene, cosmetic, religious, or personal reasons under local anesthesia.",
    },
    {
      q: "Why Do Men Choose Adult Circumcision?",
      a: "Common reasons include phimosis, recurrent infections, hygiene preferences, discomfort during activity, and personal choice. Motivations are discussed confidentially—no judgment.",
    },
    {
      q: "How Is Adult Circumcision Different From Infant Circumcision?",
      a: "Adults need planned anesthesia, intentional wound care, and weeks of activity limits—especially for sexual activity. Infant timelines do not apply. Your surgeon sets adult-specific expectations.",
    },
    {
      q: "Who Is A Candidate For Adult Circumcision?",
      a: "Healthy adult men seeking circumcision for medical or personal reasons may be candidates. Your provider evaluates anatomy, health history, and goals before recommending surgery.",
    },
    {
      q: "Will Anyone Know I Inquired Or Had Surgery?",
      a: "We handle inquiries and scheduling confidentially. We do not share your information. How you tell others—if at all—is your choice.",
    },
    {
      q: "Do I Need A Referral?",
      a: "A referral is not required to contact Tampa Bay Body Sculpting. Your surgical provider may request medical records or clearance depending on your health history.",
    },
    {
      q: "What Happens When I Call Or Submit The Contact Form?",
      a: "Our team responds discreetly, confirms you are asking about adult circumcision, answers process questions, and explains complimentary consult next steps. Call 813-557-6400 or use the short contact form—both work.",
      links: [{ text: "contact form", href: "/contact" }],
    },
    {
      q: "How Soon Can I Be Seen?",
      a: "Timing depends on consult availability and your provider's schedule. Tell us your preferred timeline when you reach out and we will work to match it.",
    },
    {
      q: "Is Adult Circumcision Painful?",
      a: "Surgery is performed under anesthesia so you do not feel pain during the procedure. Mild discomfort during recovery is common and usually manageable with prescribed medication.",
    },
    {
      q: "What Anesthesia Is Used?",
      a: "Adult circumcision is typically performed under local anesthesia. Your provider explains comfort and what to expect before surgery day.",
    },
    {
      q: "How Long Does The Procedure Take?",
      a: "Adult circumcision is typically completed within about one hour as outpatient surgery.",
    },
    {
      q: "What Is Phimosis?",
      a: "Phimosis is when the foreskin cannot fully retract over the glans. When conservative treatments are not enough, circumcision may be recommended by your surgeon.",
    },
    {
      q: "Can Circumcision Help Recurrent Infections?",
      a: "When recurrent balanitis or foreskin-related infections continue despite medical treatment and hygiene measures, circumcision may be recommended. Active infection is often treated before elective surgery.",
    },
    {
      q: "What Is Recovery Like?",
      a: "Expect mild swelling and discomfort for several days. Light activity often resumes quickly; sexual activity and strenuous exercise usually wait until clearance—commonly 4–6 weeks.",
      links: [{ text: "recovery guides", href: "/recovery-guides" }],
    },
    {
      q: "When Can I Return To Work?",
      a: "Many men return to desk work within a few days if comfortable. Physically demanding jobs may need more time off. Your provider gives specific guidance.",
    },
    {
      q: "When Can I Resume Sexual Activity?",
      a: "Sexual activity is typically restricted for about 4–6 weeks, or until your provider confirms adequate healing. Returning too early increases complication risk.",
    },
    {
      q: "Is Adult Circumcision Reversible?",
      a: "No. Circumcision permanently removes the foreskin. Take time with the decision during consultation.",
    },
    {
      q: "How Much Does Adult Circumcision Cost In Tampa?",
      a: "Cost varies by provider, anesthesia, and facility. We review pricing during your confidential consult after a plan is clear—not as a generic online number. Cherry financing may be available.",
      links: [{ text: "financing options", href: "/financing-options" }],
    },
    {
      q: "Do You Offer Financing?",
      a: "Yes. Flexible financing through Cherry may be available once your quote is set. We explain options when you are ready to talk numbers.",
      links: [{ text: "Cherry financing details", href: "/financing-options" }],
    },
    {
      q: "What Are The Risks?",
      a: "As with any surgery, risks include bleeding, infection, scarring, and healing complications. Your provider discusses risks and how to reduce them before you decide.",
    },
    {
      q: "Will Sensation Change?",
      a: "Sensation can feel different as the glans adapts after foreskin removal. Experiences vary. Ask your surgeon about realistic expectations for sensation and sexual function during consultation.",
    },
    {
      q: "Can This Be Combined With Other Procedures?",
      a: "Adult circumcision is usually standalone. Combining with other surgery depends on safety and scheduling. Ask during consult if you have additional goals.",
      links: [{ text: "men's procedures", href: "/men" }],
    },
    {
      q: "Is The Consultation Really Complimentary?",
      a: "Yes. Your complimentary virtual consultation with Tampa Bay Body Sculpting is the starting point. Provider visit details are explained as you move forward.",
    },
    {
      q: "How Do I Schedule?",
      a: "Call 813-557-6400 or complete our short contact form. Both are confidential. We will guide you through complimentary consult next steps and coordination with our provider network.",
      links: [{ text: "get in touch", href: "/contact" }],
    },
  ],
  faqTitle: "Adult Circumcision FAQs & Q&A",
  faqIntro:
    "Straight answers about adult circumcision in Tampa Bay—privacy, candidacy, recovery, cost framing, and how to start by phone or short form.",
  finalCtaTitle: "Ready For A Confidential Conversation About Adult Circumcision?",
  schemaProcedureName: "Adult Circumcision",
  schemaAlternateNames: ["Circumcision for Adults", "Adult Male Circumcision"],
  schemaDescription:
    "Confidential adult circumcision in Tampa Bay for medical, hygiene, or personal reasons, coordinated through Tampa Bay Body Sculpting's provider network with concierge support.",
});
