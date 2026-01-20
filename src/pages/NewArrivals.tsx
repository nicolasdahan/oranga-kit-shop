import { useState, useMemo, useEffect, useRef } from "react";
import { getNewArrivals, getAllProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, TrendingUp, Clock, SlidersHorizontal, Zap, Star, Flame, Award } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const NewArrivals = () => {
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">("newest");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse parallax effect for hero
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Get all new arrivals (products from last 90 days or marked as featured/new)
  const allNewProducts = useMemo(() => {
    const allProds = getAllProducts();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 90); // Last 90 days

    return allProds.filter(product => {
      const productDate = new Date(product.dateAdded);
      return productDate >= cutoffDate || product.featured;
    });
  }, []);

  // Apply filters
  const filteredProducts = useMemo(() => {
    let filtered = [...allNewProducts];

    if (categoryFilter !== "all") {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    if (brandFilter !== "all") {
      filtered = filtered.filter(p => p.brand === brandFilter);
    }

    return filtered;
  }, [allNewProducts, categoryFilter, brandFilter]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];
    
    switch (sortBy) {
      case "price-asc":
        return products.sort((a, b) => a.price - b.price);
      case "price-desc":
        return products.sort((a, b) => b.price - a.price);
      case "newest":
      default:
        return products.sort((a, b) => 
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
    }
  }, [filteredProducts, sortBy]);

  // Get unique categories and brands
  const categories = useMemo(() => {
    const cats = new Set(allNewProducts.map(p => p.category));
    return Array.from(cats);
  }, [allNewProducts]);

  const brands = useMemo(() => {
    const brds = new Set(allNewProducts.map(p => p.brand));
    return Array.from(brds);
  }, [allNewProducts]);

  const clearFilters = () => {
    setCategoryFilter("all");
    setBrandFilter("all");
    setSortBy("newest");
  };

  const hasActiveFilters = categoryFilter !== "all" || brandFilter !== "all";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Dynamic & Animated */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white py-24 md:py-32 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(147, 51, 234, 0.4) 0%, transparent 50%), linear-gradient(135deg, hsl(200, 100%, 60%) 0%, hsl(217, 91%, 60%) 50%, hsl(271, 91%, 65%) 100%)`
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating orbs with animations */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Sparkle effects */}
          <div className="absolute top-1/4 left-1/3 animate-ping-slow">
            <Sparkles className="w-6 h-6 text-white/40" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-ping-slower">
            <Star className="w-8 h-8 text-yellow-300/30" />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-ping-delayed">
            <Zap className="w-5 h-5 text-orange-300/40" />
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated badge */}
            <div className="inline-block mb-6 animate-bounce-slow">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-white border-0 text-base px-6 py-2 shadow-2xl shadow-orange-500/50">
                <Flame className="w-4 h-4 mr-2 animate-pulse" />
                {t('home.new') || 'HOT & NEW'}
              </Badge>
            </div>
            
            {/* Main title with gradient text */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">{t('newArrivals.title').split(' ')[0]}</span>{' '}
              <span className="inline-block animate-fade-in-up animation-delay-100 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                {t('newArrivals.title').split(' ')[1]}
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-white/90 font-bold animate-fade-in-up animation-delay-200">
                {t('newArrivals.subtitle')}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              {t('newArrivals.description')}
            </p>

            {/* Stats with icons - More dynamic */}
            <div className="flex flex-wrap gap-4 justify-center text-sm mb-8 animate-fade-in-up animation-delay-400">
              <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default shadow-lg">
                <div className="relative">
                  <Clock className="w-5 h-5 group-hover:animate-spin" />
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-md group-hover:bg-white/50 transition-all"></div>
                </div>
                <span className="font-semibold">{sortedProducts.length} {t('common.new')} {t('common.products')}</span>
              </div>
              <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default shadow-lg">
                <div className="relative">
                  <TrendingUp className="w-5 h-5 group-hover:animate-bounce" />
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-md group-hover:bg-white/50 transition-all"></div>
                </div>
                <span className="font-semibold">{t('common.updatedDaily')}</span>
              </div>
              <div className="group flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md px-5 py-3 rounded-full border border-yellow-400/30 hover:from-yellow-500/30 hover:to-orange-500/30 hover:scale-105 transition-all duration-300 cursor-default shadow-lg">
                <div className="relative">
                  <Award className="w-5 h-5 text-yellow-300 group-hover:rotate-12 transition-transform" />
                  <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-md group-hover:bg-yellow-300/50 transition-all"></div>
                </div>
                <span className="font-semibold text-yellow-100">{t('common.premiumQuality')}</span>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce-slow mt-12">
              <div className="inline-flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
                <span className="text-sm font-medium">{t('common.scrollToExplore')}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Animated wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 fill-current text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="animate-wave"></path>
          </svg>
        </div>
      </section>

      {/* Filters and Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Left side - Filters */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap w-full lg:w-auto">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden w-full sm:w-auto">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      {t('common.filters')}
                      {hasActiveFilters && (
                        <Badge className="ml-2 bg-primary text-white">{t('common.active')}</Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>{t('common.filters')}</SheetTitle>
                      <SheetDescription>
                        {t('common.refineSearch')}
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      {/* Category Filter */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t('common.category')}</label>
                        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">{t('common.allCategories')}</SelectItem>
                            {categories.map(cat => (
                              <SelectItem key={cat} value={cat}>
                                {cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Brand Filter */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t('common.brand')}</label>
                        <Select value={brandFilter} onValueChange={setBrandFilter}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">{t('common.allBrands')}</SelectItem>
                            {brands.map(brand => (
                              <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Separator />

                      {hasActiveFilters && (
                        <Button 
                          variant="outline" 
                          onClick={clearFilters}
                          className="w-full"
                        >
                          {t('common.clearAllFilters')}
                        </Button>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Desktop Filters */}
                <div className="hidden lg:flex gap-4 items-center">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={t('common.category')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('common.allCategories')}</SelectItem>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>
                          {cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={brandFilter} onValueChange={setBrandFilter}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder={t('common.brand')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('common.allBrands')}</SelectItem>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {hasActiveFilters && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={clearFilters}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {t('common.clearFilters')}
                    </Button>
                  )}
                </div>
              </div>

              {/* Right side - Sort and Count */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{sortedProducts.length}</span> {sortedProducts.length === 1 ? t('common.product') : t('common.products')}
                </div>

                <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder={t('common.sortBy')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">{t('common.newestFirst')}</SelectItem>
                    <SelectItem value="price-asc">{t('common.priceLowToHigh')}</SelectItem>
                    <SelectItem value="price-desc">{t('common.priceHighToLow')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Products Grid - Staggered Animation */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${(index % 8) * 50}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  
                  {/* New Badge - More dynamic */}
                  <div className="absolute top-3 right-3 z-20">
                    <Badge className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white border-0 shadow-lg shadow-orange-500/50 animate-pulse-slow">
                      <Sparkles className="w-3 h-3 mr-1 animate-spin-slow" />
                      NEW
                    </Badge>
                  </div>
                  
                  {/* Product Card with enhanced hover */}
                  <div className="relative transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02]">
                    <ProductCard product={product} />
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                    </div>
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-float-particle"></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-float-particle animation-delay-200"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float-particle animation-delay-400"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more results
                </p>
                {hasActiveFilters && (
                  <Button onClick={clearFilters}>
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Banner - More Dynamic */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                  <TrendingUp className="w-16 h-16 relative text-primary animate-bounce-slow" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t('newArrivals.firstToKnow')}
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  {t('newArrivals.dailyUpdates')} {t('newArrivals.latestKits')} {t('newArrivals.limitedEditions')}
                </p>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full">
                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 hover:from-blue-200 hover:to-blue-100 transition-all duration-300 hover:scale-105 cursor-default">
                    <Zap className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:animate-bounce" />
                    <h3 className="font-bold text-lg mb-2 text-blue-900">{t('newArrivals.lightningFast')}</h3>
                    <p className="text-sm text-blue-700">{t('newArrivals.addedHours')}</p>
                  </div>
                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 hover:from-purple-200 hover:to-purple-100 transition-all duration-300 hover:scale-105 cursor-default">
                    <Award className="w-8 h-8 text-purple-600 mb-3 mx-auto group-hover:rotate-12 transition-transform" />
                    <h3 className="font-bold text-lg mb-2 text-purple-900">{t('newArrivals.premiumQuality')}</h3>
                    <p className="text-sm text-purple-700">{t('newArrivals.onlyAuthentic')}</p>
                  </div>
                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 hover:from-pink-200 hover:to-pink-100 transition-all duration-300 hover:scale-105 cursor-default">
                    <Star className="w-8 h-8 text-pink-600 mb-3 mx-auto group-hover:animate-spin-slow" />
                    <h3 className="font-bold text-lg mb-2 text-pink-900">{t('newArrivals.exclusiveAccess')}</h3>
                    <p className="text-sm text-pink-700">{t('newArrivals.limitedEditionsExclusive')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;

