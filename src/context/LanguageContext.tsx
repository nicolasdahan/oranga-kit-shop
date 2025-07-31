import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.allProducts': 'All Products',
    'nav.categories': 'Categories',
    'nav.searchPlaceholder': 'Search jerseys...',
    
    // Home page
    'home.hero.title': 'Official Football Jerseys',
    'home.hero.subtitle': 'Authentic shirts from your favorite teams and nations. Premium quality with worldwide shipping.',
    'home.hero.shopNow': 'Shop Now',
    'home.hero.nationalTeams': 'National Teams',
    'home.newArrivals': 'New Arrivals',
    'home.new': 'New',
    'home.viewAllNew': 'View All New Arrivals',
    'home.shopByLeague': 'Shop By League',
    'home.featuredJerseys': 'Featured Jerseys',
    'home.viewAllProducts': 'View All Products',
    'home.newsletter.title': 'Join our Newsletter',
    'home.newsletter.subtitle': 'Subscribe to get special offers, free giveaways, and new arrivals notifications.',
    'home.newsletter.placeholder': 'Your email address',
    'home.newsletter.subscribe': 'Subscribe',
    
    // Categories
    'category.nationalTeams': 'National Teams',
    'category.premierLeague': 'Premier League',
    'category.laLiga': 'La Liga',
    'category.serieA': 'Serie A',
    'category.bundesliga': 'Bundesliga',
    'category.ligue1': 'Ligue 1',
    
    // Catalog
    'catalog.filters': 'Filters',
    'catalog.clearAll': 'Clear All',
    'catalog.categories': 'Categories',
    'catalog.applyFilters': 'Apply Filters',
    'catalog.allProducts': 'All Products',
    'catalog.searchResults': 'Search results for',
    'catalog.productsFound': 'products found',
    'catalog.productFound': 'product found',
    'catalog.hideFilters': 'Hide Filters',
    'catalog.showFilters': 'Show Filters',
    'catalog.searchPlaceholder': 'Search products...',
    'catalog.search': 'Search',
    'catalog.noProducts': 'No products found',
    'catalog.noProductsDesc': 'Try adjusting your search or filter to find what you\'re looking for.',
    'catalog.clearFilters': 'Clear Filters',
    
    // Product card
    'product.customizable': 'Customizable',
    'product.viewDetails': 'View Details',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.allProducts': 'Tous les Produits',
    'nav.categories': 'Catégories',
    'nav.searchPlaceholder': 'Rechercher des maillots...',
    
    // Home page
    'home.hero.title': 'Maillots de Football Officiels',
    'home.hero.subtitle': 'Maillots authentiques de vos équipes et nations préférées. Qualité premium avec expédition mondiale.',
    'home.hero.shopNow': 'Acheter Maintenant',
    'home.hero.nationalTeams': 'Équipes Nationales',
    'home.newArrivals': 'Nouveautés',
    'home.new': 'Nouveau',
    'home.viewAllNew': 'Voir Toutes les Nouveautés',
    'home.shopByLeague': 'Acheter par Championnat',
    'home.featuredJerseys': 'Maillots Vedettes',
    'home.viewAllProducts': 'Voir Tous les Produits',
    'home.newsletter.title': 'Rejoignez notre Newsletter',
    'home.newsletter.subtitle': 'Abonnez-vous pour recevoir des offres spéciales, des cadeaux gratuits et des notifications de nouveautés.',
    'home.newsletter.placeholder': 'Votre adresse email',
    'home.newsletter.subscribe': 'S\'abonner',
    
    // Categories
    'category.nationalTeams': 'Équipes Nationales',
    'category.premierLeague': 'Premier League',
    'category.laLiga': 'La Liga',
    'category.serieA': 'Serie A',
    'category.bundesliga': 'Bundesliga',
    'category.ligue1': 'Ligue 1',
    
    // Catalog
    'catalog.filters': 'Filtres',
    'catalog.clearAll': 'Tout Effacer',
    'catalog.categories': 'Catégories',
    'catalog.applyFilters': 'Appliquer les Filtres',
    'catalog.allProducts': 'Tous les Produits',
    'catalog.searchResults': 'Résultats de recherche pour',
    'catalog.productsFound': 'produits trouvés',
    'catalog.productFound': 'produit trouvé',
    'catalog.hideFilters': 'Masquer les Filtres',
    'catalog.showFilters': 'Afficher les Filtres',
    'catalog.searchPlaceholder': 'Rechercher des produits...',
    'catalog.search': 'Rechercher',
    'catalog.noProducts': 'Aucun produit trouvé',
    'catalog.noProductsDesc': 'Essayez d\'ajuster votre recherche ou filtre pour trouver ce que vous cherchez.',
    'catalog.clearFilters': 'Effacer les Filtres',
    
    // Product card
    'product.customizable': 'Personnalisable',
    'product.viewDetails': 'Voir les Détails',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.allProducts': 'Todos los Productos',
    'nav.categories': 'Categorías',
    'nav.searchPlaceholder': 'Buscar camisetas...',
    
    // Home page
    'home.hero.title': 'Camisetas de Fútbol Oficiales',
    'home.hero.subtitle': 'Camisetas auténticas de tus equipos y naciones favoritas. Calidad premium con envío mundial.',
    'home.hero.shopNow': 'Comprar Ahora',
    'home.hero.nationalTeams': 'Selecciones Nacionales',
    'home.newArrivals': 'Novedades',
    'home.new': 'Nuevo',
    'home.viewAllNew': 'Ver Todas las Novedades',
    'home.shopByLeague': 'Comprar por Liga',
    'home.featuredJerseys': 'Camisetas Destacadas',
    'home.viewAllProducts': 'Ver Todos los Productos',
    'home.newsletter.title': 'Únete a nuestro Newsletter',
    'home.newsletter.subtitle': 'Suscríbete para recibir ofertas especiales, regalos gratuitos y notificaciones de novedades.',
    'home.newsletter.placeholder': 'Tu dirección de email',
    'home.newsletter.subscribe': 'Suscribirse',
    
    // Categories
    'category.nationalTeams': 'Selecciones Nacionales',
    'category.premierLeague': 'Premier League',
    'category.laLiga': 'La Liga',
    'category.serieA': 'Serie A',
    'category.bundesliga': 'Bundesliga',
    'category.ligue1': 'Ligue 1',
    
    // Catalog
    'catalog.filters': 'Filtros',
    'catalog.clearAll': 'Limpiar Todo',
    'catalog.categories': 'Categorías',
    'catalog.applyFilters': 'Aplicar Filtros',
    'catalog.allProducts': 'Todos los Productos',
    'catalog.searchResults': 'Resultados de búsqueda para',
    'catalog.productsFound': 'productos encontrados',
    'catalog.productFound': 'producto encontrado',
    'catalog.hideFilters': 'Ocultar Filtros',
    'catalog.showFilters': 'Mostrar Filtros',
    'catalog.searchPlaceholder': 'Buscar productos...',
    'catalog.search': 'Buscar',
    'catalog.noProducts': 'No se encontraron productos',
    'catalog.noProductsDesc': 'Intenta ajustar tu búsqueda o filtro para encontrar lo que buscas.',
    'catalog.clearFilters': 'Limpiar Filtros',
    
    // Product card
    'product.customizable': 'Personalizable',
    'product.viewDetails': 'Ver Detalles',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};