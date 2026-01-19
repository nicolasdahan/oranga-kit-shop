import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllClubs, getClubsByLeague } from "@/data/clubs";
import { getFeaturedLeagues } from "@/data/leagues";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const ClubsIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLeague, setSelectedLeague] = useState<string>("all");
  
  const allClubs = getAllClubs();
  const leagues = getFeaturedLeagues();

  // Filter clubs based on search and league
  const filteredClubs = useMemo(() => {
    let clubs = allClubs;

    // Filter by league
    if (selectedLeague !== "all") {
      clubs = getClubsByLeague(selectedLeague);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      clubs = clubs.filter(club =>
        club.name.toLowerCase().includes(query) ||
        club.nicknames?.some(nickname => nickname.toLowerCase().includes(query)) ||
        club.league.toLowerCase().includes(query) ||
        club.country.toLowerCase().includes(query)
      );
    }

    return clubs;
  }, [allClubs, selectedLeague, searchQuery]);

  const breadcrumbItems = [
    { label: 'Clubs' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Browse All Football Clubs
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore authentic football shirts from clubs around the world. Find your favorite team's home, away, and special edition kits.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search clubs by name, nickname, or league..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          {searchQuery && (
            <p className="text-sm text-muted-foreground mt-2">
              Found {filteredClubs.length} club{filteredClubs.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* League Tabs */}
        <Tabs value={selectedLeague} onValueChange={setSelectedLeague} className="mb-8">
          <TabsList className="flex-wrap h-auto">
            <TabsTrigger value="all">
              All Clubs ({allClubs.length})
            </TabsTrigger>
            {leagues.map(league => {
              const count = getClubsByLeague(league.slug).length;
              return (
                <TabsTrigger key={league.slug} value={league.slug}>
                  {league.name} ({count})
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* Clubs Grid */}
        {filteredClubs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredClubs.map(club => (
              <Link key={club.id} to={`/clubs/${club.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    {/* Club Logo Placeholder */}
                    <div 
                      className="w-full aspect-square rounded-lg mb-4 flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${club.colors[0]} 0%, ${club.colors[1] || club.colors[0]} 100%)` 
                      }}
                    >
                      {club.logo ? (
                        <img 
                          src={club.logo} 
                          alt={`${club.name} logo`} 
                          className="w-2/3 h-2/3 object-contain"
                        />
                      ) : (
                        <span className="text-4xl font-bold text-white">
                          {club.name.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {club.name}
                    </h3>
                    
                    {club.nicknames && club.nicknames.length > 0 && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {club.nicknames[0]}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {club.league}
                      </span>
                      {club.featured && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              No clubs found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLeague("all");
              }}
              className="text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubsIndex;



