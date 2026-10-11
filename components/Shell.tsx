import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Instrument_Serif } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ui, type Lang } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const SITE_URL = "https://www.alexandremachu.fr";

// Métadonnées communes, déclinées par langue. SITE_URL = domaine principal (alexandremachu.fr redirige vers www).
export function siteMetadata(lang: Lang): Metadata {
  const t = ui[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: "Alexandre Machu", template: "%s · Alexandre Machu" },
    description: t.metaDescription,
    keywords: ["Alexandre Machu", "Business Analyst", "Portfolio", "Safran", "Sorbonne"],
    alternates: {
      canonical: lang === "fr" ? "/" : "/en",
      languages: { fr: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: lang === "fr" ? "en_GB" : "fr_FR",
      siteName: "Alexandre Machu",
      title: `Alexandre Machu · ${lang === "fr" ? "Business Analyst SI" : "IT Business Analyst"}`,
      description: t.ogDescription,
      images: [{ url: `/og/${lang}.png`, width: 1200, height: 630, alt: "Alexandre Machu" }],
    },
  };
}

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${geistSans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar lang={lang} />
        <div className="flex-1">{children}</div>
        <Footer />
        {/* Statistiques de visite Vercel : sans cookies, à activer dans l'onglet Analytics du projet Vercel */}
        <Analytics />
      </body>
    </html>
  );
}
