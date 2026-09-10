import Link from "next/link";
import { plantart } from "../lib/plantart";

const navItems = [
  ["Home", "/"],
  ["Garden Center", "/garden-center"],
  ["Paisagismo", "/paisagismo"],
  ["Nossos Trabalhos", "/nossos-trabalhos"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label="Plantart - página inicial">
        <span className="site-brand__mark" aria-hidden="true" />
        <span>
          <strong>Plantart</strong>
          <small>Garden Center & Paisagismo</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
        <a className="header-whatsapp" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </nav>

      <details className="mobile-menu">
        <summary aria-label="Abrir menu">
          <span />
          <span />
        </summary>
        <nav aria-label="Navegação mobile">
          {navItems.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
          <a href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">
            Fale pelo WhatsApp
          </a>
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="footer-brand" href="/">
            Plantart
          </Link>
          <p>
            Garden Center em Vicente Pires e paisagismo em Brasília, reunindo
            plantas, jardinagem e natureza para ambientes vivos.
          </p>
        </div>
        <div>
          <h2>Visite</h2>
          <address>
            {plantart.addressLine1}
            <br />
            {plantart.addressLine2}
            <br />
            {plantart.addressLine3}
            <br />
            {plantart.cep}
          </address>
        </div>
        <div>
          <h2>Funcionamento</h2>
          <ul>
            {plantart.hours.map(([day, hour]) => (
              <li key={day}>
                <span>{day}</span>
                <strong>{hour}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Social</h2>
          <a href={plantart.instagramUrl} target="_blank" rel="noreferrer">
            {plantart.instagram}
          </a>
          <a href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">
            WhatsApp {plantart.whatsappLabel}
          </a>
          <a href={plantart.googleReviewsUrl} target="_blank" rel="noreferrer">
            Avaliações no Google
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{plantart.legalName}</span>
        <span>CNPJ {plantart.cnpj}</span>
      </div>
    </footer>
  );
}

export function VisitCta({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <section className={`visit-cta visit-cta--${tone}`}>
      <div>
        <p className="kicker">Visite a Plantart</p>
        <h2>Um Garden Center em Brasília para escolher com tempo.</h2>
      </div>
      <div className="visit-cta__panel">
        <address>
          {plantart.addressLine1}
          <br />
          {plantart.addressLine2}
          <br />
          {plantart.addressLine3}
          <br />
          {plantart.cep}
        </address>
        <a className="btn btn--solid" href={plantart.mapsUrl} target="_blank" rel="noreferrer">
          Como chegar
        </a>
        <a className="text-link" href={plantart.googleReviewsUrl} target="_blank" rel="noreferrer">
          Ver avaliações no Google
        </a>
        <a className="text-link" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">
          Fale pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

export function MapBlock() {
  return (
    <div className="map-frame">
      <iframe
        title="Mapa para a Floricultura Plantart"
        src={plantart.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      className="floating-whatsapp"
      href={plantart.whatsappGeneralUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Plantart pelo WhatsApp"
    >
      WhatsApp
    </a>
  );
}
