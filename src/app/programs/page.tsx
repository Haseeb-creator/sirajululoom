import { getNavigation, getSetting } from '@/lib/api'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs | Siraj-ul-Uloom Islamic Education Institute',
  description: 'Discover Siraj-ul-Uloom programs: Hifz-e-Quran (Quran Memorization), Islamic School, Tajweed Classes, and Youth Development Programs.',
}

export default async function Programs() {
  const navData = await getNavigation()
  const siteNameData = await getSetting('site_name')
  const emailData = await getSetting('email')
  const phoneData = await getSetting('phone')
  const addressData = await getSetting('address')

  const siteName = siteNameData?.value as string || 'Siraj-ul-Uloom'
  const email = emailData?.value as string
  const phone = phoneData?.value as string
  const address = addressData?.value as string

  const programs = [
    {
      id: 1,
      name: 'Hifz-e-Quran',
      description: 'Complete Quran Memorization Program',
      icon: '📖',
      duration: '3-5 years',
      details: [
        'Expert Quranic teachers',
        'Daily memorization classes',
        'Tajweed instruction',
        'Islamic studies included',
        'Certification upon completion'
      ]
    },
    {
      id: 2,
      name: 'Islamic School',
      description: 'Classes 1-10 with Islamic Focus',
      icon: '📚',
      duration: '10 years',
      details: [
        'Modern curriculum',
        'Islamic values integration',
        'Qualified teachers',
        'Regular assessments',
        'Extracurricular activities'
      ]
    },
    {
      id: 3,
      name: 'Quranic Studies',
      description: 'In-Depth Quranic Understanding',
      icon: '✨',
      duration: 'Flexible',
      details: [
        'Tafsir (interpretation)',
        'Arabic language',
        'Quranic sciences',
        'Weekly classes',
        'All age groups welcome'
      ]
    },
    {
      id: 4,
      name: 'Arabic Language',
      description: 'Master the Arabic Language',
      icon: '🔤',
      duration: '2-3 years',
      details: [
        'Grammar and syntax',
        'Speaking practice',
        'Writing skills',
        'Literature study',
        'Conversation classes'
      ]
    }
  ]

  return (
    <>
      <Navbar navigation={navData || undefined} siteName={siteName} />
      <main>
        <section className="min-h-screen bg-islamic-cream py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-islamic-dark mb-4">Our Programs</h1>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                Comprehensive Islamic education for all ages and levels
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div key={program.id} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-islamic-dark mb-2">
                    {program.name}
                  </h3>
                  <p className="text-muted mb-4">{program.description}</p>
                  <p className="font-semibold text-islamic-dark mb-4">
                    Duration: {program.duration}
                  </p>
                  <ul className="space-y-2">
                    {program.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-islamic-gold mr-2">→</span>
                        <span className="text-muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary mt-6 w-full">
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer email={email} phone={phone} address={address} siteName={siteName} />
    </>
  )
}
