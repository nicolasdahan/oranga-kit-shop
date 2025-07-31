
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
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
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">dadafoot<span className="text-muted-foreground">.com</span></h1>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.allProducts')}
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.categories')}
            </button>
            <div className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg bg-card ring-1 ring-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link
                  to="/catalog?category=national-teams"
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent"
                  role="menuitem"
                >
                  {t('category.nationalTeams')}
                </Link>
                <Link
                  to="/catalog?category=premier-league"
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent"
                  role="menuitem"
                >
                  {t('category.premierLeague')}
                </Link>
                <Link
                  to="/catalog?category=la-liga"
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent"
                  role="menuitem"
                >
                  {t('category.laLiga')}
                </Link>
                <Link
                  to="/catalog?category=serie-a"
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent"
                  role="menuitem"
                >
                  {t('category.serieA')}
                </Link>
                <Link
                  to="/catalog?category=bundesliga"
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent"
                  role="menuitem"
                >
                  {t('category.bundesliga')}
                </Link>
                <Link
                  to="/catalog?category=ligue-1"
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent"
                  role="menuitem"
                >
                  {t('category.ligue1')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <Input
              type="search"
              placeholder={t('nav.searchPlaceholder')}
              className="w-[200px] focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="sm" variant="ghost" className="ml-2">
              <Search className="h-5 w-5" />
            </Button>
          </form>

          <LanguageSelector />

          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
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
