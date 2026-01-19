# Patch Restrictions System - Configuration Guide

## Overview

The patch restrictions system allows you to control which patches (badges) are available for specific clubs in specific seasons. This is useful for ensuring accuracy in your product catalog, as clubs qualify for different competitions (Champions League, Europa League, etc.) in different seasons.

## Key Concepts

### 1. **Basic Compatibility** (patches.ts)
Every patch has basic compatibility requirements:
- `compatibleLeagues`: Which leagues the patch can appear in (e.g., 'premier-league', 'ligue-1')
- `compatibleCompetitions`: Which competition types (e.g., 'Champions League', 'League')

### 2. **Club & Season Restrictions** (patchRestrictions.ts)
On top of basic compatibility, you can define specific restrictions:
- Which clubs can use a patch
- In which seasons those clubs can use it

## How It Works

### Example: Marseille and the Champions League Patch

**Scenario**: Marseille qualified for Champions League in 2023/24 but not in 2024/25 (Europa League instead).

**Configuration in `patchRestrictions.ts`**:

```typescript
'ucl-standard': {
  allowedClubs: [
    // ... other clubs ...
    { clubSlug: 'marseille', seasons: ['2023/24'] }, // Only 2023/24
    { clubSlug: 'psg', seasons: ['2023/24', '2024/25'] }, // Both seasons
  ]
},

'uel-standard': {
  allowedClubs: [
    // ... other clubs ...
    { clubSlug: 'marseille', seasons: ['2024/25'] }, // Europa in 2024/25
  ]
}
```

### Result:
- When viewing a **Marseille 2023/24** shirt → Champions League patch is available ✅
- When viewing a **Marseille 2024/25** shirt → Champions League patch is NOT available ❌
- When viewing a **Marseille 2024/25** shirt → Europa League patch is available ✅

## Configuration File Structure

### Location
`src/data/patchRestrictions.ts`

### Structure

```typescript
export const patchRestrictions: PatchRestrictionsConfig = {
  'patch-id': {
    allowedClubs: [
      { clubSlug: 'club-slug', seasons: ['2023/24', '2024/25'] },
      { clubSlug: 'another-club', seasons: '*' }, // All seasons
    ]
  }
};
```

### Key Fields

#### `patchId` (key)
The unique identifier of the patch (must match the ID in `patches.ts`)
- Example: `'ucl-standard'`, `'premier-league-champions'`

#### `allowedClubs`
An array of club eligibility rules

#### `clubSlug`
The slug identifier for the club (must match the slug in `clubs.ts`)
- Example: `'marseille'`, `'psg'`, `'manchester-city'`

#### `seasons`
Either:
- **Array of seasons**: `['2023/24', '2024/25']` - Only these specific seasons
- **Wildcard**: `'*'` - All seasons (useful for historical winners)

## Important Rules

### 1. **Patch Not Listed = Available to All**
If a patch is NOT in `patchRestrictions.ts`, it's available to all compatible clubs in all seasons.

### 2. **Patch Listed = Restricted**
If a patch IS in `patchRestrictions.ts`, ONLY the specified clubs in the specified seasons can use it.

### 3. **Basic Compatibility Still Applies**
Restrictions are applied AFTER basic compatibility checks. A patch must first match the league and competition type.

## Common Use Cases

### Use Case 1: Current Season Competition Qualification

**Scenario**: Club qualified for Champions League this season

```typescript
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'arsenal', seasons: ['2024/25'] }
  ]
}
```

### Use Case 2: Historical Winners Badge

**Scenario**: Only clubs that have won the Champions League can wear the winners badge

```typescript
'ucl-winners': {
  allowedClubs: [
    { clubSlug: 'real-madrid', seasons: '*' }, // All seasons
    { clubSlug: 'manchester-city', seasons: ['2023/24', '2024/25'] }, // Recent winner
  ]
}
```

### Use Case 3: League Champions Patch

**Scenario**: Only the reigning champion wears the gold badge

```typescript
'premier-league-champions': {
  allowedClubs: [
    { clubSlug: 'manchester-city', seasons: ['2023/24', '2024/25'] }, // Current champion
  ]
}
```

### Use Case 4: Relegation/Promotion

**Scenario**: Club was in Premier League in 2023/24 but relegated to Championship in 2024/25

```typescript
'premier-league-standard': {
  allowedClubs: [
    { clubSlug: 'relegated-club', seasons: ['2023/24'] } // Only when they were in PL
  ]
}
```

## Step-by-Step: Adding a New Restriction

### Example: Restrict UCL Patch for a New Season

**Goal**: Configure Champions League patches for the 2025/26 season

#### Step 1: Identify the Patch ID
Check `src/data/patches.ts` for the patch ID:
```typescript
id: 'ucl-standard'
```

#### Step 2: Identify Club Slugs
Check `src/data/clubs.ts` for club slugs:
```typescript
{ slug: 'barcelona' }
{ slug: 'bayern-munich' }
```

#### Step 3: Add/Update Restriction
Edit `src/data/patchRestrictions.ts`:

