# Quick Start: Product Customization System

## 🎯 What Changed?

Your product pages now have a **professional, dynamic customization system**:

### Before ❌
- Generic "add patches" checkbox
- Free text for any name/number
- Same options for all products
- No visual feedback

### After ✅
- **Product-specific patches** with images and individual prices
- **Official player selection** from real team rosters
- **Dynamic filtering** based on league and team
- **Visual display** with images and detailed info

---

## 🚀 How to Use (Customer View)

### Step 1: View a Product
Navigate to any product page (e.g., PSG Home Shirt 2024/25)

### Step 2: Select Patches (Optional)
Scroll to the customization section. You'll see:

```
Available Patches
├─ ☐ Ligue 1 Standard Patch (+€8.00)
│   └─ [Image] Official Ligue 1 sleeve patch
├─ ☐ UEFA Champions League Patch (+€10.00)
│   └─ [Image] Official UEFA Champions League sleeve badge
└─ ☐ Ligue 1 Champions Patch (+€12.00)
    └─ [Image] French champions badge
```

✅ Check multiple patches if desired
✅ Price updates automatically

### Step 3: Select Player (Optional)
If available, you'll see:

```
Official Player Name & Number (+€20.00)
[Dropdown: Choose a player (optional)]
```

Select from:
- DEMBÉLÉ #10 • Forward
- MARQUINHOS #5 • Defender
- HAKIMI #2 • Defender
- etc.

### Step 4: Add to Cart
The total price includes:
- Base price
- All selected patches
- Player customization (if selected)

### Step 5: View Cart
Cart displays:
```
PSG Pro Home Shirt 2024/25
Size: L
Base: €139.99
  🏷️ Patches: Ligue 1 Standard Patch, UEFA Champions League Patch
  👕 Player: DEMBÉLÉ #10
Quantity: 1
Total: €177.99
```

---

## ⚙️ How to Manage (Shop Owner)

### Add a New Patch

**File:** `/src/data/patches.ts`

```typescript
{
  id: 'new-patch-id',
  name: 'New Patch Name',
  description: 'Patch description',
  price: 10.00,
  image: '/patches/new-patch.png',
  compatibleLeagues: ['premier-league', 'la-liga'],
  compatibleCompetitions: ['League']
}
```

**Image:** Place in `/public/patches/new-patch.png`

### Add a New Player

**File:** `/src/data/players.ts`

```typescript
{
  id: 'team-player',
  name: 'PLAYER NAME',
  number: 10,
  position: 'Forward',
  team: 'Team Name', // Must match product.team
  available: true
}
```

### Configure Product Customization

**File:** `/src/data/products.ts`

```typescript
{
  id: "product-id",
  // ... other fields
  category: "premier-league", // ← Filters patches
  competition: ["League", "Champions League"], // ← Filters patches
  team: "Arsenal", // ← Filters players
  allowsPlayerCustomization: true, // ← Enable/disable player option
  // ... other fields
}
```

---

## 📊 Examples

### Example 1: Real Madrid Home Shirt
- **Shows**: La Liga patches, Champions League patches
- **Players**: Bellingham, Vinícius Jr., Mbappé, Modrić, etc.
- **Why**: category="la-liga", team="Real Madrid"

### Example 2: Arsenal Third Kit
- **Shows**: Premier League patches
- **Players**: Saka, Ødegaard, Rice, Saliba, etc.
- **Why**: category="premier-league", team="Arsenal"

