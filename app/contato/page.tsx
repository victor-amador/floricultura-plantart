/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { MapBlock } from "../components/SiteChrome";
import { imageBank, plantart } from "../lib/plantart";

export const metadata: Metadata = {
  title: "Contato e Localização",
  description:
    "Endereço, horários, WhatsApp e Instagram da Plantart, Garden Center & Paisagismo em Vicente Pires, Brasília/DF.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato e Localização | Plantart",
    description:
      "Como chegar à Plantart em Vicente Pires, horários de funcionamento, WhatsApp e Instagram oficiais.",
    images: ["/og.png"],
  },
};

export default function ContatoPage() {
  return (
    <main>
      <section className="contact-hero">
        <img src={imageBank.greenhouse} alt="Garden center com plantas e vasos" />
        <div>
          <p className="kicker">Contato</p>
          <h1>Plantart Garden Center & Paisagismo.</h1>
          <p>
            Visite a Plantart em Vicente Pires, Brasília/DF, para conhecer
            plantas, materiais de jardinagem e a frente de paisagismo.
          </p>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-card primary">
          <p className="kicker">Endereço</p>
          <h2>{plantart.addressLine1}</h2>
          <address>
            {plantart.addressLine2}
            <br />
            {plantart.addressLine3}
            <br />
            {plantart.cep}
          </address>
          <a className="btn btn--solid" href={plantart.mapsUrl} target="_blank" rel="noreferrer">
            Como chegar
          </a>
          <a className="btn btn--light contact-card__whatsapp" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">
            Fale pelo WhatsApp
          </a>
        </div>
        <div className="contact-card">
          <p className="kicker">Horário</p>
          <ul className="hours-list">
            {plantart.hours.map(([day, hour]) => (
              <li key={day}>
                <span>{day}</span>
                <strong>{hour}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-card">
          <p className="kicker">WhatsApp</p>
          <h2>{plantart.whatsappLabel}</h2>
          <a className="btn btn--solid" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">
            Falar pelo WhatsApp
          </a>
        </div>
        <div className="contact-card">
          <p className="kicker">Google</p>
          <h2>Avaliações e rota</h2>
          <p>
            Confira a ficha da Plantart no Google para ver informações públicas,
            rota e avaliações disponíveis.
          </p>
          <a className="btn btn--solid" href={plantart.googleReviewsUrl} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
        <div className="contact-card instagram-card">
          <p className="kicker">Instagram</p>
          <h2>Acompanhe a rotina da Plantart</h2>
          <p>
            Veja novidades do Garden Center, plantas disponíveis, bastidores e
            registros de paisagismo pelo perfil oficial.
          </p>
          <a className="instagram-handle" href={plantart.instagramUrl} target="_blank" rel="noreferrer" aria-label="Abrir Instagram oficial da Plantart">
            <span>{plantart.instagram}</span>
            <strong>Abrir Instagram</strong>
          </a>
        </div>
      </section>

      <section className="map-section">
        <MapBlock />
      </section>
    </main>
  );
}
