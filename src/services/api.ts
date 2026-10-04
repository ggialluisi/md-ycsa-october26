import type { AdminPerson, PersonInput, SubmissionResult } from "@/models/person";

const endpoint = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

async function request<T>(action: string, payload: Record<string, unknown> = {}) {
  if (!endpoint) throw new Error("API ainda não configurada.");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload }),
  });

  const json = (await response.json()) as {
    ok: boolean;
    data?: T;
    message?: string;
  };

  if (!json.ok) throw new Error(json.message ?? "Não foi possível concluir a operação.");
  return json.data as T;
}

export const api = {
  getPublicSummary: () =>
    request<{ totalPeople: number; registrationOpen: boolean; deadline: string }>("publicSummary"),
  submitPeople: (people: PersonInput[]) =>
    request<SubmissionResult>("submitPeople", { people }),
  getAdminPeople: (idToken: string) =>
    request<{ people: AdminPerson[] }>("adminPeople", { idToken }),
};
