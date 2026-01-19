# Patch Images

This folder contains images for all available patches that can be added to jerseys.

## Required Images

The following patch images need to be added to this folder:

### Premier League
- `premier-league-standard.png` - Premier League sleeve patch
- `premier-league-champions.png` - Gold champions badge

### La Liga
- `la-liga-standard.png` - La Liga sleeve patch
- `la-liga-champions.png` - Gold champions badge

### Serie A
- `serie-a-standard.png` - Serie A sleeve patch
- `serie-a-scudetto.png` - Scudetto champions badge

### Bundesliga
- `bundesliga-standard.png` - Bundesliga sleeve patch
- `bundesliga-champions.png` - Meisterschale champions badge

### Ligue 1
- `ligue-1-standard.png` - Ligue 1 sleeve patch
- `ligue-1-champions.png` - Champions badge

### European Competitions
- `ucl-standard.png` - UEFA Champions League badge
- `ucl-winners.png` - UCL winners badge
- `uel-standard.png` - UEFA Europa League badge

### International Competitions
- `world-cup-standard.png` - FIFA World Cup badge
- `euro-standard.png` - UEFA Euro Championship badge
- `copa-america-standard.png` - Copa América badge

## Image Specifications

- **Format**: PNG with transparent background
- **Size**: Recommended 200x200 pixels (or proportional)
- **Quality**: High resolution for clear display
- **Background**: Transparent to overlay on product images

## Naming Convention

Use lowercase with hyphens:
- ✅ `premier-league-standard.png`
- ❌ `Premier_League_Standard.png`

## Adding New Patches

1. Add the image file to this folder
2. Update `/src/data/patches.ts` with the patch details
3. Reference the image path as `/patches/your-patch-name.png`

## Fallback

If an image is missing, the UI will display a placeholder icon instead.

