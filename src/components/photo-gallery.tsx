const PHOTOS = [
  {
    src: "/md-ycsa-october26/images/mdeow.jpeg",
    label: "Mari Dias & Os Waldorfs",
    caption: "@christokirma nos teclados completa a formação atual",
    variant: "wide",
  },
  {
    src: "/md-ycsa-october26/images/pos-show.jpeg",
    label: "Pós-show",
    caption: "Obrigado demais galera!",
    variant: "featured",
  },
  {
    src: "/md-ycsa-october26/images/show-pista.jpg",
    label: "Pista cheia",
    caption: "Mari Dias & Os Waldorfs no meio da festa.",
    variant: "default",
  },
  {
    src: "/md-ycsa-october26/images/mari-sax.jpg",
    label: "Confirmada: Simone Julian",
    caption: "Super musicista nos sopros!",
    variant: "default",
  },
  {
    src: "/md-ycsa-october26/images/mari-chapeu.jpg",
    label: "Mari no clima",
    caption: "Um registro leve antes do show.",
    variant: "default",
  },
  {
    src: "/md-ycsa-october26/images/show-geral.jpg",
    label: "Show geral",
    caption: "YCSA bombando",
    variant: "default",
  },
  {
    src: "/md-ycsa-october26/images/mari.jpeg",
    label: "Mari Dias",
    caption: "Nos vemos lá",
    variant: "finale",
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
            className={`photo-card ${photo.variant === "default" ? "" : photo.variant}`}
            key={photo.src}
          >
            <img src={photo.src} alt={photo.label} loading="lazy" />
            <figcaption className="photo-caption">
              <strong>{photo.label}</strong>
              {photo.src.endsWith("mdeow.jpeg") ? (
                <small>
                  <a
                    href="https://www.instagram.com/christokirma/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @christokirma
                  </a>{" "}
                  nos teclados completa a formação atual
                </small>
              ) : (
                <small>{photo.caption}</small>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
