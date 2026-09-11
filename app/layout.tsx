import type { Metadata } from "next";
import { FloatingWhatsapp, Footer, Header } from "./components/SiteChrome";
import { localBusinessJsonLd, organizationJsonLd, plantart, websiteJsonLd } from "./lib/plantart";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(plantart.officialUrl),
  title: { default: "Floricultura Plantart | Garden Center e Paisagismo em Brasília", template: "%s | Plantart" },
  description: "Garden Center e paisagismo em Brasília: plantas, flores, vasos, materiais de jardinagem e projetos para áreas externas.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Floricultura Plantart | Garden Center e Paisagismo", description: "Plantas, flores e paisagismo para transformar seus ambientes em Brasília.", url: plantart.officialUrl, siteName: "Floricultura Plantart", locale: "pt_BR", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Floricultura Plantart", description: "Garden Center e paisagismo em Brasília.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteJsonLd = { "@context": "https://schema.org", "@graph": [localBusinessJsonLd, organizationJsonLd, websiteJsonLd] };
  return <html lang="pt-BR"><body><Header />{children}<Footer /><FloatingWhatsapp /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} /></body></html>;
}
