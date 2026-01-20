import { useState, useMemo } from "react";
import { getAllProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Sparkles } from "lucide-react";

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
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        {/* Sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-white/30 animate-ping-slow" />
          <Sparkles className="absolute bottom-1/3 right-1/4 w-6 h-6 text-yellow-300/40 animate-ping-slower" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-0 text-base px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              {t('nav.equipment') || 'Equipment'}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="block">{t('balls.title')}</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                {t('balls.ballsCollection')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {t('balls.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span>{sortedBalls.length} {t('common.products')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span>{t('balls.collectorsItems')}</span>
              </div>
            </div>
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
                {t('balls.allMatchBalls')}
              </h2>
              <p className="text-muted-foreground mt-1">
                {sortedBalls.length} {sortedBalls.length === 1 ? t('balls.ball') : t('balls.balls')} {t('common.available')}
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

          {/* Products Grid with Animation */}
          {sortedBalls.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedBalls.map((product, index) => (
                <div 
                  key={product.id}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${(index % 8) * 50}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  
                  {/* Product Card with enhanced hover */}
                  <div className="relative transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02]">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">{t('balls.noBalls')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-10 w-40 h-40 bg-red-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce-slow" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
              {t('balls.collectHistory')}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('balls.everyMoment')} {t('balls.legendaryTournaments')}
            </p>
            <p className="text-gray-600">
              {t('balls.notJustBalls')} {t('balls.perfectFor')} {t('balls.authenticBranding')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balls;

