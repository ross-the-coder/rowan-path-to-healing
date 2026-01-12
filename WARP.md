# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

The Rowan Center website - a React/TypeScript web application built with Vite for a trauma recovery and crisis support organization. The site includes bilingual forms (English/Spanish), resource management, and educational content for sexual assault prevention and support services.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Starts Vite dev server on port 8080 (configured in `vite.config.ts`)

### Build for Production
```bash
npm run build
```
Production build (default mode)

```bash
npm run build:dev
```
Development mode build

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```
Runs ESLint on TypeScript/TSX files

## Sanity CMS Commands

The project uses Sanity CMS for content management. The Sanity Studio is located in the `sanity/` directory.

### Start Sanity Studio (from project root)
```bash
cd sanity && npm run dev
```
Runs on http://localhost:3333

### Deploy Sanity Studio
```bash
cd sanity && npm run deploy
```

### Import Content to Sanity
```bash
cd sanity && npm run import:glossary
cd sanity && npm run import:faqs
cd sanity && npm run import:board-members
```
See `sanity/IMPORT_GUIDE.md` and `SANITY_MIGRATION_PLAN.md` for migration details.

## Architecture Overview

### Tech Stack
- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite with SWC for fast compilation
- **Routing:** React Router v6 with lazy loading for all pages
- **UI Library:** shadcn/ui (Radix UI primitives + Tailwind CSS)
- **Styling:** Tailwind CSS with custom theme
- **State Management:** TanStack Query (React Query) for server state
- **Backend Services:**
  - **Supabase:** Database for form submissions (intake forms, newsletter subscriptions, etc.)
  - **Sanity CMS:** Content management for blog posts, events, board members, FAQs, glossary, job postings
- **Form Handling:** React Hook Form with Zod validation

### Project Structure

```
src/
├── pages/          # Route components (lazy loaded)
├── components/     # Reusable UI components
│   ├── ui/        # shadcn/ui components
│   └── [feature]  # Feature-specific components (forms, sections, etc.)
├── hooks/          # Custom React hooks (Sanity data fetching)
├── lib/            # Utilities (Sanity client, utils)
├── integrations/   # External service integrations (Supabase)
├── data/           # Static data files (news, resources, educational content)
├── contexts/       # React contexts (AuthContext)
└── utils/          # Helper functions

sanity/             # Sanity CMS Studio
├── schemaTypes/   # Content type definitions
├── migrations/    # Data import scripts
└── lib/           # Sanity utilities
```

### Key Architectural Patterns

#### Dual Backend Architecture
- **Supabase**: Used for form submissions and user-generated data that requires database persistence
  - Tables: `crisis_counseling_intake`, `victim_advocacy_intake`, `trauma_recovery_intake`, `volunteer_applications`, `student_advisory_applications`, `prevention_education_contact`, `newsletter_subscriptions`, `faq_search_queries`
  - File storage: `volunteer-resumes` bucket for resume uploads
  
- **Sanity CMS**: Used for content that staff will edit frequently (blogs, events, FAQs, glossary, board members, job postings)
  - Content types: `blogPost`, `event`, `author`, `boardMember`, `jobPosting`, `faq`, `glossaryTerm`, `communityResource`, `preventionProgram`, `kidSafeGrade`, `kidSafeTopic`
  - See `SANITY_MIGRATION_PLAN.md` for migration status and strategy

#### Data Fetching Strategy
- **React Query hooks** in `src/hooks/useSanityData.ts` for all Sanity content with:
  - Automatic caching (5-15 minute stale times based on content type)
  - Loading and error states
  - Refetch on window focus
- **Static data files** in `src/data/` for rarely-changing content:
  - `newsData.ts` (~500 external news articles)
  - `communityResourcesData.ts` (~400 community resources, with Supabase fallback)
  - `kidSafeData.ts`, `middleSchoolData.ts`, `highSchoolData.ts` (educational content)
  - `glossaryData.ts`, `faqData.ts` (being migrated to Sanity)

#### Bilingual Form Pattern
All intake forms support English/Spanish with:
- Language toggle in form header
- Form state tracked via `formLanguage` field
- Separate translation objects for labels/placeholders
- Stored in database with `form_language` column

#### Route Lazy Loading
All page components are lazy loaded in `App.tsx` with Suspense fallback to optimize initial bundle size.

#### Path Alias
`@/` is aliased to `src/` directory in imports (configured in `vite.config.ts`)

### Environment Variables

Required in `.env`:
```
# Supabase
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

# Sanity CMS
VITE_SANITY_PROJECT_ID=rlwt7cpv
VITE_SANITY_DATASET=production
```

### Database Schema Notes

When working with Supabase:
- Type definitions auto-generated in `src/integrations/supabase/types.ts`
- Client initialized in `src/integrations/supabase/client.ts`
- All intake forms follow similar schema patterns with bilingual fields
- Use `created_at` timestamps for all submissions

### Content Migration Status

See `SANITY_MIGRATION_PLAN.md` for full details. Key points:
- Sanity Studio is configured but most content still uses static data
- Migration planned in 5 phases over 12-19 hours
- Priority 1 content: Blog posts, events, board members (high visibility)
- Decision pending: Whether to migrate community resources to Sanity or keep in Supabase
- News articles (~500) likely staying as static data since they're external links

### Important Conventions

- **Form Components**: All intake forms follow similar patterns - see `CrisisCounselingIntakeForm.tsx`, `VictimAdvocacyIntakeForm.tsx`, `TraumaRecoveryIntakeForm.tsx`
- **Page Structure**: Most pages use a consistent layout with Navigation component and footer
- **Color Coding**: Different service areas use specific colors (turquoise for crisis services, purple for trauma recovery, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind responsive classes
- **Accessibility**: Uses Radix UI primitives which include ARIA attributes
- **Error Handling**: Forms show toast notifications on success/error using Sonner

### When Adding New Features

- **New Forms**: Follow existing intake form patterns with bilingual support and Supabase storage
- **New Pages**: Add to lazy loaded routes in `App.tsx`, include in Navigation component
- **New CMS Content**: Add schema to `sanity/schemaTypes/`, create corresponding hook in `useSanityData.ts`
- **New UI Components**: Use shadcn/ui components from `src/components/ui/` or add new ones via CLI
- **Static Data**: Add to appropriate file in `src/data/` if content rarely changes

### Known Issues & Considerations

- Resource matching utility in `src/utils/resourceMatcher.ts` handles complex keyword-based resource filtering
- Authentication via `AuthContext` for staff/admin pages (protected routes)
- No test suite currently configured (no test scripts in package.json)
- Uses React Compiler babel plugin (experimental feature enabled)
- Lovable-tagger plugin for development environment (Lovable.dev integration)
