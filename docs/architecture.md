# Arquitetura

Frontend estático em Next.js, GitHub Pages, Google Sheets privado, Apps Script como API e Google Identity Services para um único administrador.

## Dados

Entidade `Person`: `id`, `name`, `normalizedName`, `cpf`, `cpfNormalized`, `hasNoCpf`, `createdAt`.

Público: total agregado, estado da inscrição, prazo e conteúdo institucional. Nome e CPF não pertencem a DTO público.

## Regras

- fechamento em 24/10/2026 09:00 America/Sao_Paulo, também no backend;
- CPF opcional e válido quando informado;
- duplicidade por nome normalizado OU CPF;
- sem CPF, nome normalizado é a chave;
- duplicados são ignorados e os demais são inseridos;
- LockService protege deduplicação + escrita.
