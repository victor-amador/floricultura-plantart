export type CatalogProduct = {
  nome: string;
  slug: string;
  categoria: string;
  imagem: string;
  alt: string;
};

const images = {
  ornamentais: "/images/cards/plantas-ornamentais.webp",
  flores: "/images/cards/flores.webp",
  mudas: "/images/cards/mudas-frutiferas.webp",
  vasos: "/images/cards/vasos-arranjos.webp",
  terras: "/images/cards/terras-substratos.webp",
  adubos: "/images/cards/adubos-fertilizantes.webp",
  pedras: "/images/cards/pedras-decorativas.webp",
  jardinagem: "/images/cards/acessorios-jardinagem.webp",
};

const productRows: Array<[string, string, string]> = [
  ["Zamioculca", "plantas-ornamentais", images.ornamentais], ["Espada-de-São-Jorge", "plantas-ornamentais", images.ornamentais], ["Jiboia", "plantas-ornamentais", images.ornamentais], ["Costela-de-adão", "plantas-ornamentais", images.ornamentais], ["Lírio-da-paz", "plantas-ornamentais", images.ornamentais], ["Pacová", "plantas-ornamentais", images.ornamentais], ["Samambaia", "plantas-ornamentais", images.ornamentais], ["Palmeira-ráfis", "plantas-ornamentais", images.ornamentais], ["Croton", "plantas-ornamentais", images.ornamentais], ["Antúrio", "plantas-ornamentais", images.ornamentais],
  ["Orquídea", "flores-orquideas", images.flores], ["Rosa", "flores-orquideas", images.flores], ["Violeta", "flores-orquideas", images.flores], ["Begônia", "flores-orquideas", images.flores], ["Kalanchoe", "flores-orquideas", images.flores], ["Gerânio", "flores-orquideas", images.flores], ["Azaleia", "flores-orquideas", images.flores], ["Margarida", "flores-orquideas", images.flores],
  ["Muda de limão", "mudas-frutiferas", images.mudas], ["Muda de laranja", "mudas-frutiferas", images.mudas], ["Muda de jabuticaba", "mudas-frutiferas", images.mudas], ["Muda de acerola", "mudas-frutiferas", images.mudas], ["Muda de manga", "mudas-frutiferas", images.mudas], ["Muda de pitanga", "mudas-frutiferas", images.mudas], ["Muda de goiaba", "mudas-frutiferas", images.mudas], ["Muda de romã", "mudas-frutiferas", images.mudas],
  ["Vaso de cerâmica", "vasos-arranjos", images.vasos], ["Vaso de cimento", "vasos-arranjos", images.vasos], ["Vaso de plástico", "vasos-arranjos", images.vasos], ["Cachepô", "vasos-arranjos", images.vasos], ["Vaso suspenso", "vasos-arranjos", images.vasos], ["Arranjo de plantas", "vasos-arranjos", images.vasos], ["Arranjo de flores", "vasos-arranjos", images.vasos],
  ["Terra vegetal", "terras-substratos", images.terras], ["Terra adubada", "terras-substratos", images.terras], ["Substrato para plantas", "terras-substratos", images.terras], ["Substrato para orquídeas", "terras-substratos", images.terras], ["Húmus de minhoca", "terras-substratos", images.terras], ["Casca de pinus", "terras-substratos", images.terras], ["Condicionador de solo", "terras-substratos", images.terras],
  ["Adubo orgânico", "adubos-fertilizantes", images.adubos], ["Adubo NPK", "adubos-fertilizantes", images.adubos], ["Fertilizante para flores", "adubos-fertilizantes", images.adubos], ["Fertilizante para folhagens", "adubos-fertilizantes", images.adubos], ["Fertilizante para orquídeas", "adubos-fertilizantes", images.adubos], ["Esterco de gado", "adubos-fertilizantes", images.adubos], ["Esterco de galinha", "adubos-fertilizantes", images.adubos],
  ["Pedra branca", "pedras-decorativas", images.pedras], ["Seixo de rio", "pedras-decorativas", images.pedras], ["Argila expandida", "pedras-decorativas", images.pedras], ["Pedrisco decorativo", "pedras-decorativas", images.pedras],
  ["Kit de jardinagem", "jardinagem", images.jardinagem], ["Regador", "jardinagem", images.jardinagem],
];

function slugify(value: string) { return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

export const catalogo: CatalogProduct[] = productRows.map(([nome, categoria, imagem]) => ({ nome, slug: slugify(nome), categoria, imagem, alt: `${nome}, imagem ilustrativa de categoria para jardinagem` }));
