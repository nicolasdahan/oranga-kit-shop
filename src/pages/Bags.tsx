import { useState, useMemo } from "react";
import { getAllProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Sparkles } from "lucide-react";

const Bags = () => {
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">("newest");

  // Get all bags
  const allBags = useMemo(() => {
    return getAllProducts().filter(product => product.category === "bags");
  }, []);

  // Sort bags
  const sortedBags = useMemo(() => {
    const bags = [...allBags];
    
    switch (sortBy) {
      case "price-asc":
        return bags.sort((a, b) => a.price - b.price);
      case "price-desc":
        return bags.sort((a, b) => b.price - a.price);
      case "newest":
      default:
        return bags.sort((a, b) => 
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
    }
  }, [allBags, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        {/* Sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-white/30 animate-ping-slow" />
          <Sparkles className="absolute bottom-1/3 right-1/4 w-6 h-6 text-cyan-300/40 animate-ping-slower" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-0 text-base px-6 py-2">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Accessories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="block">Football Bags &</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Accessories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Premium bags, waistpacks, and crossbody bags from top brands. 
              Carry your gear in style.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <ShoppingBag className="w-4 h-4" />
                <span>{sortedBags.length} Products</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span>Premium Brands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Sort Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold">
                All Bags & Accessories
              </h2>
              <p className="text-muted-foreground mt-1">
                {sortedBags.length} {sortedBags.length === 1 ? 'product' : 'products'} available
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

          {/* Products Grid with Animation */}
          {sortedBags.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedBags.map((product, index) => (
                <div 
                  key={product.id}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${(index % 8) * 50}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  
                  {/* Product Card with enhanced hover */}
                  <div className="relative transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02]">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No bags found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce-slow" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Gear Up in Style
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our collection features premium bags and accessories from Nike, Adidas, The North Face, 
              and Under Armour. Whether you need a compact waistpack for match day, a crossbody bag 
              for daily essentials, or a spacious tote for training gear, we've got you covered.
            </p>
            <p className="text-gray-600">
              Each bag combines functionality with style, featuring durable materials, smart organization, 
              and iconic brand designs. Perfect for athletes, fans, and anyone who values quality accessories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bags;

