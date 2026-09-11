import type { MetadataRoute } from "next";
import { plantart } from "./lib/plantart";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/garden-center", "/paisagismo", "/nossos-trabalhos", "/sobre", "/contato"].map((path) => ({ url: `${plantart.officialUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 })); }
