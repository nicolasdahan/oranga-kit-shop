export type Club = {
  id: string;
  name: string;
  slug: string;
  league: string;
  leagueSlug: string;
  country: string;
  countryCode: string; // ISO 2-letter code
  logo?: string;
  stadium?: string;
  founded?: number;
  colors: string[]; // Primary club colors
  description?: string;
  featured: boolean;
  nicknames?: string[];
};

export const clubs: Club[] = [
  // Premier League
  {
    id: 'arsenal',
    name: 'Arsenal',
    slug: 'arsenal',
    league: 'Premier League',
    leagueSlug: 'premier-league',
    country: 'England',
    countryCode: 'GB',
    logo: '/club_logo/Arsenal_FC.svg.png',
    stadium: 'Emirates Stadium',
    founded: 1886,
    colors: ['#EF0107', '#FFFFFF'],
    description: 'Arsenal Football Club, founded in 1886, is one of England\'s most successful clubs. Known as "The Gunners", they have won 13 league titles and a record 14 FA Cups.',
    featured: true,
    nicknames: ['The Gunners', 'The Arsenal']
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    slug: 'chelsea',
    league: 'Premier League',
    leagueSlug: 'premier-league',
    country: 'England',
    countryCode: 'GB',
    logo: '/club_logo/logo-chelsea-1024x1024.png',
    stadium: 'Stamford Bridge',
    founded: 1905,
    colors: ['#034694', '#FFFFFF'],
    description: 'Chelsea Football Club, based in London, has enjoyed tremendous success since Roman Abramovich\'s takeover in 2003, winning multiple Premier League titles and Champions League trophies.',
    featured: true,
    nicknames: ['The Blues', 'The Pensioners']
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    slug: 'liverpool',
    league: 'Premier League',
    leagueSlug: 'premier-league',
    country: 'England',
    countryCode: 'GB',
    logo: '/club_logo/logo-liverpool.jpg',
    stadium: 'Anfield',
    founded: 1892,
    colors: ['#C8102E', '#FFFFFF'],
    description: 'Liverpool FC is one of the most successful clubs in English and European football history, with 19 league titles and 6 European Cups.',
    featured: true,
    nicknames: ['The Reds']
  },
  {
    id: 'manchester-united',
    name: 'Manchester United',
    slug: 'manchester-united',
    league: 'Premier League',
    leagueSlug: 'premier-league',
    country: 'England',
    countryCode: 'GB',
    logo: '/club_logo/Logo_Manchester_United_FC.svg.png',
    stadium: 'Old Trafford',
    founded: 1878,
    colors: ['#DA291C', '#FFFFFF'],
    description: 'Manchester United, one of the world\'s most famous clubs, have won a record 20 English league titles and 3 European Cups under legendary manager Sir Alex Ferguson.',
    featured: true,
    nicknames: ['The Red Devils', 'United']
  },
  {
    id: 'manchester-city',
    name: 'Manchester City',
    slug: 'manchester-city',
    league: 'Premier League',
    leagueSlug: 'premier-league',
    country: 'England',
    countryCode: 'GB',
    logo: '/club_logo/logo-manchester-city-1024x1024.png',
    stadium: 'Etihad Stadium',
    founded: 1880,
    colors: ['#6CABDD', '#FFFFFF'],
    description: 'Manchester City have dominated English football in recent years under Pep Guardiola, winning multiple Premier League titles and their first Champions League in 2023.',
    featured: true,
    nicknames: ['The Citizens', 'City']
  },
  {
    id: 'tottenham',
    name: 'Tottenham Hotspur',
    slug: 'tottenham',
    league: 'Premier League',
    leagueSlug: 'premier-league',
    country: 'England',
    countryCode: 'GB',
    logo: '/club_logo/Logo_Tottenham_Hotspur.svg',
    stadium: 'Tottenham Hotspur Stadium',
    founded: 1882,
    colors: ['#132257', '#FFFFFF'],
    description: 'Tottenham Hotspur, based in North London, are known for their attacking football and historic rivalry with Arsenal.',
    featured: true,
    nicknames: ['Spurs', 'The Lilywhites']
  },
  {
    id: 'newcastle',
    name: 'Newcastle United',
    slug: 'newcastle',
    league: 'Premier League',
    leagueSlug: 'premier-league',
    country: 'England',
    countryCode: 'GB',
    logo: '/club_logo/Newcastle_logo.svg.png',
    stadium: 'St James\' Park',
    founded: 1892,
    colors: ['#000000', '#FFFFFF'],
    description: 'Newcastle United, one of England\'s best-supported clubs, are known for their passionate fanbase and iconic black and white stripes.',
    featured: false,
    nicknames: ['The Magpies', 'The Toon']
  },

  // La Liga
  {
    id: 'barcelona',
    name: 'FC Barcelona',
    slug: 'barcelona',
    league: 'La Liga',
    leagueSlug: 'la-liga',
    country: 'Spain',
    countryCode: 'ES',
    logo: '/club_logo/Logo_FC_Barcelone.svg.webp',
    stadium: 'Camp Nou',
    founded: 1899,
    colors: ['#A50044', '#004D98'],
    description: 'FC Barcelona, one of the world\'s most iconic clubs, is famous for its beautiful "tiki-taka" style of play and legendary players like Messi, Cruyff, and Maradona.',
    featured: true,
    nicknames: ['Barça', 'Blaugrana', 'Los Culés']
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    slug: 'real-madrid',
    league: 'La Liga',
    leagueSlug: 'la-liga',
    country: 'Spain',
    countryCode: 'ES',
    logo: '/club_logo/logo-real-madrid-732x1024.png',
    stadium: 'Santiago Bernabéu',
    founded: 1902,
    colors: ['#FFFFFF'],
    description: 'Real Madrid, the most successful club in European football history with 14 Champions League titles, is known for its "Galácticos" policy and all-white kit.',
    featured: true,
    nicknames: ['Los Blancos', 'Los Merengues', 'La Casa Blanca']
  },
  {
    id: 'atletico-madrid',
    name: 'Atlético Madrid',
    slug: 'atletico-madrid',
    league: 'La Liga',
    leagueSlug: 'la-liga',
    country: 'Spain',
    countryCode: 'ES',
    logo: '/club_logo/atletico_madrid_logo.svg.png',
    stadium: 'Cívitas Metropolitano',
    founded: 1903,
    colors: ['#CB3524', '#FFFFFF', '#1A3E6C'],
    description: 'Atlético Madrid are known for their defensive prowess and passionate support, competing with Real Madrid and Barcelona for Spanish supremacy.',
    featured: false,
    nicknames: ['Atleti', 'Los Rojiblancos', 'Los Colchoneros']
  },

  // Serie A
  {
    id: 'inter-milan',
    name: 'Inter Milan',
    slug: 'inter-milan',
    league: 'Serie A',
    leagueSlug: 'serie-a',
    country: 'Italy',
    countryCode: 'IT',
    logo: '/club_logo/FC_Internazionale_Milano_2021.svg.png',
    stadium: 'San Siro',
    founded: 1908,
    colors: ['#0068A8', '#000000'],
    description: 'Inter Milan, known as "I Nerazzurri" (The Black and Blues), are one of Italy\'s most successful clubs with 19 Serie A titles and 3 Champions League trophies.',
    featured: true,
    nicknames: ['Inter', 'I Nerazzurri', 'La Beneamata']
  },
  {
    id: 'ac-milan',
    name: 'AC Milan',
    slug: 'ac-milan',
    league: 'Serie A',
    leagueSlug: 'serie-a',
    country: 'Italy',
    countryCode: 'IT',
    logo: '/club_logo/Logo_of_AC_Milan.svg.png',
    stadium: 'San Siro',
    founded: 1899,
    colors: ['#FB090B', '#000000'],
    description: 'AC Milan, one of the most successful clubs in world football, have won 7 European Cups and are famous for their red and black "Rossoneri" stripes.',
    featured: true,
    nicknames: ['Milan', 'I Rossoneri', 'Il Diavolo']
  },
  {
    id: 'juventus',
    name: 'Juventus',
    slug: 'juventus',
    league: 'Serie A',
    leagueSlug: 'serie-a',
    country: 'Italy',
    countryCode: 'IT',
    logo: '/club_logo/Logo_Juventus.svg.png',
    stadium: 'Allianz Stadium',
    founded: 1897,
    colors: ['#000000', '#FFFFFF'],
    description: 'Juventus, Italy\'s most successful club with 36 Serie A titles, are known for their iconic black and white stripes and have been home to legends like Del Piero and Ronaldo.',
    featured: true,
    nicknames: ['Juve', 'La Vecchia Signora', 'I Bianconeri']
  },
  {
    id: 'as-roma',
    name: 'AS Roma',
    slug: 'as-roma',
    league: 'Serie A',
    leagueSlug: 'serie-a',
    country: 'Italy',
    countryCode: 'IT',
    logo: '/club_logo/as_rome_logo.svg.png',
    stadium: 'Stadio Olimpico',
    founded: 1927,
    colors: ['#8B0304', '#F7B50D'],
    description: 'AS Roma, one of Italy\'s most popular clubs, are known for their passionate "Giallorossi" fanbase and rivalry with Lazio.',
    featured: false,
    nicknames: ['La Magica', 'I Giallorossi', 'La Lupa']
  },
  {
    id: 'napoli',
    name: 'SSC Napoli',
    slug: 'napoli',
    league: 'Serie A',
    leagueSlug: 'serie-a',
    country: 'Italy',
    countryCode: 'IT',
    logo: '/club_logo/napoli_logo.svg',
    stadium: 'Stadio Diego Armando Maradona',
    founded: 1926,
    colors: ['#0E4C92', '#8DCAFF'],
    description: 'Napoli, forever associated with Diego Maradona who led them to their only Serie A titles in 1987 and 1990, won their third Scudetto in 2023.',
    featured: false,
    nicknames: ['I Partenopei', 'Gli Azzurri']
  },

  // Bundesliga
  {
    id: 'bayern-munich',
    name: 'Bayern Munich',
    slug: 'bayern-munich',
    league: 'Bundesliga',
    leagueSlug: 'bundesliga',
    country: 'Germany',
    countryCode: 'DE',
    logo: '/club_logo/Bayern_Munich_Logo.svg', // You'll need to add this logo
    stadium: 'Allianz Arena',
    founded: 1900,
    colors: ['#DC052D', '#0066B2'],
    description: 'Bayern Munich, Germany\'s most successful club, have won over 30 Bundesliga titles and 6 Champions League trophies, dominating German football for decades.',
    featured: true,
    nicknames: ['FCB', 'Die Roten', 'Der Rekordmeister']
  },
  {
    id: 'borussia-dortmund',
    name: 'Borussia Dortmund',
    slug: 'borussia-dortmund',
    league: 'Bundesliga',
    leagueSlug: 'bundesliga',
    country: 'Germany',
    countryCode: 'DE',
    logo: '/club_logo/Borussia_Dortmund_logo.svg.png',
    stadium: 'Signal Iduna Park',
    founded: 1909,
    colors: ['#FDE100', '#000000'],
    description: 'Borussia Dortmund are famous for their passionate "Yellow Wall" supporters and exciting attacking football, challenging Bayern for Bundesliga supremacy.',
    featured: true,
    nicknames: ['BVB', 'Die Borussen', 'Die Schwarzgelben']
  },
  {
    id: 'rb-leipzig',
    name: 'RB Leipzig',
    slug: 'rb-leipzig',
    league: 'Bundesliga',
    leagueSlug: 'bundesliga',
    country: 'Germany',
    countryCode: 'DE',
    logo: '/club_logo/Logo_RB_Leipzig.svg.png',
    stadium: 'Red Bull Arena',
    founded: 2009,
    colors: ['#DD0741', '#FFFFFF'],
    description: 'RB Leipzig, one of the youngest clubs in top-flight European football, have rapidly risen to become Bundesliga contenders with their energetic pressing style.',
    featured: false,
    nicknames: ['Die Roten Bullen']
  },

  // Ligue 1
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    slug: 'psg',
    league: 'Ligue 1',
    leagueSlug: 'ligue-1',
    country: 'France',
    countryCode: 'FR',
    logo: '/club_logo/Paris_Saint-Germain_Logo.svg',
    stadium: 'Parc des Princes',
    founded: 1970,
    colors: ['#004170', '#DA291C'],
    description: 'Paris Saint-Germain, France\'s most successful club in recent years, have dominated Ligue 1 and attracted world-class players like Messi, Neymar, and Mbappé.',
    featured: true,
    nicknames: ['PSG', 'Les Parisiens', 'Les Rouge-et-Bleu']
  },
  {
    id: 'marseille',
    name: 'Olympique Marseille',
    slug: 'marseille',
    league: 'Ligue 1',
    leagueSlug: 'ligue-1',
    country: 'France',
    countryCode: 'FR',
    logo: '/club_logo/Logo_Olympique_de_Marseille.svg.png',
    stadium: 'Stade Vélodrome',
    founded: 1899,
    colors: ['#2FAEE0', '#FFFFFF'],
    description: 'Olympique de Marseille, the only French club to win the Champions League (1993), are known for their passionate fanbase and fierce rivalry with PSG.',
    featured: true,
    nicknames: ['OM', 'Les Phocéens', 'Les Olympiens']
  },
  {
    id: 'lyon',
    name: 'Olympique Lyonnais',
    slug: 'lyon',
    league: 'Ligue 1',
    leagueSlug: 'ligue-1',
    country: 'France',
    countryCode: 'FR',
    logo: '/club_logo/lyon_logo.png',
    stadium: 'Groupama Stadium',
    founded: 1950,
    colors: ['#DA0812', '#1F3A66', '#FFFFFF'],
    description: 'Olympique Lyonnais dominated French football in the 2000s, winning 7 consecutive Ligue 1 titles from 2002 to 2008.',
    featured: false,
    nicknames: ['OL', 'Les Gones', 'Les Lyonnais']
  },
  {
    id: 'monaco',
    name: 'AS Monaco',
    slug: 'monaco',
    league: 'Ligue 1',
    leagueSlug: 'ligue-1',
    country: 'Monaco',
    countryCode: 'MC',
    logo: '/club_logo/monaco_logo.svg.png',
    stadium: 'Stade Louis II',
    founded: 1924,
    colors: ['#ED1C24', '#FFFFFF'],
    description: 'AS Monaco, based in the principality of Monaco, are famous for developing young talent and have produced stars like Mbappé, Henry, and Trezeguet.',
    featured: false,
    nicknames: ['Les Rouge et Blanc', 'Les Monégasques']
  },
];

// Helper functions
export const getClubBySlug = (slug: string): Club | undefined => {
  return clubs.find(club => club.slug === slug);
};

export const getClubsByLeague = (leagueSlug: string): Club[] => {
  return clubs.filter(club => club.leagueSlug === leagueSlug);
};

export const getFeaturedClubs = (): Club[] => {
  return clubs.filter(club => club.featured);
};

export const getAllClubs = (): Club[] => {
  return clubs.sort((a, b) => a.name.localeCompare(b.name));
};

export const searchClubs = (query: string): Club[] => {
  const lowercaseQuery = query.toLowerCase();
  return clubs.filter(club => 
    club.name.toLowerCase().includes(lowercaseQuery) ||
    club.nicknames?.some(nickname => nickname.toLowerCase().includes(lowercaseQuery))
  );
};

