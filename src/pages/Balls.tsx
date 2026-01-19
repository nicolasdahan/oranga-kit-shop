import { useState, useMemo } from "react";
import { getAllProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Balls = () => {
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">("newest");

  // Get all balls
  const allBalls = useMemo(() => {
    return getAllProducts().filter(product => product.category === "balls");
  }, []);

  // Sort balls
  const sortedBalls = useMemo(() => {
    const balls = [...allBalls];
    
    switch (sortBy) {
      case "price-asc":
        return balls.sort((a, b) => a.price - b.price);
      case "price-desc":
        return balls.sort((a, b) => b.price - a.price);
      case "newest":
      default:
        return balls.sort((a, b) => 
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
    }
  }, [allBalls, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-primary hover:bg-white/90">
              {t('nav.equipment') || 'Equipment'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Official Match Balls Collection
            </h1>
            <p className="text-xl text-white/90">
              Own a piece of football history with our collection of official match balls 
              from the world's greatest tournaments and competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Sort Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold">
                All Match Balls
              </h2>
              <p className="text-muted-foreground mt-1">
                {sortedBalls.length} {sortedBalls.length === 1 ? 'ball' : 'balls'} available
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <div className="flex gap-2">
                <Button
                  variant={sortBy === "newest" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("newest")}
                >
                  Newest
                </Button>
                <Button
                  variant={sortBy === "price-asc" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("price-asc")}
                >
                  Price: Low to High
                </Button>
                <Button
                  variant={sortBy === "price-desc" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("price-desc")}
                >
                  Price: High to Low
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {sortedBalls.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedBalls.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No balls found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Collect Football History
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Every great moment in football starts with the ball. Our collection features 
              official match balls from legendary tournaments - from World Cups and European 
              Championships to Champions League finals and beyond.
            </p>
            <p className="text-muted-foreground">
              These aren't just balls - they're replicas of the exact designs used in 
              historic matches. Perfect for collectors, display pieces, or even for playing 
              with the same quality the professionals use. Each ball comes with authentic 
              tournament branding and premium construction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balls;

