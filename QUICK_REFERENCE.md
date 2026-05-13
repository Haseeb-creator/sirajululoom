# 🚀 Quick Start Reference - Siraj-ul-Uloom CMS

## ⚡ 5-Minute Setup

```bash
# 1. Clone & install
git clone <repo>
cd sirajululoom
npm install

# 2. Setup Supabase
# - Create project at supabase.com
# - Run SQL schema from supabase/schema.sql
# - Create admin user in Auth section

# 3. Add env vars
cp .env.local.example .env.local
# Edit .env.local with your Supabase keys

# 4. Run dev server
npm run dev
# Open http://localhost:3000
```

---

## 🔑 Admin Credentials

- **Admin Panel:** `http://localhost:3000/admin/login`
- **Email:** Your Supabase admin email
- **Password:** From Supabase Auth

---

## 📂 Project Structure

```
src/
├── app/
│   ├── admin/          # All admin routes
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Sections.tsx    # Dynamic sections
│   └── AdminSidebar.tsx
├── lib/
│   ├── supabase.ts     # Supabase client
│   ├── api.ts          # DB queries ⭐
│   └── auth.ts         # Auth helpers
└── middleware.ts       # Route protection
```

---

## 📊 Database Tables

| Table | Purpose | Key Field |
|-------|---------|-----------|
| `settings` | Global config | `key` (unique) |
| `pages` | Pages | `slug` |
| `sections` | Page sections | `page_id`, `order_index` |
| `navigation` | Menu | `order_index` |
| `media` | Images | `category` |
| `donations` | Plans | `amount` |
| `testimonials` | Reviews | - |

---

## 🎨 Sections (8 types)

```
- hero          (banner with CTA)
- about         (text + image)
- programs      (card grid)
- stats         (counters)
- testimonials  (reviews)
- gallery       (image grid)
- donation      (plans)
- contact       (form)
```

---

## 💻 Common Commands

```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm start           # Start prod server
npm run lint        # Run ESLint
npm run type-check  # TypeScript check
```

---

## 🔐 Admin Routes

```
/admin/login           # Login
/admin/dashboard       # Overview
/admin/pages          # Page manager
/admin/sections       # Section editor
/admin/navigation     # Menu editor
/admin/media          # Image manager
/admin/donations      # Plans
/admin/testimonials   # Reviews
/admin/settings       # Global config
```

---

## 📚 API Usage (Quick Examples)

```typescript
// Get setting
const siteName = await getSetting('site_name')

// Get page
const page = await getPageBySlug('home')

// Get sections
const sections = await getSectionsByPage(page.id)

// Get navigation
const nav = await getNavigation()

// Get media
const images = await getMediaByCategory('gallery')

// Get donations
const plans = await getDonations()

// Get testimonials
const reviews = await getTestimonials()
```

---

## 🎯 Common Tasks

### Add New Section to Page

1. Go to `/admin/sections`
2. Click "Add Section"
3. Choose section type
4. Fill in content
5. Click Save
6. Reorder if needed

### Upload Image

1. Go to `/admin/media`
2. Click "Upload Image"
3. Select file
4. Add alt text & category
5. Copy URL to section

### Change Site Name

1. Go to `/admin/settings`
2. Edit "Site Name" field
3. Click "Save Changes"

### Add Menu Item

1. Go to `/admin/navigation`
2. Click "Add Link"
3. Enter label & URL
4. Set order
5. Save

---

## 🎨 Design Colors

```css
--islamic-dark:    #1a472a  (Primary)
--islamic-green:   #2d5f3f  (Secondary)
--islamic-light:   #4a9d6f  (Accent)
--islamic-gold:    #d4af37  (Highlight)
--islamic-cream:   #f5f1e8  (Background)
```

---

## 🚀 Deployment

### Vercel (1 Click)
```bash
# Push to GitHub
git push

# Vercel auto-deploys
# Add env vars in Vercel dashboard
```

### Self-Hosted
```bash
npm run build
npm start
# Use PM2 + Nginx
```

---

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Modules not found | `npm install` |
| Can't login | Check Supabase user exists |
| Images not loading | Upload via admin panel |
| Build fails | Check env vars |
| Database errors | Verify schema is created |

---

## 📞 Important Links

- **Docs:** [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **Deployment:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **API Ref:** [API_DOCUMENTATION.md](API_DOCUMENTATION.md)
- **Supabase:** https://supabase.com
- **Next.js:** https://nextjs.org

---

## ✅ Checklist

- [ ] Node.js 18+ installed
- [ ] Repository cloned
- [ ] Dependencies installed
- [ ] Supabase project created
- [ ] Schema imported
- [ ] Admin user created
- [ ] Environment variables set
- [ ] Dev server running
- [ ] Admin login works
- [ ] Content added

---

## 🎓 Next Steps

1. **Customize:** Edit colors in `tailwind.config.ts`
2. **Add Content:** Use admin dashboard
3. **Deploy:** Follow [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
4. **Monitor:** Setup uptime monitoring

---

**Version:** 1.0.0  
**Built:** April 2026  
**Status:** Production Ready ✅
