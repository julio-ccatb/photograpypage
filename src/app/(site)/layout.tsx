import "@/styles/globals.css";

import { type Metadata } from "next";

import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { info } from "@/data/info";

export const metadata: Metadata = {
  title:
    "Dvine Studios | Fotografía Profesional en Santo Domigo - Bodas, Retratos y Más",
  description:
    "Dvine Studios ofrece servicios de fotografía profesional especializados en bodas, retratos, productos y eventos. Capturamos momentos únicos con calidad y creatividad excepcional.",
  keywords: [
    "fotografía profesional",
    "fotografía de bodas",
    "fotografía de retratos",
    "fotografía de productos",
    "fotografía de eventos",
    "estudio de fotografía",
    "fotógrafo profesional",
    "Dvine Studios",
    "fotografía creativa",
    "Santo Domingo",
    "República Dominicana",
  ],
  icons: [{ rel: "icon", url: "/logo.png" }],
  openGraph: {
    title:
      "Dvine Studios | Fotografía Profesional en Santo Domingo, República Dominicana - Bodas, Retratos y Más",
    description:
      "Capturamos lo extraordinario en cada toma. Fotografía profesional para bodas, retratos, productos y más.",
    url: info.site,
    type: "website",
    images: [
      {
        url: "/logo_full.png",
        width: 1200,
        height: 630,
        alt: "Dvine Studios - Fotografía Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dvine Studios | Fotografía Profesional",
    description:
      "Servicios de fotografía profesional para bodas, retratos, productos y eventos. Capturamos cada detalle con creatividad.",
    images: [`${info.site}/logo_full.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
