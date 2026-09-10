/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { VisitCta } from "../components/SiteChrome";
import { imageBank, productCategories } from "../lib/plantart";

export const metadata: Metadata = {
  title: "Garden Center em Brasília",
  description:
    "Garden Center em Brasília e Vicente Pires: Plantart reúne plantas ornamentais, frutíferas, hortaliças, orquídeas, arranjos, adubos, substratos, terras e seixos.",
  alternates: {
    canonical: "/garden-center",
  },
  openGraph: {
    title: "Garden Center em Brasília | Plantart",
    description:
      "Plantas em Brasília, produtos para jardinagem e materiais naturais para jardins, vasos e áreas externas.",
    images: ["/og.png"],
  },
};

const categoryNotes = [
  ["Ornamentais", "Folhagens, espécies para vasos, interiores e áreas externas."],
  ["Frutíferas", "Mudas para quem quer aproximar casa, jardim e alimento."],
  ["Hortaliças", "Verde funcional para cultivo doméstico e pequenos espaços."],
  ["Orquídeas", "Presença, textura e delicadeza sem linguagem de floricultura romântica."],
  ["Arranjos", "Composições naturais para ambientes e presentes pontuais."],
  ["Adubos & fertilizantes", "Insumos para nutrição, crescimento e manutenção."],
  ["Substratos & terras", "Base certa para plantio, vasos, canteiros e jardins."],
  ["Seixos decorativos", "Seixos de rio e seixos brancos para acabamento paisagístico."],
];

export default function GardenCenterPage() {
  return (
    <main>
      <section className="sub-hero garden-subhero">
        <img src={imageBank.greenhouse} alt="Vasos e plantas em um garden center iluminado" />
        <div>
          <p className="kicker">Garden Center em Brasília</p>
          <h1>Um repertório vegetal para jardins, casas e projetos.</h1>
          <p>
            A Plantart concentra plantas e materiais de jardinagem para quem
            busca variedade, escolha presencial e uma relação mais próxima com
            a natureza.
          </p>
        </div>
      </section>

      <section className="catalog-editorial">
        <div className="catalog-editorial__lead">
          <p className="kicker">Categorias</p>
          <h2>Da espécie ao acabamento.</h2>
          <p>
            A seleção combina plantas ornamentais, frutíferas, hortaliças,
            orquídeas e insumos essenciais para plantio, manutenção e
            composição de jardins.
          </p>
        </div>
        <div className="catalog-mosaic">
          <figure className="mosaic-large">
            <img src={imageBank.foliage} alt="Folhagens ornamentais em tons de verde profundo" />
            <figcaption>Ornamentais</figcaption>
          </figure>
          <figure>
            <img src={imageBank.orchard} alt="Mudas e plantas frutíferas em área externa" />
            <figcaption>Frutíferas</figcaption>
          </figure>
          <figure>
            <img src={imageBank.orchids} alt="Orquídeas em flor com luz suave" />
            <figcaption>Orquídeas</figcaption>
          </figure>
        </div>
      </section>

      <section className="category-river">
        {categoryNotes.map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="materials-section">
        <img src={imageBank.stones} alt="Pedras naturais e textura de paisagem" />
        <div>
          <p className="kicker">Materiais naturais</p>
          <h2>Substratos, terras, adubos e seixos entram na composição do jardim.</h2>
          <p>
            Um Garden Center completo não termina na planta. A Plantart também
            trabalha com produtos relacionados à jardinagem e acabamentos
            naturais para vasos, canteiros e áreas externas.
          </p>
          <div className="inline-list">
            {productCategories.slice(5).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <VisitCta tone="dark" />

      <section className="final-panel">
        <h2>Venha conhecer a Plantart.</h2>
        <p>
          Para escolher plantas em Brasília, entender proporções e ver materiais
          de perto, a experiência presencial ainda faz diferença.
        </p>
        <Link className="btn btn--solid" href="/contato">
          Endereço e horários
        </Link>
      </section>
    </main>
  );
}
