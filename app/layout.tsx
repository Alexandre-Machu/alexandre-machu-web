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
  title: {
    default: "Alexandre Machu",
    template: "%s · Alexandre Machu",
  },
  description:
    "Architecte d'entreprise chez Safran, M2 Management des SI à la Sorbonne et développeur. Projets, parcours et contact.",
  keywords: ["Alexandre Machu", "Architecte d'entreprise", "Portfolio", "Safran", "Sorbonne", "Développeur"],
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
