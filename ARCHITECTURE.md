# 🏗️ System Architecture - Siraj-ul-Uloom CMS

## Overall Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         SIRAJ-UL-ULOOM CMS                      │
└─────────────────────────────────────────────────────────────────┘

                    ┌─────────────────────────┐
                    │    CLIENT BROWSER       │
                    │  (Desktop/Mobile)       │
                    └────────────┬────────────┘
                                 │
                ┌────────────────┴────────────────┐
                │                                 │
        ┌───────▼────────┐            ┌──────────▼──────────┐
        │   FRONTEND     │            │  ADMIN DASHBOARD    │
        │   (Public)     │            │  (Protected)        │
        │                │            │                     │
        │ • Home Page    │            │ • Dashboard         │
        │ • About        │            │ • Pages Manager     │
        │ • Programs     │            │ • Sections Editor   │
        │ • Contact      │            │ • Media Manager     │
        │ • Footer       │            │ • Settings          │
        │ • Navbar       │            │ • Donations         │
        │                │            │ • Testimonials      │
        └───────┬────────┘            └────────┬────────────┘
                │                              │
                └──────────┬───────────────────┘
                           │
                    ┌──────▼──────┐
                    │  NEXT.JS    │
                    │  14 (App    │
                    │  Router)    │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    ┌───▼────┐      ┌──────▼──────┐      ┌───▼──────┐
    │ Pages  │      │ Components  │      │ Lib/API  │
    │        │      │             │      │          │
    │ • page │      │ • Navbar    │      │ • Queries│
    │ • home │      │ • Footer    │      │ • Auth   │
    │ • admin│      │ • Sections  │      │ • Utils  │
    │        │      │ • Sidebar   │      │          │
    └───┬────┘      └──────┬──────┘      └───┬──────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    ┌──────▼────────┐
```

---

## Data Flow Diagram

### Frontend Page Load

```
User Opens http://localhost:3000/
         │
         ▼
    /app/page.tsx (Server Component)
         │
         ├─────► getSetting('site_name')
         │
         ├─────► getPageBySlug('home')
         │
         ├─────► getSectionsByPage(pageId)
         │
         ├─────► getNavigation()
         │
         └─────► getTestimonials()
         │
         ▼
    Supabase (Multiple Parallel Queries)
         │
         ▼
    Data Returned (Cached)
         │
         ▼
    React Components Render
         │
         ├─────► <Navbar />
         │
         ├─────► {sections.map(s => <SectionComponent />)}
         │
         ├─────► <Footer />
         │
         ▼
    HTML Delivered to Browser
         │
         ▼
    CSS/JS Applied
         │
         ▼
    User Sees Page ✅
```

### Admin Update Flow

```
Admin Opens /admin/login
         │
         ▼
    Enter Email/Password
         │
         ▼
    Supabase Auth Check
         │
         ├─ If Valid ─────► Create Session
         │                  │
         │                  ▼
         │             Redirect to /admin/dashboard
         │                  │
         │                  ▼
         │             Load Dashboard Data
         │                  │
         ▼                  │
    If Invalid ──► Show Error
         │                  │
         └──────────────────┘
         │
         ▼
    Admin Navigates to /admin/sections
         │
         ▼
    Middleware Checks Session ✓
         │
         ▼
    Page Loads Sections from Database
         │
         ▼
    Admin Clicks "Edit Section"
         │
         ▼
    Opens Edit Form (Dynamic based on type)
         │
         ▼
    Admin Changes Content
         │
         ▼
    Submits Form
         │
         ▼
    Supabase Updates Database
         │
         ▼
    Frontend Automatically Updates ✅
         │
    (Next time someone views the page)
```

---

## Database Schema

```
┌─────────────────────────────────────────────────────────────┐
│                     SUPABASE DATABASE                        │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┐
│    settings      │
├──────────────────┤
│ id (PK)          │
│ key (UNIQUE)     │◄─────── "site_name", "phone", etc
│ value (JSON)     │
│ timestamps       │
└──────────────────┘

