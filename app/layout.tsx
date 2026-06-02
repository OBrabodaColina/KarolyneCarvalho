import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Karolyne Carvalho | Consultoria Financeira Premium",
  description: "Planejamento Financeiro Inteligente para Construir o Futuro que Você Deseja. Organize suas finanças e proteja seu patrimônio.",
  keywords: "consultoria financeira, planejamento financeiro, wealth management, gestão de patrimônio, Karolyne Carvalho",
  // Nova configuração mapeando o ícone para a pasta public:
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Karolyne Carvalho | Consultoria Financeira Premium",
    description: "Planejamento Financeiro Inteligente para Construir o Futuro que Você Deseja.",
    url: "https://karolynecarvalho.com.br",
    siteName: "Karolyne Carvalho",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Karolyne Carvalho Consultoria Financeira",
    "image": "https://karolynecarvalho.com.br/logo.png",
    "description": "Planejamento financeiro inteligente e estratégico.",
    "url": "https://karolynecarvalho.com.br",
    "telephone": "+5511999999999",
    "priceRange": "$$$"
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  );
}