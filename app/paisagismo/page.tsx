/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { imageBank, plantart, realWorkImages } from "../lib/plantart";

export const metadata: Metadata = {
  title: "Paisagismo em Brasília",
  description:
    "Paisagismo em Brasília e Vicente Pires pela Plantart: jardins, áreas externas, vegetação e natureza integrada à arquitetura.",
  alternates: {
    canonical: "/paisagismo",
  },
  openGraph: {
    title: "Paisagismo em Brasília | Plantart",
    description:
      "Conheça o paisagismo da Plantart em Brasília, com registros reais de trabalhos e atendimento pelo WhatsApp.",
    images: ["/og.png"],
  },
};

const process = [
  ["01", "Entender", "Ler o espaço, a rotina, a insolação e o tipo de natureza desejada."],
  ["02", "Planejar", "Organizar espécies, materiais e composição visual com coerência."],
  ["03", "Transformar", "Dar forma a áreas externas, jardins e ambientes de convivência."],
  ["04", "Cultivar", "Pensar o jardim como presença viva, em crescimento e manutenção."],
];

const gallery = [
  [imageBank.architectureGarden, "Jardim contemporâneo integrado à arquitetura"],
  [imageBank.patio, "Área externa com vegetação e estar"],
  [imageBank.tropicalGarden, "Vegetação tropical em jardim denso"],
  [imageBank.texture, "Detalhe de planta com textura natural"],
  [imageBank.landscapeHero, "Residência com jardim e natureza ao redor"],
];

export default function PaisagismoPage() {
  return (
    <main>
      <section className="landscape-hero">
        <img src={imageBank.landscapeHero} alt="Jardim residencial contemporâneo integrado à arquitetura" />
        <div className="hero-overlay" />
        <div>
          <p className="kicker">Paisagismo em Brasília</p>
          <h1>Projetamos natureza. Transformamos espaços.</h1>
          <p>
            A Plantart apresenta o paisagismo como uma frente essencial de sua
            atuação: jardins, áreas externas, vegetação e composições naturais
            para viver melhor.
          </p>
          <a className="btn btn--light" href={plantart.whatsappLandscapeUrl} target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>
        </div>
      </section>

      <section className="landscape-manifesto">
        <p className="kicker">Conceito</p>
        <h2>
          Um jardim bem pensado não decora apenas. Ele muda a forma como o
          espaço respira.
        </h2>
        <p>
          Folhagens, volumes, sombras, caminhos, vasos, pedras e substratos se
          encontram para criar uma experiência de permanência. É nessa
          integração entre natureza e arquitetura que o paisagismo ganha força.
        </p>
      </section>

      <section className="immersive-split">
        <div>
          <p className="kicker">Ambientes externos</p>
          <h2>Vegetação como arquitetura viva.</h2>
          <p>
            O trabalho paisagístico pode aproximar casa, jardim e rotina,
            criando áreas mais frescas, acolhedoras e visualmente sofisticadas.
          </p>
        </div>
        <img src={imageBank.architectureGarden} alt="Arquitetura contemporânea com jardim e folhagens" />
      </section>

      <section className="process-section">
        <p className="kicker">Nosso processo</p>
        <h2>Uma leitura conceitual para transformar espaços.</h2>
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="real-work-preview">
        <div className="gallery-heading">
          <p className="kicker">Trabalhos reais</p>
          <h2>Conheça alguns dos nossos trabalhos.</h2>
          <p>
            Registros reais de paisagismo e manutenção de jardins realizados pela
            Plantart. A galeria completa reúne fotos e vídeos enviados pela
            equipe.
          </p>
        </div>
        <div className="real-work-strip">
          {realWorkImages.map((item) => (
            <a href={item.fallbackSrc} target="_blank" rel="noreferrer" key={item.src}>
              <img src={item.src} alt={item.alt} loading="lazy" width={item.width} height={item.height} />
              <span>{item.title}</span>
            </a>
          ))}
        </div>
        <Link className="btn btn--solid" href="/nossos-trabalhos">
          Ver nossos trabalhos
        </Link>
      </section>

      <section className="gallery-section">
        <div className="gallery-heading">
          <p className="kicker">Referências visuais</p>
          <h2>Inspirações para jardins contemporâneos.</h2>
          <p>
            Estas imagens seguem como referências de linguagem paisagística e
            não representam, necessariamente, trabalhos realizados pela
            Plantart.
          </p>
        </div>
        <div className="masonry-gallery">
          {gallery.map(([src, alt], index) => (
            <figure className={index === 0 || index === 4 ? "wide" : ""} key={src}>
              <img src={src} alt={alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="landscape-cta">
        <p className="kicker">Plantart Paisagismo</p>
        <h2>Vamos transformar seu espaço?</h2>
        <p>
          Visite a Plantart em Vicente Pires ou acompanhe {plantart.instagram}
          para conhecer melhor a linguagem da marca.
        </p>
        <div className="action-row">
          <a className="btn btn--solid" href={plantart.whatsappLandscapeUrl} target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>
          <a className="btn btn--outline" href={plantart.instagramUrl} target="_blank" rel="noreferrer">
            Ver Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
