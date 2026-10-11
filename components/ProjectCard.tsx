import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import ProjectVisual from "./ProjectVisual";

export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group grid items-center gap-6 md:grid-cols-2 md:gap-10"
    >
      <div className={flip ? "md:order-2" : ""}>
        <ProjectVisual project={project} priority={index === 0} />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-faint">
          {project.kind} · {project.year}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.tagline}</p>
        {project.result && <p className="mt-3 text-sm leading-relaxed text-ink">{project.result}</p>}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-line bg-card px-2.5 py-1 text-xs text-muted">
              {s}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Voir le projet
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-card p-3 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
    >
      <ProjectVisual project={project} small />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold tracking-tight">{project.title}</h3>
          <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-faint transition-colors group-hover:text-accent" />
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.tagline}</p>
        <p className="mt-auto pt-4 text-xs text-faint">
          {project.kind} · {project.year}
        </p>
      </div>
    </Link>
  );
}
