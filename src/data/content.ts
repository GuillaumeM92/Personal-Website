// Tout le texte du site, en français et en anglais.
// Si tu modifies une phrase dans une langue, pense à modifier l'autre.

export type Lang = 'fr' | 'en';

export const links = {
  email: 'gemacx@gmail.com',
  linkedin: 'https://www.linkedin.com/in/guillaume-merle-8a239a207/',
  github: 'https://github.com/GuillaumeM92',
  steam: 'https://store.steampowered.com/app/1731170/',
  studio: 'https://petitvaisseau.com/',
  studioGame: 'https://petitvaisseau.com/space-defender.html',
  trailer: 'https://www.youtube.com/watch?v=vVd2VChcjos',
  discord: 'https://discord.com/invite/AUMtECDCx8',
  bouygue: 'https://labouygue.fr/',
  bouygueRepo: 'https://github.com/GuillaumeM92/La-Bouygue',
};

// Date de sortie de la 1.0 de Space Defender. Le site bascule seul sur « disponible »
// une fois la date passée (petit script côté navigateur, pas besoin de redéployer).
export const sdRelease = '2026-09-24T19:00:00+02:00';

export const paths = {
  fr: { home: '/', cv: '/cv/', pdf: '/cv/guillaume-merle-cv.pdf' },
  en: { home: '/en/', cv: '/en/cv/', pdf: '/cv/guillaume-merle-resume.pdf' },
};

