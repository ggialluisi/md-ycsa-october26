function getSpreadsheet_() {
  return SpreadsheetApp.openById(getRequiredProperty_("SPREADSHEET_ID"));
}

function getPeopleSheet_() {
  return getSpreadsheet_().getSheetByName(SHEETS.PEOPLE);
}

function normalizeNameKey_(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLocaleLowerCase("pt-BR");
}

function cpfDigits_(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 11);
}

function formatCpf_(value) {
  const d = cpfDigits_(value);
  return d.length === 11 ? d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : "";
}

function validCpf_(value) {
  const cpf = cpfDigits_(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  function digit(length) {
    let sum = 0;
    for (let i = 0; i < length; i += 1) sum += Number(cpf[i]) * (length + 1 - i);
    const r = (sum * 10) % 11;
    return r === 10 ? 0 : r;
  }

  return digit(9) === Number(cpf[9]) && digit(10) === Number(cpf[10]);
}

function listPeople_() {
  const values = getPeopleSheet_().getDataRange().getValues();
  return values.slice(1).filter((row) => row[0]).map((row) => ({
    id: String(row[0]),
    name: String(row[1]),
    cpf: String(row[3] || ""),
    createdAt: new Date(row[6]).toISOString(),
    normalizedName: String(row[2]),
    cpfNormalized: String(row[4] || ""),
  }));
}

function insertPeople_(people) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const sheet = getPeopleSheet_();
    const existing = listPeople_();
    const names = new Set(existing.map((person) => person.normalizedName));
    const cpfs = new Set(existing.map((person) => person.cpfNormalized).filter(Boolean));
    let duplicateCount = 0;
    const rows = [];

    people.forEach((person) => {
      const name = String(person.name || "").trim().replace(/\s+/g, " ");
      const normalizedName = normalizeNameKey_(name);
      const hasNoCpf = Boolean(person.hasNoCpf) || !String(person.cpf || "").trim();
      const cpfNormalized = hasNoCpf ? "" : cpfDigits_(person.cpf);

      if (!name) throw new Error("Nome obrigatório.");
      if (!hasNoCpf && !validCpf_(cpfNormalized)) throw new Error("CPF inválido para " + name + ".");

      if (names.has(normalizedName) || (cpfNormalized && cpfs.has(cpfNormalized))) {
        duplicateCount += 1;
        return;
      }

      names.add(normalizedName);
      if (cpfNormalized) cpfs.add(cpfNormalized);

      rows.push([
        Utilities.getUuid(),
        name,
        normalizedName,
        cpfNormalized ? formatCpf_(cpfNormalized) : "",
        cpfNormalized,
        hasNoCpf,
        new Date(),
      ]);
    });

    if (rows.length) {
      sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, PEOPLE_HEADERS.length).setValues(rows);
    }

    return { includedCount: rows.length, duplicateCount };
  } finally {
    lock.releaseLock();
  }
}
