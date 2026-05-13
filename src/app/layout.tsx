import type { Metadata, Viewport } from 'next'
import './globals.css'
import LayoutClient from './LayoutClient'

export const metadata: Metadata = {
  title: 'Siraj-ul-Uloom | Islamic Education Institute',
  description: 'Premier Islamic institute dedicated to Quran memorization, Islamic education, and community development.',
  keywords: 'Islamic education, Quran memorization, Hafiz program, Islamic institute, Islamic learning',
  authors: [{ name: 'Siraj-ul-Uloom' }],
  creator: 'Siraj-ul-Uloom',
  publisher: 'Siraj-ul-Uloom',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Haseeb-creator.github.io/sirajululoom',
    siteName: 'Siraj-ul-Uloom',
    title: 'Siraj-ul-Uloom | Islamic Education Institute',
    description: 'Premier Islamic institute dedicated to Quran memorization and education.',
    images: [{
      url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=630&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Siraj-ul-Uloom Islamic Institute',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siraj-ul-Uloom | Islamic Education Institute',
    description: 'Premier Islamic institute dedicated to Quran memorization and education.',
    images: ['https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=630&fit=crop'],
  },
  alternates: {
    canonical: 'https://Haseeb-creator.github.io/sirajululoom',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🕌</text></svg>" />
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
