# Technology Leadership Journal Frontend

React frontend for the Technology Leadership Journal application. This web application provides an interface for technology leaders to reflect on their leadership journey across different aspects: technology, delivery, business, team, organization, and mindset.

## Tech Stack

- React 18
- React Router for navigation
- React Query for data management
- Water.css for styling
- Vite for build tooling

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file with:
```
VITE_API_URL=http://localhost:3001  # for local development
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3002

## Features

- Create and manage journal entries
- Categorize entries by different leadership aspects
- View and search through past entries
- Clean, minimalist interface

## Deployment

This frontend is configured for deployment on Vercel:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy to production:
```bash
vercel --prod
```

## Environment Variables

For production deployment, set:
- `VITE_API_URL`: URL of the deployed API

## Proprietary Notice

This software is proprietary and confidential. Unauthorized copying, transfer, or reproduction of the contents of this software, via any medium, is strictly prohibited.

Copyright © 2025 All rights reserved.
