# Lingo Dingo (LIGO) Cryptocurrency Website

## Overview

This is a sophisticated meme coin website built for Lingo Dingo (LIGO), an Ethereum-based ERC20 token. The application is a full-stack web platform featuring a modern React frontend with a comprehensive landing page showcasing the token's features, tokenomics, and community information. The backend is prepared for future expansion with Express.js and database integration capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Animations**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: In-memory storage with interface for database expansion
- **API Structure**: RESTful endpoints under `/api` prefix

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with animated logo and call-to-action
   - About section highlighting key features
   - Tokenomics section displaying token specifications
   - Distribution section with pie chart visualization
   - Whitepaper section for technical documentation
   - Community section with social links and newsletter signup

2. **UI Component System**:
   - Comprehensive shadcn/ui component library
   - Custom styled components with Lingo Dingo branding
   - Responsive design with mobile-first approach
   - Dark/light theme support via CSS variables

3. **Interactive Features**:
   - Smooth scroll navigation
   - Newsletter subscription functionality
   - Toast notifications for user feedback
   - Mobile-responsive navigation with hamburger menu

### Backend Infrastructure
1. **Express Server**:
   - Request logging middleware
   - JSON and URL-encoded body parsing
   - Error handling middleware
   - Development-only Vite integration

2. **Database Layer**:
   - Drizzle ORM with PostgreSQL dialect
   - User schema with username/password fields
   - Migration system for database evolution
   - Memory storage implementation as fallback

3. **Storage Interface**:
   - Abstract storage interface for CRUD operations
   - In-memory implementation for development
   - Ready for database implementation

## Data Flow

1. **Static Content Delivery**: Vite serves the React application with hot module replacement in development
2. **API Requests**: Frontend uses TanStack Query to manage server state and API calls
3. **Database Operations**: Drizzle ORM handles database queries through the storage interface
4. **Asset Management**: Static assets (images, fonts) served through Vite's asset pipeline

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS, Radix UI primitives, class-variance-authority
- **Data Visualization**: Recharts for token distribution charts
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React, React Icons for social media icons
- **Forms**: React Hook Form with Zod validation

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL (@neondatabase/serverless)
- **ORM**: Drizzle ORM with Zod integration
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Utilities**: date-fns for date manipulation

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **Linting**: ESBuild for production builds
- **Development**: Hot module replacement and error overlays

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **API Server**: Express server running on development mode
- **Database**: Environment variable configuration for DATABASE_URL
- **Asset Serving**: Vite handles static assets with import resolution

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Static Assets**: Served from build output directory
- **Environment**: Production mode with optimized settings

### Database Configuration
- **Schema Management**: Drizzle migrations in `./migrations` directory
- **Connection**: PostgreSQL via DATABASE_URL environment variable
- **Development**: `db:push` command for schema synchronization
- **Production**: Migration-based deployment strategy

The application is structured as a monorepo with clear separation between client, server, and shared code, making it maintainable and scalable for future enhancements while providing a professional presentation for the Lingo Dingo cryptocurrency project.