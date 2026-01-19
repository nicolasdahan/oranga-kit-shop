# Product Customization System

## Overview

The product customization system has been completely redesigned to provide dynamic, product-specific options for patches and player names/numbers.

## Changes Made

### 1. **Dynamic Patch Selection**

Previously: Generic "add patches" checkbox with fixed €10 price.

Now:
- Each product shows only compatible patches based on:
  - League/Category (Premier League, La Liga, Serie A, etc.)
  - Competition (League, Champions League, Europa League, etc.)
- Each patch displays:
  - Name (e.g., "Premier League Standard Patch")
  - Description
  - Individual price (varies by patch type)
  - Image
- Multiple patches can be selected for a single product
- Prices are calculated individually and added to cart total

### 2. **Official Player Selection**

Previously: Free-text fields where customers could enter any name/number.

Now:
- Dropdown list of official players for each team
- Each player entry shows:
  - Player name
  - Jersey number
  - Position
- Players are team-specific (e.g., PSG players only show for PSG products)
- Some products don't allow player customization (e.g., shorts)
- Fixed price of €20 for player name & number printing
- Uses authentic fonts and materials

### 3. **New Data Structures**

#### Patches (`src/data/patches.ts`)
```typescript
type Patch = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  compatibleLeagues: string[];
  compatibleCompetitions?: string[];
};
```

Available patches include:
- League patches (Premier League, La Liga, Serie A, Bundesliga, Ligue 1)
- Champions League patches
- Europa League patches
- World Cup, Euro, Copa América patches
- Champion badges (gold patches for title winners)

#### Players (`src/data/players.ts`)
```typescript
type Player = {
  id: string;
  name: string;
  number: number;
  position: string;
  team: string;
  image?: string;
  available: boolean;
};
```

Players added for teams:
- Paris Saint-Germain (Dembélé, Marquinhos, Hakimi, etc.)
- Real Madrid (Bellingham, Vinícius Jr., Mbappé, etc.)
- Barcelona (Lewandowski, Pedri, Gavi, etc.)
- Arsenal (Saka, Ødegaard, Rice, etc.)
- And many more...

#### Updated Product Type
```typescript
type Product = {
  // ... existing fields
  allowsPlayerCustomization: boolean; // Whether player names can be added
};
```

### 4. **Updated Cart System**

The cart now properly tracks:
```typescript
type Customizations = {
  patches: SelectedPatch[]; // Array with patchId, name, price
  player: SelectedPlayer | null; // playerId, name, number
};
```

Cart display now shows:
- All selected patches with names
- Selected player name and number
- Individual prices for patches
- Total price calculation including all customizations

## Product Configuration

### Enabling Player Customization

Set `allowsPlayerCustomization: true` on products that should allow player names.

**Note:** Player customization will only appear if:
1. `allowsPlayerCustomization` is `true`
2. There are available players for that team in `players.ts`

### Disabling Player Customization

Set `allowsPlayerCustomization: false` for:
- Shorts
- Vintage/retro products
- Products where customization doesn't make sense

## Patch Compatibility

Patches are automatically filtered based on:
1. **Product category** - Must match patch's `compatibleLeagues`
2. **Product competitions** - At least one competition must match

Example:
- PSG 2024/25 (category: "ligue-1", competitions: ["League", "Champions League"])
  - ✅ Shows: Ligue 1 patches, Champions League patches
  - ❌ Hides: Premier League patches, La Liga patches

## How to Add New Content

### Adding a New Patch

Edit `src/data/patches.ts`:

```typescript
{
  id: 'my-new-patch',
  name: 'My New League Patch',
  description: 'Official patch description',
  price: 10.00,
  image: '/patches/my-new-patch.png',
  compatibleLeagues: ['premier-league', 'la-liga'], // Which leagues
  compatibleCompetitions: ['League', 'Champions League'] // Which competitions
}
```

Add the patch image to `/public/patches/my-new-patch.png`

### Adding a New Player

Edit `src/data/players.ts`:

```typescript
{
  id: 'team-playername',
  name: 'PLAYER NAME', // Uppercase as it appears on shirt
  number: 10,
  position: 'Forward',
  team: 'Team Name', // Must exactly match Product.team
  image: '/players/playername.jpg', // optional
  available: true // false for retired/transferred players
}
```

### Adding a New Product with Customization

Edit `src/data/products.ts`:

```typescript
{
  id: "product-id",
  name: "Product Name",
  // ... other fields
  category: "premier-league", // Used for patch filtering
  team: "Arsenal", // Used for player filtering
  competition: ["League", "Champions League"], // Used for patch filtering
  allowsPlayerCustomization: true, // Enable player selection
  // ... other fields
}
```

## Pricing

### Patches
- Standard league patches: €8.00
- Champions patches (gold): €12.00
- European competition patches: €10.00
- Prices can vary by patch type

### Player Names & Numbers
- Fixed price: €20.00
- Includes authentic fonts and materials
- Applied to any available player

## User Interface

### Product Detail Page

1. **Size Selection** - Required before adding to cart
2. **Available Patches** - Grid of checkboxes with images and prices
   - Can select multiple patches
   - Shows total added to price
3. **Official Player Selection** - Dropdown menu
   - Optional
   - Shows player name, number, and position
   - Adds €20 to total
4. **Dynamic Price Calculation** - Updates in real-time as options selected

### Cart Page

Each cart item displays:
- Product image and name
- Selected size
- Base price + itemized customizations:
  - "Patches: [Patch names]" with Tag icon
  - "Player: NAME #NUMBER" with Shirt icon
- Per-item and total prices including all customizations

## Technical Implementation

### Key Functions

**patches.ts**
- `getCompatiblePatches(category, competitions)` - Returns patches for a product
- `getPatchById(id)` - Get patch details

**players.ts**
- `getPlayersByTeam(teamName)` - Returns available players for a team
- `hasAvailablePlayers(teamName)` - Check if team has any players
- `getPlayerById(id)` - Get player details

### Cart Context

The cart automatically:
- Calculates total including all customizations
- Handles quantity changes
- Distinguishes items with different customizations as separate cart entries

## Future Enhancements

Potential additions:
1. Player images in selection dropdown
2. Patch preview overlay on product image
3. Custom text option for select products
4. Additional customization types (captain's armband, special fonts, etc.)
5. Bulk discount for multiple patches

## Migration Notes

**Old customization format** (deprecated):
```typescript
{
  patches: boolean,
  nameset: { name: string, number: string } | null
}
```

**New customization format**:
```typescript
{
  patches: SelectedPatch[],
  player: SelectedPlayer | null
}
```

The old format is no longer supported. All products now use the new system.

