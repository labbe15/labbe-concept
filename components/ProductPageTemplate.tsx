import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data";

interface Props {
  service: Service;
}

export default function ProductPageTemplate({ service }: Props) {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative" style={{ height: "70vh", minHeight: "500px" }}>
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-14 px-8 md:px-16 text-center">
          <p className="eyebrow mb-4 !text-caramel">Labbe Concept</p>
          <h1
            className="font-serif text-white leading-tight"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {service.name}
          </h1>
        </div>
      </section>

      {/* ── Introduction (text only) ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[720px] mx-auto px-6 md:px-10">
          <p className="eyebrow mb-5">Notre approche</p>
          <h2
            className="font-serif text-dark leading-tight mb-8"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            {service.content.section2Title}
          </h2>
          <p className="font-sans text-[15px] text-dark/80 leading-[1.85] mb-5">
            {service.content.intro}
          </p>
          <p className="font-sans text-[15px] text-dark/80 leading-[1.85] mb-5">
            {service.content.paragraphs[0]}
          </p>
          <p className="font-sans text-[15px] text-dark/80 leading-[1.85]">
            {service.content.paragraphs[1]}
          </p>
        </div>
      </section>

      {/* ── Large visual (breathing room) ────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9" }}>
        <Image
          src={service.heroImage}
          alt={`${service.name} — réalisation Labbe Concept`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* ── Details asymmetric ───────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[3fr_2fr]" style={{ minHeight: "520px" }}>
        {/* Photo */}
        <div className="relative min-h-[300px] md:min-h-0">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        {/* Text */}
        <div className="bg-off-white flex flex-col justify-center px-10 md:px-14 py-14 md:py-20">
          <p className="eyebrow mb-4">Matériaux & Mise en œuvre</p>
          <h3
            className="font-serif text-dark mb-6 leading-tight"
            style={{ fontSize: "clamp(24px, 2.5vw, 32px)" }}
          >
            {service.content.materialsTitle}
          </h3>
          <p className="font-sans text-[14px] text-dark/80 leading-[1.85] mb-6">
            {service.content.paragraphs[2]}
          </p>
          <p className="font-sans text-[14px] text-dark/80 leading-[1.85]">
            {service.content.materialsBody}
          </p>
          <div style={{ marginTop: "40px" }}>
            <Link href="/contact" className="btn-caramel">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-beige text-center px-6">
        <p className="eyebrow mb-4">Gratuit &amp; sans engagement</p>
        <h2
          className="font-serif text-dark leading-tight mb-8"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
        >
          Demandez votre devis gratuit
        </h2>
        <p className="font-sans text-[15px] text-dark/70 mb-10 max-w-md mx-auto">
          Chaque projet est unique. Décrivez-le moi en quelques mots — je vous
          réponds sous 48&nbsp;heures avec une estimation.
        </p>
        <Link href="/contact" className="btn-caramel">
          Nous contacter
        </Link>
      </section>
    </>
  );
}
