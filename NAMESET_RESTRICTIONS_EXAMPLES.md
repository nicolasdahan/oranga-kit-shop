# Nameset Restrictions - Examples & Test Cases

## 🎯 Main Use Case: PSG - League vs Champions League Fonts

### Background

Paris Saint-Germain (PSG) plays in two main competitions:
1. **Ligue 1** (Domestic League) - Uses Ligue 1 official font
2. **UEFA Champions League** - Uses UEFA Champions League official font

These require different fonts/styles for player names and numbers.

### Configuration

```typescript
// In namesetRestrictions.ts

// Ligue 1 font for domestic matches
'ligue1-standard-2024': {
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2024/25'] },
  ]
},

// Champions League font for UEFA matches
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2023/24', '2024/25'] },
  ]
}
```

### Test Scenarios

#### Scenario 1: PSG Ligue 1 Home 2024/25

**Product Data:**
```typescript
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  category: "ligue-1",
  competition: ["League"]
}
```

**Expected Namesets:**
- ✅ Ligue 1 Standard Nameset 2024/25
  - Font: `Ligue1-2024`
  - Price modifier: €0
  - Description: "Official Ligue 1 font used for domestic league matches"

**Why?**
- Product has `competition: ["League"]`
- PSG is configured for `ligue1-standard-2024` in 2024/25 season
- Correct font for domestic league matches ✅

---

#### Scenario 2: PSG Champions League Home 2024/25

**Product Data:**
```typescript
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  category: "ligue-1",
  competition: ["Champions League"]
}
```

**Expected Namesets:**
- ✅ UEFA Champions League Nameset
  - Font: `UCL-Standard`
  - Price modifier: +€5
  - Description: "Official UEFA Champions League font - used by all clubs in UCL"

**Why?**
- Product has `competition: ["Champions League"]`
- PSG is configured for `ucl-standard` in 2024/25 season
- UEFA mandates this specific font for all Champions League matches ✅

---

## Example 2: Marseille - Competition Change

### Background

Olympique Marseille's European competition changed:
- **2023/24 season**: Champions League ⚽🏆
- **2024/25 season**: Europa League ⚽🏆

### Configuration

