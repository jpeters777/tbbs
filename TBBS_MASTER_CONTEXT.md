# Tampa Bay Body Sculpting — Master AI / Cursor / Grok Handoff
**Last consolidated:** August 26, 2026

## 1. Purpose of this file
This is the working knowledge base for any AI agent helping with Tampa Bay Body Sculpting (TBBS), especially agents working in Cursor on the website codebase.

Treat this document as business context, brand rules, website requirements, migration history, SEO context, operations context, and a list of current priorities.

When older information conflicts with newer instructions, **the newer instruction wins**.

---

# 1b. Locked decisions — August 26, 2026

These override older sections of this file where they disagree.

- **Canonical URL:** `https://www.tampabaybodysculpting.com` (www). Do not switch to the non-www (apex) version. Non-www should continue to redirect to www.
- **Lead funnel:** Short **`/contact`** form first. Long **`/consult`** virtual intake is the next step after TBBS is already in touch. Do not send ads, Stories, or header CTAs to `/consult`.
- **Nav:** Labiaplasty and adult circumcision **stay** in primary navigation. They are offered services, not leftover archive pages.
- **Financing on the website:** **Cherry only.** Do not add CareCredit or United Medical Credit unless Jeneé asks.
- **Photos / doctors:** No old-provider before-and-after photos. No individual doctor names on the public site unless Jeneé approves.
- **Git:** Stay on `main`. Commit and push only when Jeneé asks. Run `npm test` after code changes.

---

# 2. Business identity

## Business name
**Tampa Bay Body Sculpting (TBBS)**

## Business model
TBBS is a **cosmetic-surgery concierge / surgical-coordination business**, not the treating physician or surgical facility.

TBBS helps patients with:
- Understanding cosmetic surgery options
- Matching/selecting an appropriate provider from the TBBS network
- Coordinating consultations
- Reviewing the recommended surgical plan after the provider consultation
- Preparing and sending quotes
- Scheduling surgery
- Handling payments
- Explaining financing options
- Coordinating the patient's next steps
- Serving as the main non-medical point of contact through the process and recovery coordination

The **surgeon/provider is responsible for medical care, medical advice, candidacy, surgical recommendations, risks, and the procedure itself.**

## Positioning
TBBS should feel:
- High-end
- Personal
- Concierge-level
- Trustworthy
- Easy to navigate
- Helpful rather than sales-heavy
- Local to Tampa Bay while capable of helping patients beyond Tampa

Preferred public-facing phrase:
**Serving Tampa Bay & Beyond**

---

# 3. Critical wording and compliance rules

## Current preferred language
Use:
- “our providers”
- “our provider network”
- “our network”
- “your surgeon”
- “your provider”
- “personalized guidance”
- “concierge support”
- “complimentary virtual consultation”
- “trusted provider network”

Avoid unnecessarily saying:
- “connect you with providers”

The business should sound more involved than simply being a referral directory.

## Doctor names
**CURRENT RULE: Do not put individual doctor names on the public website unless Jeneé specifically changes this direction.**

Some old DoctorLogic pages, archived files, or prior content may reference individual doctors. Treat those references as **historical source material only**.

Do not automatically republish old surgeon names.

## Before/after photos
A later compliance/branding decision was to **remove provider before-and-after images from the website**, particularly images belonging to individual doctors, rather than using them without a clear compliant framework.

Do not re-add old provider before/after photos automatically.

## Medical claims
Do not make TBBS sound like the medical provider.

Avoid implying:
- TBBS diagnoses patients
- TBBS determines surgical candidacy
- TBBS performs surgery
- TBBS gives medical advice
- TBBS guarantees results

Medical questions should be attributed to the surgeon/provider.

---

# 4. Core procedures and service categories

TBBS has developed or discussed content for the following procedures.

## Body
- Lipo 360
- Liposuction
- Body contouring
- Brazilian Butt Lift (BBL)
- Lipo 360 + BBL
- Tummy tuck
- Mommy makeover
- Arm liposuction / arm contouring
- Thigh liposuction / thigh contouring
- Chin and neck liposuction

