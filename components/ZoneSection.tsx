import { VILLES } from "@/lib/data";

export default function ZoneSection() {
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="eyebrow mb-4">Zone d&apos;intervention</p>
            <h2
              className="font-serif text-dark leading-tight mb-6"
              style={{ fontSize: "clamp(34px, 3.5vw, 44px)" }}
            >
              Tarn & Occitanie
            </h2>
            <p className="font-sans text-[15px] text-dark leading-[1.8] mb-6">
              Basé à Cahuzac-sur-Vère, j&apos;interviens dans un rayon de 60&nbsp;km
              autour de ma commune, couvrant l&apos;essentiel du département du Tarn
              et les territoires limitrophes. Du Ségala au Lauragais, de la plaine
              de l&apos;Albigeois aux contreforts de la Montagne Noire — chaque
              chantier bénéficie de la même réactivité et du même soin.
            </p>
            <p className="font-sans text-[15px] text-dark leading-[1.8]">
              Pour les projets d&apos;envergure ou les clients fidèles, une
              intervention hors zone peut être envisagée. N&apos;hésitez pas à me
              contacter pour en discuter.
            </p>
          </div>

          {/* Right */}
          <div>
            <p className="eyebrow mb-5">Communes desservies</p>
            <div className="font-sans text-[14px] text-dark/80 leading-loose">
              {VILLES.map((v, i) => (
                <span key={v.slug}>
                  <span className="hover:text-caramel transition-colors cursor-default">
                    {v.name}
                  </span>
                  {i < VILLES.length - 1 && (
                    <span className="text-sand mx-2">·</span>
                  )}
                </span>
              ))}
              <span className="text-dark/40"> — et alentours</span>
            </div>

            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid #d7c8b3" }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p
                    className="font-serif text-dark"
                    style={{ fontSize: "36px" }}
                  >
                    60
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-dark/50 mt-1">
                    km de rayon
                  </p>
                </div>
                <div style={{ borderLeft: "1px solid #d7c8b3" }}>
                  <p
                    className="font-serif text-dark"
                    style={{ fontSize: "36px" }}
                  >
                    12
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-dark/50 mt-1">
                    communes
                  </p>
                </div>
                <div style={{ borderLeft: "1px solid #d7c8b3" }}>
                  <p
                    className="font-serif text-dark"
                    style={{ fontSize: "36px" }}
                  >
                    81
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-dark/50 mt-1">
                    Tarn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
