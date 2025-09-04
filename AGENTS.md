# AGENTS.md

## Build/Test Commands
- `bun install` - Install dependencies
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview built project
- No specific test or lint commands (uses Biome for formatting only)

## Code Style Guidelines
- **Package Manager**: Use Bun (not npm/yarn)
- **Formatting**: Biome with 2-space indentation, 120 line width, organize imports enabled
- **TypeScript**: Strict mode enabled, use proper typing with Zod schemas for content collections
- **Imports**: Use `@/` alias for src imports, organize imports automatically via Biome
- **File Structure**: Follow existing patterns - primitives/, sections/, layouts/
- **Astro Components**: Use interface exports for props, destructure in frontmatter
- **Content**: Multilingual (nl default, en prefixed), use Keystatic CMS for content management
- **Naming**: camelCase for variables/functions, PascalCase for components, kebab-case for files
- **Error Handling**: Use optional chaining and nullish coalescing, graceful fallbacks
- **Localization**: Use helper functions from `localization-helpers.ts`, support nl/en

## Architecture Notes
- Astro 4.7 with hybrid rendering, Tailwind CSS, AlpineJS for interactivity
- Content-driven with Keystatic CMS accessible at `/keystatic`
- Cloudflare Pages deployment, PWA enabled with workbox