## Breast
- Breast augmentation
- Breast lift
- Breast reduction
- Breast revision
- Breast implant removal / explant
- Breast rejuvenation
- Fat transfer to breast

## Male
- Male Lipo 360
- Male body sculpting
- Male abdominal etching / six-pack etching
- Gynecomastia surgery
- Male tummy tuck

## Face
- Chin / neck liposuction
- Facelift
- Mini facelift

## Also in current primary navigation (approved Aug 26, 2026)
- Labiaplasty
- Adult circumcision

PAL / power-assisted liposuction appeared in older source material. Do not add it to nav unless intentionally approved.

## Safety/content topic
BBL content should reference modern safety concepts such as **ultrasound-guided fat placement** where appropriate, without overpromising safety.

---

# 5. Website page architecture developed

The website has included or planned these pages:

## Main
- Home
- About
- Photos
- Videos
- Reviews
- Leave a Review
- Contact Us
- Procedure List

## Body category
- Body
- Lipo 360
- Arm Lipo
- Thigh Lipo
- Body Contouring
- BBL
- Tummy Tuck
- Mommy Makeover

## Breast category
- Breasts
- Breast Rejuvenation
- Breast Augmentation
- Breast Lift
- Breast Reduction
- Breast Revision
- Breast Explant / Implant Removal

## Face category
- Face
- Chin / Neck Lipo
- Face Lift

## Male category
- Male
- Male Body Sculpting
- Male Lipo 360
- Gynecomastia
- Male Tummy Tuck
- Male Six-Pack / Abdominal Etching

## Resources
- Resources
- Financing Options
- Travel / Out-of-Town Patient Guide
- Recovery Guide: Lipo 360
- Recovery Guide: Lipo 360 + BBL
- Recovery Guide: Male Lipo 360
- Recovery Guide: Chin Lipo
- Liposuction vs. Tummy Tuck
- BBL Safety

The exact routing may evolve in code, but preserve SEO value when changing URLs.

---

# 6. Homepage messaging already developed

Homepage benefit/badge concepts:

- **Personalized Guidance**
- **Trusted Provider Network**
- **Complimentary Virtual Consultations**
- **Flexible Financing**
- **Concierge Support**
- **Serving Tampa Bay & Beyond**

Core procedures prioritized for SEO/homepage metadata have included:
- Lipo 360
- Tummy tuck
- Breast procedures
- Arm lipo
- Thigh lipo
- Male body sculpting

The site should quickly answer:
1. What TBBS does
2. What procedures are available
3. Why the patient should trust the process
4. How to start a consultation
5. Financing/payment availability
6. Tampa Bay geographic relevance

---

# 7. Consultation / patient workflow

## Previous workflow
Jeneé was physically going to consultations with the provider and patient.

Problems:
- Patients occasionally did not show
- Jeneé wasted travel time
- During consultation, the doctor would discuss medical issues and then direct pricing/scheduling questions to Jeneé

## Updated desired workflow
Jeneé should **not need to attend every in-office consultation**.

### Office / Michelle role
- Coordinate/confirm the consultation
- Let the provider handle medical questions and surgical recommendations
- Do **not** quote pricing
- Do **not** schedule surgery directly with the patient
- After the consultation, send Jeneé the patient's recommended surgical plan

### Provider role
Discuss:
- Medical candidacy
- Procedure recommendations
- Surgical plan
- Risks
- Expected results
- Medical questions

### Jeneé / TBBS role after provider consult
- Receive recommended surgical plan
- Prepare/send patient quote
- Discuss cost
- Discuss financing
- Coordinate scheduling
- Manage payment process
- Guide patient through next steps

The website and patient messaging should reinforce this division of responsibilities.

---

# 8. Intake forms

Known TBBS Jotform forms:

## Short contact form (primary public lead)
Jotform ID:
**261329129717057**
Used on `/contact`. This is the first-step form for ads, Stories, header, and heroes.

