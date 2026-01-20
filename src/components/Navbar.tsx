
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import CurrencySelector from "./CurrencySelector";
import UserMenu from "./UserMenu";
import SocialButtons from "./SocialButtons";
import ShirtsMegaMenu from "./ShirtsMegaMenu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartCount } = useCart();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/95 backdrop-blur-lg shadow-2xl shadow-primary/20' 
        : 'bg-primary'
    }`}>
      <div className="container flex items-center justify-between h-20 mx-auto px-4">
        {/* Logo - Enhanced */}
        <Link to="/" className="flex items-center group relative z-50">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <h1 className="text-2xl md:text-3xl font-display font-black relative">
              <span className="text-white group-hover:text-white/90 transition-all duration-300 drop-shadow-lg">
                KitUp 
              </span>
              <span className="text-white/70 group-hover:text-white/60 transition-all duration-300">.com</span>
              
              {/* Sparkle effect on hover */}
              <Sparkles className="absolute -top-1 -right-6 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity" />
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation - Enhanced */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link 
            to="/new-arrivals" 
            className="relative px-4 py-2 text-sm font-semibold text-white hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 group-hover:animate-spin-slow" />
              {t('nav.newArrivals')}
            </span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></div>
          </Link>

          <ShirtsMegaMenu />

          <Link 
            to="/scarves" 
            className="relative px-4 py-2 text-sm font-semibold text-white hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">{t('nav.scarves')}</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></div>
          </Link>

          <Link 
            to="/balls" 
            className="relative px-4 py-2 text-sm font-semibold text-white hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">{t('nav.balls')}</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></div>
          </Link>

          <Link 
            to="/bags" 
            className="relative px-4 py-2 text-sm font-semibold text-white hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">{t('nav.bags')}</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></div>
          </Link>

          <Link 
            to="/catalog?filter=sale" 
            className="relative px-4 py-2 text-sm font-semibold text-white hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">{t('nav.promotion')}</span>
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-[10px] text-gray-900 px-2 py-0.5 rounded-full font-black group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse-slow">
              -20%
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 rounded-lg transition-all duration-300"></div>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search - Enhanced */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative group">
            <Input
              type="search"
              placeholder={t('nav.searchPlaceholder')}
              className="w-[200px] lg:w-[250px] focus-visible:ring-2 focus-visible:ring-white pr-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 focus-visible:bg-white focus-visible:border-white text-white placeholder:text-white/70 focus-visible:text-primary transition-all duration-300 focus-visible:w-[280px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="sm" 
              variant="ghost" 
              className="absolute right-1 hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <Search className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </form>

          {/* Utility buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <SocialButtons />
            <div className="h-5 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <CurrencySelector />
            </div>
            <div className="h-5 w-px bg-white/20" />
            <UserMenu />
          </div>

          {/* Cart - Enhanced */}
          <Link 
            to="/cart" 
            className="relative group p-2 hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-black rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg animate-pulse-slow">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 pb-6 space-y-2">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative mb-4">
            <Input
              type="search"
              placeholder={t('nav.searchPlaceholder')}
              className="w-full pr-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white placeholder:text-white/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="sm" 
              variant="ghost" 
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Search className="h-4 w-4 text-white" />
            </Button>
          </form>

          {/* Mobile Nav Links */}
          <Link 
            to="/new-arrivals" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            <Sparkles className="w-4 h-4" />
            {t('nav.newArrivals')}
          </Link>
          <Link 
            to="/catalog" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {t('nav.shirts')}
          </Link>
          <Link 
            to="/scarves" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {t('nav.scarves')}
          </Link>
          <Link 
            to="/balls" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {t('nav.balls')}
          </Link>
          <Link 
            to="/bags" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {t('nav.bags')}
          </Link>
          <Link 
            to="/catalog?filter=sale" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            <span>{t('nav.promotion')}</span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs px-2 py-1 rounded-full font-black">
              -20%
            </span>
          </Link>

          {/* Mobile Utility Links */}
          <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-center gap-4">
            <LanguageSelector />
            <CurrencySelector />
            <SocialButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
