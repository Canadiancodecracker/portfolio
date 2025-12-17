
# Modern Academic & Professional Portfolio

A high-performance, multi-page portfolio built with React, TypeScript, and Tailwind CSS.

## Features
- **Multi-page Routing**: Dedicated pages for Experience, Academics, Contact, etc.
- **Single Source of Truth**: All content is managed in `src/content/profile.ts`.
- **Responsive & Accessible**: Optimized for mobile and desktop with keyboard navigation.
- **Dark Mode**: Persisted theme selection via `localStorage`.
- **Slick Animations**: Subtle Framer Motion transitions and interactions.
- **Search & Filter**: Real-time filtering for academic publications and work experience.

## How to Customize
1. Open `content/profile.ts`.
2. Edit the `portfolioData` object with your details.
3. Replace the `avatarUrl` or add image assets to the `public` folder.
4. Your changes will automatically reflect across the UI.

## Local Development
```bash
npm install
npm run dev
```

## Deployment
This project is ready to be deployed to Vercel, Netlify, or GitHub Pages.
For GitHub Pages, ensure the `HashRouter` is used (already configured).
