import Link from "next/link";
import { Countdown } from "@/components/countdown";
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
          <h1>Mari Dias & Os Waldorfs na Octoberfest YCSA 26</h1>
          <p className="lead">
            Uma tarde de festa, comida típica e cerveja. Às 17h, Mari Dias & Os Waldorfs sobem ao palco.
          </p>

          <div className="event-chips" aria-label="Informações do evento">
            <span>24 de outubro</span>
            <span>A partir das 13h</span>
            <span>Banda às 17h</span>
          </div>

          <div className="actions">
            <Link className="button primary" href="/lista/">Entrar na Lista da Banda</Link>
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
          <p className="eyebrow">LISTA DA BANDA</p>
          <p>Já estão confirmados</p>
          <PublicSummary />
          <span>pessoas</span>
        </div>
      </section>

      <section className="section info-grid">
        <article className="info-card">
          <span className="info-number">01</span>
          <h2>Inclua todo mundo.</h2>
          <p>Adultos e crianças precisam estar na lista. Você pode adicionar várias pessoas de uma vez.</p>
        </article>
        <article className="info-card">
          <span className="info-number">02</span>
          <h2>CPF para adultos.</h2>
          <p>Para adultos, informe o CPF: ele pode ser solicitado na portaria. Crianças sem CPF podem ser incluídas normalmente.</p>
        </article>
        <article className="info-card accent-card">
          <span className="info-number">03</span>
          <h2>Na portaria, diga “LISTA DA BANDA”.</h2>
          <p>É essa frase que identifica os nomes enviados por aqui.</p>
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
        </div>
      </section>

      <section className="section final-cta">
        <p className="eyebrow">ÚLTIMA CHAMADA</p>
        <h2>Seu nome na Lista da Banda.</h2>
        <p>Garanta os nomes antes do encerramento da lista.</p>
        <Link className="button primary" href="/lista/">Colocar nomes na lista</Link>
      </section>

      <section className="section links-section">
        <div>
          <p className="eyebrow">MAIS FESTA</p>
          <h2>Acompanhe a banda e o clube.</h2>
        </div>
        <div className="link-stack">
          <a href={EVENT.bandInstagram} target="_blank" rel="noreferrer">Instagram de Mari Dias & Os Waldorfs ↗</a>
          <a href={EVENT.clubInstagram} target="_blank" rel="noreferrer">Instagram do Yacht Club Santo Amaro ↗</a>
        </div>
      </section>

      <div className="sticky-cta">
        <Link href="/lista/">
          <b>Entrar na Lista da Banda</b>
          <Countdown />
        </Link>
      </div>

      <footer>
        <span>Mari Dias & Os Waldorfs · Octoberfest YCSA 26</span>
        <Link href="/admin/">Admin</Link>
      </footer>
    </main>
  );
}
