const connectors = new Set(["da", "das", "de", "do", "dos", "e"]);

export function normalizeNameKey(value: string) {
  return value.trim().replace(/\s+/g, " ").toLocaleLowerCase("pt-BR");
}

export function formatPersonName(value: string) {
  return normalizeNameKey(value)
    .split(" ")
    .map((part, index) =>
      index > 0 && connectors.has(part)
        ? part
        : part
          ? part[0].toLocaleUpperCase("pt-BR") + part.slice(1)
          : part,
    )
    .join(" ");
}
