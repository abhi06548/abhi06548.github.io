# CMS Setup Guide

Edit your portfolio content through a web interface using GitHub OAuth.

## ⏱️ Setup Time: ~15 minutes

---

## Step 1: Create GitHub OAuth App (5 min)

1. Go to: https://github.com/settings/developers
2. Click: "New OAuth App"
3. Fill in:
   ```
   Application name: Portfolio CMS
   Homepage URL: https://abhi06548.github.io
   Authorization callback URL: https://abhi06548.github.io/admin/
   ```
4. Click: "Register application"
5. Copy **Client ID** and **Client Secret** (save these!)

---

## Step 2: Set Up OAuth Proxy (10 min)

**Why?** GitHub Pages can't handle OAuth directly. We need a Netlify Functions proxy to handle authentication.

### 2.1: Connect Your GitHub Repo to Netlify

1. On the "Add your projects to Netlify" page, click: **"Import an existing project"**
2. Choose: **"Deploy with GitHub"** (click the GitHub icon/button)
3. Authorize Netlify to access your GitHub account (if prompted)
4. Select your repository: `abhi06548/abhi06548.github.io`
5. **Build settings** (Netlify should auto-detect):
   - Build command: Leave empty or `echo "No build needed"`
   - Publish directory: Leave empty or `/`
6. Click: **"Deploy site"**
7. Wait for deployment (~30 seconds)
8. **Note your site URL**: `https://your-site-name-123.netlify.app` (shown after deployment)

Netlify will automatically detect and deploy the `netlify/functions/auth.js` function.

1. In Netlify dashboard → Your site → **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add first variable:
   - Key: `GITHUB_CLIENT_ID`
   - Value: (paste your Client ID from Step 1)
   - Click "Add variable"
4. Add second variable:
   - Key: `GITHUB_CLIENT_SECRET`
   - Value: (paste your Client Secret from Step 1)
   - Click "Add variable"
5. Both variables should now be listed

### 2.3: Update Config File

1. Open: `public/admin/config.yml`
2. Update `base_url`:
   ```yaml
   backend:
     name: github
     repo: abhi06548/abhi06548.github.io
     branch: main
     base_url: https://your-netlify-site.netlify.app  # Replace with YOUR URL
     auth_endpoint: /.netlify/auth
   ```
3. Commit and push:
   ```bash
   git add public/admin/config.yml
   git commit -m "Update CMS config"
   git push origin main
   ```

---

## Step 3: Test (2 min)

1. Wait 1-2 minutes for GitHub Pages to deploy
2. Visit: `https://abhi06548.github.io/admin/`
3. Click "Login with GitHub"
4. Authorize the application
5. Start editing! 🎉

---

## 📝 What You Can Edit

- Profile (name, title, photo, summary)
- Experience entries
- Skills (by category)
- Timeline milestones
- Contact information

All changes are automatically committed to your GitHub repo.

---

## 🆘 Troubleshooting

**"Loading..." forever?**
- Check browser console (F12)
- Verify OAuth callback URL: `https://abhi06548.github.io/admin/`
- Check Netlify function: `https://your-site.netlify.app/.netlify/functions/auth`

**"OAuth error"?**
- Verify environment variables in Netlify
- Check Client ID and Client Secret are correct
- Ensure callback URL matches exactly

**Can't save changes?**
- Check you have write access to the repository
- Verify branch is `main` in config.yml
- Check Netlify function logs

---

## 📁 Content Structure

```
content/
├── profile/profile.md          # Profile info
├── experience/*.md             # Work experience
├── skills/*.md                # Skills by category
├── timeline/*.md              # Timeline milestones
└── contact/contact.md         # Contact info
```

---

**Done!** You can now edit your portfolio through the web interface.
