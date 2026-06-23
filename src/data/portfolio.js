export const profile = {
  firstName: 'Lonzi Fomo',
  lastName: 'Paul Gerard',
  role: 'Fullstack Developer & AppSec',
  tagline: 'Je transforme des idées en expériences web modernes, rapides et élégantes.',
  email: 'gerardlonzi09@gmail.com',
  location: 'Cameroun',
  cvUrl: '/cv.pdf',
  heroPhoto: '/profil.png',
  aboutPhoto: '/profil.png',
  social: {
    github: 'https://github.com/gerardlonzi',
    linkedin: 'https://www.linkedin.com/in/gerard-lonzi-3b93162bb',
    twitter: 'https://twitter.com',
  },
  about: [
    "Passionné par le développement web, je conçois des interfaces soignées avec une attention particulière à la performance, l'accessibilité et l'expérience utilisateur.",
    'Mon approche combine design moderne et code propre pour livrer des produits qui ont du sens — du prototype à la mise en production.',
  ],
};

export const navLinks = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Expérience' },
  { id: 'contact', label: 'Contact' },
];

export const quickLinks = [
  {
    id: 'projects',
    label: 'Projets',
    description: 'Découvrir mes réalisations',
    value: '12+',
    icon: 'projects',
  },
  {
    id: 'skills',
    label: 'Technologies',
    description: 'Stack & outils maîtrisés',
    value: '15+',
    icon: 'skills',
  },
  {
    id: 'experience',
    label: 'Expérience',
    description: 'Mon parcours professionnel',
    value: '3+ ans',
    icon: 'experience',
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Travaillons ensemble',
    value: '24/7',
    icon: 'contact',
  },
];

export const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind', icon: 'tailwindcss' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Linux', icon: 'linux' },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Supabase', icon: 'supabase' },
    ],
  },
  {
    name: 'Outils',
    skills: [
      { name: 'GitHub', icon: 'github' },
      { name: 'Git', icon: 'git' },
      { name: 'Vite', icon: 'vitejs' },
    ],
  },
];

export const projects = [
  {
    title: 'Fluvex',
    description:
      "Fluvex est une plateforme tout-en-un de gestion de flotte et de livraisons destinée aux entreprises de logistique.",
    tags: ['Nextjs', 'Mapbox','Prisma', 'Tailwind', 'MongoDB','TypeScript'],
    liveUrl: 'https://fluvex.vercel.app/',
    githubUrl: 'https://github.com/gerardlonzi/Fluvex',
    featured: true,
  },
  {
    title: 'NelMark',
    description:
      "Outil collaboratif d'apprentissage avec quiz interactifs et suivi de progression.",
    tags: ['Nextjs', 'Supabase', 'Tailwind','TypeScript','zod'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gerardlonzi/Nelmark',
    featured: true,
  },
  {
    title: 'Maneliza Jobs',
    description:
      "Application de gestion d'événements avec tableau de bord, inscriptions et notifications.",
    tags: ['Nextjs', 'zod', 'MongoDB','Tailwind','TypeScript'],
    liveUrl: 'https://maneliza-job.vercel.app/',
    githubUrl: 'https://github.com/gerardlonzi/maneliza-job',
    featured: false,
  },
  {
    title: 'Burger King site',
    description:
      'site de vente de burgers avec react et vite',
    tags: ['React', 'Vite', 'Netlify'],
    liveUrl: 'https://myburgerking.netlify.app/',
    githubUrl: 'https://github.com/gerardlonzi/Burger-site',
    featured: false,
  },
  {
    title: 'Maneliza Care',
    description:
      "Module d'authentification sécurisée avec MFA, rate limiting et audit de sécurité.",
    tags: ['Node.js', 'JWT', 'AppSec'],
    liveUrl: 'https://maneliza-care.web.app/',
    githubUrl: 'https://github.com/gerardlonzi/Maneliza-site',
    featured: false,
  },
  {
    title: 'DevMetrics',
    description:
      'Dashboard de métriques développeur avec visualisations temps réel et rapports automatisés.',
    tags: ['React', 'D3.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export const experience = [
  {
    period: '2024 — Présent',
    company: 'Freelance',
    role: 'Développeur Front-End',
    description:
      'Création de sites vitrines et applications React pour des clients variés.',
    images: [],
  },
  {
    period: '2023 — 2024',
    company: 'Startup Tech',
    role: 'Stagiaire Développeur Web',
    description:
      "Contribution au développement UI, revues de code et intégration d'API REST.",
    images: [],
  },
  {
    period: '2023 — 2024',
    company: 'Startup Tech',
    role: 'Stagiaire Développeur Web',
    description:
      "Contribution au développement UI, revues de code et intégration d'API REST.",
    images: [],
  },
  {
    period: '2023 — 2024',
    company: 'Startup Tech',
    role: 'Stagiaire Développeur Web',
    description:
      "Contribution au développement UI, revues de code et intégration d'API REST.",
    images: [],
  },
  {
    period: 'juin 2023 — septembre 2024',
    company: 'Tic Foundation',
    role: 'Stagiaire Développeur Web',
    description:
      "Contribution au développement de Tic Summit website 2023, revues de code et intégration d'API REST.",
    images: ['/public/bill.jpg','/public/ticlogo.png'],
  },
];

export const getTechIconUrl = (icon) => {
  const variants = {
    tailwindcss: 'plain',
    github: 'original',
    git: 'plain',
    express: 'original',
    linux: 'plain',
    mysql: 'plain',
    mongodb: 'plain',
    supabase: 'original',
  };
  const suffix = variants[icon] || 'original';
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${suffix}.svg`;
};
