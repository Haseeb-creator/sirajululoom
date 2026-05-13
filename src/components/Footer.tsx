interface FooterProps {
  email?: string
  phone?: string
  address?: string
  siteName?: string
}

export function Footer({ email, phone, address, siteName = 'Siraj-ul-Uloom' }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center hover:bg-opacity-40 transition-all">
                <span className="text-2xl">🕌</span>
              </div>
              <div>
                <h3 className="font-black text-lg">{siteName}</h3>
                <p className="text-sm text-emerald-100">Islamic Education Excellence</p>
              </div>
            </div>
            <p className="text-emerald-50 text-sm leading-relaxed">
              Empowering young Muslims through quality Islamic education and Quranic memorization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-300 rounded-full" />
              Quick Links
            </h4>
            <div className="space-y-3">
              <a href="/" className="text-emerald-100 hover:text-amber-300 transition-colors text-sm font-medium">
                → Home
              </a>
              <a href="/about" className="text-emerald-100 hover:text-amber-300 transition-colors text-sm font-medium">
                → About Us
              </a>
              <a href="/programs" className="text-emerald-100 hover:text-amber-300 transition-colors text-sm font-medium">
                → Programs
              </a>
              <a href="/contact" className="text-emerald-100 hover:text-amber-300 transition-colors text-sm font-medium">
                → Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-300 rounded-full" />
              Contact
            </h4>
            <div className="space-y-3 text-sm text-emerald-100">
              {email && (
                <p className="hover:text-amber-300 transition-colors cursor-pointer">
                  📧 {email}
                </p>
              )}
              {phone && (
                <p className="hover:text-amber-300 transition-colors cursor-pointer">
                  📱 {phone}
                </p>
              )}
              {address && (
                <p className="hover:text-amber-300 transition-colors cursor-pointer">
                  📍 {address}
                </p>
              )}
            </div>
          </div>

          {/* Newsletter - Optional */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-300 rounded-full" />
              Updates
            </h4>
            <p className="text-emerald-100 text-sm mb-4">
              Stay connected with our latest news and events.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-sm"
              />
              <button className="px-4 py-2 bg-yellow-300 text-emerald-900 rounded-lg font-semibold hover:bg-white transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider opacity-30 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-emerald-100">
          <p>
            &copy; {currentYear} {siteName}. All rights reserved. Made with <span className="text-orange-300">❤️</span> for the Ummah.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
