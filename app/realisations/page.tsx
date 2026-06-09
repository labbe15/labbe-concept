import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Réalisations — Menuisier poseur Tarn (81)",
  description:
    "Découvrez les réalisations de Labbe Concept : fenêtres, pergolas, portails, terrasses bois et automatismes dans le Tarn. Photos de chantiers récents.",
};

const PROJECTS = [
  {
    type: "full",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    caption: "Pergola bioclimatique aluminium à lames orientables",
    location: "Albi",
    year: "2024",
    service: "Pergolas & Vérandas",
  },
  {
    type: "split",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    caption: "Pose de fenêtres aluminium triple vitrage",
    location: "Gaillac",
    year: "2024",
    service: "Fenêtres & Portes",
    description:
      "Remplacement complet des châssis d'un pavillon des années 80. Pose de fenêtres aluminium en triple vitrage, amélioration énergétique notable du logement. L'intervention a duré 3 jours pour 14 ouvertures. Finitions intérieures et extérieures soignées, seuils aluminium anodisé bronze.",
  },
  {
    type: "cinematic",
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=85",
    caption: "Terrasse en bois ipé avec escalier d'accès",
    location: "Cahuzac-sur-Vère",
    year: "2023",
    service: "Terrasses Bois",
  },
  {
    type: "split",
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85",
    caption: "Portail aluminium coulissant motorisé CAME",
    location: "Castres",
    year: "2024",
    service: "Portails & Clôtures",
    description:
      "Portail coulissant en aluminium laqué RAL 7016 (gris anthracite), lames pleines 80mm. Motorisation CAME BX-78 avec télécommande 4 canaux, badge RFID et clavier à code. Portillon intégré motorisé. Interphone vidéo couleur encastré dans le pilier béton. Clôture aluminium assortie sur 40 mètres linéaires.",
  },
  {
    type: "full",
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1920&q=85",
    caption: "Volets roulants motorisés Somfy",
    location: "Rabastens",
    year: "2023",
    service: "Volets & Stores",
  },
  {
    type: "split",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
    caption: "Pergola adossée avec éclairage LED intégré",
    location: "Cordes-sur-Ciel",
    year: "2024",
    service: "Pergolas & Vérandas",
    description:
      "Pergola aluminium adossée à la maison, 6m × 4m, lames 120mm orientables motorisées Somfy. Éclairage LED RVB intégré dans les poteaux et les lames. Stores zip latéraux pour une fermeture complète. Gouttières intégrées dans les poteaux avec évacuation vers le réseau existant. Teinte RAL 7016 pour s'harmoniser avec les menuiseries de la maison.",
  },
  {
    type: "cinematic",
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=85",
    caption: "Porte de garage sectionnelle en aluminium nervuré",
    location: "Mazamet",
    year: "2023",
    service: "Portes de Garage",
  },
  {
    type: "split",
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=85",
    caption: "Escalier bois-métal sur mesure",
    location: "Lavaur",
    year: "2024",
    service: "Escaliers",
    description:
      "Escalier quart tournant avec double limon en acier laqué noir mat et marches en chêne massif huilé naturel. Garde-corps en acier thermolaqué avec main-courante en inox brossé. Hauteur sous plafond 2m80, 14 marches. Pose en 2 jours, finitions et calage inclus. Conforme NF P01-012.",
  },
];

export default function RealisationsPage() {
  return (
    <>
      {/* ── Minimal Hero ─────────────────────────────────────── */}
      <section className="pt-40 pb-20 bg-off-white px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <p className="eyebrow mb-5">Portfolio</p>
          <h1
            className="font-serif text-dark leading-[0.95]"
            style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
          >
            Réalisations
          </h1>
          <p className="font-sans text-[15px] text-dark/60 mt-6 max-w-xl leading-relaxed">
            Une sélection de chantiers récents — fenêtres, pergolas, portails,
            terrasses et automatismes dans le Tarn et l&apos;Occitanie.
          </p>
        </div>
      </section>

      {/* ── Projects editorial list ───────────────────────────── */}
      <div className="bg-white">
        {PROJECTS.map((project, i) => {
          if (project.type === "full") {
            return (
              <div key={i} className="py-6 px-6 md:px-10 max-w-screen-xl mx-auto">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={project.src}
                    alt={project.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <p className="font-sans text-[12px] text-dark/50 tracking-wide">
                    {project.caption}
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-caramel flex-none ml-6">
                    {project.location} · {project.year}
                  </p>
                </div>
              </div>
            );
          }

          if (project.type === "cinematic") {
            return (
              <div key={i} className="py-6 px-6 md:px-10 max-w-screen-xl mx-auto">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9" }}>
                  <Image
                    src={project.src}
                    alt={project.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <p className="font-sans text-[12px] text-dark/50 tracking-wide">
                    {project.caption}
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-caramel flex-none ml-6">
                    {project.location} · {project.year}
                  </p>
                </div>
              </div>
            );
          }

          // type === "split"
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`py-16 px-6 md:px-10 max-w-screen-xl mx-auto flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 md:gap-16 items-center`}
            >
              {/* Photo */}
              <div
                className="w-full md:w-[60%] flex-none relative"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={project.src}
                  alt={project.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              {/* Text */}
              <div className="md:w-[40%]">
                <p className="eyebrow mb-3">{project.service}</p>
                <h3
                  className="font-serif text-dark leading-tight mb-2"
                  style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
                >
                  {project.caption}
                </h3>
                <p className="font-sans text-[12px] uppercase tracking-[0.14em] text-caramel mb-5">
                  {project.location} · {project.year}
                </p>
                {project.description && (
                  <p className="font-sans text-[14px] text-dark/70 leading-[1.85]">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-beige text-center px-6">
        <p className="eyebrow mb-4">Votre projet</p>
        <h2
          className="font-serif text-dark leading-tight mb-8"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
        >
          Votre maison mérite le même soin.
        </h2>
        <Link href="/contact" className="btn-caramel">
          Demander un devis gratuit
        </Link>
      </section>
    </>
  );
}