┌──────────────────┐
│     pages        │
├──────────────────┤
│ id (PK)          │
│ slug (UNIQUE)    │◄─────── "home", "about", "contact"
│ title            │
│ meta_title       │
│ meta_description │
│ timestamps       │
└──────────────────┘
         │
         │ (1:N)
         │
         ▼
┌──────────────────────────────┐
│      sections                │
├──────────────────────────────┤
│ id (PK)                      │
│ page_id (FK) ───────────────►│
│ type                         │
│ title                        │
│ subtitle                     │
│ content (JSONB)              │◄─────── Flexible JSON
│ order_index                  │         per section type
│ timestamps                   │
└──────────────────────────────┘

┌──────────────────┐
│   navigation     │
├──────────────────┤
│ id (PK)          │
│ label            │◄─────── Menu items
│ link             │
│ order_index      │
│ timestamps       │
└──────────────────┘

┌──────────────────┐
│     media        │
├──────────────────┤
│ id (PK)          │
│ file_url         │◄─────── From Supabase Storage
│ alt_text         │
│ category         │
│ timestamps       │
└──────────────────┘

┌──────────────────┐
│   donations      │
├──────────────────┤
│ id (PK)          │
│ title            │
│ amount           │
│ description      │
│ timestamps       │
└──────────────────┘

┌──────────────────┐
│  testimonials    │
├──────────────────┤
│ id (PK)          │
│ name             │
│ message          │
│ timestamps       │
└──────────────────┘
```

---

## Component Hierarchy

```
RootLayout
│
├─── page.tsx (Home Page)
│    │
│    ├─── Navbar
│    │    └─── Navigation (from DB)
│    │
│    ├─── Main Section
│    │    ├─── HeroSection
│    │    ├─── AboutSection
│    │    ├─── ProgramsSection
│    │    ├─── StatsSection
│    │    ├─── TestimonialsSection
│    │    ├─── GallerySection
│    │    ├─── DonationSection
│    │    └─── ContactSection
│    │
│    └─── Footer
│         └─── Settings (from DB)
│
└─── admin/
     │
     ├─── login/page.tsx (Login)
     │
     ├─── dashboard/page.tsx (Dashboard)
     │    ├─── AdminSidebar
     │    └─── Dashboard Cards
     │
     ├─── pages/page.tsx (Pages Manager)
     │
     ├─── sections/page.tsx (Sections Editor)
     │
     ├─── media/page.tsx (Media Manager)
     │
     ├─── donations/page.tsx (Donations Manager)
     │
     ├─── testimonials/page.tsx (Testimonials Manager)
     │
     └─── settings/page.tsx (Settings Panel)
```

---

## Authentication Flow

```
User Visits /admin/login
         │
         ▼
    Middleware Check
    (Checks for session)
         │
         ├─ No Session ──► Continue to login page ✓
         │
         └─ Has Session ─► Redirect to /admin/dashboard
         │
         ▼
    Login Form
         │
         ▼
    User Enters Email/Password
         │
         ▼
    Form Submits to Supabase Auth
         │
         ▼
    Supabase Validates
         │
         ├─ Invalid ────► Show error message
         │
         └─ Valid ──────► Create session in browser
                          │
                          ▼
                     Save to Cookies
                          │
                          ▼
                     Redirect to /admin/dashboard
                          │
                          ▼
                     Middleware Checks Session ✓
                          │
                          ▼
                     Page Loads Admin Content ✅
```

---

## Request Flow (Typical Page View)

```
1. Browser Request
   GET http://localhost:3000/
   │
2. Next.js App Router
   │
3. Server Component (page.tsx)
   │
4. Database Queries (Parallel)
   ├── getSetting('site_name')
   ├── getPageBySlug('home')
   ├── getSectionsByPage(pageId)
   ├── getNavigation()
   └── getMediaByCategory('gallery')
   │
5. Supabase Client
   │
6. PostgreSQL Database
   │
7. Data Returns (Cached)
   │
