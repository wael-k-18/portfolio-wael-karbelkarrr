# Wael Karbelkar - AI/ML Developer Portfolio

A modern, dark-mode default portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Project Structure

- `app/` - Next.js 14+ App Router pages and components
- `components/` - Reusable UI components:
  - `Navbar` - Fixed glass navigation with scroll behavior
  - `Hero` - Hero section with animated entrance
  - `About` - About me with skill highlights
  - `Projects` - Featured projects gallery
  - `Experience` - Work experience timeline
  - `Skills` - Technical expertise categories
  - `Publications` - Research papers and presentations
  - `Contact` - Contact form with status feedback
  - `Footer` - Footer with social links
- `globals.css` - Tailwind base styles with CSS variables for dark mode
- `tailwind.config.ts` - Tailwind configuration with custom colors and animations
- `postcss.config.js` - PostCSS configuration with @tailwindcss/postcss v4

## Key Features

- **Dark mode default** with CSS variable theme support
- **Glass navigation bar** that becomes opaque on scroll
- **Scroll-based animations** using Framer Motion with viewport-based triggers
- **Responsive design** mobile-first approach
- **SEO optimized** with proper metadata, Open Graph, and Twitter cards
- **Accessible** with semantic HTML and focus-visible states
- **TypeScript** throughout for type safety

## Available Scripts

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm start` - Start production server

## Deployment

This project is ready for Vercel deployment. Simply connect the GitHub repository to Vercel and it will automatically build and deploy.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx

## Sections

1. **Navbar** - Fixed glass navigation
2. **Hero** - Animated hero with CTA buttons
3. **About** - Personal introduction and expertise
4. **Projects** - Featured project showcase
5. **Experience** - Work history timeline
6. **Skills** - Technical skills grid
7. **Publications** - Research papers
8. **Contact** - Contact form
9. **Footer** - Site footer with social links