## Virtual Consultation (full intake — next step)
Jotform ID:
**212097230845050**
Used on `/consult`. Surgical/medical intake after TBBS is already in touch. Do not use as the cold-traffic destination.

## Patient Health Questionnaire
Jotform ID:
**242857327063157**
Known business form. Not currently embedded on the public Next.js site.

These IDs are business-sensitive implementation details. Do not expose IDs in public-facing copy unless technically required.

---

# 9. Pricing, deposits, payment schedule, quote rules

Known working rules as of May 2026:

- **$500 non-refundable deposit**
- **50% due 4 weeks before surgery**
- **Full balance due 2 weeks before surgery**
- Quotes valid for **14 days**
- Surgery should occur within **6 months**
- TBBS handles patient payments

If website pricing-policy copy is changed, confirm that these rules are still desired before altering the legal/financial terms.

## Quote inclusion language
Quotes have been designed to include items such as:
- Surgeon
- Operating room / facility-related surgical cost
- Anesthesia
- Certain day-of-surgery items
- Pre/post-op coordination/support

Common exclusions discussed:
- Labs / EKG
- Garments
- Massages
- Prescriptions / medications

Do not state inclusions/exclusions more specifically than the active quote template supports.

---

# 10. Financing

**Website (locked Aug 26, 2026): Cherry only.**

Other options discussed historically (not on the public site unless Jeneé asks):
- CareCredit
- United Medical Credit

TBBS should present financing as an option without making approval guarantees.

Historical example:
A $13,800 total was once discussed with a $1,000/week Square payment arrangement. This was an individual example, **not a universal website pricing policy**.

---

# 11. CRM / lead status concepts

Lead/status labels used or discussed:
- ASAP
- RTB
- Researching / Exploring
- Active this month

These can inform future CRM integrations or admin dashboards.

---

# 12. Geographic strategy

Primary market:
**Tampa Bay, Florida**

Brand wording:
**Serving Tampa Bay & Beyond**

The user has sometimes been physically in Boca Raton, but TBBS marketing should not accidentally become Boca-focused simply because Jeneé is there.

For TBBS Instagram/location strategy, Tampa is generally the business geography unless a specific post is intentionally targeting another market.

Potential Tampa-area procedure/provider expansion interests have included:
- Lipo 360
- BBL
- Tummy tuck
- Mommy makeover
- Gynecomastia

---

# 13. Brand voice

Desired brand tone:
- Luxe/high-end
- Warm
- Reassuring
- Professional
- Personal
- Simple
- Not overly clinical
- Not overly salesy
- Not “cheap surgery” language

Copy should generally be:
- Easy to scan
- Human
- Direct
- Patient-focused
- SEO-aware without obvious keyword stuffing

Avoid making every paragraph sound generic or AI-generated.

Avoid excessive repetition of:
- “Tampa Bay Body Sculpting”
- Procedure keyword + “Tampa” unnaturally in every heading
- “connect with a provider”

---

# 14. Old website / DoctorLogic history

## Legacy vendor
**DoctorLogic**

Legacy website:
**tampabaybodysculpting.com**

DoctorLogic relationship became problematic.

Issues documented included:
- Incorrect surgeon attribution
- Outdated/non-working phone numbers
- Broken videos
- Inaccurate travel/provider content
- Poor organization
- Corrections not being handled properly
- Photo gallery removal / loss
- Traffic and SEO concerns

The contract was reportedly through **November 2026**, but Jeneé wanted to terminate early.

## DoctorLogic contract context
A retrieved agreement indicated:
- Effective date around September 19, 2023
- Services included website management, SEO, reputation management, and PPC-related services
- Approx. $1,695 monthly plus setup-related costs

This is historical/legal-business context, not public website copy.

---

# 15. Website migration and preservation work

Because the DoctorLogic site had accumulated SEO value, the migration strategy emphasized preserving:
- Legacy URLs
- Page content
- Blogs
- Before/after gallery URL structure
- Media
- Existing search rankings
- Backlinks
- Google-indexed URLs

## SiteSucker archive
The old website was downloaded/archive-saved using **SiteSucker**.

