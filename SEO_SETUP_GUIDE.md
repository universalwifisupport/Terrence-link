# SEO IMPLEMENTATION GUIDE

## How to Complete Remaining SEO Tasks

### 1. SET UP GOOGLE ANALYTICS

#### Step 1: Get Your Measurement ID
1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Create a new property or use existing one
4. Get your **Measurement ID** (looks like: `G-XXXXXXXXXX`)

#### Step 2: Add Measurement ID to Code
In `src/routes/__root.tsx`, replace `GA_MEASUREMENT_ID` with your actual ID:

**Find:**
```javascript
src: "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID",
```
```javascript
gtag('config', 'GA_MEASUREMENT_ID');
```

**Replace with (example):**
```javascript
src: "https://www.googletagmanager.com/gtag/js?id=G-1234567890",
```
```javascript
gtag('config', 'G-1234567890');
```

#### Step 3: Test Analytics
1. Deploy your site
2. Open it in a browser
3. Go to Google Analytics → Realtime
4. You should see your visit in real-time

---

### 2. SUBMIT TO GOOGLE SEARCH CONSOLE

#### Step 1: Verify Domain
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain (e.g., `terencelink.com`)
4. Follow verification steps (DNS, HTML tag, or file upload)

#### Step 2: Submit Sitemap
1. In GSC, go to "Sitemaps"
2. Enter `/sitemap.xml`
3. Click "Submit"
4. Wait for indexing (24-72 hours)

#### Step 3: Monitor Performance
1. Check "Performance" tab regularly
2. Monitor keywords and rankings
3. Check for any crawl errors
4. Monitor mobile usability

---

### 3. ADD OG:IMAGE TAGS

#### Create Images
You need to create 4 images (1200x630px minimum):
- **Homepage image:** Featured service image
- **About page:** Team or company image
- **Services page:** Service illustration
- **Contact page:** Call-to-action image

#### Add to Pages
Example for home page (`src/routes/index.tsx`):

```javascript
{ property: "og:image", content: "https://terencelink.com/og-home.jpg" },
{ property: "og:image:width", content: "1200" },
{ property: "og:image:height", content: "630" },
{ property: "og:image:type", content: "image/jpeg" },
```

Repeat for each page with appropriate image URLs.

---

### 4. IMPLEMENT BREADCRUMBS

#### Add to Pages (Example: About Page)

In `src/routes/about.tsx`:

```typescript
import { Breadcrumb } from "@/components/site/Breadcrumb";

// Inside AboutPage component:
<div>
  <div className="mx-auto max-w-7xl px-6 pt-6">
    <Breadcrumb items={[{ label: "About", href: "/about" }]} />
  </div>
  <PageHeader ... />
  {/* rest of page */}
</div>
```

#### Add to Multiple Pages
- `/about` - breadcrumb: `About`
- `/services` - breadcrumb: `What We Do`
- `/contact` - breadcrumb: `Contact`
- `/faq` - breadcrumb: `FAQ`
- `/terms` - breadcrumb: `Terms & Conditions`
- `/privacy` - breadcrumb: `Privacy Policy`
- `/disclaimer` - breadcrumb: `Disclaimer`
- `/refund` - breadcrumb: `Refund Policy`

---

### 5. CONVERT IMAGES TO WEBP

#### Using Online Tools
1. Go to [Cloudinary](https://cloudinary.com) or [TinyPNG](https://tinypng.com)
2. Upload your images
3. Download as WebP format
4. Replace image files in `/public/` and `/src/assets/`

#### Using Command Line (ImageMagick)
```bash
magick convert input.jpg output.webp
```

Or for multiple files:
```bash
for file in *.jpg; do magick convert "$file" "${file%.jpg}.webp"; done
```

#### Update HTML
Replace image src in your components:
```jsx
// Before
import heroImg from "@/assets/hero-living.jpg";

// After (if you want to support both)
import heroImg from "@/assets/hero-living.webp";

// Or update in JSX
<img src={heroImg} alt="..." />
```

---

### 6. SET UP MONITORING

#### Google PageSpeed Insights
1. Go to [PageSpeed Insights](https://pagespeed.web.dev)
2. Enter your domain
3. Check Mobile and Desktop scores
4. Review recommendations
5. Aim for score > 80

#### Check Mobile Friendly
1. Go to [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Enter your domain
3. Verify it's mobile friendly

#### Test Schema
1. Go to [Schema.org Validator](https://validator.schema.org)
2. Enter your domain
3. Verify all schemas are properly formatted

---

### 7. CONFIGURE CONVERSION TRACKING

#### Track Phone Calls
In Google Analytics:
1. Go to "Events"
2. Create custom event: `phone_call`
3. Trigger when user clicks phone button (tel: link)

#### Track Form Submissions
1. Go to "Events"
2. Create custom event: `form_submit`
3. Trigger when contact form is submitted

#### Track Page Views
Already configured automatically with Vite/React setup

---

## TESTING CHECKLIST

### Before Launch
- [ ] Analytics tracking working in realtime
- [ ] All meta tags present on each page
- [ ] Canonical tags correct
- [ ] Schema markup validates
- [ ] PageSpeed score > 80
- [ ] Mobile friendly test passes
- [ ] No 404 errors in GSC
- [ ] All images load properly
- [ ] Phone links work (test on mobile)
- [ ] Form submissions work
- [ ] Internal links work
- [ ] Responsive on all devices

### After Launch (Weekly)
- [ ] Check Google Analytics for traffic
- [ ] Check GSC for indexing status
- [ ] Monitor Core Web Vitals
- [ ] Check for crawl errors
- [ ] Verify analytics events firing

### Monthly
- [ ] Run PageSpeed Insights
- [ ] Check keyword rankings
- [ ] Review GSC performance
- [ ] Check backlinks
- [ ] Audit for broken links

---

## ESTIMATED TIMELINE

- **Google Analytics Setup:** 15 minutes
- **Google Search Console:** 30 minutes (includes verification)
- **OG:Image Implementation:** 1-2 hours (includes image creation)
- **Breadcrumb Implementation:** 30 minutes
- **Image WebP Conversion:** 1 hour
- **Testing & Verification:** 1 hour

**Total Estimated Time:** 4-5 hours

---

## NEXT STEPS

1. ✅ Basic SEO is done (schema, meta tags, structure)
2. ⏳ Configure Google Analytics (15 min)
3. ⏳ Submit to Google Search Console (30 min)
4. ⏳ Add OG images (1-2 hours)
5. ⏳ Implement breadcrumbs (30 min)
6. ⏳ Convert images to WebP (1 hour)
7. ✅ Monitor and maintain (ongoing)

Start with Step 2 (Google Analytics) as it's quick and essential!
