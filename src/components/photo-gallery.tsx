import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/gallery";

export function PhotoGallery() {
  const photos = GALLERY_ITEMS.filter((item) => item.src);
  const references = GALLERY_ITEMS.filter((item) => !item.src);

  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">NO CLIMA DA FESTA</p>
        <h2 id="gallery-title">Mari Dias & Os Waldorfs em cena.</h2>
        <p>Fotos da banda e registros de outras edições da Octoberfest.</p>
      </div>

      {photos.length > 0 && (
        <div className="photo-grid">
          {photos.map((item) => (
            <a
              className={item.featured ? "photo-card featured" : "photo-card"}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={item.url}
            >
              <Image
                src={item.src!}
                alt={item.label}
                fill
                sizes={item.featured ? "(max-width: 850px) 100vw, 60vw" : "(max-width: 850px) 100vw, 40vw"}
              />
              <span className="photo-caption">
                <strong>{item.label}</strong>
                <small>{item.caption}</small>
              </span>
            </a>
          ))}
        </div>
      )}

      <div className="memory-grid" aria-label="Registros no Instagram">
        {references.map((item) => (
          <a
            className="memory-card"
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={item.url}
          >
            <span className="memory-year">{item.label}</span>
            <span>{item.caption}</span>
            <b>Ver no Instagram ↗</b>
          </a>
        ))}
      </div>
    </section>
  );
}