SiteSucker can preserve front-end:
- HTML/pages
- Images
- PDFs/media
- URLs/content

It does **not** reproduce a WordPress/DoctorLogic backend.

## Legacy gallery
The old site reportedly had roughly **150 case/gallery pages**.

Those URLs were important because removing them without redirects could create:
- 404 errors
- Ranking losses
- backlink losses
- index decay

A mapping spreadsheet was created to map old URLs to new destinations.

Known file:
**TBBS_Redirect_Map.xlsx**

The redirect map includes many old `/services/...`, financing, resources, blog, and before/after/gallery URLs.

Many were marked:
- “Create 301”
- “Not Started”

**High priority:** preserve or complete legacy redirects.

---

# 16. Domain history

There have been two TBBS domains:

## Primary/current preferred domain
**tampabaybodysculpting.com**

## Secondary/alternate domain
**bodysculptingtampabay.com**

The website initially existed on `bodysculptingtampabay.com` during the transition, but the strategy later moved back to:

**tampabaybodysculpting.com as the primary domain**

**Locked (Aug 26, 2026):** canonical is **www**.

Recommended domain behavior:
- `https://www.tampabaybodysculpting.com` = canonical primary (in code, sitemap, GSC, ads, Stories)
- `https://tampabaybodysculpting.com` (no www) → 301/308 to the matching www URL
- `bodysculptingtampabay.com` → 301 to equivalent www URL when possible
- Avoid redirecting every old URL blindly to homepage when a relevant equivalent exists

Maintain one canonical version throughout:
- metadata
- sitemap
- canonical tags
- OpenGraph URLs
- structured data
- internal links

---

# 17. DNS / GoDaddy / Cloudflare history

Historical issue:
The domain had previously been using Cloudflare nameservers similar to:
- lily
- sam

Jeneé did not have clear Cloudflare account access.

The domain was later moved to **GoDaddy default nameservers** and connected to GoDaddy Website + Marketing during the transitional site period.

Important:
TBBS email is tied to the domain, so DNS changes must not break email.

Known email:
**info@tampabaybodysculpting.com**

Email has been hosted through GoDaddy Professional Email / Outlook.

When changing DNS:
- Preserve MX records
- Preserve SPF/DKIM/DMARC as applicable
- Verify email before/after deployment

---

# 18. Search Console / sitemap / analytics history

## Google Search Console
The new/current domain setup was verified in Google Search Console.

A sitemap was submitted.

Legacy URL 404 issues appeared, and **Validate Fix** was used after redirects/changes.

Future agent tasks:
- Monitor indexed pages
- Monitor Page indexing errors
- Look for legacy 404s
- Confirm canonical URLs
- Confirm sitemap remains valid
- Watch rankings/clicks/impressions after deployment

## Google Analytics 4
GA4 was connected.

Known Measurement ID from prior work:
**G-NS30EE4NKY**

At one point Realtime showed activity, confirming data collection.

A stray/incorrect GA property was removed earlier.

Before changing analytics code:
- Check whether the existing GA4 integration already uses this ID
- Avoid installing GA twice
- Confirm SPA/navigation tracking works correctly in Next.js

---

# 19. Current codebase / development stack

By August 2026, TBBS was being rebuilt as a coded site rather than relying only on GoDaddy Website + Marketing.

Known setup:
- **GitHub repo:** `jpeters777/tbbs.git`
- **Editor:** Cursor
- **Framework:** Next.js 16
- **React:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- Content/data has used JSON structures in parts of the project
- Goal: local preview → deployment
- Must maintain legacy redirects

Grok has been assisting inside Cursor.

Any AI agent should first inspect the live repository rather than assuming the architecture from this summary.

---

# 20. Technical SEO requirements for the coded site

## Must-have
- Correct canonical domain
- 301 legacy redirects
- No redirect chains
- No mass unnecessary 404s
- XML sitemap
- robots.txt
- Unique metadata by page
- OpenGraph metadata
- Useful internal linking
- Mobile performance
- Fast load speed
- Image optimization
- Semantic headings
- FAQ structured data only when the FAQ is visible on page
- Organization/local-business schema where factually appropriate
- Breadcrumb schema where useful

