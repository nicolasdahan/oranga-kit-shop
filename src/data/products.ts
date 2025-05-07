
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

export const products: Product[] = [
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
    featured: true
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
    featured: true
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
    inStock: true,
    featured: true
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) || 
    product.team.toLowerCase().includes(lowercaseQuery)
  );
};
