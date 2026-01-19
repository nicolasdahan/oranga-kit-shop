# Patch Restrictions - Examples & Test Cases

## Example 1: Marseille - Champions League to Europa League

### Background
Olympique Marseille finished 3rd in Ligue 1 2022/23, qualifying them for the Champions League 2023/24 season. However, they finished lower in 2023/24, qualifying only for Europa League in 2024/25.

### Configuration

```typescript
// In patchRestrictions.ts

'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2023/24'] }, // ✅ Champions League in 2023/24
    // ... other clubs
  ]
},

'uel-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2024/25'] }, // ✅ Europa League in 2024/25
    // ... other clubs
  ]
}
```

### Test Scenarios

#### Scenario 1: Marseille 2023/24 Home Shirt
**Product Data:**
```typescript
{
  team: "Olympique Marseille",
  season: "2023/24",
  category: "ligue-1",
  competition: ["League", "Champions League"]
}
```

**Expected Result:**
- ✅ Ligue 1 Standard Patch - Available
- ✅ UEFA Champions League Patch - Available
- ❌ UEFA Europa League Patch - Not Available
- ✅ UEFA Champions League Winners Badge - Available (won in 1993)

**Why?**
- Marseille plays in Ligue 1 → Ligue 1 patches compatible
- Marseille qualified for CL in 2023/24 → CL patch allowed
- Marseille didn't qualify for UEL in 2023/24 → UEL patch not allowed
- Marseille won CL historically → Winners badge always available

---

#### Scenario 2: Marseille 2024/25 Away Shirt
**Product Data:**
```typescript
{
  team: "Olympique Marseille",
  season: "2024/25",
  category: "ligue-1",
  competition: ["League", "Europa League"]
}
```

**Expected Result:**
- ✅ Ligue 1 Standard Patch - Available
- ❌ UEFA Champions League Patch - Not Available
- ✅ UEFA Europa League Patch - Available
- ✅ UEFA Champions League Winners Badge - Available (won in 1993)

**Why?**
- Marseille plays in Ligue 1 → Ligue 1 patches compatible
- Marseille didn't qualify for CL in 2024/25 → CL patch not allowed
- Marseille qualified for UEL in 2024/25 → UEL patch allowed
- Historical winner badge is always available (seasons: '*')

---

#### Scenario 3: PSG 2024/25 Home Shirt (Comparison)
**Product Data:**
```typescript
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  category: "ligue-1",
  competition: ["League", "Champions League"]
}
```

**Expected Result:**
- ✅ Ligue 1 Standard Patch - Available
- ✅ UEFA Champions League Patch - Available
- ❌ UEFA Europa League Patch - Not Available

**Why?**
- PSG qualified for Champions League in both 2023/24 and 2024/25
- Configuration: `{ clubSlug: 'psg', seasons: ['2023/24', '2024/25'] }`

---

## Example 2: Manchester City - Champions Badge

### Background
Manchester City won the Premier League in 2023, earning them the gold champions patch for the 2023/24 and 2024/25 seasons.

### Configuration

```typescript
'premier-league-champions': {
  allowedClubs: [
    { clubSlug: 'manchester-city', seasons: ['2023/24', '2024/25'] }
  ]
}
```

### Test Scenarios

#### Scenario 1: Man City 2023/24 - Should Show Champions Patch
**Product:** Manchester City Home 2023/24
**Result:** ✅ Premier League Champions Patch available

#### Scenario 2: Arsenal 2023/24 - Should NOT Show Champions Patch
**Product:** Arsenal Home 2023/24
**Result:** ❌ Premier League Champions Patch not available (they finished 2nd)

---

## Example 3: Historical Winners - Always Available

### Background
Some badges should always be available for clubs that won historic competitions.

### Configuration

```typescript
'ucl-winners': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: '*' }, // Won 1993
    { clubSlug: 'real-madrid', seasons: '*' }, // Multiple wins
    { clubSlug: 'liverpool', seasons: '*' }, // Multiple wins
    { clubSlug: 'manchester-city', seasons: ['2023/24', '2024/25'] }, // Recent winner only
  ]
}
```

### Test Cases

| Club | Won CL? | Seasons Available | Notes |
|------|---------|------------------|-------|
| Real Madrid | Yes (multiple) | All seasons (`'*'`) | All-time record holder |
| Marseille | Yes (1993) | All seasons (`'*'`) | Only French winner |
| Manchester City | Yes (2023) | 2023/24, 2024/25 | Recent winner, limited period |
| Arsenal | No | None | Never won CL |

---

## Example 4: Multiple Seasons Configuration

### Background
Tracking a club across multiple seasons with different competitions.

### Configuration for AC Milan

```typescript
// 2023/24 - Champions League
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'ac-milan', seasons: ['2023/24'] }
  ]
},

// 2024/25 - Europa League
'uel-standard': {
  allowedClubs: [
    { clubSlug: 'ac-milan', seasons: ['2024/25'] }
  ]
}
```

### Season-by-Season Patches

