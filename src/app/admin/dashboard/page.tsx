'use client'

import Link from 'next/link'
import { AdminSidebar } from '@/components/AdminSidebar'

export default function AdminDashboard() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 ml-64">
        <div className="bg-white shadow-soft border-b border-slate-200">
          <div className="p-8">
            <h1 className="text-4xl font-black text-emerald-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Welcome back to your admin panel.</p>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-soft border-l-4 border-emerald-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-600">Pages</h3>
                <span className="text-2xl">📄</span>
              </div>
              <p className="text-3xl font-bold text-emerald-900">8</p>
              <p className="text-xs text-slate-500 mt-2">Active pages</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft border-l-4 border-blue-500">
              <h3 className="text-sm font-semibold text-slate-600 mb-1">Sections</h3>
              <p className="text-3xl font-bold text-blue-900">12</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft border-l-4 border-purple-500">
              <h3 className="text-sm font-semibold text-slate-600 mb-1">Programs</h3>
              <p className="text-3xl font-bold text-purple-900">6</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft border-l-4 border-pink-500">
              <h3 className="text-sm font-semibold text-slate-600 mb-1">Testimonials</h3>
              <p className="text-3xl font-bold text-pink-900">5</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Actions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/admin/pages" className="p-6 text-center border-2 border-emerald-500 rounded-xl hover:bg-emerald-50">
                <h3 className="font-semibold text-emerald-900">Edit Pages</h3>
                <p className="text-sm text-slate-600 mt-2">Manage your pages</p>
              </Link>
              <Link href="/" className="p-6 text-center border-2 border-blue-500 rounded-xl hover:bg-blue-50">
                <h3 className="font-semibold text-blue-900">View Website</h3>
                <p className="text-sm text-slate-600 mt-2">Preview live site</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
