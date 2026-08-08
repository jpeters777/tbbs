import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentBlock, ContentSection } from "@/lib/content";

function renderLinkedText(text: string, links?: { href: string; text: string }[]) {
  if (!links?.length) return text;

  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  for (const link of links) {
    const idx = remaining.toLowerCase().indexOf(link.text.toLowerCase());
    if (idx === -1) continue;
    if (idx > 0) parts.push(<span key={`t-${key++}`}>{remaining.slice(0, idx)}</span>);
    const matched = remaining.slice(idx, idx + link.text.length);
    const href = link.href;
    if (href.startsWith("http")) {
      parts.push(
        <a key={`a-${key++}`} href={href} target="_blank" rel="noreferrer">
          {matched}
        </a>
      );
    } else {
      parts.push(
        <Link key={`a-${key++}`} href={href}>
          {matched}
        </Link>
      );
    }
    remaining = remaining.slice(idx + link.text.length);
  }
  if (remaining) parts.push(<span key={`t-${key++}`}>{remaining}</span>);
  return parts.length ? parts : text;
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "h3") {
    return <h3 className="text-xl mt-4 text-white">{block.text}</h3>;
  }
  if (block.type === "h4") {
    return <h4 className="text-lg mt-3 text-white/90">{block.text}</h4>;
  }
  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag className={block.ordered ? "list-decimal pl-5 space-y-1" : "list-disc pl-5 space-y-1"}>
        {block.items.map((item, idx) => (
          <li key={`${idx}-${item.slice(0, 24)}`}>{item}</li>
        ))}
      </ListTag>
    );
  }
  return <p>{renderLinkedText(block.text, block.links)}</p>;
}

const SKIP_HEADINGS = new Set([
  "contact us",
  "make a payment",
  "connect with us",
  "subscribe",
  "our blogs",
]);

export function ContentSections({
  sections,
}: {
  sections: ContentSection[];
  startIndex?: number;
}) {
  const filtered = sections.filter((section) => {
    if (!section.heading) return section.blocks.length > 0;
    return !SKIP_HEADINGS.has(section.heading.toLowerCase());
  });

  return (
    <>
      {filtered.map((section, idx) => (
        <section key={`${section.heading || "section"}-${idx}`} className="section">
          <div className="container">
            {section.heading ? <h2 className="section-title">{section.heading}</h2> : null}
            <div className="prose-block">
              {section.blocks.map((block, bIdx) => (
                <Block key={`${block.type}-${bIdx}`} block={block} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
