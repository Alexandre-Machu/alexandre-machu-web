"use client";

import { usePathname } from "next/navigation";
import { switchPath, ui, type Lang } from "@/lib/i18n";

// Lien vers la même page dans l'autre langue. Les deux langues ont des layouts racines
// différents, donc un simple <a> (rechargement complet) suffit.
export default function LangSwitch({ lang }: { lang: Lang }) {
  const path = usePathname() ?? "/";
  const other: Lang = lang === "fr" ? "en" : "fr";
  return (
    <a
      href={switchPath(path, other)}
      hrefLang={other}
      lang={other}
      aria-label={ui[lang].switchLabel}
      className="rounded-full border border-line px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:border-ink/30 hover:text-ink"
    >
      {other}
    </a>
  );
}
