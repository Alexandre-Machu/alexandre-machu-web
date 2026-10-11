@AGENTS.md

# Portfolio Alexandre Machu (alexandre-machu-web)

Résumé repris de la session Claude Code `976422d4-b7ec-4e83-ad11-03abbb4f8c64` (10 oct. 2026), dont le transcript est dans
`C:\Users\alexc\.claude\projects\C--Users-alexc-Desktop\` (copie dans `C:\Users\alexc\OneDrive\Archives\Sauvegarde Claude Code\`).

## Objectif

Site perso type portfolio pour la recherche de CDI (fin du M2 en novembre 2026). Il doit mettre les projets en avant
et montrer le profil hybride SI / esport, avec le SI en premier pour l'instant.

## Où est le code

- Projet : `D:\Projets\Code\alexandre-machu-web` (l'ancien chemin `D:\Projets code` pointe au même endroit).
- Ancienne version de mai 2026 (sombre, switch IRL/IG, framer-motion) archivée dans `D:\Projets\Code\_archives\alexandre-machu-web-mai2026`.
- Repo GitHub `Alexandre-Machu/alexandre-machu-web`, branche `main`.

## Stack

- Next.js 16.2.4 (App Router), React 19, Tailwind CSS 4, TypeScript, lucide-react. Polices Geist + Instrument Serif.
- `next.config.ts` : `output: "export"` + images non optimisées, le build sort un site statique dans `out/`.
- Lire `node_modules/next/dist/docs/` avant de coder (voir AGENTS.md), cette version de Next a des changements cassants.

## Structure

- `lib/data.ts` : tout le contenu (profil, projets, game jams, expériences, formation, engagements, compétences). C'est le seul fichier à toucher pour modifier le texte ou ajouter un projet.
- `app/page.tsx` : page unique (accueil, projets, parcours, formation, compétences, engagements, contact).
- `app/projets/[slug]/page.tsx` : page détail par projet (contexte, ce qui a été fait, stack, liens).
- `components/` : Navbar, Footer, Icons (logos GitHub/LinkedIn, absents de lucide), ProjectCard, ProjectVisual (capture ou vignette colorée), Section (dont Timeline).
- `public/projets/` : visuels (captures P1E et BagExpress faites avec Edge headless, logos des game jams récupérés de l'ancien site CV).

## Décisions prises

- Un seul site, pas un site SI + un site esport : moins à maintenir, et le profil hybride est un atout. Quand Alex visera l'esport, on changera l'ordre et le texte d'accueil.
- On repart du projet Next.js de mai plutôt que d'Astro (proposé au début) ; le switch IRL/IG est supprimé car il cachait la moitié du profil.
- Style clair et épuré, tout sur une page, projets juste après l'accueil.
- Projets mis en grand : OccilanScout, site Paris 1 Esport, Alex OS. Ensuite : BagExpress, bot LRC, ActiBourse, SC Esport Stats, mémoire M1 Big Data, puis les game jams.
- Hébergeur pas choisi, d'où l'export statique (GitHub Pages, Vercel, Netlify possibles).
- Textes en français, version anglaise éventuelle plus tard. Style d'écriture d'Alex : concis, factuel, pas de tiret quadratin, pas de ton pompeux.

## État actuel (au 11 oct. 2026)

- Première version terminée, `npm run build` passe. Vérifiée en captures desktop et mobile (375 px, pas de débordement).
- `node_modules` a été réinstallé proprement après un plantage de l'appli pendant l'install (binaire SWC et lucide-react corrompus).
- Premier commit fait en local le 11 oct. 2026, pas encore poussé sur GitHub (à faire avec l'accord d'Alex).
- Alex n'est plus président de Paris 1 Esport (il a passé la main) : le site affiche « Co-fondateur et ancien président ».
- Captures OccilanScout (app publique) et Alex OS ajoutées dans `public/projets/`. Alex OS est privé et contient de vraies données bancaires : sa capture est faite sur son `index.html` en local avec des données fictives (google.script.run simulé), jamais sur l'appli en ligne.
- Pour capturer une page lente (Streamlit), Edge headless en ligne de commande ne suffit pas : lancer Edge avec `--remote-debugging-port` et appeler `Page.captureScreenshot` après une vraie attente (Node 22 a WebSocket en natif).

## Prochaines étapes

1. CV en PDF dans `public/cv-alexandre-machu.pdf` (le bouton CV est cassé tant qu'il manque). Source possible : Canva « CV Base FR » (DAHD3T6HV5E).
2. Choisir l'hébergement et éventuellement un nom de domaine (ex. alexandre-machu.fr).

## Commandes

```bash
npm run dev     # dev local
npm run build   # export statique dans out/
npx serve out   # servir le build
```

Python n'est pas dans le PATH sur ce PC ; Node est disponible.
