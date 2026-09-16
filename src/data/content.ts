// Tout le texte du site, en français et en anglais.
// Si tu modifies une phrase dans une langue, pense à modifier l'autre.

export type Lang = 'fr' | 'en';

export const links = {
  email: 'gemacx@gmail.com',
  linkedin: 'https://www.linkedin.com/in/guillaume-merle-8a239a207/',
  github: 'https://github.com/GuillaumeM92',
  steam: 'https://store.steampowered.com/app/1731170/',
  studio: 'https://petitvaisseau.guillaume-merle.fr/',
  studioGame: 'https://petitvaisseau.guillaume-merle.fr/space-defender.html',
  trailer: 'https://www.youtube.com/watch?v=vVd2VChcjos',
  discord: 'https://discord.com/invite/AUMtECDCx8',
  bouygue: 'https://labouygue.fr/',
  bouygueRepo: 'https://github.com/GuillaumeM92/La-Bouygue',
};

// Date de sortie de la 1.0 de Space Defender. Le site bascule seul sur « disponible »
// une fois la date passée (petit script côté navigateur, pas besoin de redéployer).
export const sdRelease = '2026-09-29T19:00:00+02:00';

export const paths = {
  fr: { home: '/', cv: '/cv/', pdf: '/cv/guillaume-merle-cv.pdf' },
  en: { home: '/en/', cv: '/en/cv/', pdf: '/cv/guillaume-merle-resume.pdf' },
};

