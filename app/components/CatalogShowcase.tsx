"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { catalogo } from "../lib/catalogo";
import { plantart, productCategories } from "../lib/plantart";

export function CatalogShowcase() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(() => {
    if (typeof window === "undefined") return "todas";
    const selected = new URLSearchParams(window.location.search).get("categoria");
    return selected && productCategories.some((item) => item.slug === selected) ? selected : "todas";
  });
  const products = useMemo(() => catalogo.filter((item) => (category === "todas" || item.categoria === category) && item.nome.toLocaleLowerCase("pt-BR").includes(query.trim().toLocaleLowerCase("pt-BR"))), [category, query]);
  function clearFilters() { setQuery(""); setCategory("todas"); window.history.replaceState({}, "", "/garden-center"); }
  return <section className="catalog-showcase" aria-labelledby="catalog-title"><div className="section-heading catalog-showcase__heading"><div><p className="eyebrow">Vitrine Garden Center</p><h2 id="catalog-title">Opções para cuidar do seu jardim.</h2></div><p className="catalog-notice">Imagens ilustrativas. Produtos, tamanhos, valores e disponibilidade podem variar. Consulte nossa equipe pelo WhatsApp.</p></div><div className="catalog-controls"><label>Buscar por nome<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: orquídea" /></label><label>Filtrar por categoria<select value={category} onChange={(event) => setCategory(event.target.value)}><option value="todas">Todas as categorias</option>{productCategories.map((item) => <option value={item.slug} key={item.slug}>{item.name}</option>)}</select></label><button className="btn btn--outline" type="button" onClick={clearFilters}>Limpar filtro</button></div><p className="catalog-result-count" aria-live="polite">{products.length} {products.length === 1 ? "opção encontrada" : "opções encontradas"}</p>{products.length > 0 ? <div className="catalog-product-grid">{products.map((item) => <article className="showcase-card" key={item.slug}><Image src={item.imagem} alt={item.alt} width={720} height={480} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" /><div className="showcase-card__body"><h3>{item.nome}</h3><a className="btn btn--primary" href={`${plantart.whatsappUrl}?text=${encodeURIComponent(`Olá! Vi ${item.nome} no site da Plantart e gostaria de consultar o valor e a disponibilidade.`)}`} target="_blank" rel="noreferrer">Consultar no WhatsApp</a></div></article>)}</div> : <div className="catalog-empty"><h3>Nenhum produto encontrado.</h3><p>Tente outro nome ou limpe o filtro para ver todas as opções.</p><button className="btn btn--outline" type="button" onClick={clearFilters}>Ver todas as opções</button></div>}</section>;
}
