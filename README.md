# Oranga Kit Shop - Football Jersey E-commerce

A modern e-commerce platform for buying authentic football jerseys with professional customization options.

## 🆕 New Features

### Dynamic Product Customization

The shop features a completely redesigned customization system:

- **Dynamic Patch Selection**: Product-specific patches with individual pricing
- **Official Player Names**: Select from real team rosters instead of free-text
- **Smart Filtering**: Automatic compatibility based on league and team

📚 **Customization Documentation:**
- [Quick Start Guide](QUICK_START_CUSTOMIZATION.md) - Get started in 5 minutes
- [Full System Documentation](CUSTOMIZATION_SYSTEM.md) - Complete technical details
- [Implementation Summary](IMPLEMENTATION_SUMMARY.md) - What changed and why

### Patch Restrictions System

Control which patches appear for which clubs in which seasons:

- **Season-Based Restrictions**: Champions League in 2023/24, Europa League in 2024/25
- **Club-Specific Rules**: Each club has accurate patch availability
- **Historical Badges**: Support for all-time achievements (e.g., Marseille 1993 CL winners)

📚 **Patch Restrictions Documentation:**
- [Quick Start Guide](QUICK_START_PATCH_RESTRICTIONS.md) - Add restrictions in 5 minutes
- [Examples & Test Cases](PATCH_RESTRICTIONS_EXAMPLES.md) - Real-world scenarios (Marseille, etc.)
- [Full Configuration Guide](PATCH_RESTRICTIONS_GUIDE.md) - Complete documentation
- [Implementation Summary](PATCH_RESTRICTIONS_SUMMARY.md) - Technical overview

**Example:** Marseille qualified for Champions League in 2023/24 but Europa League in 2024/25. The system automatically shows the correct patches based on the product's season.

### Nameset Restrictions System (NEW!)

Control which fonts/styles are used for player names based on competition:

- **Competition-Based Fonts**: Different fonts for League vs Champions League vs Europa League
- **Club-Specific Fonts**: PSG uses Ligue 1 font domestically, Champions League font in UCL
- **Season-Based Fonts**: Track font updates and changes over seasons
- **Automatic Selection**: System chooses correct font based on product's competition

📚 **Nameset Restrictions Documentation:**
- [Complete Guide](NAMESET_RESTRICTIONS_GUIDE.md) - Full documentation with examples
- [Examples & Test Cases](NAMESET_RESTRICTIONS_EXAMPLES.md) - Real-world scenarios (PSG, Marseille)

**Example:** PSG uses Ligue 1 font for domestic league matches but UEFA Champions League font for European matches. The system automatically provides the correct nameset type based on the product's competition.

## Project info

**URL**: https://lovable.dev/projects/63edba08-5611-4c12-a994-c6aa4847dde5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/63edba08-5611-4c12-a994-c6aa4847dde5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/63edba08-5611-4c12-a994-c6aa4847dde5) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
