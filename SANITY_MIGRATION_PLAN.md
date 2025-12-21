# Sanity CMS Migration Plan
## The Rowan Center Website

**Project ID:** rlwt7cpv  
**Dataset:** production  
**Studio URL:** http://localhost:3333 (dev) / https://therowancenter.sanity.studio (deployed)

---

## Overview

The Sanity CMS schemas are fully defined but the website currently uses hardcoded static data. This plan outlines migrating all content to Sanity and updating the React components to fetch dynamically from the CMS.

---

## Current State

### ✅ Completed
- Sanity Studio configured and running
- All content schemas defined:
  - `author` - Blog post authors
  - `blogPost` - Blog articles with rich text
  - `event` - Events with date/time/location
  - `jobPosting` - Career opportunities
  - `boardMember` - Board of Directors profiles
  - `communityResource` - Community resource directory
  - `faq` - Frequently asked questions
  - `glossaryTerm` - Glossary definitions
  - `preventionProgram` - Prevention education programs
  - `resourceLink` - External resource links
  - `kidSafeGrade` - Grade-specific KidSafe content
  - `kidSafeTopic` - KidSafe educational topics

### ❌ Not Yet Done
- No content migrated to Sanity
- React components still use static data files
- No data fetching hooks for Sanity
- No migration scripts created

---

## Implementation Phases

### Phase 1: Setup & Infrastructure (1-2 hours)

#### 1.1 Create Sanity Data Fetching Utilities
**File:** `src/hooks/useSanityData.ts`

Create React hooks for fetching Sanity content:
- `useBlogPosts()` - Fetch blog posts with filtering
- `useEvents()` - Fetch upcoming/past events
- `useBoardMembers()` - Fetch board members
- `useJobPostings()` - Fetch active job postings
- `useCommunityResources()` - Fetch community resources
- `useFAQs()` - Fetch FAQs by category
- `useGlossaryTerms()` - Fetch glossary terms
- `useKidSafeContent()` - Fetch KidSafe content by grade

#### 1.2 Create Migration Scripts
**Folder:** `sanity/migrations/`

Scripts to import existing data:
- `import-blog-posts.ts` - Currently placeholder data
- `import-events.ts` - Currently placeholder data
- `import-news.ts` - Import from `src/data/newsData.ts` (~500+ articles)
- `import-board-members.ts` - Import from static data
- `import-community-resources.ts` - Import from `src/data/communityResourcesData.ts` (~400 resources)
- `import-glossary.ts` - Import from `src/data/glossaryData.ts`
- `import-kidsafe.ts` - Import from `src/data/kidSafeData.ts`, `highSchoolData.ts`, `middleSchoolData.ts`

---

### Phase 2: Content Migration (3-5 hours)

#### 2.1 Priority 1 - High Visibility Content

**Blog Posts** (`src/pages/Blog.tsx`)
- Currently: Hardcoded placeholder posts
- Action: Create 3-5 real blog posts in Sanity Studio
- Fields: title, slug, excerpt, body, author, publishedDate, category, tags, featuredImage, status
- Update `Blog.tsx` to fetch from Sanity

**Events** (`src/pages/Events.tsx`)
- Currently: "Coming Soon" placeholder events
- Action: Add real upcoming events in Sanity Studio
- Fields: title, slug, date, time, location, description, category, registrationLink, status, featured
- Update `Events.tsx` to fetch from Sanity

**Board Members** (`src/pages/BoardOfDirectors.tsx`)
- Currently: Hardcoded in component (~12 members)
- Action: Create board member documents in Sanity
- Fields: name, title, bio, photo, order, active
- Update `BoardOfDirectors.tsx` to fetch from Sanity

#### 2.2 Priority 2 - Resource Content

**Community Resources** (`src/pages/CommunityResources.tsx`)
- Currently: ~400 resources in `src/data/communityResourcesData.ts`
- Note: Also has Google Sheets integration as fallback
- Action: Run migration script to bulk import OR keep using Supabase/Google Sheets
- Decision needed: Sanity vs. current Supabase Resource Editor?
- If migrating: Fields include name, description, category, resourceTypes, catchmentArea, phone, address, url, tags

**News/Articles** (`src/pages/News.tsx`, `src/pages/KidSafeNews.tsx`)
- Currently: ~500+ articles in `src/data/newsData.ts`
- Action: Consider if these should be in Sanity or remain static
- Alternative: Create a "News Article" schema separate from blog posts
- These are external links, not authored content

#### 2.3 Priority 3 - Educational Content

**Glossary Terms** (`src/data/glossaryData.ts`)
- Currently: ~50 terms hardcoded
- Action: Run migration script to import
- Fields: term, definition, category, relatedTerms

