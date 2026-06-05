"use client";
import { useEffect, useState } from "react";

export default function PageIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const done = sessionStorage.getItem("lc_intro_done");

    if (done) {
      document.documentElement.style.visibility = "visible";
      return;
    }

    setShow(true);

    const timer = setTimeout(() => {
      document.documentElement.style.visibility = "visible";
      sessionStorage.setItem("lc_intro_done", "1");
      setShow(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#fef8e6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        animation:
          "introFadeIn 0.5s ease forwards, introFadeOut 0.4s ease 1.3s forwards",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
        alt=""
      />
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "28px",
            fontWeight: 700,
            color: "#5a5c51",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          LABBE CONCEPT
        </div>
        <div
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: "italic",
            fontSize: "16px",
            color: "#c9924f",
            marginTop: "8px",
          }}
        >
          Fermetures &amp; Aménagements
        </div>
      </div>
    </div>
  );
}
