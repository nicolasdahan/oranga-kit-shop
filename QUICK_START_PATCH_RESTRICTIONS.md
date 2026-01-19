# Quick Start: Patch Restrictions System

## 🎯 What This System Does

Controls which patches (badges) appear on which products based on:
- **Club** (e.g., Marseille, PSG, Arsenal)
- **Season** (e.g., 2023/24, 2024/25)

## 📍 Where to Configure

**Main File:** `src/data/patchRestrictions.ts`

This is the ONLY file you need to edit to add/change restrictions.

## 🚀 Quick Examples

### Example 1: Allow Champions League Patch for a Club

```typescript
// In patchRestrictions.ts
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'your-club', seasons: ['2024/25'] },
  ]
}
```

### Example 2: Allow Patch for Multiple Seasons

```typescript
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'your-club', seasons: ['2023/24', '2024/25', '2025/26'] },
  ]
}
```

### Example 3: Allow Patch for All Seasons (Historical Badge)

```typescript
'ucl-winners': {
  allowedClubs: [
    { clubSlug: 'your-club', seasons: '*' }, // Wildcard = all seasons
  ]
}
```

## 🏆 Marseille Example (Already Configured)

### The Scenario:
- Marseille → Champions League in **2023/24** ✅
- Marseille → Europa League in **2024/25** ✅

### The Configuration:

```typescript
// In patchRestrictions.ts

'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2023/24'] }, // ← CL in 23/24 only
  ]
},

'uel-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2024/25'] }, // ← EL in 24/25 only
  ]
}
```

### The Result:

| Product | Season | CL Patch | EL Patch |
|---------|--------|----------|----------|
| Marseille Home | 2023/24 | ✅ Shows | ❌ Hidden |
| Marseille Home | 2024/25 | ❌ Hidden | ✅ Shows |

## 📋 Available Patch IDs

Use these IDs in `patchRestrictions.ts`:

### European Competitions:
- `'ucl-standard'` - UEFA Champions League Patch
- `'ucl-winners'` - UEFA Champions League Winners Badge
- `'uel-standard'` - UEFA Europa League Patch

### League Badges:
- `'premier-league-standard'` - Premier League Standard Patch
- `'premier-league-champions'` - Premier League Champions Patch (gold)
- `'la-liga-standard'` - La Liga Standard Patch
- `'la-liga-champions'` - La Liga Champions Patch
- `'serie-a-standard'` - Serie A Standard Patch
- `'serie-a-champions'` - Serie A Scudetto Patch
- `'bundesliga-standard'` - Bundesliga Standard Patch
- `'bundesliga-champions'` - Bundesliga Champions Patch
- `'ligue-1-standard'` - Ligue 1 Standard Patch
- `'ligue-1-champions'` - Ligue 1 Champions Patch

### National Teams:
- `'world-cup-standard'` - FIFA World Cup Patch
- `'euro-standard'` - UEFA Euro Championship Patch
- `'copa-america-standard'` - Copa América Patch

## 🏷️ Club Slugs

Use these slugs in the `clubSlug` field:

### Ligue 1:
- `'marseille'` - Olympique Marseille
- `'psg'` - Paris Saint-Germain
- `'lyon'` - Olympique Lyonnais
- `'monaco'` - AS Monaco

### Premier League:
- `'arsenal'` - Arsenal
- `'chelsea'` - Chelsea
- `'liverpool'` - Liverpool
- `'manchester-united'` - Manchester United
- `'manchester-city'` - Manchester City
- `'tottenham'` - Tottenham Hotspur
- `'newcastle'` - Newcastle United

### La Liga:
- `'barcelona'` - FC Barcelona
- `'real-madrid'` - Real Madrid
- `'atletico-madrid'` - Atlético Madrid

### Serie A:
- `'inter-milan'` - Inter Milan
- `'ac-milan'` - AC Milan
- `'juventus'` - Juventus
- `'as-roma'` - AS Roma
- `'napoli'` - SSC Napoli

### Bundesliga:
- `'bayern-munich'` - Bayern Munich
- `'borussia-dortmund'` - Borussia Dortmund
- `'rb-leipzig'` - RB Leipzig

## 📝 Step-by-Step: Add a Restriction

### Goal: Allow Lyon to use Champions League patch in 2025/26