**KidSafe Content** (Elementary/Middle/High School pages)
- Currently: Hardcoded in `src/data/kidSafeData.ts`, `highSchoolData.ts`, `middleSchoolData.ts`
- Schemas already exist: `kidSafeGrade` and `kidSafeTopic`
- Action: Migrate topics and grade-level content
- Complex structure with topics, resources, FAQs per grade

**FAQs** (Various pages)
- Currently: Hardcoded in multiple components
- Action: Create FAQ documents in Sanity, tagged by section
- Fields: question, answer, category, order

**Job Postings** (`src/pages/Careers.tsx`)
- Currently: Hardcoded placeholder
- Action: Add real job postings when available
- Fields: title, description, requirements, location, type, status, postedDate

---

### Phase 3: Component Updates (4-6 hours)

Update React components to fetch from Sanity instead of static data:

#### 3.1 Update Pages
- [ ] `src/pages/Blog.tsx` - Use `useBlogPosts()`
- [ ] `src/pages/Events.tsx` - Use `useEvents()`
- [ ] `src/pages/BoardOfDirectors.tsx` - Use `useBoardMembers()`
- [ ] `src/pages/Careers.tsx` - Use `useJobPostings()`
- [ ] `src/pages/News.tsx` - Use news fetching hook (if migrated)
- [ ] `src/pages/KidSafeNews.tsx` - Use news fetching hook (if migrated)
- [ ] `src/pages/KidSafeElementary.tsx` - Use `useKidSafeContent('elementary')`
- [ ] `src/pages/KidSafeMiddle.tsx` - Use `useKidSafeContent('middle')`
- [ ] `src/pages/KidSafeHigh.tsx` - Use `useKidSafeContent('high')`

#### 3.2 Update Components with FAQs
- [ ] `src/components/kidsafe/*` - Fetch FAQs from Sanity
- [ ] Various pages with embedded FAQs

#### 3.3 Handle Loading & Error States
- Add loading skeletons
- Add error boundaries
- Add fallback to static data if Sanity fails

---

### Phase 4: Migration Script Development (2-3 hours)

Create Node.js scripts to bulk import data:

```typescript
// Example: sanity/migrations/import-blog-posts.ts
import { sanityClient } from '../lib/client'
import { blogPosts } from '../../src/data/blogData' // if exists

async function importBlogPosts() {
  for (const post of blogPosts) {
    await sanityClient.create({
      _type: 'blogPost',
      title: post.title,
      slug: { current: post.slug },
      excerpt: post.excerpt,
      body: convertToPortableText(post.body),
      // ... other fields
    })
  }
}
```

**Scripts needed:**
1. `import-glossary.ts` - Import ~50 glossary terms
2. `import-kidsafe.ts` - Import KidSafe grade content and topics
3. `import-community-resources.ts` - Import ~400 resources (if not using Supabase)
4. `import-news.ts` - Import ~500 news articles (if migrating)

---

### Phase 5: Testing & Deployment (2-3 hours)

#### 5.1 Local Testing
- [ ] Verify all content displays correctly
- [ ] Test search and filtering
- [ ] Test loading states
- [ ] Test error handling
- [ ] Verify images load properly
- [ ] Test bilingual content (if applicable)

#### 5.2 Sanity Studio Deployment
- [ ] Deploy Sanity Studio to production
- [ ] Configure CORS settings for production domain
- [ ] Set up proper authentication for content editors

#### 5.3 Production Deployment
- [ ] Update environment variables with Sanity config
- [ ] Deploy updated React app
- [ ] Monitor for errors
- [ ] Train staff on using Sanity Studio

---

## Key Decisions Needed

### Decision 1: Community Resources Management
**Options:**
- A) Migrate to Sanity (centralized CMS)
- B) Keep Supabase Resource Editor (staff already trained)
- C) Hybrid: Use Sanity as primary, Supabase as fallback

**Recommendation:** Keep Supabase for now since Resource Editor is already implemented and staff may be trained. Sanity `communityResource` schema can be used for featured/curated resources only.

### Decision 2: News Articles
**Options:**
- A) Migrate all 500+ external news links to Sanity
- B) Keep as static data (updated via code)
- C) Create separate "External News" schema

**Recommendation:** Keep as static data since these are external links that rarely change. Focus Sanity on authored content (blog posts, events, etc.).

### Decision 3: Content Authoring vs. Data Management
**Philosophy:**
- **Sanity:** Best for content that changes frequently and requires rich text editing (blogs, events, job postings)
- **Supabase:** Best for structured data that staff edit via forms (resources, intake forms)
- **Static Data:** Best for rarely-changing reference data (news links, some FAQs)

---

## Migration Timeline

