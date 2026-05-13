'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (!email || !password) {
        throw new Error('Email and password are required')
      }

      const token = btoa(JSON.stringify({ email, timestamp: new Date().toISOString() }))

      // Store in localStorage (client-side auth)
      localStorage.setItem('admin_token', token)
      localStorage.setItem('admin_email', email)

      // Redirect to dashboard
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 500)
    } catch (err: any) {
      console.error('Login error:', err)
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-green-600 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 p-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-4">
              <span className="text-3xl">🕌</span>
            </div>
            <h1 className="text-3xl font-black mb-2">Admin Dashboard</h1>
            <p className="text-white text-opacity-90">Sign in to manage your site</p>
          </div>

          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 animate-slide-down">
                <p className="font-semibold">❌ Error</p>
                <p className="text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="form-input text-sm break-words"
                  required
                  disabled={loading}
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="form-input text-sm"
                  required
                  disabled={loading}
                  autoComplete="current-password"
                />
                <p className="text-xs text-slate-600 mt-2">Demo mode: Use any email/password</p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full btn-primary py-3 font-semibold flex items-center justify-center gap-2 text-base ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Signing in...
                  </>
                ) : (
                  <>
                    <span>🔐</span>
                    Sign In
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-600 mb-4">
                Need help? Contact your administrator.
              </p>
              <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                ← Back to website
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-white text-opacity-60 text-sm mt-6">
          © 2024 Siraj-ul-Uloom. All rights reserved.
        </p>
      </div>
    </div>
  )
}
