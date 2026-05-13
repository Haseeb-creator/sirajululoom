# Siraj-ul-Uloom CMS - Setup & Deployment Guide

## 🎯 Project Overview

**Project Name:** Siraj-ul-Uloom (مدرسہ سراج العلوم)  
**Type:** Production-ready CMS website for an Islamic non-profit institution  
**Key Feature:** Everything is controlled from admin dashboard - ZERO hardcoded content

---

## 📋 Technology Stack

### Frontend
- **Next.js** 15 (App Router)
- **TypeScript** 5
- **Tailwind CSS** 3.4
- **React** 19

### Backend
- **Supabase** (PostgreSQL + Auth + Storage)
- **Node.js** 18+

### Deployment
- **Vercel** (recommended)
- **GitHub Actions** (CI/CD)

---

## 🚀 Quick Start

### 1. Prerequisites

Ensure you have:
- Node.js 18+ installed
- npm or yarn package manager
- GitHub account
- Supabase account (free tier available)
- Vercel account (optional, for deployment)

### 2. Clone Repository

```bash
git clone <your-repo-url>
cd sirajululoom
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup Supabase

#### Step 4.1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up / Log in
3. Click "New Project"
4. Fill in project details:
   - **Name:** siraj-ul-uloom
   - **Database Password:** Create a strong password
   - **Region:** Choose closest to your users (India: ap-south-1)
5. Click "Create new project" and wait for provisioning

#### Step 4.2: Get API Keys

1. Go to **Project Settings** → **API**
2. Copy:

#### Step 4.3: Run Database Schema

1. Go to **SQL Editor** in Supabase dashboard
2. Create a new query
3. Copy the entire content from `supabase/schema.sql`
4. Paste into SQL Editor
5. Click "Run" or press `Ctrl+Enter`

#### Step 4.4: Setup Authentication

1. Go to **Authentication** → **Providers**
2. Email provider is already enabled
3. Go to **Authentication** → **Users**
4. Click "Invite" or "Create new user"
5. Add your admin email and password

### 5. Setup Environment Variables

Create `.env.local` file in project root:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Admin Dashboard Access

### Accessing Admin Panel

1. Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Enter your admin email and password (created in Supabase)
3. Click "Sign In"
4. You'll be redirected to `/admin/dashboard`

### Admin Dashboard Features

The admin dashboard includes:

#### Pages Management
- View all pages (Home, About, Programs, Contact)
- Edit page title, slug, and metadata
- Edit page sections dynamically

#### Sections Management
- Add/remove sections to pages
- Edit section content (title, subtitle, JSON data)
- Reorder sections via drag-and-drop (future)
- Supported section types:
  - **hero** - Hero banner with CTA
  - **about** - About section with image and highlights
  - **programs** - Programs/services cards
  - **stats** - Statistics/counters
  - **testimonials** - Student/parent testimonials
  - **gallery** - Image gallery
  - **donation** - Donation plans
  - **contact** - Contact form

#### Navigation Management
- Edit menu items
- Change URLs
- Reorder navigation

#### Media Management
- Upload images
- Organize by category (gallery, testimonials, etc.)
- Edit alt text
- Delete media files

#### Donations
- Create/edit donation plans
- Set amounts and descriptions

#### Testimonials
- Add/edit student and parent testimonials

#### Settings
- Edit global settings:
  - Site name, tagline
  - Phone, email, address
  - Logo, social media URLs
  - Hero text

---

## 📊 Database Schema

### Tables Overview

```
settings
├── id (UUID)
├── key (TEXT) - Unique setting key
├── value (TEXT/JSON) - Setting value
└── created_at, updated_at

pages
├── id (UUID)
├── slug (TEXT) - URL slug
├── title (TEXT)
├── meta_title (TEXT)
├── meta_description (TEXT)
└── created_at, updated_at

sections
├── id (UUID)
├── page_id (UUID) - FK to pages
├── type (TEXT) - Section type
├── title (TEXT)
├── subtitle (TEXT)
├── content (JSONB) - Flexible JSON content
├── order_index (INTEGER)
└── created_at, updated_at

navigation
├── id (UUID)
├── label (TEXT)
├── link (TEXT)
├── order_index (INTEGER)
└── created_at, updated_at

media
├── id (UUID)
├── file_url (TEXT)
├── alt_text (TEXT)
├── category (TEXT)
└── created_at, updated_at

donations
├── id (UUID)
├── title (TEXT)
├── amount (INTEGER)
├── description (TEXT)
└── created_at, updated_at

testimonials
├── id (UUID)
├── name (TEXT)
├── message (TEXT)
└── created_at, updated_at
```

---

## 🎨 Frontend Structure

### Dynamic Page Rendering

Pages are built dynamically from database:

```
Page (from pages table)
  ↓
Get sections for page
  ↓
For each section, render corresponding React component:
  - HeroSection
  - AboutSection
  - ProgramsSection
  - StatsSection
  - TestimonialsSection
  - GallerySection
  - DonationSection
  - ContactSection
