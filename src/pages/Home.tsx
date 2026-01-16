import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
        ></div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-orange">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl mb-8">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/catalog">{t('home.hero.shopNow')}</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                <Link to="/catalog?category=national-teams">{t('home.hero.nationalTeams')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">{t('home.newArrivals')}</h2>
            <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground">{t('home.new')}</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <div key={product.id} className="relative">
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground">{t('home.new')}</Badge>
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/catalog?filter=new">{t('home.viewAllNew')}</Link>
            </Button>
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

      {/* Customize Your Shirt Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Customize Your Shirt</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Already have a favorite football shirt? Send it to us and we'll print your chosen name set and patches on it!
            </p>
            <p className="text-muted-foreground">
              Simply ship your shirt to our workshop, tell us what customization you'd like (player name, number, league patches), and we'll professionally apply them before sending your shirt back to you. Perfect for personalizing jerseys you already own.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('home.featuredJerseys')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/catalog">{t('home.viewAllProducts')}</Link>
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