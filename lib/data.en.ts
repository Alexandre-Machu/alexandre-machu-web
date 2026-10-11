// Version anglaise de lib/data.ts : mêmes exports, même ordre. Toute modif du français se reporte ici.
import type { Item, Project } from "./data";

export const profile = {
  name: "Alexandre Machu",
  alias: "Colfeo",
  role: "IT Business Analyst",
  location: "Paris",
  email: "amachu.pro@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexandre-machu/",
  github: "https://github.com/Alexandre-Machu",
  behance: "https://www.behance.net/alexandremachu",
  opgg: "https://op.gg/lol/summoners/euw/Colfeo-MALOU",
  cv: "/cv-alexandre-machu-en.pdf",
  availability: "Available for a permanent role from December 2026",
  intro:
    "Enterprise architect apprentice at Safran Electronics & Defense, with a software development background. I'm looking for a business analyst role, or a position in IT governance and cybersecurity.",
  photo: "/alexandre.webp",
};

export const projects: Project[] = [
  {
    slug: "occilanscout",
    title: "OccilanScout",
    tagline: "League of Legends stats and scouting for the Occi'lan, a LAN tournament in Toulouse where my team plays.",
    year: "2025 – 2026",
    kind: "Data · Esports",
    stack: ["Python", "Streamlit", "Riot API", "GitHub Actions", "Discord API", "Claude API"],
    image: "/projets/occilanscout.png",
    tint: "#e8eefc",
    featured: true,
    links: [{ label: "Public app", href: "https://occilan-data.streamlit.app" }],
    context:
      "Before every Occi'lan, we prepared our matches by hand on op.gg and in Google Sheets. I first wrote a script that produced an Excel stats file (OccilanStats), then rebuilt everything as a proper application.",
    built: [
      "Riot API pipeline that fetches every tournament game, the timelines and current ranks. Players are tracked by PUUID, so a name change breaks nothing.",
      "Streamlit app in two versions: a public one for organisers and the stream, a private one for my team with scouting, a draft assistant and a scrim area.",
      "Power ranking based on a per-player Elo, which correctly predicts about 68% of games.",
      "Live updates during the LAN with GitHub Actions, and Discord notifications (a recap of each game, the next opponent sent by DM).",
      "OBS stream mode, official standings pulled from the Toornament API, scouting reports generated with Claude.",
    ],
    result: "Over 350 games analysed across 4 editions, used by the organisers and by my team.",
  },
  {
    slug: "paris1esport",
    title: "Paris 1 Esport website",
    tagline: "The website of the Paris 1 Panthéon-Sorbonne esports society, with an admin area the board uses without touching code.",
    year: "2025 – 2026",
    kind: "Web · Full-stack",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Vercel", "Cloudinary"],
    image: "/projets/p1e.png",
    featured: true,
    links: [{ label: "paris1esport.fr", href: "https://paris1esport.fr" }],
    context:
      "The society needed a site to present its teams, events and partners. The real challenge was letting board members keep it up to date on their own.",
    built: [
      "Public site: teams and rosters, matches, news, events, partners.",
      "Admin interface to manage events, teams, staff and partners, with image upload.",
      "2026 redesign in progress: individual accounts with roles, a change log with undo, an application form linked to Discord, player pages, SEO.",
      "A companion Discord bot that announces Twitch streams, X posts and event reminders from the site's API.",
    ],
  },
  {
    slug: "alex-os",
    title: "Alex OS",
    tagline: "My personal daily dashboard: calendar, tasks, routines and a budget with automatic bank sync.",
    year: "2026",
    kind: "Personal tool",
    stack: ["Google Apps Script", "JavaScript", "Google Calendar", "Google Tasks", "Enable Banking (PSD2)"],
    image: "/projets/alex-os.png",
    tint: "#fdeef3",
    links: [],
    context:
      "I wanted a single screen for my day and my budget, with no manual input. The rule: if it takes effort, I won't use it.",
    built: [
      "Apps Script web app: today's calendar, Google Tasks, routines with streaks and skip tokens.",
      "An evening email asking \"What about tomorrow?\": I reply and the tasks are created automatically.",
      "Read-only bank sync through Enable Banking (PSD2) across two banks, with automatic categorisation that learns from corrections.",
      "Monthly envelopes, subscription detection, month-by-month projection and alerts after each sync.",
    ],
    result: "I use it every day. Private project, no public demo (screenshot with fake data).",
  },
  {
    slug: "bagexpress",
    title: "BagExpress",
    tagline: "A luggage delivery platform between train stations and hotels, built for the master's Cloud Computing course.",
    year: "2026",
    kind: "Web · Cloud",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Leaflet"],
    image: "/projets/bagexpress.png",
    links: [
      { label: "Demo", href: "https://bag-express.vercel.app" },
      { label: "Code", href: "https://github.com/Alexandre-Machu/BagExpress" },
    ],
    context:
      "Group project for the MIKS master's: design and deploy a complete cloud application, from the database to going live.",
    built: [
      "Two areas: customer (3-step booking on a map, tracking) and driver (available jobs, pickup, delivery).",
      "NextAuth authentication, hashed passwords, routes protected by middleware.",
      "PostgreSQL on Supabase with Prisma, deployed on Vercel.",
      "Interface translated into 8 languages.",
    ],
  },
  {
    slug: "lrc-presence-bot",
    title: "LRC Presence Bot",
    tagline: "A Discord bot that handles evening attendance, absences and birthdays on a gaming server.",
    year: "2025 – 2026",
    kind: "Bot · Automation",
    stack: ["Python", "discord.py", "Google Sheets API"],
    tint: "#eef6ee",
    links: [{ label: "Code", href: "https://github.com/Alexandre-Machu/lrc-presence-bot" }],
    context:
      "On our server, someone asked every day who was coming to play that evening and when. The bot does it on its own.",
    built: [
      "Daily attendance message with arrival time and chosen games, plus a count of players per game.",
      "Clickable absence calendar and absences planned in advance.",
      "Birthday notifications, nightly export of attendance to Google Sheets.",
      "State saved to disk to survive restarts, automated tests.",
    ],
  },
  {
    slug: "actibourse",
    title: "ActiBourse Scout",
    tagline: "A simulated stock market for a scout camp game: 5 teams, 8 stocks, prices that move on their own.",
    year: "2025",
    kind: "Web · Real time",
    stack: ["JavaScript", "Node.js", "WebSockets", "Railway"],
    tint: "#fff4e0",
    links: [{ label: "Code", href: "https://github.com/Alexandre-Machu/ActiBourseScout-Camp2025" }],
    context:
      "I've been running scout camps since 2024. For the 2025 camp, we wanted a day-long game where kids buy and sell stocks.",
    built: [
      "Prices that change randomly every 5 minutes to 1.5 hours, with a fast test mode.",
      "Buying and selling per team with funds checks, history and a live leaderboard.",
      "Local mode with no install, or a server mode synced across devices through WebSockets.",
    ],
    result: "Used for real during the summer 2025 camp.",
  },
  {
    slug: "sc-esport-stats",
    title: "SC Esport Stats",
    tagline: "A dashboard to follow a League of Legends team: win rate by side, champions, player stats.",
    year: "2025",
    kind: "Data · Esports",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    tint: "#efeafd",
    links: [{ label: "Code", href: "https://github.com/Alexandre-Machu/SC-Esport-Stats" }],
    context: "My first esports stats tool, built to track a team's progress across its matches.",
    built: [
      "Match import and stats by side, by champion and by player.",
      "Streamlit dashboard with Plotly charts.",
    ],
  },
  {
    slug: "memoire-big-data-esport",
    title: "First-year master's thesis: Big Data and esports",
    short: "Big Data & esports",
    tagline: "The role of Big Data in predicting performance, with League of Legends as a case study.",
    year: "2025",
    kind: "Research",
    stack: ["Data analysis", "Machine learning", "Riot API"],
    tint: "#f1f1ee",
    links: [
      {
        label: "Read the thesis (French)",
        href: "https://docs.google.com/document/d/1fomn2MA39cfw-g-J2taiS1VrptPqxtg5pUXURP_1mQY/edit?usp=sharing",
      },
    ],
    context: "Thesis for the first year of my master's in Information Systems Management at the Sorbonne.",
    built: [
      "Literature review on data in professional esports.",
      "League of Legends case study: which data predicts a win, and how teams use it.",
    ],
  },
];

