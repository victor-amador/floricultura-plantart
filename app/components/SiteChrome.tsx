"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { plantart } from "../lib/plantart";

const navItems = [["Início", "/"], ["Garden Center", "/garden-center"], ["Paisagismo", "/paisagismo"], ["Nossos trabalhos", "/nossos-trabalhos"], ["Sobre", "/sobre"], ["Contato", "/contato"]];

export function Header() {
  const pathname = usePathname();
  return <header className="site-header">
    <Link className="site-brand" href="/" aria-label="Plantart — página inicial"><Image src="/plantart-logo-mark.png" alt="Plantart Garden Center e Paisagismo" width={72} height={72} priority /></Link>
    <nav className="desktop-nav" aria-label="Navegação principal">{navItems.map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav>
    <a className="header-whatsapp" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
    <details className="mobile-menu"><summary aria-label="Abrir menu"><span /><span /><span /></summary><nav aria-label="Navegação mobile">{navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<a href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">Falar no WhatsApp</a></nav></details>
  </header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-grid">
    <div className="footer-intro"><Image src="/plantart-logo-mark.png" alt="Plantart" width={140} height={140} /><p>Plantas, flores, materiais de jardinagem e paisagismo para transformar ambientes em Brasília.</p></div>
    <div><h2>Explore</h2>{navItems.slice(1, 5).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
    <div><h2>Visite a loja</h2><address>{plantart.addressLine1}<br />{plantart.addressLine2}<br />{plantart.addressLine3}<br />{plantart.cep}</address><a href={plantart.mapsUrl} target="_blank" rel="noreferrer">Como chegar →</a></div>
    <div><h2>Fale com a gente</h2><a href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">WhatsApp {plantart.whatsappLabel}</a><a href={plantart.instagramUrl} target="_blank" rel="noreferrer">{plantart.instagram}</a><p className="footer-hours">Seg–Sex 08h–18h<br />Sáb 09h–18h<br />Dom 09h–13h</p></div>
  </div><div className="footer-bottom"><span>{plantart.legalName} · CNPJ {plantart.cnpj}</span><span>© {new Date().getFullYear()} Plantart</span></div></footer>;
}

export function VisitCta({ tone = "light" }: { tone?: "light" | "dark" }) {
  return <section className={`visit-cta visit-cta--${tone}`}><div><p className="eyebrow">Venha conhecer</p><h2>Escolha suas plantas de perto.</h2><p>Visite nosso Garden Center em Vicente Pires e conte com a nossa equipe.</p></div><div className="visit-cta__actions"><a className="btn btn--primary" href={plantart.mapsUrl} target="_blank" rel="noreferrer">Como chegar</a><a className="btn btn--ghost" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">Falar no WhatsApp</a></div></section>;
}

export function MapBlock() { return <div className="map-frame"><iframe title="Mapa para a Floricultura Plantart" src={plantart.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>; }
export function FloatingWhatsapp() { return <a className="floating-whatsapp" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Plantart pelo WhatsApp"><span aria-hidden="true">↗</span><span>WhatsApp</span></a>; }
