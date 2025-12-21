# Importing Existing Content to Sanity

This guide walks you through importing the existing website content (board members, blog posts, events, etc.) into Sanity CMS.

## Prerequisites

1. **Sanity Studio is running** - `npm run dev` (should be on http://localhost:3333)
2. **You have a Sanity API token** - Follow steps below to get one

## Step 1: Get Your Sanity API Token

1. Go to https://sanity.io/manage (log in if needed)
2. Select your project: **The Rowan Center** (project ID: `rlwt7cpv`)
3. In the left sidebar, click **API**
4. Click the **Tokens** tab
5. Click **Add API token**
6. Configure the token:
   - **Name**: `Migration Script Token` (or any name you prefer)
   - **Permissions**: Select **Editor** (allows creating/updating content)
7. Click **Create**
8. **IMPORTANT**: Copy the token immediately - it won't be shown again!

## Step 2: Set the Environment Variable

In your terminal (from the `sanity/` directory):

```bash
export SANITY_API_TOKEN="your-token-here"
```

Replace `your-token-here` with the actual token you copied.

**Note**: This token is only stored in your current terminal session. If you close the terminal, you'll need to set it again.

## Step 3: Run the Imports

### Import Board Members

Imports all 6 board members from the website:

```bash
npm run import:board
```

Expected output:
```
🚀 Starting board members import...

✅ Imported: Patricia Williams (Board Chair)
✅ Imported: Dr. Robert Martinez (Vice Chair)
✅ Imported: Jennifer Chen (Treasurer)
✅ Imported: Michael Thompson (Secretary)
✅ Imported: Lisa Rodriguez (Board Member)
✅ Imported: David Park (Board Member)

✨ Import complete!
   ✅ Imported: 6

📝 Next steps:
   1. Open Sanity Studio: http://localhost:3333
   2. Go to "Board Member" documents
   3. Add photos for each board member
   4. Add email addresses if public
   5. Add LinkedIn URLs if available
```

## Step 4: Verify in Sanity Studio

1. Open http://localhost:3333
2. Click on **Board Member** in the left sidebar
3. You should see all 6 board members listed
4. Click on each one to add:
   - Photos (upload images)
   - Email addresses (if public)
   - LinkedIn URLs (optional)

## Step 5: See It on the Website

1. Make sure the main website dev server is running:
   ```bash
   cd ..  # Go back to project root
   npm run dev
   ```

2. Open http://localhost:8080/board-of-directors (or whatever your dev port is)
3. The board members should now be loaded from Sanity!
4. If Sanity has no data or fails, it will show the original fallback content with a warning banner

## Available Imports

Currently available:
- ✅ **Board Members** - `npm run import:board` (6 members)

Coming soon:
- 📝 Glossary Terms (~50 terms)
- 📝 Sample Blog Posts
- 📝 Sample Events

## Troubleshooting

### Error: "SANITY_API_TOKEN environment variable is not set"

You need to set the token in your terminal:
```bash
export SANITY_API_TOKEN="your-token-here"
```

### Error: "Found X existing board members"

The script detected existing data. Options:
1. Keep existing data (do nothing)
2. Delete in Sanity Studio and re-run the script

To delete in Studio:
1. Go to http://localhost:3333
2. Click **Board Member**
3. Select all documents (checkbox at top)
4. Click the trash icon
5. Re-run `npm run import:board`

### Import succeeded but I don't see data on the website

Check:
1. Is the main website dev server running? (`npm run dev` in project root)
2. Hard refresh the page (Cmd+Shift+R or Ctrl+Shift+R)
3. Check browser console for errors (F12 → Console tab)
4. Verify data is in Sanity Studio (http://localhost:3333)

### The website shows a yellow warning banner

This is normal! It means:
- Sanity is configured correctly
- But there's no content yet, so it's showing fallback data
- Run the import scripts to populate Sanity

## Creating Content Manually

Instead of importing, you can create content manually in Sanity Studio:

### Create a Blog Post

1. Open http://localhost:3333
2. Click **Blog Post** → **Create**
3. Fill in all required fields:
   - Title
   - Slug (auto-generated from title)
   - Excerpt
   - Body (rich text editor)
   - Author (you may need to create an Author first)
   - Published Date
   - Category
   - Status: **Published**
4. Optionally add:
   - Tags
   - Featured image
   - Mark as Featured
5. Click **Publish**

### Create an Event

1. Open http://localhost:3333
2. Click **Event** → **Create**
3. Fill in required fields:
   - Title
   - Slug
   - Date
   - Time
   - Location
   - Description
   - Category
   - Status: **Upcoming**
4. Optionally add:
   - Registration Link
   - Mark as Featured
5. Click **Publish**

### Create an Author

1. Open http://localhost:3333
2. Click **Author** → **Create**
3. Fill in:
   - Name
   - Slug
   - Bio
   - Image (optional)
4. Click **Publish**

## Security Best Practices

1. **Never commit your API token to git**
2. **Don't share your token publicly**
3. **Delete old tokens** you're not using (in Sanity dashboard)
4. **Use Editor permissions** for imports (not Admin)
5. **Rotate tokens** periodically for security

## Next Steps

After importing content:

1. ✅ Review all imported content in Sanity Studio
2. ✅ Add missing information (photos, links, etc.)
3. ✅ Create sample blog posts to test the blog page
4. ✅ Create sample events to test the events page
5. ✅ Train staff on how to use Sanity Studio
6. ✅ Deploy Sanity Studio to production (later)

## Support

If you encounter issues:
1. Check this guide first
2. Check the browser console for errors
3. Check the terminal for error messages
4. Verify your API token is valid
5. Make sure Sanity Studio is running

---

**Created**: December 21, 2024  
**Last Updated**: December 21, 2024
