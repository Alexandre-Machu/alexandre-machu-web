import type { Item } from "@/lib/data";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{label}</p>
      <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">{title}</h2>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function Timeline({ items, stacked = false }: { items: Item[]; stacked?: boolean }) {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {items.map((it) => (
        <li
          key={it.title + it.org}
          className={`grid gap-1 py-5 ${stacked ? "" : "sm:grid-cols-[9rem_1fr] sm:gap-6"}`}
        >
          <p className="text-sm tabular-nums text-faint">{it.period}</p>
          <div>
            <h3 className="font-medium">
              {it.title} <span className="text-muted">· {it.org}</span>
            </h3>
            {it.place && <p className="text-sm text-faint">{it.place}</p>}
            {it.text && <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