8. React Render
   ├── Navbar Component
   ├── Hero Section
   ├── About Section
   ├── Programs Section
   ├── Stats Section
   ├── Testimonials Section
   ├── Gallery Section
   ├── Donation Section
   └── Footer
   │
9. CSS/JS Application
   │
10. HTML + CSS + JS Sent to Browser
    │
11. Browser Renders
    │
12. User Sees Page ✅

Total Time: ~500ms (optimized)
```

---

## Deployment Architecture

```
GitHub Repository
       │
       ▼
GitHub Actions (CI/CD)
       │
       ├── Build
       ├── Test (optional)
       ├── Type Check
       │
       ▼
Push to Vercel / Server
       │
       ├─ Vercel ─────────┐
       │                  ▼
       │            Vercel CDN
       │                  │
       │                  ▼
       │            Global Distribution
       │
       └─ Self-Hosted ───┐
                         ▼
                    PM2 Process
                         │
                         ▼
                    Nginx Reverse Proxy
                         │
                         ▼
                    SSL/HTTPS
                         │
                         ▼
                    Custom Domain
       │
       ▼
       Environment Variables
       │
       ▼
       Supabase Connection
       │
       ▼
       PostgreSQL Database ✅
```

---

## Security Architecture

```
┌────────────────────────────────────────────────┐
│              SECURITY LAYERS                    │
└────────────────────────────────────────────────┘

1. HTTPS/SSL
   ├─ Enforced on all connections
   └─ Certificate: Let's Encrypt / Vercel

2. Environment Variables
   ├─ NEXT_PUBLIC_* (public)
   ├─ Private keys (server-only)
   └─ Never committed to git

3. Authentication
   ├─ Supabase Auth
   ├─ JWT tokens
   └─ Session management

4. Middleware Protection
   ├─ Session validation on /admin routes
   ├─ Automatic redirects
   └─ Token refresh

5. Database Security
   ├─ Row Level Security (optional)
   ├─ Access control
   └─ Encrypted passwords

6. API Security
   ├─ CORS configured
   ├─ Rate limiting
   └─ Input validation

7. Server Security
   ├─ Firewall rules
   ├─ SSH hardening
   └─ Regular updates
```

---

## Performance Optimization

```
┌────────────────────────────────────────┐
│      PERFORMANCE FEATURES               │
└────────────────────────────────────────┘

1. Server-Side Rendering
   └─ Pages generated on server
      └─ Fast initial load

2. Image Optimization
   ├─ Automatic resizing
   ├─ Format conversion
   └─ Lazy loading

3. Code Splitting
   ├─ Automatic page splitting
   ├─ Lazy component loading
   └─ Smaller bundles

4. Caching
   ├─ Browser caching
   ├─ CDN caching (Vercel)
   └─ Database query cache

5. Parallel Queries
   └─ Multiple DB calls in parallel

6. Static Generation (optional)
   ├─ Pre-render pages
   └─ Incremental Static Regeneration
```

---

## Tech Stack Diagram

```
┌──────────────────────────────────────────┐
│        SIRAJ-UL-ULOOM TECH STACK         │
└──────────────────────────────────────────┘

Frontend Layer
├── Next.js 15 (Framework)
├── React 19 (UI Library)
├── TypeScript (Language)
├── Tailwind CSS (Styling)
└── Next/Image (Image Optimization)

Middleware Layer
├── Next.js Middleware (Route Protection)
├── Auth Middleware (Session Validation)
└── CORS Handling

API Layer
├── Next.js API Routes
├── Supabase JS SDK
└── TypeScript Types

Backend Services
├── Supabase PostgreSQL (Database)
├── Supabase Auth (Authentication)
├── Supabase Storage (File Storage)
└── Supabase Realtime (Live Updates)

Deployment
├── Vercel (Recommended)
├── GitHub Actions (CI/CD)
└── Docker (Optional)

Monitoring
├── Vercel Analytics
├── Google Analytics
└── Sentry (Error Tracking - optional)
```

---

**Architecture Documentation v1.0**  
**Last Updated:** April 2026
