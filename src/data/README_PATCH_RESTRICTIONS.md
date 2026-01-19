# Patch Restrictions - Developer Reference

## File Location
This README is located in `src/data/` alongside the patch restriction configuration files.

## Files in This Directory

### Core Data Files:
- `patches.ts` - Patch definitions and compatibility logic
- `patchRestrictions.ts` - **Main configuration file** for club/season restrictions
- `clubs.ts` - Club definitions with slugs
- `products.ts` - Product catalog
- `players.ts` - Player rosters for customization

### This File:
- `README_PATCH_RESTRICTIONS.md` - Developer reference (you are here)

## Quick Reference

### To Add a Restriction:

Edit `patchRestrictions.ts`:

```typescript
export const patchRestrictions = {
  'patch-id': {
    allowedClubs: [
      { clubSlug: 'club-slug', seasons: ['2024/25'] }
    ]
  }
};
```

### To Check Available Patches (in code):

```typescript
import { getCompatiblePatches } from '@/data/patches';

const patches = getCompatiblePatches(
  category,      // e.g., 'ligue-1'
  competitions,  // e.g., ['League', 'Champions League']
  teamName,      // e.g., 'Olympique Marseille'
  season         // e.g., '2023/24'
);
```

### To Map Team Name to Club Slug:

```typescript
import { getClubSlugFromTeamName } from '@/data/patchRestrictions';

const slug = getClubSlugFromTeamName('Olympique Marseille');
// Returns: 'marseille'
```

## Data Flow

```
Product
  ├─ team: "Olympique Marseille"
  ├─ season: "2023/24"
  ├─ category: "ligue-1"
  └─ competition: ["League", "Champions League"]
         ↓
getCompatiblePatches(category, competitions, team, season)
         ↓
1. Filter by compatibleLeagues & compatibleCompetitions
         ↓
2. getClubSlugFromTeamName(team) → 'marseille'
         ↓
3. isPatchAllowedForClub(patchId, clubSlug, season)
         ↓
4. Check patchRestrictions[patchId]
         ↓
Final filtered patches
```

## Key Functions

### `getCompatiblePatches()`
**Location:** `patches.ts`

**Purpose:** Get all patches compatible with a product

**Parameters:**
- `category` (string) - Product category/league
- `competitions` (string[]) - Competition types
- `teamName` (string, optional) - Team name for restrictions
- `season` (string, optional) - Season for restrictions

**Returns:** `Patch[]` - Filtered array of compatible patches

**Example:**
```typescript
const patches = getCompatiblePatches(
  'ligue-1',
  ['League', 'Champions League'],
  'Olympique Marseille',
  '2023/24'
);
```

---

### `isPatchAllowedForClub()`
**Location:** `patchRestrictions.ts`

**Purpose:** Check if a specific club can use a specific patch in a specific season

**Parameters:**
- `patchId` (string) - Patch identifier
- `clubSlug` (string) - Club slug
- `season` (string) - Season identifier

**Returns:** `boolean` - true if allowed, false if restricted

**Example:**
```typescript
const allowed = isPatchAllowedForClub(
  'ucl-standard',
  'marseille',
  '2023/24'
);
// Returns: true (Marseille qualified for CL in 2023/24)
```

---

### `getAllowedPatchesForClub()`
**Location:** `patchRestrictions.ts`

**Purpose:** Filter an array of patches for a specific club/season

**Parameters:**
- `allPatches` (Patch[]) - Array of patches to filter
- `clubSlug` (string) - Club slug
- `season` (string) - Season identifier

**Returns:** `Patch[]` - Filtered patches

**Example:**
```typescript
const allowed = getAllowedPatchesForClub(
  allPatches,
  'marseille',
  '2024/25'
);
```

---

### `getClubSlugFromTeamName()`
**Location:** `patchRestrictions.ts`

**Purpose:** Convert product team name to club slug

**Parameters:**
- `teamName` (string) - Team name from product

**Returns:** `string` - Club slug

**Example:**
```typescript
const slug = getClubSlugFromTeamName('Olympique Marseille');
// Returns: 'marseille'
```

## Type Definitions

### `PatchRestriction`
```typescript
type PatchRestriction = {
  allowedClubs: Array<{
    clubSlug: string;
    seasons: string[] | '*';
  }>;
};
```

### `PatchRestrictionsConfig`
```typescript
type PatchRestrictionsConfig = {
  [patchId: string]: PatchRestriction;
};
```

### `Patch`
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

## Integration Points

### 1. ProductDetail.tsx
**Usage:** Fetches available patches for display

