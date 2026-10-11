export const profile = {
  name: "Alexandre Machu",
  alias: "Colfeo",
  role: "Business Analyst SI",
  location: "Paris",
  email: "amachu.pro@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexandre-machu/",
  github: "https://github.com/Alexandre-Machu",
  cv: "/cv-alexandre-machu.pdf",
  availability: "Disponible en CDI à partir de décembre 2026",
  intro:
    "Architecte d'entreprise en alternance chez Safran Electronics & Defense, en M2 Management des SI à la Sorbonne et en DU Influence et Cybersécurité. Je viens du développement, ce qui m'aide à comprendre les équipes techniques. Je cherche un CDI de business analyst, ou un poste côté gouvernance et cybersécurité.",
  photo: "/alexandre.webp",
};

export type Project = {
  slug: string;
  title: string;
  /** Titre court pour la vignette */
  short?: string;
  tagline: string;
  year: string;
  kind: string;
  stack: string[];
  image?: string;
  /** Couleur de la vignette quand il n'y a pas de capture */
  tint?: string;
  links: { label: string; href: string }[];
  featured?: boolean;
  context: string;
  built: string[];
  result?: string;
};

export const projects: Project[] = [
  {
    slug: "occilanscout",
    title: "OccilanScout",
    tagline:
      "Stats et scouting League of Legends pour les Occi'lan, une LAN de Toulouse où joue mon équipe.",
    year: "2025 – 2026",
    kind: "Data · Esport",
    stack: ["Python", "Streamlit", "Riot API", "GitHub Actions", "Discord API", "Claude API"],
    image: "/projets/occilanscout.png",
    tint: "#e8eefc",
    featured: true,
    links: [{ label: "App publique", href: "https://occilan-data.streamlit.app" }],
    context:
      "À chaque édition de l'Occi'lan, on préparait les matchs à la main sur op.gg et dans des Google Sheets. J'ai d'abord fait un script qui sortait un Excel de stats (OccilanStats), puis j'ai tout repris dans une vraie application.",
    built: [
      "Pipeline Riot API qui récupère toutes les games du tournoi, les timelines et les rangs actuels. Les joueurs sont suivis par PUUID, donc un changement de pseudo ne casse rien.",
      "Application Streamlit en deux versions : une publique pour les orgas et le stream, une privée pour mon équipe avec scouting, assistant de draft et espace scrims.",
      "Power ranking basé sur un Elo par joueur, qui prédit correctement environ 68 % des games.",
      "Mise à jour en direct pendant la LAN avec GitHub Actions, et notifications Discord (récap de chaque game, prochain adversaire envoyé en DM).",
      "Mode stream pour OBS, classement officiel récupéré depuis l'API Toornament, rapports de scouting générés avec Claude.",
    ],
    result: "Plus de 350 games analysées sur 4 éditions, utilisé par les orgas et par mon équipe.",
  },
  {
    slug: "paris1esport",
    title: "Site de Paris 1 Esport",
    tagline:
      "Le site de l'association esport de Paris 1 Panthéon-Sorbonne, avec une admin que le bureau utilise sans toucher au code.",
    year: "2025 – 2026",
    kind: "Web · Full-stack",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Vercel", "Cloudinary"],
    image: "/projets/p1e.png",
    featured: true,
    links: [{ label: "paris1esport.fr", href: "https://paris1esport.fr" }],
    context:
      "L'asso avait besoin d'un site pour présenter ses équipes, ses événements et ses partenaires. Le vrai enjeu, c'était que les membres du bureau puissent le tenir à jour seuls.",
    built: [
      "Site public : équipes et rosters, matchs, news, événements, partenaires.",
      "Interface d'administration pour gérer événements, équipes, orga et partenaires, avec upload d'images.",
      "Refonte 2026 en cours : comptes individuels avec rôles, journal des modifications avec annulation, formulaire de candidature relié à Discord, pages joueurs, SEO.",
      "Un bot Discord à côté, qui annonce les lives Twitch, les posts X et les rappels d'événements à partir de l'API du site.",
    ],
  },
  {
    slug: "alex-os",
    title: "Alex OS",
    tagline:
      "Mon tableau de bord du quotidien : agenda, tâches, routines et budget avec synchro bancaire automatique.",
    year: "2026",
    kind: "Outil perso",
    stack: ["Google Apps Script", "JavaScript", "Google Calendar", "Google Tasks", "Enable Banking (PSD2)"],
    image: "/projets/alex-os.png",
    tint: "#fdeef3",
    featured: true,
    links: [],
    context:
      "Je voulais un seul écran pour ma journée et mon budget, sans saisie manuelle. Le principe : si ça demande un effort, je ne m'en servirai pas.",
    built: [
      "Web app Apps Script : agenda du jour, tâches Google Tasks, routines avec séries et jokers.",
      "Mail le soir « Et demain ? » : je réponds au mail et les tâches sont créées toutes seules.",
      "Synchro bancaire en lecture seule via Enable Banking (PSD2) sur deux banques, catégorisation automatique qui apprend des corrections.",
      "Enveloppes mensuelles, détection des abonnements, projection mois par mois et alertes après chaque synchro.",
    ],
    result: "Je l'utilise tous les jours. Projet privé, pas de démo publique (capture avec des données fictives).",
  },
  {
    slug: "bagexpress",
    title: "BagExpress",
    tagline:
      "Plateforme de livraison de bagages entre gares et hôtels, faite pour le cours de Cloud Computing du M2.",
    year: "2026",
    kind: "Web · Cloud",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Leaflet"],
    image: "/projets/bagexpress.png",
    links: [
      { label: "Démo", href: "https://bag-express.vercel.app" },
      { label: "Code", href: "https://github.com/Alexandre-Machu/BagExpress" },
    ],
    context:
      "Projet de groupe du M2 MIKS : concevoir et déployer une application cloud complète, de la base de données à la mise en ligne.",
    built: [
      "Deux espaces : client (réservation en 3 étapes sur carte, suivi) et chauffeur (courses disponibles, prise en charge, livraison).",
      "Authentification NextAuth, mots de passe hashés, routes protégées par middleware.",
      "Base PostgreSQL sur Supabase avec Prisma, déploiement sur Vercel.",
      "Interface traduite en 8 langues.",
    ],
  },
  {
    slug: "lrc-presence-bot",
    title: "LRC Presence Bot",
    tagline: "Bot Discord qui gère les présences du soir, les absences et les anniversaires d'un serveur de jeu.",
    year: "2025 – 2026",
    kind: "Bot · Automatisation",
    stack: ["Python", "discord.py", "Google Sheets API"],
    tint: "#eef6ee",
    links: [{ label: "Code", href: "https://github.com/Alexandre-Machu/lrc-presence-bot" }],
    context:
      "Sur notre serveur, on demandait tous les jours qui venait jouer le soir et à quelle heure. Le bot fait ça tout seul.",
    built: [
      "Message de présence quotidien avec heure d'arrivée et jeux choisis, récap du nombre de joueurs par jeu.",
      "Calendrier d'absences cliquable et absences planifiées à l'avance.",
      "Anniversaires avec notification, export des présences vers Google Sheets chaque soir.",
      "État sauvegardé sur disque pour survivre aux redémarrages, tests automatisés.",
    ],
  },
  {
    slug: "actibourse",
    title: "ActiBourse Scout",
    tagline: "Une bourse simulée pour un grand jeu de camp scout : 5 équipes, 8 actions, des cours qui bougent tout seuls.",
    year: "2025",
    kind: "Web · Temps réel",
    stack: ["JavaScript", "Node.js", "WebSockets", "Railway"],
    tint: "#fff4e0",
    links: [{ label: "Code", href: "https://github.com/Alexandre-Machu/ActiBourseScout-Camp2025" }],
    context:
      "Je dirige des camps scouts depuis 2024. Pour le camp 2025, on voulait un grand jeu où les jeunes achètent et revendent des actions pendant la journée.",
    built: [
      "Cours qui varient aléatoirement entre 5 minutes et 1 h 30, avec un mode test accéléré.",
      "Achat et vente par équipe avec vérification des fonds, historique et classement en direct.",
      "Mode local sans installation, ou mode serveur synchronisé entre plusieurs appareils via WebSockets.",
    ],
    result: "Utilisé en vrai pendant le camp d'été 2025.",
  },
  {
    slug: "sc-esport-stats",
    title: "SC Esport Stats",
    tagline: "Dashboard de suivi d'une équipe League of Legends : winrate par side, champions, stats joueurs.",
    year: "2025",
    kind: "Data · Esport",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    tint: "#efeafd",
    links: [{ label: "Code", href: "https://github.com/Alexandre-Machu/SC-Esport-Stats" }],
    context: "Premier outil de stats esport, fait pour suivre la progression d'une équipe sur ses matchs.",
    built: [
      "Import des matchs et calcul des stats par side, par champion et par joueur.",
      "Dashboard Streamlit avec graphiques Plotly.",
    ],
  },
  {
    slug: "memoire-big-data-esport",
    title: "Mémoire M1 : Big Data et esport",
    short: "Big Data & esport",
    tagline: "Le rôle du Big Data dans l'analyse prédictive des performances, avec League of Legends comme cas d'étude.",
    year: "2025",
    kind: "Recherche",
    stack: ["Analyse de données", "Machine learning", "Riot API"],
    tint: "#f1f1ee",
    links: [
      {
        label: "Lire le mémoire",
        href: "https://docs.google.com/document/d/1fomn2MA39cfw-g-J2taiS1VrptPqxtg5pUXURP_1mQY/edit?usp=sharing",
      },
    ],
    context: "Mémoire de M1 Management des SI à la Sorbonne.",
    built: [
      "État de l'art sur la data dans l'esport professionnel.",
      "Étude de cas sur League of Legends : quelles données prédisent la victoire, et comment les équipes s'en servent.",
    ],
  },
];

