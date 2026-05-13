import type { Section } from '@/lib/api'
import Image from 'next/image'

interface HeroSectionProps {
  data: Section
}

export function HeroSection({ data }: HeroSectionProps) {
  const content = (data.content || {}) as any

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-islamic opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-300 opacity-5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt={content.backgroundAlt || 'Hero background'}
          fill
          className="absolute inset-0 object-cover opacity-10"
        />
      )}

      <div className="container-custom relative z-10 text-center text-white py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 animate-slide-up leading-tight">
          {data.title || content.title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-95 animate-slide-up max-w-3xl mx-auto leading-relaxed" style={{animationDelay: '0.2s'}}>
          {data.subtitle || content.subtitle}
        </p>
        {content.ctaText && content.ctaLink && (
          <a
            href={content.ctaLink}
            className="btn-primary inline-block animate-scale-in"
            style={{animationDelay: '0.4s'}}
          >
            {content.ctaText}
          </a>
        )}
      </div>
    </section>
  )
}

interface AboutSectionProps {
  data: Section
}

export function AboutSection({ data }: AboutSectionProps) {
  const content = (data.content || {}) as any

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {content.image && (
            <div className="relative h-96 md:h-[500px] animate-slide-left">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl opacity-30 blur-lg" />
              <Image
                src={content.image}
                alt={content.imageAlt || 'About image'}
                fill
                className="object-cover rounded-2xl shadow-xl relative"
              />
            </div>
          )}

          <div className="animate-slide-right">
            <h2 className="heading-2xl">{data.title}</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              {content.description}
            </p>

            {content.highlights && Array.isArray(content.highlights) && (
              <ul className="space-y-4">
                {content.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-emerald-600 transition-colors">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProgramsSectionProps {
  data: Section
}

export function ProgramsSection({ data }: ProgramsSectionProps) {
  const content = (data.content || {}) as any

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-20 animate-slide-down">
          <h2 className="heading-2xl">{data.title}</h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            {data.subtitle || content.description}
          </p>
        </div>

        {content.programs && Array.isArray(content.programs) && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 max-w-7xl mx-auto">
            {content.programs.map((program: any, idx: number) => (
              <div
                key={idx}
                className="card card-hover group"
                style={{animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                {program.icon && (
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {program.icon}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                  {program.name}
                </h3>
                <p className="text-slate-600 mb-4">{program.description}</p>
                {program.details && (
                  <ul className="space-y-2 text-sm">
                    {program.details.map((detail: string, didx: number) => (
                      <li key={didx} className="flex items-start gap-2 text-slate-600">
                        <span className="text-emerald-600 font-bold flex-shrink-0">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface StatsSectionProps {
  data: Section
}

export function StatsSection({ data }: StatsSectionProps) {
  const content = (data.content || {}) as any

  return (
    <section className="section-padding gradient-islamic text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="heading-2xl text-white mb-4">{data.title}</h2>
        </div>

        {content.stats && Array.isArray(content.stats) && (
          <div className="grid md:grid-cols-4 gap-8">
            {content.stats.map((stat: any, idx: number) => (
              <div 
                key={idx} 
                className="text-center p-8 rounded-2xl bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 group"
                style={{animation: `slideInUp 0.6s ease-out ${idx * 0.15}s both`}}
              >
                <div className="text-6xl font-black text-yellow-300 mb-3 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <p className="text-lg opacity-95 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface TestimonialsSectionProps {
  data: Section
  testimonials: Array<{ name: string; message: string; rating?: number }>
}

export function TestimonialsSection({ data, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="heading-2xl">{data.title}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {testimonials && testimonials.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="card card-hover"
                style={{animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.message}"
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-emerald-900">— {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface GallerySectionProps {
  data: Section
  media: Array<{ file_url: string; alt_text: string }>
}

export function GallerySection({ data, media }: GallerySectionProps) {
  // Dummy images - using unsplash API for real photos
  const dummyImages = [
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517457373614-b7152f80ff57?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1529982884244-37c26ee51f3c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1523062407883-6f3031224c94?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506380623139-1907fbdaddf9?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504674900152-b8b53e904b47?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
  ]

  const displayMedia = media && media.length > 0 ? media : dummyImages.map((url, idx) => ({
    file_url: url,
    alt_text: `Gallery Image ${idx + 1}`
  }))

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="heading-2xl">{data.title}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {displayMedia && displayMedia.length > 0 && (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 max-w-7xl mx-auto">
            {displayMedia.map((item, idx) => {
              // Check if it's a real image URL or a placeholder
              const isRealImage = item.file_url?.startsWith('http')
              return (
                <div
                  key={idx}
                  className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-2xl group cursor-pointer"
                  style={{animation: `slideInUp 0.6s ease-out ${idx * 0.08}s both`}}
                >
                  {isRealImage ? (
                    <>
                      <Image
                        src={item.file_url}
                        alt={item.alt_text}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
                        <div className="text-center group-hover:scale-110 transition-transform duration-300">
                          <div className="text-5xl mb-3">🖼️</div>
                          <p className="font-semibold text-white text-center px-4 text-sm">{item.alt_text}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

interface DonationSectionProps {
  data: Section
  donations: Array<{ id: string; title: string; amount: number; description: string }>
}

export function DonationSection({ data, donations }: DonationSectionProps) {
  return (
    <section className="section-padding bg-white" id="donate">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="heading-2xl">{data.title}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {donations && donations.length > 0 && (
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 md:px-8">
            {donations.map((donation, idx) => (
              <div
                key={donation.id}
                className={`card card-hover p-8 text-center ${
                  donation.amount === 0
                    ? 'bg-gradient-islamic text-white ring-2 ring-yellow-300 scale-105'
                    : ''
                }`}
                style={{animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                {donation.amount > 0 && (
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
                    ₹{donation.amount}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3">{donation.title}</h3>
                <p className={`mb-6 ${donation.amount === 0 ? 'opacity-90' : 'text-slate-600'}`}>
                  {donation.description}
                </p>
                <button className={donation.amount === 0 ? 'btn-secondary w-full' : 'btn-primary w-full'}>
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface ContactSectionProps {
  data: Section
}

export function ContactSection({ data }: ContactSectionProps) {
  const content = (data.content || {}) as any

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-slide-down">
            <h2 className="heading-2xl">{data.title}</h2>
            <p className="text-lg text-muted">{data.subtitle}</p>
          </div>

          <div className="card p-8 md:p-12 animate-scale-in">
            <form className="space-y-6">
              <div>
                <label className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="form-label">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {content.contactInfo && (
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {content.contactInfo.map((info: any, idx: number) => (
                <div key={idx} className="text-center animate-slide-up" style={{animationDelay: `${idx * 0.2}s`}}>
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <p className="font-semibold text-emerald-900 mb-2">{info.title}</p>
                  <p className="text-slate-600">{info.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}