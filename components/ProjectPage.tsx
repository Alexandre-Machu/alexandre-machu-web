import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/ProjectVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { content, homeHref, ui, type Lang } from "@/lib/i18n";

export function projectMetadata(lang: Lang, slug: string): Metadata {
  const project = content[lang].projects.find((p) => p.slug === slug && p.featured);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: lang === "fr" ? `/projets/${slug}` : `/en/projects/${slug}`,
      languages: { fr: `/projets/${slug}`, en: `/en/projects/${slug}` },
    },
    openGraph: {
      title: `${project.title} · Alexandre Machu`,
      description: project.tagline,
      images: [project.image ?? `/og/${lang}.png`],
    },
  };
}

export default function ProjectPage({ lang, slug }: { lang: Lang; slug: string }) {
  const t = ui[lang];
  const projects = content[lang].projects.filter((p) => p.featured);
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects.filter((p) => p.slug !== slug);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
      <Link href={`${homeHref(lang)}#projets`} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
        <ArrowLeft size={15} /> {t.allProjects}
      </Link>

      <header className="rise mt-10 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
          {project.kind} · {project.year}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.tagline}</p>
        {project.links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? "inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:opacity-85"
                    : "inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium hover:border-ink/30"
                }
              >
                {l.label} <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="mt-12">
        <ProjectVisual project={project} priority wide lang={lang} />
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_15rem]">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl">{t.startingPoint}</h2>
          <p className="mt-4 leading-relaxed text-muted">{project.context}</p>

          <h2 className="mt-12 font-serif text-3xl">{t.whatIDid}</h2>
          <ul className="mt-5 flex flex-col gap-4">
            {project.built.map((b) => (
              <li key={b} className="flex gap-3 leading-relaxed text-muted">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>

          {project.result && (
            <p className="mt-10 rounded-xl border border-line bg-accent-soft/60 p-5 leading-relaxed">{project.result}</p>
          )}
        </div>

        <aside className="md:border-l md:border-line md:pl-8">
          <h2 className="text-sm font-medium">{t.stack}</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5 md:flex-col md:gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-line bg-card px-2.5 py-1 text-xs text-muted md:border-0 md:bg-transparent md:p-0 md:text-sm">
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="mt-24 border-t border-line pt-12">
        <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-faint">{t.otherProject}</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {next.map((p) => (
            <ProjectCard key={p.slug} project={p} lang={lang} />
          ))}
        </div>
      </section>
    </main>
  );
}
