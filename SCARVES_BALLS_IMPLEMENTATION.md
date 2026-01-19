# Scarves and Balls Sections Implementation

## Overview
Added two new product sections to the webshop: **Scarves** and **Balls**, allowing customers to browse and purchase football scarves and official match balls.

## What Was Added

### 1. Product Data (`src/data/products.ts`)
- Added new categories: `scarves` and `balls`
- Added 'Official' brand type for generic/tournament merchandise
- Added 6 scarf products:
  - PSG Official Scarf 2024/25
  - Liverpool FC Official Scarf 2024/25
  - PSG vs Inter Milan Match Scarf (3 variants)
  - Real Betis vs Chelsea Match Scarf
- Added 2 ball products:
  - UEFA Euro 2008 Official Match Ball (Silver Edition)
  - UEFA Champions League 2009 Final Match Ball

### 2. New Pages
- **`src/pages/Scarves.tsx`**: Dedicated page for browsing all scarves
  - Sort functionality (newest, price ascending/descending)
  - Product grid display
  - Informational section about football scarves
  
- **`src/pages/Balls.tsx`**: Dedicated page for browsing all match balls
  - Sort functionality (newest, price ascending/descending)
  - Product grid display
  - Informational section about collecting football history

### 3. Routing (`src/App.tsx`)
- Added routes:
  - `/scarves` → Scarves page
  - `/balls` → Balls page

### 4. Navigation (`src/components/Navbar.tsx`)
- Added two new navigation links in the main menu:
  - "Scarves" → `/scarves`
  - "Balls" → `/balls`
- Links use translation system for multi-language support

### 5. Home Page Updates (`src/pages/Home.tsx`)
- Added new "More Than Just Shirts" section before the league categories
- Features two prominent cards:
  - Scarves card with blue gradient and sample scarf image
  - Balls card with red/orange gradient and sample ball image
- Both cards are clickable and lead to respective pages

### 6. Translation Support (`src/context/LanguageContext.tsx`)
- Added translations for all three languages (English, French, Spanish):
  - `nav.scarves`: Scarves / Écharpes / Bufandas
  - `nav.balls`: Balls / Ballons / Balones
  - `nav.accessories`: Accessories / Accessoires / Accesorios
  - `nav.equipment`: Equipment / Équipement / Equipamiento

## Product Details

### Scarves
All scarves are:
- Category: `scarves`
- Size: One Size
- Price range: €24.99 - €34.99
- Mix of club scarves and commemorative match scarves

### Balls
All balls are:
- Category: `balls`
- Size: 5 (standard football size)
- Price range: €129.99 - €149.99
- Official tournament/match balls with collectible value
- Team listed as "UEFA" for tournament balls

## Images Used
The implementation uses existing images from your public folder:
- `/scarf/` directory: 6 scarf images
- `/ball/` directory: 2 ball images (euro-2008-silver.jpg, roma-2009.png)

## Features
- ✅ Full integration with existing cart system
- ✅ Multi-language support (EN/FR/ES)
- ✅ Responsive design
- ✅ Sort and filter capabilities
- ✅ Consistent with existing UI/UX patterns
- ✅ SEO-friendly page structure
- ✅ Product card reusability

## How to Test
1. Navigate to the home page
2. Look for the "More Than Just Shirts" section
3. Click on either "Scarves" or "Balls" cards
4. Or use the navigation menu links at the top
5. Browse products, sort them, and add them to cart

## Future Enhancements
Consider adding:
- Filter by team/club for scarves
- Filter by tournament/competition for balls
- More products in each category
- Bundle deals (e.g., shirt + scarf)
- Size options for training balls (size 3, 4, 5)

