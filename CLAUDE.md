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

- Site bilingue : français sur `/`, anglais sur `/en` (projets : `/projets/<slug>` et `/en/projects/<slug>`). Deux layouts racines via les groupes `app/(fr)` et `app/(en)`, bouton FR / EN dans la nav (`components/LangSwitch.tsx`).
- `lib/data.ts` (français) et `lib/data.en.ts` (anglais) : tout le contenu, mêmes exports dans le même ordre. **Toute modif de l'un se reporte dans l'autre.**
- `lib/i18n.ts` : textes d'interface des deux langues, helpers de liens (`projectHref`, `switchPath`).
- `components/HomePage.tsx` et `components/ProjectPage.tsx` : les pages, avec un paramètre `lang`. `components/Shell.tsx` : html, polices, métadonnées (hreflang, Open Graph, `SITE_URL` à changer avec le nom de domaine).
- Images d'aperçu : `/og/fr.png` et `/og/en.png`, générées au build par `lib/og.tsx` via des route handlers.
- `public/` : `projets/` (captures), `logos/`, `alexandre.webp` (photo pro), `esport-micro.jpg` (séminaire esport Paris-Saclay, sept. 2026), CV.

## Décisions prises

- Un seul site, pas un site SI + un site esport : moins à maintenir, et le profil hybride est un atout. Quand Alex visera l'esport, on changera l'ordre et le texte d'accueil.
- On repart du projet Next.js de mai plutôt que d'Astro (proposé au début) ; le switch IRL/IG est supprimé car il cachait la moitié du profil.
- Style clair et épuré, tout sur une page, projets juste après l'accueil.
- Projets affichés (11 oct. 2026, choix d'Alex) : seulement OccilanScout et le site Paris 1 Esport (`featured: true`). Les autres (Alex OS jugé moche, BagExpress, bot LRC, ActiBourse, SC Esport Stats, mémoire M1, game jams) restent dans les données mais ne sont plus affichés ni générés.
- Hébergeur pas choisi, d'où l'export statique (GitHub Pages, Vercel, Netlify possibles).
- Textes en français, version anglaise éventuelle plus tard. Style d'écriture d'Alex : concis, factuel, pas de tiret quadratin, pas de ton pompeux.

## État actuel (au 11 oct. 2026)

- Première version terminée, `npm run build` passe. Vérifiée en captures desktop et mobile (375 px, pas de débordement).
- `node_modules` a été réinstallé proprement après un plantage de l'appli pendant l'install (binaire SWC et lucide-react corrompus).
- Poussé sur GitHub le 11 oct. 2026. Le site est calqué sur le CV Business Analyst (même titre, expériences, dates, formation, compétences). Règle : quand le CV change, répercuter sur le site.
- Idée directrice validée par Alex : partir du CV, et montrer en plus les side projects et le reste (missions hors CV, assos, centres d'intérêt). Un « brief » plus lourd (section à propos, différenciateurs, chasse aux chiffres) a été écarté le 11 oct., ne pas le ressortir.
- Contenu au 11 oct. 2026 : accueil (photo en carte, chiffres clés), parcours (résumé d'une ligne + détail dépliable, logos), 2 projets, section Esport sombre (8 expériences, carte Master vers op.gg, galerie de ses photos dans public/photos, photo du séminaire Paris-Saclay), « Le reste du temps » (scouts + 5 passions avec emoji), contact. Lien Behance.
- Retours d'Alex sur le ton : pas de phrases d'accroche ni de petits commentaires « IA », titres factuels, pas de chiffres inventés.
- Captures OccilanScout (app publique) et Alex OS ajoutées dans `public/projets/`. Alex OS est privé et contient de vraies données bancaires : sa capture est faite sur son `index.html` en local avec des données fictives (google.script.run simulé), jamais sur l'appli en ligne.
- Pour capturer une page lente (Streamlit), Edge headless en ligne de commande ne suffit pas : lancer Edge avec `--remote-debugging-port` et appeler `Page.captureScreenshot` après une vraie attente (Node 22 a WebSocket en natif).

## Prochaines étapes

1. En ligne sur https://www.alexandremachu.fr (domaine OVH d'Alex, A @ et CNAME www vers Vercel ; alexandremachu.fr redirige en 308 vers www) et https://alexandre-machu-web.vercel.app. Vercel redéploie à chaque push sur main. Ne pas toucher aux enregistrements mail de la zone OVH (MX, SPF, DKIM, SRV).
2. CV sources : `OneDrive\Pro\CVs\7. CV CDI 2026\CV_MACHU-Alexandre_BusinessAnalyst-FR.pdf` et `-EN.pdf`, copiés dans `public/cv-alexandre-machu.pdf` et `public/cv-alexandre-machu-en.pdf`. Les intitulés du site (FR et EN) suivent ceux des CV.

## Commandes

```bash
npm run dev     # dev local
npm run build   # export statique dans out/
npx serve out   # servir le build
```

Python n'est pas dans le PATH sur ce PC ; Node est disponible.
