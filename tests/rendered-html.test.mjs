import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import test, { after, before } from "node:test";

const port = Number(process.env.TEST_PORT ?? 3102);
const baseUrl = `http://localhost:${port}`;
let server;

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Next.js production server did not start in time");
}

before(async () => {
  server = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "start", "--", "-p", String(port)], {
    env: { ...process.env, NODE_ENV: "production" },
    stdio: "ignore",
  });
  await waitForServer();
});

after(() => server?.kill("SIGTERM"));

async function render(pathname = "/") {
  const response = await fetch(`${baseUrl}${pathname}`);
  assert.equal(response.status, 200, pathname);
  return response.text();
}

test("server-renders the Plantart home with clear conversion paths", async () => {
  const html = await render("/");
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
    const html = await render(pathname);
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
  const landscape = await render("/paisagismo");
  const portfolio = await render("/nossos-trabalhos");
  const contact = await render("/contato");
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

test("emits crawlable SEO metadata on every public route", async () => {
  for (const pathname of ["/", "/garden-center", "/paisagismo", "/nossos-trabalhos", "/sobre", "/contato"]) {
    const html = await render(pathname);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    assert.equal(canonical, `https://www.floriculturaplantart.com.br${pathname === "/" ? "" : pathname}`);
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, pathname);
    assert.doesNotMatch(html, /name="robots" content="[^"]*noindex/i);
    const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    assert.ok(jsonLdBlocks.length >= 1, pathname);
    for (const [, block] of jsonLdBlocks) assert.doesNotThrow(() => JSON.parse(block), pathname);
  }
});

test("implements the accessible mobile menu behavior", async () => {
  const header = await readFile(new URL("../app/components/SiteChrome.tsx", import.meta.url), "utf8");
  assert.match(header, /useState/);
  assert.match(header, /aria-expanded=\{isMenuOpen\}/);
  assert.match(header, /aria-controls="mobile-navigation"/);
  assert.match(header, /event\.key === "Escape"/);
  assert.match(header, /setMenuPath\(pathname\)/);
  assert.match(header, /onClick=\{\(\) => setMenuOpen\(false\)\}/);
  assert.match(header, /isMenuOpen && <nav/);
});

test("keeps the catalog factual and WhatsApp messages product-specific", async () => {
  const catalog = await readFile(new URL("../app/lib/catalogo.ts", import.meta.url), "utf8");
  const showcase = await readFile(new URL("../app/components/CatalogShowcase.tsx", import.meta.url), "utf8");
  assert.match(catalog, /Kit de jardinagem/);
  assert.match(catalog, /Regador/);
  assert.doesNotMatch(catalog, /Grama|Pá de jardinagem|tesoura|ancinho/i);
  assert.doesNotMatch(catalog, /gramas-pedras-decorativas/);
  assert.match(catalog, /pedras-decorativas/);
  assert.match(showcase, /Olá! Vi \$\{item\.nome\} no site da Plantart/);
  assert.match(showcase, /Imagens ilustrativas/);
  const productEntries = [...catalog.matchAll(/\["([^\"]+)",\s*"(?:plantas-ornamentais|flores-orquideas|mudas-frutiferas|vasos-arranjos|terras-substratos|adubos-fertilizantes|pedras-decorativas|jardinagem)"/g)].map((match) => match[1]);
  assert.equal(productEntries.length, 53);
  assert.equal(new Set(productEntries).size, 53);
  assert.match(catalog, /Imagem ilustrativa da categoria/);
});

test("keeps production image containers visible and the home flow non-repetitive", async () => {
  const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const garden = await readFile(new URL("../app/garden-center/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(home, /feature-image.*width=\{1320\}.*height=\{675\}/s);
  assert.match(home, /work-preview-card.*width=\{item\.width\}.*height=\{item\.height\}/s);
  assert.doesNotMatch(home, /<VisitCta/);
  assert.match(garden, /page-intro-image.*width=\{1713\}.*height=\{918\}/s);
  assert.match(css, /\.feature-image\{position:relative/);
  assert.match(css, /\.work-preview-card img\{position:absolute;inset:0/);
  assert.match(css, /\.page-intro-image\{position:relative/);
  assert.match(css, /@media \(max-width:760px\).*\.footer-grid\{grid-template-columns:1fr\}/s);
});
