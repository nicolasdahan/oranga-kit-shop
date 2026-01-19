/**
 * Patch Restrictions Configuration
 * 
 * This file defines which patches are available for specific clubs in specific seasons.
 * 
 * Structure:
 * - Key: patch ID (e.g., 'ucl-standard', 'premier-league-champions')
 * - Value: Object with 'allowedClubs' array containing club eligibility rules
 * 
 * Club eligibility rules:
 * - clubSlug: The club's slug identifier
 * - seasons: Array of seasons where the patch is available (e.g., ['2023/24', '2024/25'])
 *           Use '*' to allow for all seasons
 * 
 * If a patch is NOT listed here, it's available to all compatible clubs in all seasons.
 * If a patch IS listed, only the specified clubs in the specified seasons can use it.
 */

export type PatchRestriction = {
  allowedClubs: Array<{
    clubSlug: string;
    seasons: string[] | '*'; // '*' means all seasons
  }>;
};

export type PatchRestrictionsConfig = {
  [patchId: string]: PatchRestriction;
};

export const patchRestrictions: PatchRestrictionsConfig = {
  // UEFA Champions League Standard Patch
  'ucl-standard': {
    allowedClubs: [
      // Premier League - 2023/24 season
      { clubSlug: 'manchester-city', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'arsenal', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'manchester-united', seasons: ['2023/24'] },
      { clubSlug: 'newcastle', seasons: ['2023/24'] },
      { clubSlug: 'liverpool', seasons: ['2023/24'] },
      
      // La Liga
      { clubSlug: 'real-madrid', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'barcelona', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'atletico-madrid', seasons: ['2023/24', '2024/25'] },
      
      // Serie A
      { clubSlug: 'inter-milan', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'ac-milan', seasons: ['2023/24'] },
      { clubSlug: 'napoli', seasons: ['2023/24'] },
      { clubSlug: 'juventus', seasons: ['2023/24'] },
      
      // Bundesliga
      { clubSlug: 'bayern-munich', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'borussia-dortmund', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'rb-leipzig', seasons: ['2023/24'] },
      
      // Ligue 1 - Marseille example: Champions League in 2023/24 but NOT in 2024/25
      { clubSlug: 'psg', seasons: ['2020/21', '2021/22', '2022/23', '2023/24', '2024/25'] },
      { clubSlug: 'marseille', seasons: ['2023/24'] }, // Only 2023/24, not 2024/25
    ]
  },
  
  // UEFA Champions League Winners Badge
  'ucl-winners': {
    allowedClubs: [
      // Only clubs that have won the Champions League can wear this
      { clubSlug: 'manchester-city', seasons: ['2023/24'] }, // Won 2023
      { clubSlug: 'manchester-city', seasons: ['2025/26'] }, 
      { clubSlug: 'chelsea', seasons: '*' }, // Won 2021
      { clubSlug: 'liverpool', seasons: '*' }, // Won 2019
      { clubSlug: 'real-madrid', seasons: '*' }, // Multiple wins, most recent 2022
      { clubSlug: 'barcelona', seasons: '*' }, // Multiple wins
      { clubSlug: 'inter-milan', seasons: '*' }, // Won 2010
      { clubSlug: 'ac-milan', seasons: '*' }, // Multiple wins
      { clubSlug: 'bayern-munich', seasons: '*' }, // Multiple wins, most recent 2020
      { clubSlug: 'marseille', seasons: '*' }, // Won 1993
      { clubSlug: 'juventus', seasons: '*' }, // Won multiple times
      { clubSlug: 'manchester-united', seasons: '*' }, // Won multiple times
    ]
  },
  
  // UEFA Europa League Patch
  'uel-standard': {
    allowedClubs: [
      // Premier League
      { clubSlug: 'liverpool', seasons: ['2024/25'] },
      { clubSlug: 'manchester-united', seasons: ['2024/25'] },
      { clubSlug: 'tottenham', seasons: ['2023/24'] },
      { clubSlug: 'arsenal', seasons: ['2022/23'] },
      
      // La Liga
      { clubSlug: 'barcelona', seasons: ['2021/22'] },
      { clubSlug: 'atletico-madrid', seasons: ['2022/23'] },
      
      // Serie A
      { clubSlug: 'as-roma', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'ac-milan', seasons: ['2024/25'] },
      { clubSlug: 'juventus', seasons: ['2024/25'] },
      
      // Bundesliga
      { clubSlug: 'borussia-dortmund', seasons: ['2022/23'] },
      { clubSlug: 'rb-leipzig', seasons: ['2024/25'] },
      
      // Ligue 1
      { clubSlug: 'marseille', seasons: ['2024/25'] }, // Europa League in 2024/25 instead of CL
      { clubSlug: 'lyon', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'monaco', seasons: ['2023/24'] },
    ]
  },
  
  // Premier League Champions Patch
  'premier-league-champions': {
    allowedClubs: [
      { clubSlug: 'manchester-city', seasons: ['2023/24', '2024/25'] }, // Won 2023
      { clubSlug: 'liverpool', seasons: ['2020/21'] }, // Won 2020
      { clubSlug: 'chelsea', seasons: ['2021/22'] }, // Won 2021
      // Add other historical champions as needed
    ]
  },
  
  // La Liga Champions Patch
  'la-liga-champions': {
    allowedClubs: [
      { clubSlug: 'real-madrid', seasons: ['2024/25'] }, // Won 2024
      { clubSlug: 'barcelona', seasons: ['2023/24'] }, // Won 2023
      { clubSlug: 'atletico-madrid', seasons: ['2021/22'] }, // Won 2021
    ]
  },
  
  // Serie A Champions (Scudetto) Patch
  'serie-a-champions': {
    allowedClubs: [
      { clubSlug: 'napoli', seasons: ['2023/24'] }, // Won 2023
      { clubSlug: 'inter-milan', seasons: ['2024/25'] }, // Won 2024
      { clubSlug: 'ac-milan', seasons: ['2022/23'] }, // Won 2022
      { clubSlug: 'juventus', seasons: ['2020/21', '2021/22'] }, // Historical wins
    ]
  },
  
  // Bundesliga Champions (Meisterschale) Patch
  'bundesliga-champions': {
    allowedClubs: [
      { clubSlug: 'bayern-munich', seasons: ['2023/24', '2024/25', '2022/23', '2021/22', '2020/21'] }, // Dominant run
      { clubSlug: 'borussia-dortmund', seasons: ['2024/25'] }, // Example if they win
    ]
  },
  
  // Ligue 1 Champions Patch (currently commented out in patches.ts)
  'ligue-1-champions': {
    allowedClubs: [
      /*{ clubSlug: 'psg', seasons: ['2023/24', '2024/25', '2022/23', '2021/22', '2020/21'] }, // Dominant run
      { clubSlug: 'lille', seasons: ['2021/22'] }, // Won 2021
      { clubSlug: 'monaco', seasons: ['2017/18'] }, // Won 2017
      { clubSlug: 'marseille', seasons: ['2010/11'] }, // Won 2010 */
    ]
  },

// Ligue 1 Standard Patch
  'ligue-1-standard': {
    allowedClubs: [
    
        // Ligue 1 clubs
        { clubSlug: 'psg', seasons: ['2016/17', '2021/22'] },
        { clubSlug: 'lyon', seasons: '*' },
        { clubSlug: 'marseille', seasons: '*' },
        { clubSlug: 'monaco', seasons: '*' },
    ]
    },
      
    // FIFA World Cup Patch
   'world-cup-standard': {
    allowedClubs: [
        // National teams that qualified for World Cup - this is an example
        // You can customize based on which teams qualified
        /*{ clubSlug: 'france', seasons: ['2022', '2026'] },
        { clubSlug: 'argentina', seasons: ['2022', '2026'] },
        { clubSlug: 'germany', seasons: ['2022', '2026'] },
        { clubSlug: 'spain', seasons: ['2022', '2026'] },
        { clubSlug: 'england', seasons: ['2022', '2026'] },
        { clubSlug: 'brazil', seasons: ['2022', '2026'] },
        { clubSlug: 'italy', seasons: ['2022', '2026'] },
        { clubSlug: 'netherlands', seasons: ['2022', '2026'] },
        { clubSlug: 'belgium', seasons: ['2022', '2026'] },
        { clubSlug: 'portugal', seasons: ['2022', '2026'] },*/
    ]
    },

    'euro-standard-2020': {
    allowedClubs: [
        // National teams that qualified for World Cup - this is an example
        // You can customize based on which teams qualified
        { clubSlug: 'france', seasons: ['2019/20'] },
        { clubSlug: 'italy', seasons: ['2020/21'] },
        { clubSlug: 'england', seasons: ['2020/21'] },
        { clubSlug: 'spain', seasons: ['2020/21'] },
        { clubSlug: 'germany', seasons: ['2020/21'] },
        { clubSlug: 'portugal', seasons: ['2020/21'] },
        { clubSlug: 'belgium', seasons: ['2020/21'] },
        { clubSlug: 'netherlands', seasons: ['2020/21'] },
    ]
    },
    'euro-standard-2024': {
    allowedClubs: [
        // National teams that qualified for World Cup - this is an example
        // You can customize based on which teams qualified
        { clubSlug: 'france', seasons: ['2023/24'] },
        { clubSlug: 'germany', seasons: ['2023/24'] },
        { clubSlug: 'spain', seasons: ['2023/24'] },
        { clubSlug: 'italy', seasons: ['2023/24'] },
        { clubSlug: 'england', seasons: ['2023/24'] },
        { clubSlug: 'portugal', seasons: ['2023/24'] },
        { clubSlug: 'belgium', seasons: ['2023/24'] },
        { clubSlug: 'netherlands', seasons: ['2023/24'] },
    ]
    },
};

/**
 * Check if a patch is allowed for a specific club in a specific season
 */
export const isPatchAllowedForClub = (
  patchId: string,
  clubSlug: string,
  season: string
): boolean => {
  const restriction = patchRestrictions[patchId];
  
  // If no restriction exists for this patch, it's allowed for all clubs
  if (!restriction) {
    return true;
  }
  
  // Find if this club has access to this patch
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
 * Get all patches that are allowed for a specific club in a specific season
 */
export const getAllowedPatchesForClub = (
  allPatches: any[],
  clubSlug: string,
  season: string
): any[] => {
  return allPatches.filter(patch => 
    isPatchAllowedForClub(patch.id, clubSlug, season)
  );
};

/**
 * Helper to get club slug from team name
 * This is a simple implementation - you may need to adjust based on your data structure
 */
export const getClubSlugFromTeamName = (teamName: string): string => {
  // Convert team name to slug format
  // Examples: "Olympique Marseille" -> "marseille", "Paris Saint-Germain" -> "psg"
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