| Season | Competition | Patches Available |
|--------|------------|-------------------|
| 2023/24 | Champions League | Serie A Standard ✅, UCL Standard ✅ |
| 2024/25 | Europa League | Serie A Standard ✅, UEL Standard ✅ |
| 2025/26 | None (example) | Serie A Standard ✅ only |

---

## Example 5: No Restrictions (Default Behavior)

### Background
If a patch is NOT listed in `patchRestrictions.ts`, it's available to all compatible teams.

### Example: Standard League Patches

```typescript
// These patches are NOT in patchRestrictions.ts
// Therefore, they're available to ALL teams in the respective leagues

'premier-league-standard': {
  id: 'premier-league-standard',
  compatibleLeagues: ['premier-league'],
  // No restrictions → all Premier League teams can use it
}

'ligue-1-standard': {
  id: 'ligue-1-standard',
  compatibleLeagues: ['ligue-1'],
  // No restrictions → all Ligue 1 teams can use it
}
```

### Result
- ✅ Any Premier League team, any season → Premier League Standard patch available
- ✅ Any Ligue 1 team, any season → Ligue 1 Standard patch available

---

## Testing Checklist for Marseille Example

Use this checklist to verify the Marseille configuration is working correctly:

### Test 1: Marseille 2023/24 Home
- [ ] Navigate to Marseille 2023/24 Home product page
- [ ] Scroll to "Available Patches" section
- [ ] Verify "UEFA Champions League Patch" is shown
- [ ] Verify "UEFA Europa League Patch" is NOT shown
- [ ] Try selecting the Champions League patch
- [ ] Add to cart and verify patch is included

### Test 2: Marseille 2024/25 Home
- [ ] Navigate to Marseille 2024/25 Home product page
- [ ] Scroll to "Available Patches" section
- [ ] Verify "UEFA Champions League Patch" is NOT shown
- [ ] Verify "UEFA Europa League Patch" is shown
- [ ] Try selecting the Europa League patch
- [ ] Add to cart and verify patch is included

### Test 3: PSG Comparison (Both Seasons)
- [ ] Check PSG 2023/24 - should have Champions League ✅
- [ ] Check PSG 2024/25 - should have Champions League ✅
- [ ] Confirms Marseille restriction is club-specific, not league-wide

### Test 4: Historical Badge
- [ ] Check Marseille any season
- [ ] Verify "UEFA Champions League Winners Badge" is available
- [ ] Confirms wildcard (`'*'`) season works correctly

---

## Common Configuration Patterns

### Pattern 1: Single Season Qualification
```typescript
{ clubSlug: 'club-name', seasons: ['2024/25'] }
```
**Use:** Club qualified for competition in one specific season.

### Pattern 2: Multi-Season Qualification
```typescript
{ clubSlug: 'club-name', seasons: ['2023/24', '2024/25', '2025/26'] }
```
**Use:** Club qualified for multiple consecutive seasons.

### Pattern 3: Historical Achievement
```typescript
{ clubSlug: 'club-name', seasons: '*' }
```
**Use:** Club won a competition in the past, badge always available.

### Pattern 4: Transitioning Between Competitions
```typescript
// Champions League in 2023/24
'ucl-standard': {
  allowedClubs: [{ clubSlug: 'club-name', seasons: ['2023/24'] }]
},

// Europa League in 2024/25
'uel-standard': {
  allowedClubs: [{ clubSlug: 'club-name', seasons: ['2024/25'] }]
}
```
**Use:** Club changes competition between seasons (like Marseille example).

---

## Quick Reference: Marseille Configuration

```typescript
// patchRestrictions.ts

export const patchRestrictions: PatchRestrictionsConfig = {
  'ucl-standard': {
    allowedClubs: [
      { clubSlug: 'marseille', seasons: ['2023/24'] }, // CL in 2023/24 only
      // ... other clubs
    ]
  },
  
  'uel-standard': {
    allowedClubs: [
      { clubSlug: 'marseille', seasons: ['2024/25'] }, // EL in 2024/25 only
      // ... other clubs
    ]
  },
  
  'ucl-winners': {
    allowedClubs: [
      { clubSlug: 'marseille', seasons: '*' }, // Historical winner (1993)
      // ... other clubs
    ]
  },
};
```

This configuration ensures:
1. Marseille 2023/24 products → Champions League patch available ✅
2. Marseille 2024/25 products → Europa League patch available ✅
3. All Marseille products → Champions League Winners badge available ✅
4. No incorrect patches shown ✅

---

## Need to Add a New Club?

1. **Find the club slug** in `src/data/clubs.ts`
2. **Determine which competitions** they qualified for
3. **Update the relevant patch restrictions** in `src/data/patchRestrictions.ts`
4. **Test the product pages** to verify patches appear correctly

Example:
```typescript
// Add Lyon to Europa League 2024/25
'uel-standard': {
  allowedClubs: [
    // ... existing clubs
    { clubSlug: 'lyon', seasons: ['2024/25'] }, // Add this line
  ]
}
```