```typescript
// Champions League font in 2023/24
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2023/24'] }, // Only 2023/24
  ]
},

// Europa League font in 2024/25
'uel-standard': {
  allowedClubs: [
    { clubSlug: 'marseille', seasons: ['2024/25'] }, // Only 2024/25
  ]
},

// Ligue 1 fonts for both seasons
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

### Test Scenarios

#### Scenario 1: Marseille Ligue 1 2023/24

**Product:**
```typescript
{
  team: "Olympique Marseille",
  season: "2023/24",
  competition: ["League"]
}
```

**Expected:** Ligue 1 Standard Nameset 2023 ✅

---

#### Scenario 2: Marseille Champions League 2023/24

**Product:**
```typescript
{
  team: "Olympique Marseille",
  season: "2023/24",
  competition: ["Champions League"]
}
```

**Expected:** UEFA Champions League Nameset ✅

---

#### Scenario 3: Marseille Ligue 1 2024/25

**Product:**
```typescript
{
  team: "Olympique Marseille",
  season: "2024/25",
  competition: ["League"]
}
```

**Expected:** Ligue 1 Standard Nameset 2024 ✅  
**Note:** Updated font for new season

---

#### Scenario 4: Marseille Europa League 2024/25

**Product:**
```typescript
{
  team: "Olympique Marseille",
  season: "2024/25",
  competition: ["Europa League"]
}
```

**Expected:** UEFA Europa League Nameset ✅  
**Not Available:** UEFA Champions League Nameset ❌

---

## Example 3: Multi-Competition Product

### Background

Some products can be used in multiple competitions. The system must show namesets for all relevant competitions.

### Scenario: PSG 2024/25 Kit (Both League & Champions League)

**Product Data:**
```typescript
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  competition: ["League", "Champions League"] // Both!
}
```

**Expected Namesets:**
- ✅ Ligue 1 Standard Nameset 2024/25 (for league matches)
- ✅ UEFA Champions League Nameset (for UCL matches)

**User Choice:**
Customer can select which nameset they want based on which competition they prefer.

---

## Example 4: Font Update Between Seasons

### Background

Leagues sometimes update their official fonts. The system tracks different fonts for different seasons.

### Ligue 1 Font Evolution

**2023/24 Season:**
```typescript
'ligue1-standard-2023': {
  fontStyle: 'Ligue1-2023',
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2023/24'] },
  ]
}
```

**2024/25 Season (Updated Font):**
```typescript
'ligue1-standard-2024': {
  fontStyle: 'Ligue1-2024', // New font!
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2024/25'] },
  ]
}
```

### Test Scenarios

#### PSG 2023/24 Product
**Expected:** Old Ligue 1 font (`Ligue1-2023`) ✅

#### PSG 2024/25 Product
**Expected:** New Ligue 1 font (`Ligue1-2024`) ✅

**Result:** Authentic to the actual season! ✅

---

## Example 5: Price Modifiers

### Background

Competition namesets often cost more due to licensing and authenticity.

### Pricing Structure

**League Namesets (Base Price):**
```typescript
{
  id: 'ligue1-standard-2024',
  priceModifier: 0 // No additional cost
}
```
- Customer pays: €20 (base player customization)

**Champions League Nameset (Premium):**
```typescript
{
  id: 'ucl-standard',
  priceModifier: 5 // +€5
}
```
- Customer pays: €20 + €5 = €25

**Europa League Nameset (Premium):**
```typescript
{
  id: 'uel-standard',
  priceModifier: 5 // +€5
}
```
- Customer pays: €20 + €5 = €25

---

## Example 6: All-Season Access

### Background

Some fonts (usually league fonts) are available for all seasons since the club always plays in that league.

### Configuration

```typescript
'premier-league-standard': {
  allowedClubs: [
    { clubSlug: 'arsenal', seasons: '*' }, // All seasons
  ]
}
```

**Result:**
- Arsenal products from ANY season → Premier League font available ✅
- No need to update configuration each season ✅

---

## Testing Checklist

### PSG Test Suite

| Product | Season | Competition | Expected Nameset | Font |
|---------|--------|-------------|------------------|------|
| PSG Home | 2024/25 | League | Ligue 1 2024 | Ligue1-2024 |
| PSG Home | 2024/25 | Champions League | UCL Standard | UCL-Standard |
| PSG Away | 2024/25 | League | Ligue 1 2024 | Ligue1-2024 |
| PSG Away | 2024/25 | Champions League | UCL Standard | UCL-Standard |
| PSG Training | 2024/25 | League | Ligue 1 2024 | Ligue1-2024 |

### Marseille Test Suite

| Product | Season | Competition | Expected Nameset | Available? |
|---------|--------|-------------|------------------|------------|
| Marseille Home | 2023/24 | League | Ligue 1 2023 | ✅ |
| Marseille Home | 2023/24 | Champions League | UCL Standard | ✅ |
| Marseille Home | 2024/25 | League | Ligue 1 2024 | ✅ |
| Marseille Home | 2024/25 | Europa League | UEL Standard | ✅ |
| Marseille Home | 2024/25 | Champions League | UCL Standard | ❌ (not qualified) |

---

## Configuration Patterns

### Pattern 1: Single Season, Single Competition

```typescript
'nameset-id': {
  allowedClubs: [
    { clubSlug: 'club-name', seasons: ['2024/25'] }
  ]
}
```

**Use Case:** Club qualified for competition in one specific season

---

### Pattern 2: Multiple Seasons, Same Competition

```typescript
'nameset-id': {
  allowedClubs: [
    { clubSlug: 'club-name', seasons: ['2023/24', '2024/25', '2025/26'] }
  ]
}
```

**Use Case:** Club consistently qualified for competition over multiple seasons

---

### Pattern 3: All Seasons (Wildcard)

```typescript
'nameset-id': {
  allowedClubs: [
    { clubSlug: 'club-name', seasons: '*' }
  ]
}
```

**Use Case:** League font that doesn't change, always available

---

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

**Use Case:** Club changes European competition between seasons

---

## Real-World Test: Full PSG Season 2024/25

### Products to Test

**1. PSG Ligue 1 Home 2024/25**
- Competition: `["League"]`
- Expected: Ligue 1 Standard 2024 ✅
- Font: `Ligue1-2024`
- Price: €20

**2. PSG Ligue 1 Away 2024/25**
- Competition: `["League"]`
- Expected: Ligue 1 Standard 2024 ✅
- Font: `Ligue1-2024`
- Price: €20

**3. PSG Champions League Home 2024/25**
- Competition: `["Champions League"]`
- Expected: UEFA Champions League ✅
- Font: `UCL-Standard`
- Price: €25 (+€5)

**4. PSG Champions League Away 2024/25**
- Competition: `["Champions League"]`
- Expected: UEFA Champions League ✅
- Font: `UCL-Standard`
- Price: €25 (+€5)

**5. PSG Third Kit 2024/25** (Used in both competitions)
- Competition: `["League", "Champions League"]`
- Expected: Both namesets available ✅
  - Ligue 1 Standard 2024
  - UEFA Champions League
- Customer chooses which one to use

---

## Visual Comparison

### PSG Player "MBAPPÉ #7"

**Ligue 1 Font:**
```
M B A P P É
    7
```
- Font: Bold, modern Ligue 1 style
- Color: Typically matches kit design
- Price: €20

**Champions League Font:**
```
M B A P P É
    7
```
- Font: UEFA official UCL style
- Color: Often white/silver (UEFA standard)
- Price: €25 (+€5)

---

## Troubleshooting

### Problem: Nameset Not Showing

**Check:**
1. ✅ Is product competition correct? (e.g., "Champions League" not just "League")
2. ✅ Is club added to nameset restrictions?
3. ✅ Is season included in allowed seasons?
4. ✅ Is club slug correct?

**Example:**
```typescript
// ❌ Wrong: Missing PSG from UCL nameset
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'arsenal', seasons: ['2024/25'] },
    // PSG is missing!
  ]
}

// ✅ Correct:
'ucl-standard': {
  allowedClubs: [
    { clubSlug: 'psg', seasons: ['2024/25'] }, // Added!
    { clubSlug: 'arsenal', seasons: ['2024/25'] },
  ]
}
```

---

### Problem: Wrong Font Showing

**Check:**
- Product's `competition` array matches the nameset's `compatibleCompetitions`

**Example:**
```typescript
// ❌ Wrong: Product has "League" but expecting CL font
{
  competition: ["League"], // Wrong!
}

// ✅ Correct: Product has "Champions League"
{
  competition: ["Champions League"], // Correct!
}
```

---

## Summary

The nameset restrictions system handles:

1. **Competition-Specific Fonts** - Different fonts for League vs Champions League
2. **Club-Specific Rules** - PSG gets UCL font, another club might not
3. **Season-Specific Rules** - Marseille had UCL in 2023/24, UEL in 2024/25
4. **Font Updates** - Track league font changes over seasons
5. **Price Modifiers** - Competition fonts cost more

**Key Example: PSG**
- League match → Ligue 1 font (€20)
- Champions League match → Champions League font (€25)
- System handles this automatically based on product's competition ✅

---

**Need More Help?** See [`NAMESET_RESTRICTIONS_GUIDE.md`](NAMESET_RESTRICTIONS_GUIDE.md) for complete documentation.

