const SHEETS = { PEOPLE: "People", CONFIG: "Config" };
const PEOPLE_HEADERS = ["id","name","normalizedName","cpf","cpfNormalized","hasNoCpf","createdAt"];
const DEADLINE_ISO = "2026-10-24T09:00:00-03:00";
const TIMEZONE = "America/Sao_Paulo";
const MAX_PEOPLE = 500;

function getRequiredProperty_(key) {
  const value = PropertiesService.getScriptProperties().getProperty(key);
  if (!value) throw new Error("Configuração ausente: " + key);
  return value;
}
