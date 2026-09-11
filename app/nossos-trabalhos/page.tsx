/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { PortfolioLightbox } from "../components/PortfolioLightbox";
import { plantart, realWorkImages, realWorkVideos } from "../lib/plantart";
import { BreadcrumbJsonLd, pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Trabalhos de paisagismo", description: "Portfólio visual com fotos e vídeos reais de trabalhos de paisagismo da Plantart em Brasília/DF.", path: "/nossos-trabalhos", image: "/trabalhos/paisagismo-piscina-palmeiras-plantart-tratada.webp" });

export default function NossosTrabalhosPage() {
  return (
    <main>
      <section className="work-hero">
        <img
          src={realWorkImages[0].src}
          alt={realWorkImages[0].alt}
          width={realWorkImages[0].width}
          height={realWorkImages[0].height}
        />
        <div className="hero-overlay" />
        <div>
          <p className="kicker">Portfólio de paisagismo</p>
          <h1>Alguns dos nossos trabalhos.</h1>
          <p>
            Registros reais de jardins, áreas externas e manutenção de
            paisagismo realizados pela Plantart.
          </p>
          <a className="btn btn--light" href={plantart.whatsappPortfolioUrl} target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>
        </div>
      </section>
      <BreadcrumbJsonLd items={[{ name: "Início", path: "/" }, { name: "Nossos trabalhos", path: "/nossos-trabalhos" }]} />

      <section className="portfolio-intro">
        <p className="kicker">Trabalhos reais da Plantart</p>
        <h2>Jardins amplos, áreas verdes e paisagismo em escala residencial.</h2>
        <p>
          As mídias abaixo foram fornecidas como registros reais de trabalhos da
          Plantart. Por isso, esta seção assume caráter de portfólio. Não foram
          adicionados nomes de clientes, datas, metragens ou valores.
        </p>
      </section>

      <PortfolioLightbox images={realWorkImages} />

      <section className="before-after-note">
        <p className="kicker">Antes x depois</p>
        <h2>Estrutura preparada para futuros comparativos reais.</h2>
        <p>
          Quando houver pares correspondentes de antes e depois de um mesmo
          trabalho, esta área poderá receber comparativos oficiais sem criar
          interpretações falsas.
        </p>
      </section>

      <section className="video-portfolio">
        <div className="gallery-heading">
          <p className="kicker">Vídeos</p>
          <h2>Paisagismo em movimento.</h2>
          <p>
            Vídeos verticais preservados no formato original, com controles e
            carregamento sob demanda para manter a experiência leve.
          </p>
        </div>
        <div className="video-grid">
          {realWorkVideos.map((item) => (
            <article className="video-card" key={item.src}>
              <video
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                preload="metadata"
              />
              <h2>{item.title}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="landscape-cta">
        <p className="kicker">Plantart Paisagismo</p>
        <h2>Seu próximo jardim começa aqui.</h2>
        <p>
          Fale com a Plantart pelo WhatsApp para solicitar mais informações
          sobre paisagismo.
        </p>
        <a className="btn btn--solid" href={plantart.whatsappPortfolioUrl} target="_blank" rel="noreferrer">
          Solicitar orçamento
        </a>
      </section>
    </main>
  );
}
