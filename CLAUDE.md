# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `bun install` - Install dependencies
- `bun run dev` - Start development server
- `bun run build` - Build the project for production
- `bun run preview` - Preview the built project

### Code Quality
- No specific lint command configured (uses Biome formatting)
- Format settings defined in `biome.json` (2-space indentation, 120 line width)

## Architecture Overview

This is a multilingual Astro website built with TypeScript, Tailwind CSS, and AlpineJS. The project uses a content-driven architecture with Keystatic CMS for content management.

### Key Technologies
- **Framework**: Astro 4.7 with hybrid rendering
- **Styling**: Tailwind CSS with custom configuration
- **Content Management**: Keystatic CMS accessible at `/keystatic`
- **Deployment**: Configured for Cloudflare Pages
- **Internationalization**: Built-in i18n support (Dutch default, English secondary)

### Project Structure

#### Content Architecture
- **Content Collections**: Defined in `src/content/config.ts`
  - `pages` - Main site pages with Markdoc content
  - `posts` - Blog posts with frontmatter
  - `works` - Portfolio/case studies
  - `services` - Service descriptions
  - `authors` - Author profiles
- **Localization**: Content organized by language (`en/`, `nl/`) in each collection
- **Global Settings**: Shared configuration in `src/content/global/`

#### Component Organization
- **Layouts**: `src/layouts/` - Base page templates
- **Primitives**: `src/components/primitives/` - Reusable UI components
- **Sections**: `src/components/sections/` - Page section components
- **Headers/Footers**: `src/components/headers/`, `src/components/footers/`

#### Routing System
- **Dynamic Routes**: `src/pages/[...slug]/` for localized content
- **Language-specific Routes**: `src/pages/nl/` for Dutch content
- **Content Types**: Separate routes for posts (`/post/`) and works (`/work/`)

### Key Features
- **Keystatic CMS**: Rich content editor with custom components
- **PWA Support**: Progressive Web App capabilities via `@vite-pwa/astro`
- **SEO Optimization**: Automatic sitemap, robots.txt, and meta tags
- **Image Optimization**: Astro's built-in image optimization
- **RSS Feed**: Generated at `/rss.xml`

### Content Management
- **Admin Interface**: Access via `/keystatic` or `/admin` (redirects to Keystatic)
- **Content Components**: Rich Markdoc components defined in `keystatic.config.ts`
  - Layout components: Container, ContainerFluid, Prose, Flex
  - Content blocks: Hero, Services, Testimonial, Contact, etc.
- **Media Management**: Images stored in `src/assets/` organized by content type

### Configuration Files
- `site.config.ts` - Site-wide settings and localization config
- `astro.config.ts` - Astro configuration with integrations
- `keystatic.config.ts` - CMS schema and component definitions
- `tailwind.config.ts` - Tailwind CSS customization
- `biome.json` - Code formatting and linting rules

### Localization System
- **Primary Language**: Dutch (`nl`) - no URL prefix
- **Secondary Language**: English (`en`) - prefixed URLs
- **Helper Functions**: `src/lib/localization-helpers.ts` for URL and content management
- **Content Structure**: Each collection has language-specific folders

### Development Notes
- Uses Bun as package manager (preferred over npm/yarn)
- Cloudflare-specific optimizations in build configuration
- GSAP animations configured in `src/utils/gsap-blur.ts`
- Custom lifecycle management in `src/utils/lifecycle-manager.ts`