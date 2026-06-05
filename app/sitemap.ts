import { MetadataRoute } from "next";
import { SERVICES, VILLES } from "@/lib/data";

const BASE = "https://labbeconcept.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/produits`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/realisations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/produits/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const localPages: MetadataRoute.Sitemap = SERVICES.flatMap((s) =>
    VILLES.map((v) => ({
      url: `${BASE}/${s.slug}/${v.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  );

  return [...staticPages, ...servicePages, ...localPages];
}
