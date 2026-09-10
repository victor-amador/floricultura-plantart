import type { Metadata } from "next";
import { FloatingWhatsapp, Footer, Header } from "./components/SiteChrome";
import { localBusinessJsonLd } from "./lib/plantart";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://floricultura-plantart.victor-rodrigues-ama.chatgpt.site"),
  title: {
    default: "Floricultura Plantart | Garden Center & Paisagismo em Brasília",
    template: "%s | Plantart",
  },
  description:
    "Floricultura Plantart LTDA: Garden Center em Vicente Pires e paisagismo em Brasília/DF. Plantas, jardinagem, seixos, substratos, adubos e natureza para viver.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Floricultura Plantart",
    description: "Garden Center & Paisagismo em Brasília/DF.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floricultura Plantart",
    description: "Garden Center & Paisagismo em Brasília/DF.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsapp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
