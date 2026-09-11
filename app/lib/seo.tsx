import type { Metadata } from "next";
import { plantart } from "./plantart";

type PageSeo = { title: string; description: string; path: string; image?: string };

export function pageMetadata({ title, description, path, image = "/og.png" }: PageSeo): Metadata {
  const url = `${plantart.officialUrl}${path === "/" ? "" : path}`;
  const socialTitle = `${title} | Plantart`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: socialTitle, description, url, siteName: plantart.displayName, locale: "pt_BR", type: "website", images: [image] },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [image] },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${plantart.officialUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; path: string }> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }} />;
}
