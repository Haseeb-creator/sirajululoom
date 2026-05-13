import { getNavigation, getSetting } from '@/lib/api'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Siraj-ul-Uloom Islamic Institute',
  description: 'Learn about Siraj-ul-Uloom Islamic Institute, our mission, values, and commitment to Islamic education excellence.',
}

export default async function About() {
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
        <section className="min-h-screen gradient-islamic text-white py-20">
          <div className="container-custom">
            <h1 className="text-5xl font-bold mb-8">About Siraj-ul-Uloom</h1>
            <div className="max-w-3xl">
              <p className="text-xl mb-6 opacity-90">
                Siraj-ul-Uloom Islamic Institute is dedicated to providing quality Islamic education and fostering a strong Muslim community.
              </p>
              <p className="text-lg mb-6 opacity-80">
                Our mission is to empower young Muslims with knowledge of the Quran, Islamic teachings, and contemporary education. We believe in creating a nurturing environment where students can grow spiritually and intellectually.
              </p>
              <h2 className="text-3xl font-bold mt-12 mb-6">Our Values</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-islamic-gold mr-4">✓</span>
                  <span>Excellence in Islamic Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islamic-gold mr-4">✓</span>
                  <span>Community Service and Engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islamic-gold mr-4">✓</span>
                  <span>Student Development and Growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islamic-gold mr-4">✓</span>
                  <span>Integration of Traditional and Modern Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer email={email} phone={phone} address={address} siteName={siteName} />
    </>
  )
}
