function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function ok_(data, message) {
  return json_({ ok: true, data: data || {}, message: message || "Operação concluída" });
}

function fail_(message) {
  return json_({ ok: false, message: String(message || "Não foi possível concluir a operação.") });
}

function registrationOpen_() {
  return Date.now() < new Date(DEADLINE_ISO).getTime();
}

function doGet() {
  return ok_({ service: "md-ycsa-october26", status: "ok" });
}

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    if (body.action === "publicSummary") {
      return ok_({
        totalPeople: listPeople_().length,
        registrationOpen: registrationOpen_(),
        deadline: DEADLINE_ISO,
      });
    }

    if (body.action === "submitPeople") {
      if (!registrationOpen_()) return fail_("A lista foi encerrada às 9h do dia do evento.");
      if (!Array.isArray(body.people) || !body.people.length) return fail_("Nenhuma pessoa informada.");
      return ok_(insertPeople_(body.people));
    }

    if (body.action === "adminPeople") {
      authorizeAdmin_(body.idToken);
      return ok_({
        people: listPeople_().map((person) => ({
          id: person.id,
          name: person.name,
          cpf: person.cpf,
          createdAt: person.createdAt,
        })),
      });
    }

    return fail_("Ação inválida.");
  } catch (error) {
    console.error(error);
    return fail_(error && error.message ? error.message : "Erro interno.");
  }
}

function authorizeAdmin_(idToken) {
  if (!idToken) throw new Error("Login necessário.");

  const clientId = getRequiredProperty_("GOOGLE_CLIENT_ID");
  const adminEmail = getRequiredProperty_("ADMIN_EMAIL");

  const response = UrlFetchApp.fetch(
    "https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(idToken),
    { muteHttpExceptions: true },
  );

  if (response.getResponseCode() !== 200) throw new Error("Sessão inválida ou expirada.");

  const info = JSON.parse(response.getContentText());
  const now = Math.floor(Date.now() / 1000);
  const validIssuer = info.iss === "https://accounts.google.com" || info.iss === "accounts.google.com";

  if (
    !validIssuer ||
    info.aud !== clientId ||
    Number(info.exp || 0) <= now ||
    String(info.email_verified) !== "true" ||
    String(info.email || "").toLowerCase() !== adminEmail.toLowerCase()
  ) {
    throw new Error("Acesso não autorizado.");
  }

  return info;
}

function setupSpreadsheet() {
  const spreadsheet = getSpreadsheet_();

  let people = spreadsheet.getSheetByName(SHEETS.PEOPLE);
  if (!people) people = spreadsheet.insertSheet(SHEETS.PEOPLE);
  if (people.getLastRow() === 0) {
    people.getRange(1, 1, 1, PEOPLE_HEADERS.length).setValues([PEOPLE_HEADERS]);
  }
  people.setFrozenRows(1);
  people.getRange("A1:G1").setFontWeight("bold");

  let config = spreadsheet.getSheetByName(SHEETS.CONFIG);
  if (!config) config = spreadsheet.insertSheet(SHEETS.CONFIG);
  if (config.getLastRow() === 0) {
    config.getRange(1, 1, 1, 5).setValues([["key", "value", "type", "public", "description"]]);
  }
  config.setFrozenRows(1);
  config.getRange("A1:E1").setFontWeight("bold");
}
