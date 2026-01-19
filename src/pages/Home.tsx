import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, Sparkles, TrendingUp, Award, ShoppingBag, Shield, Zap } from "lucide-react";
import ShopByClub from "@/components/home/ShopByClub";

const Home = () => {
  const { t } = useLanguage();
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  // Hero images array
  const heroImages = [
    "/hero-banner.jpg",
    "/Puma-National-Team-Banner-3300x1500.jpg",
    "/total-90-wallpaper.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div>
      {/* Enhanced Hero Section with Dynamic Elements */}
      <section className="relative h-[700px] md:h-[800px] flex items-center overflow-hidden">
        {/* Animated background with Ken Burns effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 animate-ken-burns"
          style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
        ></div>
        
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/40 to-purple-900/50 z-10"></div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        {/* Sparkle effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-white/30 animate-ping-slow" />
          <Sparkles className="absolute top-1/3 right-1/3 w-6 h-6 text-yellow-300/40 animate-ping-slower" />
          <Sparkles className="absolute bottom-1/4 left-1/2 w-7 h-7 text-orange-300/30 animate-ping-delayed" />
        </div>
        
        {/* Navigation Arrows - Enhanced */}
        <button
          onClick={prevImage}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicators - Enhanced */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-12 shadow-lg shadow-white/50"
                  : "bg-white/40 w-2 hover:bg-white/70 hover:w-8"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content - Dramatically Enhanced */}
        <div className={`container mx-auto px-4 relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl">
            {/* Animated badge */}
            <div className="inline-block mb-6 animate-bounce-slow">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white border-0 text-sm md:text-base px-4 md:px-6 py-2 shadow-2xl shadow-orange-500/50">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Premium Football Gear
              </Badge>
            </div>

            {/* Main headline with gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fade-in-up">
              <span className="block text-white drop-shadow-2xl">Wear Your</span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up animation-delay-100">
                Passion
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200 drop-shadow-lg">
              Authentic football shirts from the world's greatest clubs and nations. 
              <span className="block mt-2 text-orange-300 font-semibold">Premium quality. Worldwide shipping.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-300">
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-10 py-7 shadow-2xl shadow-orange-500/50 hover:shadow-orange-600/60 hover:scale-105 transition-all duration-300"
              >
                <Link to="/catalog">
                  <ShoppingBag className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  {t('home.hero.shopNow')}
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/30 hover:border-white/50 text-lg px-10 py-7 hover:scale-105 transition-all duration-300"
              >
                <Link to="/new-arrivals">
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-spin-slow" />
                  New Arrivals
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm border border-white/20">
                <Shield className="w-4 h-4 text-green-400" />
                <span>100% Authentic</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm border border-white/20">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>1000+ Products</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm border border-white/20">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Top Brands</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
            <span className="text-sm font-medium hidden md:block">Explore Collection</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Shop by Club Section */}
      <ShopByClub />

      {/* New Arrivals Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 animate-pulse-slow">
                <Sparkles className="w-3 h-3 mr-1" />
                {t('home.new')}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('home.newArrivals')}
              </h2>
              <p className="text-lg text-gray-600 mt-2">Fresh drops from the world's top brands</p>
            </div>
            <Button 
              asChild 
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/new-arrivals">
                {t('home.viewAllNew')}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Products Grid with Staggered Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => (
              <div 
                key={product.id} 
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                
                {/* NEW badge */}
                <div className="absolute top-3 right-3 z-20">
                  <Badge className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white border-0 shadow-lg animate-pulse-slow">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {t('home.new')}
                  </Badge>
                </div>
                
                {/* Product Card with hover effect */}
                <div className="relative transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              More Than Just <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Shirts</span>
            </h2>
            <p className="text-xl text-gray-300">Complete your football collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Link 
              to="/scarves" 
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900"></div>
                <img 
                  src="/scarf/scarf-psg-inter-2025.jpg" 
                  alt="Football Scarves" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-full p-4 mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-12 h-12 text-blue-300" />
                  </div>
                  <h3 className="text-4xl font-black mb-3 drop-shadow-2xl">Scarves</h3>
                  <p className="text-lg text-center mb-6 text-blue-100">Official club & match scarves</p>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all">
                    Explore Collection
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Corner badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500/80 backdrop-blur-sm text-white border-0">
                    6 Products
                  </Badge>
                </div>
              </div>
            </Link>

            <Link 
              to="/balls" 
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600"></div>
                <img 
                  src="/ball/euro-2008-silver.jpg" 
                  alt="Match Balls" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-full p-4 mb-4 group-hover:scale-110 transition-transform group-hover:rotate-12">
                    <Award className="w-12 h-12 text-orange-300" />
                  </div>
                  <h3 className="text-4xl font-black mb-3 drop-shadow-2xl">Match Balls</h3>
                  <p className="text-lg text-center mb-6 text-orange-100">Official tournament balls</p>
                  <Button className="bg-white text-red-600 hover:bg-red-50 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all">
                    Explore Collection
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Corner badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500/80 backdrop-blur-sm text-white border-0">
                    2 Products
                  </Badge>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.shopByLeague')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link 
              to="/catalog?category=national-teams" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/league-logo/2026_FIFA_World_Cup_emblem.svg.png" alt="National Teams" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">{t('category.nationalTeams')}</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=premier-league" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/league-logo/premier-league-logo.jpg" alt="Premier League" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">{t('category.premierLeague')}</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=la-liga" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/league-logo/LaLiga_logo_2023.svg.png" alt="La Liga" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">{t('category.laLiga')}</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=serie-a" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/league-logo/Serie_A.svg.png" alt="Serie A" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">{t('category.serieA')}</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=bundesliga" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/league-logo/Bundesliga-logo.svg.png" alt="Bundesliga" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">{t('category.bundesliga')}</span>
              </div>
            </Link>
            
            <Link 
              to="/catalog?category=ligue-1" 
              className="block aspect-square relative rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src="/league-logo/ligue-1-logo.webp" alt="Ligue 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-lg">{t('category.ligue1')}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Football Passion Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wear Your Passion. Live Your Game.
            </h2>
            <p className="text-xl font-semibold text-primary mb-6">
              "More Than Just a Shirt - It's Your Identity"
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              A football shirt isn't just fabric and colors. It's the roar of the stadium, the joy of victory, the pride of your club. 
              Whether you're at the match, on the street, or with friends, wearing your team's colors connects you to millions of fans worldwide.
            </p>
            <p className="text-muted-foreground">
              From vintage classics that tell legendary stories to modern masterpieces worn by today's heroes, each shirt carries the spirit of the beautiful game. 
              Express your loyalty, celebrate your heritage, and show the world which side you're on. Because football is more than a sport – it's a way of life.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products - Enhanced */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-50 to-transparent rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
              <Award className="w-3 h-3 mr-1" />
              Premium Selection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {t('home.featuredJerseys')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked selections from the world's most iconic clubs
            </p>
          </div>

          {/* Products Grid with Enhanced Hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Featured badge */}
                <div className="absolute top-3 left-3 z-20">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                    <Award className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>

                {/* Subtle glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                {/* Card */}
                <div className="relative transition-all duration-500 group-hover:-translate-y-2">
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button 
              asChild 
              size="lg"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-12 py-7 text-lg"
            >
              <Link to="/catalog">
                {t('home.viewAllProducts')}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.newsletter.title')}</h2>
          <p className="max-w-2xl mx-auto mb-8">
            {t('home.newsletter.subtitle')}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder={t('home.newsletter.placeholder')}
              className="flex-grow px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t('home.newsletter.subscribe')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;