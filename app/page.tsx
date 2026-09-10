/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { MapBlock, VisitCta } from "./components/SiteChrome";
import { imageBank, plantart, productCategories } from "./lib/plantart";

export const metadata: Metadata = {
  title: "Plantart | Garden Center & Paisagismo em Brasília",
  description:
    "Plantart é Garden Center e paisagismo em Brasília e Vicente Pires: plantas, jardinagem, seixos, substratos, adubos e projetos com natureza.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Plantart | Garden Center & Paisagismo em Brasília",
    description:
      "Mais de 24 anos de atuação em Brasília, com Garden Center, plantas e paisagismo em Vicente Pires.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <main>
      <section className="home-hero page-hero">
        <img src={imageBank.tropicalGarden} alt="Jardim tropical com folhagens densas e luz natural" />
        <div className="hero-overlay" />
        <div className="home-hero__content">
          <p className="kicker">Garden Center & Paisagismo em Brasília</p>
          <h1>Natureza para viver. Paisagismo para transformar.</h1>
          <p>
            Há mais de 24 anos, a Plantart reúne plantas, jardinagem e
            paisagismo em Vicente Pires, Brasília.
          </p>
          <div className="hero-paths" aria-label="Principais caminhos da Plantart">
            <span>Garden Center em Brasília</span>
            <span>Paisagismo em Brasília</span>
          </div>
          <div className="action-row">
            <Link className="btn btn--solid" href="/garden-center">
              Visitar o Garden Center
            </Link>
            <a className="btn btn--light" href={plantart.whatsappLandscapeUrl} target="_blank" rel="noreferrer">
              Solicitar orçamento
            </a>
            <Link className="hero-secondary-link" href="/paisagismo">
              Conhecer o paisagismo
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-intro">
        <div className="intro-number">
          <span>24+</span>
          <small>anos de atuação</small>
        </div>
        <div>
          <p className="kicker">Plantart</p>
          <h2>Um lugar para pensar a natureza como parte da arquitetura da vida.</h2>
        </div>
        <p>
          Há mais de 24 anos, a Plantart faz parte da rotina de quem busca
          plantas, materiais de jardinagem e paisagismo em Brasília. Um Garden
          Center para escolher com calma e uma equipe voltada a transformar
          áreas verdes com natureza.
        </p>
      </section>

      <section className="home-garden split-editorial">
        <div className="split-editorial__image tall-image">
          <img src={imageBank.greenhouse} alt="Garden center com vasos e plantas ornamentais" />
        </div>
        <div className="split-editorial__copy">
          <p className="kicker">Garden Center</p>
          <h2>Plantas, texturas e materiais para compor ambientes vivos.</h2>
          <p>
            A variedade da Plantart passa por ornamentais, frutíferas,
            hortaliças, orquídeas, arranjos, fertilizantes, substratos, terras e
            seixos decorativos.
          </p>
          <div className="inline-list">
            {productCategories.slice(0, 6).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <Link className="text-link" href="/garden-center">
            Ver categorias
          </Link>
        </div>
      </section>

      <section className="landscape-feature">
        <img src={imageBank.landscapeHero} alt="Jardim contemporâneo integrado à arquitetura residencial" />
        <div>
          <p className="kicker">Paisagismo</p>
          <h2>Transformamos espaços através da natureza.</h2>
          <p>
            O paisagismo ganha destaque como um dos principais diferenciais da
            Plantart: vegetação, materiais naturais e leitura do espaço para
            criar ambientes externos mais sofisticados.
          </p>
          <Link className="btn btn--light" href="/paisagismo">
            Conheça nosso paisagismo
          </Link>
        </div>
      </section>

      <section className="statement-band">
        <p className="kicker">Experiência Plantart</p>
        <h2>
          Um encontro entre curadoria de plantas, materiais de jardinagem e
          paisagismo para Brasília.
        </h2>
      </section>

      <section className="experience-grid">
        <article>
          <span>01</span>
          <h3>Escolha presencial</h3>
          <p>Ambiente para ver espécies, tamanhos, vasos e composições de perto.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Jardinagem completa</h3>
          <p>Substratos, terras, adubos, fertilizantes, sementes e seixos.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Paisagismo</h3>
          <p>Uma frente dedicada a transformar espaços com natureza.</p>
        </article>
      </section>

      <VisitCta />

      <section className="contact-preview">
        <div>
          <p className="kicker">Localização</p>
          <h2>{plantart.addressLine1}</h2>
          <p>
            {plantart.addressLine2}, {plantart.addressLine3}. {plantart.cep}.
          </p>
          <a className="text-link" href={plantart.instagramUrl} target="_blank" rel="noreferrer">
            {plantart.instagram}
          </a>
          <a className="text-link contact-whatsapp-link" href={plantart.whatsappGeneralUrl} target="_blank" rel="noreferrer">
            Fale pelo WhatsApp
          </a>
        </div>
        <MapBlock />
      </section>
    </main>
  );
}
