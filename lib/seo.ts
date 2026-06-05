import type { Metadata } from "next";
import { SERVICES, VILLES } from "./data";

export const BASE_URL = "https://labbeconcept.fr";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Labbe Concept — Menuisier Poseur Tarn (81)",
    template: "%s | Labbe Concept",
  },
  description:
    "Artisan menuisier poseur indépendant dans le Tarn. Fenêtres, volets, pergolas, portails, terrasses bois, portes de garage et automatismes. Devis gratuit.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Labbe Concept",
    url: BASE_URL,
    title: "Labbe Concept — Fermetures & Aménagements sur mesure · Tarn (81)",
    description:
      "Artisan menuisier poseur spécialisé en fermetures et aménagements. 15 ans d'expérience dans le Tarn. Gaillac, Albi, Castres et toute l'Occitanie.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Labbe Concept — Menuisier Poseur Tarn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export function generateServiceMetadata(slug: string): Metadata {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} dans le Tarn — Artisan menuisier poseur`,
    description: `${service.description} Labbe Concept, menuisier poseur indépendant dans le Tarn (81). Devis gratuit sans engagement.`,
    alternates: { canonical: `${BASE_URL}/produits/${slug}` },
    openGraph: {
      title: `${service.name} sur mesure · Tarn (81) | Labbe Concept`,
      description: service.description,
      images: [{ url: service.heroImage, width: 1920, alt: service.name }],
    },
  };
}

export function generateLocalMetadata(
  serviceSlug: string,
  villeSlug: string
): Metadata {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const ville = VILLES.find((v) => v.slug === villeSlug);
  if (!service || !ville) return {};
  return {
    title: `${service.name} à ${ville.name} (81) — Menuisier poseur Tarn`,
    description: `Labbe Concept, artisan menuisier poseur, réalise vos projets de ${service.shortName} à ${ville.name} dans le Tarn (81). Devis gratuit, intervention rapide. 15 ans d'expérience.`,
    alternates: {
      canonical: `${BASE_URL}/${serviceSlug}/${villeSlug}`,
    },
    openGraph: {
      title: `${service.name} à ${ville.name} (81) | Labbe Concept`,
      description: `Artisan menuisier poseur spécialisé en ${service.shortName} à ${ville.name}. Devis gratuit sans engagement.`,
      images: [{ url: service.heroImage, width: 1920, alt: service.name }],
    },
  };
}
