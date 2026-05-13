'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Navigation } from '@/lib/api'

const defaultNavigation: Navigation[] = [
  { id: '1', label: 'Home', link: '/', order_index: 1, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: '2', label: 'About', link: '/about', order_index: 2, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: '3', label: 'Programs', link: '/programs', order_index: 3, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: '4', label: 'Contact', link: '/contact', order_index: 4, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: '5', label: 'Donate', link: '/#donate', order_index: 5, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
]

interface NavbarProps {
  navigation?: Navigation[]
  siteName?: string
}

export function Navbar({ navigation, siteName = 'Siraj-ul-Uloom' }: NavbarProps) {
  const navLinks = navigation || defaultNavigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-soft backdrop-blur-sm bg-opacity-95">
      <div className="container-custom flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
            <span className="text-white font-bold text-lg">🕌</span>
          </div>
          <span className="font-black text-xl text-emerald-900 hidden sm:inline">{siteName}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="px-4 py-2 text-slate-700 font-medium hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link href="/admin/login" className="btn-primary ml-4">
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`transition-all duration-300 block w-6 h-0.5 bg-emerald-900 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`transition-all duration-300 block w-6 h-0.5 bg-emerald-900 mt-1.5 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`transition-all duration-300 block w-6 h-0.5 bg-emerald-900 mt-1.5 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 animate-slide-down">
          <div className="container-custom py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="block px-4 py-3 text-slate-700 font-medium hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/admin/login" 
              className="block btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
