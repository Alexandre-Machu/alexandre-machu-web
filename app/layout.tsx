import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  // À changer quand le nom de domaine sera branché.
  metadataBase: new URL("https://alexandre-machu-web.vercel.app"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Alexandre Machu",
    title: "Alexandre Machu · Business Analyst SI",
    description: "Business Analyst SI venu du développement. Parcours, projets et CV.",
  },
  title: {
    default: "Alexandre Machu",
    template: "%s · Alexandre Machu",
  },
  description:
    "Business Analyst SI venu du développement, M2 Management des SI à la Sorbonne, alternance chez Safran Electronics & Defense. Projets, parcours et contact.",
  keywords: ["Alexandre Machu", "Business Analyst", "Portfolio", "Safran", "Sorbonne", "Référentiels applicatifs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
