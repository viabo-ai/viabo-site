import type { MetadataRoute } from "next";
import { sectors, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/how-it-works",
    "/solutions",
    "/solutions/lifecycle",
    ...sectors.map((s) => `/solutions/${s.slug}`),
    "/partners",
    "/advisory",
    "/contactus",
    "/privacy",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
