# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start development server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## Project Architecture

This is a **React 18 + TypeScript SPA** built with **Vite**, styled with **Tailwind CSS**, and using **shadcn/ui** components. The application is a landing page for FewCuts - an AI-powered service for creating short-format content from long-format videos.

### Key Technologies
- **Build Tool**: Vite 5.4+ with React SWC plugin
- **UI Framework**: shadcn/ui (48 pre-built components)
- **Styling**: Tailwind CSS with custom "Vice City" theme (pink/purple gradients)
- **State Management**: TanStack React Query for server state
- **Routing**: React Router DOM with catch-all 404 handling
- **Deployment**: Vercel (SPA configuration)

### Code Organization

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (buttons, forms, etc.)
│   ├── FewCutsNavbar.tsx    # Main navigation
│   ├── FewCutsHero.tsx      # Hero section with CTA
│   ├── FewCutsFeatures.tsx  # Features showcase
│   └── FewCutsFooter.tsx    # Footer component
├── pages/
│   ├── Index.tsx        # Main landing page composition
│   └── NotFound.tsx     # 404 error page
├── lib/utils.ts         # Tailwind class merging utilities
└── hooks/               # Custom React hooks
```

### Design System

The project uses a **"Vice City" aesthetic** with:
- **Primary Gradient**: `from-[#ed56ff] to-[#ff1b8d]`
- **Typography**: Righteous/Fjalla One for display, Inter for body text
- **Custom Animations**: fade-in, float, pulse-slow
- **Dark Mode**: Supported via CSS variables
- **Mobile-First**: Responsive design throughout

### Development Patterns

- **Component Naming**: Business components prefixed with `FewCuts*`
- **Styling**: Utility-first with custom component classes
- **TypeScript**: Strict configuration, separate configs for app/node
- **Path Alias**: `@` maps to `./src`
- **Port**: Development server runs on port 8080 (not 3000)

### Key Configuration

- **Vite**: Custom server port, React SWC plugin, Lovable component tagger in dev
- **ESLint**: TypeScript recommended + React hooks rules
- **Tailwind**: Extended with custom theme, animations, and font families
- **Vercel**: SPA deployment with client-side routing fallback

### Architecture Notes

The application follows a **single-page application pattern** with:
- Router setup in main.tsx with BrowserRouter
- Providers for Tooltip, Toast, and Theme management
- React Query for any future server state management
- Component composition pattern (Index.tsx assembles the landing page)
- Intersection Observer for scroll-based animations