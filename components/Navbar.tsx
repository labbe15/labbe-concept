"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isLight = scrolled || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLight
            ? "bg-white"
            : "bg-transparent"
        }`}
        style={{
          boxShadow: isLight ? "0 1px 0 #d7c8b3" : "none",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-[10px]" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Labbe Concept"
              className="object-contain"
            />
            <div className="flex flex-col gap-0.5 leading-none">
              <span
                className={`font-sans font-bold text-[16px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isLight ? "text-dark" : "text-white"
                }`}
              >
                LABBE CONCEPT
              </span>
              <span className="font-serif italic text-[12px] text-caramel">
                Fermetures & Aménagements
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`text-[13px] font-sans transition-colors duration-200 cursor-pointer ${
                  isLight
                    ? "text-dark hover:text-warm-green"
                    : "text-white/90 hover:text-warm-green"
                }`}
              >
                Services
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[420px] transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-1"
                }`}
              >
                <div
                  className="bg-white grid grid-cols-2 gap-px"
                  style={{ border: "1px solid #d7c8b3" }}
                >
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/produits/${s.slug}`}
                      className="px-5 py-3.5 text-[13px] font-sans text-dark hover:text-caramel hover:bg-off-white transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/realisations"
              className={`text-[13px] font-sans transition-colors duration-200 ${
                isLight
                  ? "text-dark hover:text-warm-green"
                  : "text-white/90 hover:text-warm-green"
              }`}
            >
              Réalisations
            </Link>

            <Link
              href="/contact"
              className={`text-[13px] font-sans transition-colors duration-200 ${
                isLight
                  ? "text-dark hover:text-warm-green"
                  : "text-white/90 hover:text-warm-green"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="btn-caramel !text-[12px] !py-2.5 !px-5"
              style={{ letterSpacing: "0.08em" }}
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className={`block h-px transition-all duration-300 ${
                isLight ? "bg-dark" : "bg-white"
              } ${mobileOpen ? "w-6 translate-y-[6px] rotate-45" : "w-6"}`}
            />
            <span
              className={`block h-px transition-all duration-300 ${
                isLight ? "bg-dark" : "bg-white"
              } ${mobileOpen ? "opacity-0 w-0" : "w-4"}`}
            />
            <span
              className={`block h-px transition-all duration-300 ${
                isLight ? "bg-dark" : "bg-white"
              } ${mobileOpen ? "w-6 -translate-y-[6px] -rotate-45" : "w-6"}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col pt-24 pb-16 px-8 gap-0">
          {/* Services */}
          <div className="mb-8">
            <p className="eyebrow mb-5">Nos services</p>
            <div className="flex flex-col gap-1">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/produits/${s.slug}`}
                  className="font-serif text-[22px] text-dark py-1.5 hover:text-caramel transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="w-10 mb-8"
            style={{ height: "1px", background: "#d7c8b3" }}
          />

          <Link
            href="/realisations"
            className="font-serif text-[22px] text-dark py-1.5 hover:text-caramel transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Réalisations
          </Link>
          <Link
            href="/contact"
            className="font-serif text-[22px] text-dark py-1.5 hover:text-caramel transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="btn-caramel text-center mt-10"
            onClick={() => setMobileOpen(false)}
          >
            Devis gratuit, sans engagement
          </Link>

          <div className="mt-10">
            <p className="font-sans text-[13px] text-dark/60">
              06 61 70 63 44
            </p>
            <p className="font-sans text-[13px] text-dark/60">
              Cahuzac-sur-Vère, Tarn (81)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