```typescript
const availablePatches = useMemo(() => {
  if (!product) return [];
  return getCompatiblePatches(
    product.category,
    product.competition,
    product.team,
    product.season
  );
}, [product]);
```

### 2. CartContext.tsx
**Usage:** Stores selected patches in cart

```typescript
type SelectedPatch = {
  patchId: string;
  name: string;
  price: number;
};
```

### 3. Products Data
**Usage:** Products must have correct competition types

```typescript
{
  team: "Olympique Marseille",
  season: "2023/24",
  competition: ["League", "Champions League"], // Required
}
```

## Configuration Best Practices

### 1. Use Consistent Season Format
✅ `'2023/24'`, `'2024/25'`, `'2025/26'`
❌ `'2023-24'`, `'23/24'`, `'2023'`

### 2. Use Correct Club Slugs
Always check `clubs.ts` for the exact slug:
```typescript
// clubs.ts
{ slug: 'marseille' } // Use this exact string
```

### 3. Use Wildcard for Historical Badges
```typescript
{ clubSlug: 'marseille', seasons: '*' } // All-time achievement
```

### 4. Document Your Changes
Add comments for clarity:
```typescript
{ clubSlug: 'marseille', seasons: ['2023/24'] }, // Qualified for CL
```

## Testing

### Manual Testing:
1. Navigate to product page
2. Check "Available Patches" section
3. Verify expected patches appear/don't appear

### Console Testing:
```javascript
// In browser console
import { getCompatiblePatches } from '@/data/patches';

getCompatiblePatches(
  'ligue-1',
  ['League', 'Champions League'],
  'Olympique Marseille',
  '2023/24'
);
```

## Common Patterns

### Pattern 1: Single Season Qualification
```typescript
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'club-name', seasons: ['2024/25'] }
  ]
}
```

### Pattern 2: Multi-Season Qualification
```typescript
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'club-name', seasons: ['2023/24', '2024/25', '2025/26'] }
  ]
}
```

### Pattern 3: Historical Achievement
```typescript
'ucl-winners': {
  allowedClubs: [
    { clubSlug: 'club-name', seasons: '*' }
  ]
}
```

### Pattern 4: Competition Switch
```typescript
// Champions League in 2023/24
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'club-name', seasons: ['2023/24'] }
  ]
},

// Europa League in 2024/25
'uel-standard': {
  allowedClubs: [
    { clubSlug: 'club-name', seasons: ['2024/25'] }
  ]
}
```

## Troubleshooting

### Patch Not Showing:
1. Check `patchRestrictions.ts` - is club listed?
2. Check season is in `seasons` array
3. Check product has correct `competition` array
4. Check team name maps to correct club slug

### Patch Showing When It Shouldn't:
1. Is patch missing from `patchRestrictions.ts`? (unrestricted)
2. Is club incorrectly added to restrictions?
3. Is season incorrectly specified?

### Club Slug Not Found:
1. Check `clubs.ts` for exact slug
2. Update `slugMap` in `getClubSlugFromTeamName()`

## Related Documentation

- **User Guides:**
  - `QUICK_START_PATCH_RESTRICTIONS.md` - Quick start guide
  - `PATCH_RESTRICTIONS_EXAMPLES.md` - Examples and test cases
  - `PATCH_RESTRICTIONS_GUIDE.md` - Complete documentation
  - `PATCH_RESTRICTIONS_SUMMARY.md` - Implementation summary

- **Code Files:**
  - `patches.ts` - Patch definitions
  - `patchRestrictions.ts` - Restriction configuration
  - `clubs.ts` - Club data
  - `products.ts` - Product data

## Version History

- **v1.0** (2026-01-19) - Initial implementation
  - Season-based restrictions
  - Club-specific rules
  - Wildcard support for historical badges
  - Pre-configured 25+ clubs across 5 leagues

## Maintenance

### Adding New Season:
1. Review UEFA/league qualifications
2. Update `patchRestrictions.ts` with new season
3. Update product `competition` arrays if needed
4. Test key products

### Adding New Club:
1. Find club slug in `clubs.ts`
2. Add to relevant patches in `patchRestrictions.ts`
3. Add to `slugMap` if team name differs
4. Test the club's products

### Adding New Patch:
1. Define patch in `patches.ts`
2. Add restrictions in `patchRestrictions.ts` (if needed)
3. Add to this documentation
4. Test with relevant products

## Support

For questions or issues:
1. Check documentation in root directory
2. Review examples in `PATCH_RESTRICTIONS_EXAMPLES.md`
3. Check console for errors
4. Verify data in `patchRestrictions.ts`

