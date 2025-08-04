import { getProducts as getStoredProducts } from '@/lib/productStorage';

export type Brand = 'Nike' | 'Adidas' | 'Puma' | 'New Balance' | 'Kappa' | 'Macron';
export type Competition = 'League' | 'Champions League' | 'Europa League' | 'World Cup' | 'Euro' | 'Copa America';
export type KitType = 'Home' | 'Away' | 'Third' | 'Goalkeeper' | 'Special Edition';
export type Condition = 'New' | 'Used - Like New' | 'Used - Good' | 'Used - Fair';
export type JerseyFormat = 'Stadium' | 'Player Issue' | 'Pro Stock' | 'Match Worn' | 'Match Prepared';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  team: string;
  size: string[];
  season: string;
  inStock: boolean;
  featured: boolean;
  brand: Brand;
  competition: Competition[];
  kitType: KitType;
  condition: Condition;
  hasNameset: boolean;
  format: JerseyFormat;
  dateAdded: string; // ISO date string
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "national-teams",
    name: "National Teams",
    description: "Official shirts from national teams around the world"
  },
  {
    id: "clubs",
    name: "Clubs",
    description: "All club shirts (Premier League, La Liga, Serie A, Bundesliga, Ligue 1, etc.)"
  },
  {
    id: "premier-league",
    name: "Premier League",
    description: "Official shirts from Premier League clubs"
  },
  {
    id: "la-liga",
    name: "La Liga",
    description: "Official shirts from Spanish La Liga clubs"
  },
  {
    id: "serie-a",
    name: "Serie A",
    description: "Official shirts from Italian Serie A clubs"
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    description: "Official shirts from German Bundesliga clubs"
  },
  {
    id: "ligue-1",
    name: "Ligue 1",
    description: "Official shirts from French Ligue 1 clubs"
  }
];

// Produits par défaut (avec dateAdded pour le tri)
const defaultProducts: Product[] = [
  {
    id: "eng-home-2023",
    name: "England Home Jersey 2023",
    description: "Official England national team home jersey for the 2023 season. Features breathable fabric with the iconic Three Lions crest.",
    price: 89.99,
    images: ["/placeholder.svg"],
    category: "national-teams",
    team: "England",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["Euro"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z"
  },
  {
    id: "fra-home-2023",
    name: "France Home Jersey 2023",
    description: "Official France national team home jersey for the 2023 season. Features the tricolor design and embroidered cockerel crest.",
    price: 94.99,
    images: ["/placeholder.svg"],
    category: "national-teams",
    team: "France",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["Euro"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z"
  },
  {
    id: "bra-home-2023",
    name: "Brazil Home Jersey 2023",
    description: "Official Brazil national team home jersey for the 2023 season. Classic yellow design with green trim.",
    price: 94.99,
    images: ["/placeholder.svg"],
    category: "national-teams",
    team: "Brazil",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    brand: "Nike",
    competition: ["World Cup"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z",
    inStock: true,
    featured: true
  },
  {
    id: "man-utd-home-2023",
    name: "Manchester United Home Jersey 2023",
    description: "Official Manchester United home jersey for the 2023/24 season. Classic red design with club crest.",
    price: 89.99,
    images: ["/placeholder.svg"],
    category: "premier-league",
    team: "Manchester United",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    brand: "Adidas",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z",
    inStock: true,
    featured: false
  },
  {
    id: "liv-home-2023",
    name: "Liverpool Home Jersey 2023",
    description: "Official Liverpool FC home jersey for the 2023/24 season. Iconic red design with club crest.",
    price: 89.99,
    images: ["/placeholder.svg"],
    category: "premier-league",
    team: "Liverpool",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z",
    inStock: true,
    featured: false
  },
  {
    id: "bar-home-2023",
    name: "Barcelona Home Jersey 2023",
    description: "Official FC Barcelona home jersey for the 2023/24 season. Traditional blaugrana striped design.",
    price: 94.99,
    images: ["/placeholder.svg"],
    category: "la-liga",
    team: "Barcelona",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z",
    inStock: true,
    featured: true
  },
  {
    id: "rma-home-2023",
    name: "Real Madrid Home Jersey 2023",
    description: "Official Real Madrid home jersey for the 2023/24 season. Elegant white design with club crest.",
    price: 94.99,
    images: ["/placeholder.svg"],
    category: "la-liga",
    team: "Real Madrid",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    brand: "Adidas",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z",
    inStock: true,
    featured: true
  },
  {
    id: "juv-home-2023",
    name: "Juventus Home Jersey 2023",
    description: "Official Juventus home jersey for the 2023/24 season. Classic black and white striped design.",
    price: 89.99,
    images: ["/placeholder.svg"],
    category: "serie-a",
    team: "Juventus",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    brand: "Adidas",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z",
    inStock: true,
    featured: false
  },
  {
    id: "bay-home-2023",
    name: "Bayern Munich Home Jersey 2023",
    description: "Official Bayern Munich home jersey for the 2023/24 season. Traditional red design with club crest.",
    price: 89.99,
    images: ["/placeholder.svg"],
    category: "bundesliga",
    team: "Bayern Munich",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    brand: "Adidas",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z",
    inStock: true,
    featured: false
  },
  {
    id: "psg-home-2023",
    name: "Paris Saint-Germain Home Jersey 2023",
    description: "Official Paris Saint-Germain home jersey for the 2023/24 season. Stylish design with club crest.",
    price: 94.99,
    images: ["/placeholder.svg"],
    category: "ligue-1",
    team: "Paris Saint-Germain",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-01-01T00:00:00.000Z",
    inStock: true,
    featured: true
  },
];

// Fonction pour obtenir tous les produits (défaut + personnalisés)
export const getAllProducts = (): Product[] => {
  try {
    const storedProducts = getStoredProducts();
    const allProducts = [...defaultProducts, ...storedProducts];
    return allProducts;
  } catch (error) {
    console.error('Error loading stored products:', error);
    return defaultProducts;
  }
};

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const allProducts = getAllProducts();
  
  // Cas spécial pour "clubs" : tous les produits sauf les équipes nationales
  if (categoryId === "clubs") {
    return allProducts.filter(product => product.category !== "national-teams");
  }
  
  return allProducts.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return getAllProducts().filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllProducts().filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) || 
    product.team.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to get new arrivals (most recent products)
export const getNewArrivals = () => {
  // Get all products and sort by date added (newest first)
  const allProducts = getAllProducts();
  return allProducts
    .sort((a, b) => new Date(b.dateAdded || '2023-01-01').getTime() - new Date(a.dateAdded || '2023-01-01').getTime())
    .slice(0, 8);
};
