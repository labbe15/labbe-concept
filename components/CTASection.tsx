import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ height: "500px" }}>
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85"
        alt="Pergola moderne"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="eyebrow mb-5 !text-caramel">Passons à l&apos;action</p>
        <h2
          className="font-serif text-white leading-tight mb-4"
          style={{ fontSize: "clamp(38px, 5vw, 56px)" }}
        >
          Un projet en tête&nbsp;?
        </h2>
        <p
          className="font-sans mb-10 max-w-md"
          style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px" }}
        >
          Devis gratuit, sans engagement.
          <br />
          Réponse sous 48&nbsp;h.
        </p>
        <Link href="/contact" className="btn-caramel" style={{ borderRadius: "2px" }}>
          Nous contacter
        </Link>
      </div>
    </section>
  );
}
