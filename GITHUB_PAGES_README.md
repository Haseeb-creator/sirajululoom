# Siraj-ul-Uloom Islamic Education Institute Website

[![Deploy to GitHub Pages](https://github.com/Haseeb-creator/sirajululoom/actions/workflows/deploy.yml/badge.svg)](https://github.com/Haseeb-creator/sirajululoom/actions/workflows/deploy.yml)

## 🌐 Live Website
**https://Haseeb-creator.github.io/sirajululoom**

## 📋 Overview

Siraj-ul-Uloom is a modern, responsive website for an Islamic education institute built with Next.js 15, React 19, and Tailwind CSS. The site features comprehensive information about Islamic programs, testimonials, and community engagement tools.

## ✨ Features

### 🎯 Core Pages
- **Home** - Hero section with programs overview and gallery
- **About** - Institute history, mission, and values
- **Programs** - Detailed information about education programs:
  - Hifz-e-Quran (Quran Memorization)
  - Islamic School (Classes 1-10)
  - Tajweed Classes
  - Youth Development Programs
- **Contact** - Contact form and location information
- **Admin Dashboard** - Content management system (login required)

### 🏗️ Technical Features
- ✅ Static export for GitHub Pages deployment
- ✅ SEO optimized with meta tags and structured data
- ✅ Responsive design (mobile-first)
- ✅ Fast loading with image optimization
- ✅ Smooth animations and transitions
- ✅ localStorage-based data management
- ✅ Production-ready build

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Adaptive layouts for all screen sizes

### 📊 Key Sections
1. **Hero Section** - Eye-catching introduction
2. **Programs Section** - Grid layout of available programs
3. **Stats Section** - Key metrics and achievements
4. **Testimonials** - Student and parent feedback
5. **Gallery** - Photo showcase with hover effects
6. **Donation Section** - Support options
7. **Contact Form** - Direct communication

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Haseeb-creator/sirajululoom.git
cd sirajululoom

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local
```

### Development

```bash
# Start development server (port 3001)
npm run dev

# Navigate to http://localhost:3001
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📦 Project Structure

```
sirajululoom/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── programs/         # Programs page
│   │   ├── admin/            # Admin dashboard
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation
│   │   ├── Footer.tsx        # Footer
│   │   ├── Sections.tsx      # Page sections
│   │   └── AdminSidebar.tsx  # Admin panel
│   └── lib/
│       ├── api.ts            # API layer
│       ├── auth.ts           # Authentication
│       └── localStorage.ts   # Data storage
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS setup
└── package.json              # Dependencies
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` with:
```
NEXT_PUBLIC_BASE_PATH=/sirajululoom
NEXT_PUBLIC_SITE_URL=https://Haseeb-creator.github.io/sirajululoom
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages (auto-created by workflow)
4. Click Save

The GitHub Actions workflow automatically:
- ✅ Builds the project on push to main
- ✅ Deploys to GitHub Pages
- ✅ Sets the correct base path for routing

## 🎨 Design System

### Colors
- **Primary**: Emerald Green (#10b981)
- **Dark**: Emerald Dark (#065f46)
- **Accent**: Gold (#fbbf24)
- **Background**: Slate Light (#f8fafc)

### Typography
- **Headings**: 2XL (48px), XL (36px), LG (28px)
- **Body**: 16px
- **Font**: System fonts with fallbacks

### Components
- **Cards**: Rounded with hover effects
- **Buttons**: Gradient background with scale animation
- **Layout**: Responsive container with padding

## 📱 SEO & Performance

### SEO Features
- Meta tags for all pages
- Open Graph protocol
- Twitter Card support
- Canonical URLs
- Sitemap support (can be added)
- Structured data (schema markup)

### Performance
- Static export (0 server cost)
- Image optimization
- CSS optimization
- JavaScript code splitting
- Responsive images

## 🔐 Admin Access
- URL: `/admin/login`
- Content management for all sections
- Add/edit/delete functionality
- localStorage persistence

## 📝 Content Management

Data is stored in browser localStorage. Admin interface allows:
- Edit page content
- Manage programs
- Update testimonials
- Modify gallery
- Change contact information
- Manage navigation menu

## 🚀 Deployment

### Automatic Deployment (Recommended)
Push to main branch → GitHub Actions → Auto-deploy to GitHub Pages

### Manual Deployment
```bash
# Build and deploy locally
npm run deploy
```

## 🌍 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License
This project is open source and available under the MIT License.

## 👨‍💻 Development

### Build Commands
```bash
npm run dev         # Development server
npm run build       # Production build
npm run start       # Start production server
npm run lint        # Run ESLint
npm run type-check  # TypeScript check
npm run export      # Static export
```

### Project Features
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality
- ✅ Git version control
- ✅ GitHub Actions CI/CD
- ✅ Static export for GitHub Pages

## 🐛 Known Issues & Limitations
- Admin data persists in localStorage (survives browser clear)
- Contact form uses placeholder functionality (can add backend)
- Images from Unsplash (API rate limits may apply)

## 🔄 Updates & Maintenance

### Regular Tasks
- Update dependencies: `npm update`
- Run type check: `npm run type-check`
- Test build: `npm run build`
- Commit and push to deploy

### Troubleshooting

**Images not loading?**
- Check NEXT_PUBLIC_BASE_PATH is set correctly
- Verify image URLs are accessible
- Check browser console for CORS errors

**Admin panel not displaying?**
- Clear browser cache and localStorage
- Check browser console for errors
- Verify admin login credentials

**Deployment failing?**
- Check GitHub Actions workflow logs
- Verify Node.js version compatibility
- Ensure all dependencies installed

## 📞 Contact & Support
For inquiries about programs or the institute, visit the Contact page on the website.

---

**Last Updated**: May 14, 2026
**Status**: ✅ Production Ready
**Deployment**: ✅ GitHub Pages Active
