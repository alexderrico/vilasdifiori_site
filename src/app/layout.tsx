import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vilas Di Fiori Residence Club | Lotes em Guaratinguetá",
  description:
    "Lotes a partir de 337m² em um dos vetores de maior valorização de Guaratinguetá. Infraestrutura concluída, pronto para construir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