| Phase | Duration | Effort |
|-------|----------|--------|
| Phase 1: Setup | 1-2 hours | Developer |
| Phase 2: Content Migration | 3-5 hours | Developer + Staff |
| Phase 3: Component Updates | 4-6 hours | Developer |
| Phase 4: Migration Scripts | 2-3 hours | Developer |
| Phase 5: Testing & Deploy | 2-3 hours | Developer + QA |
| **Total** | **12-19 hours** | **2-3 days** |

---

## Technical Implementation Details

### Environment Variables Needed
Already configured in `src/lib/sanity.ts`:
```env
VITE_SANITY_PROJECT_ID=rlwt7cpv
VITE_SANITY_DATASET=production
```

### Example Hook Implementation
```typescript
// src/hooks/useBlogPosts.ts
import { useQuery } from '@tanstack/react-query'
import { sanityFetch } from '@/lib/sanity'

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => sanityFetch({
      query: `*[_type == "blogPost" && status == "published"] | order(publishedDate desc) {
        _id,
        title,
        slug,
        excerpt,
        author->{name, image},
        publishedDate,
        category,
        tags,
        featuredImage,
        featured
      }`
    })
  })
}
```

### Example Component Update
```typescript
// Before
const blogPosts = hardcodedBlogPosts

// After
const { data: blogPosts, isLoading, error } = useBlogPosts()

if (isLoading) return <BlogPostsSkeleton />
if (error) return <ErrorFallback error={error} />
```

---

## Post-Migration Benefits

1. **Content Independence:** Non-technical staff can update blog posts, events, job postings without developer help
2. **Rich Text Editing:** Proper formatting, images, links in content
3. **Preview Mode:** Preview content before publishing
4. **Version History:** Track changes and revert if needed
5. **Scheduled Publishing:** Schedule blog posts and events
6. **Image Optimization:** Automatic image CDN and transformations
7. **Multi-language Support:** Ready for bilingual content if needed

---

## Risks & Mitigations

### Risk 1: Data Loss During Migration
**Mitigation:** Keep static data files as backup, test thoroughly before deleting

### Risk 2: Sanity Downtime
**Mitigation:** Implement fallback to cached/static data in components

### Risk 3: Staff Training on New CMS
**Mitigation:** Create video tutorials, documentation, and provide hands-on training

### Risk 4: Content Not Migrated Correctly
**Mitigation:** Run migration scripts on test dataset first, manually verify sample content

---

## Next Steps

1. **Immediate:** Review this plan and make key decisions (Resources, News)
2. **Week 1:** Implement Phase 1 (Setup & Infrastructure)
3. **Week 1-2:** Execute Phase 2 (Content Migration) - Priority 1 items
4. **Week 2:** Execute Phase 3 (Component Updates)
5. **Week 2-3:** Execute Phase 4 (Migration Scripts) if needed
6. **Week 3:** Execute Phase 5 (Testing & Deployment)

---

## Files to Create

### New Files
- `src/hooks/useSanityData.ts` - All Sanity fetching hooks
- `src/hooks/useBlogPosts.ts` - Blog post hook
- `src/hooks/useEvents.ts` - Events hook
- `src/hooks/useBoardMembers.ts` - Board members hook
- `src/hooks/useJobPostings.ts` - Job postings hook
- `src/hooks/useKidSafeContent.ts` - KidSafe content hook
- `src/components/ui/skeleton.tsx` - Loading skeletons (if not exists)
- `sanity/lib/client.ts` - Sanity write client for migrations
- `sanity/migrations/import-*.ts` - Migration scripts

### Files to Update
- `src/pages/Blog.tsx`
- `src/pages/Events.tsx`
- `src/pages/BoardOfDirectors.tsx`
- `src/pages/Careers.tsx`
- `src/pages/KidSafeElementary.tsx`
- `src/pages/KidSafeMiddle.tsx`
- `src/pages/KidSafeHigh.tsx`
- `sanity/sanity.config.ts` - Already updated with basePath

### Files to Keep (For Now)
- `src/data/newsData.ts` - External news links
- `src/data/communityResourcesData.ts` - Fallback for Supabase
- `GOOGLE_SHEETS_SETUP.md` - Alternative resource management
- `RESOURCE_EDITOR_SETUP.md` - Current resource management docs

---

## Questions for Stakeholder

1. Which content should staff be able to edit themselves? (Blog, Events, Jobs, etc.)
2. How often do board member bios change? (determines if Sanity is worth it)
3. Should community resources be in Sanity or stay in Supabase?
4. Do you want the ability to schedule content to publish at future dates?
5. Will content ever need to be bilingual (English/Spanish)?
6. Who will be the primary Sanity Studio users? (need to create accounts)

---

**Status:** Ready to begin implementation
**Last Updated:** December 21, 2024
**Created By:** Warp Agent
