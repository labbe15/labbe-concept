import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import { defaultMetadata } from "@/lib/seo";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Labbe Concept",
  description:
    "Artisan menuisier poseur spécialisé en fermetures et aménagements dans le Tarn",
  telephone: "+33661706344",
  email: "valentin.labbe15@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cahuzac-sur-Vère",
    postalCode: "81140",
    addressCountry: "FR",
  },
  areaServed: "Tarn",
  url: "https://labbeconcept.fr",
  priceRange: "€€",
  openingHours: "Mo-Fr 08:00-18:00",
  founder: {
    "@type": "Person",
    name: "Valentin Labbé",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!sessionStorage.getItem('lc_intro')){document.documentElement.classList.add('intro-active');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <PageIntro />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
