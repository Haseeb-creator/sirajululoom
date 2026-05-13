/**
 * Local Storage Data Manager
 * Manages all application data in browser localStorage
 * Provides defaults and helper functions
 */

// Default data structure
const DEFAULT_DATA = {
  pages: [
    {
      id: 'demo-home',
      slug: 'home',
      title: 'Home',
      meta_description: 'Welcome to Siraj-ul-Uloom Islamic Institute',
      content: 'Home page content',
    },
  ],
  sections: [
    {
      id: '1',
      page_id: 'demo-home',
      type: 'hero',
      title: 'Welcome to Siraj-ul-Uloom Islamic Institute',
      subtitle: 'Empowering Young Muslims Through Islamic Education',
      content: {
        backgroundImage: '',
        backgroundAlt: 'Islamic Institute',
        ctaText: 'Enroll Now',
        ctaLink: '/programs'
      },
      order: 0,
    },
    {
      id: '2',
      page_id: 'demo-home',
      type: 'about',
      title: 'About Us',
      subtitle: 'Building Strong Islamic Foundation',
      content: {
        description: 'We are dedicated to providing Islamic education and fostering a strong Muslim community.',
        image: '',
        highlights: [
          'Expert Islamic Scholars',
          'Qualified Modern Teachers',
          'Safe Learning Environment',
          'Modern Facilities',
          'Daily Spiritual Guidance'
        ]
      },
      order: 1,
    },
    {
      id: '3',
      page_id: 'demo-home',
      type: 'programs',
      title: 'Our Programs',
      subtitle: 'Comprehensive Islamic Education for All Ages',
      content: {
        description: 'We offer multiple programs designed for different age groups and learning objectives',
        programs: [
          {
            name: 'Hifz-e-Quran',
            description: 'Complete Quran Memorization Program',
            icon: '📖'
          },
          {
            name: 'Islamic School',
            description: 'Classes 1-10 with Islamic Focus',
            icon: '📚'
          },
          {
            name: 'Quranic Studies',
            description: 'In-Depth Quranic Understanding',
            icon: '✨'
          }
        ]
      },
      order: 2,
    },
    {
      id: '4',
      page_id: 'demo-home',
      type: 'stats',
      title: 'Our Impact',
      subtitle: 'Making a Difference in Education',
      content: {
        stats: [
          { number: '70+', label: 'Active Students' },
          { number: '15+', label: 'Qualified Teachers' },
          { number: '5+', label: 'Programs' },
          { number: '2024', label: 'Year Founded' }
        ]
      },
      order: 3,
    },
    {
      id: '5',
      page_id: 'demo-home',
      type: 'testimonials',
      title: 'Student & Parent Testimonials',
      subtitle: 'What Parents and Students Say About Us',
      content: {
        description: 'Real feedback from our school community'
      },
      order: 4,
    },
    {
      id: '6',
      page_id: 'demo-home',
      type: 'gallery',
      title: 'Photo Gallery',
      subtitle: 'Capturing Moments of Learning and Growth',
      content: {
        description: 'Visual moments from our institute activities and events'
      },
      order: 5,
    },
    {
      id: '7',
      page_id: 'demo-home',
      type: 'donation',
      title: 'Support Our Mission',
      subtitle: 'Your Donation Makes a Difference',
      content: {
        description: 'Help us continue providing quality Islamic education to more students'
      },
      order: 6,
    },
    {
      id: '8',
      page_id: 'demo-home',
      type: 'contact',
      title: 'Get In Touch',
      subtitle: 'We Would Love to Hear From You',
      content: {
        description: 'Have any questions? Contact us today!'
      },
      order: 7,
    },
  ],
  navigation: [
    { id: '1', label: 'Home', link: '/', order_index: 1, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
    { id: '2', label: 'About', link: '/about', order_index: 2, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
    { id: '3', label: 'Programs', link: '/programs', order_index: 3, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
    { id: '4', label: 'Contact', link: '/contact', order_index: 4, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
    { id: '5', label: 'Donate', link: '/#donate', order_index: 5, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  ],
  settings: {
    siteName: 'Siraj-ul-Uloom Islamic Institute',
    siteDescription: 'A center of Islamic learning and community service',
    email: 'info@sirajululoom.com',
    phone: '+1 (555) 123-4567',
    address: '123 Islamic Way, Community City, ST 12345',
    logo_url: '/logo.png',
  },
  media: [
    { id: '1', title: 'Event Photo 1', url: '', category: 'gallery', alt_text: 'Community Event' },
    { id: '2', title: 'Event Photo 2', url: '', category: 'gallery', alt_text: 'Student Learning' },
    { id: '3', title: 'Event Photo 3', url: '', category: 'gallery', alt_text: 'Prayer Hall' },
    { id: '4', title: 'Event Photo 4', url: '', category: 'gallery', alt_text: 'Community Gathering' },
    { id: '5', title: 'Event Photo 5', url: '', category: 'gallery', alt_text: 'Educational Class' },
    { id: '6', title: 'Event Photo 6', url: '', category: 'gallery', alt_text: 'Iftaar Event' },
  ],
  donations: [
    { id: '1', name: 'Supporter', amount: 500, description: 'Monthly supporter' },
    { id: '2', name: 'Benefactor', amount: 1000, description: 'Annual benefactor' },
    { id: '3', name: 'Patron', amount: 5000, description: 'Major patron' },
    { id: '4', name: 'Founder', amount: 2500, description: 'Founding member' },
    { id: '5', name: 'Custom', amount: 0, description: 'Custom donation' },
  ],
  testimonials: [
    { id: '1', name: 'Ahmed Khan', content: 'Excellent Islamic education for my children.', rating: 5 },
    { id: '2', name: 'Fatima Hassan', content: 'The teachers are knowledgeable and caring.', rating: 5 },
    { id: '3', name: 'Ibrahim Ali', content: 'Great community and supportive environment.', rating: 5 },
    { id: '4', name: 'Aisha Omar', content: 'Highly recommended for Islamic learning.', rating: 5 },
    { id: '5', name: 'Muhammad Ahmed', content: 'Best Islamic school in the area.', rating: 5 },
  ],
}

// Initialize localStorage with defaults
export function initializeLocalStorage() {
  if (typeof window === 'undefined') return

  const existingData = localStorage.getItem('siraj_app_data')
  if (!existingData) {
    localStorage.setItem('siraj_app_data', JSON.stringify(DEFAULT_DATA))
  }
}

// Get all data from localStorage
export function getAllData() {
  // Server-side: return default data
  if (typeof window === 'undefined') {
    return DEFAULT_DATA
  }

  // Client-side: try to get from localStorage
  try {
    const data = localStorage.getItem('siraj_app_data')
    return data ? JSON.parse(data) : DEFAULT_DATA
  } catch (error) {
    console.error('Error reading localStorage:', error)
    return DEFAULT_DATA
  }
}

// Save all data to localStorage
export function saveAllData(data: any) {
  // Server-side: do nothing
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem('siraj_app_data', JSON.stringify(data))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

// Get pages
export function getPages() {
  const data = getAllData()
  return data.pages || []
}

// Get page by slug
export function getPageBySlug(slug: string) {
  const pages = getPages()
  return pages.find((p: any) => p.slug === slug) || null
}

// Add/Update page
export function savePage(page: any) {
  const data = getAllData()
  const index = data.pages.findIndex((p: any) => p.id === page.id)
  if (index >= 0) {
    data.pages[index] = page
  } else {
    page.id = page.id || Date.now().toString()
    data.pages.push(page)
  }
  saveAllData(data)
  return page
}

// Delete page
export function deletePage(id: string) {
  const data = getAllData()
  data.pages = data.pages.filter((p: any) => p.id !== id)
  saveAllData(data)
}

// Get sections
export function getSections() {
  const data = getAllData()
  return data.sections || []
}

// Get sections by page
export function getSectionsByPage(pageId: string) {
  const sections = getSections()
  return sections
    .filter((s: any) => s.page_id === pageId)
    .sort((a: any, b: any) => a.order - b.order)
}

// Add/Update section
export function saveSection(section: any) {
  const data = getAllData()
  const index = data.sections.findIndex((s: any) => s.id === section.id)
  if (index >= 0) {
    data.sections[index] = section
  } else {
    section.id = section.id || Date.now().toString()
    data.sections.push(section)
  }
  saveAllData(data)
  return section
}

// Delete section
export function deleteSection(id: string) {
  const data = getAllData()
  data.sections = data.sections.filter((s: any) => s.id !== id)
  saveAllData(data)
}

// Get navigation
export function getNavigation() {
  const data = getAllData()
  return data.navigation || []
}

// Update navigation
export function saveNavigation(navigation: any[]) {
  const data = getAllData()
  data.navigation = navigation
  saveAllData(data)
  return navigation
}

// Get settings
export function getSettings() {
  const data = getAllData()
  return data.settings || {}
}

// Update settings
export function saveSettings(settings: any) {
  const data = getAllData()
  data.settings = { ...data.settings, ...settings }
  saveAllData(data)
  return data.settings
}

// Get media
export function getMedia() {
  const data = getAllData()
  return data.media || []
}

// Get media by category
export function getMediaByCategory(category: string) {
  const media = getMedia()
  return media.filter((m: any) => m.category === category)
}

// Add/Update media
export function saveMedia(media: any) {
  const data = getAllData()
  const index = data.media.findIndex((m: any) => m.id === media.id)
  if (index >= 0) {
    data.media[index] = media
  } else {
    media.id = media.id || Date.now().toString()
    data.media.push(media)
  }
  saveAllData(data)
  return media
}

// Delete media
export function deleteMedia(id: string) {
  const data = getAllData()
  data.media = data.media.filter((m: any) => m.id !== id)
  saveAllData(data)
}

// Get donations
export function getDonations() {
  const data = getAllData()
  return data.donations || []
}

// Add/Update donation tier
export function saveDonation(donation: any) {
  const data = getAllData()
  const index = data.donations.findIndex((d: any) => d.id === donation.id)
  if (index >= 0) {
    data.donations[index] = donation
  } else {
    donation.id = donation.id || Date.now().toString()
    data.donations.push(donation)
  }
  saveAllData(data)
  return donation
}

// Delete donation tier
export function deleteDonation(id: string) {
  const data = getAllData()
  data.donations = data.donations.filter((d: any) => d.id !== id)
  saveAllData(data)
}

// Get testimonials
export function getTestimonials() {
  const data = getAllData()
  return data.testimonials || []
}

// Add/Update testimonial
export function saveTestimonial(testimonial: any) {
  const data = getAllData()
  const index = data.testimonials.findIndex((t: any) => t.id === testimonial.id)
  if (index >= 0) {
    data.testimonials[index] = testimonial
  } else {
    testimonial.id = testimonial.id || Date.now().toString()
    data.testimonials.push(testimonial)
  }
  saveAllData(data)
  return testimonial
}

// Delete testimonial
export function deleteTestimonial(id: string) {
  const data = getAllData()
  data.testimonials = data.testimonials.filter((t: any) => t.id !== id)
  saveAllData(data)
}

// Export for dev tools
export function resetToDefaults() {
  if (typeof window === 'undefined') return
  localStorage.setItem('siraj_app_data', JSON.stringify(DEFAULT_DATA))
}
