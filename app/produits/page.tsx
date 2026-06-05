import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Prestations | Labbe Concept — Menuisier Poseur Tarn (81)",
  description:
    "Fenêtres, volets, pergolas, portails, escaliers, portes de garage, terrasses bois et automatismes. Découvrez les 8 univers de Labbe Concept, artisan menuisier poseur dans le Tarn.",
};

export default function ProduitsPage() {
  return (
    <>
      {/* ── EN-TÊTE ─────────────────────────────────────────── */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-5">Ce que nous faisons</p>
          <h1
            className="font-serif text-dark leading-tight"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            Nos prestations
          </h1>
          <p className="font-sans text-[15px] text-dark/70 mt-4 max-w-[560px] leading-[1.85]">
            De la fenêtre à la terrasse, chaque prestation est réalisée sur
            mesure par Valentin Labbé, artisan menuisier poseur indépendant
            basé dans le Tarn.
          </p>
        </div>
      </section>

      {/* ── GRILLE DES 8 UNIVERS ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/produits/${service.slug}`}
                className="group relative block overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={service.heroImage.replace("w=1920", "w=800")}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="font-serif text-white text-[24px] leading-tight">
                    {service.name}
                  </h2>
                  <p className="mt-2 font-sans text-[12px] text-white/65 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-block mt-3 font-sans text-[11px] uppercase tracking-[0.14em] text-white/60 transition-colors duration-300 group-hover:text-caramel">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
