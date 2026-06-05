import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable | Labbe Concept",
};

export default function NotFound() {
  return (
    <>
      <div className="h-[68px]" />
      <section className="bg-off-white min-h-[70vh] flex items-center px-6 md:px-16">
        <div className="max-w-7xl mx-auto w-full py-32 md:py-40">
          <p className="eyebrow mb-6">Erreur 404</p>
          <h1
            className="font-serif text-dark leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            Cette page n&apos;existe pas.
          </h1>
          <p className="font-sans text-[15px] text-dark/60 mb-10 max-w-md leading-relaxed">
            La page que vous cherchez a peut-être été déplacée ou supprimée.
          </p>
          <Link href="/" className="btn-caramel">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </>
  );
}
