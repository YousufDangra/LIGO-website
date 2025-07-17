# Lingo Dingo (LIGO) Cryptocurrency Website

A professional React-based cryptocurrency website for Lingo Dingo (LIGO) token featuring black/yellow theming, tokenomics charts, and social integration.

## Quick Start

### For Windows Users:
Since the npm scripts use Unix environment variables, run these commands instead:

```bash
# Install dependencies
npm install

# Start development server (Windows)
npx cross-env NODE_ENV=development tsx server/index.ts

# OR use the provided batch file
./start-dev.bat
```

### For Mac/Linux Users:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Features

- ✅ Professional black/yellow themed design
- ✅ Animated hero section with floating logo
- ✅ Complete tokenomics display
- ✅ Interactive token distribution chart
- ✅ Community section with social links
- ✅ Responsive mobile design
- ✅ Modern animations with Framer Motion

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Backend**: Express.js + TypeScript
- **Database**: Drizzle ORM (ready for PostgreSQL)

## Project Structure

```
├── client/src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── lib/           # Utilities
│   └── hooks/         # Custom hooks
├── server/            # Express.js backend
├── shared/            # Shared types/schemas
└── attached_assets/   # Logo and image assets
```

## Token Information

- **Name**: Lingo Dingo
- **Symbol**: LIGO
- **Total Supply**: 1,000,000,000
- **Network**: Ethereum (ERC20)
- **Tax**: 0%
- **Distribution**: 80% Liquidity, 20% Creator/Marketing

## Available Scripts

- `npm run dev` - Start development server (Mac/Linux)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking

## Deployment

The application is configured for Replit deployment but can be deployed to any Node.js hosting platform.

## License

MIT License - Feel free to use and modify for your projects.