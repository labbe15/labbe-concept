import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES, VILLES } from "@/lib/data";
import { generateLocalMetadata } from "@/lib/seo";

type Params = Promise<{ service: string; ville: string }>;

export async function generateStaticParams() {
  return SERVICES.flatMap((service) =>
    VILLES.map((ville) => ({
      service: service.slug,
      ville: ville.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { service, ville } = await params;
  return generateLocalMetadata(service, ville);
}

export default async function LocalPage({ params }: { params: Params }) {
  const { service: serviceSlug, ville: villeSlug } = await params;

  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const ville = VILLES.find((v) => v.slug === villeSlug);

  if (!service || !ville) notFound();

  // Nearby cities (exclude current ville)
  const nearbyCities = VILLES.filter((v) => v.slug !== ville.slug).slice(0, 6);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Labbe Concept",
        description: `Artisan menuisier poseur spécialisé en ${service.shortName} à ${ville.name} dans le Tarn (81)`,
        telephone: "+33661706344",
        email: "valentin.labbe15@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cahuzac-sur-Vère",
          postalCode: "81140",
          addressCountry: "FR",
        },
        areaServed: ville.name,
        url: `https://labbeconcept.fr/${serviceSlug}/${villeSlug}`,
      },
      {
        "@type": "Service",
        name: `${service.name} à ${ville.name}`,
        provider: { "@type": "LocalBusiness", name: "Labbe Concept" },
        areaServed: ville.name,
        description: service.description,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Spacer for fixed nav */}
      <div className="h-[68px]" />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative" style={{ height: "50vh", minHeight: "380px" }}>
        <Image
          src={service.heroImage}
          alt={`${service.name} à ${ville.name}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="absolute bottom-10 left-8 md:left-14">
          <p className="eyebrow mb-3 !text-caramel">
            {ville.name} · Tarn ({ville.dept})
          </p>
          <h1
            className="font-serif text-white leading-tight"
            style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
          >
            {service.name} à {ville.name}
          </h1>
          <p className="font-sans mt-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>
            Artisan menuisier poseur — Tarn (81)
          </p>
        </div>
      </section>

      {/* ── Intro text ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-[720px]">
            <p className="eyebrow mb-5">Labbe Concept à {ville.name}</p>
            <h2
              className="font-serif text-dark leading-tight mb-7"
              style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
            >
              {service.name} à {ville.name} (81) — Artisan menuisier
            </h2>

            <div className="font-sans text-[15px] text-dark/80 leading-[1.85] space-y-5">
              <p>
                Vous recherchez un artisan pour vos travaux de{" "}
                {service.shortName} à {ville.name}&nbsp;? Labbe Concept,
                entreprise artisanale indépendante basée à Cahuzac-sur-Vère dans
                le Tarn, intervient régulièrement à {ville.name} et dans les
                communes environnantes pour l&apos;ensemble de vos projets de
                fermetures et d&apos;aménagements extérieurs.
              </p>
              <p>
                Valentin Labbé, menuisier poseur depuis 2009, réalise vos
                chantiers de {service.shortName} avec le même niveau
                d&apos;exigence à {ville.name} qu&apos;ailleurs dans le
                département. Chaque intervention débute par un rendez-vous de
                diagnostic gratuit sur place — relevé de cotes, analyse des
                contraintes techniques, conseil sur les matériaux et les gammes
                les mieux adaptées à votre projet et à votre budget.
              </p>
              <p>
                {service.description} À {ville.name}, les contraintes
                climatiques du Tarn — ensoleillement intense en été, vents
                d&apos;autan, gel en hiver — guident le choix des matériaux et
                des techniques de pose pour garantir durabilité et performance
                thermique sur le long terme.
              </p>
              <p>
                Devis gratuit et sans engagement, réponse sous 48&nbsp;heures.
                Labbe Concept s&apos;engage sur la qualité de la pose, le
                respect des délais et la propreté de chantier. Chaque
                réalisation à {ville.name} bénéficie de la garantie décennale
                de l&apos;entreprise et des garanties fabricant sur les produits
                fournis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service details ──────────────────────────────────── */}
      <section className="py-12 bg-off-white px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="eyebrow mb-4">Notre prestation</p>
              <h3
                className="font-serif text-dark leading-tight mb-5"
                style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
              >
                {service.content.section2Title}
              </h3>
              <p className="font-sans text-[14px] text-dark/75 leading-[1.85]">
                {service.content.paragraphs[0]}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Matériaux & Options</p>
              <p className="font-sans text-[14px] text-dark/75 leading-[1.85]">
                {service.content.materialsBody}
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-caramel">
                  Devis gratuit à {ville.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nearby cities ────────────────────────────────────── */}
      <section className="py-12 bg-white px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <p className="eyebrow mb-5">Zone d&apos;intervention</p>
          <p className="font-sans text-[14px] text-dark/60 mb-6">
            Labbe Concept intervient également pour vos projets de{" "}
            {service.shortName} dans les communes voisines&nbsp;:
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${service.slug}/${c.slug}`}
                className="font-sans text-[13px] text-dark hover:text-caramel transition-colors"
              >
                {service.name} à {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-14 bg-beige text-center px-6">
        <p className="eyebrow mb-3">Gratuit &amp; sans engagement</p>
        <h2
          className="font-serif text-dark leading-tight mb-6"
          style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
        >
          Un projet de {service.shortName} à {ville.name}&nbsp;?
        </h2>
        <p className="font-sans text-[14px] text-dark/60 mb-8 max-w-sm mx-auto">
          Contactez-moi pour un devis gratuit — réponse sous 48&nbsp;heures.
        </p>
        <Link href="/contact" className="btn-caramel">
          Demander un devis
        </Link>
      </section>
    </>
  );
}
