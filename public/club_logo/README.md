# Club Logos

## Current Logos

✅ **Available Logos:**
- Arsenal FC → `Arsenal_FC.svg.png`
- Chelsea FC → `logo-chelsea-1024x1024.png`
- Liverpool FC → `logo-liverpool.jpg`
- Manchester United → `Logo_Manchester_United_FC.svg.png`
- Manchester City → `logo-manchester-city-1024x1024.png`
- Tottenham Hotspur → `Logo_Tottenham_Hotspur.svg`
- FC Barcelona → `Logo_FC_Barcelone.svg.webp`
- Real Madrid → `logo-real-madrid-732x1024.png`
- Inter Milan → `FC_Internazionale_Milano_2021.svg.png`
- AC Milan → `Logo_of_AC_Milan.svg.png`
- Juventus → `Logo_Juventus.svg.png`
- Borussia Dortmund → `Borussia_Dortmund_logo.svg.png`
- Paris Saint-Germain → `Paris_Saint-Germain_Logo.svg`
- Olympique Marseille → `Logo_Olympique_de_Marseille.svg.png`

## Missing Logos

❌ **Need to Add:**
- Bayern Munich → Add as `Bayern_Munich_Logo.png`
- Atlético Madrid (if featured)
- AS Roma (if featured)
- Napoli (if featured)
- RB Leipzig (if featured)
- Lyon (if featured)
- Monaco (if featured)
- Newcastle United (if featured)

## Recommended Logo Specifications

- **Format**: PNG or SVG (with transparent background)
- **Size**: At least 512x512px (square)
- **Background**: Transparent or white
- **Quality**: High resolution for crisp display

## Usage

Logos are automatically loaded from this directory and displayed in:
- Homepage "Shop by Club" section
- Club pages (hero banners)
- Clubs index page (club grid)
- League pages (club listings)

## Adding a New Logo

1. Save the logo file in this directory: `/public/club_logo/`
2. Update the club data in `/src/data/clubs.ts`
3. Add the logo path:
   ```typescript
   logo: '/club_logo/your-logo-filename.png'
   ```

The logo will automatically appear across the site!



