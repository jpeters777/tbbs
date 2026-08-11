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

        <ol className="ba-gallery-cases">
          {items.map((img, idx) => {
            const caseNumber = String(idx + 1).padStart(2, "0");
            const tags = procedureTagsFromAlt(img.alt);

            return (
              <li key={`${img.src}-${idx}`} className="ba-case">
                <div className="ba-case-header">
                  <span className="ba-case-index">Case {caseNumber}</span>
                  <span className="ba-case-label">Before & After</span>
                </div>
                <div className="ba-case-tags" aria-label="Procedure tags">
                  {tags.map((tag) => (
                    <span key={tag} className="ba-case-tag">
                      {tag}
                    </span>
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
      </div>
    </section>
  );
}
