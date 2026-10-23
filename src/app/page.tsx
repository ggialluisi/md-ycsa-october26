import Link from "next/link";
import { PhotoGallery } from "@/components/photo-gallery";
import { PublicSummary } from "@/components/public-summary";
import { EVENT } from "@/lib/event";

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <p className="eyebrow hero-eyebrow">24 OUT · YCSA · SÃO PAULO</p>
        <div className="hero-content">
          <h1>Mari Dias & Os Waldorfs na Octoberfest YCSA 2026</h1>
          <p className="lead">
            Uma tarde de festa, comida típica e cerveja. Às 17h, Mari Dias & Os Waldorfs sobem ao palco.
          </p>

          <div className="event-chips" aria-label="Informações do evento">
            <span>24 de outubro</span>
            <span>A partir das 13h</span>
            <span>Banda às 17h</span>
            <span>DJ 19h</span>
            <span>Lista encerrada às 17h</span>
          </div>

          <div className="actions">
            <span className="button primary closed-button">Lista encerrada</span>
            <a className="button ghost" href={EVENT.officialPost} target="_blank" rel="noreferrer">
              Ver post oficial
            </a>
          </div>
        </div>

        <a
          className="hero-photo-link"
          href={EVENT.bandPhotoPost}
          target="_blank"
          rel="noreferrer"
          aria-label="Ver fotos de Mari Dias & Os Waldorfs no Instagram"
        >
          <span>FOTOS DA BANDA</span>
          <strong>Mari Dias & Os Waldorfs ↗</strong>
        </a>
      </section>

      <section className="metric-wrap">
        <div className="section metric">
          <div className="metric-fireworks" aria-hidden="true" />
          <p className="metric-kicker">Temos já</p>
          <PublicSummary />
          <span className="people-label">pessoas</span>
          <span className="metric-footer">na lista da banda</span>
        </div>
      </section>

      <section className="section info-grid">
        <a
          className="info-card route-card"
          href="waze://?q=Yacht%20Club%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo&navigate=yes"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir rota para o YCSA no Waze"
        >
          <span className="info-number">01</span>
          <div className="route-art" aria-hidden="true">
            <span className="route-pin">●</span>
            <span className="route-line">⌁</span>
            <span className="route-car">➜</span>
          </div>
          <h2>Como chegar ao YCSA.</h2>
          <p>Abra a rota direto no Waze e venha sem erro.</p>
          <strong className="route-link">Abrir no Waze ↗</strong>
        </a>
        <article className="info-card">
          <span className="info-number">02</span>
          <h2>Lista encerrada.</h2>
          <p>Obrigado a todo mundo que confirmou presença. A lista já foi fechada para organizarmos tudo com o clube.</p>
        </article>
        <article className="info-card">
          <span className="info-number">03</span>
          <h2>Nos vemos no YCSA.</h2>
          <p>Chegue cedo, curta a festa e, na portaria, diga que seu nome está na LISTA DA BANDA.</p>
        </article>
        <article className="info-card accent-card">
          <span className="info-number">04</span>
          <h2>Na portaria, diga “LISTA DA BANDA”.</h2>
          <p>Entrada franca para convidados com nome na lista.</p>
        </article>
      </section>

      <PhotoGallery />

      <section className="section schedule-section">
        <div className="section-heading">
          <p className="eyebrow">PROGRAMA</p>
          <h2>Chegue cedo. Fique até o último acorde.</h2>
        </div>
        <div className="schedule-grid">
          <article>
            <time>13:00</time>
            <div>
              <strong>Começa a Octoberfest</strong>
              <p>Comidas típicas, cerveja e festa no YCSA.</p>
            </div>
          </article>
          <article>
            <time>17:00</time>
            <div>
              <strong>Mari Dias & Os Waldorfs</strong>
              <p>A banda sobe ao palco para fechar a tarde com música.</p>
            </div>
          </article>
          <article>
            <time>19:00</time>
            <div>
              <strong>DJ Cris Siqueira</strong>
              <p>After confirmado com pista em alta.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section final-cta">
        <div className="final-cta-inner">
          <p className="eyebrow">LISTA ENCERRADA</p>
          <h2>Lista fechada. Agora é só curtir.</h2>
          <p>Obrigado por confirmar com a gente. A Octoberfest YCSA acontece em 24 de outubro, a partir das 13h. Mari Dias & Os Waldorfs às 17h e DJ Cris Siqueira às 19h.</p>
          <a
            className="button primary final-cta-button"
            href="waze://?q=Yacht%20Club%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo&navigate=yes"
            target="_blank"
            rel="noreferrer"
          >
            Abrir rota no Waze
          </a>
        </div>
      </section>

      <section className="section links-section">
        <div>
          <p className="eyebrow">MAIS FESTA</p>
          <h2>Acompanhe a banda e o clube.</h2>
        </div>
        <div className="link-stack">
          <a href={EVENT.bandInstagram} target="_blank" rel="noreferrer">Instagram de Mari Dias & Os Waldorfs ↗</a>
          <a href={EVENT.clubInstagram} target="_blank" rel="noreferrer">Instagram do Yacht Club Santo Amaro ↗</a>
          <a href="https://www.instagram.com/crissiqueiradj/" target="_blank" rel="noreferrer">Instagram da DJ Cris Siqueira ↗</a>
          <a href="https://www.instagram.com/andre_nfoto/" target="_blank" rel="noreferrer">Instagram do fotógrafo André N. ↗</a>
        </div>
      </section>

      <div className="sticky-cta">
        <a
          href="waze://?q=Yacht%20Club%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo&navigate=yes"
          target="_blank"
          rel="noreferrer"
        >
          <b>Nos vemos no YCSA · Abrir no Waze</b>
        </a>
      </div>

      <footer>
        <span>Mari Dias & Os Waldorfs · Octoberfest YCSA 26</span>
        <Link href="/admin/">Admin</Link>
      </footer>
    </main>
  );
}
