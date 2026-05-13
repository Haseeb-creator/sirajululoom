'use client'

import { useEffect } from 'react'
import { initializeLocalStorage } from '@/lib/localStorage'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize localStorage with demo data if not already done
    initializeLocalStorage()
  }, [])

  return <>{children}</>
}
