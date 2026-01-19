# Nameset Restrictions System - Complete Guide

## 📚 Overview

The nameset restrictions system controls which fonts/styles are used for player names and numbers based on:
- **Club** (e.g., PSG, Marseille, Arsenal)
- **Competition** (League vs Champions League vs Europa League)
- **Season** (2023/24 vs 2024/25)

## 🎯 Key Use Case: PSG Example

**Problem:**
- PSG uses **Ligue 1 font** for domestic league matches ⚽
- PSG uses **Champions League font** for UEFA Champions League matches 🏆
- These are two different fonts/styles that must be selected based on the competition

**Solution:**
The system automatically provides the correct nameset type based on the product's competition.

### PSG Ligue 1 Match (2024/25)
```typescript
Product: {
  team: "Paris Saint-Germain",
  season: "2024/25",
  competition: ["League"]
}

Available Namesets:
✅ Ligue 1 Standard Nameset 2024/25 (fontStyle: 'Ligue1-2024')
```

### PSG Champions League Match (2024/25)
```typescript
Product: {
  team: "Paris Saint-Germain",
  season: "2024/25",
  competition: ["Champions League"]
}

Available Namesets:
✅ UEFA Champions League Nameset (fontStyle: 'UCL-Standard')
```

## 📁 Configuration Files

### Main Files:
1. **`src/data/namesets.ts`** - Nameset type definitions
2. **`src/data/namesetRestrictions.ts`** - Club/season restrictions (EDIT THIS FILE)

### File Structure:

```
src/data/
├── namesets.ts              # Nameset type definitions
├── namesetRestrictions.ts   # ← Configure restrictions here
├── patches.ts               # Patch definitions
└── patchRestrictions.ts     # Patch restrictions
```

## 🔧 Nameset Types

### League-Specific Namesets:

| Nameset ID | League | Description | Price Modifier |
|------------|--------|-------------|----------------|
| `ligue1-standard-2023` | Ligue 1 | 2023/24 font | €0 |
| `ligue1-standard-2024` | Ligue 1 | 2024/25 font (updated) | €0 |
| `premier-league-standard` | Premier League | Standard PL font | €0 |
| `la-liga-standard` | La Liga | Standard La Liga font | €0 |
| `serie-a-standard` | Serie A | Standard Serie A font | €0 |
| `bundesliga-standard` | Bundesliga | Standard Bundesliga font | €0 |

### Competition-Specific Namesets:

| Nameset ID | Competition | Description | Price Modifier |
|------------|-------------|-------------|----------------|
| `ucl-standard` | Champions League | UEFA mandated font | +€5 |
| `uel-standard` | Europa League | UEFA EL font | +€5 |
| `world-cup-standard` | World Cup | FIFA WC font | +€5 |
| `euro-standard` | Euro Championship | UEFA Euro font | +€5 |

## 🎨 How It Works

### 3-Layer System:

```
1. Basic Compatibility
   ↓
   - League match (e.g., ligue-1)
   - Competition type match (e.g., Champions League)
   
2. Club Restriction
   ↓
   - Is this club allowed to use this nameset?
   
3. Season Restriction
   ↓
   - Is this club allowed to use this nameset in THIS season?
   
= Available Nameset Types
```

### Example Flow: PSG in Champions League

```
Product:
  team: "Paris Saint-Germain"
  season: "2023/24"
  competition: ["Champions League"]
  category: "ligue-1"

Step 1: Filter by compatibility
  → ucl-standard (compatibleCompetitions: ["Champions League"]) ✅
  → ligue1-standard-2023 (compatibleCompetitions: ["League"]) ❌

Step 2: Check club restriction
  → PSG in allowed clubs for ucl-standard? ✅

Step 3: Check season restriction
  → 2023/24 in allowed seasons for PSG? ✅

Result: UEFA Champions League Nameset available ✅
```

## 📝 Configuration

### Location:
**`src/data/namesetRestrictions.ts`**

### Structure:

```typescript
export const namesetRestrictions: NamesetRestrictionsConfig = {
  'nameset-id': {
    allowedClubs: [
      { clubSlug: 'club-slug', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'another-club', seasons: '*' }, // All seasons
    ]
  }
};
```

## 🚀 Common Configurations

### Example 1: PSG - League vs Champions League

```typescript
// Ligue 1 font for domestic matches
'ligue1-standard-2024': {
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2024/25'] },
    // ... other Ligue 1 clubs
  ]
},

// Champions League font for UCL matches
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2023/24', '2024/25'] },
    // ... other UCL clubs
  ]
}
```