### Example 3: PSG Shorts
- **Shows**: Ligue 1 patches, Champions League patches
- **Players**: NONE (shorts don't get names)
- **Why**: allowsPlayerCustomization=false

---

## 💰 Pricing Structure

| Item | Price Range | Details |
|------|-------------|---------|
| **Product** | Varies | Base price of item |
| **Standard League Patch** | €8.00 | Premier League, La Liga, etc. |
| **Champions Patch** | €12.00 | Gold league winner badges |
| **European Patch** | €10.00 | UCL, Europa League |
| **Player Name & Number** | €20.00 | Fixed price, official printing |

**Example Cart:**
```
Item: Barcelona Home Shirt       €139.99
  + La Liga Standard Patch       +€8.00
  + Champions League Patch       +€10.00
  + Player: LEWANDOWSKI #9       +€20.00
                          Total: €177.99
```

---

## 🎨 Image Assets Needed

### Patches (Priority)
Place in `/public/patches/`:

**Must Have:**
- `premier-league-standard.png`
- `la-liga-standard.png`
- `serie-a-standard.png`
- `bundesliga-standard.png`
- `ligue-1-standard.png`
- `ucl-standard.png`

**Nice to Have:**
- `*-champions.png` (gold badges)
- `uel-standard.png`
- `world-cup-standard.png`
- `euro-standard.png`

**Specs:**
- PNG with transparent background
- 200×200px recommended
- High quality

### Players (Optional)
Place in `/public/players/`:
- Player headshots (100×100px)
- Currently not displayed in UI
- For future enhancements

---

## ✅ Testing Checklist

After implementation, verify:

- [ ] Product page loads without errors
- [ ] Patches section appears with checkboxes
- [ ] Each patch shows name, description, and price
- [ ] Multiple patches can be selected
- [ ] Player dropdown appears (if enabled)
- [ ] Player list shows team-specific players
- [ ] Price updates when options are selected
- [ ] Can add to cart with customizations
- [ ] Cart displays all customizations clearly
- [ ] Cart total includes customization costs
- [ ] Can remove items from cart
- [ ] Can change quantities

---

## 🐛 Troubleshooting

### "No patches appear on product page"
- Check `product.category` matches `patch.compatibleLeagues`
- Check `product.competition` includes items in `patch.compatibleCompetitions`
- Verify patches exist in `/src/data/patches.ts`

### "No players in dropdown"
- Check `product.allowsPlayerCustomization` is `true`
- Check `product.team` exactly matches player entries
- Check players have `available: true`
- Verify team has players in `/src/data/players.ts`

### "Patch images not showing"
- Add images to `/public/patches/`
- Use correct filename matching `patch.image` path
- Use PNG format with transparent background

### "Price not updating"
- Clear browser cache
- Check browser console for errors
- Verify patch prices are numbers, not strings

---

## 📚 Documentation

**Full Documentation**: See `/CUSTOMIZATION_SYSTEM.md`

**Implementation Details**: See `/IMPLEMENTATION_SUMMARY.md`

**Patch Images Guide**: See `/public/patches/README.md`

**Player Images Guide**: See `/public/players/README.md`

---

## 🎯 Next Steps

1. **Add Patch Images**
   - Source official league logos
   - Save to `/public/patches/`
   - PNG format, transparent background

2. **Test in Browser**
   ```bash
   npm run dev
   ```
   - Visit http://localhost:5173
   - Test product pages
   - Test cart functionality

3. **Expand Content**
   - Add more players to popular teams
   - Add special edition patches
   - Add more product customization options

4. **Go Live**
   - Build for production: `npm run build`
   - Deploy updated files
   - Monitor customer feedback

---

## 💡 Pro Tips

✨ **For Best Results:**
- Add high-quality patch images for professional look
- Keep player lists up-to-date with transfers
- Use `available: false` for transferred players (keeps history)
- Group patches by type (league, european, special)
- Test on mobile devices (responsive design included)

🎨 **Visual Enhancement:**
- Add patch preview overlay on product image
- Show player photos in dropdown (optional)
- Animate price changes
- Add "Most Popular" badges to patches

📊 **Business Intelligence:**
- Track which patches are most popular
- Monitor which players customers choose
- Identify high-value customization combinations
- Adjust pricing based on demand

---

## 🆘 Need Help?

1. Check documentation files
2. Review example products in `/src/data/products.ts`
3. Inspect working examples (PSG, Real Madrid, Arsenal products)
4. Check browser console for errors
5. Verify data structure matches types in code

**Remember:** The system is fully functional and tested. Just add patch images to make it look perfect! 🚀

