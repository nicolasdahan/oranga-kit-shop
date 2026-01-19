/**
 * Nameset Types and Restrictions
 * 
 * Different competitions and leagues use different fonts and styles for player names/numbers.
 * For example, PSG uses one font style for Ligue 1 matches and another for Champions League.
 */

import { isNamesetAllowedForClub, getClubSlugFromTeamName } from './namesetRestrictions';

export type NamesetType = {
  id: string;
  name: string;
  description: string;
  priceModifier: number; // Additional cost compared to base nameset price
  fontStyle: string; // Font family/style identifier
  image?: string; // Preview image
  compatibleLeagues: string[]; // Which leagues use this nameset
  compatibleCompetitions?: string[]; // Which competitions use this nameset
};

export const namesetTypes: NamesetType[] = [
  // Ligue 1 Namesets
  {
    id: 'ligue1-standard-2023',
    name: 'Ligue 1 Standard Nameset',
    description: 'Official Ligue 1 font used for domestic league matches',
    priceModifier: 0, // Base price
    fontStyle: 'Ligue1-2023',
    image: '/namesets/ligue1-standard.jpg',
    compatibleLeagues: ['ligue-1'],
    compatibleCompetitions: ['League']
  },
  {
    id: 'ligue1-standard-2024',
    name: 'Ligue 1 Standard Nameset 2024/25',
    description: 'Updated Ligue 1 font for 2024/25 season',
    priceModifier: 0,
    fontStyle: 'Ligue1-2024',
    image: '/namesets/ligue1-standard-2024.jpg',
    compatibleLeagues: ['ligue-1'],
    compatibleCompetitions: ['League']
  },
  
  // Premier League Namesets
  {
    id: 'premier-league-standard',
    name: 'Premier League Standard Nameset',
    description: 'Official Premier League font',
    priceModifier: 0,
    fontStyle: 'PremierLeague-Standard',
    image: '/namesets/premier-league-standard.jpg',
    compatibleLeagues: ['premier-league'],
    compatibleCompetitions: ['League']
  },
  
  // La Liga Namesets
  {
    id: 'la-liga-standard',
    name: 'La Liga Standard Nameset',
    description: 'Official La Liga font',
    priceModifier: 0,
    fontStyle: 'LaLiga-Standard',
    image: '/namesets/la-liga-standard.jpg',
    compatibleLeagues: ['la-liga'],
    compatibleCompetitions: ['League']
  },
  
  // Serie A Namesets
  {
    id: 'serie-a-standard',
    name: 'Serie A Standard Nameset',
    description: 'Official Serie A font',
    priceModifier: 0,
    fontStyle: 'SerieA-Standard',
    image: '/namesets/serie-a-standard.jpg',
    compatibleLeagues: ['serie-a'],
    compatibleCompetitions: ['League']
  },
  
  // Bundesliga Namesets
  {
    id: 'bundesliga-standard',
    name: 'Bundesliga Standard Nameset',
    description: 'Official Bundesliga font',
    priceModifier: 0,
    fontStyle: 'Bundesliga-Standard',
    image: '/namesets/bundesliga-standard.jpg',
    compatibleLeagues: ['bundesliga'],
    compatibleCompetitions: ['League']
  },
  
  // UEFA Champions League Namesets
  {
    id: 'ucl-standard',
    name: 'UEFA Champions League Nameset',
    description: 'Official UEFA Champions League font - used by all clubs in UCL',
    priceModifier: 5, // Champions League namesets often cost more
    fontStyle: 'UCL-Standard',
    image: '/namesets/ucl-standard.jpg',
    compatibleLeagues: ['premier-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'],
    compatibleCompetitions: ['Champions League']
  },
  
  // UEFA Europa League Namesets
  {
    id: 'uel-standard',
    name: 'UEFA Europa League Nameset',
    description: 'Official UEFA Europa League font',
    priceModifier: 5,
    fontStyle: 'UEL-Standard',
    image: '/namesets/uel-standard.jpg',
    compatibleLeagues: ['premier-league', 'la-liga', 'serie-a', 'bundesliga', 'ligue-1'],
    compatibleCompetitions: ['Europa League']
  },
  
  // National Team Namesets
  {
    id: 'world-cup-standard',
    name: 'FIFA World Cup Nameset',
    description: 'Official FIFA World Cup font',
    priceModifier: 5,
    fontStyle: 'WorldCup-Standard',
    image: '/namesets/world-cup-standard.jpg',
    compatibleLeagues: ['national-teams'],
    compatibleCompetitions: ['World Cup']
  },
  {
    id: 'euro-standard',
    name: 'UEFA Euro Championship Nameset',
    description: 'Official UEFA Euro font',
    priceModifier: 5,
    fontStyle: 'Euro-Standard',
    image: '/namesets/euro-standard.jpg',
    compatibleLeagues: ['national-teams'],
    compatibleCompetitions: ['Euro']
  },
];

/**
 * Get namesets compatible with a product
 * Similar to patch filtering but for nameset types
 */
export const getCompatibleNamesets = (
  category: string,
  competitions: string[],
  teamName?: string,
  season?: string
): NamesetType[] => {
  // First filter by league and competition compatibility
  let compatibleNamesets = namesetTypes.filter(nameset => {
    const leagueMatch = nameset.compatibleLeagues.includes(category);
    const competitionMatch = nameset.compatibleCompetitions?.some(comp =>
      competitions.includes(comp)
    ) || false;
    
    return leagueMatch && competitionMatch;
  });
  
  // If team and season provided, apply restrictions
  if (teamName && season) {
    const clubSlug = getClubSlugFromTeamName(teamName);
    
    compatibleNamesets = compatibleNamesets.filter(nameset =>
      isNamesetAllowedForClub(nameset.id, clubSlug, season)
    );
  }
  
  return compatibleNamesets;
};

/**
 * Get a nameset by ID
 */
export const getNamesetById = (id: string): NamesetType | undefined => {
  return namesetTypes.find(nameset => nameset.id === id);
};

/**
 * Get the default nameset for a product
 * Returns the first compatible nameset (usually the league nameset)
 */
export const getDefaultNameset = (
  category: string,
  competitions: string[],
  teamName?: string,
  season?: string
): NamesetType | undefined => {
  const compatible = getCompatibleNamesets(category, competitions, teamName, season);
  return compatible[0]; // Return first (usually league nameset)
};

