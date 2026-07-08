import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-instrument",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const siteUrl = "https://landingpagevillasdifiori.vercel.app";

export const metadata: Metadata = {
  title: "Vilas Di Fiori Residence Club | Lotes em Guaratinguetá",
  description:
    "Lotes a partir de 337m² em um dos vetores de maior valorização de Guaratinguetá. Infraestrutura concluída, pronto para construir.",
  keywords: [
    "lotes guaratinguetá",
    "terrenos guaratinguetá",
    "vilas di fiori",
    "residence club",
    "loteamento guaratinguetá",
    "casa própria",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Vilas Di Fiori Residence Club | Lotes em Guaratinguetá",
    description:
      "Lotes a partir de 337m² em um dos vetores de maior valorização de Guaratinguetá/SP.",
    url: siteUrl,
    siteName: "Vilas Di Fiori Residence Club",
    images: [
      {
        url: `${siteUrl}/images/hero-bg.png`,
        width: 1200,
        height: 630,
        alt: "Vilas Di Fiori Residence Club",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilas Di Fiori Residence Club",
    description:
      "Lotes a partir de 337m² em Guaratinguetá/SP. Infraestrutura concluída.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vilas Di Fiori Residence Club",
  description:
    "Lotes a partir de 337m² em Guaratinguetá/SP. Infraestrutura concluída, pronto para construir.",
  url: siteUrl,
  image: `${siteUrl}/images/hero-bg.png`,
  category: "RealEstate",
  offers: {
    "@type": "AggregateOffer",
    offerCount: "248",
    availability: "https://schema.org/InStock",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Oswaldo de Lima Mesquita, 795",
    addressLocality: "Guaratinguetá",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSans.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
