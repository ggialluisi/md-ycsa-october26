export function PhotoGallery() {
  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">NO CLIMA DA FESTA</p>
        <h2 id="gallery-title">Mari Dias & Os Waldorfs em cena.</h2>
        <p>As fotos da banda entram aqui assim que os arquivos originais estiverem no repositório.</p>
      </div>

      <div className="photo-placeholder-grid" aria-hidden="true">
        <div className="photo-placeholder featured" />
        <div className="photo-placeholder" />
        <div className="photo-placeholder" />
      </div>
    </section>
  );
}
