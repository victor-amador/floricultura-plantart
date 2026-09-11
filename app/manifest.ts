import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Floricultura Plantart",
    short_name: "Plantart",
    description: "Garden Center e paisagismo em Brasília/DF.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#123d2b",
    lang: "pt-BR",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
