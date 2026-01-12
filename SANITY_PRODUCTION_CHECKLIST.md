# Sanity Production Deployment Checklist

This checklist ensures Sanity CMS will work correctly when the site launches.

## Pre-Launch Tasks

### 1. Environment Variables ✓
- [x] Add `VITE_SANITY_PROJECT_ID` to `.env` (already configured)
- [x] Add `VITE_SANITY_DATASET` to `.env` (already configured)
- [ ] **CRITICAL:** Add same variables to your hosting platform (Netlify/Vercel/etc.)
  - `VITE_SANITY_PROJECT_ID=rlwt7cpv`
  - `VITE_SANITY_DATASET=production`

### 2. Deploy Sanity Studio

Deploy the Sanity Studio so staff can edit content:

```bash
cd sanity
npm run deploy
```

This will:
- Deploy Studio to `https://rowan-center.sanity.studio` (or similar)
- Make it accessible to authorized users
- Allow content editing from anywhere

### 3. Configure CORS in Sanity Dashboard

**CRITICAL:** Allow your production domain to access Sanity data:

1. Go to https://sanity.io/manage/project/rlwt7cpv
2. Click **API** → **CORS Origins**
3. Add your production domain(s):
   - `https://your-production-domain.com`
   - `https://www.your-production-domain.com`
   - `http://localhost:8080` (for local dev)
   - `http://localhost:3000` (if using different port)
4. Check **Allow credentials**
5. Click **Save**

### 4. Verify CDN Settings

In `src/lib/sanity.ts`, confirm CDN is enabled for production:

```typescript
useCdn: true, // ✓ Already configured for faster reads
```

### 5. Test Sanity Connection

Before launch, test that production build can fetch Sanity data:

```bash
# Build the production app
npm run build

# Preview the production build
npm run preview

# Visit http://localhost:4173 and verify:
# - Board members load
# - Blog posts display (if any)
# - Events show up (if any)
# - News articles appear
# - FAQs/Glossary work
```

### 6. Set Up User Access

Add team members who will edit content:

1. Go to https://sanity.io/manage/project/rlwt7cpv
2. Click **Members**
3. Invite staff with appropriate roles:
   - **Administrator:** Full access (for tech lead)
   - **Editor:** Can create/edit/delete content (for content managers)
   - **Viewer:** Read-only access

### 7. Content Verification

Verify all content is properly imported:

- [ ] News articles: 141 imported ✓
- [ ] Board members: 23 imported ✓
- [ ] FAQs: 40 imported ✓
- [ ] Glossary terms: 31 imported ✓
- [ ] Community resources: 35 imported ✓
- [ ] Blog posts: Create 2-3 sample posts for testing
- [ ] Events: Create 1-2 upcoming events for testing
- [ ] Authors: 4 imported ✓

## Post-Launch Monitoring

### Week 1: Monitor for Issues

Check these daily:

1. **Browser Console Errors:**
   - Open DevTools → Console
   - Look for Sanity fetch errors
   - Verify no CORS errors

2. **Content Updates:**
   - Make a test edit in Sanity Studio
   - Verify it appears on the live site within 1-2 minutes
   - Test with different content types (blog, events, etc.)

3. **Performance:**
   - Check page load times
   - Verify images load from Sanity CDN
   - Monitor Lighthouse scores

4. **Sanity Dashboard:**
   - Check https://sanity.io/manage/project/rlwt7cpv
   - Review API usage (should be well within free tier limits)
   - Check for any errors/warnings

### Common Issues & Solutions

#### Issue: Content not updating on live site
**Solution:** 
- Sanity uses CDN caching (faster but cached)
- Content updates appear within 1-2 minutes
- For immediate updates, you can disable CDN (`useCdn: false`) but will be slower

#### Issue: CORS errors in browser console
**Solution:**
- Add production domain to CORS origins in Sanity dashboard
- Make sure you added the exact domain (with/without www)
- Clear browser cache and retry

#### Issue: Images not loading
**Solution:**
- Verify images were uploaded to Sanity (not just file paths)
- Check image URLs in browser DevTools → Network tab
- Ensure Sanity image CDN is accessible

#### Issue: Staff can't access Sanity Studio
**Solution:**
- Verify they were invited in Sanity dashboard
- Have them check email for invite
- Make sure they're logging in with correct account

## Cache Strategy

Current configuration in `src/hooks/useSanityData.ts`:

- **Blog Posts:** 5 minute cache
- **Events:** 5 minute cache
- **Board Members:** 15 minute cache (rarely changes)
- **FAQs/Glossary:** 15 minute cache (rarely changes)
- **News Articles:** 10 minute cache

This means:
- Content editors see changes in Studio immediately
- Website visitors see changes within 5-15 minutes
- Balance between freshness and performance

## Backup Strategy

Sanity provides automatic backups, but you can also:

1. **Export data periodically:**
   ```bash
   npx sanity dataset export production backup-YYYY-MM-DD.tar.gz
   ```

2. **Store exports in secure location** (Google Drive, Dropbox, etc.)

3. **Schedule monthly exports** for peace of mind

## Training Materials for Staff

Create these resources for content editors:

1. **Video Tutorial:** How to add a blog post (5 min)
2. **Video Tutorial:** How to add an event (3 min)
3. **Quick Reference:** Common editing tasks (1-page PDF)
4. **Contact:** Who to call if Sanity is down or not working

## Support Contacts

- **Sanity Status:** https://status.sanity.io
- **Sanity Support:** support@sanity.io
- **Developer Contact:** [Your contact info]

## Free Tier Limits

Your project is on Sanity's free tier with these limits:

- **API Requests:** 500,000/month (more than enough)
- **Documents:** 10,000 (currently using ~350)
- **Assets:** 5GB bandwidth/month
- **Dataset Size:** 5GB

Monitor usage at: https://sanity.io/manage/project/rlwt7cpv/usage

**Recommendation:** You're well within limits. If you grow significantly, consider Sanity's Growth plan ($99/month).

## Success Criteria

Your Sanity setup is production-ready when:

- [x] All content imported successfully
- [ ] Environment variables set in production
- [ ] CORS configured for production domain
- [ ] Sanity Studio deployed
- [ ] Staff trained on Studio usage
- [ ] Production build tested locally
- [ ] Content updates tested end-to-end
- [ ] Monitoring plan in place

## Timeline

- **Before Launch (This Week):**
  - Deploy Sanity Studio
  - Add production domain to CORS
  - Set environment variables in hosting platform
  - Test production build

- **Launch Day:**
  - Monitor for errors
  - Test content updates
  - Have developer on standby

- **Week After Launch:**
  - Daily monitoring
  - Staff training sessions
  - Document any issues/solutions

---

**Last Updated:** January 8, 2026  
**Project:** The Rowan Center  
**Sanity Project ID:** rlwt7cpv  
**Dataset:** production
