export const plantart = {
  legalName: "Floricultura Plantart LTDA",
  brand: "Plantart",
  displayName: "Floricultura Plantart",
  positioning: "Garden Center & Paisagismo",
  city: "Brasília/DF",
  years: "24+",
  cnpj: "05.099.231/0001-18",
  addressLine1: "Rodovia DF-001, Quiosque 07",
  addressLine2: "Setor Habitacional Vicente Pires",
  addressLine3: "Brasília - DF",
  cep: "CEP 72008-001",
  instagram: "@floriculturaplantart",
  instagramUrl: "https://www.instagram.com/floriculturaplantart/",
  whatsappLabel: "(61) 98483-8441",
  whatsappUrl: "https://wa.me/5561984838441",
  whatsappGeneralUrl:
    "https://wa.me/5561984838441?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Plantart%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
  whatsappLandscapeUrl:
    "https://wa.me/5561984838441?text=Ol%C3%A1%21%20Conheci%20o%20servi%C3%A7o%20de%20paisagismo%20da%20Plantart%20pelo%20site%20e%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es.",
  whatsappPortfolioUrl:
    "https://wa.me/5561984838441?text=Ol%C3%A1%21%20Vi%20os%20trabalhos%20de%20paisagismo%20da%20Plantart%20no%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  mapsUrl:
    "https://share.google/mrtUto6kPEnFdCV83",
  googleReviewsUrl:
    "https://www.google.com/search?q=floricultura+plantart+bras%C3%ADlia&rlz=1C5AJCO_enBR1204BR1205&oq=flor&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDkyCAgBEEUYJxg7MgYIAhAjGCcyCggDEAAYkgMYgAQyCggEEAAYkgMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgyNDAxajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x935a3352cd5459c3:0xc91e2223ace15f3c,1,,,,?",
  mapEmbed:
    "https://www.google.com/maps?q=Floricultura%20Plantart%20Rodovia%20DF-001%20Quiosque%2007%20Setor%20Habitacional%20Vicente%20Pires%20Bras%C3%ADlia%20DF%2072008-001&output=embed",
  hours: [
    ["Seg-Sex", "08h às 18h"],
    ["Sáb", "09h às 18h"],
    ["Dom", "09h às 13h"],
  ],
};

export const productCategories = [
  "Ornamentais",
  "Frutíferas",
  "Hortaliças",
  "Orquídeas",
  "Arranjos",
  "Adubos & fertilizantes",
  "Substratos & terras",
  "Seixos decorativos",
];

export const realWorkImages = [
  {
    src: "/trabalhos/paisagismo-piscina-palmeiras-plantart-tratada.webp",
    fallbackSrc: "/trabalhos/paisagismo-piscina-palmeiras-plantart-tratada.jpg",
    originalSrc: "/trabalhos/paisagismo-piscina-palmeiras-plantart.jpg",
    width: 1320,
    height: 675,
    alt: "Trabalho real de paisagismo da Plantart com piscina, deck de madeira, palmeiras e jardim residencial",
    title: "Paisagismo residencial com piscina e palmeiras",
  },
  {
    src: "/trabalhos/paisagismo-lago-caminho-plantart-tratada.webp",
    fallbackSrc: "/trabalhos/paisagismo-lago-caminho-plantart-tratada.jpg",
    originalSrc: "/trabalhos/paisagismo-lago-caminho-plantart.jpg",
    width: 1320,
    height: 1000,
    alt: "Trabalho real de paisagismo da Plantart com lago ornamental, gramado e caminho em placas de pedra",
    title: "Jardim residencial com lago e caminho em pedra",
  },
];

export const realWorkVideos = [
  {
    src: "/trabalhos/paisagismo-plantart-video-01.mp4",
    poster: "/trabalhos/paisagismo-piscina-palmeiras-plantart-tratada.jpg",
    title: "Jardim residencial em vídeo",
  },
  {
    src: "/trabalhos/paisagismo-plantart-video-02.mp4",
    poster: "/trabalhos/paisagismo-lago-caminho-plantart-tratada.jpg",
    title: "Paisagismo e manutenção em área externa",
  },
];

export const beforeAfterItems: Array<{
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
}> = [];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  name: "Plantart",
  legalName: plantart.legalName,
  description: "Garden Center e paisagismo em Brasília/DF.",
  url: "https://floricultura-plantart.victor-rodrigues-ama.chatgpt.site",
  telephone: "+5561984838441",
  sameAs: [plantart.instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rodovia DF-001, Quiosque 07",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "72008-001",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export const imageBank = {
  heroGarden:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2400&q=85",
  tropicalGarden:
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2200&q=85",
  greenhouse:
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1800&q=85",
  foliage:
    "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?auto=format&fit=crop&w=1600&q=85",
  orchard:
    "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1600&q=85",
  orchids:
    "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1600&q=85",
  stones:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=85",
  landscapeHero:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85",
  architectureGarden:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85",
  patio:
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=85",
  texture:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=85",
};
