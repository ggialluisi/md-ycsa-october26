"use client";

import { useEffect, useMemo, useState } from "react";
import type { AdminPerson } from "@/models/person";
import { api } from "@/services/api";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: { credential: string }) => void }) => void;
          renderButton: (element: HTMLElement, options: Record<string, unknown>) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}

const AUTH_ERROR = /Sessão inválida|Acesso não autorizado|Login necessário/i;
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [people, setPeople] = useState<AdminPerson[]>([]);
  const [order, setOrder] = useState<"alpha" | "created">("alpha");
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setToken(sessionStorage.getItem("adminIdToken") ?? "");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!token) return;

    api.getAdminPeople(token)
      .then((data) => setPeople(data.people))
      .catch((err) => {
        const message = err instanceof Error ? err.message : "Acesso negado.";
        if (AUTH_ERROR.test(message)) {
          sessionStorage.removeItem("adminIdToken");
          setPeople([]);
          setToken("");
          setError("Sua sessão expirou. Entre novamente com a conta autorizada.");
          return;
        }
        setError(message);
      });
  }, [token]);

  useEffect(() => {
    if (token) return;

    if (!GOOGLE_CLIENT_ID) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      const target = document.getElementById("google-signin");
      if (!target || !window.google) return;

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: ({ credential }) => {
          sessionStorage.setItem("adminIdToken", credential);
          setError("");
          setToken(credential);
        },
      });

      window.google.accounts.id.renderButton(target, {
        theme: "outline",
        size: "large",
        text: "signin_with",
      });
    };

    document.head.appendChild(script);
    return () => script.remove();
  }, [token]);

  const sorted = useMemo(
    () =>
      [...people].sort((a, b) =>
        order === "alpha"
          ? a.name.localeCompare(b.name, "pt-BR")
          : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      ),
    [people, order],
  );

  const logout = () => {
    sessionStorage.removeItem("adminIdToken");
    window.google?.accounts.id.disableAutoSelect();
    setToken("");
    setPeople([]);
    setError("");
  };

  if (!token) {
    return (
      <main className="section admin-login">
        <p className="eyebrow">ÁREA RESTRITA</p>
        <h1>Apenas o GUBA tem acesso...</h1>
        <p>Entre com a conta Google autorizada para consultar a lista completa.</p>
        {error && <p className="message" role="status">{error}</p>}
        <div id="google-signin" />
      </main>
    );
  }

  return (
    <main className="section admin">
      <div className="admin-head">
        <div>
          <p className="eyebrow">ADMIN</p>
          <h1>Lista da Banda</h1>
          <p>{people.length} pessoas</p>
        </div>
        <button className="button ghost" onClick={logout}>Sair</button>
      </div>

      {error && <p className="message" role="status">{error}</p>}

      <div className="tabs" aria-label="Ordenação da lista">
        <button onClick={() => setOrder("alpha")} aria-pressed={order === "alpha"}>Ordem alfabética</button>
        <button onClick={() => setOrder("created")} aria-pressed={order === "created"}>Ordem de inclusão</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Nome</th><th>CPF</th><th>Inclusão</th></tr>
          </thead>
          <tbody>
            {sorted.map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.cpf || "—"}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "short",
                    timeStyle: "short",
                    timeZone: "America/Sao_Paulo",
                  }).format(new Date(person.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