export const jams = [
  {
    title: "Sunken Memories",
    event: "Code Game Jam 2022",
    note: "Prix Design",
    image: "/projets/sunken-memories.png",
  },
  { title: "The Golden Odyssey", event: "Code Game Jam 2021", image: "/projets/golden-odyssey.png" },
  { title: "Nuit de l'Info 2021", event: "Lauréat, prix général et défis externes" },
];

export type Item = {
  period: string;
  title: string;
  org: string;
  place?: string;
  text: string;
  bullets?: string[];
  /** Logo dans public/logos, sinon on affiche les initiales */
  logo?: string;
};

export const experiences: Item[] = [
  {
    period: "sept. 2025 – nov. 2026",
    title: "Architecte d'entreprise (alternance)",
    org: "Safran Electronics & Defense",
    place: "Massy",
    logo: "/logos/safran.png",
    text: "",
    bullets: [
      "Cartographie du SI de plus de 80 sites SED dans le monde, en lien direct avec les correspondants pays.",
      "Rédaction de dossiers d'architecture générale (DAG) : cadrage du besoin, analyse d'impact, scénarios.",
      "Rationalisation du parc applicatif : doublons, incohérences de données, candidats au décommissionnement.",
      "Modélisation et scripting sous ARIS, création et réorganisation des AOR.",
      "Restitutions au management et aux équipes projet (Power BI, Excel, PowerPoint, Confluence).",
    ],
  },
  {
    period: "nov. 2023 – avr. 2024",
    title: "Manager esport (freelance)",
    org: "SAN Esport",
    logo: "/logos/san.png",
    place: "Montpellier / Paris",
    text: "",
    bullets: [
      "Gestion d'une équipe League of Legends féminine en championnat national : planning, inscriptions, reporting.",
      "Relation avec le coach et suivi du bien-être de l'équipe.",
      "Tableaux de suivi de performance et outil web branché sur l'API Riot pour alimenter l'analyse du coach.",
    ],
  },
  {
    period: "sept. 2023 – août 2024",
    title: "Développeur web (alternance)",
    org: "CFD-Innovation",
    place: "Baillargues",
    logo: "/logos/cfd.png",
    text: "",
    bullets: [
      "GoForm (SaaS de gestion de formations) : tests d'intégration PHPUnit et pipeline GitLab CI.",
      "POC Crédit Client : refonte web d'écrans IBMi 5250 en PHP/Twig, routes YAML et données mockées en JSON.",
      "Points hebdomadaires avec le client, support de formation.",
    ],
  },
  {
    period: "janv. – mai 2023",
    title: "Formateur en programmation (CDD)",
    org: "Écoles eSTIMe",
    logo: "/logos/estime.png",
    place: "Montréal",
    text: "",
    bullets: [
      "Initiation à la programmation et à la robotique, 100 élèves répartis sur 5 classes.",
      "Seul intervenant : planification, animation et adaptation des séances.",
      "Refonte des supports pédagogiques pas à pas.",
    ],
  },
  {
    period: "avr. – août 2022",
    title: "Développeur web (stage puis CDD)",
    org: "Yooz",
    place: "Aimargues",
    logo: "/logos/yooz.png",
    text: "",
    bullets: [
      "Refonte web d'Explorer, outil interne d'exploration du flux documentaire, en binôme et en sprints.",
      "Front Angular (TypeScript) : arbre Lot / Enveloppe / Document / Page, tableaux d'entités.",
      "Back Node.js / Express sur PostgreSQL, testé sous Postman.",
    ],
  },
];

