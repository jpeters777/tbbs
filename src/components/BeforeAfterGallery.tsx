"use client";

import { useMemo, useState } from "react";
import {
  captionFromAlt,
  prepareBeforeAfterGalleryImages,
} from "@/lib/gallery-images";
import { procedureTagsFromAlt } from "@/lib/gallery-procedure-tags";

type GalleryImage = {
  src: string;
  alt: string;
  localSrc?: string;
};

export function BeforeAfterGallery({
  title = "Before & after gallery",
  intro,
  images,
}: {
  title?: string;
  intro?: string;
  images: GalleryImage[];
}) {
  const items = prepareBeforeAfterGalleryImages(images);
  const [activeTag, setActiveTag] = useState<string>("all");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const img of items) {
      for (const tag of procedureTagsFromAlt(img.alt)) tags.add(tag);
    }
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = useMemo(() => {
    if (activeTag === "all") return items;
    return items.filter((img) => procedureTagsFromAlt(img.alt).includes(activeTag));
  }, [activeTag, items]);

  if (items.length < 1) return null;

  return (
    <section className="ba-gallery" aria-labelledby="ba-gallery-heading">
      <div className="container">
        <header className="ba-gallery-header">
          <p className="ba-eyebrow">Patient results</p>
          <h2 id="ba-gallery-heading" className="ba-gallery-title">
            {title}
          </h2>
          {intro ? <p className="ba-gallery-intro">{intro}</p> : null}
          <p className="ba-gallery-disclaimer">
            Individual results vary. Photos represent real patients; outcomes depend on anatomy, procedure plan, and
            recovery.
          </p>
        </header>

        {allTags.length > 1 ? (
          <div className="ba-gallery-filters" role="toolbar" aria-label="Filter results by procedure">
            <button
              type="button"
              className={`ba-gallery-filter-btn${activeTag === "all" ? " is-active" : ""}`}
              aria-pressed={activeTag === "all"}
              onClick={() => setActiveTag("all")}
            >
              All results
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`ba-gallery-filter-btn${activeTag === tag ? " is-active" : ""}`}
                aria-pressed={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        ) : null}

        {filtered.length === 0 ? (
          <p className="ba-gallery-empty">No cases match this filter. Try another procedure tag.</p>
        ) : (
          <ol className="ba-gallery-cases">
            {filtered.map((img, idx) => {
              const caseNumber = String(idx + 1).padStart(2, "0");
              const tags = procedureTagsFromAlt(img.alt);

              return (
                <li key={`${img.src}-${idx}-${activeTag}`} className="ba-case">
                  <div className="ba-case-header">
                    <span className="ba-case-index">Case {caseNumber}</span>
                    <span className="ba-case-label">Before & After</span>
                  </div>
                  <div className="ba-case-tags" aria-label="Procedure tags">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="ba-case-tag ba-case-tag--btn"
                        onClick={() => setActiveTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  <figure className="ba-case-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="ba-case-img"
                      loading="lazy"
                    />
                  </figure>
                  <figcaption className="ba-case-caption">{captionFromAlt(img.alt, idx)}</figcaption>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}
