/**
 * API Layer using localStorage
 * All data operations use localStorage instead of Supabase
 */

import {
  getPageBySlug as getPageFromStorage,
  getPages as getPagesFromStorage,
  getSectionsByPage as getSectionsFromStorage,
  getNavigation as getNavigationFromStorage,
  getSettings as getSettingsFromStorage,
  getMediaByCategory as getMediaFromStorage,
  getDonations as getDonationsFromStorage,
  getTestimonials as getTestimonialsFromStorage,
  getAllData,
  savePage,
  saveSection,
  saveNavigation,
  saveSettings,
  saveMedia,
  saveDonation,
  saveTestimonial,
  deletePage as deletePageFromStorage,
  deleteSection as deleteSectionFromStorage,
  deleteMedia as deleteMediaFromStorage,
  deleteDonation as deleteDonationFromStorage,
  deleteTestimonial as deleteTestimonialFromStorage,
} from './localStorage'

export interface Setting {
  id: string
  key: string
  value: string | Record<string, any>
  created_at: string
  updated_at: string
}

export interface Page {
  id: string
  slug: string
  title: string
  meta_title: string
  meta_description: string
  created_at: string
  updated_at: string
}

export interface Section {
  id: string
  page_id: string
  type: 'hero' | 'about' | 'programs' | 'stats' | 'testimonials' | 'gallery' | 'donation' | 'contact'
  title: string
  subtitle: string
  content: Record<string, any>
  order_index: number
  created_at: string
  updated_at: string
}

export interface Navigation {
  id: string
  label: string
  link: string
  order_index: number
  created_at: string
  updated_at: string
}

export interface Media {
  id: string
  file_url: string
  alt_text: string
  category: string
  created_at: string
  updated_at: string
}

export interface Donation {
  id: string
  title: string
  amount: number
  description: string
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  message: string
  rating?: number
  created_at: string
  updated_at: string
}


// Check if Supabase is properly configured
const isSupabaseConfigured = () => {
  return false // Using localStorage exclusively now
}

// Page operations
export async function getPages() {
  return getPagesFromStorage()
}

export async function getPageBySlug(slug: string) {
  return getPageFromStorage(slug)
}

export async function getSectionsByPage(pageId: string) {
  return getSectionsFromStorage(pageId)
}

// Navigation
export async function getNavigation() {
  return getNavigationFromStorage()
}

// Settings
export async function getSetting(key: string = '') {
  const settings = getSettingsFromStorage()
  return settings
}

// Media
export async function getMediaByCategory(category: string) {
  return getMediaFromStorage(category)
}

// Donations
export async function getDonations() {
  return getDonationsFromStorage()
}

// Testimonials
export async function getTestimonials() {
  return getTestimonialsFromStorage()
}

// CRUD Operations for Admin

// Pages
export async function createPage(page: any) {
  return savePage({ ...page, id: Date.now().toString() })
}

export async function updatePage(id: string, updates: any) {
  const data = getAllData()
  const pageIndex = data.pages.findIndex((p: any) => p.id === id)
  if (pageIndex >= 0) {
    data.pages[pageIndex] = { ...data.pages[pageIndex], ...updates }
    return savePage(data.pages[pageIndex])
  }
  return null
}

// Sections
export async function createSection(section: any) {
  return saveSection({ ...section, id: Date.now().toString() })
}

export async function updateSection(id: string, updates: any) {
  const data = getAllData()
  const sectionIndex = data.sections.findIndex((s: any) => s.id === id)
  if (sectionIndex >= 0) {
    data.sections[sectionIndex] = { ...data.sections[sectionIndex], ...updates }
    return saveSection(data.sections[sectionIndex])
  }
  return null
}

// Media
export async function createMedia(media: any) {
  return saveMedia({ ...media, id: Date.now().toString() })
}

export async function updateMedia(id: string, updates: any) {
  const data = getAllData()
  const mediaIndex = data.media.findIndex((m: any) => m.id === id)
  if (mediaIndex >= 0) {
    data.media[mediaIndex] = { ...data.media[mediaIndex], ...updates }
    return saveMedia(data.media[mediaIndex])
  }
  return null
}

// Donations
export async function createDonation(donation: any) {
  return saveDonation({ ...donation, id: Date.now().toString() })
}

export async function updateDonation(id: string, updates: any) {
  const data = getAllData()
  const donationIndex = data.donations.findIndex((d: any) => d.id === id)
  if (donationIndex >= 0) {
    data.donations[donationIndex] = { ...data.donations[donationIndex], ...updates }
    return saveDonation(data.donations[donationIndex])
  }
  return null
}

// Testimonials
export async function createTestimonial(testimonial: any) {
  return saveTestimonial({ ...testimonial, id: Date.now().toString() })
}

export async function updateTestimonial(id: string, updates: any) {
  const data = getAllData()
  const testimonialIndex = data.testimonials.findIndex((t: any) => t.id === id)
  if (testimonialIndex >= 0) {
    data.testimonials[testimonialIndex] = { ...data.testimonials[testimonialIndex], ...updates }
    return saveTestimonial(data.testimonials[testimonialIndex])
  }
  return null
}

// Delete operations
export async function deletePage(id: string) {
  deletePageFromStorage(id)
  return { success: true }
}

export async function deleteSectionById(id: string) {
  deleteSectionFromStorage(id)
  return { success: true }
}

export async function deleteMediaById(id: string) {
  deleteMediaFromStorage(id)
  return { success: true }
}

export async function deleteDonationById(id: string) {
  deleteDonationFromStorage(id)
  return { success: true }
}

export async function deleteTestimonialById(id: string) {
  deleteTestimonialFromStorage(id)
  return { success: true }
}

// Settings
export async function updateSetting(key: string, value: any) {
  return saveSettings({ [key]: value })
}

// Navigation
export async function updateNavigationMenu(navigation: any[]) {
  return saveNavigation(navigation)
}