export const extras: Item[] = [
  {
    period: "sept. 2024 – janv. 2025",
    title: "Étude de marché",
    org: "Guerlain",
    place: "Paris",
    logo: "/logos/guerlain.png",
    text: "Projet du master : benchmark sectoriel, entretiens qualitatifs, étude quantitative et recommandations.",
  },
];

export const education: Item[] = [
  {
    period: "2024 – 2026",
    title: "M2 Management des SI (MIKS)",
    org: "EMS Paris 1 Panthéon-Sorbonne",
    logo: "/logos/paris1.png",
    text: "Mémoire sur la rationalisation du portefeuille applicatif après une acquisition, à partir du référentiel ARIS.",
  },
  {
    period: "Depuis oct. 2026",
    title: "DU Influence et Cybersécurité",
    org: "École de droit de la Sorbonne, Paris 1",
    logo: "/logos/paris1.png",
    text: "Droit de la cybersécurité, cybercriminalité, intelligence économique et influence.",
  },
  {
    period: "2023 – 2024",
    title: "BUT Informatique (3e année)",
    org: "IUT Montpellier-Sète",
    logo: "/logos/umontpellier.png",
    text: "",
  },
  {
    period: "2022 – 2023",
    title: "DUETI Génie logiciel",
    org: "ÉTS Montréal",
    logo: "/logos/ets.png",
    text: "Un an au Canada.",
  },
  {
    period: "2020 – 2022",
    title: "DUT Informatique",
    org: "IUT Montpellier-Sète",
    logo: "/logos/umontpellier.png",
    text: "",
  },
];

