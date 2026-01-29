import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Villa du Golfe',
    projectType: 'Maison',
    category: 'Rénovation complète',
    location: 'Arradon',
    year: '2024',
    surface: '180 m²',
    duration: '6 mois',
    coverImage: 'https://picsum.photos/id/15/1920/1080',
    gallery: [
      'https://picsum.photos/id/15/800/600',
      'https://picsum.photos/id/16/800/1000',
      'https://picsum.photos/id/18/800/600',
      'https://picsum.photos/id/20/800/1000'
    ],
    description: "Transformation complète d'une villa des années 80 située à deux pas du Golfe du Morbihan. L'objectif était d'ouvrir les volumes vers l'extérieur pour faire entrer la lumière naturelle et la végétation environnante.",
    challenge: "La maison souffrait d'un cloisonnement excessif et d'une entrée sombre. Les propriétaires souhaitaient une pièce de vie de 60m² sans poteaux apparents.",
    solution: "Nous avons abattu trois murs porteurs, renforcés par des IPN laissés apparents et peints en blanc pour se fondre dans le plafond. Une verrière sur mesure délimite désormais l'entrée tout en conservant la perspective sur le jardin."
  },
  {
    id: '2',
    title: 'Appartement Haussmannien',
    projectType: 'Appartement',
    category: 'Architecture d\'intérieur',
    location: 'Vannes Centre',
    year: '2023',
    surface: '95 m²',
    duration: '4 mois',
    coverImage: 'https://picsum.photos/id/42/1920/1080',
    gallery: [
      'https://picsum.photos/id/42/800/1000',
      'https://picsum.photos/id/48/800/600',
      'https://picsum.photos/id/56/800/1000',
      'https://picsum.photos/id/60/800/600'
    ],
    description: "Rénovation d'un appartement de caractère dans le centre historique de Vannes. Le projet visait à conserver le charme de l'ancien (parquet, moulures) tout en apportant une touche contemporaine et fonctionnelle.",
    challenge: "La cuisine était exiguë et isolée au fond d'un couloir. La salle de bain n'était plus aux normes.",
    solution: "La cuisine a été déplacée au cœur de l'appartement en 'open space' sur le salon, créant un espace de convivialité. Nous avons joué sur des contrastes forts avec une cuisine noire mate qui tranche avec la douceur des murs clairs."
  },
  {
    id: '3',
    title: 'Maison de Famille',
    projectType: 'Maison',
    category: 'Décoration & Agencement',
    location: 'Baden',
    year: '2023',
    surface: '140 m²',
    duration: '3 mois',
    coverImage: 'https://picsum.photos/id/78/1920/1080',
    gallery: [
      'https://picsum.photos/id/78/800/600',
      'https://picsum.photos/id/80/800/1000',
      'https://picsum.photos/id/82/800/600',
      'https://picsum.photos/id/85/800/1000'
    ],
    description: "Rafraîchissement global d'une maison de vacances pour une famille nombreuse. L'ambiance se voulait 'bord de mer' sans tomber dans les clichés, avec des matériaux naturels et résistants.",
    challenge: "Créer un dortoir pour les enfants capable d'accueillir 6 couchages dans un espace réduit sous combles.",
    solution: "Conception de lits superposés sur mesure en bois clair, intégrant rangements et éclairages individuels. La palette de couleurs tourne autour du lin, du vert sauge et du bois flotté."
  },
  {
    id: '4',
    title: 'Longère Rénovée',
    projectType: 'Maison',
    category: 'Rénovation complète',
    location: 'Auray',
    year: '2022',
    surface: '210 m²',
    duration: '9 mois',
    coverImage: 'https://picsum.photos/id/120/1920/1080',
    gallery: [
      'https://picsum.photos/id/120/800/600',
      'https://picsum.photos/id/126/800/1000',
      'https://picsum.photos/id/129/800/600',
      'https://picsum.photos/id/132/800/1000'
    ],
    description: "Réhabilitation d'une ancienne ferme en pierre. Le défi était de conserver l'âme du bâtiment tout en isolant thermiquement l'ensemble par l'intérieur.",
    challenge: "Manque de luminosité typique des longères bretonnes.",
    solution: "Création de deux grandes ouvertures en pignon et installation de puits de lumière dans la toiture. Le sol a été traité en béton ciré pour unifier les espaces du rez-de-chaussée."
  },
  {
    id: '5',
    title: 'Studio Bord de Mer',
    projectType: 'Appartement',
    category: 'Optimisation',
    location: 'Larmor-Baden',
    year: '2024',
    surface: '28 m²',
    duration: '2 mois',
    coverImage: 'https://picsum.photos/id/164/1920/1080',
    gallery: [
      'https://picsum.photos/id/164/800/1000',
      'https://picsum.photos/id/175/800/600',
      'https://picsum.photos/id/180/800/1000',
      'https://picsum.photos/id/190/800/600'
    ],
    description: "Optimisation extrême pour ce studio destiné à la location saisonnière. Chaque centimètre carré a été pensé pour offrir le confort d'un grand appartement.",
    challenge: "Intégrer un vrai lit, un coin repas, une cuisine équipée et un espace salon dans moins de 30m².",
    solution: "Création d'une estrade intégrant un lit tiroir. Lorsqu'il est rangé, l'estrade sert de salon surélevé face à la mer. La cuisine a été réalisée sur mesure pour s'adapter aux angles non droits de l'immeuble."
  },
  {
    id: '6',
    title: 'Showroom & Bureaux',
    projectType: 'Professionnel',
    category: 'Architecture commerciale',
    location: 'Vannes Port',
    year: '2023',
    surface: '110 m²',
    duration: '5 mois',
    coverImage: 'https://picsum.photos/id/201/1920/1080',
    gallery: [
      'https://picsum.photos/id/201/800/600',
      'https://picsum.photos/id/203/800/1000',
      'https://picsum.photos/id/204/800/600',
      'https://picsum.photos/id/206/800/1000'
    ],
    description: "Aménagement d'un plateau brut dans un ancien hangar à bateaux réhabilité pour accueillir une agence de communication et son showroom.",
    challenge: "Les volumes immenses (4m de hauteur sous plafond) risquaient de rendre l'espace froid et sonore pour un espace de travail.",
    solution: "Travail sur l'acoustique avec des panneaux de bois perforés. Création de box vitrés pour les réunions tout en gardant la transparence. Utilisation de la brique de parement et du métal noir pour l'identité industrielle."
  }
];