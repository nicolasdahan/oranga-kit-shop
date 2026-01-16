import { useParams, Link } from "react-router-dom";
import { getLeagueBySlug } from "@/data/leagues";
import { getClubsByLeague } from "@/data/clubs";
import { getAllProducts } from "@/data/products";
import { useMemo } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LeaguePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const league = getLeagueBySlug(slug || '');
  const clubs = league ? getClubsByLeague(league.slug) : [];
  const allProducts = getAllProducts();

  // Get all products from clubs in this league
  const leagueProducts = useMemo(() => {
    if (!league) return [];
    
    const clubNames = clubs.map(c => c.name.toLowerCase());
    return allProducts.filter(product => 
      clubNames.some(clubName => 
        product.team.toLowerCase().includes(clubName) ||
        clubName.includes(product.team.toLowerCase())
      )
    );
  }, [league, clubs, allProducts]);

  if (!league) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">League Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the league you're looking for.
          </p>
          <Link 
            to="/leagues" 
            className="text-primary hover:underline"
          >
            Browse All Leagues
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Leagues', href: '/leagues' },
    { label: league.name }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="mt-8 flex items-center gap-6">
            {league.logo && (
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg p-4 flex items-center justify-center">
                <img src={league.logo} alt={`${league.name} logo`} className="w-full h-full object-contain" />
              </div>
            )}
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{league.name}</h1>
              <p className="text-xl text-white/90 mb-2">
                {league.country} • {league.numberOfTeams} Teams
              </p>
              {league.founded && (
                <p className="text-white/80">Founded in {league.founded}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* League Description */}
      {league.description && (
        <div className="bg-card py-8">
          <div className="container mx-auto px-4">
            <p className="text-lg text-muted-foreground max-w-4xl">
              {league.description}
            </p>
          </div>
        </div>
      )}

      {/* Clubs Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {league.name} Clubs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clubs.map(club => (
              <Link key={club.id} to={`/clubs/${club.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4">
                    <div 
                      className="w-full aspect-square rounded-lg mb-3 flex items-center justify-center"
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
                        <span className="text-2xl font-bold text-white">
                          {club.name.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm text-center group-hover:text-primary transition-colors line-clamp-2">
                      {club.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                All {league.name} Shirts
              </h2>
              <p className="text-muted-foreground">
                {leagueProducts.length} product{leagueProducts.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <Link 
              to={`/catalog?league=${league.slug}`}
              className="text-primary hover:underline"
            >
              View All →
            </Link>
          </div>

          {leagueProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {leagueProducts.slice(0, 12).map(product => (
                <div key={product.id} className="relative">
                  {product.featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-primary">Featured</Badge>
                    </div>
                  )}
                  {product.format === 'Player Issue' && (
                    <div className="absolute top-3 left-3 z-10">
                      <Badge variant="secondary">Player Issue</Badge>
                    </div>
                  )}
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-secondary rounded-lg">
              <p className="text-muted-foreground text-lg">
                No products available from {league.name} clubs at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaguePage;

