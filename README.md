# 🕌 Siraj-ul-Uloom CMS

**A production-ready, fully admin-controlled CMS website for Islamic non-profit institutions**

> **Core Philosophy:** Everything is managed from the admin dashboard. ZERO hardcoded content in the UI.

---

## ✨ Key Features

### 🎯 Admin Dashboard
- **No coding required** - Admin users can manage all content
- **Drag-and-drop sections** - Reorder page sections easily
- **Dynamic forms** - Section-specific editing interfaces
- **Image management** - Upload and organize media
- **Live preview** - See changes in real-time (optional)

### 📄 Dynamic Content Management
- **Pages** - Create and manage multiple pages
- **Sections** - Add hero, about, programs, stats, testimonials, gallery, donations, contact
- **Navigation** - Edit menu items and URLs
- **Settings** - Global site configuration
- **Media** - Image and file management
- **Testimonials** - Student and parent testimonials
- **Donations** - Flexible donation plan setup

### 🔐 Security
- **Admin-only authentication** - Supabase Auth integration
- **No public signup** - Admins created manually
- **Protected routes** - Middleware-based access control
- **Secure credentials** - Environment variable management

### 🎨 Modern Design
- **Islamic theme** - Green, gold, and cream color palette
- **Fully responsive** - Mobile-first approach
- **Smooth animations** - Professional transitions
- **Accessibility-first** - WCAG compliance

### ⚡ Performance
- **Next.js 15** - Latest React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Supabase** - Real-time database with auth

### 🚀 Scalable Architecture
- **CMS-like structure** - Flexible content model
- **JSON-based sections** - Store any data structure
- **Extensible design** - Easy to add new features
- **Database-driven** - Everything is in database

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Supabase account (free)
- GitHub account (for deployment)

### Setup (5 minutes)

1. **Clone repository**
   ```bash
   git clone <repo-url>
   cd sirajululoom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Supabase**
   - Create project at supabase.com
   - Run SQL schema from `supabase/schema.sql`
   - Create admin user in Auth section
   - Copy API keys

4. **Configure environment**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

5. **Run development server**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

6. **Access admin panel**
   ```
   http://localhost:3000/admin/login
   Email: your-admin@example.com
   Password: (from Supabase)
   ```

---

## 📊 Database Schema

### Core Tables

| Table | Purpose |
|-------|---------|
| `settings` | Global site configuration |
| `pages` | Page templates (home, about, programs, contact) |
| `sections` | Dynamic page sections with content |
| `navigation` | Menu items and links |
| `media` | Images and files |
| `donations` | Donation plan options |
| `testimonials` | Student/parent testimonials |

---

## 🎨 Supported Section Types

```
┌─────────────────────────────────────┐
│  DYNAMIC PAGE SECTIONS              │
├─────────────────────────────────────┤
│ 🎬 Hero       - Banner with CTA     │
│ 📖 About      - Text + image        │
│ 📚 Programs   - Program cards       │
│ 📊 Stats      - Statistics/counters │
│ 💬 Testimonials - Student feedback  │
│ 🖼️  Gallery    - Image grid         │
│ 💰 Donation   - Donation plans      │
│ 📧 Contact    - Contact form        │
└─────────────────────────────────────┘
```

---

## 🗂️ Project Structure

```
sirajululoom/
├── src/
│   ├── app/
│   │   ├── admin/              # Admin dashboard
│   │   │   ├── login/
│   │   │   ├── dashboard/
│   │   │   ├── pages/
│   │   │   └── sections/
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Home page
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Sections.tsx        # Section components
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── api.ts              # Database queries
│   │   └── auth.ts
│   └── middleware.ts
├── supabase/
│   └── schema.sql              # Database schema
├── .github/workflows/
│   └── deploy.yml              # CI/CD pipeline
└── SETUP_GUIDE.md              # Detailed setup
```

---

## 🔐 Admin Dashboard Routes

| Route | Purpose |
|-------|---------|
| `/admin/login` | Admin login page |
| `/admin/dashboard` | Dashboard overview |
| `/admin/pages` | Page management |
| `/admin/sections` | Section editor |
| `/admin/navigation` | Menu editor |
| `/admin/media` | Image upload |
| `/admin/donations` | Donation plans |
| `/admin/testimonials` | Testimonials |
| `/admin/settings` | Global settings |

---

## 📚 Content Example: Hero Section

```json
{
  "title": "Welcome to Siraj-ul-Uloom",
  "subtitle": "Excellence in Islamic Education",
  "backgroundImage": "https://...",
  "ctaText": "Enroll Now",
  "ctaLink": "/programs"
}
```

---

## 🎓 Programs Supported

The website supports content for:
- **Hifz-e-Quran** - Quran memorization program
- **School Education** - Classes till 10th grade
- **Islamic Studies** - Religious education
- **Daily Classes** - Regular classes
- **Weekend Programs** - Additional programs

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)
```bash
git push
# Auto-deploys from GitHub
```

### Option 2: Self-Hosted
```bash
npm run build
npm start
```

---

## 🎨 Design Theme

### Colors
- **Primary:** `#1a472a` (Islamic Dark)
- **Secondary:** `#2d5f3f` (Islamic Green)
- **Accent:** `#d4af37` (Gold)
- **Background:** `#f5f1e8` (Cream)

### Typography
- **Headings:** Bold, Islamic Green
- **Body:** Gray on white
- **Accents:** Gold highlights

---

## 🔒 Security Features

✅ Admin authentication with Supabase Auth  
✅ Protected routes via middleware  
✅ No public signup  
✅ Secure environment variables  
✅ Database access control  
✅ Session management  

---

## 📊 Admin Features

### Dashboard Overview
- Quick stats (pages, sections, media, testimonials)
- Quick action buttons
- Recent activity (optional)

### Page Editor
- Create/edit pages
- Manage metadata (SEO)
- Add sections to pages

### Section Editor
- Add/remove sections
- Edit section content
- Reorder sections (drag-and-drop)
- Type-specific forms

### Image Management
- Upload images
- Organize by category
- Set alt text
- Delete files

### Settings Panel
- Site name and tagline
- Contact information
- Social media links
- Logo upload
- Hero text

---

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop layouts
- ✅ Touch-friendly admin UI
- ✅ Accessibility features

---

## 🚀 Performance

- **Next.js 15** - Latest framework
- **Static Generation** - Fast page loads
- **Image Optimization** - Automatic optimization
- **Database Queries** - Efficient queries
- **Caching** - Built-in caching

---

## 📞 Support

For setup help, see [SETUP_GUIDE.md](SETUP_GUIDE.md)

For issues:
1. Check troubleshooting section in setup guide
2. Review database schema
3. Verify environment variables
4. Check Supabase dashboard

---

## 📄 License

Built for Siraj-ul-Uloom Islamic Institute.

---

## ✨ Future Roadmap

- [ ] Drag-and-drop section builder
- [ ] Live preview editor
- [ ] Multi-language support (Urdu/English)
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Blog/news section
- [ ] Event calendar
- [ ] Payment integration
- [ ] Student portal
- [ ] Content versioning

---

## 🎯 Getting Started Checklist

- [ ] Clone repository
- [ ] Install dependencies
- [ ] Create Supabase project
- [ ] Run database schema
- [ ] Setup environment variables
- [ ] Create admin user
- [ ] Run dev server
- [ ] Access admin dashboard
- [ ] Add initial content
- [ ] Deploy to production

---

**Built with ❤️ for Siraj-ul-Uloom**

**Made in 2026 | Production Ready MVP**
