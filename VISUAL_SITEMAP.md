# Visual Sitemap - Football Shirt E-Commerce

## 🗺️ Complete Site Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                          HOMEPAGE (/)                               │
│                                                                     │
│  • Hero Carousel (3 images)                                         │
│  • Shop by Club Grid (Featured clubs with logos)                   │
│  • New Arrivals Section (8 products)                               │
│  • Shop by League (6 leagues)                                      │
│  • Featured Collections (Vintage, Retro, etc.)                     │
│  • Featured Products (All featured items)                          │
│  • Newsletter Signup                                               │
│                                                                     │
└──────────┬──────────────────────────────────────────────────────────┘
           │
           ├─────────────────────────────────────────────────────────┐
           │                                                         │
           ▼                                                         │
    ┌──────────────┐                                                 │
    │   CLUBS      │                                                 │
    │  (/clubs)    │                                                 │
    └──────┬───────┘                                                 │
           │                                                         │
           ├──► Clubs Index Page                                    │
           │    • Search clubs                                      │
           │    • Filter by league (tabs)                           │
           │    • Grid of all clubs (25+)                           │
           │    • Club logos/colors                                 │
           │                                                         │
           ├──► Arsenal (/clubs/arsenal) ✓                          │
           │    • Club hero banner                                  │
           │    • Club info (stadium, founded)                      │
           │    • Kit type tabs (Home, Away, Third)                 │
           │    • All Arsenal products                              │
           │                                                         │
           ├──► Chelsea (/clubs/chelsea) ✓                          │
           ├──► Liverpool (/clubs/liverpool) ✓                      │
           ├──► Manchester United (/clubs/manchester-united) ✓      │
           ├──► Manchester City (/clubs/manchester-city) ✓          │
           ├──► PSG (/clubs/psg) ✓                                  │
           ├──► Barcelona (/clubs/barcelona) ✓                      │
           ├──► Real Madrid (/clubs/real-madrid) ✓                  │
           ├──► Inter Milan (/clubs/inter-milan) ✓                  │
           ├──► AC Milan (/clubs/ac-milan) ✓                        │
           ├──► Juventus (/clubs/juventus) ✓                        │
           ├──► Bayern Munich (/clubs/bayern-munich) ✓              │
           ├──► Borussia Dortmund (/clubs/borussia-dortmund) ✓      │
           ├──► Marseille (/clubs/marseille) ✓                      │
           └──► + 10 more clubs...                                  │
                                                                     │
           ┌─────────────────────────────────────────────────────────┘
           │
           ▼
    ┌──────────────┐
    │   LEAGUES    │
    │  (/leagues)  │
    └──────┬───────┘
           │
           ├──► Leagues Index Page
           │    • Top tier leagues (5)
           │    • Other leagues (4)
           │    • League logos & info
           │
           ├──► Premier League (/leagues/premier-league) ✓
           │    • League hero banner
           │    • All Premier League clubs grid
           │    • All Premier League products
           │    • Filter options
           │
           ├──► La Liga (/leagues/la-liga) ✓
           │    • Barcelona, Real Madrid, Atletico
           │    • All La Liga products
           │
           ├──► Serie A (/leagues/serie-a) ✓
           │    • Inter, Milan, Juventus, Roma, Napoli
           │    • All Serie A products
           │
           ├──► Bundesliga (/leagues/bundesliga) ✓
           │    • Bayern, Dortmund, Leipzig
           │    • All Bundesliga products
           │
           ├──► Ligue 1 (/leagues/ligue-1) ✓
           │    • PSG, Marseille, Lyon, Monaco
           │    • All Ligue 1 products
           │
           ├──► Championship (/leagues/championship) ✓
           ├──► Eredivisie (/leagues/eredivisie) ✓
           ├──► Primeira Liga (/leagues/primeira-liga) ✓
           └──► MLS (/leagues/mls) ✓
           
           ┌─────────────────────────────────────────────────────────┐
           │
           ▼
    ┌────────────────┐
    │  COLLECTIONS   │
    │ (/collections) │
    └────────┬───────┘
             │
             ├──► Collections Index Page
             │    • Featured collections (6)
             │    • Other collections (7)
             │    • Collection descriptions
             │
             ├──► 🕰️ Vintage (/collections/vintage) ✓
             │    • Pre-2000 shirts
             │    • Classic designs
             │    • Sort & filter options
             │
             ├──► ⚡ Retro (/collections/retro) ✓
             │    • 2000-2015 shirts
             │    • Modern classics
             │
             ├──► ⭐ Player Version (/collections/player-version) ✓
             │    • Player Issue quality
             │    • Pro Stock shirts
             │
             ├──► 👥 Fan Version (/collections/fan-version) ✓
             │    • Stadium versions
             │    • Replica shirts
             │
             ├──► 🏃 Training (/collections/training) ✓
             │    • Training shirts
             │    • Warm-up kits
             │
             ├──► 🧥 Jackets (/collections/jackets) ✓
             │    • Track jackets
             │    • Tracksuits
             │
             ├──► 🧤 Goalkeeper (/collections/goalkeeper)
             ├──► ✨ Special Edition (/collections/special-edition)
             ├──► 👕 Long Sleeve (/collections/long-sleeve)
             ├──► 🏆 Champions League (/collections/champions-league)
             └──► 🌍 World Cup (/collections/world-cup)

           ┌─────────────────────────────────────────────────────────┐
           │
           ▼
    ┌────────────────┐
    │    CATALOG     │
    │   (/catalog)   │
    └────────┬───────┘
             │
             └──► All Products Page (Existing)
                  • Currently basic catalog
                  • TO ENHANCE with advanced filters
                  • Add filter sidebar
                  • Multi-select filters

           ┌─────────────────────────────────────────────────────────┐
           │
           ▼
    ┌────────────────┐
    │    PRODUCT     │
    │  (/product/:id)│
    └────────┬───────┘
             │
             └──► Product Detail Page (Existing)
                  • Product images
                  • Product info
                  • Size selector
                  • Add to cart
                  • TO ENHANCE with:
                    - Tabbed info sections
                    - Related products
                    - Wishlist button

           ┌─────────────────────────────────────────────────────────┐
           │
           ▼
    ┌────────────────┐
    │     CART       │
    │    (/cart)     │
    └────────────────┘
             Existing functionality

           ┌─────────────────────────────────────────────────────────┐
           │
           ▼
    ┌────────────────┐
    │  AUTH PAGES    │
    └────────┬───────┘
             │
             ├──► Login (/auth/login)
             └──► Register (/auth/register)
