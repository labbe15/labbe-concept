import Image from "next/image";
import Link from "next/link";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProductGrid from "@/components/ProductGrid";
import RealisationsLayout from "@/components/RealisationsLayout";
import ZoneSection from "@/components/ZoneSection";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <>
      {/* ── INTRO OVERLAY (CSS-only, SSR-safe) ───────────────── */}
      <div className="intro-overlay" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" className="intro-logo" alt="" />
        <div style={{ textAlign: "center" }}>
          <div className="intro-title">LABBE CONCEPT</div>
          <div className="intro-tagline">Fermetures &amp; Aménagements</div>
        </div>
      </div>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative" style={{ height: "100svh", minHeight: "600px" }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
          alt="Maison contemporaine avec fenêtres aluminium"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Bottom-left content */}
        <div className="absolute bottom-16 left-8 md:left-16 max-w-[640px]">
          <p className="eyebrow mb-5 !text-caramel !text-[13px]">
            Menuisier poseur · Tarn (81)
          </p>
          <h1
            className="font-serif text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
          >
            L&apos;habitat qu&apos;il{" "}
            <em>mérite.</em>
          </h1>
          <p
            className="font-sans mb-8 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px" }}
          >
            Fermetures &amp; Aménagements
            <br />
            sur mesure depuis 2009.
          </p>
          <Link href="/realisations" className="btn-ghost">
            Découvrir nos réalisations
          </Link>
        </div>

        {/* Bottom-right scroll indicator */}
        <div className="absolute bottom-12 right-8 md:right-16 flex flex-col items-center gap-2 animate-float">
          <span
            className="font-sans"
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.7)",
              writingMode: "vertical-rl",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Découvrir
          </span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px" }}>
            ↓
          </span>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────── */}
      <FadeUp>
        <MarqueeTicker />
      </FadeUp>

      {/* ── PRÉSENTATION ASYMÉTRIQUE ─────────────────────────── */}
      <FadeUp>
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left: tall vertical photo */}
            <div
              className="md:w-[45%] flex-none relative"
              style={{ minHeight: "580px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85"
                alt="Maison contemporaine avec grandes baies vitrées"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>

            {/* Right: text */}
            <div className="md:w-[55%] flex items-center px-10 md:px-14 lg:px-16 py-16 md:py-12">
              <div className="max-w-[480px]">
                <p className="eyebrow mb-5">Notre savoir-faire</p>
                <h2
                  className="font-serif text-dark leading-tight mb-6"
                  style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
                >
                  15 ans de pose.
                  <br />
                  Un résultat à la hauteur.
                </h2>
                <p className="font-sans text-[15px] text-dark/80 leading-[1.85] mb-4">
                  Artisan menuisier poseur indépendant basé dans le Tarn,
                  j&apos;interviens sur l&apos;ensemble de vos projets de
                  fermetures et d&apos;aménagements extérieurs.
                </p>
                <p className="font-sans text-[15px] text-dark/80 leading-[1.85] mb-10">
                  Du premier contact à la finition, chaque chantier est traité
                  avec le même niveau d&apos;exigence — quel que soit le budget,
                  quel que soit le délai.
                </p>

                {/* Stats */}
                <div
                  className="flex items-center"
                  style={{ borderTop: "1px solid #d7c8b3", paddingTop: "28px" }}
                >
                  <div className="flex-1 text-center pr-4">
                    <p
                      className="font-serif text-dark"
                      style={{ fontSize: "36px", lineHeight: 1 }}
                    >
                      15
                    </p>
                    <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-dark/50 mt-2">
                      ans d&apos;expérience
                    </p>
                  </div>
                  <div
                    className="flex-1 text-center px-4"
                    style={{ borderLeft: "1px solid #d7c8b3" }}
                  >
                    <p
                      className="font-serif text-dark"
                      style={{ fontSize: "36px", lineHeight: 1 }}
                    >
                      500+
                    </p>
                    <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-dark/50 mt-2">
                      chantiers
                    </p>
                  </div>
                  <div
                    className="flex-1 text-center pl-4"
                    style={{ borderLeft: "1px solid #d7c8b3" }}
                  >
                    <p
                      className="font-serif text-dark"
                      style={{ fontSize: "36px", lineHeight: 1 }}
                    >
                      Tarn
                    </p>
                    <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-dark/50 mt-2">
                      &amp; Occitanie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeUp>

      {/* ── PRODUCT GRID ─────────────────────────────────────── */}
      <FadeUp>
        <ProductGrid />
      </FadeUp>

      {/* ── RÉALISATIONS ÉDITORIALES ─────────────────────────── */}
      <FadeUp>
        <RealisationsLayout />
      </FadeUp>

      {/* ── ZONE D'INTERVENTION ──────────────────────────────── */}
      <FadeUp>
        <ZoneSection />
      </FadeUp>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <FadeUp>
        <CTASection />
      </FadeUp>
    </>
  );
}
