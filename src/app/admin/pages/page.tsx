'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AdminSidebar } from '@/components/AdminSidebar'
import { getPages, createPage, deletePage } from '@/lib/api'
import type { Page } from '@/lib/api'

export default function AdminPages() {
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [newPageTitle, setNewPageTitle] = useState('')

  useEffect(() => {
    const loadPages = async () => {
      try {
        const data = await getPages()
        setPages(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error('Error loading pages:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPages()
  }, [])

  const handleAddPage = async () => {
    if (!newPageTitle.trim()) return

    try {
      const newPage = await createPage({
        title: newPageTitle,
        slug: newPageTitle.toLowerCase().replace(/\s+/g, '-'),
        meta_title: newPageTitle,
        meta_description: '',
      })

      if (newPage) {
        setPages([...pages, newPage])
        setNewPageTitle('')
        setShowModal(false)
      }
    } catch (error) {
      console.error('Error creating page:', error)
    }
  }

  const handleDeletePage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this page?')) return

    try {
      await deletePage(id)
      setPages(pages.filter(p => p.id !== id))
    } catch (error) {
      console.error('Error deleting page:', error)
    }
  }

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="bg-white shadow-soft border-b border-slate-200">
          <div className="p-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-black text-emerald-900">📄 Pages</h1>
                <p className="text-slate-600 mt-1">Manage your website pages</p>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="btn-primary flex items-center gap-2"
              >
                <span>➕</span>
                Add Page
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin text-4xl">⏳</div>
              <p className="text-slate-600 mt-4">Loading pages...</p>
            </div>
          ) : pages.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-soft p-12 text-center">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-slate-600 text-lg">No pages found. Create one to get started!</p>
            </div>
          ) : (
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Slug</th>
                      <th>Meta Title</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((page) => (
                      <tr key={page.id} className="hover:bg-emerald-50 transition-colors">
                        <td className="font-semibold text-slate-900">{page.title}</td>
                        <td className="text-slate-600 font-mono">{page.slug}</td>
                        <td className="text-slate-600">{page.meta_title}</td>
                        <td>
                          <div className="flex gap-3">
                            <Link href={`/admin/pages/${page.id}/edit`} className="btn-ghost">
                              ✏️ Edit
                            </Link>
                            <button 
                              onClick={() => handleDeletePage(page.id)}
                              className="text-red-600 hover:text-red-700 font-medium transition-colors"
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="card p-8 max-w-md w-full animate-scale-in">
            <h2 className="heading-xl mb-6">Add New Page</h2>
            <input
              type="text"
              placeholder="Page title"
              value={newPageTitle}
              onChange={(e) => setNewPageTitle(e.target.value)}
              className="form-input mb-6"
              onKeyPress={(e) => e.key === 'Enter' && handleAddPage()}
            />
            <div className="flex gap-4">
              <button 
                onClick={() => setShowModal(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddPage}
                className="btn-primary flex-1"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
