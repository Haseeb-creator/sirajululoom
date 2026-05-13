import { getNavigation, getSetting } from '@/lib/api'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Siraj-ul-Uloom Islamic Institute',
  description: 'Contact Siraj-ul-Uloom Islamic Institute. Get in touch with us for inquiries about our programs and services.',
}

export default async function Contact() {
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
        <section className="min-h-screen bg-islamic-cream py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-islamic-dark mb-4">
                  Get In Touch
                </h1>
                <p className="text-xl text-muted">
                  We'd love to hear from you. Reach out to us with any questions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-islamic-dark mb-6">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-islamic-dark mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-islamic-dark"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-islamic-dark mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-islamic-dark"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-islamic-dark mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-islamic-dark"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-islamic-dark mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-islamic-dark resize-none"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-islamic-dark mb-8">
                    Contact Information
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="text-4xl mb-4">📞</div>
                      <h3 className="font-bold text-islamic-dark mb-2">Phone</h3>
                      <p className="text-muted">{phone || '+1 (555) 123-4567'}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="text-4xl mb-4">📧</div>
                      <h3 className="font-bold text-islamic-dark mb-2">Email</h3>
                      <p className="text-muted">{email || 'info@sirajululoom.com'}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="text-4xl mb-4">📍</div>
                      <h3 className="font-bold text-islamic-dark mb-2">Address</h3>
                      <p className="text-muted">
                        {address || '123 Islamic Way, Community City, ST 12345'}
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="text-4xl mb-4">🕒</div>
                      <h3 className="font-bold text-islamic-dark mb-2">Hours</h3>
                      <p className="text-muted">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer email={email} phone={phone} address={address} siteName={siteName} />
    </>
  )
}
