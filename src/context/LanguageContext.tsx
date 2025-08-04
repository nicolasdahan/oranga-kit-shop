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
    'nav.newArrivals': 'New Arrivals',
    'nav.clubs': 'Clubs',
    'nav.nationalTeams': 'National Teams',
    'nav.promotion': 'Promotion',
    'nav.namesetPatches': 'Nameset & Patches',
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
    'catalog.sort': 'Sort By',
    'catalog.sort.newest': 'Newest First',
    'catalog.sort.oldest': 'Oldest First',
    'catalog.sort.priceAsc': 'Price: Low to High',
    'catalog.sort.priceDesc': 'Price: High to Low',
    'catalog.sort.seasonDesc': 'Season: Newest to Oldest',
    'catalog.sort.seasonAsc': 'Season: Oldest to Newest',
    'catalog.price': 'Price Range',
    'catalog.price.min': 'Min Price',
    'catalog.price.max': 'Max Price',
    'catalog.brand': 'Brand',
    'catalog.competition': 'Competition',
    'catalog.kitType': 'Kit Type',
    'catalog.condition': 'Condition',
    'catalog.customization': 'Customization',
    'catalog.customization.all': 'All Items',
    'catalog.customization.withNameset': 'With Nameset',
    'catalog.customization.withoutNameset': 'Without Nameset',
    'catalog.format': 'Jersey Format',
    'catalog.format.all': 'All Formats',
    'catalog.format.stadium': 'Stadium Version',
    'catalog.format.playerIssue': 'Player Issue',
    'catalog.format.proStock': 'Pro Stock',
    'catalog.format.matchWorn': 'Match Worn',
    'catalog.format.matchPrepared': 'Match Prepared',
    'catalog.size': 'Size',
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
    
    // Social
    'social.whatsapp': 'Contact us on WhatsApp',
    'social.instagram': 'Follow us on Instagram',

    // Payment
    'payment.acceptedMethods': 'Accepted payment methods',

    // Product card
    'product.customizable': 'Customizable',
    'product.viewDetails': 'View Details',

    // Product detail
    'product.notFound': 'Product Not Found',
    'product.notFoundDesc': 'Sorry, the product you\'re looking for doesn\'t exist.',
    'product.backToCatalog': 'Back to Catalog',
    'product.season': 'Season',
    'product.selectSize': 'Select Size',
    'product.customizationOptions': 'Customization Options',
    'product.addLeaguePatches': 'Add League Patches',
    'product.patchesDesc': 'Official league patches for both sleeves',
    'product.addNameNumber': 'Add Player Name & Number',
    'product.nameNumberDesc': 'Official name and number printing on the back',
    'product.playerName': 'Player Name',
    'product.enterPlayerName': 'Enter player name',
    'product.number': 'Number',
    'product.addToCart': 'Add to Cart',
    'product.viewCart': 'View Cart',
    'product.paypalCheckout': 'Quick Checkout with PayPal',
    'product.freeShipping': 'Free shipping on orders over $100',
    'product.authentic': 'Authentic official licensed product',
    'product.securePayment': 'Secure payment with PayPal',

    // Auth
    'auth.login.title': 'Login',
    'auth.login.subtitle': 'Sign in to your account to continue',
    'auth.login.email': 'Email',
    'auth.login.password': 'Password',
    'auth.login.submit': 'Sign in',
    'auth.login.noAccount': 'Don\'t have an account?',
    'auth.login.createAccount': 'Create an account',

    'auth.register.title': 'Create Account',
    'auth.register.subtitle': 'Join us to access all our features',
    'auth.register.firstName': 'First Name',
    'auth.register.lastName': 'Last Name',
    'auth.register.email': 'Email',
    'auth.register.password': 'Password',
    'auth.register.submit': 'Create my account',
    'auth.register.hasAccount': 'Already have an account?',
    'auth.register.login': 'Sign in',

    // New Auth translations
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.logout': 'Logout',
    'auth.loginDescription': 'Sign in to your account',
    'auth.registerDescription': 'Create your account',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.emailPlaceholder': 'Enter your email',
    'auth.passwordPlaceholder': 'Enter your password',
    'auth.confirmPasswordPlaceholder': 'Confirm your password',
    'auth.firstNamePlaceholder': 'Enter your first name',
    'auth.lastNamePlaceholder': 'Enter your last name',
    'auth.loggingIn': 'Signing in...',
    'auth.creatingAccount': 'Creating account...',
    'auth.loginError': 'Invalid email or password',
    'auth.registerError': 'Registration failed. Please try again.',
    'auth.passwordMismatch': 'Passwords do not match',
    'auth.acceptTermsRequired': 'Please accept the terms of service',
    'auth.acceptTerms': 'I accept the',
    'auth.termsOfService': 'Terms of Service',
    'auth.forgotPassword': 'Forgot password?',
    'auth.noAccount': "Don't have an account?",
    'auth.alreadyHaveAccount': 'Already have an account?',
    'auth.createAccount': 'Create account',
    'auth.continueWithFacebook': 'Continue with Facebook',
    'auth.continueWithGoogle': 'Continue with Google',
    'auth.orContinueWith': 'or continue with',
    'auth.facebookError': 'Facebook login failed. Please try again.',
    'auth.googleError': 'Google login failed. Please try again.',

    // User Menu
    'user.menu.orders': 'Order History',
    'user.menu.settings': 'Account Settings',
    'user.menu.logout': 'Sign Out',
    'user.menu.login': 'Sign In',
    'user.menu.register': 'Create Account',

  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.newArrivals': 'Nouveautés',
    'nav.clubs': 'Clubs',
    'nav.nationalTeams': 'Sélection nationales',
    'nav.promotion': 'Promotion',
    'nav.namesetPatches': 'Nameset & patches',
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
    'catalog.sort': 'Trier par',
    'catalog.sort.newest': 'Plus récent',
    'catalog.sort.oldest': 'Plus ancien',
    'catalog.sort.priceAsc': 'Prix croissant',
    'catalog.sort.priceDesc': 'Prix décroissant',
    'catalog.sort.seasonDesc': 'Saison: Plus récente à plus ancienne',
    'catalog.sort.seasonAsc': 'Saison: Plus ancienne à plus récente',
    'catalog.price': 'Fourchette de prix',
    'catalog.price.min': 'Prix minimum',
    'catalog.price.max': 'Prix maximum',
    'catalog.brand': 'Marque',
    'catalog.competition': 'Compétition',
    'catalog.kitType': 'Type de maillot',
    'catalog.condition': 'État',
    'catalog.customization': 'Personnalisation',
    'catalog.customization.all': 'Tous les articles',
    'catalog.customization.withNameset': 'Avec flocage',
    'catalog.customization.withoutNameset': 'Sans flocage',
    'catalog.format': 'Format du maillot',
    'catalog.format.all': 'Tous les formats',
    'catalog.format.stadium': 'Version Stadium',
    'catalog.format.playerIssue': 'Version Pro',
    'catalog.format.proStock': 'Stock Pro',
    'catalog.format.matchWorn': 'Porté en match',
    'catalog.format.matchPrepared': 'Préparé pour match',
    'catalog.size': 'Taille',
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
    
    // Social
    'social.whatsapp': 'Contactez-nous sur WhatsApp',
    'social.instagram': 'Suivez-nous sur Instagram',

    // Payment
    'payment.acceptedMethods': 'Moyens de paiement acceptés',

    // Product card
    'product.customizable': 'Personnalisable',
    'product.viewDetails': 'Voir les Détails',

    // Product detail
    'product.notFound': 'Produit non trouvé',
    'product.notFoundDesc': 'Désolé, le produit que vous recherchez n\'existe pas.',
    'product.backToCatalog': 'Retour au catalogue',
    'product.season': 'Saison',
    'product.selectSize': 'Sélectionnez la taille',
    'product.customizationOptions': 'Options de personnalisation',
    'product.addLeaguePatches': 'Ajouter les écussons de la ligue',
    'product.patchesDesc': 'Écussons officiels de la ligue pour les deux manches',
    'product.addNameNumber': 'Ajouter nom et numéro du joueur',
    'product.nameNumberDesc': 'Flocage officiel du nom et du numéro au dos',
    'product.playerName': 'Nom du joueur',
    'product.enterPlayerName': 'Entrez le nom du joueur',
    'product.number': 'Numéro',
    'product.addToCart': 'Ajouter au panier',
    'product.viewCart': 'Voir le panier',
    'product.paypalCheckout': 'Paiement rapide avec PayPal',
    'product.freeShipping': 'Livraison gratuite pour les commandes de plus de 100€',
    'product.authentic': 'Produit officiel authentique',
    'product.securePayment': 'Paiement sécurisé avec PayPal',

    // Auth
    'auth.login.title': 'Connexion',
    'auth.login.subtitle': 'Connectez-vous à votre compte pour continuer',
    'auth.login.email': 'Email',
    'auth.login.password': 'Mot de passe',
    'auth.login.submit': 'Se connecter',
    'auth.login.noAccount': 'Pas encore de compte ?',
    'auth.login.createAccount': 'Créer un compte',

    'auth.register.title': 'Créer un compte',
    'auth.register.subtitle': 'Rejoignez-nous pour accéder à toutes nos fonctionnalités',
    'auth.register.firstName': 'Prénom',
    'auth.register.lastName': 'Nom',
    'auth.register.email': 'Email',
    'auth.register.password': 'Mot de passe',
    'auth.register.submit': 'Créer mon compte',
    'auth.register.hasAccount': 'Déjà un compte ?',
    'auth.register.login': 'Se connecter',

    // User Menu
    'user.menu.orders': 'Historique des commandes',
    'user.menu.settings': 'Paramètres du compte',
    'user.menu.logout': 'Se déconnecter',
    'user.menu.login': 'Se connecter',
    'user.menu.register': 'Créer un compte',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.newArrivals': 'Novedades',
    'nav.clubs': 'Clubes',
    'nav.nationalTeams': 'Selecciones Nacionales',
    'nav.promotion': 'Promoción',
    'nav.namesetPatches': 'Nameset & Parches',
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
    'catalog.sort': 'Ordenar por',
    'catalog.sort.newest': 'Más reciente',
    'catalog.sort.oldest': 'Más antiguo',
    'catalog.sort.priceAsc': 'Precio: menor a mayor',
    'catalog.sort.priceDesc': 'Precio: mayor a menor',
    'catalog.sort.seasonDesc': 'Temporada: Más reciente a más antigua',
    'catalog.sort.seasonAsc': 'Temporada: Más antigua a más reciente',
    'catalog.price': 'Rango de precio',
    'catalog.price.min': 'Precio mínimo',
    'catalog.price.max': 'Precio máximo',
    'catalog.brand': 'Marca',
    'catalog.competition': 'Competición',
    'catalog.kitType': 'Tipo de camiseta',
    'catalog.condition': 'Estado',
    'catalog.customization': 'Personalización',
    'catalog.customization.all': 'Todos los artículos',
    'catalog.customization.withNameset': 'Con dorsal',
    'catalog.customization.withoutNameset': 'Sin dorsal',
    'catalog.format': 'Formato de camiseta',
    'catalog.format.all': 'Todos los formatos',
    'catalog.format.stadium': 'Versión Stadium',
    'catalog.format.playerIssue': 'Versión Pro',
    'catalog.format.proStock': 'Stock Pro',
    'catalog.format.matchWorn': 'Usada en partido',
    'catalog.format.matchPrepared': 'Preparada para partido',
    'catalog.size': 'Talla',
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
    
    // Social
    'social.whatsapp': 'Contáctanos en WhatsApp',
    'social.instagram': 'Síguenos en Instagram',

    // Payment
    'payment.acceptedMethods': 'Métodos de pago aceptados',

    // Product card
    'product.customizable': 'Personalizable',
    'product.viewDetails': 'Ver Detalles',

    // Product detail
    'product.notFound': 'Producto no encontrado',
    'product.notFoundDesc': 'Lo sentimos, el producto que buscas no existe.',
    'product.backToCatalog': 'Volver al catálogo',
    'product.season': 'Temporada',
    'product.selectSize': 'Seleccionar talla',
    'product.customizationOptions': 'Opciones de personalización',
    'product.addLeaguePatches': 'Añadir parches de la liga',
    'product.patchesDesc': 'Parches oficiales de la liga para ambas mangas',
    'product.addNameNumber': 'Añadir nombre y número de jugador',
    'product.nameNumberDesc': 'Impresión oficial de nombre y número en la espalda',
    'product.playerName': 'Nombre del jugador',
    'product.enterPlayerName': 'Introduce el nombre del jugador',
    'product.number': 'Número',
    'product.addToCart': 'Añadir al carrito',
    'product.viewCart': 'Ver carrito',
    'product.paypalCheckout': 'Pago rápido con PayPal',
    'product.freeShipping': 'Envío gratis en pedidos superiores a 100€',
    'product.authentic': 'Producto oficial auténtico',
    'product.securePayment': 'Pago seguro con PayPal',

    // Auth
    'auth.login.title': 'Iniciar Sesión',
    'auth.login.subtitle': 'Inicia sesión en tu cuenta para continuar',
    'auth.login.email': 'Correo electrónico',
    'auth.login.password': 'Contraseña',
    'auth.login.submit': 'Iniciar sesión',
    'auth.login.noAccount': '¿No tienes una cuenta?',
    'auth.login.createAccount': 'Crear una cuenta',

    'auth.register.title': 'Crear Cuenta',
    'auth.register.subtitle': 'Únete para acceder a todas nuestras funciones',
    'auth.register.firstName': 'Nombre',
    'auth.register.lastName': 'Apellido',
    'auth.register.email': 'Correo electrónico',
    'auth.register.password': 'Contraseña',
    'auth.register.submit': 'Crear mi cuenta',
    'auth.register.hasAccount': '¿Ya tienes una cuenta?',
    'auth.register.login': 'Iniciar sesión',

    // User Menu
    'user.menu.orders': 'Historial de pedidos',
    'user.menu.settings': 'Configuración de cuenta',
    'user.menu.logout': 'Cerrar sesión',
    'user.menu.login': 'Iniciar sesión',
    'user.menu.register': 'Crear cuenta',
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

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { useLanguage };