export const jams = [
  {
    title: "Sunken Memories",
    event: "Code Game Jam 2022",
    note: "Design award",
    image: "/projets/sunken-memories.png",
  },
  { title: "The Golden Odyssey", event: "Code Game Jam 2021", image: "/projets/golden-odyssey.png" },
  { title: "Nuit de l'Info 2021", event: "Winner, general prize and partner challenges" },
];

export const experiences: Item[] = [
  {
    period: "Sept 2025 – Nov 2026",
    title: "Enterprise Architect (apprenticeship)",
    org: "Safran Electronics & Defense",
    summary: "Mapping and rationalising the information systems of more than 80 sites worldwide in ARIS, and architecture documents to scope projects.",
    place: "Massy, France",
    logo: "/logos/safran.png",
    text: "",
    bullets: [
      "Mapped the information systems of more than 80 SED sites worldwide, working directly with country contacts.",
      "Wrote high-level architecture documents (DAG): scoping the need, impact analysis, scenarios.",
      "Application portfolio rationalisation: duplicates, data inconsistencies, decommissioning candidates.",
      "Modelling and scripting in ARIS, creating and reorganising application object records.",
      "Reporting to management and project teams (Power BI, Excel, PowerPoint, Confluence).",
    ],
  },
  {
    period: "Nov 2023 – Apr 2024",
    title: "Esports Team Manager (freelance)",
    org: "SAN Esport",
    summary: "Managed a women's League of Legends team in a national league, with a tracking tool connected to the Riot API.",
    logo: "/logos/san.png",
    place: "Montpellier / Paris",
    text: "",
    bullets: [
      "Managed a women's League of Legends team in a national league: scheduling, registrations, reporting.",
      "Worked with the coach and looked after the team's well-being.",
      "Performance tracking sheets and a web tool connected to the Riot API to feed the coach's analysis.",
    ],
  },
  {
    period: "Sept 2023 – Aug 2024",
    title: "Web Developer (apprenticeship)",
    org: "CFD-Innovation",
    summary: "Testing and continuous integration on a training SaaS, and a web rebuild of IBM i screens for a client POC.",
    place: "Baillargues, France",
    logo: "/logos/cfd.png",
    text: "",
    bullets: [
      "GoForm (training management SaaS): PHPUnit integration tests and a GitLab CI pipeline.",
      "Customer Credit POC: web rebuild of IBM i 5250 screens in PHP/Twig, YAML routes and mocked JSON data.",
      "Weekly meetings with the client, training material.",
    ],
  },
  {
    period: "Jan – May 2023",
    title: "Coding Instructor (fixed-term)",
    org: "Écoles eSTIMe",
    summary: "Sole instructor teaching programming and robotics to 100 pupils across 5 classes.",
    logo: "/logos/estime.png",
    place: "Montreal, Canada",
    text: "",
    bullets: [
      "Introduction to programming and robotics for 100 pupils across 5 classes.",
      "Sole instructor: planning, running and adapting the sessions.",
      "Rewrote the teaching material step by step.",
    ],
  },
  {
    period: "Apr – Aug 2022",
    title: "Web Developer (internship)",
    org: "Yooz",
    summary: "Web rebuild of an internal tool in Angular and Node.js, in pairs and in sprints.",
    place: "Aimargues, France",
    logo: "/logos/yooz.png",
    text: "",
    bullets: [
      "Web rebuild of Explorer, an internal tool to browse the document flow, in pairs and in sprints.",
      "Angular (TypeScript) front end: Batch / Envelope / Document / Page tree, entity tables.",
      "Node.js / Express back end on PostgreSQL, tested with Postman.",
    ],
  },
];