## Redirect philosophy
For every high-value old URL:
1. If the same page exists → redirect to exact new page
2. If page has been consolidated → redirect to closest relevant category/procedure page
3. If content is worth retaining → recreate it
4. Do not redirect unrelated URLs to homepage just to avoid a 404

## SEO copy philosophy
Prioritize useful patient content first.

Avoid:
- Thin doorway pages
- Duplicate city pages with swapped city names
- Overuse of keywords
- Fake review/schema markup
- Unsupported surgeon credentials
- Unsupported medical claims

---

# 21. Lead-generation slowdown

Around August 2026, Jeneé reported that TBBS had become **very slow**, with hardly any leads coming in.

Possible contributing factors discussed:
- Website migration
- SEO loss from DoctorLogic removal/migration
- Legacy gallery/pages disappearing
- 404s
- Domain transition
- Google reindexing lag
- Lower organic visibility
- Conversion issues on the new site
- Broader cosmetic-surgery/economic softness
- Form/chat routing problems

Do **not** assume “the economy” is the sole cause.

Website improvement should focus on both:

## Traffic recovery
- Search Console
- indexed URLs
- rankings
- backlinks
- 301s
- local SEO
- content recovery
- technical SEO

## Conversion recovery
- Strong CTA above fold
- Consultation flow
- trust elements
- financing explanation
- clear procedures
- mobile experience
- fewer friction points
- form functionality
- phone/contact functionality
- social proof/reviews
- performance

---

# 22. Chatbot / GoDaddy Unified Conversations issues

The GoDaddy Website + Marketing chatbot/inbox created ongoing problems.

Symptoms:
- Conversations sometimes did not appear in Unified Conversations
- Some chat alerts arrived only by email
- Older conversations could auto-resolve
- Jeneé wanted manual control of chats

Current preference:
**AI chatbot should be OFF.**

Desired behavior:
- Human/manual replies
- Simple welcome/greeting
- Clear link to consultation
- Leads should be visible in the business inbox when possible

Do not re-enable an AI chatbot without approval.

---

# 23. Jotform notification issue

Jotform submissions were historically being delivered by email.

A later issue occurred where:
- Notifications unexpectedly went to both business and personal emails
- Then submissions stopped appearing in GoDaddy Unified Conversations
- The messages still appeared correctly in Outlook
- Messages landed in the Inbox, not spam
- GoDaddy Unified Conversations was the routing problem, not necessarily Jotform delivery itself

If the coded website embeds Jotform or replaces Jotform:
- Protect existing lead delivery
- Test notification recipients
- Test mobile
- Test confirmation emails
- Test spam behavior
- Test attribution/tracking
- Never silently replace a functioning form without verifying submissions end-to-end

---

# 24. Reviews / reputation

TBBS has handled:
- A negative review/dispute involving a non-refundable deposit, including BBB-related concerns
- Positive review replies

Website review content should:
- Be real
- Not fabricate patient outcomes
- Avoid revealing protected/private patient details
- Maintain a polished, HIPAA-conscious tone

---

# 25. Marketing / ads / social content topics

Ad/content concepts requested include:
- Tummy tuck
- Breast procedures
- Lipo + BBL
- Arm liposuction
- Male abdominal etching

Social/website content should visually and verbally feel premium rather than discount-driven.

Avoid overusing exact procedure pricing in top-level marketing unless intentionally part of a campaign.

---

# 26. Patient communication principles

TBBS communication should make the process feel simple.

Typical process:
1. Patient submits virtual consultation
2. TBBS reviews goals/information
3. Consultation with provider
4. Provider determines medical/surgical plan
5. TBBS receives recommended plan
6. TBBS sends quote
7. TBBS handles financial/scheduling discussion
8. Deposit/payment secures next steps
9. TBBS coordinates process and non-medical support

The website should support this flow instead of confusing the patient about whom to contact.