**Result:**
- PSG Ligue 1 2024/25 shirt → Ligue 1 font ✅
- PSG Champions League 2024/25 shirt → Champions League font ✅

---

### Example 2: Marseille - Competition Change

```typescript
// Champions League font in 2023/24
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2023/24'] },
  ]
},

// Europa League font in 2024/25
'uel-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2024/25'] },
  ]
},

// Ligue 1 font for both seasons
'ligue1-standard-2023': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2023/24'] },
  ]
},
'ligue1-standard-2024': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2024/25'] },
  ]
}
```

**Result:**
- Marseille Ligue 1 2023/24 → Ligue 1 2023 font ✅
- Marseille Champions League 2023/24 → Champions League font ✅
- Marseille Ligue 1 2024/25 → Ligue 1 2024 font ✅
- Marseille Europa League 2024/25 → Europa League font ✅

---

### Example 3: Font Update Between Seasons

```typescript
// Old font for 2023/24
'ligue1-standard-2023': {
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2022/23', '2023/24'] },
  ]
},

// New font for 2024/25
'ligue1-standard-2024': {
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2024/25'] },
  ]
}
```

**Result:**
- Older PSG shirts use old font
- Newer PSG shirts use updated font

## 🎯 Step-by-Step: Add a Club

### Goal: Allow Lyon to use Champions League nameset in 2024/25

#### Step 1: Open Configuration File
```bash
src/data/namesetRestrictions.ts
```

#### Step 2: Find the Nameset
```typescript
'ucl-standard': {
  allowedClubs: [
    // ... existing clubs ...
```

#### Step 3: Add Your Club
```typescript
'ucl-standard': {
  allowedClubs: [
    // ... existing clubs ...
    { clubSlug: 'lyon', seasons: ['2024/25'] }, // ← Add this line
  ]
}
```

#### Step 4: Save and Test
Navigate to a Lyon Champions League product → UCL nameset should be available ✅

## 📊 Product Configuration

### Products Must Specify Competitions

For namesets to work correctly, products must have the correct `competition` array:

```typescript
// In products.ts

// PSG Ligue 1 Match
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  competition: ["League"], // ← Important: League competition
  category: "ligue-1"
}

// PSG Champions League Match
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  competition: ["Champions League"], // ← Important: CL competition
  category: "ligue-1"
}
```

## 🔍 Integration with Product Detail Page

The system integrates with the existing player customization:

```typescript
// In ProductDetail.tsx
const availableNamesets = useMemo(() => {
  if (!product) return [];
  return getCompatibleNamesets(
    product.category,
    product.competition,
    product.team,
    product.season
  );
}, [product]);
```

## 💡 Helper Functions

### `getCompatibleNamesets()`
Get all namesets compatible with a product.

```typescript
const namesets = getCompatibleNamesets(
  'ligue-1',                    // category
  ['Champions League'],         // competitions
  'Paris Saint-Germain',       // team
  '2023/24'                    // season
);
// Returns: [{ id: 'ucl-standard', ... }]
```

### `isNamesetAllowedForClub()`
Check if a specific club can use a specific nameset.

```typescript
const allowed = isNamesetAllowedForClub(
  'ucl-standard',    // namesetId
  'psg',            // clubSlug
  '2023/24'         // season
);
// Returns: true or false
```

### `getNamesetForCompetition()`
Get the appropriate nameset for a club/competition combination.

```typescript
const namesetId = getNamesetForCompetition(
  'psg',              // clubSlug
  'Champions League', // competition
  '2023/24',         // season
  'ligue-1'          // category
);
// Returns: 'ucl-standard'
```

## 🧪 Testing

### Test Case 1: PSG Ligue 1 vs Champions League

**PSG Ligue 1 2024/25:**
1. Navigate to PSG Ligue 1 2024/25 product
2. Check available namesets
3. Expected: "Ligue 1 Standard Nameset 2024/25" ✅

**PSG Champions League 2024/25:**
1. Navigate to PSG Champions League 2024/25 product
2. Check available namesets
3. Expected: "UEFA Champions League Nameset" ✅

### Test Case 2: Marseille Competition Change

**Marseille 2023/24 (Champions League season):**
- Ligue 1 match → Ligue 1 2023 font ✅
- Champions League match → Champions League font ✅

