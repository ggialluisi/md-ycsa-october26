const PHOTOS = [
  { label: "Mari Dias & Os Waldorfs", caption: "A banda reunida.", position: "0% 0%", featured: true },
  { label: "Pista cheia", caption: "Show com a casa em clima de festa.", position: "50% 0%" },
  { label: "Mari & sax", caption: "Palco, banda e muita energia.", position: "100% 0%" },
  { label: "Mari no clima", caption: "Um registro leve antes do show.", position: "0% 100%" },
  { label: "Show geral", caption: "A banda tocando para a pista.", position: "50% 100%" },
] as const;

export function PhotoGallery() {
  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">NO CLIMA DA FESTA</p>
        <h2 id="gallery-title">Mari Dias & Os Waldorfs em cena.</h2>
        <p>Registros da banda e da festa, agora carregados localmente no site.</p>
      </div>

      <div className="photo-grid">
        {PHOTOS.map((photo) => (
          <article
            className={photo.featured ? "photo-card featured" : "photo-card"}
            key={photo.label}
          >
            <div
              className="photo-sprite"
              role="img"
              aria-label={photo.label}
              style={{ backgroundPosition: photo.position }}
            />
            <span className="photo-caption">
              <strong>{photo.label}</strong>
              <small>{photo.caption}</small>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
