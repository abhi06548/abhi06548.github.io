# Google Analytics 4 Setup Guide

## 📊 Getting Your GA4 Measurement ID

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** (gear icon)
3. Create a new **Account** and **Property**
4. Select **"Web"** as the platform

### Step 2: Get Your Measurement ID
1. In Admin → Property → Data Streams
2. Click on your **Web stream**
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add to Your Portfolio
1. Open `src/main.jsx`
2. Replace this line:
```javascript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your GA4 Measurement ID
```

With your actual Measurement ID:
```javascript
const GA_MEASUREMENT_ID = 'G-ABC1234567'; // Your actual ID
```

### Step 4: Deploy
1. Build and deploy your site:
```bash
npm run build
git add .
git commit -m "Add Google Analytics"
git push
```

### Step 5: Verify It's Working
1. Visit your deployed site: `https://abhi06548.github.io`
2. Go to Google Analytics → Reports → Realtime
3. You should see your visit in real-time!

---

## 🎯 What's Tracked

### Automatic Tracking:
- ✅ **Page Views**: Every page visit is automatically tracked
- ✅ **Route Changes**: SPA navigation between `/` and `/projects`
- ✅ **User Location**: Geographic data (city, country)
- ✅ **Device Info**: Browser, OS, screen resolution
- ✅ **Traffic Sources**: How users found your site (Google, LinkedIn, direct, etc.)
- ✅ **Session Duration**: How long users stay on your site

### Available in Google Analytics Dashboard:
- Real-time visitors
- Page view counts
- Bounce rate
- Average session duration
- Traffic sources (Acquisition)
- User demographics
- Popular pages

---

## 🔧 Optional: Track Custom Events

If you want to track specific interactions (e.g., button clicks, downloads), you can use the `trackEvent` function:

```javascript
import { trackEvent } from './analytics';

// Example: Track resume download
<a 
  href="/Full_time_Resume_DataEngg_final.pdf"
  onClick={() => trackEvent('Resume', 'Download', 'PDF')}
>
  Download Resume
</a>

// Example: Track social media clicks
<a 
  href="https://linkedin.com/in/abhishek06548"
  onClick={() => trackEvent('Social', 'Click', 'LinkedIn')}
>
  LinkedIn
</a>
```

---

## 🛡️ Privacy & Performance

### Privacy-Friendly:
- No personal data is collected
- Complies with GDPR/CCPA (anonymous data only)
- No cookies required for basic tracking

### Performance:
- Lightweight: ~45KB (minified + gzipped)
- Asynchronous loading (doesn't block page render)
- Minimal impact on page speed

---

## 📈 Accessing Your Analytics

1. Go to [analytics.google.com](https://analytics.google.com/)
2. Select your property
3. View reports:
   - **Real-time**: See current visitors
   - **Acquisition**: Traffic sources
   - **Engagement**: Page views, popular pages
   - **Retention**: Returning visitors

---

## 🚨 Troubleshooting

### Not seeing data?
1. **Check Measurement ID**: Make sure you replaced `G-XXXXXXXXXX` with your actual ID
2. **Wait 24-48 hours**: GA4 can take time to start showing historical data (but Realtime works immediately)
3. **Check browser console**: Open DevTools → Console → Look for GA errors
4. **Ad blockers**: Disable ad blockers to test (they block GA)

### Testing locally:
GA will work on `localhost` during development, but visits won't appear in production reports.

---

## 📚 Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [React GA4 Library](https://github.com/PriceRunner/react-ga4)

---

## ✨ That's It!

Your portfolio now has professional analytics tracking. Visit your Google Analytics dashboard to see insights about your visitors! 🎉

