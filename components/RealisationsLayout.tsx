import Image from "next/image";
import Link from "next/link";

const PHOTOS = {
  largeLeft: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    caption: "Fenêtres aluminium triple vitrage · Albi · 2024",
    alt: "Fenêtres aluminium",
  },
  topRight: {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
    caption: "Pergola bioclimatique · Cordes-sur-Ciel · 2024",
    alt: "Pergola aluminium",
  },
  bottomRight: {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=85",
    caption: "Portail aluminium coulissant · Castres · 2024",
    alt: "Portail aluminium",
  },
  cinematic: {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=85",
    caption: "Terrasse bois ipé · Cahuzac-sur-Vère · 2023",
    alt: "Terrasse bois",
  },
};

export default function RealisationsLayout() {
  return (
    <section className="pt-20 md:pt-28 pb-10 md:pb-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="eyebrow mb-4">Portfolio</p>
          <h2
            className="font-serif text-dark leading-tight"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            Quelques réalisations
          </h2>
        </div>

        {/* Row 1: Large left (65%) + Two stacked right (35%) */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Large left */}
          <div className="md:w-[65%] flex-none">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src={PHOTOS.largeLeft.src}
                alt={PHOTOS.largeLeft.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 65vw"
              />
            </div>
            <p className="mt-2.5 font-sans text-[12px] text-dark/50 tracking-wide">
              {PHOTOS.largeLeft.caption}
            </p>
          </div>

          {/* Two stacked right */}
          <div className="md:w-[35%] flex flex-col gap-4">
            <div>
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={PHOTOS.topRight.src}
                  alt={PHOTOS.topRight.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <p className="mt-2.5 font-sans text-[12px] text-dark/50 tracking-wide">
                {PHOTOS.topRight.caption}
              </p>
            </div>
            <div>
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={PHOTOS.bottomRight.src}
                  alt={PHOTOS.bottomRight.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <p className="mt-2.5 font-sans text-[12px] text-dark/50 tracking-wide">
                {PHOTOS.bottomRight.caption}
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Full-width cinematic */}
        <div className="mb-4">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <Image
              src={PHOTOS.cinematic.src}
              alt={PHOTOS.cinematic.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="mt-2.5 font-sans text-[12px] text-dark/50 tracking-wide">
            {PHOTOS.cinematic.caption}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/realisations"
            className="font-sans text-[13px] text-caramel hover:underline underline-offset-4 tracking-wide"
          >
            Voir toutes les réalisations →
          </Link>
        </div>
      </div>
    </section>
  );
}
