
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import CurrencySelector from "./CurrencySelector";
import UserMenu from "./UserMenu";
import SocialButtons from "./SocialButtons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartCount } = useCart();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-primary">
      <div className="container flex items-center justify-between h-20 mx-auto px-4">
        <Link to="/" className="flex items-center group">
          <h1 className="text-2xl font-display font-bold">
            <span className="text-white group-hover:text-white/90 transition-all duration-300">
              KitUp 
            </span>
            <span className="text-white/70 group-hover:text-white/60 transition-all duration-300">.com</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/catalog?filter=new" className="text-sm font-medium text-white hover:text-white/80 transition-all duration-300 hover-lift">
            {t('nav.newArrivals')}
          </Link>
          <Link to="/catalog?category=clubs" className="text-sm font-medium text-white hover:text-white/80 transition-all duration-300 hover-lift">
            {t('nav.clubs')}
          </Link>
          <Link to="/catalog?category=national-teams" className="text-sm font-medium text-white hover:text-white/80 transition-all duration-300 hover-lift">
            {t('nav.nationalTeams')}
          </Link>
          <Link to="/scarves" className="text-sm font-medium text-white hover:text-white/80 transition-all duration-300 hover-lift">
            {t('nav.scarves')}
          </Link>
          <Link to="/balls" className="text-sm font-medium text-white hover:text-white/80 transition-all duration-300 hover-lift">
            {t('nav.balls')}
          </Link>
          <Link to="/catalog?filter=sale" className="text-sm font-medium text-white hover:text-white/80 transition-all duration-300 hover-lift relative group">
            <span className="absolute -top-2 -right-6 bg-white text-[10px] text-primary px-1.5 py-0.5 rounded-full font-bold group-hover:scale-110 transition-transform duration-300">
              -20%
            </span>
            {t('nav.promotion')}
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative group">
            <Input
              type="search"
              placeholder={t('nav.searchPlaceholder')}
              className="w-[250px] focus-visible:ring-white pr-10 rounded-full bg-white/20 border-0 focus-visible:bg-white text-white placeholder:text-white/70 focus-visible:text-primary transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="sm" 
              variant="ghost" 
              className="absolute right-0 hover:bg-transparent"
            >
              <Search className="h-4 w-4 text-white group-hover:text-white/80 transition-colors duration-300" />
            </Button>
          </form>

          <div className="flex items-center gap-4">
            <SocialButtons />
            <div className="h-5 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <CurrencySelector />
            </div>
            <div className="h-5 w-px bg-white/20" />
            <UserMenu />
          </div>

          <Link to="/cart" className="relative group hover-lift">
            <ShoppingCart className="h-5 w-5 text-white group-hover:text-white/80 transition-colors duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
