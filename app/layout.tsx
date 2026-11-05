import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wael Karbelkar | AI/ML Developer Portfolio',
  description: 'Portfolio of Wael Karbelkar — AI/ML Developer specializing in Computer Vision, Deep Learning, and MLOps. Building intelligent systems that solve real-world problems.',
  keywords: ['AI', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'MLOps', 'Python', 'PyTorch', 'TensorFlow', 'Portfolio'],
  authors: [{ name: 'Wael Karbelkar' }],
  creator: 'Wael Karbelkar',
  publisher: 'Wael Karbelkar',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://waelkarbelkar.dev',
    title: 'Wael Karbelkar | AI/ML Developer Portfolio',
    description: 'Portfolio of Wael Karbelkar — AI/ML Developer specializing in Computer Vision, Deep Learning, and MLOps.',
    siteName: 'Wael Karbelkar Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wael Karbelkar Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wael Karbelkar | AI/ML Developer Portfolio',
    description: 'Portfolio of Wael Karbelkar — AI/ML Developer specializing in Computer Vision, Deep Learning, and MLOps.',
    images: ['/og-image.png'],
    creator: '@waelkarbelkar',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}