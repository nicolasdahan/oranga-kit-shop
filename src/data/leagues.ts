export type League = {
  id: string;
  name: string;
  slug: string;
  country: string;
  countryCode: string;
  logo?: string;
  founded?: number;
  numberOfTeams: number;
  description?: string;
  featured: boolean;
  tier: number; // 1 = top tier
};

export const leagues: League[] = [
  {
    id: 'premier-league',
    name: 'Premier League',
    slug: 'premier-league',
    country: 'England',
    countryCode: 'GB',
    logo: '/league-logo/premier-league-logo.jpg',
    founded: 1992,
    numberOfTeams: 20,
    description: 'The Premier League is the top tier of English football and one of the most-watched sports leagues in the world. Known for its competitive nature, world-class players, and passionate fans, the Premier League features iconic clubs like Manchester United, Liverpool, Arsenal, and Chelsea.',
    featured: true,
    tier: 1
  },
  {
    id: 'la-liga',
    name: 'La Liga',
    slug: 'la-liga',
    country: 'Spain',
    countryCode: 'ES',
    logo: '/league-logo/LaLiga_logo_2023.svg.png',
    founded: 1929,
    numberOfTeams: 20,
    description: 'La Liga, officially known as LaLiga Santander, is Spain\'s top professional football division. Home to FC Barcelona and Real Madrid, two of the most successful clubs in football history, La Liga is renowned for its technical quality and attacking football.',
    featured: true,
    tier: 1
  },
  {
    id: 'serie-a',
    name: 'Serie A',
    slug: 'serie-a',
    country: 'Italy',
    countryCode: 'IT',
    logo: '/league-logo/Serie_A.svg.png',
    founded: 1898,
    numberOfTeams: 20,
    description: 'Serie A is Italy\'s premier football league, historically known for its tactical sophistication and defensive prowess. The league has been home to legendary clubs like Juventus, AC Milan, and Inter Milan, and has hosted some of football\'s greatest players.',
    featured: true,
    tier: 1
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    slug: 'bundesliga',
    country: 'Germany',
    countryCode: 'DE',
    logo: '/league-logo/Bundesliga-logo.svg.png',
    founded: 1963,
    numberOfTeams: 18,
    description: 'The Bundesliga is Germany\'s top football division, famous for its fan culture, standing terraces, and attacking football. Bayern Munich have dominated in recent years, but clubs like Borussia Dortmund provide fierce competition.',
    featured: true,
    tier: 1
  },
  {
    id: 'ligue-1',
    name: 'Ligue 1',
    slug: 'ligue-1',
    country: 'France',
    countryCode: 'FR',
    logo: '/league-logo/ligue-1-logo.webp',
    founded: 1932,
    numberOfTeams: 18,
    description: 'Ligue 1 is France\'s top football league, traditionally known for developing young talent. Paris Saint-Germain have dominated recent years, while Olympique Marseille and Lyon are historic powerhouses.',
    featured: true,
    tier: 1
  },
  {
    id: 'championship',
    name: 'EFL Championship',
    slug: 'championship',
    country: 'England',
    countryCode: 'GB',
    founded: 2004,
    numberOfTeams: 24,
    description: 'The Championship is the second tier of English football, known for its competitiveness and unpredictability. It features historic clubs fighting for promotion to the Premier League.',
    featured: false,
    tier: 2
  },
  {
    id: 'eredivisie',
    name: 'Eredivisie',
    slug: 'eredivisie',
    country: 'Netherlands',
    countryCode: 'NL',
    founded: 1956,
    numberOfTeams: 18,
    description: 'The Eredivisie is the top professional football league in the Netherlands, home to Ajax, PSV, and Feyenoord. Known for producing exceptional talent and attractive football.',
    featured: false,
    tier: 1
  },
  {
    id: 'primeira-liga',
    name: 'Primeira Liga',
    slug: 'primeira-liga',
    country: 'Portugal',
    countryCode: 'PT',
    founded: 1934,
    numberOfTeams: 18,
    description: 'Portugal\'s Primeira Liga is dominated by the "Big Three" - Benfica, Porto, and Sporting CP. The league is known for developing young talent who often move to Europe\'s top leagues.',
    featured: false,
    tier: 1
  },
  {
    id: 'mls',
    name: 'Major League Soccer',
    slug: 'mls',
    country: 'United States',
    countryCode: 'US',
    founded: 1993,
    numberOfTeams: 29,
    description: 'MLS is the top professional soccer league in the United States and Canada, rapidly growing in popularity and attracting international stars.',
    featured: false,
    tier: 1
  },
];

// Helper functions
export const getLeagueBySlug = (slug: string): League | undefined => {
  return leagues.find(league => league.slug === slug);
};

export const getFeaturedLeagues = (): League[] => {
  return leagues.filter(league => league.featured);
};

export const getTopTierLeagues = (): League[] => {
  return leagues.filter(league => league.tier === 1);
};

export const getAllLeagues = (): League[] => {
  return leagues.sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    return a.name.localeCompare(b.name);
  });
};

export const searchLeagues = (query: string): League[] => {
  const lowercaseQuery = query.toLowerCase();
  return leagues.filter(league => 
    league.name.toLowerCase().includes(lowercaseQuery) ||
    league.country.toLowerCase().includes(lowercaseQuery)
  );
};

