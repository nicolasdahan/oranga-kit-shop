import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-500"
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
          <div className="max-w-2xl">
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl mb-8 text-orange-400">
              {t('home.hero.subtitle')}
            </p> */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                <Link to="/catalog">{t('home.hero.shopNow')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Club Section */}
      <ShopByClub />

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
              <Link to="/new-arrivals">{t('home.viewAllNew')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Product Categories Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">More Than Just Shirts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link 
              to="/scarves" 
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                <img 
                  src="/scarf/scarf-psg-inter-2025.jpg" 
                  alt="Football Scarves" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">Scarves</h3>
                  <p className="text-lg text-center">Official club & match scarves</p>
                  <Button className="mt-4 bg-white text-blue-600 hover:bg-white/90">
                    Shop Now
                  </Button>
                </div>
              </div>
            </Link>

            <Link 
              to="/balls" 
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600"></div>
                <img 
                  src="/ball/euro-2008-silver.jpg" 
                  alt="Match Balls" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">Match Balls</h3>
                  <p className="text-lg text-center">Official tournament balls</p>
                  <Button className="mt-4 bg-white text-red-600 hover:bg-white/90">
                    Shop Now
                  </Button>
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