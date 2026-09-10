import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Plantart home with brand positioning", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Plantart \| Garden Center &amp; Paisagismo em Brasília/);
  assert.match(html, /Natureza para viver\. Paisagismo para transformar\./);
  assert.match(html, /Garden Center &amp; Paisagismo em Brasília/);
  assert.match(html, /Rodovia DF-001, Quiosque 07/);
  assert.match(html, /@floriculturaplantart/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("renders the main institutional routes", async () => {
  const routes = [
    ["/garden-center", /Garden Center em Vicente Pires/],
    ["/paisagismo", /Projetamos natureza\. Transformamos espaços\./],
    ["/nossos-trabalhos", /Alguns dos nossos trabalhos\./],
    ["/sobre", /Garden Center &amp; Paisagismo com presença consolidada em Brasília\./],
    ["/contato", /Plantart Garden Center &amp; Paisagismo\./],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, expected, pathname);
    assert.match(html, /Home/);
    assert.match(html, /Garden Center/);
    assert.match(html, /Paisagismo/);
    assert.match(html, /Contato/);
  }
});

test("keeps factual boundaries explicit", async () => {
  const page = await readFile(new URL("../app/sobre/page.tsx", import.meta.url), "utf8");
  const data = await readFile(new URL("../app/lib/plantart.ts", import.meta.url), "utf8");

  assert.match(data, /05\.099\.231\/0001-18/);
  assert.match(data, /Setor Habitacional Vicente Pires/);
  assert.doesNotMatch(data, /clientes|projetos|avaliações|preços/i);
  assert.doesNotMatch(page, /razão social|nome fantasia|atividade principal|atividade secundária|CNAE/i);
  assert.match(page, /Há mais de 24 anos, a Plantart faz parte da rotina/);
  assert.match(page, /Não incluímos preços, avaliações ou números\s+de projetos/);
});

test("renders WhatsApp CTAs and real work media", async () => {
  const landscape = await (await render("/paisagismo")).text();
  const portfolio = await (await render("/nossos-trabalhos")).text();
  const contact = await (await render("/contato")).text();

  assert.match(landscape, /wa\.me\/5561984838441/);
  assert.match(landscape, /Solicitar orçamento/);
  assert.match(landscape, /servi%C3%A7o%20de%20paisagismo/);
  assert.match(landscape, /Conheça alguns dos nossos trabalhos/);
  assert.match(landscape, /não representam, necessariamente, trabalhos realizados pela\s+Plantart/);

  assert.match(portfolio, /Portfólio de paisagismo/);
  assert.match(portfolio, /paisagismo-piscina-palmeiras-plantart-tratada\.webp/);
  assert.match(portfolio, /paisagismo-lago-caminho-plantart-tratada\.webp/);
  assert.match(portfolio, /paisagismo-plantart-video-01\.mp4/);
  assert.match(portfolio, /<video/);
  assert.match(portfolio, /preload="metadata"/);
  assert.match(portfolio, /PortfolioLightbox/);
  assert.match(portfolio, /Ampliar imagem/);
  assert.match(portfolio, /solicitar%20um%20or%C3%A7amento/);

  assert.match(contact, /Fale pelo WhatsApp/);
  assert.match(contact, /wa\.me\/5561984838441/);
  assert.match(contact, /\(61\) 98483-8441/);
  assert.doesNotMatch(`${landscape}${portfolio}${contact}`, /5561986560128|98656-0128/);
  assert.match(contact, /application\/ld\+json/);
  assert.match(contact, /Avaliações e rota/);
  assert.match(contact, /floricultura\+plantart\+bras%C3%ADlia/);
  assert.match(contact, /#lrd=0x935a3352cd5459c3:0xc91e2223ace15f3c/);
  assert.doesNotMatch(contact, /★★★★★|5 estrelas|nota média|depoimento/i);
});
