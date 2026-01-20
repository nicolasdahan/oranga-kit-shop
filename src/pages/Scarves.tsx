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
              {t('scarves.title')}
            </h1>
            <p className="text-xl text-white/90">
              {t('scarves.description')}
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
                {t('scarves.allScarves')}
              </h2>
              <p className="text-muted-foreground mt-1">
                {sortedScarves.length} {sortedScarves.length === 1 ? t('scarves.scarf') : t('scarves.scarves')} {t('common.available')}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{t('common.sortBy')}</span>
              <div className="flex gap-2">
                <Button
                  variant={sortBy === "newest" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("newest")}
                >
                  {t('common.newest')}
                </Button>
                <Button
                  variant={sortBy === "price-asc" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("price-asc")}
                >
                  {t('common.priceLowToHigh')}
                </Button>
                <Button
                  variant={sortBy === "price-desc" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("price-desc")}
                >
                  {t('common.priceHighToLow')}
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
              <p className="text-lg text-muted-foreground">{t('scarves.noScarves')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('scarves.whyCollect')}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('scarves.symbolsLoyalty')} {t('scarves.connectsFans')}
            </p>
            <p className="text-muted-foreground">
              {t('scarves.collectionIncludes')} {t('scarves.premiumMaterials')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scarves;

