import Link from "next/link";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { FeaturedProject, ProjectCard } from "@/components/ProjectCard";
import { Logo, Section, Timeline } from "@/components/Section";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { content, projectHref, ui, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const { education, esport, experiences, extras, highlights, jams, passions, profile, projects, scouts, skills } =
    content[lang];
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main>
      {/* Accueil */}
      <section className="mx-auto max-w-5xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {profile.availability}
            </p>
            <p className="rise mt-8 text-sm font-medium uppercase tracking-[0.14em] text-accent" style={{ animationDelay: "30ms" }}>
              {profile.role}
            </p>
            <h1 className="rise mt-4 max-w-3xl text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl" style={{ animationDelay: "60ms" }}>
              {t.heroBefore}{" "}
              <span className="font-serif font-normal italic text-accent pr-1">{t.heroEm}</span> {t.heroAfter}
            </h1>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={t.photoAlt}
            className="rise order-first h-28 w-28 rounded-full bg-white object-cover ring-1 ring-line md:order-none md:h-56 md:w-56"
            style={{ animationDelay: "90ms" }}
          />
        </div>
        <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted" style={{ animationDelay: "120ms" }}>
          {profile.intro}
        </p>
        <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "180ms" }}>
          <a href={profile.cv} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:opacity-85">
            <Download size={15} /> {t.downloadCv}
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium hover:border-ink/30">
            <Mail size={15} /> {t.contactMe}
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2.5 text-muted hover:bg-card hover:text-ink">
              <LinkedinIcon size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2.5 text-muted hover:bg-card hover:text-ink">
              <GithubIcon size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section aria-label={t.highlightsAria} className="border-y border-line bg-card/60">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="py-8 pr-4">
              <dt className="sr-only">{h.label}</dt>
              <dd>
                <p className="font-serif text-4xl tracking-tight sm:text-5xl">{h.value}</p>
                <p className="mt-2 text-sm leading-snug text-muted">{h.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Parcours */}
      <Section id="parcours" label={t.parcoursLabel} title={t.parcoursTitle}>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="mb-4 text-sm font-medium text-muted">{t.experiences}</h3>
            <Timeline items={experiences} />
            <h3 className="mb-4 mt-10 text-sm font-medium text-muted">{t.extras}</h3>
            <Timeline items={extras} />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium text-muted">{t.education}</h3>
            <Timeline items={education} stacked />
            <h3 className="mb-4 mt-10 text-sm font-medium text-muted">{t.skills}</h3>
            <div className="flex flex-col gap-5">
              {skills.map((g) => (
                <div key={g.label}>
                  <p className="text-sm font-medium">{g.label}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span key={s} className="rounded-full border border-line bg-card px-2.5 py-1 text-xs text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projets */}
      <section id="projets" className="border-t border-line bg-card/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{t.projectsLabel}</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">{t.projectsTitle}</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted">{t.projectsIntro}</p>
            </div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
              <GithubIcon size={15} /> {t.allOnGithub}
            </a>
          </div>

          <div className="mt-14 flex flex-col gap-20">
            {featured.map((p, i) => (
              <FeaturedProject key={p.slug} project={p} index={i} lang={lang} />
            ))}
          </div>

          <h3 className="mt-24 text-sm font-medium uppercase tracking-[0.14em] text-faint">{t.otherProjects}</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} lang={lang} />
            ))}
          </div>

          <h3 className="mt-16 text-sm font-medium uppercase tracking-[0.14em] text-faint">{t.jams}</h3>
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

      {/* Esport */}
      <section id="esport" className="bg-[#0d0d12] text-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_300px]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#ff4655]">{t.esportLabel}</p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight sm:text-6xl">{t.esportTitle}</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-white/70">{t.esportIntro}</p>
            </div>
            <figure className="md:w-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/esport-micro.jpg"
                alt={t.esportPhotoAlt}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top ring-1 ring-white/10"
                loading="lazy"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-white/60">{t.esportCaption}</figcaption>
            </figure>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {esport.map((e, i) => (
              <article
                key={e.org}
                className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <Logo item={e} dark />
                  <div className="min-w-0">
                    <p className="text-xs tabular-nums text-white/50">{e.period}</p>
                    <h3 className="mt-1 font-semibold tracking-tight">{e.org}</h3>
                    <p className="text-sm text-[#ff7a85]">{e.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{e.text}</p>
              </article>
            ))}
            <Link
              href={projectHref(lang, "occilanscout")}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[#ff4655]/20 to-transparent p-6 hover:border-white/25"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-white/50">{t.player}</p>
              <div>
                <p className="mt-6 font-serif text-5xl tracking-tight">Master</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{t.playerText}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#ff7a85]">
                {t.seeOccilan}
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* En dehors */}
      <Section
        id="ailleurs"
        label={t.outsideLabel}
        title={t.outsideTitle}
        intro={t.outsideIntro}
      >
        <article className="flex flex-col gap-6 rounded-2xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="sm:w-56 sm:shrink-0">
            <p className="font-serif text-5xl tracking-tight text-accent">35</p>
            <p className="mt-1 text-sm text-muted">{t.scoutsStat}</p>
          </div>
          <div>
            <p className="text-xs tabular-nums text-faint">{scouts.period} · {scouts.place}</p>
            <h3 className="mt-1 font-semibold tracking-tight">{scouts.title}</h3>
            <p className="text-sm text-accent">{scouts.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{scouts.text}</p>
          </div>
        </article>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {passions.map((p) => (
            <article key={p.label} className="rounded-2xl border border-line bg-card p-6">
              <p className="font-serif text-4xl tracking-tight">{p.value}</p>
              <h3 className="mt-3 font-medium">{p.label}</h3>
              {p.detail && <p className="mt-1 text-sm leading-relaxed text-muted">{p.detail}</p>}
            </article>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/60">{t.contactLabel}</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">{t.contactTitle}</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink hover:opacity-90">
              <Mail size={15} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium hover:border-paper/50">
              <LinkedinIcon size={15} /> LinkedIn
            </a>
            <a href={profile.cv} className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium hover:border-paper/50">
              <Download size={15} /> {t.cvPdf}
            </a>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-paper/60">
            <MapPin size={14} /> {profile.location}, {t.locationSuffix}
          </p>
        </div>
      </section>
    </main>
  );
}
