import Link from "next/link";

export default function ListPage() {
  return (
    <main className="form-page section closed-list-page">
      <Link href="/">← voltar</Link>
      <p className="eyebrow">LISTA DA BANDA</p>
      <h1>Lista encerrada. Obrigado!</h1>
      <div className="closed-list-message">
        <p>
          A lista da banda precisou ser fechada antecipadamente às 17h para conseguirmos
          organizar tudo com o clube. Obrigado a todo mundo que colocou o nome.
        </p>
        <p>
          <strong>Nos vemos no YCSA!</strong> Na portaria, diga que seu nome está na{" "}
          <b>LISTA DA BANDA</b>.
        </p>
      </div>
      <Link className="button primary" href="/">
        Ver informações do evento
      </Link>
    </main>
  );
}
