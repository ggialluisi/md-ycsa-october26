export type PersonInput = {
  name: string;
  cpf?: string;
  hasNoCpf?: boolean;
};

export type AdminPerson = {
  id: string;
  name: string;
  cpf: string;
  createdAt: string;
};

export type SubmissionResult = {
  includedCount: number;
  duplicateCount: number;
};
