import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // 1. Importe a fonte
import "./globals.css";

// 2. Configure a fonte com os pesos necessários
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Regular, Medium, SemiBold, Bold, ExtraBold, Black
});

export const metadata: Metadata = {
  title: "Seu Site de Cursos",
  description: "Cursos e certificações de qualidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-24">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
