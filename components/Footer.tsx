import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Alexandre Machu</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
