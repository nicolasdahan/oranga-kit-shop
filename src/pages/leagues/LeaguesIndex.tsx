import { Link } from "react-router-dom";
import { getAllLeagues } from "@/data/leagues";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LeaguesIndex = () => {
  const leagues = getAllLeagues();

  const breadcrumbItems = [
    { label: 'Leagues' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Browse Football Leagues
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore authentic football shirts from top leagues around the world. From the Premier League to Serie A, find your favorite teams.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Top Tier Leagues */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Leagues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leagues.filter(l => l.tier === 1).map(league => (
              <Link key={league.id} to={`/leagues/${league.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="space-y-4">
                    {league.logo && (
                      <div className="w-full h-32 flex items-center justify-center bg-secondary rounded-lg p-4">
                        <img 
                          src={league.logo} 
                          alt={`${league.name} logo`} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {league.name}
                        </CardTitle>
                        {league.featured && (
                          <Badge variant="secondary">Featured</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {league.country} • {league.numberOfTeams} Teams
                      </p>
                      {league.founded && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Founded in {league.founded}
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  {league.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {league.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Leagues */}
        {leagues.some(l => l.tier !== 1) && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Other Leagues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leagues.filter(l => l.tier !== 1).map(league => (
                <Link key={league.id} to={`/leagues/${league.slug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {league.name}
                        </CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {league.country} • {league.numberOfTeams} Teams
                      </p>
                    </CardHeader>
                    {league.description && (
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {league.description}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaguesIndex;