export const ui = {
  fr: {
    metaTitle: 'Guillaume Merle · Ingénieur IA agentique & MLOps',
    metaDescription:
      "Ingénieur IA agentique & MLOps freelance, 100 % télétravail. Claude Code, agents et MCP, Python, Azure, Databricks. Fondateur de Petit Vaisseau, studio de jeux vidéo.",
    skip: 'Aller au contenu',
    nav: { about: 'Profil', experience: 'Parcours', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
    cv: 'CV',
    otherLang: 'English',
    otherLangShort: 'EN',
    ids: { about: 'profil', experience: 'parcours', projects: 'projets', skills: 'competences', contact: 'contact' },

    hero: {
      role: 'Ingénieur IA agentique & MLOps',
      stack: 'Claude Code · Agents · MCP · Python · Azure · Databricks',
      lead:
        "Je mets de l'IA en production et j'aide les équipes à développer avec des agents IA, sans perdre en qualité. Le soir, je fabrique des jeux vidéo.",
      location: 'Freelance · 100 % télétravail · français ou anglais',
      availability: 'Temps partiel (2 à 3 jours par semaine) ou forfait',
      ctaCv: 'Voir mon CV',
      ctaContact: 'Me contacter',
      sdTeaser: 'Space Defender 1.0',
      sdTeaserDate: 'le 24 septembre sur Steam',
      sdTeaserOut: 'disponible sur Steam',
      portraitAlt: 'Portrait de Guillaume Merle',
    },

    about: {
      kicker: 'Profil',
      title: 'Des agents IA, mais en production',
      paragraphs: [
        "Je mets de l'IA en production et j'aide les équipes de développement à travailler avec des agents IA (Claude Code) sans perdre en qualité.",
        "Je travaille au quotidien avec Claude Code, en orchestrant plusieurs agents en parallèle. Je conçois les règles, les skills, les hooks, les serveurs MCP et les garde-fous qui rendent ce mode de travail fiable pour une équipe.",
        "Derrière, il y a de la production réelle : deux ans comme ingénieur plateforme MLOps chez Covéa, sur Azure et Databricks, et une API gateway FastAPI pour un casino en ligne licencié, au sein d'une équipe anglophone.",
      ],
      facts: [
        { k: 'Statut', v: 'Freelance' },
        { k: 'Mode', v: '100 % télétravail' },
        { k: 'Format', v: 'Temps partiel (2 à 3 j/sem.) ou forfait' },
        { k: 'Langues', v: 'Français, anglais courant' },
      ],
    },

    offers: {
      kicker: 'Offres',
      title: 'Ce que je peux faire pour vous',
      items: [
        {
          name: 'Déployer Claude Code dans votre équipe',
          format: 'Forfait de 3 à 5 jours',
          body:
            "Audit de vos pratiques, puis configuration : CLAUDE.md, skills, hooks, serveurs MCP et permissions. J'ajoute les garde-fous de revue et de CI, et je termine par un atelier de prise en main avec l'équipe.",
          tags: ['Claude Code', 'MCP', 'Hooks', 'Revue & CI'],
        },
        {
          name: 'Développer vos backends et vos agents',
          format: 'Temps partiel ou forfait',
          body:
            "Backends Python et agents IA, de la conception à la mise en production, avec un workflow agentique qui livre vite sans sacrifier les tests ni la revue.",
          tags: ['Python', 'FastAPI', 'Django', 'Agents IA'],
        },
        {
          name: 'Industrialiser vos projets data et IA',
          format: 'Temps partiel',
          body:
            "MLOps, CI/CD, mise en production et supervision de modèles et d'agents, sur Azure et Databricks.",
          tags: ['MLOps', 'CI/CD', 'Azure', 'Databricks'],
        },
      ],
      cta: 'Parler de votre projet',
    },

    experience: {
      kicker: 'Parcours',
      title: 'Du développement Python à la production',
      now: "aujourd'hui",
      items: [
        {
          title: 'Ingénieur plateforme MLOps – Azure & Databricks',
          org: 'Groupe Covéa – SmartIA',
          kind: 'Consultant freelance',
          place: 'Niort · hybride',
          start: 'sept. 2024',
          end: 'nov. 2026',
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
          summary: 'Mission pour un casino en ligne licencié : 1 600 heures, avis 5★.',
          bullets: [
            "API gateway FastAPI : paiements, multi-devises, OAuth2/JWT, PostgreSQL",
            'Travail quotidien au sein d’une équipe anglophone',
          ],
          tags: ['Python', 'FastAPI', 'PostgreSQL', 'API REST'],
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
      kicker: 'La preuve par l’exemple',
      title: 'Du jeu codé à la main au moteur 3D',
      intro:
        "J'ai fondé Petit Vaisseau, mon studio de jeu vidéo solo. J'ai codé mon premier jeu à la main, puis je suis passé à Claude Code, sous mon pilotage, pour construire mon propre moteur 3D. Un seul développeur, plusieurs produits, et des technologies qui étaient hors de portée seul : c'est ce que permet un workflow agentique bien tenu.",
      sd: {
        label: 'Jeu vidéo · Petit Vaisseau',
        name: 'Space Defender: Frontier Squadron',
        pitch:
          "Un shooter spatial vu de dessus avec une progression RPG. Menez une escadrille contre l'invasion des Drones à travers trois galaxies.",
        body:
          "Mon premier jeu, codé à la main avec Unity et C#, seul, en parallèle d'un emploi à plein temps. Sorti en accès anticipé sur Steam en mai 2025, il a dépassé les 3 000 exemplaires vendus, et compte 6 000 téléchargements sur iOS et Android. Les retours des joueurs ont façonné la 1.0 : le système d'ailiers est né d'une suggestion faite sur Discord.",
        statusSoon: 'Sortie 1.0',
        statusOut: 'Disponible en 1.0',
        statusSoonDate: '24 septembre 2026',
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
        meta: 'Unity · C# · Windows et macOS · français et anglais · manette compatible · 13,49 €',
        platformsNext: 'Aussi sur iOS et Android, sous le nom Space Defender: Squadron, avec le premier acte gratuit.',
        steam: 'Voir sur Steam',
        page: 'Page du jeu',
        trailer: 'Bande-annonce',
        shotsAlt: [
          'Le vaisseau du joueur et ses ailiers Jinx, Kestrel et Rook au combat, en route vers la station Romulus-05',
          'Échange de tirs entre l’escadrille et un croiseur ennemi',
          'Le hangar : choix du vaisseau et de ses caractéristiques',
        ],
        keyArtAlt: 'Visuel de Space Defender : un vaisseau file au-dessus d’une planète, poursuivi par deux Drones',
      },
      studio: {
        label: 'Studio indépendant · moteur maison',
        name: 'Petit Vaisseau',
        tagline: 'Un studio d’une seule personne, et un vaisseau à la fois.',
        body:
          "Après Space Defender, je développe avec Claude Code, sous mon pilotage (architecture, revue, tests). J'ai construit Ancre, mon propre moteur 3D en C++, sur lequel je prépare trois jeux pour 2027 : Abysses: Meridian, Pelagia et Telluris.",
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
        { name: 'IA agentique', items: ['Claude Code', 'Agents IA', 'Model Context Protocol (MCP)', 'CLAUDE.md, skills, hooks', 'Garde-fous de revue et de CI', 'LLMOps'] },
        { name: 'Cloud & MLOps', items: ['Microsoft Azure', 'Azure Databricks', 'MLOps', 'Pipelines de données', 'CI/CD', 'Industrialisation'] },
        { name: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Django REST Framework', 'API REST', 'WebSockets', 'Pytest'] },
        { name: 'Données', items: ['PostgreSQL', 'PostGIS / GeoDjango', 'MySQL / MariaDB', 'SQL', 'EDI (EDIFACT)'] },
        { name: 'DevOps & outils', items: ['Docker', 'Linux', 'Nginx', 'Git / GitFlow', 'Azure DevOps', 'Sentry', 'Bash', 'Agile / Kanban'] },
        { name: 'Jeu vidéo & front', items: ['C++ (moteur 3D)', 'Unity', 'C#', 'JavaScript', 'HTML / CSS', 'Leaflet'] },
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
      body: "Le plus simple est de m'écrire, en français ou en anglais. Je réponds personnellement.",
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
      headline: 'Ingénieur IA agentique & MLOps – Python, Azure, Claude Code',
      location: 'France · 100 % télétravail',
      profileTitle: 'Profil',
      profile:
        "Je mets de l'IA en production et j'aide les équipes à développer avec des agents IA (Claude Code, MCP) sans perdre en qualité. Deux ans d'industrialisation de plateformes data et IA sur Azure et Databricks chez Covéa, cinq ans de développement Python.",
      experienceTitle: 'Expérience',
      educationTitle: 'Formation',
      skillsTitle: 'Compétences',
      projectsTitle: 'Projets personnels',
      projects: [
        { name: 'Space Defender: Frontier Squadron', url: links.steam, text: 'Jeu codé à la main (Unity, C#), 1.0 en septembre 2026. Plus de 3 000 exemplaires vendus sur Steam, 6 000 téléchargements sur mobile.' },
        { name: 'Petit Vaisseau', url: links.studio, text: 'Studio indépendant. Ancre, moteur 3D maison en C++ développé avec Claude Code ; trois jeux en préparation pour 2027.' },
        { name: 'La Bouygue', url: links.bouygue, text: 'Application Django de réservation et de gestion pour une maison familiale, en production depuis 2021.' },
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
    metaTitle: 'Guillaume Merle · Agentic AI & MLOps Engineer',
    metaDescription:
      'Agentic AI & MLOps freelance engineer, fully remote. Claude Code, AI agents and MCP, Python, Azure, Databricks. Founder of Petit Vaisseau, an indie game studio.',
    skip: 'Skip to content',
    nav: { about: 'Profile', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    cv: 'Resume',
    otherLang: 'Français',
    otherLangShort: 'FR',
    ids: { about: 'profile', experience: 'experience', projects: 'projects', skills: 'skills', contact: 'contact' },

    hero: {
      role: 'Agentic AI & MLOps Engineer',
      stack: 'Claude Code · Agents · MCP · Python · Azure · Databricks',
      lead:
        'I ship AI to production and help teams build with AI coding agents without lowering the quality bar. In the evenings, I make video games.',
      location: 'Freelance · fully remote · English or French',
      availability: 'Part-time (2 to 3 days a week) or fixed-price',
      ctaCv: 'View my resume',
      ctaContact: 'Get in touch',
      sdTeaser: 'Space Defender 1.0',
      sdTeaserDate: 'out September 24 on Steam',
      sdTeaserOut: 'out now on Steam',
      portraitAlt: 'Portrait of Guillaume Merle',
    },

    about: {
      kicker: 'Profile',
      title: 'AI agents, in production',
      paragraphs: [
        'I ship AI to production and help development teams work with AI coding agents (Claude Code) without lowering the quality bar.',
        'I work with Claude Code every day, running several agents in parallel. I design the rules, skills, hooks, MCP servers and guardrails that make this way of working reliable for a team.',
        "It's backed by real production work: two years as a Platform/MLOps Engineer at Covéa on Azure and Databricks, and a FastAPI API gateway for a licensed online casino, within an English-speaking team.",
      ],
      facts: [
        { k: 'Status', v: 'Freelance' },
        { k: 'Setup', v: 'Fully remote' },
        { k: 'Format', v: 'Part-time (2–3 days/week) or fixed-price' },
        { k: 'Languages', v: 'French, fluent English' },
      ],
    },

    offers: {
      kicker: 'Services',
      title: 'What I can do for you',
      items: [
        {
          name: 'Roll out Claude Code to your team',
          format: 'Fixed-price, 3 to 5 days',
          body:
            'An audit of how your team works, then the setup: CLAUDE.md, skills, hooks, MCP servers and permissions. I add review and CI guardrails, and finish with a hands-on workshop for the team.',
          tags: ['Claude Code', 'MCP', 'Hooks', 'Review & CI'],
        },
        {
          name: 'Build your backends and agents',
          format: 'Part-time or fixed-price',
          body:
            'Python backends and AI agents, from design to production, with an agentic workflow that ships fast without cutting corners on tests or review.',
          tags: ['Python', 'FastAPI', 'Django', 'AI agents'],
        },
        {
          name: 'Industrialise your data and AI projects',
          format: 'Part-time',
          body: 'MLOps, CI/CD, deployment and monitoring of models and agents, on Azure and Databricks.',
          tags: ['MLOps', 'CI/CD', 'Azure', 'Databricks'],
        },
      ],
      cta: 'Talk about your project',
    },

    experience: {
      kicker: 'Experience',
      title: 'From Python development to production',
      now: 'present',
      items: [
        {
          title: 'Platform / MLOps Engineer – Azure & Databricks',
          org: 'Covéa Group – SmartIA',
          kind: 'Freelance consultant',
          place: 'Niort · hybrid',
          start: 'Sep 2024',
          end: 'Nov 2026',
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
          summary: 'Contract for a licensed online casino: 1,600 hours, 5★ review.',
          bullets: [
            'FastAPI API gateway: payments, multi-currency, OAuth2/JWT, PostgreSQL',
            'Worked daily within an English-speaking team',
          ],
          tags: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs'],
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
      kicker: 'Proof I ship',
      title: 'From a hand-coded game to a 3D engine',
      intro:
        "I founded Petit Vaisseau, my solo game studio. I hand-coded my first game, then switched to Claude Code, with me in the driver's seat, to build my own 3D engine. One developer, several products, and tech that used to be out of reach for a solo dev: that's what a well-run agentic workflow enables.",
      sd: {
        label: 'Video game · Petit Vaisseau',
        name: 'Space Defender: Frontier Squadron',
        pitch:
          'A top-down space shooter with RPG progression. Lead a squadron against the Drone invasion across three galaxies.',
        body:
          'My first game, hand-coded solo in Unity and C# alongside a full-time job. It entered Early Access on Steam in May 2025, has sold over 3,000 copies, and has 6,000 downloads on iOS and Android. Player feedback shaped version 1.0: the wingmen system started as a suggestion on Discord.',
        statusSoon: '1.0 release',
        statusOut: 'Version 1.0',
        statusSoonDate: 'September 24, 2026',
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
        meta: 'Unity · C# · Windows and macOS · English and French · controller support · €13.49',
        platformsNext: 'Also on iOS and Android as Space Defender: Squadron, with the first act free.',
        steam: 'View on Steam',
        page: 'Game page',
        trailer: 'Trailer',
        shotsAlt: [
          'The player’s ship and wingmen Jinx, Kestrel and Rook in combat, heading for Romulus-05 station',
          'The squadron trading fire with an enemy cruiser',
          'The hangar: picking a ship and reviewing its stats',
        ],
        keyArtAlt: 'Space Defender key art: a ship races above a planet, chased by two Drones',
      },
      studio: {
        label: 'Independent studio · in-house engine',
        name: 'Petit Vaisseau',
        tagline: 'A studio of one, and one ship at a time.',
        body:
          'After Space Defender, I build with Claude Code, with me driving (architecture, review, tests). I wrote Ancre, my own C++ 3D engine, and I am making three games on it for 2027: Abysses: Meridian, Pelagia and Telluris.',
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
        { name: 'Agentic AI', items: ['Claude Code', 'AI agents', 'Model Context Protocol (MCP)', 'CLAUDE.md, skills, hooks', 'Review and CI guardrails', 'LLMOps'] },
        { name: 'Cloud & MLOps', items: ['Microsoft Azure', 'Azure Databricks', 'MLOps', 'Data pipelines', 'CI/CD', 'Industrialisation'] },
        { name: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Django REST Framework', 'REST APIs', 'WebSockets', 'Pytest'] },
        { name: 'Data', items: ['PostgreSQL', 'PostGIS / GeoDjango', 'MySQL / MariaDB', 'SQL', 'EDI (EDIFACT)'] },
        { name: 'DevOps & tooling', items: ['Docker', 'Linux', 'Nginx', 'Git / GitFlow', 'Azure DevOps', 'Sentry', 'Bash', 'Agile / Kanban'] },
        { name: 'Games & front end', items: ['C++ (3D engine)', 'Unity', 'C#', 'JavaScript', 'HTML / CSS', 'Leaflet'] },
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
      body: 'Email is the easiest way to reach me, in English or French. I reply personally.',
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
      headline: 'Agentic AI & MLOps Engineer – Python, Azure, Claude Code',
      location: 'France · fully remote',
      profileTitle: 'Profile',
      profile:
        'I ship AI to production and help teams build with AI coding agents (Claude Code, MCP) without lowering the quality bar. Two years industrialising data and AI platforms on Azure and Databricks at Covéa, five years of Python development.',
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      skillsTitle: 'Skills',
      projectsTitle: 'Side projects',
      projects: [
        { name: 'Space Defender: Frontier Squadron', url: links.steam, text: 'Hand-coded game (Unity, C#), 1.0 in September 2026. Over 3,000 copies sold on Steam, 6,000 mobile downloads.' },
        { name: 'Petit Vaisseau', url: links.studio, text: 'Indie studio. Ancre, an in-house C++ 3D engine built with Claude Code; three games in the works for 2027.' },
        { name: 'La Bouygue', url: links.bouygue, text: 'Django booking and management app for a family holiday house, in production since 2021.' },
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
