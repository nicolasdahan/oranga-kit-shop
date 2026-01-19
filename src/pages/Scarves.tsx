import { useState, useMemo } from "react";
import { getAllProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Scarves = () => {
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">("newest");

  // Get all scarves
  const allScarves = useMemo(() => {
    return getAllProducts().filter(product => product.category === "scarves");
  }, []);

  // Sort scarves
  const sortedScarves = useMemo(() => {
    const scarves = [...allScarves];
    
    switch (sortBy) {
      case "price-asc":
        return scarves.sort((a, b) => a.price - b.price);
      case "price-desc":
        return scarves.sort((a, b) => b.price - a.price);
      case "newest":
      default:
        return scarves.sort((a, b) => 
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
    }
  }, [allScarves, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-primary hover:bg-white/90">
              {t('nav.accessories') || 'Accessories'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Football Scarves Collection
            </h1>
            <p className="text-xl text-white/90">
              Show your colors with our collection of official club and match scarves. 
              From classic designs to limited edition commemorative pieces.
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
                All Scarves
              </h2>
              <p className="text-muted-foreground mt-1">
                {sortedScarves.length} {sortedScarves.length === 1 ? 'scarf' : 'scarves'} available
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
          {sortedScarves.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedScarves.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No scarves found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Why Collect Football Scarves?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Football scarves are more than just accessories - they're symbols of loyalty, 
              passion, and unforgettable moments. Whether you're at the stadium, watching from home, 
              or simply showing your support, a scarf connects you to your club and fellow fans.
            </p>
            <p className="text-muted-foreground">
              Our collection includes official club scarves, limited edition match scarves, 
              and commemorative designs from historic fixtures. Each piece is crafted with 
              premium materials and authentic club details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scarves;

