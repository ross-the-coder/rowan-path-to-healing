# Sanity CMS - Quick Start

## Import All Content in 3 Steps

### Step 1: Get API Token

1. Go to: https://sanity.io/manage/personal/project/rlwt7cpv/api
2. Click **"Tokens"** tab → **"Add API token"**
3. **Name**: `Migration Script`
4. **Permissions**: **Editor**
5. **Copy the token** (you won't see it again!)

### Step 2: Set Token

```bash
export SANITY_API_TOKEN="paste-your-token-here"
```

### Step 3: Import Everything

```bash
npm run import:all
```

This imports:
- ✅ **6 Board Members** 
- ✅ **31 Glossary Terms**
- ✅ **8 FAQs**
- ✅ **4 Authors**
- ✅ **3 Sample Blog Posts**
- ✅ **3 Sample Events**
- ✅ **500+ News Articles** (takes 3-5 minutes)
- ✅ **400+ Community Resources** (takes 2-3 minutes)

**Total: 955+ items imported!**

---

## Individual Imports

If you want to import specific content only:

```bash
npm run import:board      # 6 board members
npm run import:glossary   # 31 glossary terms  
npm run import:faqs       # 8 FAQs
npm run import:authors    # 4 authors (run before blog)
npm run import:blog       # 3 sample blog posts
npm run import:events     # 3 sample events
npm run import:news       # 500+ news articles (takes 3-5 min)
npm run import:resources  # 400+ community resources (takes 2-3 min)
```

---

## After Import

1. **Open Sanity Studio**: http://localhost:3333
2. **Add photos** to board members
3. **Create more content** as needed
4. **View on website** - refresh to see Sanity data!

---

## Troubleshooting

**Error: Token not set**
```bash
export SANITY_API_TOKEN="your-token"
```

**Error: Already exists**
- Delete content in Sanity Studio first
- Or keep existing data

**Need help?**
- See detailed guide: `IMPORT_GUIDE.md`
- Check Sanity Studio: http://localhost:3333

---

**Ready? Run: `npm run import:all`** 🚀
