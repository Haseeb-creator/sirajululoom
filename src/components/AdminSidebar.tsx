'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { logout } from '@/lib/auth'

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [expanded, setExpanded] = useState(true)

  const handleLogout = () => {
    logout()
    router.push('/admin/login')
  }

  const menuItems = [
    { href: '/admin/dashboard', label: '📊 Dashboard', icon: '📊' },
    { href: '/admin/pages', label: '📄 Pages', icon: '📄' },
    { href: '/admin/sections', label: '🔲 Sections', icon: '🔲' },
    { href: '/admin/navigation', label: '🔗 Navigation', icon: '🔗' },
    { href: '/admin/media', label: '🖼️ Media', icon: '🖼️' },
    { href: '/admin/donations', label: '💰 Donations', icon: '💰' },
    { href: '/admin/testimonials', label: '💬 Testimonials', icon: '💬' },
    { href: '/admin/settings', label: '⚙️ Settings', icon: '⚙️' },
  ]

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-gradient-islamic text-white transition-all duration-300 ${expanded ? 'w-64' : 'w-20'} z-40 overflow-y-auto shadow-xl`}>
      {/* Logo */}
      <div className="p-4 border-b border-white border-opacity-20 flex items-center justify-between">
        <div className={`flex items-center gap-3 ${!expanded && 'justify-center w-full'}`}>
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-xl">🕌</span>
          </div>
          {expanded && <span className="font-black text-lg">Admin</span>}
        </div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className={`p-1 hover:bg-white hover:bg-opacity-20 rounded transition ${!expanded && 'hidden'}`}
        >
          ◀
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              pathname === item.href
                ? 'bg-white bg-opacity-20 font-semibold shadow-lg'
                : 'text-white text-opacity-80 hover:bg-white hover:bg-opacity-10'
            }`}
            title={!expanded ? item.label : ''}
          >
            <span className="text-xl">{item.icon}</span>
            {expanded && <span className="font-medium">{item.label.split(' ')[1]}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-white border-opacity-20 ${expanded ? '' : 'flex justify-center'}`}>
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-200 ${!expanded && 'justify-center'}`}
        >
          <span className="text-lg">🚪</span>
          {expanded && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}
