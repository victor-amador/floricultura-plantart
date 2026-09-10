"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

type WorkImage = {
  src: string;
  fallbackSrc: string;
  width: number;
  height: number;
  alt: string;
  title: string;
};

export function PortfolioLightbox({ images }: { images: WorkImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("lightbox-open");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("lightbox-open");
    };
  }, [activeIndex]);

  return (
    <>
      <section id="galeria" className="portfolio-grid" aria-label="Galeria de trabalhos reais da Plantart">
        {images.map((item, index) => (
          <button
            className={index === 0 ? "portfolio-item portfolio-item--large" : "portfolio-item"}
            type="button"
            onClick={() => setActiveIndex(index)}
            key={item.src}
            aria-label={`Ampliar imagem: ${item.title}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading={index === 0 ? "eager" : "lazy"}
              width={item.width}
              height={item.height}
            />
            <span>{item.title}</span>
          </button>
        ))}
      </section>

      {activeImage ? (
        <div className="lightbox lightbox--active" role="dialog" aria-modal="true" aria-label={activeImage.title}>
          <button
            className="lightbox__backdrop"
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Fechar imagem ampliada"
          />
          <figure>
            <button className="lightbox__close" type="button" onClick={() => setActiveIndex(null)}>
              Fechar
            </button>
            <img src={activeImage.fallbackSrc} alt={activeImage.alt} width={activeImage.width} height={activeImage.height} />
            <figcaption>{activeImage.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
