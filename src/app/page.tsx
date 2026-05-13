import { getSectionsByPage, getPageBySlug, getDonations, getTestimonials, getMediaByCategory, getNavigation, getSetting } from '@/lib/api'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import {
  HeroSection,
  AboutSection,
  ProgramsSection,
  StatsSection,
  TestimonialsSection,
  GallerySection,
  DonationSection,
  ContactSection,
} from '@/components/Sections'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Siraj-ul-Uloom Islamic Education Institute',
  description: 'Welcome to Siraj-ul-Uloom - Premier Islamic education institute offering Quran memorization, Islamic teachings, and community programs for all ages.',
  openGraph: {
    title: 'Siraj-ul-Uloom | Islamic Education Institute',
    description: 'Premier Islamic education institute offering Quran memorization and Islamic teachings.',
    url: 'https://Haseeb-creator.github.io/sirajululoom',
    type: 'website',
  },
}

export default async function Home() {
  const page = await getPageBySlug('home')
  const sections = page ? await getSectionsByPage(page.id) : []

  // Fetch all data upfront
  const testimonials = await getTestimonials()
  const media = await getMediaByCategory('gallery')
  const donations = await getDonations()
  const navData = await getNavigation()
  const siteNameData = await getSetting('site_name')
  const emailData = await getSetting('email')
  const phoneData = await getSetting('phone')
  const addressData = await getSetting('address')

  const siteName = siteNameData?.value as string || 'Siraj-ul-Uloom'
  const email = emailData?.value as string
  const phone = phoneData?.value as string
  const address = addressData?.value as string

  return (
    <>
      <Navbar navigation={navData || undefined} siteName={siteName} />
      <main>
        {sections.map((section: any) => {
          switch (section.type) {
            case 'hero':
              return <HeroSection key={section.id} data={section} />
            case 'about':
              return <AboutSection key={section.id} data={section} />
            case 'programs':
              return <ProgramsSection key={section.id} data={section} />
            case 'stats':
              return <StatsSection key={section.id} data={section} />
            case 'testimonials':
              return <TestimonialsSection key={section.id} data={section} testimonials={testimonials} />
            case 'gallery':
              return <GallerySection key={section.id} data={section} media={media} />
            case 'donation':
              return <DonationSection key={section.id} data={section} donations={donations} />
            case 'contact':
              return <ContactSection key={section.id} data={section} />
            default:
              return null
          }
        })}
      </main>
      <Footer email={email} phone={phone} address={address} siteName={siteName} />
    </>
  )
}
