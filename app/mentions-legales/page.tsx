import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Labbe Concept",
  description:
    "Mentions légales de Labbe Concept, artisan menuisier poseur indépendant basé à Cahuzac-sur-Vère, Tarn (81).",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2
        className="font-serif text-dark mb-4"
        style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
      >
        {title}
      </h2>
      <div className="font-sans text-[14px] text-dark/70 leading-[1.9] flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="h-[68px]" />
      <section className="py-16 md:py-24 bg-white px-6 md:px-10">
        <div className="max-w-screen-md mx-auto">
          <p className="eyebrow mb-5">Informations légales</p>
          <h1
            className="font-serif text-dark leading-tight mb-14"
            style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
          >
            Mentions légales
          </h1>

          <Section title="Éditeur du site">
            <p>
              <strong className="text-dark font-medium">Valentin Labbé</strong>
              <br />
              Micro-entreprise — Artisan menuisier poseur
              <br />
              Cahuzac-sur-Vère, 81140 Tarn, France
            </p>
            <p>
              Téléphone :{" "}
              <a
                href="tel:+33661706344"
                className="text-dark hover:text-caramel transition-colors"
              >
                06 61 70 63 44
              </a>
            </p>
            <p>
              Email :{" "}
              <a
                href="mailto:valentin.labbe15@gmail.com"
                className="text-dark hover:text-caramel transition-colors"
              >
                valentin.labbe15@gmail.com
              </a>
            </p>
            <p>
              Numéro SIRET : en cours d&apos;immatriculation
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
              <strong className="text-dark font-medium">Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, États-Unis
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-caramel transition-colors"
              >
                vercel.com
              </a>
            </p>
          </Section>

          <Section title="Directeur de la publication">
            <p>Valentin Labbé</p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes,
              logo) est la propriété exclusive de Valentin Labbé ou de ses
              ayants droit. Toute reproduction, représentation, modification ou
              adaptation totale ou partielle des éléments du site est
              strictement interdite sans accord préalable écrit.
            </p>
            <p>
              Les photographies utilisées sont issues de la bibliothèque{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-caramel transition-colors"
              >
                Unsplash
              </a>{" "}
              sous licence libre.
            </p>
          </Section>

          <Section title="Données personnelles">
            <p>
              Les informations recueillies via le formulaire de contact sont
              utilisées uniquement pour répondre à votre demande de devis. Elles
              ne sont pas cédées à des tiers. Conformément à la loi
              Informatique et Libertés et au RGPD, vous disposez d&apos;un droit
              d&apos;accès, de rectification et de suppression de vos données en
              contactant valentin.labbe15@gmail.com.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Ce site n&apos;utilise pas de cookies de traçage ou publicitaires.
              Aucune donnée de navigation n&apos;est collectée à des fins
              commerciales.
            </p>
          </Section>

          <Section title="Limitation de responsabilité">
            <p>
              Labbe Concept s&apos;efforce d&apos;assurer l&apos;exactitude et
              la mise à jour des informations publiées. Toutefois, le site ne
              peut garantir l&apos;exactitude, la complétude ou la pertinence des
              informations fournies. Labbe Concept décline toute responsabilité
              pour les dommages directs ou indirects résultant de
              l&apos;utilisation de ce site.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
