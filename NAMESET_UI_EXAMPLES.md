# Nameset UI Examples - How It Appears to Customers

## 🎨 Visual Examples

This document shows how customers will see the distinction between league and European namesets on product pages.

---

## Example 1: PSG Ligue 1 2024/25 (League Only)

### Product Configuration:
```typescript
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  competition: ["League"]
}
```

### UI Appearance:

```
┌──────────────────────────────────────────────────────────────────┐
│ 🏟️ Paris Saint-Germain Home Shirt 2024/25                        │
│                                                                   │
│ Season: 2024/25                                                   │
│                                                                   │
│ ┌────────────────────────────────────────────────────────────┐  │
│ │ 📋 Customization Options                                    │  │
│ ├────────────────────────────────────────────────────────────┤  │
│ │                                                              │  │
│ │ Official Player Name & Number                         +€20  │  │
│ │                                                              │  │
│ │ Select an official player for this team                     │  │
│ │ ┌──────────────────────────────────┐                        │  │
│ │ │ Choose a player (optional) ▼    │                        │  │
│ │ └──────────────────────────────────┘                        │  │
│ │                                                              │  │
│ │ [Player selected: MBAPPÉ #7]                                │  │
│ │                                                              │  │
│ │ ─────────────────────────────────────────────────────────  │  │
│ │                                                              │  │
│ │ 📝 Font Style                                               │  │
│ │                                                              │  │
│ │ ┌──────────────────────────────────────────────────────┐   │  │
│ │ │ ◉ Ligue 1 Standard Nameset 2024/25    [League] Included│  │
│ │ │   Official Ligue 1 font for domestic league matches    │  │
│ │ │   Font: Ligue1-2024                                     │  │
│ │ └──────────────────────────────────────────────────────┘   │  │
│ │                                                              │  │
│ │ ✓ Font style selected                                       │  │
│ │                                                              │  │
│ │ Official player names and numbers are printed using         │  │
│ │ authentic fonts and materials.                              │  │
│ └──────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Key Points:**
- ✅ Only **ONE** nameset available (Ligue 1)
- ✅ Badge shows **"League"**
- ✅ Price: **Included** (no extra cost)
- ✅ No selection needed (auto-selected)

---

## Example 2: PSG Champions League 2024/25 (European Only)

### Product Configuration:
```typescript
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  competition: ["Champions League"]
}
```

### UI Appearance:

```
┌──────────────────────────────────────────────────────────────────┐
│ 🏆 Paris Saint-Germain Champions League Home Shirt 2024/25       │
│                                                                   │
│ Season: 2024/25 • Competition: Champions League                  │
│                                                                   │
│ ┌────────────────────────────────────────────────────────────┐  │
│ │ 📋 Customization Options                                    │  │
│ ├────────────────────────────────────────────────────────────┤  │
│ │                                                              │  │
│ │ Official Player Name & Number                         +€25  │  │
│ │                                                              │  │
│ │ Select an official player for this team                     │  │
│ │ ┌──────────────────────────────────┐                        │  │
│ │ │ Choose a player (optional) ▼    │                        │  │
│ │ └──────────────────────────────────┘                        │  │
│ │                                                              │  │
│ │ [Player selected: MBAPPÉ #7]                                │  │
│ │                                                              │  │
│ │ ─────────────────────────────────────────────────────────  │  │
│ │                                                              │  │
│ │ 📝 Font Style                                               │  │
│ │                                                              │  │
│ │ ┌──────────────────────────────────────────────────────┐   │  │
│ │ │ ◉ UEFA Champions League Nameset  [European]    +€5   │  │
│ │ │   Official UEFA Champions League font used in          │  │
│ │ │   European competition                                  │  │
│ │ │   Font: UCL-Standard                                    │  │
│ │ └──────────────────────────────────────────────────────┘   │  │
│ │                                                              │  │
│ │ ✓ Font style selected                                       │  │
│ │                                                              │  │
│ │ Official player names and numbers are printed using         │  │
│ │ authentic fonts and materials.                              │  │
│ └──────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Key Points:**
- ✅ Only **ONE** nameset available (Champions League)
- ✅ Badge shows **"European"** in blue
- ✅ Price: **+€5** (premium European font)
- ✅ Total: €20 (base) + €5 = **€25**

---

## Example 3: PSG Third Kit 2024/25 (Both Competitions) ⭐

### Product Configuration:
```typescript
{
  team: "Paris Saint-Germain",
  season: "2024/25",
  competition: ["League", "Champions League"]
}
```

### UI Appearance:

```
┌──────────────────────────────────────────────────────────────────┐
│ ⚽ Paris Saint-Germain Third Shirt 2024/25                        │
│                                                                   │
│ Season: 2024/25 • Competitions: League, Champions League         │
│                                                                   │
│ ┌────────────────────────────────────────────────────────────┐  │
│ │ 📋 Customization Options                                    │  │
│ ├────────────────────────────────────────────────────────────┤  │
│ │                                                              │  │
│ │ Official Player Name & Number                         +€20  │  │
│ │                                                              │  │
│ │ Select an official player for this team                     │  │
│ │ ┌──────────────────────────────────┐                        │  │
│ │ │ MBAPPÉ #7 ▼                      │                        │  │
│ │ └──────────────────────────────────┘                        │  │
│ │                                                              │  │
│ │ [Player: MBAPPÉ • Number 7 • Forward]                       │  │
│ │                                                              │  │
│ │ ─────────────────────────────────────────────────────────  │  │
│ │                                                              │  │
│ │ 📝 Font Style (Choose one)                                  │  │
│ │                                                              │  │
│ │ ┌──────────────────────────────────────────────────────┐   │  │
│ │ │ ◉ Ligue 1 Standard Nameset 2024/25    [League] Included│  │
│ │ │   Official Ligue 1 font for domestic league matches    │  │
│ │ │   Font: Ligue1-2024                                     │  │
│ │ └──────────────────────────────────────────────────────┘   │  │
│ │                                                              │  │
│ │ ┌──────────────────────────────────────────────────────┐   │  │
│ │ │ ○ UEFA Champions League Nameset  [European]    +€5   │  │
│ │ │   Official UEFA Champions League font used in          │  │
│ │ │   European competition                                  │  │
│ │ │   Font: UCL-Standard                                    │  │
│ │ └──────────────────────────────────────────────────────┘   │  │
│ │                                                              │  │
│ │ ⚠️ Please select a font style                               │  │
│ │                                                              │  │
│ │ Official player names and numbers are printed using         │  │
│ │ authentic fonts and materials. Different fonts are used     │  │
│ │ for league and European competitions.                       │  │
│ └──────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Key Points:**
- ✅ **TWO** namesets available (customer chooses)
- ✅ Clear distinction:
  - **Ligue 1**: Badge "League" + Included
  - **Champions League**: Badge "European" + +€5
- ✅ Warning if no selection made
- ✅ Price updates based on selection
- ⭐ **This is the key scenario showing the distinction!**

---

## Example 4: Marseille 2023/24 (Champions League Season)

### Product Configuration:
```typescript
{
  team: "Olympique Marseille",
  season: "2023/24",
  competition: ["League", "Champions League"]
}
```

### UI Appearance:

```
┌──────────────────────────────────────────────────────────────────┐
│ ⚪ Olympique Marseille Home Shirt 2023/24                         │
│                                                                   │
│ 📝 Font Style (Choose one)                                       │
│                                                                   │
│ ┌──────────────────────────────────────────────────────────┐    │
│ │ ◉ Ligue 1 Standard Nameset 2023    [League] Included    │    │
│ │   Official Ligue 1 font for domestic league matches       │    │
│ │   Font: Ligue1-2023                                        │    │
│ └──────────────────────────────────────────────────────────┘    │
│                                                                   │
│ ┌──────────────────────────────────────────────────────────┐    │
│ │ ○ UEFA Champions League Nameset  [European]    +€5      │    │
│ │   Official UEFA Champions League font used in             │    │
│ │   European competition                                     │    │
│ │   Font: UCL-Standard                                       │    │
│ └──────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
```

---

## Example 5: Marseille 2024/25 (Europa League Season)

### Product Configuration:
```typescript
{
  team: "Olympique Marseille",
  season: "2024/25",
  competition: ["League", "Europa League"]
}
```

### UI Appearance:

```
┌──────────────────────────────────────────────────────────────────┐
│ ⚪ Olympique Marseille Home Shirt 2024/25                         │
│                                                                   │
│ 📝 Font Style (Choose one)                                       │
│                                                                   │
│ ┌──────────────────────────────────────────────────────────┐    │
│ │ ◉ Ligue 1 Standard Nameset 2024    [League] Included    │    │
│ │   Official Ligue 1 font for domestic league matches       │    │
│ │   Font: Ligue1-2024                                        │    │
│ └──────────────────────────────────────────────────────────┘    │
│                                                                   │
│ ┌──────────────────────────────────────────────────────────┐    │
│ │ ○ UEFA Europa League Nameset  [European]    +€5          │    │
│ │   Official UEFA Europa League font                         │    │
│ │   Font: UEL-Standard                                       │    │
│ └──────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
```

**Key Difference:**
- ❌ **No Champions League font** in 2024/25 (Marseille not qualified)
- ✅ **Europa League font** instead

---

## Visual Badges Explanation

### League Badge
```
┌─────────┐
│ League  │  ← Gray/Neutral color
└─────────┘
```
- Used for: Domestic league fonts (Ligue 1, Premier League, etc.)
- Price: Usually included (€0)

### European Badge
```
┌───────────┐
│ European  │  ← Blue color (UEFA colors)
└───────────┘
```
- Used for: European competition fonts (Champions League, Europa League)
- Price: Usually +€5 premium

---

## Price Calculation Examples

### Example 1: League Font
```
Player customization: €20
Font: Ligue 1 Standard (€0)
─────────────────────────────
Total: €20
```

### Example 2: Champions League Font
```
Player customization: €20
Font: Champions League (+€5)
─────────────────────────────
Total: €25
```

### Example 3: With Patches
```
Base product: €94.99
Player: MBAPPÉ #7: €20
Font: Champions League: +€5
Patch: Champions League badge: €10
─────────────────────────────────────
Total: €129.99
```

---

## Mobile View Example

```
┌───────────────────────────┐
│ 📝 Font Style (Choose one)│
├───────────────────────────┤
│                           │
│ ◉ Ligue 1 Standard 2024   │
│   [League] Included       │
│   Ligue 1 font for league │
│   matches                 │
│                           │
├───────────────────────────┤
│                           │
│ ○ UEFA Champions League   │
│   [European] +€5          │
│   UEFA CL font for        │
│   European matches        │
│                           │
└───────────────────────────┘
```

---

## Color Coding

### Visual Hierarchy

**League Namesets:**
- Border: Light gray
- Badge: Gray with "League" text
- Price: "Included" or €0
- Background: White

**European Namesets:**
- Border: Light blue
- Badge: Blue with "European" text
- Price: "+€5" in orange badge
- Background: White (light blue when selected)

**Selected Nameset:**
- Border: **Orange** (brand color)
- Background: **Light orange tint**

---

## Interactive States

### Before Selection
```
⚠️ Please select a font style
```

### After Selection
```
✓ Font style selected
```

### Price Update
```
Header updates from "+€20" to "+€25" when Champions League font selected
```

---

## Summary Table

| Product | Competitions | Available Namesets | Customer Sees |
|---------|-------------|-------------------|---------------|
| PSG Ligue 1 2024/25 | League | 1 option (Ligue 1) | One option, auto-selected |
| PSG Champions League 2024/25 | Champions League | 1 option (UCL) | One option, auto-selected |
| PSG Third Kit 2024/25 | League + CL | 2 options | **Must choose** between League (€0) and European (+€5) |
| Marseille 2023/24 | League + CL | 2 options | Can choose League or CL font |
| Marseille 2024/25 | League + EL | 2 options | Can choose League or EL font (no CL) |

---

## Key UI Features

### 1. **Clear Visual Distinction**
- League fonts: Gray "League" badge
- European fonts: Blue "European" badge

### 2. **Price Transparency**
- League: "Included"
- European: "+€5"
- Total price updates in header

### 3. **Guidance**
- Warning when no selection made (if multiple options)
- Confirmation when selection made
- Explanatory text about font differences

### 4. **Responsive Design**
- Radio buttons for easy selection
- Full descriptions visible
- Touch-friendly on mobile

### 5. **Smart Defaults**
- If only one nameset available → Auto-selected
- If multiple available → Customer must choose

---

## Testing Checklist

### Test 1: PSG Ligue 1
- [ ] Only Ligue 1 font shows
- [ ] Badge says "League"
- [ ] Price shows "Included"
- [ ] Auto-selected (no warning)

### Test 2: PSG Champions League
- [ ] Only Champions League font shows
- [ ] Badge says "European" (blue)
- [ ] Price shows "+€5"
- [ ] Total price is €25

### Test 3: PSG Third Kit
- [ ] Both fonts show
- [ ] Clear distinction between badges
- [ ] Warning shows until selection made
- [ ] Price updates based on selection

### Test 4: Marseille Season Change
- [ ] 2023/24: Shows CL option
- [ ] 2024/25: Shows EL option (no CL)
- [ ] Font names updated correctly

---

**The distinction is now crystal clear for customers!** ✅

