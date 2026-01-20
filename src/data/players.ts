export type Player = {
  id: string;
  name: string;
  number: number;
  position: string;
  team: string; // team name must match Product.team
  image?: string; // optional player photo
  available: boolean; // whether this player option is currently available
};

export const players: Player[] = [
  // Paris Saint-Germain Players
  {
    id: 'psg-mbappe',
    name: 'MBAPPÉ',
    number: 7,
    position: 'Forward',
    team: 'Paris Saint-Germain',
    image: '/players/mbappe.jpg',
    available: false // Mbappé has left PSG
  },
  {
    id: 'psg-dembele',
    name: 'DEMBÉLÉ',
    number: 10,
    position: 'Forward',
    team: 'Paris Saint-Germain',
    available: true
  },
  {
    id: 'psg-marquinhos',
    name: 'MARQUINHOS',
    number: 5,
    position: 'Defender',
    team: 'Paris Saint-Germain',
    available: true
  },
  {
    id: 'psg-hakimi',
    name: 'HAKIMI',
    number: 2,
    position: 'Defender',
    team: 'Paris Saint-Germain',
    available: true
  },
  {
    id: 'psg-vitinha',
    name: 'VITINHA',
    number: 17,
    position: 'Midfielder',
    team: 'Paris Saint-Germain',
    available: true
  },
  {
    id: 'psg-donnarumma',
    name: 'DONNARUMMA',
    number: 99,
    position: 'Goalkeeper',
    team: 'Paris Saint-Germain',
    available: false
  },

  // Real Madrid Players
  {
    id: 'real-bellingham',
    name: 'BELLINGHAM',
    number: 5,
    position: 'Midfielder',
    team: 'Real Madrid',
    available: true
  },
  {
    id: 'real-vinicius',
    name: 'VINÍCIUS JR.',
    number: 7,
    position: 'Forward',
    team: 'Real Madrid',
    available: true
  },
  {
    id: 'real-rodrygo',
    name: 'RODRYGO',
    number: 11,
    position: 'Forward',
    team: 'Real Madrid',
    available: true
  },
  {
    id: 'real-modric',
    name: 'MODRIĆ',
    number: 10,
    position: 'Midfielder',
    team: 'Real Madrid',
    available: true
  },
  {
    id: 'real-courtois',
    name: 'COURTOIS',
    number: 1,
    position: 'Goalkeeper',
    team: 'Real Madrid',
    available: true
  },
  {
    id: 'real-mbappe',
    name: 'MBAPPÉ',
    number: 9,
    position: 'Forward',
    team: 'Real Madrid',
    available: true
  },

  // Barcelona Players
  {
    id: 'barca-lewandowski',
    name: 'LEWANDOWSKI',
    number: 9,
    position: 'Forward',
    team: 'Barcelona',
    available: true
  },
  {
    id: 'barca-pedri',
    name: 'PEDRI',
    number: 8,
    position: 'Midfielder',
    team: 'Barcelona',
    available: true
  },
  {
    id: 'barca-gavi',
    name: 'GAVI',
    number: 6,
    position: 'Midfielder',
    team: 'Barcelona',
    available: true
  },
  {
    id: 'barca-raphinha',
    name: 'RAPHINHA',
    number: 11,
    position: 'Forward',
    team: 'Barcelona',
    available: true
  },
  {
    id: 'barca-terstegen',
    name: 'TER STEGEN',
    number: 1,
    position: 'Goalkeeper',
    team: 'Barcelona',
    available: true
  },
  {
    id: 'barca-araujo',
    name: 'ARAÚJO',
    number: 4,
    position: 'Defender',
    team: 'Barcelona',
    available: true
  },

  // Arsenal Players
  {
    id: 'arsenal-saka',
    name: 'SAKA',
    number: 7,
    position: 'Forward',
    team: 'Arsenal',
    available: true
  },
  {
    id: 'arsenal-odegaard',
    name: 'ØDEGAARD',
    number: 8,
    position: 'Midfielder',
    team: 'Arsenal',
    available: true
  },
  {
    id: 'arsenal-rice',
    name: 'RICE',
    number: 41,
    position: 'Midfielder',
    team: 'Arsenal',
    available: true
  },
  {
    id: 'arsenal-saliba',
    name: 'SALIBA',
    number: 2,
    position: 'Defender',
    team: 'Arsenal',
    available: true
  },
  {
    id: 'arsenal-martinelli',
    name: 'MARTINELLI',
    number: 11,
    position: 'Forward',
    team: 'Arsenal',
    available: true
  },

  // Chelsea Players
  {
    id: 'chelsea-palmer',
    name: 'PALMER',
    number: 20,
    position: 'Forward',
    team: 'Chelsea',
    available: true
  },
  {
    id: 'chelsea-enzo',
    name: 'ENZO',
    number: 8,
    position: 'Midfielder',
    team: 'Chelsea',
    available: true
  },
  {
    id: 'chelsea-jackson',
    name: 'JACKSON',
    number: 15,
    position: 'Forward',
    team: 'Chelsea',
    available: true
  },
  {
    id: 'chelsea-james',
    name: 'JAMES',
    number: 24,
    position: 'Defender',
    team: 'Chelsea',
    available: true
  },

  // Manchester United Players
  {
    id: 'manutd-rashford',
    name: 'RASHFORD',
    number: 10,
    position: 'Forward',
    team: 'Manchester United',
    available: true
  },
  {
    id: 'manutd-fernandes',
    name: 'BRUNO FERNANDES',
    number: 8,
    position: 'Midfielder',
    team: 'Manchester United',
    available: true
  },
  {
    id: 'manutd-garnacho',
    name: 'GARNACHO',
    number: 17,
    position: 'Forward',
    team: 'Manchester United',
    available: true
  },
  {
    id: 'manutd-onana',
    name: 'ONANA',
    number: 24,
    position: 'Goalkeeper',
    team: 'Manchester United',
    available: true
  },

  // Liverpool Players
  {
    id: 'liverpool-salah',
    name: 'SALAH',
    number: 11,
    position: 'Forward',
    team: 'Liverpool',
    available: true
  },
  {
    id: 'liverpool-vvd',
    name: 'VAN DIJK',
    number: 4,
    position: 'Defender',
    team: 'Liverpool',
    available: true
  },
  {
    id: 'liverpool-taa',
    name: 'ALEXANDER-ARNOLD',
    number: 66,
    position: 'Defender',
    team: 'Liverpool',
    available: true
  },
  {
    id: 'liverpool-nunez',
    name: 'NÚÑEZ',
    number: 9,
    position: 'Forward',
    team: 'Liverpool',
    available: true
  },

  // Manchester City Players
  {
    id: 'mancity-haaland',
    name: 'HAALAND',
    number: 9,
    position: 'Forward',
    team: 'Manchester City',
    available: true
  },
  {
    id: 'mancity-debruyne',
    name: 'DE BRUYNE',
    number: 17,
    position: 'Midfielder',
    team: 'Manchester City',
    available: true
  },
  {
    id: 'mancity-foden',
    name: 'FODEN',
    number: 47,
    position: 'Midfielder',
    team: 'Manchester City',
    available: true
  },

  // Tottenham Players
  {
    id: 'tottenham-son',
    name: 'SON',
    number: 7,
    position: 'Forward',
    team: 'Tottenham',
    available: true
  },
  {
    id: 'tottenham-maddison',
    name: 'MADDISON',
    number: 10,
    position: 'Midfielder',
    team: 'Tottenham',
    available: true
  },

  // Inter Milan Players
  {
    id: 'inter-lautaro',
    name: 'LAUTARO',
    number: 10,
    position: 'Forward',
    team: 'Inter Milan',
    available: true
  },
  {
    id: 'inter-barella',
    name: 'BARELLA',
    number: 23,
    position: 'Midfielder',
    team: 'Inter Milan',
    available: true
  },
  {
    id: 'inter-calhanoglu',
    name: 'ÇALHANOĞLU',
    number: 20,
    position: 'Midfielder',
    team: 'Inter Milan',
    available: true
  },

  // Juventus Players
  {
    id: 'juve-vlahovic',
    name: 'VLAHOVIĆ',
    number: 9,
    position: 'Forward',
    team: 'Juventus',
    available: true
  },
  {
    id: 'juve-chiesa',
    name: 'CHIESA',
    number: 7,
    position: 'Forward',
    team: 'Juventus',
    available: true
  },

  // Olympique Marseille Players
  {
    id: 'marseille-aubameyang',
    name: 'AUBAMEYANG',
    number: 10,
    position: 'Forward',
    team: 'Olympique Marseille',
    available: true
  },
  {
    id: 'marseille-greenwood',
    name: 'GREENWOOD',
    number: 11,
    position: 'Forward',
    team: 'Olympique Marseille',
    available: true
  },

  // Borussia Dortmund Players
  {
    id: 'dortmund-adeyemi',
    name: 'ADEYEMI',
    number: 27,
    position: 'Forward',
    team: 'Borussia Dortmund',
    available: true
  },
  {
    id: 'dortmund-brandt',
    name: 'BRANDT',
    number: 19,
    position: 'Midfielder',
    team: 'Borussia Dortmund',
    available: true
  },

  // France National Team
  {
    id: 'france-mbappe',
    name: 'MBAPPÉ',
    number: 10,
    position: 'Forward',
    team: 'France',
    available: true
  },
  {
    id: 'france-griezmann',
    name: 'GRIEZMANN',
    number: 7,
    position: 'Forward',
    team: 'France',
    available: true
  },
  {
    id: 'france-kante',
    name: 'KANTÉ',
    number: 13,
    position: 'Midfielder',
    team: 'France',
    available: true
  },
];

// Helper functions
export const getPlayersByTeam = (teamName: string): Player[] => {
  return players.filter(player => 
    player.team === teamName && player.available
  ).sort((a, b) => a.number - b.number);
};

export const getPlayerById = (id: string): Player | undefined => {
  return players.find(player => player.id === id);
};

export const hasAvailablePlayers = (teamName: string): boolean => {
  return players.some(player => player.team === teamName && player.available);
};