```

---

## 📊 Page Count Summary

### ✅ Implemented Pages (17)

**Core Pages** (4):
1. Homepage (Enhanced)
2. Catalog (Existing)
3. Product Detail (Existing)
4. Cart (Existing)

**Club Pages** (2):
5. Clubs Index
6. Club Page (Dynamic - 25+ clubs)

**League Pages** (2):
7. Leagues Index
8. League Page (Dynamic - 9 leagues)

**Collection Pages** (2):
9. Collections Index
10. Collection Page (Dynamic - 13 collections)

**Auth Pages** (2):
11. Login
12. Register

**Utility Pages** (1):
13. 404 Not Found

**Total Unique Templates**: 13
**Total Dynamic Pages**: 47+ (25 clubs + 9 leagues + 13 collections)

---

### 🔄 Pages to Create (10-15)

**National Teams** (2):
- National Teams Index
- National Team Page (Dynamic)

**Brands** (2):
- Brands Index
- Brand Page (Dynamic - 6 brands)

**Account Area** (4):
- Account Dashboard
- Order History
- Wishlist
- Account Settings

**Product Browsing** (3):
- New Arrivals
- Best Sellers
- Sale/Clearance

**Info Pages** (5):
- About Us
- Contact
- Size Guide
- Condition Guide
- FAQ

---

## 🎯 Navigation Hierarchy

```
Header Navigation (Desktop)
├── NEW
├── CLUBS ▾
│   ├── By League
│   │   ├── Premier League Clubs
│   │   ├── La Liga Clubs
│   │   ├── Serie A Clubs
│   │   ├── Bundesliga Clubs
│   │   └── Ligue 1 Clubs
│   ├── Featured Clubs (Grid)
│   └── Browse All Clubs →
│
├── LEAGUES ▾
│   ├── 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League
│   ├── 🇪🇸 La Liga
│   ├── 🇮🇹 Serie A
│   ├── 🇩🇪 Bundesliga
│   └── 🇫🇷 Ligue 1
│
├── NATIONAL TEAMS ▾
│   ├── By Continent
│   ├── Popular Teams
│   └── Browse All →
│
├── COLLECTIONS ▾
│   ├── 🕰️ Vintage Shirts
│   ├── ⚡ Retro Shirts
│   ├── ⭐ Player Version
│   ├── 👥 Fan Version
│   ├── 🏃 Training Kits
│   └── 🧥 Jackets & Tracksuits
│
├── BRANDS ▾
│   ├── Nike
│   ├── Adidas
│   ├── Puma
│   └── Others
│
└── SALE 🔥
```

```
Header Right
├── 🔍 Search
├── 👤 Account
├── ♡ Wishlist (Badge count)
└── 🛒 Cart (Badge count)
```

```
Footer Navigation
├── About Us
├── Contact
├── Shipping & Returns
├── Size Guide
├── Condition Guide
├── FAQ
├── Privacy Policy
└── Terms of Service
```

---

## 🔗 Internal Linking Strategy

### Homepage Links To:
- All featured clubs (12-15 direct links)
- All leagues (5 featured)
- Featured collections (3-4)
- New arrivals section → /catalog?filter=new
- Featured products → individual product pages
- View all links → various listing pages

### Club Pages Link To:
- League page (parent)
- Other clubs in same league
- Individual products
- Related collections

### League Pages Link To:
- All clubs in league
- Individual products
- League-specific filters

### Collection Pages Link To:
- Filtered products
- Other collections
- Individual product pages

---

## 📱 Mobile Navigation Structure

```
Mobile Header
├── 🍔 Hamburger Menu
│   └── Drawer
│       ├── Clubs (Expandable)
│       ├── Leagues (Expandable)
│       ├── National Teams (Expandable)
│       ├── Collections (Expandable)
│       ├── Brands (Expandable)
│       └── Sale
│
├── 🔍 Search (Expandable)
└── 🛒 Cart

