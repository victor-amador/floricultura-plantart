import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CatalogShowcase } from "../components/CatalogShowcase";
import { VisitCta } from "../components/SiteChrome";
import { imageBank, plantart, productCategories } from "../lib/plantart";
import { BreadcrumbJsonLd, pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Garden Center em Brasília e Vicente Pires", description: "Conheça as categorias do Garden Center Plantart em Brasília/DF: plantas, flores, vasos, terras, substratos, adubos e acessórios.", path: "/garden-center" });

export default function GardenCenterPage() {
  return <main><section className="page-intro container"><div><p className="eyebrow">Garden Center em Vicente Pires, Brasília</p><h1>Plantas e materiais para o seu próximo jardim.</h1><p>Consulte a disponibilidade e os valores pelo WhatsApp ou visite a loja para escolher com orientação. Se você busca plantas, vasos, adubos ou substratos em Taguatinga, confirme a rota até a loja pelo botão Como chegar.</p><div className="button-row"><a className="btn btn--primary" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">Consultar pelo WhatsApp</a><Link className="btn btn--outline" href="/contato">Visitar a loja</Link></div></div><div className="page-intro-image"><Image src={imageBank.heroGarden} alt="Plantas, vasos e flores no Garden Center Plantart" width={1713} height={918} priority sizes="(max-width: 800px) 100vw, 45vw" /></div></section><section className="section catalog-section container"><div className="section-heading"><div><p className="eyebrow">Categorias</p><h2>Encontre o que precisa.</h2></div><p>Selecione uma categoria para ver opções de produtos.</p></div><div className="category-grid">{productCategories.map((item) => <Link className="category-card" href={`/garden-center?categoria=${item.slug}#catalog-title`} key={item.slug}><div className="category-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 100vw, 25vw" /></div><div><h3>{item.name}</h3><p>{item.description}</p><span>Ver opções →</span></div></Link>)}</div></section><CatalogShowcase /><VisitCta tone="dark" /><BreadcrumbJsonLd items={[{ name: "Início", path: "/" }, { name: "Garden Center", path: "/garden-center" }]} /></main>;
}
