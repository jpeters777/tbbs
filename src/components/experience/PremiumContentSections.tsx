import type { ReactNode } from "react";
import { RichText } from "@/components/RichText";
import type { ContentBlock, ContentSection } from "@/lib/content";
import type { KeywordLink } from "@/lib/keyword-links";

function toKeywordLinks(links?: { href: string; text: string }[]): KeywordLink[] {
  if (!links?.length) return [];
  return links.map((l) => ({ text: l.text, href: l.href }));
}

function extractFeatureItems(blocks: ContentBlock[]): { title: string; body: string }[] | null {
  const headings = blocks.filter((b) => b.type === "h3" || b.type === "h4");
  const paragraphs = blocks.filter((b) => b.type === "p");

  if (headings.length < 3 || paragraphs.length < 2) return null;

  const interleaved: { title: string; body: string }[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if ((b.type === "h3" || b.type === "h4") && blocks[i + 1]?.type === "p") {
      const p = blocks[i + 1];
      if (p.type === "p") {
        interleaved.push({ title: b.text, body: p.text });
      }
    }
  }
  if (interleaved.length >= 3) return interleaved;

  if (headings.length >= 3 && paragraphs.length >= 3) {
    const usedP = new Set<number>();
    const paired: { title: string; body: string }[] = [];

    for (const h of headings) {
      const bodyIdx = paragraphs.findIndex((p, idx) => !usedP.has(idx) && p.type === "p");
      if (bodyIdx >= 0) {
        const p = paragraphs[bodyIdx];
        if (p.type === "p") {
          usedP.add(bodyIdx);
          paired.push({ title: h.text, body: p.text });
        }
      }
    }

    if (paired.length >= 3) return paired.slice(0, Math.min(headings.length, paragraphs.length));
  }

  return null;
}

function extractGlanceGroups(blocks: ContentBlock[]): { title: string; items: string[] }[] | null {
  const groups: { title: string; items: string[] }[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type !== "h3" && block.type !== "h4") continue;

    const title = block.text.trim();
    const next = blocks[i + 1];

    if (next?.type === "list") {
      groups.push({ title, items: next.items });
      i += 1;
      continue;
    }

    if (next?.type === "p" && blocks[i + 2]?.type === "list") {
      const list = blocks[i + 2];
      if (list.type === "list") {
        groups.push({ title, items: list.items });
        i += 2;
      }
    }
  }

  return groups.length >= 2 ? groups : null;
}

function normalizeGlanceTitle(title: string): string {
  return title
    .replace(/\s+during\s+lipo\s*360/gi, "")
    .replace(/\s+of\s+lipo\s*360/gi, "")
    .replace(/^lipo\s*360\s+quick\s+facts$/i, "")
    .replace(/^who is a good candidate\??$/i, "Good candidates")
    .replace(/^areas treated.*/i, "Areas treated")
    .replace(/^benefits of.*/i, "Key benefits")
    .trim();
}

function extractProcedureItems(
  blocks: ContentBlock[]
): { title: string; body: string; links?: KeywordLink[] }[] | null {
  const pairs: { title: string; body: string; links?: KeywordLink[] }[] = [];
  const usedP = new Set<number>();

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type !== "h4") continue;

    for (let j = i + 1; j < blocks.length; j++) {
      const next = blocks[j];
      if (next.type === "p" && !usedP.has(j)) {
        usedP.add(j);
        pairs.push({
          title: block.text,
          body: next.text,
          links: toKeywordLinks(next.links),
        });
        break;
      }
    }
  }

  return pairs.length >= 2 ? pairs : null;
}

const SKIP_HEADINGS = new Set([
  "contact us",
  "make a payment",
  "connect with us",
  "subscribe",
  "our blogs",
  "before & after gallery",
  "before and after gallery",
]);

function PremiumBlock({ block }: { block: ContentBlock }) {
  if (block.type === "h3") {
    return <h3 className="premium-inner-h3">{block.text}</h3>;
  }
  if (block.type === "h4") {
    return <h4 className="premium-inner-h4">{block.text}</h4>;
  }
  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag
        className={
          block.ordered
            ? "premium-inner-list premium-inner-list--ordered"
            : "premium-inner-list premium-inner-list--disc"
        }
      >
        {block.items.map((item, idx) => (
          <li key={`${idx}-${item.slice(0, 24)}`}>
            <RichText as="span" text={item} autoLinkKeywords />
          </li>
        ))}
      </ListTag>
    );
  }
  return (
    <RichText
      as="p"
      className="premium-inner-paragraph"
      text={block.text}
      links={toKeywordLinks(block.links)}
      autoLinkKeywords
    />
  );
}