```typescript
'ucl-standard': {
  allowedClubs: [
    // ... existing clubs ...
    { clubSlug: 'barcelona', seasons: ['2023/24', '2024/25', '2025/26'] },
    { clubSlug: 'bayern-munich', seasons: ['2023/24', '2024/25', '2025/26'] },
  ]
}
```

#### Step 4: Test
View a product with:
- Team: Barcelona
- Season: 2025/26
- Should show UCL patch ✅

View a product with:
- Team: Marseille (if not added for 2025/26)
- Season: 2025/26
- Should NOT show UCL patch ❌

## Team Name to Club Slug Mapping

The system includes a mapping function `getClubSlugFromTeamName()` that converts product team names to club slugs.

### Current Mappings

| Team Name (in products) | Club Slug |
|------------------------|-----------|
| Olympique Marseille | marseille |
| Paris Saint-Germain | psg |
| Olympique Lyonnais | lyon |
| AS Monaco | monaco |
| Arsenal | arsenal |
| Manchester United | manchester-united |
| Manchester City | manchester-city |
| FC Barcelona | barcelona |
| Real Madrid | real-madrid |
| Inter Milan | inter-milan |
| AC Milan | ac-milan |
| ... | ... |

### Adding New Mappings

If you add new clubs, update the `slugMap` in `patchRestrictions.ts`:

```typescript
const slugMap: { [key: string]: string } = {
  'New Club Name': 'new-club-slug',
  // ... existing mappings ...
};
```

## Testing Your Configuration

### Manual Testing Checklist

1. **Navigate to a product page** (e.g., Marseille 2023/24 shirt)
2. **Check available patches** in the customization section
3. **Verify expected patches appear/don't appear**
4. **Try different seasons** of the same club
5. **Compare with real-world competition qualifications**

### Test Cases for Marseille

| Product | Season | Should Show UCL? | Should Show UEL? |
|---------|--------|------------------|------------------|
| Marseille Home | 2023/24 | ✅ Yes | ❌ No |
| Marseille Home | 2024/25 | ❌ No | ✅ Yes |
| Marseille Away | 2023/24 | ✅ Yes | ❌ No |
| PSG Home | 2023/24 | ✅ Yes | ❌ No |
| PSG Home | 2024/25 | ✅ Yes | ❌ No |

## Maintenance

### Season Updates

At the start of each season:

1. **Check competition qualifications** (UEFA, league tables)
2. **Update `patchRestrictions.ts`** with new season data
3. **Remove old seasons** if products are no longer sold
4. **Test key products** to verify accuracy

### Example Season Update

```typescript
// Before (2024/25 season)
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2023/24'] },
  ]
}

// After (2025/26 season update - Marseille qualified again)
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2023/24', '2025/26'] },
  ]
}
```

## Advanced Features

### Wildcard Seasons

Use `'*'` for badges that should always be available (like historical achievements):

```typescript
'ucl-winners': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: '*' }, // Won in 1993, always wearable
  ]
}
```

### Multiple Competition Types

A club can have different patches for different seasons:

```typescript
// Champions League in 2023/24
'ucl-standard': {
  allowedClubs: [{ clubSlug: 'club-x', seasons: ['2023/24'] }]
}

// Europa League in 2024/25
'uel-standard': {
  allowedClubs: [{ clubSlug: 'club-x', seasons: ['2024/25'] }]
}

// No European competition in 2025/26
// (No entry = no European patches available)
```

## Troubleshooting

### Problem: Patch Not Showing Up

**Check:**
1. ✅ Is the patch in `patches.ts`?
2. ✅ Does the patch have the correct `compatibleLeagues` and `compatibleCompetitions`?
3. ✅ Is the club added to `patchRestrictions.ts` for this patch?
4. ✅ Is the season included in the `seasons` array?
5. ✅ Is the team name correctly mapped to club slug?

### Problem: Patch Showing When It Shouldn't

**Check:**
1. ❌ Is the patch missing from `patchRestrictions.ts`? (If not listed, it's available to all)
2. ❌ Does the restriction have the wrong season?
3. ❌ Is the club slug spelled incorrectly?

### Problem: Wrong Club Slug

If team name → club slug mapping is wrong, update `getClubSlugFromTeamName()`:

```typescript
const slugMap: { [key: string]: string } = {
  'Team Name in Product': 'correct-club-slug',
};
```

## File References

### Core Files
- **Patch Definitions**: `src/data/patches.ts`
- **Restrictions Config**: `src/data/patchRestrictions.ts`
- **Club Definitions**: `src/data/clubs.ts`
- **Product Definitions**: `src/data/products.ts`

### UI Files
- **Product Detail Page**: `src/pages/ProductDetail.tsx` (where patches are displayed)

## Summary

The patch restrictions system provides fine-grained control over which badges appear on which products. By combining:
1. **Basic compatibility** (league + competition type)
2. **Club restrictions** (which clubs)
3. **Season restrictions** (which seasons)

You can ensure your catalog accurately reflects real-world football competition qualifications and historical achievements.

---

**Need Help?** Check the examples in `patchRestrictions.ts` or review this guide for common use cases.

