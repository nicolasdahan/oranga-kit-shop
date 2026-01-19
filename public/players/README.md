# Player Images

This folder contains optional player images that can be displayed in the customization UI.

## About Player Images

Player images are **optional**. The system works perfectly without them, showing only player names and numbers in the selection dropdown.

## If You Want to Add Player Images

### Image Specifications

- **Format**: JPG or PNG
- **Size**: 100x100 pixels (square) recommended
- **Content**: Player headshot or portrait
- **Quality**: Web-optimized (under 50KB per image)

### Naming Convention

Use the player ID from `/src/data/players.ts`:

Example:
```typescript
// In players.ts:
{
  id: 'psg-mbappe',
  name: 'MBAPPÉ',
  // ...
}
```

The image should be: `mbappe.jpg` or `psg-mbappe.jpg`

### Usage

In `/src/data/players.ts`, set the image path:

```typescript
{
  id: 'psg-mbappe',
  name: 'MBAPPÉ',
  number: 7,
  position: 'Forward',
  team: 'Paris Saint-Germain',
  image: '/players/mbappe.jpg', // Optional
  available: true
}
```

## Current Implementation

Currently, player images are **not displayed** in the UI. The dropdown shows only:
- Player name
- Jersey number
- Position

You can add images here for future enhancements if desired.