```

### Component Examples

#### Hero Section Content Structure
```json
{
  "title": "Welcome to Siraj-ul-Uloom",
  "subtitle": "Excellence in Islamic Education",
  "backgroundImage": "https://...",
  "ctaText": "Learn More",
  "ctaLink": "/programs"
}
```

#### Programs Section Content
```json
{
  "programs": [
    {
      "name": "Hifz-e-Quran",
      "description": "Comprehensive Quran memorization program",
      "icon": "📖",
      "details": ["3-5 years duration", "Expert tutors", "Daily classes"]
    }
  ]
}
```

---

## 🔒 Security

### Authentication
- ✅ Admin-only Supabase Auth
- ✅ No public signup
- ✅ Protected /admin routes via middleware
- ✅ Session-based access control

### Environment Variables
- Store in `.env.local` (never commit)
- Use `NEXT_PUBLIC_*` only for public data
- Keep `SUPABASE_SERVICE_ROLE_KEY` secret

### Database Security
- Row Level Security (RLS) can be enabled
- Implement user-based access control if needed

---

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

#### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sirajululoom.git
git push -u origin main
```

#### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import GitHub repository
4. Select project
5. Add environment variables (from `.env.local`)
6. Click "Deploy"

#### 3. GitHub Actions Automation
Set up GitHub secrets:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### Option 2: Deploy to Self-Hosted Server

```bash
# Build
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "sirajululoom" -- start
pm2 startup
pm2 save
```

---

## 📱 Design Theme

### Color Palette
```css
--islamic-dark: #1a472a    /* Dark green */
--islamic-green: #2d5f3f   /* Main green */
--islamic-light: #4a9d6f   /* Light green */
--islamic-gold: #d4af37    /* Gold accent */
--islamic-cream: #f5f1e8   /* Cream/beige */
```

### Typography
- **Headings:** Bold, Islamic green color
- **Body:** Light gray on white
- **Accents:** Gold for highlights

### Components
- Smooth transitions and hover effects
- Responsive grid layouts
- Islamic-inspired design elements
- Accessibility-first approach

---

## 🔧 Development

### Project Structure
```
sirajululoom/
├── src/
│   ├── app/
│   │   ├── admin/          # Admin dashboard routes
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Sections.tsx
│   ├── lib/
│   │   ├── supabase.ts     # Supabase client
│   │   ├── api.ts          # Database functions
│   │   └── auth.ts         # Auth utilities
│   └── middleware.ts       # Auth protection
├── supabase/
│   └── schema.sql          # Database schema
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

### Common Commands

```bash
# Development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

---

## 🐛 Troubleshooting

### Issue: "Cannot find module 'next'"
**Solution:** Run `npm install`

### Issue: Supabase connection error
**Solution:** 
- Verify environment variables are set correctly
- Check Supabase project is active
- Ensure database schema is created

### Issue: Admin login not working
**Solution:**
- Verify admin user exists in Supabase → Authentication → Users
- Check email/password are correct
- Clear browser cookies and try again

### Issue: Images not loading
**Solution:**
- Upload images via admin media panel
- Copy image URL from Supabase Storage
- Update section content with image URL

---

## 📚 API Documentation

### Getting Data from Database

```typescript
// Import API functions
import { getPageBySlug, getSectionsByPage, getSetting } from '@/lib/api'

// Get a page by slug
const page = await getPageBySlug('home')

// Get sections for a page
const sections = await getSectionsByPage(page.id)

// Get global setting
const siteName = await getSetting('site_name')
```

### Adding New Section Type

1. Add new section type to database schema (optional)
2. Create component in `src/components/Sections.tsx`:
   ```typescript
   export function CustomSection({ data }: SectionProps) {
     return (/* Your JSX */)
   }
   ```
3. Add case in `src/app/page.tsx`:
   ```typescript
   case 'custom':
     return <CustomSection key={section.id} data={section} />
   ```

---

## 📞 Support & Maintenance

### Regular Tasks
- Monitor Supabase storage usage
- Backup database regularly
- Update Next.js and dependencies
- Review admin activity logs

### Backup Strategy
1. Export Supabase database via dashboard
2. Store in GitHub or cloud storage
3. Automate backups (Vercel provides backup features)

### Performance Optimization
- Enable image optimization in Next.js
- Use Supabase edge functions for caching
- Implement ISR (Incremental Static Regeneration)
- Monitor Core Web Vitals

---

## 📄 License

This project is built for Siraj-ul-Uloom.

---

## ✨ Future Enhancements

- [ ] Drag-and-drop section ordering
- [ ] Live preview in admin
- [ ] Multi-language support (Urdu)
- [ ] Email notifications for inquiries
- [ ] Analytics dashboard
- [ ] SEO optimization tools
- [ ] Blog/news section
- [ ] Event calendar
- [ ] Donation payment integration
- [ ] Student portal

---

## 🎓 Quick Tips

### For Admin Users
1. Keep admin password secure
2. Always preview changes before publishing
3. Use clear, descriptive section titles
4. Optimize images before uploading
5. Regularly update content

### For Developers
1. Always test locally before deploying
2. Keep environment variables secure
3. Document custom changes
4. Follow TypeScript best practices
5. Test on mobile devices

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Supabase documentation: https://supabase.com/docs
3. Check Next.js documentation: https://nextjs.org/docs
4. Open an issue in GitHub repository

---

**Last Updated:** April 2026  
**Version:** 1.0.0 (MVP)
