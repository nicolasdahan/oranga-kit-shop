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
            <Link 
              key={club.id} 
              to={`/clubs/${club.slug}`}
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              {club.logo ? (
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-white">
                  <img 
                    src={club.logo} 
                    alt={club.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${club.colors[0]} 0%, ${club.colors[1] || club.colors[0]} 100%)` 
                  }}
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg text-center px-2">
                  {club.name}
                </span>
              </div>
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

