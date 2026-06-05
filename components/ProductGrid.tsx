import Image from "next/image";
import Link from "next/link";

const GRID_ITEMS = [
  {
    slug: "fenetres-et-portes",
    name: "Fenêtres & Portes",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
  },
  {
    slug: "pergolas-et-verandas",
    name: "Pergolas & Vérandas",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
  },
  {
    slug: "volets-et-stores",
    name: "Volets & Stores",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=85",
  },
  {
    slug: "terrasses-bois",
    name: "Terrasses Bois",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=85",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4">Ce que nous faisons</p>
          <h2
            className="font-serif text-dark leading-tight"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            Nos univers
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GRID_ITEMS.map((item) => (
            <Link
              key={item.slug}
              href={`/produits/${item.slug}`}
              className="group relative block overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Photo */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-white text-[26px] md:text-[28px] leading-tight">
                  {item.name}
                </h3>
                <span className="inline-block mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-white/70 transition-colors group-hover:text-caramel">
                  Découvrir →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* All services link */}
        <div className="text-center mt-10">
          <Link
            href="/produits"
            className="font-sans text-[13px] text-caramel hover:underline underline-offset-4 tracking-wide"
          >
            Toutes nos prestations →
          </Link>
        </div>
      </div>
    </section>
  );
}
