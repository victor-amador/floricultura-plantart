/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { imageBank, plantart } from "../lib/plantart";

export const metadata: Metadata = {
  title: "Sobre a Plantart",
  description:
    "Conheça a Plantart, Garden Center & Paisagismo em Brasília/DF com mais de 24 anos de atuação e sede em Vicente Pires.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre a Plantart",
    description:
      "A Plantart reúne Garden Center, plantas, jardinagem e paisagismo em Brasília há mais de 24 anos.",
    images: ["/og.png"],
  },
};

export default function SobrePage() {
  return (
    <main>
      <section className="about-hero">
        <div>
          <p className="kicker">Sobre a Plantart</p>
          <h1>Garden Center & Paisagismo com presença consolidada em Brasília.</h1>
        </div>
        <img src={imageBank.foliage} alt="Folhagens ornamentais em composição natural" />
      </section>

      <section className="about-facts">
        <div className="fact-xl">
          <span>{plantart.years}</span>
          <p>anos cultivando uma história em Brasília.</p>
        </div>
        <div>
          <p>
            Há mais de 24 anos, a Plantart faz parte da rotina de quem busca
            mais verde para casas, jardins e espaços em Brasília.
          </p>
          <p>
            Ao longo dessa trajetória, reunimos no Garden Center uma ampla
            variedade de plantas e soluções para jardinagem, além de uma equipe
            dedicada ao paisagismo.
          </p>
          <p>
            Hoje, Garden Center e Paisagismo caminham juntos na Plantart: seja
            para escolher uma nova planta, cuidar do jardim ou transformar um
            ambiente através da natureza.
          </p>
        </div>
      </section>

      <section className="values-editorial">
        <article>
          <h2>Plantas</h2>
          <p>Ornamentais, frutíferas, hortaliças, orquídeas e arranjos.</p>
        </article>
        <article>
          <h2>Jardinagem</h2>
          <p>Substratos, terras, adubos, fertilizantes e seixos decorativos.</p>
        </article>
        <article>
          <h2>Paisagismo</h2>
          <p>Uma frente dedicada a transformar ambientes externos com natureza.</p>
        </article>
      </section>

      <section className="source-note">
        <p className="kicker">Plantart em Brasília</p>
        <h2>Uma presença construída com plantas, jardins e atendimento próximo.</h2>
        <p>
          O site apresenta apenas informações confirmadas sobre a Plantart:
          atuação em Brasília, endereço, horários, Garden Center, produtos de
          jardinagem e paisagismo. Não incluímos preços, avaliações ou números
          de projetos sem confirmação oficial.
        </p>
        <Link className="btn btn--solid" href="/contato">
          Visitar a Plantart
        </Link>
      </section>
    </main>
  );
}
