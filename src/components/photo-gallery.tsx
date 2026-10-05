const PHOTOS = [
  {
    src: "/md-ycsa-october26/images/show-pista.jpg",
    label: "Pista cheia",
    caption: "Mari Dias & Os Waldorfs no meio da festa.",
    featured: true,
  },
  {
    src: "/md-ycsa-october26/images/mari-sax.jpg",
    label: "Mari & sax",
    caption: "Palco, banda e muita energia.",
    featured: false,
  },
  {
    src: "/md-ycsa-october26/images/mari-chapeu.jpg",
    label: "Mari no clima",
    caption: "Um registro leve antes do show.",
    featured: false,
  },
  {
    src: "/md-ycsa-october26/images/show-geral.jpg",
    label: "Show geral",
    caption: "A banda tocando para a pista.",
    featured: false,
  },
] as const;

export function PhotoGallery() {
  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">NO CLIMA DA FESTA</p>
        <h2 id="gallery-title">Mari Dias & Os Waldorfs em cena.</h2>
        <p>Registros da banda e da festa, carregados diretamente do próprio site.</p>
      </div>

      <div className="photo-grid">
        {PHOTOS.map((photo) => (
          <figure
            className={photo.featured ? "photo-card featured" : "photo-card"}
            key={photo.src}
          >
            <img src={photo.src} alt={photo.label} loading="lazy" />
            <figcaption className="photo-caption">
              <strong>{photo.label}</strong>
              <small>{photo.caption}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
