import { SITE_URL } from "./Shell";
import { content, type Lang } from "@/lib/i18n";

// Fiche d'identité lue par Google (schema.org Person) pour relier le site à LinkedIn, GitHub, etc.
export default function PersonJsonLd({ lang }: { lang: Lang }) {
  const { profile } = content[lang];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: lang === "fr" ? SITE_URL : `${SITE_URL}/en`,
    image: `${SITE_URL}${profile.photo}`,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Université Paris 1 Panthéon-Sorbonne" },
      { "@type": "CollegeOrUniversity", name: "École de technologie supérieure (ÉTS), Montréal" },
      { "@type": "CollegeOrUniversity", name: "IUT Montpellier-Sète" },
    ],
    worksFor: { "@type": "Organization", name: "Safran Electronics & Defense" },
    knowsLanguage: ["fr", "en", "de"],
    sameAs: [profile.linkedin, profile.github, profile.behance],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
    />
  );
}
