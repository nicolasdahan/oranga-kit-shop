import { Link } from "react-router-dom";
import { getFeaturedClubs } from "@/data/clubs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ShopByClub = () => {
  const featuredClubs = getFeaturedClubs();

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Club
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse authentic football shirts from your favorite clubs. Click on any club to see their complete collection.
          </p>
        </div>

        {/* Featured Clubs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
          {featuredClubs.map(club => (
            <Link key={club.id} to={`/clubs/${club.slug}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <CardContent className="p-4">
                  <div 
                    className="w-full aspect-square rounded-lg mb-3 flex items-center justify-center shadow-md"
                    style={{ 
                      background: `linear-gradient(135deg, ${club.colors[0]} 0%, ${club.colors[1] || club.colors[0]} 100%)` 
                    }}
                  >
                    {club.logo ? (
                      <img 
                        src={club.logo} 
                        alt={`${club.name} logo`} 
                        className="w-2/3 h-2/3 object-contain drop-shadow-lg"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-white drop-shadow-lg">
                        {club.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-center group-hover:text-primary transition-colors line-clamp-2">
                    {club.name}
                  </h3>
                  {club.nicknames && club.nicknames[0] && (
                    <p className="text-xs text-muted-foreground text-center mt-1 line-clamp-1">
                      {club.nicknames[0]}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/clubs">
              View All Clubs →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopByClub;

