import type { Item } from "@/lib/data";

export function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{label}</p>
      <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 max-w-2xl leading-relaxed text-muted">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

// Logo de l'organisation, ou ses initiales quand on n'a pas de logo propre.
export function Logo({ item, dark = false }: { item: Item; dark?: boolean }) {
  const box = `flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border ${
    dark ? "border-white/10 bg-white" : "border-line bg-card"
  }`;
  if (item.logo) {
    return (
      <span className={box}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.logo} alt="" className="h-full w-full object-contain p-1.5" />
      </span>
    );
  }
  const initials = item.org
    .split(/[\s·-]+/)
    .filter((w) => /^[A-ZÉ0-9]/.test(w))
    .slice(0, 3)
    .map((w) => w[0])
    .join("");
  return (
    <span className={`${box} ${dark ? "!bg-white/10 text-white" : "bg-accent-soft text-accent"} text-sm font-semibold`}>
      {initials}
    </span>
  );
}

export function Timeline({ items, stacked = false }: { items: Item[]; stacked?: boolean }) {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {items.map((it) => (
        <li
          key={it.title + it.org}
          className={`grid gap-3 py-5 ${stacked ? "" : "sm:grid-cols-[9rem_1fr] sm:gap-6"}`}
        >
          <p className="text-sm tabular-nums text-faint">{it.period}</p>
          <div className="flex gap-4">
            <Logo item={it} />
            <div className="min-w-0">
              <h3 className="font-medium">
                {it.title} <span className="text-muted">· {it.org}</span>
              </h3>
              {it.place && <p className="text-sm text-faint">{it.place}</p>}
              {it.text && <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>}
              {it.bullets && (
                <ul className="mt-2 flex list-disc flex-col gap-1 pl-4 text-sm leading-relaxed text-muted marker:text-faint">
                  {it.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
