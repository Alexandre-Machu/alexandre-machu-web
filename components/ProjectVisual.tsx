import Image from "next/image";
import type { Project } from "@/lib/data";
import { ui, type Lang } from "@/lib/i18n";

// Capture du site si on en a une, sinon une vignette typographique teintée.
export default function ProjectVisual({
  project,
  priority = false,
  small = false,
  wide = false,
  lang,
}: {
  project: Project;
  priority?: boolean;
  small?: boolean;
  /** Bandeau plus bas pour la page projet quand il n'y a pas de capture */
  wide?: boolean;
  lang: Lang;
}) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-card">
        <Image
          src={project.image}
          alt={`${ui[lang].screenshotOf} ${project.title}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex ${wide ? "aspect-[16/10] sm:aspect-[3/1]" : "aspect-[16/10]"} flex-col justify-between overflow-hidden rounded-xl border border-line p-5 sm:p-7`}
      style={{ background: project.tint ?? "#f1f1ee" }}
    >
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink/50">{project.kind}</span>
      <div>
        <p
          className={`font-serif leading-[0.95] text-ink/85 ${
            small ? "line-clamp-2 text-3xl" : "text-4xl sm:text-6xl"
          }`}
        >
          {project.short ?? project.title}
        </p>
        <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink/50">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s}>{s}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
