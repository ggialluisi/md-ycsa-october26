import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mari Dias & Os Waldorfs na Octoberfest YCSA 26",
  description: "Entre para a Lista da Banda e curta a Octoberfest YCSA 2026 com Mari Dias & Os Waldorfs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