**Marseille 2024/25 (Europa League season):**
- Ligue 1 match → Ligue 1 2024 font ✅
- Europa League match → Europa League font ✅
- Champions League match → No CL font available ❌

## 🎨 Price Modifiers

Competition namesets can have price modifiers:

```typescript
{
  id: 'ucl-standard',
  priceModifier: 5, // +€5 compared to base price
}
```

**Result:**
- Base player customization: €20
- With UCL nameset: €20 + €5 = €25

## 📋 Quick Reference

### Most Common Nameset IDs

**League Namesets:**
- `ligue1-standard-2023` - Ligue 1 2023/24
- `ligue1-standard-2024` - Ligue 1 2024/25
- `premier-league-standard` - Premier League
- `la-liga-standard` - La Liga
- `serie-a-standard` - Serie A
- `bundesliga-standard` - Bundesliga

**Competition Namesets:**
- `ucl-standard` - Champions League
- `uel-standard` - Europa League
- `world-cup-standard` - World Cup
- `euro-standard` - Euro Championship

### Club Slugs

Same as patch restrictions:
- `psg` - Paris Saint-Germain
- `marseille` - Olympique Marseille
- `lyon` - Olympique Lyonnais
- `monaco` - AS Monaco
- `arsenal` - Arsenal
- `manchester-city` - Manchester City
- etc.

## 🔧 Maintenance

### Adding a New Season

At the start of each season:

1. Check if league fonts have been updated
2. Update `namesetRestrictions.ts` with new season data
3. Add new nameset type in `namesets.ts` if font changed
4. Test key products

**Example:**

```typescript
// If Ligue 1 updates their font for 2025/26
// Add new nameset type in namesets.ts:
{
  id: 'ligue1-standard-2025',
  name: 'Ligue 1 Standard Nameset 2025/26',
  fontStyle: 'Ligue1-2025',
  // ...
}

// Add restrictions in namesetRestrictions.ts:
'ligue1-standard-2025': {
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2025/26'] },
    { clubSlug: 'marseille', seasons: ['2025/26'] },
    // ... other clubs
  ]
}
```

### Adding a New Club

```typescript
// Add to relevant namesets
'ucl-standard': {
  allowedClubs: [
    // ... existing clubs
    { clubSlug: 'new-club', seasons: ['2024/25'] },
  ]
}
```

## 🚨 Important Notes

### 1. Competition-Specific Fonts Override League Fonts

When a product has multiple competitions:

```typescript
competition: ["League", "Champions League"]
```

The system prioritizes competition-specific fonts (Champions League) over league fonts (Ligue 1).

### 2. Products Need Correct Competition Data

Ensure products have the right competition in their data:

```typescript
// ❌ Wrong: PSG Champions League match with "League" competition
{
  team: "Paris Saint-Germain",
  competition: ["League"], // Wrong!
}

// ✅ Correct: PSG Champions League match
{
  team: "Paris Saint-Germain",
  competition: ["Champions League"], // Correct!
}
```

### 3. Font Updates Between Seasons

If a league updates their font, create a new nameset type:

```typescript
// Don't reuse old IDs for new fonts
// ❌ Bad:
'ligue1-standard': { fontStyle: 'Ligue1-2025' } // Overwrites old font

// ✅ Good:
'ligue1-standard-2025': { fontStyle: 'Ligue1-2025' } // New type
```

## 🎯 Real-World Scenario: PSG Full Season

### PSG 2024/25 Season Products

**1. PSG Ligue 1 Home 2024/25**
```typescript
competition: ["League"]
→ Nameset: ligue1-standard-2024 (Ligue 1 font)
```

**2. PSG Champions League Home 2024/25**
```typescript
competition: ["Champions League"]
→ Nameset: ucl-standard (Champions League font)
```

**3. PSG Training Kit 2024/25**
```typescript
competition: ["League"] // Training kits use league font
→ Nameset: ligue1-standard-2024 (Ligue 1 font)
```

## 📖 Summary

The nameset restrictions system provides:

1. **Competition-Based Fonts** - Different fonts for different competitions
2. **Season-Specific Fonts** - Track font changes over time
3. **Club-Specific Rules** - Control which clubs use which fonts
4. **Automatic Selection** - System chooses correct font based on product data
5. **Easy Configuration** - Single file to manage all restrictions

**Key Files:**
- Configure: `src/data/namesetRestrictions.ts`
- Types: `src/data/namesets.ts`

**Ready to use!** 🚀

