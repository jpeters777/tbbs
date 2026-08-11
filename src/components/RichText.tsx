import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import {
  applyRecoveryGuideLinks,
  getPageKeywordLinks,
  splitTextByKeywordLinks,
  type KeywordLink,
  type TextSpan,
} from "@/lib/keyword-links";

function renderSpan(span: TextSpan, key: number): ReactNode {
  if (span.type === "text") return <span key={key}>{span.value}</span>;

  if (span.href.startsWith("http")) {
    return (
      <a key={key} href={span.href} className="inline-link" target="_blank" rel="noreferrer">
        {span.value}
      </a>
    );
  }

  return (
    <Link key={key} href={span.href} className="inline-link">
      {span.value}
    </Link>
  );
}

function buildSpans(
  text: string,
  links: KeywordLink[],
  autoLinkKeywords: boolean,
  currentPath?: string
): TextSpan[] {
  if (autoLinkKeywords) {
    const explicit =
      currentPath === "/recovery-guides" ? applyRecoveryGuideLinks(links) : links;
    const merged = [...explicit, ...getPageKeywordLinks(currentPath)];
    return splitTextByKeywordLinks(text, merged);
  }

  if (!links.length) {
    return [{ type: "text", value: text }];
  }

  const parts: TextSpan[] = [];
  let remaining = text;

  for (const link of links) {
    const idx = remaining.toLowerCase().indexOf(link.text.toLowerCase());
    if (idx === -1) continue;
    if (idx > 0) {
      parts.push({ type: "text", value: remaining.slice(0, idx) });
    }
    parts.push({
      type: "link",
      value: remaining.slice(idx, idx + link.text.length),
      href: link.href,
    });
    remaining = remaining.slice(idx + link.text.length);
  }

  if (remaining) {
    parts.push({ type: "text", value: remaining });
  }

  return parts.length ? parts : [{ type: "text", value: text }];
}

export function RichText({
  text,
  links = [],
  autoLinkKeywords = false,
  currentPath,
  className = "",
  as: Tag = "p",
}: {
  text: string;
  links?: KeywordLink[];
  autoLinkKeywords?: boolean;
  currentPath?: string;
  className?: string;
  as?: ElementType;
}) {
  const spans = buildSpans(text, links, autoLinkKeywords, currentPath);
  const richClass = Tag === "p" ? "rich-text" : "";
  const content = spans.map((span, i) => renderSpan(span, i));

  return (
    <Tag className={`${richClass} ${className}`.trim()}>
      {content}
    </Tag>
  );
}