export const extras: Item[] = [
  {
    period: "Sept 2024 – Jan 2025",
    title: "Market study",
    org: "Guerlain",
    place: "Paris",
    logo: "/logos/guerlain.png",
    text: "Master's project: industry benchmark, qualitative interviews, quantitative survey and recommendations.",
  },
];

export const education: Item[] = [
  {
    period: "Since Oct 2026",
    title: "University diploma in Influence and Cybersecurity",
    org: "Sorbonne Law School, Paris 1",
    logo: "/logos/paris1.png",
    text: "Cybersecurity law, cybercrime, economic intelligence and influence.",
  },
  {
    period: "2024 – 2026",
    title: "Master MIKS (Information Systems)",
    org: "Sorbonne Business School, Paris 1 Panthéon-Sorbonne",
    logo: "/logos/paris1.png",
    text: "Thesis on application portfolio rationalisation after an acquisition, based on the ARIS repository.",
  },
  {
    period: "2023 – 2024",
    title: "BUT in Computer Science (3rd year)",
    org: "IUT Montpellier-Sète",
    logo: "/logos/umontpellier.png",
    text: "",
  },
  {
    period: "2022 – 2023",
    title: "DUETI in Software Engineering",
    org: "ÉTS Montreal",
    logo: "/logos/ets.png",
    text: "",
  },
  {
    period: "2020 – 2022",
    title: "DUT in Computer Science",
    org: "IUT Montpellier-Sète",
    logo: "/logos/umontpellier.png",
    text: "",
  },
];

