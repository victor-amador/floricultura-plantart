import type { MetadataRoute } from "next";
import { plantart } from "./lib/plantart";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: `${plantart.officialUrl}/sitemap.xml` }; }