/** Tout ce qui touche à l'esport, présenté à part du parcours pro */
export const esport: Item[] = [
  {
    period: "nov. 2025 – sept. 2026",
    title: "Co-fondateur et ancien président",
    org: "Paris 1 Esport",
    logo: "/logos/p1e.png",
    text: "L'association esport de Paris 1 : plus de 500 membres actifs en 5 mois, des dizaines d'événements, des équipes bénévoles à coordonner. Partenariats avec Karmine Corp et Team Vitality, conférence avec Nicolas Maurer (CEO de Vitality) à la Sorbonne.",
  },
  {
    period: "avr. 2026",
    title: "Photographe accrédité média",
    org: "LEC Roadtrip · Karmine Corp",
    logo: "/logos/karmine.png",
    text: "Aux Arènes d'Évry-Courcouronnes, en bord de scène et en zone presse, grâce au partenariat entre Paris 1 Esport et Karmine Corp.",
  },
  {
    period: "nov. 2025",
    title: "Staff événementiel",
    org: "VALORANT Champions Paris · ITL Production",
    logo: "/logos/valorant.png",
    text: "Mission freelance sur le championnat du monde de Valorant, organisé par Riot Games : support opérationnel sur site.",
  },
  {
    period: "nov. 2023 – avr. 2024",
    title: "Manager",
    org: "SAN Esport",
    logo: "/logos/san.png",
    text: "Une équipe League of Legends féminine en championnat national : planning, inscriptions, suivi avec le coach, et un outil branché sur l'API Riot pour l'analyse.",
  },
  {
    period: "avr. – sept. 2024",
    title: "Président",
    org: "Montpellier Student Gaming",
    logo: "/logos/msg.png",
    text: "Association étudiante de Montpellier, 150 membres actifs en moins d'un an.",
  },
];

export const scouts: Item = {
  period: "Depuis 2021",
  title: "Directeur et responsable de camps scouts",
  org: "Éclaireuses Éclaireurs unionistes de France",
  place: "Unité de Jacou (34)",
  text: "Animateur depuis 2021, directeur de camp depuis 2024. J'encadre 6 responsables et 35 enfants, un week-end par mois et trois semaines l'été. BAFA, BAFD, PSC1.",
};

/** Chiffres mis en avant sous l'accueil */
export const highlights = [
  { value: "80+", label: "sites cartographiés dans le monde chez Safran" },
  { value: "950", label: "au TOEIC, après un an à Montréal" },
  { value: "500+", label: "membres pour l'asso esport que j'ai co-fondée" },
  { value: "BAFD", label: "directeur de camps scouts depuis 2024" },
];

export const passions = [
  { value: "Top 1000", label: "Speedrun de Celeste", detail: "Au classement mondial, catégorie any%." },
  { value: "16 ans", label: "Piano", detail: "Sans jamais avoir appris le solfège." },
  { value: "6 ans", label: "Volley-ball", detail: "" },
  { value: "Photo", label: "Esport surtout", detail: "Une esthétique sombre et contrastée, au bord de la scène." },
  { value: "Moto", label: "Suzuki V-Strom 650", detail: "Permis A2." },
  { value: "Rails", label: "Métros, trains, avions", detail: "Une constante chez moi." },
];

export const skills = [
  {
    label: "Analyse métier",
    items: ["Études de cadrage", "Recueil des besoins", "Spécifications fonctionnelles", "Cartographie applicative et référentiels (ARIS)", "Qualité et gouvernance de données", "Reporting Power BI"],
  },
  {
    label: "Technique",
    items: ["Python", "SQL", "JavaScript / TypeScript", "Angular", "Node.js", "Next.js", "Twig"],
  },
  {
    label: "Outils",
    items: ["Suite Office / SharePoint", "Confluence", "Jira", "Trello", "Teams", "GitHub Actions"],
  },
  {
    label: "Langues",
    items: ["Français", "Anglais courant (TOEIC 950/990)", "Allemand intermédiaire", "Notions de japonais, russe, italien, arabe"],
  },
  {
    label: "Certifications",
    items: ["BAFA", "BAFD", "PSC1", "Permis B et A2"],
  },
];
