# Setup

Repositório: `ggialluisi/md-ycsa-october26`. Branch: `master`.

URL esperada: `https://ggialluisi.github.io/md-ycsa-october26/`

## Apps Script

Criar planilha privada e projeto vinculado. Em **Project Settings → Script Properties**:

- `SPREADSHEET_ID`
- `ADMIN_EMAIL=ggialluisi@gmail.com`
- `GOOGLE_CLIENT_ID`

Executar `setupSpreadsheet()`.

## OAuth

Criar **OAuth Client ID → Web application**.

Origens:

- `https://ggialluisi.github.io`
- `http://localhost:3000`

## Deploy

Apps Script: **Deploy → New deployment → Web app**.

- Execute as: **Me**
- Who has access: **Anyone**

GitHub: **Settings → Secrets and variables → Actions → Variables**:

- `NEXT_PUBLIC_APPS_SCRIPT_URL`
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`

Pages: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
