/**
 * Nameset Restrictions Configuration
 * 
 * Controls which nameset types (fonts) are available for specific clubs in specific seasons.
 * 
 * Key Use Case: PSG uses Ligue 1 font for domestic matches but Champions League font for UCL matches.
 * 
 * Structure:
 * - Key: nameset type ID (e.g., 'ligue1-standard-2023', 'ucl-standard')
 * - Value: Object with 'allowedClubs' array containing club eligibility rules
 * 
 * If a nameset is NOT listed here, it's available to all compatible clubs in all seasons.
 * If a nameset IS listed, only the specified clubs in the specified seasons can use it.
 */

export type NamesetRestriction = {
  allowedClubs: Array<{
    clubSlug: string;
    seasons: string[] | '*'; // '*' means all seasons
  }>;
};

export type NamesetRestrictionsConfig = {
  [namesetId: string]: NamesetRestriction;
};

export const namesetRestrictions: NamesetRestrictionsConfig = {
  // Ligue 1 Standard Nameset (2023/24 season)
  'ligue1-standard-2023': {
    allowedClubs: [
      { clubSlug: 'psg', seasons: ['2022/23', '2023/24'] },
      { clubSlug: 'marseille', seasons: ['2022/23', '2023/24'] },
      { clubSlug: 'lyon', seasons: ['2022/23', '2023/24'] },
      { clubSlug: 'monaco', seasons: ['2022/23', '2023/24'] },
      // Add other Ligue 1 clubs as needed
    ]
  },
  
  // Ligue 1 Standard Nameset (2024/25 season) - Updated font
  'ligue1-standard-2024': {
    allowedClubs: [
      { clubSlug: 'psg', seasons: ['2024/25'] },
      { clubSlug: 'marseille', seasons: ['2024/25'] },
      { clubSlug: 'lyon', seasons: ['2024/25'] },
      { clubSlug: 'monaco', seasons: ['2024/25'] },
      // Add other Ligue 1 clubs as needed
    ]
  },
  
  // UEFA Champions League Nameset
  // All clubs playing in UCL use the same UEFA-mandated font
  'ucl-standard': {
    allowedClubs: [
      // Premier League
      { clubSlug: 'manchester-city', seasons: ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'] },
      { clubSlug: 'liverpool', seasons: ['2021/22', '2022/23', '2023/24'] },
      { clubSlug: 'chelsea', seasons: ['2021/22', '2022/23', '2023/24'] },
      { clubSlug: 'arsenal', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'manchester-united', seasons: ['2023/24'] },
      { clubSlug: 'newcastle', seasons: ['2023/24'] },
      { clubSlug: 'tottenham', seasons: ['2022/23'] },
      
      // La Liga
      { clubSlug: 'real-madrid', seasons: ['2021/22', '2022/23', '2023/24', '2024/25'] },
      { clubSlug: 'barcelona', seasons: ['2021/22', '2022/23', '2023/24', '2024/25'] },
      { clubSlug: 'atletico-madrid', seasons: ['2021/22', '2022/23', '2023/24', '2024/25'] },
      
      // Serie A
      { clubSlug: 'inter-milan', seasons: ['2021/22', '2022/23', '2023/24', '2024/25'] },
      { clubSlug: 'ac-milan', seasons: ['2021/22', '2022/23', '2023/24'] },
      { clubSlug: 'napoli', seasons: ['2022/23', '2023/24'] },
      { clubSlug: 'juventus', seasons: ['2022/23', '2023/24'] },
      { clubSlug: 'as-roma', seasons: ['2022/23'] },
      
      // Bundesliga
      { clubSlug: 'bayern-munich', seasons: ['2021/22', '2022/23', '2023/24', '2024/25'] },
      { clubSlug: 'borussia-dortmund', seasons: ['2021/22', '2022/23', '2023/24', '2024/25'] },
      { clubSlug: 'rb-leipzig', seasons: ['2022/23', '2023/24'] },
      
      // Ligue 1
      // PSG: Uses UCL font when playing Champions League
      { clubSlug: 'psg', seasons: ['2021/22', '2022/23', '2023/24', '2024/25'] },
      // Marseille: UCL font in 2023/24 when they qualified for Champions League
      { clubSlug: 'marseille', seasons: ['2023/24'] },
    ]
  },
  
  // UEFA Europa League Nameset
  'uel-standard': {
    allowedClubs: [
      // Premier League
      { clubSlug: 'manchester-united', seasons: ['2024/25'] },
      { clubSlug: 'liverpool', seasons: ['2024/25'] },
      { clubSlug: 'tottenham', seasons: ['2023/24'] },
      { clubSlug: 'arsenal', seasons: ['2022/23'] },
      
      // La Liga
      { clubSlug: 'barcelona', seasons: ['2021/22'] }, // When they dropped to Europa
      
      // Serie A
      { clubSlug: 'as-roma', seasons: ['2022/23', '2023/24', '2024/25'] },
      { clubSlug: 'ac-milan', seasons: ['2024/25'] },
      
      // Bundesliga
      { clubSlug: 'borussia-dortmund', seasons: ['2022/23'] },
      { clubSlug: 'rb-leipzig', seasons: ['2024/25'] },
      
      // Ligue 1
      // Marseille: Europa League font in 2024/25
      { clubSlug: 'marseille', seasons: ['2024/25'] },
      { clubSlug: 'lyon', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'monaco', seasons: ['2023/24'] },
    ]
  },
  
  // Premier League Standard Nameset
  'premier-league-standard': {
    allowedClubs: [
      // All Premier League clubs can use this for league matches
      { clubSlug: 'arsenal', seasons: '*' },
      { clubSlug: 'chelsea', seasons: '*' },
      { clubSlug: 'liverpool', seasons: '*' },
      { clubSlug: 'manchester-city', seasons: '*' },
      { clubSlug: 'manchester-united', seasons: '*' },
      { clubSlug: 'tottenham', seasons: '*' },
      { clubSlug: 'newcastle', seasons: '*' },
      // Add more as needed
    ]
  },
  
  // La Liga Standard Nameset
  'la-liga-standard': {
    allowedClubs: [
      { clubSlug: 'real-madrid', seasons: '*' },
      { clubSlug: 'barcelona', seasons: '*' },
      { clubSlug: 'atletico-madrid', seasons: '*' },
      // Add more as needed
    ]
  },
  
  // Serie A Standard Nameset
  'serie-a-standard': {
    allowedClubs: [
      { clubSlug: 'inter-milan', seasons: '*' },
      { clubSlug: 'ac-milan', seasons: '*' },
      { clubSlug: 'juventus', seasons: '*' },
      { clubSlug: 'napoli', seasons: '*' },
      { clubSlug: 'as-roma', seasons: '*' },
      // Add more as needed
    ]
  },
  
  // Bundesliga Standard Nameset
  'bundesliga-standard': {
    allowedClubs: [
      { clubSlug: 'bayern-munich', seasons: '*' },
      { clubSlug: 'borussia-dortmund', seasons: '*' },
      { clubSlug: 'rb-leipzig', seasons: '*' },
      // Add more as needed
    ]
  },
};

/**
 * Check if a nameset is allowed for a specific club in a specific season
 */
export const isNamesetAllowedForClub = (
  namesetId: string,
  clubSlug: string,
  season: string
): boolean => {
  const restriction = namesetRestrictions[namesetId];
  
  // If no restriction exists for this nameset, it's allowed for all clubs
  if (!restriction) {
    return true;
  }
  
  // Find if this club has access to this nameset
  const clubRule = restriction.allowedClubs.find(rule => rule.clubSlug === clubSlug);
  
  // If club is not in the allowed list, deny access
  if (!clubRule) {
    return false;
  }
  
  // If seasons is '*', allow for all seasons
  if (clubRule.seasons === '*') {
    return true;
  }
  
  // Check if the specific season is in the allowed seasons list
  return clubRule.seasons.includes(season);
};

/**
 * Get all namesets that are allowed for a specific club in a specific season
 */
export const getAllowedNamesetsForClub = (
  allNamesets: any[],
  clubSlug: string,
  season: string
): any[] => {
  return allNamesets.filter(nameset =>
    isNamesetAllowedForClub(nameset.id, clubSlug, season)
  );
};

/**
 * Helper to get club slug from team name
 * Reuses the same mapping as patch restrictions
 */
export const getClubSlugFromTeamName = (teamName: string): string => {
  const slugMap: { [key: string]: string } = {
    'Olympique Marseille': 'marseille',
    'Paris Saint-Germain': 'psg',
    'Olympique Lyonnais': 'lyon',
    'AS Monaco': 'monaco',
    'Arsenal': 'arsenal',
    'Chelsea': 'chelsea',
    'Liverpool': 'liverpool',
    'Manchester United': 'manchester-united',
    'Manchester City': 'manchester-city',
    'Tottenham Hotspur': 'tottenham',
    'Newcastle United': 'newcastle',
    'FC Barcelona': 'barcelona',
    'Real Madrid': 'real-madrid',
    'Atlético Madrid': 'atletico-madrid',
    'Inter Milan': 'inter-milan',
    'AC Milan': 'ac-milan',
    'Juventus': 'juventus',
    'AS Roma': 'as-roma',
    'SSC Napoli': 'napoli',
    'Bayern Munich': 'bayern-munich',
    'Borussia Dortmund': 'borussia-dortmund',
    'RB Leipzig': 'rb-leipzig',
  };
  
  return slugMap[teamName] || teamName.toLowerCase().replace(/\s+/g, '-');
};

/**
 * Get the appropriate nameset for a club based on competition
 * 
 * Example Usage:
 * - PSG playing in Ligue 1 → Returns 'ligue1-standard-2024'
 * - PSG playing in Champions League → Returns 'ucl-standard'
 */
export const getNamesetForCompetition = (
  clubSlug: string,
  competition: string,
  season: string,
  category: string
): string | null => {
  // Priority order: Competition-specific namesets first, then league namesets
  
  if (competition === 'Champions League') {
    if (isNamesetAllowedForClub('ucl-standard', clubSlug, season)) {
      return 'ucl-standard';
    }
  }
  
  if (competition === 'Europa League') {
    if (isNamesetAllowedForClub('uel-standard', clubSlug, season)) {
      return 'uel-standard';
    }
  }
  
  if (competition === 'World Cup') {
    if (isNamesetAllowedForClub('world-cup-standard', clubSlug, season)) {
      return 'world-cup-standard';
    }
  }
  
  if (competition === 'Euro') {
    if (isNamesetAllowedForClub('euro-standard', clubSlug, season)) {
      return 'euro-standard';
    }
  }
  
  // Fall back to league-specific nameset
  if (competition === 'League') {
    switch (category) {
      case 'ligue-1':
        // Check for season-specific Ligue 1 nameset
        if (season === '2024/25' && isNamesetAllowedForClub('ligue1-standard-2024', clubSlug, season)) {
          return 'ligue1-standard-2024';
        }
        if (isNamesetAllowedForClub('ligue1-standard-2023', clubSlug, season)) {
          return 'ligue1-standard-2023';
        }
        break;
        
      case 'premier-league':
        if (isNamesetAllowedForClub('premier-league-standard', clubSlug, season)) {
          return 'premier-league-standard';
        }
        break;
        
      case 'la-liga':
        if (isNamesetAllowedForClub('la-liga-standard', clubSlug, season)) {
          return 'la-liga-standard';
        }
        break;
        
      case 'serie-a':
        if (isNamesetAllowedForClub('serie-a-standard', clubSlug, season)) {
          return 'serie-a-standard';
        }
        break;
        
      case 'bundesliga':
        if (isNamesetAllowedForClub('bundesliga-standard', clubSlug, season)) {
          return 'bundesliga-standard';
        }
        break;
    }
  }
  
  return null;
};

