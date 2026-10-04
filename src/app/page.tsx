import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { PublicSummary } from "@/components/public-summary";
import { EVENT } from "@/lib/event";

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <p className="eyebrow">23 OUT · YCSA · SÃO PAULO</p>
        <h1>Mari Dias na Octoberfest YCSA 26</h1>
        <p className="lead">
          Comida típica, cerveja, amigos e Oswaldorfs no palco. A festa começa às 13h. A banda toca às 17h.
        </p>
        <div className="actions">
          <Link className="button primary" href="/lista/">Entrar na Lista da Banda</Link>
          <a className="button ghost" href={EVENT.officialPost} target="_blank" rel="noreferrer">
            Post oficial do evento
          </a>
        </div>
      </section>

      <section className="section metric">
        <p>Já estão na Lista da Banda</p>
        <PublicSummary />
        <span>pessoas</span>
      </section>

      <section className="section grid-2">
        <div>
          <p className="eyebrow">PROGRAMA</p>
          <h2>Chegue cedo. Fique até o último acorde.</h2>
        </div>
        <div className="timeline">
          <p><b>13:00</b> · início da Octoberfest, comidas típicas e cerveja</p>
          <p><b>17:00</b> · Mari Dias & Oswaldorfs</p>
        </div>
      </section>

      <section className="section panel">
        <p className="eyebrow">IMPORTANTE NA PORTARIA</p>
        <h2>Diga que seu nome está na “LISTA DA BANDA”.</h2>
        <p>Crianças acompanhadas também precisam ser incluídas na lista.</p>
      </section>

      <section className="section grid-2">
        <div>
          <p className="eyebrow">MAIS FESTA</p>
          <h2>Veja a banda e acompanhe o clube.</h2>
        </div>
        <div className="link-stack">
          <a href={EVENT.bandInstagram} target="_blank" rel="noreferrer">Instagram da Mari Dias / Oswaldorfs ↗</a>
          <a href={EVENT.clubInstagram} target="_blank" rel="noreferrer">Instagram do Yacht Club Santo Amaro ↗</a>
        </div>
      </section>

      <div className="sticky-cta">
        <Link href="/lista/">
          <b>Colocar nomes na lista</b>
          <Countdown />
        </Link>
      </div>

      <footer><Link href="/admin/">Admin</Link></footer>
    </main>
  );
}
