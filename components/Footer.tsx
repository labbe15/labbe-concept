import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-20">
        {/* Top: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12 border-b border-white/10">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-[10px] mb-4">
              <Image
                src="/logo.png"
                width={36}
                height={36}
                alt="Labbe Concept"
                className="object-contain"
                unoptimized
              />
              <div>
                <p className="font-sans font-bold text-[13px] tracking-[0.2em] uppercase text-white">
                  LABBE CONCEPT
                </p>
                <p className="font-serif italic text-[12px] text-caramel mt-0.5">
                  Fermetures & Aménagements
                </p>
              </div>
            </div>
            <p className="font-sans text-[14px] leading-relaxed mt-4 max-w-[260px]">
              Artisan menuisier poseur indépendant basé dans le Tarn. Fenêtres,
              volets, pergolas, portails et automatismes — chaque chantier
              traité avec le même niveau d&apos;exigence depuis 2009.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="eyebrow mb-5 !text-white/40">Prestations</p>
            <nav className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/produits/${s.slug}`}
                  className="font-sans text-[13px] text-white/70 hover:text-caramel transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="eyebrow mb-5 !text-white/40">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+33661706344"
                className="font-sans text-[13px] text-white/70 hover:text-caramel transition-colors"
              >
                06 61 70 63 44
              </a>
              <a
                href="mailto:valentin.labbe15@gmail.com"
                className="font-sans text-[13px] text-white/70 hover:text-caramel transition-colors"
              >
                valentin.labbe15@gmail.com
              </a>
              <p className="font-sans text-[13px] text-white/70">
                Cahuzac-sur-Vère, Tarn (81)
              </p>
              <p className="font-sans text-[13px] text-white/70 mt-1">
                Zone&nbsp;: Gaillac, Albi, Castres et 60&nbsp;km autour
              </p>
              <Link
                href="/contact"
                className="btn-caramel inline-block mt-4 !text-[12px] !py-2.5 !px-5"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] font-sans text-white/40">
          <p>© {new Date().getFullYear()} Labbe Concept — Tous droits réservés</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
