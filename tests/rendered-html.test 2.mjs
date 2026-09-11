import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the Plantart home with clear conversion paths", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Plantas, flores e paisagismo para transformar seus ambientes/);
  assert.match(html, /Conheça nossos produtos/);
  assert.match(html, /Fale pelo WhatsApp/);
  assert.match(html, /Rodovia DF-001, Quiosque 07/);
  assert.match(html, /@floriculturaplantart/);
  assert.match(html, /floriculturaplantart\.com\.br/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("renders the main institutional routes", async () => {
  for (const pathname of ["/garden-center", "/paisagismo", "/nossos-trabalhos", "/sobre", "/contato"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /Garden Center|Paisagismo|Plantart/, pathname);
    assert.match(html, /Contato/, pathname);
  }
});

test("keeps factual boundaries explicit", async () => {
  const page = await readFile(new URL("../app/sobre/page.tsx", import.meta.url), "utf8");
  const data = await readFile(new URL("../app/lib/plantart.ts", import.meta.url), "utf8");
  assert.match(data, /05\.099\.231\/0001-18/);
  assert.match(data, /Setor Habitacional Vicente Pires/);
  assert.match(data, /officialUrl: "https:\/\/www\.floriculturaplantart\.com\.br"/);
  assert.doesNotMatch(data, /preços|avaliações|clientes/i);
  assert.match(page, /Há mais de 24 anos/);
});

test("renders WhatsApp CTAs and real work media", async () => {
  const landscape = await (await render("/paisagismo")).text();
  const portfolio = await (await render("/nossos-trabalhos")).text();
  const contact = await (await render("/contato")).text();
  assert.match(landscape, /wa\.me\/5561984838441/);
  assert.match(landscape, /Solicitar orçamento/);
  assert.match(portfolio, /paisagismo-piscina-palmeiras-plantart-tratada\.webp/);
  assert.match(portfolio, /paisagismo-lago-caminho-plantart-tratada\.webp/);
  assert.match(portfolio, /paisagismo-plantart-video-01\.mp4/);
  assert.match(portfolio, /Ampliar imagem/);
  assert.match(contact, /WhatsApp/);
  assert.match(contact, /application\/ld\+json/);
  assert.doesNotMatch(`${landscape}${portfolio}${contact}`, /5561986560128|98656-0128/);
});
