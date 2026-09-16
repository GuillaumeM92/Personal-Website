# guillaume-merle.fr

Mon site personnel : profil, parcours, projets perso (Space Defender, Petit Vaisseau, La Bouygue) et CV.
Site statique généré avec [Astro](https://astro.build), en français (`/`) et en anglais (`/en/`).

En ligne : **https://guillaume-merle.fr**

---

## Démarrer

Node.js 22 ou plus récent (`brew install node`).

```bash
npm install
npm run dev        # http://localhost:4321, rechargement à chaud
npm run build      # génère le site dans dist/
npm run preview    # sert dist/ pour vérifier le résultat final
```

## Ce qu'il y a dans le dépôt

```
src/
├── data/content.ts        TOUS les textes, en FR et en EN, plus les liens
├── pages/                 index (FR), en/index (EN), cv, en/cv, 404
├── layouts/
│   ├── Base.astro         <head>, SEO, champ d'étoiles, animations d'apparition
│   ├── Home.astro         assemble les sections de la page d'accueil
│   └── Cv.astro           le CV (page A4, imprimable)
├── components/            Header, Hero, About, Experience, Projects, Skills, Contact, Footer…
├── styles/global.css      couleurs, typo, boutons (thème sombre unique)
└── assets/                photo, visuels de Space Defender, logo Petit Vaisseau, image de partage
public/
├── cv/                    les CV PDF (générés, voir plus bas)
├── favicon.svg, apple-touch-icon.png, robots.txt
scripts/
├── cv-pdf.mjs             génère les CV PDF
├── og-image.mjs           génère l'image de partage et l'icône iOS
└── deploy.sh              construit et envoie sur le VPS
deploy/
└── nginx-personal_website.conf   config nginx du serveur
```

## Modifier le contenu

- **Les textes** sont tous dans `src/data/content.ts`, une fois en `fr`, une fois en `en`.
  Si tu modifies une phrase, modifie les deux.
- **Une nouvelle expérience** : ajoute un objet en tête de `experience.items`, dans les deux langues.
  `end: null` signifie « aujourd'hui ». Le CV reprend les trois premières entrées comme expériences,
  la quatrième comme formation (`src/layouts/Cv.astro`).
- **La sortie 1.0 de Space Defender** : la date est dans `sdRelease`. Après cette date, le site
  affiche tout seul « disponible » (petit script dans le navigateur), sans redéploiement.
  Pense quand même à relire les textes du jeu une fois la 1.0 sortie.
- **Les couleurs** : en haut de `src/styles/global.css`. Le cyan `#38D6E0` est celui de Petit Vaisseau,
  l'orange `#FF7A4D` celui du logo de Space Defender.

## Le CV

La page `/cv/` (et `/en/cv/`) est le CV lui-même. Après toute modification du contenu :

```bash
npx playwright install chromium   # une seule fois
npm run cv:pdf
```

Le script construit le site, imprime les deux pages et écrit
`public/cv/guillaume-merle-cv.pdf` et `public/cv/guillaume-merle-resume.pdf`.
Il prévient si le CV dépasse une page A4. Versionne les PDF, puis déploie.

## Déployer

Le site est servi par nginx sur le VPS (`ionos` dans `~/.ssh/config`), depuis `/var/www/guillaume-merle.fr`.

```bash
npm run deploy
```

Le script construit le site, puis synchronise `dist/` avec rsync (les fichiers supprimés localement
le sont aussi sur le serveur).

### Mise en place du serveur (déjà faite, pour mémoire)

1. `mkdir -p /var/www/guillaume-merle.fr`
2. Copier `deploy/nginx-personal_website.conf` dans `/etc/nginx/sites-enabled/personal_website`
   (l'ancienne version est sauvegardée dans `/etc/nginx/sites-available/personal_website.django.bak`)
3. `nginx -t && systemctl reload nginx`

Les anciennes adresses du site Django (`/about/`, `/portfolio/`, `/about-en/`, `/portfolio-en/`)
sont redirigées en 301 par nginx.

**Revenir à l'ancien site Django** : recopier la sauvegarde `.django.bak` dans `sites-enabled/personal_website`,
puis `nginx -t && systemctl reload nginx`. Le code Django et son gunicorn (supervisor,
`personal_website-gunicorn`) sont toujours sur le serveur, et le code est dans l'historique git.
