export type Collection = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  featured: boolean;
  heroImage?: string;
};

export const collections: Collection[] = [
  {
    id: 'vintage',
    name: 'Vintage Shirts',
    slug: 'vintage',
    description: 'Classic football shirts from the 1970s, 1980s, and 1990s. These authentic vintage jerseys represent football\'s golden era, featuring iconic designs and legendary players. Each vintage shirt tells a story of historic matches, unforgettable seasons, and football heritage.',
    icon: '🕰️',
    featured: true,
    heroImage: '/collections/vintage-hero.jpg'
  },
  {
    id: 'retro',
    name: 'Retro Shirts',
    slug: 'retro',
    description: 'Football shirts from the 2000s and early 2010s, representing modern classics. These retro jerseys feature memorable designs from relatively recent football history, celebrating the champions and cult heroes of the 21st century.',
    icon: '⚡',
    featured: true,
    heroImage: '/collections/retro-hero.jpg'
  },
  {
    id: 'player-version',
    name: 'Player Version',
    slug: 'player-version',
    description: 'Professional-grade football shirts made to the same specifications as those worn by players on the pitch. Featuring advanced performance fabrics, authentic fit, and premium construction. Includes Player Issue, Pro Stock, Match Worn, and Match Prepared versions.',
    icon: '⭐',
    featured: true,
    heroImage: '/collections/player-version-hero.jpg'
  },
  {
    id: 'player-issue',
    name: 'Player Issue',
    slug: 'player-issue',
    description: 'Authentic player-spec shirts made for professional footballers. These jerseys feature the same advanced fabrics, fit, and construction as match-worn shirts, but have never been used in competitive matches. The highest quality shirts available.',
    icon: '👔',
    featured: false
  },
  {
    id: 'match-worn',
    name: 'Match Worn',
    slug: 'match-worn',
    description: 'Extremely rare shirts actually worn by professional players during competitive matches. Each match-worn jersey comes with authentication and represents a unique piece of football history.',
    icon: '🏆',
    featured: false
  },
  {
    id: 'fan-version',
    name: 'Fan Version',
    slug: 'fan-version',
    description: 'Stadium and replica shirts designed for supporters. These fan versions offer the same designs as professional players wear, optimized for everyday comfort and casual wear while supporting your favorite club.',
    icon: '👥',
    featured: true,
    heroImage: '/collections/fan-version-hero.jpg'
  },
  {
    id: 'training',
    name: 'Training Kits',
    slug: 'training',
    description: 'Official training wear worn by players during practice sessions and warm-ups. Training shirts, jackets, and pants featuring club crests and sponsor logos, offering a unique alternative to match-day kits.',
    icon: '🏃',
    featured: true,
    heroImage: '/collections/training-hero.jpg'
  },
  {
    id: 'jackets',
    name: 'Jackets & Tracksuits',
    slug: 'jackets',
    description: 'Football club jackets, track tops, and tracksuits. From vintage Adidas tracksuits to modern Nike tech fleece jackets, these pieces let you represent your club in style off the pitch.',
    icon: '🧥',
    featured: true,
    heroImage: '/collections/jackets-hero.jpg'
  },
  {
    id: 'goalkeeper',
    name: 'Goalkeeper Shirts',
    slug: 'goalkeeper',
    description: 'Specialized goalkeeper jerseys featuring bold designs and colors. These unique shirts showcase the distinctive style worn by legendary shot-stoppers throughout football history.',
    icon: '🧤',
    featured: false
  },
  {
    id: 'special-edition',
    name: 'Special Edition',
    slug: 'special-edition',
    description: 'Limited edition and commemorative football shirts created for special occasions, anniversaries, or unique collaborations. These rare jerseys are highly sought after by collectors.',
    icon: '✨',
    featured: false
  },
  {
    id: 'long-sleeve',
    name: 'Long Sleeve',
    slug: 'long-sleeve',
    description: 'Football shirts with long sleeves, offering both style and coverage. Popular among collectors and perfect for cooler weather or those who prefer the classic long-sleeve look.',
    icon: '👕',
    featured: false
  },
  {
    id: 'champions-league',
    name: 'Champions League',
    slug: 'champions-league',
    description: 'Shirts worn in UEFA Champions League matches, often featuring special badges and patches. Celebrate Europe\'s premier club competition with these iconic jerseys.',
    icon: '🏆',
    featured: false
  },
  {
    id: 'world-cup',
    name: 'World Cup',
    slug: 'world-cup',
    description: 'National team shirts from FIFA World Cup tournaments. From classic Brazil yellows to iconic England whites, these jerseys represent the pinnacle of international football.',
    icon: '🌍',
    featured: false
  },
];

// Helper functions
export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find(collection => collection.slug === slug);
};

export const getFeaturedCollections = (): Collection[] => {
  return collections.filter(collection => collection.featured);
};

export const getAllCollections = (): Collection[] => {
  return collections;
};

export const searchCollections = (query: string): Collection[] => {
  const lowercaseQuery = query.toLowerCase();
  return collections.filter(collection => 
    collection.name.toLowerCase().includes(lowercaseQuery) ||
    collection.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Collection filters for products
export type CollectionFilter = {
  vintage?: boolean;
  retro?: boolean;
  playerVersion?: boolean;
  training?: boolean;
  goalkeeper?: boolean;
  specialEdition?: boolean;
};

export const getCollectionFilters = (collectionSlug: string): CollectionFilter => {
  switch (collectionSlug) {
    case 'vintage':
      return { vintage: true };
    case 'retro':
      return { retro: true };
    case 'player-version':
    case 'player-issue':
    case 'match-worn':
      return { playerVersion: true };
    case 'training':
      return { training: true };
    case 'goalkeeper':
      return { goalkeeper: true };
    case 'special-edition':
      return { specialEdition: true };
    default:
      return {};
  }
};