#### Step 1: Open the file
```bash
src/data/patchRestrictions.ts
```

#### Step 2: Find the patch configuration
```typescript
'ucl-standard': {
  allowedClubs: [
    // ... existing clubs ...
```

#### Step 3: Add your club
```typescript
'ucl-standard': {
  allowedClubs: [
    // ... existing clubs ...
    { clubSlug: 'lyon', seasons: ['2025/26'] }, // ← Add this line
  ]
}
```

#### Step 4: Save and test
Navigate to a Lyon 2025/26 product → Champions League patch should appear ✅

## 🔍 How to Test

### Testing Marseille (Example):

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Test 2023/24 season (Champions League):**
   - Go to catalog
   - Click on "Olympique Marseille Stadium Home Shirt 2023/24"
   - Scroll to "Available Patches"
   - **Expected:** UEFA Champions League Patch ✅

3. **Test 2024/25 season (Europa League):**
   - Go to catalog
   - Click on "Olympique Marseille Stadium Home Shirt 2024/25"
   - Scroll to "Available Patches"
   - **Expected:** UEFA Europa League Patch ✅
   - **Expected:** NO Champions League Patch ❌

## ⚡ Common Tasks

### Task 1: New Season, Same Competition
Club qualified for CL again next season:

```typescript
// Before
{ clubSlug: 'your-club', seasons: ['2024/25'] }

// After
{ clubSlug: 'your-club', seasons: ['2024/25', '2025/26'] }
```

### Task 2: Switch Competition
Club went from CL to EL:

```typescript
// Remove from CL
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'your-club', seasons: ['2023/24'] }, // Only old season
  ]
},

// Add to EL
'uel-standard': {
  allowedClubs: [
    { clubSlug: 'your-club', seasons: ['2024/25'] }, // New season
  ]
}
```

### Task 3: Champions Badge (One Season Only)
Club won the league:

```typescript
'premier-league-champions': {
  allowedClubs: [
    { clubSlug: 'your-club', seasons: ['2024/25'] }, // Wear it next season
  ]
}
```

## 🎨 Visual Flow

```
┌─────────────────────────────────┐
│  User views Marseille 2023/24   │
│  product page                    │
└────────────┬────────────────────┘
             ↓
┌─────────────────────────────────┐
│  System checks:                  │
│  - Team: "Olympique Marseille"  │
│  - Season: "2023/24"            │
│  - Category: "ligue-1"          │
│  - Competition: ["League", "CL"]│
└────────────┬────────────────────┘
             ↓
┌─────────────────────────────────┐
│  Filter patches:                 │
│  1. League match? ✅             │
│  2. Competition match? ✅        │
│  3. Club allowed? ✅             │
│  4. Season allowed? ✅           │
└────────────┬────────────────────┘
             ↓
┌─────────────────────────────────┐
│  Show patches:                   │
│  ✅ Ligue 1 Standard             │
│  ✅ UEFA Champions League        │
│  ✅ UCL Winners Badge (1993)    │
└─────────────────────────────────┘
```

## 🚨 Important Rules

### Rule 1: No Configuration = Available to All
If a patch is NOT in `patchRestrictions.ts`, it's available to ALL compatible clubs.

### Rule 2: Configuration = Restricted
If a patch IS in `patchRestrictions.ts`, ONLY listed clubs can use it.

### Rule 3: Product Must Have Competition Type
Make sure the product has the right competition in its `competition` array:

```typescript
// In products.ts
{
  team: "Olympique Marseille",
  season: "2023/24",
  competition: ["League", "Champions League"], // ← Must include this
}
```

## 📚 More Help

- **Full Guide:** See `PATCH_RESTRICTIONS_GUIDE.md`
- **Examples:** See `PATCH_RESTRICTIONS_EXAMPLES.md`
- **Summary:** See `PATCH_RESTRICTIONS_SUMMARY.md`

## ✅ System Status

The system is **fully implemented and working** with:
- ✅ 25+ clubs pre-configured
- ✅ 5 major leagues covered
- ✅ European competitions configured
- ✅ Marseille example working
- ✅ Full documentation
- ✅ No errors

**Ready to use!** 🎉

---

**Quick Question?** Check the patch ID and club slug lists above, then edit `patchRestrictions.ts`.

