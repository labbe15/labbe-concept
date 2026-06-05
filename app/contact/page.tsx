"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/data";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* Spacer for fixed nav */}
      <div className="h-[68px]" />

      <section className="py-16 md:py-24 bg-white px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left: contact info */}
            <div className="md:pt-4">
              <p className="eyebrow mb-5">Labbe Concept</p>
              <h1
                className="font-serif text-dark leading-tight mb-8"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                Parlons de votre projet
              </h1>
              <p className="font-sans text-[15px] text-dark/70 leading-[1.85] mb-10 max-w-sm">
                Que ce soit pour un remplacement de fenêtres, une pergola sur
                mesure ou l&apos;automatisation de votre portail — je suis
                disponible pour échanger et vous proposer un devis sans
                engagement.
              </p>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="eyebrow mb-1 text-[10px]">Téléphone</p>
                  <a
                    href="tel:+33661706344"
                    className="font-sans text-[16px] text-dark hover:text-caramel transition-colors"
                  >
                    06 61 70 63 44
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-1 text-[10px]">Email</p>
                  <a
                    href="mailto:valentin.labbe15@gmail.com"
                    className="font-sans text-[16px] text-dark hover:text-caramel transition-colors break-all"
                  >
                    valentin.labbe15@gmail.com
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-1 text-[10px]">Adresse</p>
                  <p className="font-sans text-[16px] text-dark">
                    Cahuzac-sur-Vère, Tarn (81)
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-1 text-[10px]">Zone d&apos;intervention</p>
                  <p className="font-sans text-[15px] text-dark/70">
                    60&nbsp;km autour de Cahuzac-sur-Vère
                    <br />
                    Gaillac, Albi, Castres, Cordes-sur-Ciel et alentours
                  </p>
                </div>
              </div>

              <div
                className="mt-10 pt-8"
                style={{ borderTop: "1px solid #d7c8b3" }}
              >
                <p className="font-sans text-[13px] text-dark/50 leading-relaxed">
                  Réponse sous 48&nbsp;heures.
                  <br />
                  Devis gratuit, sans engagement.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {formState === "success" ? (
                <div className="py-16 text-center">
                  <p className="eyebrow mb-4">Message envoyé</p>
                  <h2
                    className="font-serif text-dark mb-4"
                    style={{ fontSize: "36px" }}
                  >
                    Merci pour votre message.
                  </h2>
                  <p
                    className="font-sans text-[15px] leading-relaxed max-w-sm mx-auto"
                    style={{ color: "#5e7b4a" }}
                  >
                    Votre demande a bien été envoyée, je vous réponds sous 48h.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  noValidate
                >
                  {/* Prénom + Nom */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="eyebrow block mb-2 text-[10px]">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        required
                        className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none"
                        style={{ borderBottom: "1px solid #d7c8b3" }}
                        placeholder="Valentin"
                      />
                    </div>
                    <div>
                      <label className="eyebrow block mb-2 text-[10px]">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="nom"
                        required
                        className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none"
                        style={{ borderBottom: "1px solid #d7c8b3" }}
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="eyebrow block mb-2 text-[10px]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none"
                      style={{ borderBottom: "1px solid #d7c8b3" }}
                      placeholder="votre@email.fr"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="eyebrow block mb-2 text-[10px]">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none"
                      style={{ borderBottom: "1px solid #d7c8b3" }}
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  {/* Type de prestation */}
                  <div>
                    <label className="eyebrow block mb-2 text-[10px]">
                      Type de prestation
                    </label>
                    <select
                      name="prestation"
                      className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none appearance-none cursor-pointer"
                      style={{ borderBottom: "1px solid #d7c8b3" }}
                    >
                      <option value="">Choisir une prestation</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="eyebrow block mb-2 text-[10px]">
                      Votre projet
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none resize-none"
                      style={{ borderBottom: "1px solid #d7c8b3" }}
                      placeholder="Décrivez votre projet en quelques mots : type de travaux, surface approximative, délai souhaité..."
                    />
                  </div>

                  {formState === "error" && (
                    <p className="font-sans text-[13px]" style={{ color: "#c0392b" }}>
                      Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn-caramel mt-2 text-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
                  </button>

                  <p className="font-sans text-[11px] text-dark/40 text-center">
                    Vos données ne sont pas partagées. Réponse sous 48&nbsp;h.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
