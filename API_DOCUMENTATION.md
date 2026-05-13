# 📚 API Documentation - Siraj-ul-Uloom CMS

Complete reference for frontend CRUD functions using localStorage.

---

## 📖 Overview

All data operations are handled in the browser using localStorage. The `lib/api.ts` file contains all CRUD functions for the frontend.

---

## 🎯 Core Functions

### Settings API

#### `getSetting(key: string)`

Get a single global setting by key.

```typescript
import { getSetting } from '@/lib/api'

// Get site name
const siteName = await getSetting('site_name')
console.log(siteName.value) // "Siraj-ul-Uloom"

// Get phone number
const phone = await getSetting('phone')
console.log(phone.value) // "+91 XXXXXXXXXX"
```

**Returns:** `Setting | null`

#### `getAllSettings()`

Get all global settings.

```typescript
const settings = await getAllSettings()
settings.forEach(setting => {
  console.log(`${setting.key}: ${setting.value}`)
})
```

**Returns:** `Setting[]`

---

### Pages API

#### `getPageBySlug(slug: string)`

Get a page by its URL slug.

```typescript
const page = await getPageBySlug('home')
console.log(page.title) // "Home"
console.log(page.meta_description) // "Welcome to..."
```

**Returns:** `Page | null`

#### `getAllPages()`

Get all pages.

```typescript
const pages = await getAllPages()
pages.forEach(page => {
  console.log(`${page.title} (/${page.slug})`)
})
```

**Returns:** `Page[]`

---

### Sections API

#### `getSectionsByPage(pageId: string)`

Get all sections for a specific page, ordered by index.

```typescript
const sections = await getSectionsByPage(pageId)
sections.forEach(section => {
  console.log(`${section.title} (${section.type})`)
  console.log(section.content) // JSON content
})
```

**Returns:** `Section[]`

---

### Navigation API

#### `getNavigation()`

Get all navigation menu items, ordered by index.

```typescript
const navLinks = await getNavigation()
navLinks.forEach(link => {
  console.log(`${link.label} -> ${link.link}`)
})
```

**Returns:** `Navigation[]`

---

### Media API

#### `getMediaByCategory(category: string)`

Get all media files in a specific category.

```typescript
const galleryImages = await getMediaByCategory('gallery')
galleryImages.forEach(image => {
  console.log(`${image.alt_text}: ${image.file_url}`)
})
```

**Returns:** `Media[]`

#### `getAllMedia()`

Get all media files.

```typescript
const allMedia = await getAllMedia()
```

**Returns:** `Media[]`

---

### Donations API

#### `getDonations()`

Get all donation plan options.

```typescript
const donations = await getDonations()
donations.forEach(plan => {
  console.log(`${plan.title}: ₹${plan.amount}`)
  console.log(plan.description)
})
```

**Returns:** `Donation[]`

---

### Testimonials API

#### `getTestimonials()`

Get all testimonials.

```typescript
const testimonials = await getTestimonials()
testimonials.forEach(testimonial => {
  console.log(`${testimonial.name}: "${testimonial.message}"`)
})
```

**Returns:** `Testimonial[]`

---

## 🔐 Authentication

Authentication is handled entirely in the browser using localStorage. There is no backend or Supabase authentication. Use the following functions from `lib/auth.ts`:

- `getAdminToken()`
- `getAdminEmail()`
- `isAdminAuthenticated()`
- `logout()`

## 💾 Data Types

### Setting
```typescript
interface Setting {
  id: string
  key: string                    // Unique key
  value: string | Record<string, any>  // Any value
  created_at: string
  updated_at: string
}
```

### Page
```typescript
interface Page {
  id: string
  slug: string                   // URL slug (e.g., "home")
  title: string
  meta_title: string             // SEO title
  meta_description: string       // SEO description
  created_at: string
  updated_at: string
}
```

### Section
```typescript
interface Section {
  id: string
  page_id: string                // Foreign key to pages
  type: 'hero' | 'about' | 'programs' | 'stats' | 
        'testimonials' | 'gallery' | 'donation' | 'contact'
  title: string
  subtitle: string
  content: Record<string, any>   // Flexible JSON
  order_index: number            // Display order
  created_at: string
  updated_at: string
}
```

### Navigation
```typescript
interface Navigation {
  id: string
  label: string                  // Menu item text
  link: string                   // URL or internal link
  order_index: number
  created_at: string
  updated_at: string
}
```

### Media
```typescript
interface Media {
  id: string
  file_url: string               // Supabase Storage URL
  alt_text: string               // Alt text for images
  category: string               // e.g., "gallery", "testimonials"
  created_at: string
  updated_at: string
}
```

### Donation
```typescript
interface Donation {
  id: string
  title: string                  // "Basic Support"
  amount: number                 // Amount in rupees
  description: string
  created_at: string
  updated_at: string
}
```