---

# 27. Current strategic priorities for the website

## Priority 1 — Protect/recover SEO
- Finish old→new redirects
- Audit all legacy 404s
- Compare old indexed URLs against current routes
- Recover valuable content lost during DoctorLogic transition
- Verify sitemap
- Verify canonicals
- Inspect GSC coverage/indexing
- Preserve domain authority

## Priority 2 — Improve lead conversion
- Make consultation CTA extremely obvious
- Make procedure pages conversion-oriented
- Make phone/contact options easy on mobile
- Reduce unnecessary page friction
- Reinforce concierge value
- Improve trust
- Show financing availability
- Explain process clearly

## Priority 3 — Clean brand consistency
- Remove stray doctor names unless approved
- Remove unsupported before/after assets
- Use “our providers / our network”
- Keep Tampa Bay geographic focus
- Maintain high-end brand voice
- Avoid generic/cheap/call-center language

## Priority 4 — Confirm analytics
- GA4
- Search Console
- form conversions
- phone/click tracking where feasible
- identify traffic vs conversion problem

## Priority 5 — Technical quality
- Core Web Vitals
- responsive design
- Next.js best practices
- clean routing
- no broken internal links
- no hydration errors
- no duplicate metadata
- optimized images
- accessible forms/navigation

---

# 28. Instructions to any AI agent working in Cursor

Before making code changes:

1. **Inspect the repository first.**
2. Determine the current:
   - route structure
   - components
   - metadata strategy
   - redirects
   - sitemap generation
   - analytics integration
   - forms
   - JSON/content schema
3. Do not rewrite the entire site unless necessary.
4. Preserve working functionality.
5. Prefer incremental changes that can be tested.
6. Do not remove routes without considering SEO.
7. Do not rename URLs casually.
8. Do not add doctor names from old archived material.
9. Do not reintroduce old provider before/after images automatically.
10. Do not change financial terms unless requested.
11. Do not make medical claims on behalf of TBBS.
12. Keep the canonical domain as `https://www.tampabaybodysculpting.com`.
13. Treat `bodysculptingtampabay.com` as a redirect/secondary domain.
14. Preserve email DNS if deployment/DNS changes are proposed.
15. Test every lead form end-to-end.
16. Keep the site visually premium and uncluttered.
17. When uncertain whether an archived fact is current, label it as historical and do not publish it.

---

# 29. Suggested initial Cursor/Grok audit

Ask the coding agent to produce a report with:

## A. Repository architecture
- Current pages/routes
- Components
- content/data files
- public assets
- server/client component patterns

## B. SEO
- metadata implementation
- canonical tags
- sitemap
- robots
- redirects
- 404 behavior
- structured data
- old URL coverage

## C. Conversion
- CTA locations
- consultation form flow
- mobile sticky CTA opportunity
- phone/email links
- financing messaging
- trust/review content

## D. Technical
- build errors/warnings
- broken links
- accessibility
- performance
- image optimization
- bundle size
- hydration
- TypeScript issues

## E. Analytics
- GA4 status
- duplicate script check
- conversion events
- form success events
- outbound/contact click events

## F. Migration recovery
- compare `TBBS_Redirect_Map.xlsx` to code redirects
- identify high-value old URLs still unresolved
- identify content that should be recreated

Do not make mass changes until this audit is complete.

---

# 30. Copy/paste system prompt for another AI agent

You are helping build and improve the Tampa Bay Body Sculpting website.

TBBS is a cosmetic-surgery concierge and coordination business, not the treating medical provider. The surgeon/provider is responsible for medical advice, candidacy, risks, and procedures. TBBS handles patient guidance, provider-network coordination, quotes, financing, payment, scheduling, and non-medical support.

The website must feel high-end, personal, reassuring, and simple. Use language such as “our providers,” “our provider network,” “personalized guidance,” “complimentary virtual consultations,” “flexible financing,” and “concierge support.” Do not position TBBS as merely a referral directory. Avoid doctor names on the public website unless explicitly approved. Do not automatically reuse old provider before-and-after photos. Do not make medical claims for TBBS.

