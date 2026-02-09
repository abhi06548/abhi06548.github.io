# CMS Setup Guide

Edit your portfolio content through a web interface using Netlify Identity.

## ⏱️ Setup Time: ~10 minutes

---

## Step 1: Connect Your GitHub Repo to Netlify (5 min)

1. Go to: https://app.netlify.com
2. Click: **"Add new site"** → **"Import an existing project"**
3. Choose: **"Deploy with GitHub"** (click the GitHub icon/button)
4. Authorize Netlify to access your GitHub account (if prompted)
5. Select your repository: `abhi06548/abhi06548.github.io`
6. **Build settings** (Netlify should auto-detect):
   - Build command: Leave empty or `echo "No build needed"`
   - Publish directory: Leave empty or `/`
7. Click: **"Deploy site"**
8. Wait for deployment (~30 seconds)
9. **Note your site URL**: `https://your-site-name-123.netlify.app` (shown after deployment)

---

## Step 2: Enable Netlify Identity & Git Gateway (3 min)

### 2.1: Enable Netlify Identity

1. In Netlify dashboard → Your site → **Site settings** → **Identity**
2. Click: **"Enable Identity"**
3. Under **Registration preferences**: Select **"Invite only"** (recommended) or **"Open"**
4. (Optional) Scroll to **External providers** → **GitHub** → Click **"Enable GitHub"** for GitHub login
5. Click **"Save"**

### 2.2: Enable Git Gateway

1. Still in **Site settings** → **Identity**
2. Scroll down to **Services** → **Git Gateway**
3. Click: **"Enable Git Gateway"**
4. Authorize Netlify to access your GitHub account (if prompted)
5. Git Gateway is now enabled! ✅

---

## Step 3: Commit & Deploy Config (2 min)

1. Make sure your `config.yml` uses `git-gateway` backend (already done)
2. Commit and push:
   ```bash
   git add public/admin/config.yml public/admin/index.html
   git commit -m "Configure Decap CMS with git-gateway"
   git push origin main
   ```
3. Wait 1-2 minutes for GitHub Pages to deploy

---

## Step 4: Test & Create Account (2 min)

1. Visit: `https://abhi06548.github.io/admin/`
2. Click **"Login"** or **"Sign up"**
3. **If "Invite only"**: 
   - Go to Netlify dashboard → Identity → Invite users
   - Enter your email → Send invite
   - Check your email → Click invite link → Set password
4. **If "Open"**: 
   - Sign up directly with email/password
5. After login, you should see the CMS interface! 🎉
6. Start editing your content!

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
- Check browser console (F12) for errors
- Verify Netlify Identity is enabled
- Verify Git Gateway is enabled
- Clear browser cache and try again

**"Can't login"?**
- If "Invite only": Make sure you've been invited via Netlify Identity
- Check your email for the invite link
- Try resetting password in Netlify Identity

**Can't save changes?**
- Verify Git Gateway is enabled and authorized
- Check you have write access to the repository
- Verify branch is `main` in config.yml
- Check Netlify Identity → Git Gateway status

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
