import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { FeaturedProject, ProjectCard } from "@/components/ProjectCard";
import { Section, Timeline } from "@/components/Section";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  education,
  engagements,
  experiences,
  extras,
  jams,
  profile,
  projects,
  skills,
} from "@/lib/data";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main>
      {/* Accueil */}
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-28">
        <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {profile.availability}
        </p>
        <p className="rise mt-8 text-sm font-medium uppercase tracking-[0.14em] text-accent" style={{ animationDelay: "30ms" }}>
          {profile.role}
        </p>
        <h1 className="rise mt-4 max-w-3xl text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl" style={{ animationDelay: "60ms" }}>
          Je fais le lien entre les métiers et l&apos;IT,{" "}
          <span className="font-serif font-normal italic text-accent">et je code</span> les outils qui manquent.
        </h1>
        <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted" style={{ animationDelay: "120ms" }}>
          {profile.intro}
        </p>
        <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "180ms" }}>
          <a href="#projets" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:opacity-85">
            Voir les projets <ArrowDown size={15} />
          </a>
          <a href={profile.cv} className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium hover:border-ink/30">
            <Download size={15} /> Télécharger le CV
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2.5 text-muted hover:bg-card hover:text-ink">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2.5 text-muted hover:bg-card hover:text-ink">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="border-t border-line bg-card/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">Projets</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Ce que j&apos;ai construit</h2>
            </div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
              <GithubIcon size={15} /> Tout sur GitHub
            </a>
          </div>

          <div className="mt-14 flex flex-col gap-20">
            {featured.map((p, i) => (
              <FeaturedProject key={p.slug} project={p} index={i} />
            ))}
          </div>

          <h3 className="mt-24 text-sm font-medium uppercase tracking-[0.14em] text-faint">Autres projets</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <h3 className="mt-16 text-sm font-medium uppercase tracking-[0.14em] text-faint">Game jams & concours</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {jams.map((j) => (
              <li key={j.title} className="flex items-center gap-4 rounded-xl border border-line bg-card p-3">
                {j.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={j.image} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
                ) : (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-soft font-serif text-xl text-accent">N</span>
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{j.title}</p>
                  <p className="text-xs text-muted">
                    {j.event}
                    {j.note && <span className="text-accent"> · {j.note}</span>}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Parcours */}
      <Section id="parcours" label="Parcours" title="Expériences et formation">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="mb-4 text-sm font-medium text-muted">Expériences</h3>
            <Timeline items={experiences} />
            <h3 className="mb-4 mt-10 text-sm font-medium text-muted">Missions ponctuelles</h3>
            <Timeline items={extras} />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium text-muted">Formation</h3>
            <Timeline items={education} stacked />
            <h3 className="mb-4 mt-10 text-sm font-medium text-muted">Compétences</h3>
            <div className="flex flex-col gap-5">
              {skills.map((g) => (
                <div key={g.label}>
                  <p className="text-sm font-medium">{g.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{g.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Engagements */}
      <div className="border-t border-line">
        <Section id="engagements" label="Engagements" title="À côté du travail">
          <div className="grid gap-5 md:grid-cols-3">
            {engagements.map((e) => (
              <article key={e.org} className="rounded-2xl border border-line bg-card p-6">
                <p className="text-xs tabular-nums text-faint">{e.period}</p>
                <h3 className="mt-3 font-semibold tracking-tight">{e.org}</h3>
                <p className="text-sm text-accent">{e.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{e.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            En dehors de ça : piano depuis 16 ans, volley depuis 6 ans, League of Legends (rang Master, 6 titres en
            compétition, pseudo {profile.alias}), speedrun de Celeste (top 1000 mondial), photo esport et moto.
          </p>
        </Section>
      </div>

      {/* Contact */}
      <section id="contact" className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">Contact</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
            Un poste, un projet, une question ? Écrivez-moi.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink hover:opacity-90">
              <Mail size={15} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium hover:border-paper/50">
              <LinkedinIcon size={15} /> LinkedIn
            </a>
            <a href={profile.cv} className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium hover:border-paper/50">
              <Download size={15} /> CV en PDF
            </a>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-paper/50">
            <MapPin size={14} /> {profile.location}
          </p>
        </div>
      </section>
    </main>
  );
}