Primary domain: https://www.tampabaybodysculpting.com.
Secondary legacy/alternate domain: bodysculptingtampabay.com, which should redirect to the primary domain.
Known stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, GitHub repo jpeters777/tbbs.git, developed in Cursor.

This project migrated away from DoctorLogic and may have lost SEO value because of disappearing gallery pages, old URLs, 404s, redirects, and reindexing. Roughly 150 old gallery/case pages existed. There is an old-to-new redirect spreadsheet called TBBS_Redirect_Map.xlsx. SEO preservation is a top priority. Never delete or rename routes casually. Compare existing redirects with the migration map and preserve the closest relevant destination for old indexed URLs.

Known analytics: GA4 Measurement ID G-NS30EE4NKY. Google Search Console was verified and a sitemap submitted. Check for duplicate analytics installation before changing anything.

Main service areas include Lipo 360, BBL, tummy tuck, mommy makeover, arm lipo, thigh lipo, chin/neck lipo, breast augmentation/lift/reduction/revision/explant, male body sculpting, male Lipo 360, abdominal etching, gynecomastia, and facelift. Additional guides/resources have included Lipo vs Tummy Tuck, BBL Safety, recovery guides, financing, and an out-of-town patient guide.

The patient workflow is: patient submits consultation → provider consult → provider determines medical/surgical plan → office sends recommended plan to TBBS → TBBS sends quote → TBBS discusses pricing/financing → TBBS coordinates scheduling/payment/next steps. Office staff and providers should not take over TBBS pricing and scheduling responsibilities.

Known payment framework: $500 non-refundable deposit, 50% due 4 weeks before surgery, full balance 2 weeks before surgery, quote valid 14 days, surgery within 6 months. Financing options have included Cherry, CareCredit, and United Medical Credit. Do not modify or publish new financial terms without confirmation.

TBBS has experienced a substantial lead slowdown. Treat this as both an SEO/traffic problem and a conversion problem. Priorities are: finish legacy redirects, eliminate important 404s, recover useful content, verify indexing/canonicals/sitemap, improve page speed and mobile UX, make the consultation CTA prominent, improve trust and financing messaging, and track conversions correctly.

Do not enable an AI chatbot without approval. Jeneé prefers human/manual chat replies. Jotform lead delivery must be tested end-to-end before replacing or changing forms.

Before editing code, inspect the repository and report the current routing, metadata, redirect implementation, sitemap/robots, analytics, forms, content architecture, performance issues, and migration gaps. Prefer incremental changes and explain SEO impact before changing URLs.

---

# 31. Historical facts that should NOT automatically become website content

The following may appear in old files/context but should be treated cautiously:
- Individual surgeon names
- Old DoctorLogic physician associations
- Old provider before/after images
- Old phone numbers
- Old videos
- Old travel/provider descriptions
- Old procedure pages whose current business relevance has not been confirmed
- Historical examples of individual patient payment plans

Use archived material for SEO recovery/research, not blind republication.

---

# 32. What Grok/Cursor should ask Jeneé only when necessary

Avoid asking questions that can be answered by inspecting the repo.

Ask Jeneé only for true business decisions such as:
- Whether a new procedure should be offered
- Whether doctor names should become public again
- Whether before/after photos should return
- Whether payment terms changed
- Whether a page should be removed despite SEO value
- Major visual redesign direction
- New legal/compliance wording
- New provider-specific claims

For technical facts, inspect the code first.

---

# 33. North-star goal

The TBBS site should:
1. Recover and protect search visibility lost during the DoctorLogic migration.
2. Generate qualified cosmetic-surgery consultation leads.
3. Make TBBS’s concierge role immediately understandable.
4. Feel premium and trustworthy.
5. Make it extremely easy for patients to start a virtual consultation.
6. Preserve SEO history while modernizing the site.
7. Keep medical responsibility clearly with the surgeon/provider.
8. Give Jeneé control of pricing, scheduling, payment, and patient coordination.

