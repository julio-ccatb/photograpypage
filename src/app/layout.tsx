import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { FloatingWhatsApp } from "@/components/contact/floating-whatsapp";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Dvine Studios - Fotografía Profesional",
  description:
    "Servicios de fotografía profesional que capturan lo extraordinario en cada toma.",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.className}>
      <body>
        <TRPCReactProvider>
          {children}
          <Footer />
          <FloatingWhatsApp />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