export const ui = {
  fr: {
    metaTitle: 'Guillaume Merle · Ingénieur Plateforme / MLOps',
    metaDescription:
      "Ingénieur Plateforme / MLOps spécialisé Azure et Databricks, basé près de Niort. Développeur Python depuis 5 ans, et créateur du jeu Space Defender sur Steam.",
    skip: 'Aller au contenu',
    nav: { about: 'Profil', experience: 'Parcours', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
    cv: 'CV',
    otherLang: 'English',
    otherLangShort: 'EN',
    ids: { about: 'profil', experience: 'parcours', projects: 'projets', skills: 'competences', contact: 'contact' },

    hero: {
      role: 'Ingénieur Plateforme / MLOps',
      stack: 'Azure · Databricks · Python',
      lead:
        "J'industrialise des plateformes data et IA : pipelines, CI/CD, Databricks et mise en production. Le soir, je fabrique des jeux vidéo.",
      location: 'Près de Niort · sur site ou télétravail partiel',
      years: "5 ans d'expérience",
      ctaCv: 'Voir mon CV',
      ctaContact: 'Me contacter',
      sdTeaser: 'Space Defender 1.0',
      sdTeaserDate: 'le 29 septembre sur Steam',
      sdTeaserOut: 'disponible sur Steam',
      portraitAlt: 'Portrait de Guillaume Merle',
    },

    about: {
      kicker: 'Profil',
      title: 'Entre le code, le cloud et la plateforme',
      paragraphs: [
        "Je suis actuellement en mission dans un grand groupe d'assurance, où j'industrialise des plateformes data et IA sur Azure. Au quotidien : MLOps, pipelines de données, CI/CD, Databricks, et mise en production de solutions fiables, sécurisées et faciles à maintenir.",
        "Mon terrain de jeu, c'est la frontière entre le développement Python, le cloud Azure et l'ingénierie plateforme. Je tiens beaucoup à la robustesse, à l'automatisation et à la capacité de passer à l'échelle.",
        "J'ai travaillé pour de grands comptes comme pour de petites équipes, en français comme en anglais. J'aime les missions où la technique compte autant que l'organisation.",
      ],
      facts: [
        { k: 'Poste', v: 'Consultant MLOps · Groupe Covéa' },
        { k: 'Statut', v: 'Freelance' },
        { k: 'Zone', v: 'Nouvelle-Aquitaine, proche Niort' },
        { k: 'Langues', v: 'Français, anglais courant' },
      ],
    },

    experience: {
      kicker: 'Parcours',
      title: "De la reconversion à l'ingénierie plateforme",
      now: "aujourd'hui",
      items: [
        {
          title: 'Ingénieur Plateforme / MLOps – Azure & Databricks',
          org: 'Groupe Covéa – SmartIA',
          kind: 'Consultant freelance',
          place: 'Niort · hybride',
          start: 'sept. 2024',
          end: null,
          summary: "Industrialisation des plateformes data et IA d'un grand groupe d'assurance.",
          bullets: [
            'Conception et exploitation de plateformes data et IA sur Azure',
            'Mise en place et maintenance de pipelines MLOps et DevOps',
            'Industrialisation de traitements data sur Databricks',
            'Support technique et accompagnement des équipes data et IA',
            "Contribution aux choix d'architecture, à l'automatisation et aux bonnes pratiques de la plateforme",
          ],
          tags: ['Azure', 'Databricks', 'MLOps', 'CI/CD', 'Python'],
        },
        {
          title: 'Développeur Python backend',
          org: 'Freelance',
          kind: 'Mission via Upwork',
          place: 'À distance',
          start: 'juil. 2023',
          end: 'août 2024',
          summary: 'Mission pour Scalexa, sur la plateforme de casino en ligne Full Color Games.',
          bullets: [
            "Développement d'une API Gateway avec FastAPI",
            'Travail quotidien au sein d’une équipe anglophone',
          ],
          tags: ['Python', 'FastAPI', 'API REST'],
        },
        {
          title: 'Développeur Python / Django',
          org: 'Zentux',
          kind: 'CDI',
          place: 'Lencloître',
          start: 'sept. 2021',
          end: 'juil. 2023',
          summary: 'Développement full-stack pour des clients de secteurs très différents.',
          bullets: [
            "Aéronautique : interface cartographique de surveillance industrielle par drones (GeoDjango, PostGIS, Leaflet, WebSockets)",
            'Coopérative d’entrepreneurs : maintenance et évolution d’une plateforme de devis et de facturation, API REST pour un front Vue.js',
            'Grande distribution : traducteur open source de commandes et factures selon la norme EDI (EDIFACT, PyAS2)',
            'Git, GitFlow, CI/CD, conteneurisation, tests, méthodes agiles, échanges directs avec les clients',
          ],
          tags: ['Django', 'DRF', 'PostGIS', 'Docker', 'EDI'],
        },
        {
          title: 'Formation Développeur d’application Python',
          org: 'OpenClassrooms',
          kind: 'Reconversion · niveau bac+3/4',
          place: 'À distance',
          start: 'oct. 2019',
          end: 'avr. 2021',
          summary: 'Un an et demi de projets concrets, du script au site déployé.',
          bullets: [
            'Création et déploiement de sites web avec Python, Django et Nginx',
            'Algorithmique, moteur de recherche, prédiction',
            'Application web avec chatbot : NLP, API Google Maps et Wikipédia',
            'Conception technique et fonctionnelle (UML)',
          ],
          tags: ['Python', 'Django', 'Flask', 'UML'],
        },
      ],
    },

    projects: {
      kicker: 'Projets perso',
      title: 'Ce que je construis à côté',
      intro:
        "En dehors des missions, j'ai monté un petit studio de jeu vidéo et je développe des outils pour mes proches.",
      sd: {
        label: 'Jeu vidéo · Petit Vaisseau',
        name: 'Space Defender: Frontier Squadron',
        pitch:
          "Un shooter spatial vu de dessus avec une progression RPG. Menez une escadrille contre l'invasion des Drones à travers trois galaxies.",
        body:
          "Mon premier jeu, développé seul avec Unity et C#, en parallèle d'un emploi à plein temps. Il est sorti en accès anticipé sur Steam en mai 2025, et les retours des joueurs ont façonné la version 1.0 : le système d'ailiers est né d'une suggestion faite sur Discord.",
        statusSoon: 'Sortie 1.0',
        statusOut: 'Disponible en 1.0',
        statusSoonDate: '29 septembre 2026',
        statusOutDate: 'sur Steam',
        stats: [
          { v: '8', k: 'vaisseaux' },
          { v: '60+', k: 'équipements' },
          { v: '13', k: 'types de contrats' },
          { v: '3', k: 'actes de campagne' },
        ],
        features: [
          "Recrutez jusqu'à trois ailiers et confiez-leur les vaisseaux de votre hangar",
          'Gestion de l’énergie : chaque équipement change la façon de voler',
          'Des Drones aux comportements distincts : tireurs d’élite, poseurs de mines, porte-chasseurs…',
        ],
        meta: 'Unity · C# · Windows et macOS · français et anglais · manette compatible · 9,99 €',
        platformsNext: 'Linux envisagé, puis Android et iOS dans un second temps.',
        steam: 'Voir sur Steam',
        page: 'Page du jeu',
        trailer: 'Bande-annonce',
        shotsAlt: [
          'Une escadrille et ses ailiers au combat, en route vers la station Hathor-64',
          'Échange de tirs près de la station Ramses-70',
          'Le hangar : choix du vaisseau et de ses caractéristiques',
        ],
        keyArtAlt: 'Visuel de Space Defender : un vaisseau file au-dessus d’une planète, poursuivi par deux Drones',
      },
      studio: {
        label: 'Studio indépendant',
        name: 'Petit Vaisseau',
        tagline: 'Un studio d’une seule personne, et un vaisseau à la fois.',
        body:
          "Le studio qui publie Space Defender. Sa règle : sortir petit, écouter les joueurs, corriger. Le site du studio réunit la page du jeu, le dossier de presse et le Discord.",
        cta: 'Visiter le site du studio',
      },
      bouygue: {
        label: 'Application web familiale',
        name: 'La Bouygue',
        body:
          "Le site de la maison de vacances familiale : réservation des séjours sur un calendrier partagé, forum, suivi des travaux et du budget, espace d'administration. Mon premier vrai projet en production, toujours utilisé.",
        news: 'Nouvelle interface en cours de déploiement',
        tags: ['Django', 'PostgreSQL', 'JavaScript', 'Nginx'],
        site: 'labouygue.fr',
        repo: 'Code sur GitHub',
      },
    },

    skills: {
      kicker: 'Compétences',
      title: 'Boîte à outils',
      groups: [
        { name: 'Cloud & MLOps', items: ['Microsoft Azure', 'Azure Databricks', 'MLOps', 'Pipelines de données', 'CI/CD', 'Industrialisation'] },
        { name: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Django REST Framework', 'API REST', 'WebSockets', 'Flask'] },
        { name: 'Données', items: ['PostgreSQL', 'PostGIS / GeoDjango', 'MySQL / MariaDB', 'SQL', 'EDI (EDIFACT)'] },
        { name: 'DevOps & outils', items: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'Gunicorn', 'Git / GitFlow', 'Sentry', 'Bash'] },
        { name: 'Front & jeu vidéo', items: ['JavaScript', 'HTML / CSS', 'Leaflet', 'Unity', 'C#'] },
        { name: 'Méthodes', items: ['Agile / Kanban', 'Tests (Pytest, Selenium)', 'UML', 'Documentation', 'Relation client'] },
      ],
      languagesTitle: 'Langues',
      languages: [
        { name: 'Français', level: 'langue maternelle' },
        { name: 'Anglais', level: 'courant, travail en équipe anglophone' },
        { name: 'Espagnol', level: 'notions' },
      ],
      interestsTitle: 'En dehors du travail',
      interests: ['Jeu vidéo', 'Tennis, course à pied, randonnée', 'Piano', 'Histoire et patrimoine', 'Voyages'],
    },

    contact: {
      kicker: 'Contact',
      title: 'Une mission, un projet, une question ?',
      body: "Le plus simple est de m'écrire. Je réponds personnellement.",
      email: 'Écrire un e-mail',
      copy: 'Copier l’adresse',
      copied: 'Adresse copiée',
      cvTitle: 'Mon CV',
      cvView: 'Voir en ligne',
      cvPdf: 'Télécharger le PDF',
    },

    footer: {
      made: 'Site statique fait main, sans traceur.',
      backTop: 'Haut de page',
    },

    cvPage: {
      title: 'CV · Guillaume Merle',
      back: 'Retour au site',
      print: 'Imprimer',
      pdf: 'Télécharger le PDF',
      headline: 'Ingénieur Plateforme / MLOps – Azure & Databricks',
      location: 'Parthenay (79) · proche Niort',
      profileTitle: 'Profil',
      profile:
        "Ingénieur plateforme et MLOps avec 5 ans d'expérience en développement Python. J'industrialise des plateformes data et IA sur Azure et Databricks, avec une attention particulière à la robustesse, à l'automatisation et au passage à l'échelle. À l'aise en contexte grand compte comme en équipe internationale.",
      experienceTitle: 'Expérience',
      educationTitle: 'Formation',
      skillsTitle: 'Compétences',
      projectsTitle: 'Projets personnels',
      projects: [
        { name: 'Space Defender: Frontier Squadron', text: 'Jeu vidéo publié sur Steam (Unity, C#). Développé seul, accès anticipé en mai 2025, version 1.0 en septembre 2026.' },
        { name: 'Petit Vaisseau', text: 'Studio de jeu vidéo indépendant : production, site, dossier de presse, communauté Discord.' },
        { name: 'La Bouygue', text: 'Application Django de réservation et de gestion pour une maison familiale, en production depuis 2021.' },
      ],
      languagesTitle: 'Langues',
      interestsTitle: 'Centres d’intérêt',
    },

    notFound: {
      title: 'Perdu dans l’espace',
      body: 'Cette page n’existe pas, ou plus. Le vaisseau vous ramène à bon port.',
      cta: 'Retour à l’accueil',
    },
  },

  en: {
    metaTitle: 'Guillaume Merle · Platform / MLOps Engineer',
    metaDescription:
      'Platform / MLOps engineer specialised in Azure and Databricks, based in western France. Python developer for 5 years, and maker of the game Space Defender on Steam.',
    skip: 'Skip to content',
    nav: { about: 'Profile', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    cv: 'Resume',
    otherLang: 'Français',
    otherLangShort: 'FR',
    ids: { about: 'profile', experience: 'experience', projects: 'projects', skills: 'skills', contact: 'contact' },

    hero: {
      role: 'Platform / MLOps Engineer',
      stack: 'Azure · Databricks · Python',
      lead:
        'I industrialise data and AI platforms: pipelines, CI/CD, Databricks and production releases. In the evenings, I make video games.',
      location: 'Near Niort, France · on-site or partly remote',
      years: '5 years of experience',
      ctaCv: 'View my resume',
      ctaContact: 'Get in touch',
      sdTeaser: 'Space Defender 1.0',
      sdTeaserDate: 'out September 29 on Steam',
      sdTeaserOut: 'out now on Steam',
      portraitAlt: 'Portrait of Guillaume Merle',
    },

    about: {
      kicker: 'Profile',
      title: 'Where code, cloud and platform meet',
      paragraphs: [
        "I'm currently working with a major insurance group, industrialising data and AI platforms on Azure. Day to day that means MLOps, data pipelines, CI/CD, Databricks, and shipping solutions that are reliable, secure and easy to maintain.",
        'My sweet spot is the boundary between Python development, Azure and platform engineering. I care a lot about robustness, automation and scaling.',
        "I've worked with large enterprises and small teams alike, in French and in English, and I enjoy assignments where the organisational side matters as much as the technical one.",
      ],
      facts: [
        { k: 'Role', v: 'MLOps consultant · Covéa Group' },
        { k: 'Status', v: 'Freelance' },
        { k: 'Area', v: 'Nouvelle-Aquitaine, near Niort' },
        { k: 'Languages', v: 'French, fluent English' },
      ],
    },

    experience: {
      kicker: 'Experience',
      title: 'From career change to platform engineering',
      now: 'present',
      items: [
        {
          title: 'Platform / MLOps Engineer – Azure & Databricks',
          org: 'Covéa Group – SmartIA',
          kind: 'Freelance consultant',
          place: 'Niort · hybrid',
          start: 'Sep 2024',
          end: null,
          summary: 'Industrialising the data and AI platforms of a major insurance group.',
          bullets: [
            'Designing and running data and AI platforms on Azure',
            'Building and maintaining MLOps and DevOps pipelines',
            'Industrialising data workloads on Databricks',
            'Technical support and guidance for data and AI teams',
            'Contributing to architecture decisions, automation and platform best practices',
          ],
          tags: ['Azure', 'Databricks', 'MLOps', 'CI/CD', 'Python'],
        },
        {
          title: 'Python Backend Developer',
          org: 'Freelance',
          kind: 'Contract via Upwork',
          place: 'Remote',
          start: 'Jul 2023',
          end: 'Aug 2024',
          summary: 'Contract for Scalexa, on the Full Color Games online casino platform.',
          bullets: ['Built an API Gateway with FastAPI', 'Worked daily within an English-speaking team'],
          tags: ['Python', 'FastAPI', 'REST APIs'],
        },
        {
          title: 'Python / Django Developer',
          org: 'Zentux',
          kind: 'Permanent',
          place: 'Lencloître, France',
          start: 'Sep 2021',
          end: 'Jul 2023',
          summary: 'Full-stack development for clients across very different industries.',
          bullets: [
            'Aerospace: mapping interface for drone-based industrial monitoring (GeoDjango, PostGIS, Leaflet, WebSockets)',
            "Entrepreneurs' cooperative: maintained and extended a quoting and invoicing platform, REST API for a Vue.js front end",
            'Retail: open-source translator for orders and invoices following the EDI standard (EDIFACT, PyAS2)',
            'Git, GitFlow, CI/CD, containers, testing, agile methods, working directly with clients',
          ],
          tags: ['Django', 'DRF', 'PostGIS', 'Docker', 'EDI'],
        },
        {
          title: 'Python Application Developer programme',
          org: 'OpenClassrooms',
          kind: "Career change · bachelor's level",
          place: 'Remote',
          start: 'Oct 2019',
          end: 'Apr 2021',
          summary: 'Eighteen months of hands-on projects, from scripts to deployed websites.',
          bullets: [
            'Built and deployed websites with Python, Django and Nginx',
            'Algorithms, search engine, prediction',
            'Chatbot web app using NLP, the Google Maps API and Wikipedia',
            'Technical and functional design (UML)',
          ],
          tags: ['Python', 'Django', 'Flask', 'UML'],
        },
      ],
    },

    projects: {
      kicker: 'Side projects',
      title: 'What I build on the side',
      intro: 'Outside client work, I run a tiny game studio and build tools for the people around me.',
      sd: {
        label: 'Video game · Petit Vaisseau',
        name: 'Space Defender: Frontier Squadron',
        pitch:
          'A top-down space shooter with RPG progression. Lead a squadron against the Drone invasion across three galaxies.',
        body:
          'My first game, made solo in Unity and C# alongside a full-time job. It entered Early Access on Steam in May 2025, and player feedback shaped version 1.0: the wingmen system started as a suggestion on Discord.',
        statusSoon: '1.0 release',
        statusOut: 'Version 1.0',
        statusSoonDate: 'September 29, 2026',
        statusOutDate: 'out now on Steam',
        stats: [
          { v: '8', k: 'ships' },
          { v: '60+', k: 'equipment items' },
          { v: '13', k: 'contract types' },
          { v: '3', k: 'campaign acts' },
        ],
        features: [
          'Recruit up to three wingmen and hand them ships from your hangar',
          'Energy management: every piece of equipment changes how your ship flies',
          'Drones with distinct behaviours: snipers, minelayers, carriers and more',
        ],
        meta: 'Unity · C# · Windows and macOS · English and French · controller support · €9.99',
        platformsNext: 'Linux is being considered, with Android and iOS to follow later.',
        steam: 'View on Steam',
        page: 'Game page',
        trailer: 'Trailer',
        shotsAlt: [
          'A squadron and its wingmen in combat, heading for Hathor-64 station',
          'Exchanging fire near Ramses-70 station',
          'The hangar: picking a ship and reviewing its stats',
        ],
        keyArtAlt: 'Space Defender key art: a ship races above a planet, chased by two Drones',
      },
      studio: {
        label: 'Independent studio',
        name: 'Petit Vaisseau',
        tagline: 'A studio of one, and one ship at a time.',
        body:
          'The studio behind Space Defender. Its rule: ship small, listen, fix. The studio site hosts the game page, the press kit and the Discord.',
        cta: 'Visit the studio site',
      },
      bouygue: {
        label: 'Family web app',
        name: 'La Bouygue',
        body:
          "The website of my family's holiday house: stay bookings on a shared calendar, a forum, works and budget tracking, and an admin area. My first real production project, still in use.",
        news: 'New interface being rolled out',
        tags: ['Django', 'PostgreSQL', 'JavaScript', 'Nginx'],
        site: 'labouygue.fr',
        repo: 'Code on GitHub',
      },
    },

    skills: {
      kicker: 'Skills',
      title: 'Toolbox',
      groups: [
        { name: 'Cloud & MLOps', items: ['Microsoft Azure', 'Azure Databricks', 'MLOps', 'Data pipelines', 'CI/CD', 'Industrialisation'] },
        { name: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Django REST Framework', 'REST APIs', 'WebSockets', 'Flask'] },
        { name: 'Data', items: ['PostgreSQL', 'PostGIS / GeoDjango', 'MySQL / MariaDB', 'SQL', 'EDI (EDIFACT)'] },
        { name: 'DevOps & tooling', items: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'Gunicorn', 'Git / GitFlow', 'Sentry', 'Bash'] },
        { name: 'Front end & games', items: ['JavaScript', 'HTML / CSS', 'Leaflet', 'Unity', 'C#'] },
        { name: 'Ways of working', items: ['Agile / Kanban', 'Testing (Pytest, Selenium)', 'UML', 'Documentation', 'Client relations'] },
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'French', level: 'native' },
        { name: 'English', level: 'fluent, daily work in English-speaking teams' },
        { name: 'Spanish', level: 'basic' },
      ],
      interestsTitle: 'Outside work',
      interests: ['Video games', 'Tennis, running, hiking', 'Piano', 'History and heritage', 'Travel'],
    },

    contact: {
      kicker: 'Contact',
      title: 'A contract, a project, a question?',
      body: 'Email is the easiest way to reach me. I reply personally.',
      email: 'Send an email',
      copy: 'Copy address',
      copied: 'Address copied',
      cvTitle: 'My resume',
      cvView: 'View online',
      cvPdf: 'Download PDF',
    },

    footer: {
      made: 'Hand-made static site, no trackers.',
      backTop: 'Back to top',
    },

    cvPage: {
      title: 'Resume · Guillaume Merle',
      back: 'Back to site',
      print: 'Print',
      pdf: 'Download PDF',
      headline: 'Platform / MLOps Engineer – Azure & Databricks',
      location: 'Parthenay, France · near Niort',
      profileTitle: 'Profile',
      profile:
        'Platform and MLOps engineer with 5 years of Python development experience. I industrialise data and AI platforms on Azure and Databricks, with a strong focus on robustness, automation and scaling. Comfortable in large enterprises and international teams alike.',
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      skillsTitle: 'Skills',
      projectsTitle: 'Side projects',
      projects: [
        { name: 'Space Defender: Frontier Squadron', text: 'Video game published on Steam (Unity, C#). Made solo; Early Access in May 2025, version 1.0 in September 2026.' },
        { name: 'Petit Vaisseau', text: 'Independent game studio: production, website, press kit, Discord community.' },
        { name: 'La Bouygue', text: 'Django booking and management app for a family holiday house, in production since 2021.' },
      ],
      languagesTitle: 'Languages',
      interestsTitle: 'Interests',
    },

    notFound: {
      title: 'Lost in space',
      body: "This page doesn't exist, or no longer does. The ship will take you home.",
      cta: 'Back to home',
    },
  },
} as const;

export type UI = (typeof ui)[Lang];