### Testimonial
```typescript
interface Testimonial {
  id: string
  name: string
  message: string
  created_at: string
  updated_at: string
}
```

---

## 🔄 Section Content Examples

### Hero Section
```json
{
  "title": "Welcome to Siraj-ul-Uloom",
  "subtitle": "Excellence in Islamic Education",
  "backgroundImage": "https://supabase.co/...",
  "backgroundAlt": "Hero background",
  "ctaText": "Learn More",
  "ctaLink": "/programs"
}
```

### About Section
```json
{
  "description": "We are dedicated to providing quality Islamic education...",
  "image": "https://supabase.co/...",
  "imageAlt": "About image",
  "highlights": [
    "Expert Islamic scholars",
    "Modern teaching methods",
    "Qualified teachers"
  ]
}
```

### Programs Section
```json
{
  "description": "Our comprehensive programs for all ages",
  "programs": [
    {
      "name": "Hifz-e-Quran",
      "description": "Quran memorization program",
      "icon": "📖",
      "details": [
        "3-5 years duration",
        "Expert tutors",
        "Daily classes"
      ]
    },
    {
      "name": "School Education",
      "description": "Classes till 10th grade",
      "icon": "📚",
      "details": [
        "Professional teachers",
        "Modern curriculum",
        "Sports facilities"
      ]
    }
  ]
}
```

### Stats Section
```json
{
  "stats": [
    {
      "number": "70+",
      "label": "Students"
    },
    {
      "number": "15+",
      "label": "Teachers"
    },
    {
      "number": "2024",
      "label": "Founded"
    },
    {
      "number": "5+",
      "label": "Programs"
    }
  ]
}
```

### Contact Section
```json
{
  "contactInfo": [
    {
      "icon": "📞",
      "title": "Phone",
      "value": "+91 XXXXXXXXXX"
    },
    {
      "icon": "📧",
      "title": "Email",
      "value": "info@sirajululoom.org"
    },
    {
      "icon": "📍",
      "title": "Address",
      "value": "Address, City, State"
    }
  ]
}
```

---

## 🛠️ Common Patterns

### Get Page and Render Sections

```typescript
import { getPageBySlug, getSectionsByPage } from '@/lib/api'

// Server component
const page = await getPageBySlug('home')
if (!page) return <NotFound />

const sections = await getSectionsByPage(page.id)

return (
  <>
    {sections.map(section => (
      <Section key={section.id} data={section} />
    ))}
  </>
)
```

### Load Settings for Layout

```typescript
import { getSetting } from '@/lib/api'

// In Navbar component
const siteName = await getSetting('site_name')
const logoUrl = await getSetting('logo_url')

return (
  <nav>
    {logoUrl && <img src={logoUrl} alt={siteName.value} />}
    <h1>{siteName.value}</h1>
  </nav>
)
```

### Display Testimonials

```typescript
import { getTestimonials } from '@/lib/api'

const testimonials = await getTestimonials()

return (
  <section>
    {testimonials.map(t => (
      <div key={t.id}>
        <blockquote>"{t.message}"</blockquote>
        <p>— {t.name}</p>
      </div>
    ))}
  </section>
)
```

---

## ⚠️ Error Handling

All functions return `null` or empty arrays on error:

```typescript
const setting = await getSetting('key')
if (!setting) {
  console.log('Setting not found')
}

const sections = await getSectionsByPage(pageId)
if (sections.length === 0) {
  console.log('No sections found')
}
```

---

## 🔍 Direct Supabase Queries

For advanced queries, use the Supabase client directly:

```typescript
import { supabase } from '@/lib/supabase'

// Custom query
const { data, error } = await supabase
  .from('pages')
  .select('*')
  .eq('slug', 'home')
  .single()

if (error) {
  console.error('Error:', error.message)
}
```

---

## 🚀 Performance Tips

1. **Cache Settings**
   ```typescript
   // Cache global settings to avoid repeated queries
   const cache = new Map()
   
   async function getCachedSetting(key) {
     if (cache.has(key)) return cache.get(key)
     const setting = await getSetting(key)
     cache.set(key, setting)
     return setting
   }
   ```

2. **Use Parallel Queries**
   ```typescript
   // Fetch multiple items in parallel
   const [sections, donations, testimonials] = await Promise.all([
     getSectionsByPage(pageId),
     getDonations(),
     getTestimonials(),
   ])
   ```

3. **Implement ISR**
   ```typescript
   // Revalidate every 3600 seconds
   export const revalidate = 3600
   ```

---

## 📞 Support

For API questions:
1. Check database schema in `supabase/schema.sql`
2. Review examples in component files
3. Test queries in Supabase SQL Editor
4. Check Supabase documentation

---

**API Documentation v1.0**  
**Last Updated:** April 2026