Bottom Navigation Bar (Optional)
├── 🏠 Home
├── 🔍 Search
├── ♡ Wishlist
├── 👤 Account
└── 🛒 Cart
```

---

## 🎨 Page Templates

### Template Types

1. **Landing Pages** (Homepage, Collections Index, Clubs Index)
   - Hero section
   - Featured content grid
   - Call to action sections

2. **Category Pages** (Club, League, Collection)
   - Hero banner with theme
   - Info section
   - Product grid with filters
   - Related links

3. **Product Pages**
   - Image gallery
   - Product details
   - Add to cart
   - Related products

4. **Listing Pages** (Catalog, Search Results)
   - Filter sidebar
   - Product grid
   - Sort options
   - Pagination

---

## 🔄 User Flows

### Flow 1: Browse by Club
```
Homepage
  → Click "Shop by Club" club logo
    → Club Page (e.g., Arsenal)
      → Filter by kit type
        → Click product
          → Product Detail
            → Add to cart
              → Cart
                → Checkout
```

### Flow 2: Browse by League
```
Homepage
  → Click league logo
    → League Page (e.g., Premier League)
      → See all clubs
        → Click club
          → Club Page
            → Product → Cart
```

### Flow 3: Browse Collection
```
Homepage
  → Scroll to Featured Collections
    → Click "Vintage Shirts"
      → Collection Page
        → Sort by price
          → Click product
            → Product Detail → Cart
```

### Flow 4: Search
```
Any Page
  → Type in search bar
    → Autocomplete suggestions
      → Select club/product
        → Product or Club Page
          → Product Detail → Cart
```

---

## 📊 Breadcrumb Examples

```
Home > Clubs > Arsenal
Home > Clubs > Premier League > Arsenal
Home > Leagues > Premier League
Home > Collections > Vintage Shirts
Home > Clubs > Arsenal > Arsenal Home Shirt 2024/25
Home > Leagues > La Liga > Barcelona
Home > Collections > Player Version > FC Barcelona Player Issue
```

---

## 🎯 SEO URL Structure

```
Homepage:               /
Clubs Index:            /clubs
Club Page:              /clubs/[slug]
Leagues Index:          /leagues
League Page:            /leagues/[slug]
Collections Index:      /collections
Collection Page:        /collections/[slug]
Product:                /product/[id] (to update to /[category]/[slug])
National Teams Index:   /national-teams
National Team:          /national-teams/[slug]
Brands Index:           /brands
Brand Page:             /brands/[slug]
New Arrivals:           /new-arrivals
Best Sellers:           /best-sellers
Sale:                   /sale
Cart:                   /cart
Checkout:               /checkout
Account:                /account
Wishlist:               /wishlist
```

---

## 🌐 Multi-Language URLs (Future)

```
English:  /clubs/arsenal
French:   /fr/clubs/arsenal
Spanish:  /es/clubes/arsenal
German:   /de/vereine/arsenal
```

---

**Total Sitemap Nodes**: 70+
**Implementation Status**: ~65% Complete
**Ready for**: Testing & Phase 2 Implementation



