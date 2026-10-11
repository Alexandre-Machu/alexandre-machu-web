import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/Shell";

// Page 404 pour toute adresse inconnue. Le site a deux layouts racines (fr et en),
// d'où ce fichier global, bilingue.
export const metadata: Metadata = {
  title: "Page introuvable · Alexandre Machu",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <Shell lang="fr">
      <main className="mx-auto flex max-w-5xl flex-col items-start px-4 py-28 sm:px-6 sm:py-40">
        <p className="font-serif text-7xl text-accent sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Cette page n&apos;existe pas.</h1>
        <p className="mt-2 text-lg text-muted" lang="en">
          This page doesn&apos;t exist.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:opacity-85">
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/en"
            lang="en"
            className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium hover:border-ink/30"
          >
            Back to the English site
          </Link>
        </div>
      </main>
    </Shell>
  );
}
