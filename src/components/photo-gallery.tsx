import { GALLERY_ITEMS } from "@/lib/gallery";

export function PhotoGallery() {
  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">NO CLIMA DA FESTA</p>
        <h2 id="gallery-title">Mari Dias & Os Waldorfs em cena.</h2>
        <p>
          A galeria fotográfica está sendo atualizada com imagens locais da banda.
        </p>
      </div>

      <div className="memory-grid" aria-label="Registros da banda e da Octoberfest">
        {GALLERY_ITEMS.map((item) => (
          <a
            className="memory-card"
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={item.url}
          >
            <span className="memory-year">{item.label}</span>
            <span>{item.caption}</span>
            <b>Ver referência ↗</b>
          </a>
        ))}
      </div>
    </section>
  );
}