export const esport: Item[] = [
  {
    period: "Nov 2025 – Sept 2026",
    title: "Co-founder and former President",
    org: "Paris 1 Esport",
    logo: "/logos/p1e.png",
    text: "The esports society of Paris 1: more than 500 active members in 5 months, dozens of events, volunteer teams to coordinate. Partnerships with Karmine Corp and Team Vitality, a talk with Nicolas Maurer (CEO of Vitality) at the Sorbonne.",
  },
  {
    period: "Apr 2026",
    title: "Accredited media photographer",
    org: "LEC Roadtrip · Karmine Corp",
    logo: "/logos/karmine.png",
    text: "At the Arènes in Évry-Courcouronnes, stage-side and in the press area, through the partnership between Paris 1 Esport and Karmine Corp.",
  },
  {
    period: "Nov 2025",
    title: "Event staff",
    org: "VALORANT Champions Paris · ITL Production",
    logo: "/logos/valorant.png",
    text: "Freelance assignment at the Valorant world championship, organised by Riot Games: on-site operational support.",
  },
  {
    period: "Nov 2023 – Apr 2024",
    title: "Manager",
    org: "SAN Esport",
    logo: "/logos/san.png",
    text: "A women's League of Legends team in a national league: scheduling, registrations, working with the coach, and a tool connected to the Riot API for analysis.",
  },
  {
    period: "Apr – Sept 2024",
    title: "President",
    org: "Montpellier Student Gaming",
    logo: "/logos/msg.png",
    text: "Student society in Montpellier, 150 active members in less than a year.",
  },
  {
    period: "2022 – 2023",
    title: "Head of communications and graphic designer",
    org: "esporTS, ÉTS Montreal",
    logo: "/logos/esports-ets.png",
    text: "The ÉTS esports society, during my year in Montreal: the club's communication and visuals.",
  },
  {
    period: "May – Jul 2021",
    title: "Video editor (freelance)",
    org: "FC Nantes Esport",
    logo: "/logos/fcnantes.png",
    text: "Promotional videos for the League of Legends team in the French league's second division: rushes, editing and effects in Adobe's suite, translating English communications.",
  },
  {
    period: "Apr 2020 – May 2021",
    title: "Video editor and community manager (freelance)",
    org: "Elyandra Esport",
    logo: "/logos/elyandra.png",
    text: "Social media (Twitter, Instagram) and videos for a League of Legends team that climbed from the third to the second division, then all the way to the LFL. Posts planned with TweetDeck and Trello.",
  },
];

export const photos = [
  { src: "/photos/esport-1.webp", alt: "Karmine Corp fans standing in the stands" },
  { src: "/photos/esport-2.webp", alt: "Two Karmine Corp players on stage, in the smoke" },
  { src: "/photos/esport-3.webp", alt: "Teams lined up on stage under the giant screen" },
  { src: "/photos/esport-5.webp", alt: "On-stage interview after a match" },
  { src: "/photos/esport-4.webp", alt: "A player with his hands on his head, in black and white" },
  { src: "/photos/esport-6.webp", alt: "A player focused at his station during the draft" },
];

export const scouts: Item = {
  period: "Since 2021",
  title: "Scout camp director and leader",
  org: "Éclaireuses Éclaireurs unionistes de France",
  place: "Jacou group, near Montpellier",
  text: "Leader since 2021, camp director since 2024. I supervise 6 leaders and 35 children, one weekend a month and three weeks every summer. French youth leader and director certificates (BAFA, BAFD), first aid (PSC1).",
};

export const highlights = [
  { value: "80+", label: "sites mapped worldwide at Safran" },
  { value: "990", label: "TOEIC score, the maximum" },
  { value: "500+", label: "members in the esports society I co-founded" },
  { value: "BAFD", label: "scout camp director since 2024" },
];

export const passions: { emoji: string; value: string; label: string }[] = [
  { emoji: "🍓", value: "Top 1000", label: "Celeste speedrun" },
  { emoji: "🎹", value: "16 years", label: "Piano" },
  { emoji: "🏐", value: "6 years", label: "Volleyball" },
  { emoji: "🏍️", value: "Moto", label: "Suzuki V-Strom 650" },
  { emoji: "🚆", value: "Rails", label: "Metros, trains, planes" },
];

export const skills = [
  {
    label: "Business analysis",
    items: ["Scoping studies", "Requirements gathering", "Functional specifications", "Application mapping and repositories (ARIS)", "Data quality and governance", "Power BI reporting"],
  },
  {
    label: "Technical",
    items: ["Python", "SQL", "JavaScript / TypeScript", "Angular", "Node.js", "Next.js", "Twig"],
  },
  {
    label: "Tools",
    items: ["Office / SharePoint", "Confluence", "Jira", "Trello", "Teams", "GitHub Actions"],
  },
  {
    label: "Languages",
    items: ["French (native)", "English, C2 (TOEIC 990/990)", "German, intermediate", "Basics of Japanese, Russian, Italian, Arabic"],
  },
  {
    label: "Certifications",
    items: ["BAFA", "BAFD", "PSC1 first aid", "Car and A2 motorcycle licences"],
  },
];
