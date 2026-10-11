import Link from "next/link";
import { content, homeHref, ui, type Lang } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";

const anchors = ["parcours", "projets", "esport", "ailleurs", "contact"] as const;

export default function Navbar({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const home = homeHref(lang);
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href={home} className="text-[15px] font-semibold tracking-tight">
          Alexandre Machu
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {anchors.map((a) => (
            <Link
              key={a}
              href={`${home === "/" ? "/" : home}#${a}`}
              className="hidden rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink md:block"
            >
              {t.nav[a]}
            </Link>
          ))}
          <LangSwitch lang={lang} />
          <a
            href={content[lang].profile.cv}
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            {t.cv}
          </a>
        </div>
      </nav>
    </header>
  );
}
