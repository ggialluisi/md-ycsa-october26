"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { formatCpf, isValidCpf } from "@/lib/cpf";
import { formatPersonName } from "@/lib/names";
import { EVENT } from "@/lib/event";
import { api } from "@/services/api";
import type { PersonInput } from "@/models/person";

type Row = PersonInput & { localId: number };

const newRow = (localId: number): Row => ({
  localId,
  name: "",
  cpf: "",
  hasNoCpf: false,
});

export default function ListPage() {
  const [rows, setRows] = useState<Row[]>([newRow(1)]);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const closed = useMemo(() => Date.now() >= new Date(EVENT.registrationDeadline).getTime(), []);

  const update = (id: number, patch: Partial<Row>) =>
    setRows((current) => current.map((row) => row.localId === id ? { ...row, ...patch } : row));

  const add = () =>
    setRows((current) => [...current, newRow(Math.max(...current.map((row) => row.localId)) + 1)]);

  const remove = (id: number) =>
    setRows((current) => current.length === 1 ? current : current.filter((row) => row.localId !== id));

  async function submit(event: FormEvent) {
    event.preventDefault();
    setMessage("");

    if (closed) {
      setMessage("A lista foi encerrada às 9h do dia do evento.");
      return;
    }

    const people = rows
      .map((row) => ({
        name: formatPersonName(row.name),
        cpf: row.hasNoCpf ? "" : formatCpf(row.cpf ?? ""),
        hasNoCpf: Boolean(row.hasNoCpf),
      }))
      .filter((person) => person.name);

    if (!people.length) {
      setMessage("Inclua pelo menos um nome.");
      return;
    }

    if (people.some((person) => !person.hasNoCpf && person.cpf && !isValidCpf(person.cpf))) {
      setMessage("Revise os CPFs sinalizados antes de enviar.");
      return;
    }

    setSending(true);
    try {
      const result = await api.submitPeople(people);
      setMessage(
        `${result.includedCount} pessoa(s) incluída(s) na lista. Obrigado!${result.duplicateCount ? ` ${result.duplicateCount} duplicada(s) não foram incluídas.` : ""} Até lá!`,
      );
      if (result.includedCount) setRows([newRow(1)]);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar agora.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="form-page section">
      <Link href="/">← voltar</Link>
      <p className="eyebrow">LISTA DA BANDA</p>
      <h1>Quem vai com você?</h1>
      <p>
        Inclua adultos e crianças. CPF é opcional; quando informado, precisa ser válido.
        Na portaria, diga que os nomes estão na <b>LISTA DA BANDA</b>.
      </p>

      <form onSubmit={submit} className="people-form">
        {rows.map((row, index) => {
          const invalid = Boolean(
            row.cpf &&
            !row.hasNoCpf &&
            formatCpf(row.cpf).length === 14 &&
            !isValidCpf(row.cpf),
          );

          return (
            <fieldset key={row.localId}>
              <legend>Pessoa {index + 1}</legend>

              <label>
                Nome
                <input
                  value={row.name}
                  onChange={(event) => update(row.localId, { name: event.target.value })}
                  required
                />
              </label>

              <label>
                CPF
                <input
                  inputMode="numeric"
                  value={row.hasNoCpf ? "" : formatCpf(row.cpf ?? "")}
                  onChange={(event) => update(row.localId, { cpf: event.target.value })}
                  disabled={row.hasNoCpf}
                  aria-invalid={invalid}
                  placeholder="000.000.000-00"
                />
                {invalid && <small>CPF inválido.</small>}
              </label>

              <label className="check">
                <input
                  type="checkbox"
                  checked={Boolean(row.hasNoCpf)}
                  onChange={(event) => update(row.localId, { hasNoCpf: event.target.checked, cpf: "" })}
                />
                Não tem CPF
              </label>

              {rows.length > 1 && (
                <button type="button" className="text-button" onClick={() => remove(row.localId)}>
                  Remover pessoa
                </button>
              )}
            </fieldset>
          );
        })}

        <button type="button" className="button ghost" onClick={add}>+ adicionar outra pessoa</button>
        <button type="submit" className="button primary" disabled={sending || closed}>
          {closed ? "Lista encerrada" : sending ? "Enviando..." : "Enviar para a Lista da Banda"}
        </button>

        {message && <p className="message" role="status">{message}</p>}
      </form>
    </main>
  );
}
