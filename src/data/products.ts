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
    id: "france-pro-away-2024",
    name: "France Pro Away Shirt 2023/24",
    description: "Official France national team professional away shirt for the 2023/24 season. Premium player issue quality with embroidered cockerel crest.",
    price: 129.99,
    images: ["/products/shirts/france-pro-away-2024.jpg"],
    category: "national-teams",
    team: "France",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["Euro", "World Cup"],
    kitType: "Away",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2023-07-01T00:00:00.000Z"
  },
  {
    id: "france-stadium-home-2022",
    name: "France Stadium Home Shirt 2021/22",
    description: "Official France national team stadium home shirt for the 2021/22 season. Classic tricolor design with embroidered cockerel crest.",
    price: 84.99,
    images: ["/products/shirts/france-stadium-home-2022.jpg"],
    category: "national-teams",
    team: "France",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2021/22",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["World Cup"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2021-07-01T00:00:00.000Z"
  },
  {
    id: "france-stadium-home-2020",
    name: "France Stadium Home Shirt 2019/20",
    description: "Official France national team stadium home shirt for the 2019/20 season. Iconic French tricolor design.",
    price: 74.99,
    images: ["/products/shirts/france-stadium-home-2020.jpg"],
    category: "national-teams",
    team: "France",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2019/20",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["Euro"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2019-07-01T00:00:00.000Z"
  },
  {
    id: "inter-pro-home-2026",
    name: "Inter Milan Pro Home Shirt 2025/26",
    description: "Official Inter Milan professional home shirt for the 2025/26 season. Premium player issue quality with iconic Nerazzurri stripes.",
    price: 139.99,
    images: ["/products/shirts/inter-pro-home-2026.jpg"],
    category: "serie-a",
    team: "Inter Milan",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["League", "Champions League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "inter-stadium-home-2020",
    name: "Inter Milan Stadium Home Shirt 2019/20",
    description: "Official Inter Milan stadium home shirt for the 2019/20 season. Classic black and blue Nerazzurri stripes.",
    price: 74.99,
    images: ["/products/shirts/inter-stadium-home-2020.jpg"],
    category: "serie-a",
    team: "Inter Milan",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2019/20",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2019-07-01T00:00:00.000Z"
  },
  {
    id: "marseille-stadium-home-2025",
    name: "Olympique Marseille Stadium Home Shirt 2024/25",
    description: "Official Olympique Marseille stadium home shirt for the 2024/25 season. Classic white design with club crest.",
    price: 94.99,
    images: ["/products/shirts/marseille-stadium-home-2025.jpg"],
    category: "ligue-1",
    team: "Olympique Marseille",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2024/25",
    inStock: true,
    featured: true,
    brand: "Puma",
    competition: ["League", "Europa League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2024-07-01T00:00:00.000Z"
  },
  {
    id: "marseille-stadium-home-2024",
    name: "Olympique Marseille Stadium Home Shirt 2023/24",
    description: "Official Olympique Marseille stadium home shirt for the 2023/24 season. Iconic white kit with OM crest.",
    price: 84.99,
    images: ["/products/shirts/marseille-stadium-home-2024.jpg"],
    category: "ligue-1",
    team: "Olympique Marseille",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: false,
    brand: "Puma",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-07-01T00:00:00.000Z"
  },
  {
    id: "marseille-stadium-away-2024",
    name: "Olympique Marseille Stadium Away Shirt 2023/24",
    description: "Official Olympique Marseille stadium away shirt for the 2023/24 season. Modern alternative design.",
    price: 84.99,
    images: ["/products/shirts/marseille-stadium-away-2024.jpg"],
    category: "ligue-1",
    team: "Olympique Marseille",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: false,
    brand: "Puma",
    competition: ["League"],
    kitType: "Away",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-07-01T00:00:00.000Z"
  },
  {
    id: "marseille-stadium-third-2025",
    name: "Olympique Marseille Stadium Third Shirt 2024/25",
    description: "Official Olympique Marseille stadium third shirt for the 2024/25 season. Unique alternative design.",
    price: 94.99,
    images: ["/products/shirts/marseille-stadium-third-2025.jpg"],
    category: "ligue-1",
    team: "Olympique Marseille",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2024/25",
    inStock: true,
    featured: false,
    brand: "Puma",
    competition: ["League"],
    kitType: "Third",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2024-07-01T00:00:00.000Z"
  },
  {
    id: "psg-home-2025",
    name: "Paris Saint-Germain Pro Home Shirt 2024/25",
    description: "Official Paris Saint-Germain professional home shirt for the 2024/25 season. Features advanced performance fabric with the iconic PSG crest.",
    price: 139.99,
    images: ["/products/shirts/psg-pro-home-2025.jpg"],
    category: "ligue-1",
    team: "Paris Saint-Germain",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2024/25",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["League", "Champions League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2024-07-01T00:00:00.000Z"
  },
  {
    id: "psg-pro-home-2024",
    name: "Paris Saint-Germain Pro Home Shirt 2023/24",
    description: "Official Paris Saint-Germain professional home shirt for the 2023/24 season. Premium player issue quality with club crest.",
    price: 129.99,
    images: ["/products/shirts/psg-pro-home-2024.jpg"],
    category: "ligue-1",
    team: "Paris Saint-Germain",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League", "Champions League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2023-07-01T00:00:00.000Z"
  },
  {
    id: "psg-pro-away-2024",
    name: "Paris Saint-Germain Pro Away Shirt 2023/24",
    description: "Official Paris Saint-Germain professional away shirt for the 2023/24 season. Premium player issue quality.",
    price: 129.99,
    images: ["/products/shirts/psg-pro-away-2024.jpg"],
    category: "ligue-1",
    team: "Paris Saint-Germain",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League", "Champions League"],
    kitType: "Away",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2023-07-01T00:00:00.000Z"
  },
  {
    id: "psg-stadium-home-2024",
    name: "Paris Saint-Germain Stadium Home Shirt 2023/24",
    description: "Official Paris Saint-Germain stadium home shirt for the 2023/24 season. Classic PSG colors and design.",
    price: 94.99,
    images: ["/products/shirts/psg-stadium-home-2024.jpg"],
    category: "ligue-1",
    team: "Paris Saint-Germain",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-07-01T00:00:00.000Z"
  },
  {
    id: "psg-stadium-home-2023",
    name: "Paris Saint-Germain Stadium Home Shirt 2022/23",
    description: "Official Paris Saint-Germain stadium home shirt for the 2022/23 season.",
    price: 84.99,
    images: ["/products/shirts/psg-stadium-home-2023.jpg"],
    category: "ligue-1",
    team: "Paris Saint-Germain",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2022/23",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2022-07-01T00:00:00.000Z"
  },
  {
    id: "psg-stadium-fourth-2025",
    name: "Paris Saint-Germain Stadium Fourth Shirt 2024/25",
    description: "Official Paris Saint-Germain stadium fourth shirt for the 2024/25 season. Unique special edition design.",
    price: 94.99,
    images: ["/products/shirts/psg-stadium-fourth-2025.jpg"],
    category: "ligue-1",
    team: "Paris Saint-Germain",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2024/25",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Special Edition",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2024-07-01T00:00:00.000Z"
  },
  {
    id: "psg-short-home-2024",
    name: "Paris Saint-Germain Home Shorts 2023/24",
    description: "Official Paris Saint-Germain home shorts for the 2023/24 season. Matches the home kit perfectly.",
    price: 49.99,
    images: ["/products/shirts/psg-short-home-2024.jpg"],
    category: "ligue-1",
    team: "Paris Saint-Germain",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-07-01T00:00:00.000Z"
  },
  {
    id: "barcelona-pro-home-2026",
    name: "Barcelona Pro Home Shirt 2025/26",
    description: "Official FC Barcelona professional home shirt for the 2025/26 season. Premium player issue quality with iconic blaugrana stripes.",
    price: 139.99,
    images: ["/products/shirts/barcelona-pro-home-2026.jpg"],
    category: "la-liga",
    team: "Barcelona",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["League", "Champions League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "barcelona-pro-away-2026",
    name: "Barcelona Pro Away Shirt 2025/26",
    description: "Official FC Barcelona professional away shirt for the 2025/26 season. Premium player issue quality.",
    price: 139.99,
    images: ["/products/shirts/barcelona-pro-away-2026.jpg"],
    category: "la-liga",
    team: "Barcelona",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["League", "Champions League"],
    kitType: "Away",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "barcelona-pro-home-2022",
    name: "Barcelona Pro Home Shirt 2021/22",
    description: "Official FC Barcelona professional home shirt for the 2021/22 season. Classic blaugrana design.",
    price: 109.99,
    images: ["/products/shirts/barcelona-pro-home-2022.jpg"],
    category: "la-liga",
    team: "Barcelona",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2021/22",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2021-07-01T00:00:00.000Z"
  },
  {
    id: "barcelona-pro-third-2022",
    name: "Barcelona Pro Third Shirt 2021/22",
    description: "Official FC Barcelona professional third shirt for the 2021/22 season. Unique alternative design.",
    price: 109.99,
    images: ["/products/shirts/barcelona-pro-third-2022.jpg"],
    category: "la-liga",
    team: "Barcelona",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2021/22",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Third",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2021-07-01T00:00:00.000Z"
  },
  {
    id: "barcelona-stadium-ls-home-2025",
    name: "Barcelona Stadium Long Sleeve Home Shirt 2024/25",
    description: "Official FC Barcelona stadium long sleeve home shirt for the 2024/25 season. Traditional blaugrana stripes.",
    price: 104.99,
    images: ["/products/shirts/barcelona-stadium-ls-home-2025.jpg"],
    category: "la-liga",
    team: "Barcelona",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2024/25",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2024-07-01T00:00:00.000Z"
  },
  {
    id: "barcelona-away-third-2025",
    name: "Barcelona Away Third Shirt 2024/25",
    description: "Official FC Barcelona away third shirt for the 2024/25 season. Bold alternative design.",
    price: 94.99,
    images: ["/products/shirts/barcelona-away-third-2025.jpg"],
    category: "la-liga",
    team: "Barcelona",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2024/25",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Third",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2024-07-01T00:00:00.000Z"
  },
  {
    id: "realmadrid-pro-ls-home-2026",
    name: "Real Madrid Pro Long Sleeve Home Shirt 2025/26",
    description: "Official Real Madrid professional long sleeve home shirt for the 2025/26 season. Premium player issue quality in elegant white.",
    price: 149.99,
    images: ["/products/shirts/realmadrid-pro-ls-home-2026.jpg"],
    category: "la-liga",
    team: "Real Madrid",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: true,
    brand: "Adidas",
    competition: ["League", "Champions League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "realmadrid-pro-ls-third-2026",
    name: "Real Madrid Pro Long Sleeve Third Shirt 2025/26",
    description: "Official Real Madrid professional long sleeve third shirt for the 2025/26 season. Premium player issue quality with unique design.",
    price: 149.99,
    images: ["/products/shirts/realmadrid-pro-ls-third-2026.jpg"],
    category: "la-liga",
    team: "Real Madrid",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: false,
    brand: "Adidas",
    competition: ["League", "Champions League"],
    kitType: "Third",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "arsenal-stadium-home-2026",
    name: "Arsenal Stadium Home Shirt 2025/26",
    description: "Official Arsenal stadium home shirt for the 2025/26 season. Classic red and white design with club crest.",
    price: 94.99,
    images: ["/products/shirts/arsenal-stadium-home-2026.jpg"],
    category: "premier-league",
    team: "Arsenal",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: true,
    brand: "Adidas",
    competition: ["League", "Champions League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "arsenal-stadium-away-2025",
    name: "Arsenal Stadium Away Shirt 2024/25",
    description: "Official Arsenal stadium away shirt for the 2024/25 season. Modern alternative design.",
    price: 94.99,
    images: ["/products/shirts/arsenal-stadium-away-2025.jpg"],
    category: "premier-league",
    team: "Arsenal",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2024/25",
    inStock: true,
    featured: false,
    brand: "Adidas",
    competition: ["League"],
    kitType: "Away",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2024-07-01T00:00:00.000Z"
  },
  {
    id: "arsenal-stadium-away-2024",
    name: "Arsenal Stadium Away Shirt 2023/24",
    description: "Official Arsenal stadium away shirt for the 2023/24 season.",
    price: 84.99,
    images: ["/products/shirts/arsenal-stadium-away-2024.jpg"],
    category: "premier-league",
    team: "Arsenal",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: false,
    brand: "Adidas",
    competition: ["League"],
    kitType: "Away",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2023-07-01T00:00:00.000Z"
  },
  {
    id: "arsenal-stadium-third-2026",
    name: "Arsenal Stadium Third Shirt 2025/26",
    description: "Official Arsenal stadium third shirt for the 2025/26 season. Bold alternative design.",
    price: 94.99,
    images: ["/products/shirts/arsenal-stadium-third-2026.jpg"],
    category: "premier-league",
    team: "Arsenal",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: false,
    brand: "Adidas",
    competition: ["League"],
    kitType: "Third",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "chelsea-stadium-home-2026",
    name: "Chelsea Stadium Home Shirt 2025/26",
    description: "Official Chelsea stadium home shirt for the 2025/26 season. Classic blue design with club crest.",
    price: 94.99,
    images: ["/products/shirts/chelsea-stadium-home-2026.jpg"],
    category: "premier-league",
    team: "Chelsea",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["League", "Europa League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "chelsea-stadium-away-2026",
    name: "Chelsea Stadium Away Shirt 2025/26",
    description: "Official Chelsea stadium away shirt for the 2025/26 season. Modern away kit design.",
    price: 94.99,
    images: ["/products/shirts/chelsea-stadium-away-2026.jpg"],
    category: "premier-league",
    team: "Chelsea",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Away",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "chelsea-stadium-third-2026",
    name: "Chelsea Stadium Third Shirt 2025/26",
    description: "Official Chelsea stadium third shirt for the 2025/26 season. Unique alternative design.",
    price: 94.99,
    images: ["/products/shirts/chelsea-stadium-third-2026.jpg"],
    category: "premier-league",
    team: "Chelsea",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League"],
    kitType: "Third",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "juventus-stadium-home-2021",
    name: "Juventus Stadium Home Shirt 2020/21",
    description: "Official Juventus stadium home shirt for the 2020/21 season. Classic black and white stripes with iconic Bianconeri design.",
    price: 79.99,
    images: ["/products/shirts/juventus-stadium-home-2021.jpg"],
    category: "serie-a",
    team: "Juventus",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2020/21",
    inStock: true,
    featured: false,
    brand: "Adidas",
    competition: ["League", "Champions League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2020-07-01T00:00:00.000Z"
  },
  {
    id: "manchester-united-stadium-home-2018",
    name: "Manchester United Stadium Home Shirt 2017/18",
    description: "Official Manchester United stadium home shirt for the 2017/18 season. Classic red devil design from the José Mourinho era.",
    price: 74.99,
    images: ["/products/shirts/manchested-united-stadium-home-2018.jpg"],
    category: "premier-league",
    team: "Manchester United",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2017/18",
    inStock: true,
    featured: false,
    brand: "Adidas",
    competition: ["League", "Europa League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2017-07-01T00:00:00.000Z"
  },
  {
    id: "manchester-united-stadium-home-2021",
    name: "Manchester United Stadium Home Shirt 2020/21",
    description: "Official Manchester United stadium home shirt for the 2020/21 season. Iconic red home kit with devil crest.",
    price: 84.99,
    images: ["/products/shirts/manchested-united-stadium-home-2021.jpg"],
    category: "premier-league",
    team: "Manchester United",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2020/21",
    inStock: true,
    featured: false,
    brand: "Adidas",
    competition: ["League", "Europa League"],
    kitType: "Home",
    condition: "New",
    hasNameset: false,
    format: "Stadium",
    dateAdded: "2020-07-01T00:00:00.000Z"
  },
  {
    id: "tottenham-pro-away-2026",
    name: "Tottenham Pro Away Shirt 2025/26",
    description: "Official Tottenham Hotspur professional away shirt for the 2025/26 season. Premium player issue quality with modern design.",
    price: 129.99,
    images: ["/products/shirts/tottenham-pro-away-2026.jpg"],
    category: "premier-league",
    team: "Tottenham",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2025/26",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["League", "Europa League"],
    kitType: "Away",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2025-07-01T00:00:00.000Z"
  },
  {
    id: "tottenham-pro-third-2020",
    name: "Tottenham Pro Third Shirt 2019/20",
    description: "Official Tottenham Hotspur professional third shirt for the 2019/20 season. Player issue quality from the Champions League final season.",
    price: 99.99,
    images: ["/products/shirts/tottenham-pro-third-2020.jpg"],
    category: "premier-league",
    team: "Tottenham",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2019/20",
    inStock: true,
    featured: false,
    brand: "Nike",
    competition: ["League", "Champions League"],
    kitType: "Third",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2019-07-01T00:00:00.000Z"
  },
  {
    id: "liverpool-pro-third-2024",
    name: "Liverpool Pro Third Shirt 2023/24",
    description: "Official Liverpool FC professional third shirt for the 2023/24 season. Premium player issue quality with unique alternative design in striking colors.",
    price: 129.99,
    images: ["/products/shirts/liverpool-pro-third-2024.jpg"],
    category: "premier-league",
    team: "Liverpool",
    size: ["S", "M", "L", "XL", "XXL"],
    season: "2023/24",
    inStock: true,
    featured: true,
    brand: "Nike",
    competition: ["League", "Europa League"],
    kitType: "Third",
    condition: "New",
    hasNameset: false,
    format: "Player Issue",
    dateAdded: "2023-07-01T00:00:00.000Z"
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
