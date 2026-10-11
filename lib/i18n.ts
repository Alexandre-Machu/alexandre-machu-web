import * as fr from "./data";
import * as en from "./data.en";

export type Lang = "fr" | "en";

export const content = { fr, en };

export const homeHref = (lang: Lang) => (lang === "fr" ? "/" : "/en");
export const projectHref = (lang: Lang, slug: string) =>
  lang === "fr" ? `/projets/${slug}` : `/en/projects/${slug}`;

/** Chemin équivalent dans l'autre langue (pour le bouton FR / EN) */
export function switchPath(path: string, to: Lang) {
  if (to === "en") {
    if (path.startsWith("/en")) return path;
    const m = path.match(/^\/projets\/([^/]+)/);
    return m ? `/en/projects/${m[1]}` : "/en";
  }
  const m = path.match(/^\/en\/projects\/([^/]+)/);
  return m ? `/projets/${m[1]}` : "/";
}

export const ui = {
  fr: {
    nav: { parcours: "Parcours", projets: "Projets", esport: "Esport", ailleurs: "En dehors", contact: "Contact" },
    cv: "CV",
    switchLabel: "English version",
    downloadCv: "Télécharger le CV",
    contactMe: "Me contacter",
    photoAlt: "Portrait d'Alexandre Machu",
    heroBefore: "Je fais le lien entre",
    heroEm: "les métiers",
    heroAfter: "et l'IT.",
    highlightsAria: "En quelques chiffres",
    strengthsLabel: "Ma plus-value",
    strengthsTitle: "Ce qui me différencie",
    projectGallery: "En images",
    parcoursLabel: "Parcours",
    parcoursTitle: "Expériences et formation",
    experiences: "Expériences",
    education: "Formation",
    skills: "Compétences",
    projectsLabel: "Projets",
    projectsTitle: "Projets perso",
    allOnGithub: "Tout sur GitHub",
    otherProject: "L'autre projet",
    seeProject: "Voir le projet",
    esportLabel: "Esport",
    esportTitle: "Dans l'esport depuis 2020",
    esportIntro:
      "Joueur, monteur vidéo, community manager, graphiste, manager, président d'asso, staff, photographe.",
    esportPhotoAlt: "Alexandre au micro, posant une question pendant une conférence sur l'esport",
    esportCaption:
      "Séminaire « Esport : un nouveau terrain pour les sciences du sport », Université Paris-Saclay, septembre 2026.",
    player: "Joueur",
    playerText:
      "Sur League of Legends, top et support, 6 titres en compétition.",
    seeOpgg: "Mon profil op.gg",
    galleryTitle: "Mes photos",
    gallery: { open: "Agrandir la photo", close: "Fermer", prev: "Photo précédente", next: "Photo suivante" },
    showDetails: "Voir le détail",
    behance: "Mes visuels sur Behance",
    outsideLabel: "En dehors",
    outsideTitle: "Le reste du temps",
    scoutsStat: "enfants encadrés chaque été",
    contactLabel: "Contact",
    contactTitle: "Me contacter",
    cvPdf: "CV en PDF",
    locationSuffix: "véhiculé",
    allProjects: "Tous les projets",
    startingPoint: "Le point de départ",
    whatIDid: "Ce que j'ai fait",
    stack: "Stack",
    screenshotOf: "Capture de",
    ogTagline: "Venu du développement. Référentiels applicatifs et qualité de données, en alternance chez Safran.",
    ogFooter: "Parcours · Projets · CV",
    metaDescription:
      "Business Analyst SI venu du développement, M2 Management des SI à la Sorbonne, alternance chez Safran Electronics & Defense. Projets, parcours et contact.",
    ogDescription: "Business Analyst SI venu du développement. Parcours, projets et CV.",
  },
  en: {
    nav: { parcours: "Background", projets: "Projects", esport: "Esports", ailleurs: "Outside work", contact: "Contact" },
    cv: "CV",
    switchLabel: "Version française",
    downloadCv: "Download my CV",
    contactMe: "Get in touch",
    photoAlt: "Portrait of Alexandre Machu",
    heroBefore: "I connect",
    heroEm: "the business",
    heroAfter: "with IT.",
    highlightsAria: "Key figures",
    strengthsLabel: "What I bring",
    strengthsTitle: "What sets me apart",
    projectGallery: "Screenshots",
    parcoursLabel: "Background",
    parcoursTitle: "Experience and education",
    experiences: "Experience",
    education: "Education",
    skills: "Skills",
    projectsLabel: "Projects",
    projectsTitle: "Side projects",
    allOnGithub: "Everything on GitHub",
    otherProject: "The other project",
    seeProject: "View project",
    esportLabel: "Esports",
    esportTitle: "In esports since 2020",
    esportIntro:
      "Player, video editor, community manager, graphic designer, manager, society president, event staff, photographer.",
    esportPhotoAlt: "Alexandre with a microphone, asking a question at an esports conference",
    esportCaption:
      "\"Esports: a new field for sport sciences\" seminar, Université Paris-Saclay, September 2026.",
    player: "Player",
    playerText:
      "On League of Legends, top and support, 6 competitive titles.",
    seeOpgg: "My op.gg profile",
    galleryTitle: "My photos",
    gallery: { open: "Enlarge photo", close: "Close", prev: "Previous photo", next: "Next photo" },
    showDetails: "Show details",
    behance: "My work on Behance",
    outsideLabel: "Outside work",
    outsideTitle: "The rest of the time",
    scoutsStat: "children in my care every summer",
    contactLabel: "Contact",
    contactTitle: "Get in touch",
    cvPdf: "CV (PDF)",
    locationSuffix: "with a car",
    allProjects: "All projects",
    startingPoint: "Where it started",
    whatIDid: "What I built",
    stack: "Stack",
    screenshotOf: "Screenshot of",
    ogTagline: "From software development to business analysis. Application repositories and data quality, at Safran.",
    ogFooter: "Background · Projects · CV",
    metaDescription:
      "IT business analyst with a software development background, master's in Information Systems Management at the Sorbonne, apprentice at Safran Electronics & Defense. Projects, background and contact.",
    ogDescription: "IT business analyst with a software development background. Background, projects and CV.",
  },
};