function SectionShell({
  layout,
  idx,
  children,
}: {
  layout: "default" | "page";
  idx: number;
  children: ReactNode;
}) {
  if (layout === "page") {
    const soft = idx % 2 === 1;
    return (
      <section className={`premium-section${soft ? " premium-section--soft" : ""}`}>
        <div className="container">{children}</div>
      </section>
    );
  }
  return <section className="premium-inner-section">{children}</section>;
}

function SectionTitle({
  layout,
  heading,
}: {
  layout: "default" | "page";
  heading: string;
}) {
  if (layout === "page") {
    return <h2 className="premium-section-title">{heading}</h2>;
  }
  return <h2 className="premium-inner-title">{heading}</h2>;
}

export function PremiumContentSections({
  sections,
  layout = "default",
}: {
  sections: ContentSection[];
  layout?: "default" | "page";
}) {
  const filtered = sections.filter((section) => {
    if (!section.heading) return section.blocks.length > 0;
    return !SKIP_HEADINGS.has(section.heading.toLowerCase());
  });

  const body = filtered.map((section, idx) => {
    const heading = section.heading || "";
    const features = extractFeatureItems(section.blocks);
    const procedures = extractProcedureItems(section.blocks);
    const glanceGroups = extractGlanceGroups(section.blocks);

    const isGlanceSection =
      glanceGroups &&
      (heading.toLowerCase().includes("at a glance") ||
        heading.toLowerCase().includes("quick facts") ||
        glanceGroups.length >= 2);

    const isProcedureSection =
      procedures &&
      (heading.toLowerCase().includes("procedure") ||
        heading.toLowerCase().includes("explore") ||
        heading.toLowerCase().includes("services") ||
        procedures.length >= 2);

    const isFeatureSection =
      !isGlanceSection &&
      !isProcedureSection &&
      features &&
      (heading.toLowerCase().includes("why") ||
        heading.toLowerCase().includes("difference") ||
        heading.toLowerCase().includes("choose") ||
        heading.toLowerCase().includes("benefit") ||
        heading.toLowerCase().includes("candidate") ||
        features.length >= 3);

    if (isGlanceSection && glanceGroups) {
      return (
        <SectionShell key={`${heading}-${idx}`} layout={layout} idx={idx}>
          {heading ? <SectionTitle layout={layout} heading={heading} /> : null}
          <div className="premium-glance-grid">
            {glanceGroups.map((group) => {
              const title = normalizeGlanceTitle(group.title);
              if (!title) return null;
              return (
                <article key={title} className="premium-glance-card">
                  <h3 className="premium-glance-title">{title}</h3>
                  <ul className="premium-checklist">
                    {group.items.map((item) => (
                      <li key={item}>
                        <RichText as="span" text={item} autoLinkKeywords />
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </SectionShell>
      );
    }

    if (isProcedureSection && procedures) {
      return (
        <SectionShell key={`${heading}-${idx}`} layout={layout} idx={idx}>
          {heading ? <SectionTitle layout={layout} heading={heading} /> : null}
          <ul className="premium-inner-procedure-grid">
            {procedures.map((item) => (
              <li key={item.title}>
                <article className="premium-inner-procedure-card">
                  <h3 className="premium-inner-procedure-title">{item.title}</h3>
                  <RichText
                    as="p"
                    className="premium-inner-procedure-body"
                    text={item.body}
                    links={item.links}
                    autoLinkKeywords
                  />
                </article>
              </li>
            ))}
          </ul>
        </SectionShell>
      );
    }

    if (isFeatureSection && features) {
      return (
        <SectionShell key={`${heading}-${idx}`} layout={layout} idx={idx}>
          {heading ? <SectionTitle layout={layout} heading={heading} /> : null}
          <ul className="premium-inner-feature-grid">
            {features.map((item) => (
              <li key={item.title}>
                <article className="premium-inner-feature-card">
                  <h3 className="premium-inner-feature-title">{item.title}</h3>
                  <RichText
                    as="p"
                    className="premium-inner-feature-body"
                    text={item.body}
                    autoLinkKeywords
                  />
                </article>
              </li>
            ))}
          </ul>
        </SectionShell>
      );
    }

    return (
      <SectionShell key={`${heading || "section"}-${idx}`} layout={layout} idx={idx}>
        {heading ? <SectionTitle layout={layout} heading={heading} /> : null}
        <div className={layout === "page" ? "premium-prose stack-4 mt-6 max-w-3xl" : "premium-inner-prose"}>
          {section.blocks.map((block, bIdx) => (
            <PremiumBlock key={`${block.type}-${bIdx}`} block={block} />
          ))}
        </div>
      </SectionShell>
    );
  });

  if (layout === "page") {
    return <>{body}</>;
  }

  return <div className="premium-inner-sections">{body}</div>;
}
