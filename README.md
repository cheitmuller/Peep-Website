# Peep Website

A marketing landing page for the Peep mood tracking app.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS
- **Animations:** Framer Motion
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cheitmuller/Peep-Website.git
   cd Peep-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── layout/      # Layout components (Header, Footer)
│   ├── shared/      # Reusable components
│   └── features/    # Feature-specific components
├── public/          # Static assets
│   ├── images/      # Images and logos
│   └── videos/      # Video assets
├── styles/          # CSS files
└── .taskmaster/     # Task management (development workflow)
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cheitmuller/Peep-Website)

## License

All rights reserved © 2025 Peep
