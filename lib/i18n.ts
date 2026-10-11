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
    parcoursLabel: "Parcours",
    parcoursTitle: "Expériences et formation",
    experiences: "Expériences",
    extras: "Autres missions",
    education: "Formation",
    skills: "Compétences",
    projectsLabel: "Projets",
    projectsTitle: "Des outils pour de vrais besoins",
    projectsIntro:
      "Chaque projet part d'un problème concret, le mien ou celui d'un groupe : préparer un tournoi, faire vivre une asso, tenir un budget. Je commence par comprendre le besoin, puis je construis l'outil.",
    allOnGithub: "Tout sur GitHub",
    otherProjects: "Autres projets",
    jams: "Game jams & concours",
    seeProject: "Voir le projet",
    esportLabel: "Esport",
    esportTitle: "L'autre moitié de mon parcours.",
    esportIntro:
      "Joueur, manager, président d'asso, staff, photographe. Depuis 2023 j'ai pris à peu près tous les rôles autour d'un tournoi. J'y fais ce que je fais au travail : organiser, outiller, tenir un groupe.",
    esportPhotoAlt: "Alexandre au micro, posant une question pendant une conférence sur l'esport",
    esportCaption:
      "Séminaire « Esport : un nouveau terrain pour les sciences du sport », Université Paris-Saclay, septembre 2026.",
    player: "Joueur",
    playerText:
      "Sur League of Legends, top et support, 6 titres en compétition. Pour préparer les tournois de mon équipe, j'ai fait OccilanScout.",
    seeOccilan: "Voir OccilanScout",
    outsideLabel: "En dehors",
    outsideTitle: "Ce qui me fait tenir",
    outsideIntro:
      "Depuis l'adolescence, je monte des groupes autour de ce qui me plaît : les scouts d'abord, puis les assos esport. Le reste du temps, il y a de quoi faire.",
    scoutsStat: "enfants encadrés chaque été",
    contactLabel: "Contact",
    contactTitle: "Un poste, un projet, une question ? Écrivez-moi.",
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
    parcoursLabel: "Background",
    parcoursTitle: "Experience and education",
    experiences: "Experience",
    extras: "Other assignments",
    education: "Education",
    skills: "Skills",
    projectsLabel: "Projects",
    projectsTitle: "Tools for real needs",
    projectsIntro:
      "Each project starts from a concrete problem, mine or a group's: preparing a tournament, running a society, keeping a budget. I start by understanding the need, then I build the tool.",
    allOnGithub: "Everything on GitHub",
    otherProjects: "More projects",
    jams: "Game jams & contests",
    seeProject: "View project",
    esportLabel: "Esports",
    esportTitle: "The other half of my story.",
    esportIntro:
      "Player, manager, society president, event staff, photographer. Since 2023 I've held almost every role around a tournament. I do there what I do at work: organise, build tools, keep a group together.",
    esportPhotoAlt: "Alexandre with a microphone, asking a question at an esports conference",
    esportCaption:
      "\"Esports: a new field for sport sciences\" seminar, Université Paris-Saclay, September 2026.",
    player: "Player",
    playerText:
      "On League of Legends, top and support, 6 competitive titles. To prepare my team's tournaments, I built OccilanScout.",
    seeOccilan: "See OccilanScout",
    outsideLabel: "Outside work",
    outsideTitle: "What keeps me going",
    outsideIntro:
      "Since my teens, I've been building groups around the things I love: scouting first, then esports societies. The rest of the time, there's plenty going on.",
    scoutsStat: "children in my care every summer",
    contactLabel: "Contact",
    contactTitle: "A role, a project, a question? Write to me.",
    cvPdf: "CV (PDF, in French)",
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
