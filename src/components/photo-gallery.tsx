import { GALLERY_ITEMS } from "@/lib/gallery";

export function PhotoGallery() {
  const posts = GALLERY_ITEMS.filter((item) => item.kind === "post");
  const highlights = GALLERY_ITEMS.filter((item) => item.kind === "highlight");

  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">NO CLIMA DA FESTA</p>
        <h2 id="gallery-title">Mari Dias & Os Waldorfs em cena.</h2>
        <p>Registros oficiais da banda e da Octoberfest no Instagram.</p>
      </div>

      <div className="instagram-grid">
        {posts.map((item) => (
          <article
            className={item.featured ? "instagram-card featured" : "instagram-card"}
            key={item.url}
          >
            <div className="instagram-frame">
              <iframe
                src={item.embedUrl}
                title={item.label}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="instagram-copy">
              <div>
                <strong>{item.label}</strong>
                <span>{item.caption}</span>
              </div>
              <a href={item.url} target="_blank" rel="noreferrer">
                Abrir no Instagram ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="memory-grid" aria-label="Edições anteriores">
        {highlights.map((item) => (
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
