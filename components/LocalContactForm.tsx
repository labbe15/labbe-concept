"use client";
import { useState } from "react";
import { SERVICES } from "@/lib/data";

type FormState = "idle" | "submitting" | "success" | "error";

export default function LocalContactForm({
  villeName,
  preselectedService,
}: {
  villeName: string;
  preselectedService?: string;
}) {
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
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <p
        className="font-sans text-[15px] py-8 text-center"
        style={{ color: "#5e7b4a" }}
      >
        Votre demande a bien été envoyée, je vous réponds sous 48h.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <input type="hidden" name="ville" value={villeName} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="eyebrow block mb-2 text-[10px]">Prénom</label>
          <input
            type="text"
            name="prenom"
            required
            className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none"
            style={{ borderBottom: "1px solid #d7c8b3" }}
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label className="eyebrow block mb-2 text-[10px]">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            required
            className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none"
            style={{ borderBottom: "1px solid #d7c8b3" }}
            placeholder="06 XX XX XX XX"
          />
        </div>
      </div>

      <div>
        <label className="eyebrow block mb-2 text-[10px]">
          Type de prestation
        </label>
        <select
          name="prestation"
          defaultValue={preselectedService ?? ""}
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

      <div>
        <label className="eyebrow block mb-2 text-[10px]">Votre projet</label>
        <textarea
          name="message"
          rows={3}
          className="w-full font-sans text-[14px] text-dark bg-transparent py-3 focus:outline-none resize-none"
          style={{ borderBottom: "1px solid #d7c8b3" }}
          placeholder="Décrivez votre projet en quelques mots..."
        />
      </div>

      {formState === "error" && (
        <p className="font-sans text-[13px]" style={{ color: "#c0392b" }}>
          Une erreur est survenue. Veuillez réessayer ou appelez le 06 61 70 63 44.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-caramel disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
