import Link from "next/link";
import { profile } from "@/lib/data";

const links = [
  { href: "/#parcours", label: "Parcours" },
  { href: "/#projets", label: "Projets" },
  { href: "/#esport", label: "Esport" },
  { href: "/#ailleurs", label: "En dehors" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-[15px] font-semibold tracking-tight">
          Alexandre Machu
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink sm:block"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={profile.cv}
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
