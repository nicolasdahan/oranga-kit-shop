import { isPatchAllowedForClub, getClubSlugFromTeamName } from './patchRestrictions';

export type Patch = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  compatibleLeagues: string[]; // league slugs or competition names
  compatibleCompetitions?: string[]; // Champions League, Europa League, etc.
  // Note: Restrictions are managed separately in patchRestrictions.ts
  // to control which clubs can use this patch in which seasons
};

export const patches: Patch[] = [
  // Premier League Patches
  {
    id: 'premier-league-standard',
    name: 'Premier League Standard Patch',
    description: 'Official Premier League sleeve patch',
    price: 8.00,
    image: '/patches/premier-league-standard.png',
    compatibleLeagues: ['premier-league'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'premier-league-champions',
    name: 'Premier League Champions Patch',
    description: 'Gold Premier League champions patch',
    price: 12.00,
    image: '/patches/premier-league-champions.png',
    compatibleLeagues: ['premier-league'],
    compatibleCompetitions: ['League']
  },

  // La Liga Patches
  {
    id: 'la-liga-standard',
    name: 'La Liga Standard Patch',
    description: 'Official La Liga sleeve patch',
    price: 8.00,
    image: '/patches/la-liga-standard.png',
    compatibleLeagues: ['la-liga'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'la-liga-champions',
    name: 'La Liga Champions Patch',
    description: 'Gold La Liga champions badge',
    price: 12.00,
    image: '/patches/la-liga-champions.png',
    compatibleLeagues: ['la-liga'],
    compatibleCompetitions: ['League']
  },

  // Serie A Patches
  {
    id: 'serie-a-standard',
    name: 'Serie A Standard Patch',
    description: 'Official Serie A sleeve patch',
    price: 8.00,
    image: '/patches/serie-a-standard.png',
    compatibleLeagues: ['serie-a'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'serie-a-champions',
    name: 'Serie A Scudetto Patch',
    description: 'Italian champions Scudetto badge',
    price: 12.00,
    image: '/patches/serie-a-scudetto.png',
    compatibleLeagues: ['serie-a'],
    compatibleCompetitions: ['League']
  },

  // Bundesliga Patches
  {
    id: 'bundesliga-standard',
    name: 'Bundesliga Standard Patch',
    description: 'Official Bundesliga sleeve patch',
    price: 8.00,
    image: '/patches/bundesliga-standard.png',
    compatibleLeagues: ['bundesliga'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'bundesliga-champions',
    name: 'Bundesliga Meisterschale Patch',
    description: 'German champions badge',
    price: 12.00,
    image: '/patches/bundesliga-champions.png',
    compatibleLeagues: ['bundesliga'],
    compatibleCompetitions: ['League']
  },

  // Ligue 1 Patches
  {
    id: 'ligue-1-standard-2017-19',
    name: 'Ligue 1 Standard Patch 2017-19',
    description: 'Official Ligue 1 sleeve patch (2017/18 - 2018/19)',
    price: 8.00,
    image: '/patches/ligue-1-standard-2017-19.png',
    compatibleLeagues: ['ligue-1'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'ligue-1-standard-2020-22',
    name: 'Ligue 1 Standard Patch 2020-22',
    description: 'Official Ligue 1 sleeve patch (2020/21 - 2021/22)',
    price: 8.00,
    image: '/patches/ligue-1-standard-2020-22.png',
    compatibleLeagues: ['ligue-1'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'ligue-1-standard-2022-23',
    name: 'Ligue 1 Standard Patch 2022-23',
    description: 'Official Ligue 1 sleeve patch (2022/23)',
    price: 8.00,
    image: '/patches/ligue-1-standard-2022-23.png',
    compatibleLeagues: ['ligue-1'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'ligue-1-standard-2023-24',
    name: 'Ligue 1 Standard Patch 2023-24',
    description: 'Official Ligue 1 sleeve patch (2023/24)',
    price: 8.00,
    image: '/patches/ligue-1-standard-2023-24.png',
    compatibleLeagues: ['ligue-1'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'ligue-1-standard-2024-26',
    name: 'Ligue 1 Standard Patch 2024-26',
    description: 'Official Ligue 1 sleeve patch (2024/25 - 2025/26)',
    price: 8.00,
    image: '/patches/ligue-1-standard-2024-26.png',
    compatibleLeagues: ['ligue-1'],
    compatibleCompetitions: ['League']
  },
  
  /*{
    id: 'ligue-1-champions',
    name: 'Ligue 1 Champions Patch',
    description: 'French champions badge',
    price: 12.00,
    image: '/patches/ligue-1-champions.png',
    compatibleLeagues: ['ligue-1'],
    compatibleCompetitions: ['League']
  },*/

  // European Competition Patches
  {
    id: 'ucl-standard-2012-2021',
    name: 'UEFA Champions League Patch and Respect Patch',
    description: 'Official UEFA Champions League sleeve badge with Respect Patch',
    price: 10.00,
    image: '/patches/ucl-standard-2012-2021.png',
    compatibleLeagues: ['premier-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'],
    compatibleCompetitions: ['Champions League']
  },
  {
    id: 'ucl-standard-2021-2024',
    name: 'UEFA Champions League Patch and Foundation Patch',
    description: 'Official UEFA Champions League sleeve badge with Foundation Patch',
    price: 10.00,
    image: '/patches/ucl-standard-2021-2024.png',
    compatibleLeagues: ['premier-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'],
    compatibleCompetitions: ['Champions League']
  },
  {
    id: 'ucl-standard-2024-2025',
    name: 'UEFA Champions League Patch and Foundation Patch',
    description: 'Official UEFA Champions League sleeve badge with Foundation Patch',
    price: 10.00,
    image: '/patches/ucl-standard-2024-2025.png',
    compatibleLeagues: ['premier-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'],
    compatibleCompetitions: ['Champions League']
  },
  {
    id: 'ucl-standard-2025-2026',
    name: 'UEFA Champions League Patch and Foundation Patch',
    description: 'Official UEFA Champions League sleeve badge with Foundation Patch',
    price: 10.00,
    image: '/patches/ucl-standard-2025-2026.png',
    compatibleLeagues: ['premier-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'],
    compatibleCompetitions: ['Champions League']
  },
  {
    id: 'ucl-winners',
    name: 'UEFA Champions League Winners Badge',
    description: 'Champions League winners badge',
    price: 15.00,
    image: '/patches/ucl-winners.png',
    compatibleLeagues: ['premier-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'],
    compatibleCompetitions: ['Champions League']
  },
  {
    id: 'uel-standard',
    name: 'UEFA Europa League Patch',
    description: 'Official UEFA Europa League sleeve badge',
    price: 10.00,
    image: '/patches/uel-standard.png',
    compatibleLeagues: ['premier-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'],
    compatibleCompetitions: ['Europa League']
  },

  // National Team Patches
  {
    id: 'world-cup-standard',
    name: 'FIFA World Cup Patch',
    description: 'Official FIFA World Cup badge',
    price: 10.00,
    image: '/patches/world-cup-standard.png',
    compatibleLeagues: ['national-teams'],
    compatibleCompetitions: ['World Cup']
  },
  {
    id: 'euro-standard-2020',
    name: 'UEFA Euro Championship Patch 2020',
    description: 'Official UEFA Euro badge 2020',
    price: 10.00,
    image: '/patches/euro-standard-2020.png',
    compatibleLeagues: ['national-teams'],
    compatibleCompetitions: ['Euro']
  },
  {
    id: 'euro-standard-2024',
    name: 'UEFA Euro Championship Patch 2024',
    description: 'Official UEFA Euro badge 2024',
    price: 10.00,
    image: '/patches/euro-standard-2024.png',
    compatibleLeagues: ['national-teams'],
    compatibleCompetitions: ['Euro']
  },
  {
    id: 'copa-america-standard',
    name: 'Copa América Patch',
    description: 'Official Copa América badge',
    price: 10.00,
    image: '/patches/copa-america-standard.png',
    compatibleLeagues: ['national-teams'],
    compatibleCompetitions: ['Copa America']
  }
];

// Helper function to get patches compatible with a product
// Now supports club and season restrictions
export const getCompatiblePatches = (
  category: string, 
  competitions: string[], 
  teamName?: string, 
  season?: string
): Patch[] => {
  // First filter by league and competition compatibility
  const basicCompatiblePatches = patches.filter(patch => {
    // Check if patch is compatible with the product's category/league
    const leagueMatch = patch.compatibleLeagues.includes(category);
    
    // Check if patch is compatible with any of the product's competitions
    const competitionMatch = patch.compatibleCompetitions?.some(comp => 
      competitions.includes(comp)
    ) || false;
    
    return leagueMatch && competitionMatch;
  });
  
  // If no team or season info provided, return basic compatible patches
  if (!teamName || !season) {
    return basicCompatiblePatches;
  }
  
  // Filter by club and season restrictions
  const clubSlug = getClubSlugFromTeamName(teamName);
  
  return basicCompatiblePatches.filter(patch => 
    isPatchAllowedForClub(patch.id, clubSlug, season)
  );
};

export const getPatchById = (id: string): Patch | undefined => {
  return patches.find(patch => patch.id === id);
};

