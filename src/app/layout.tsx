import './globals.css'
import { Inter } from 'next/font/google'
import { initEmailJS } from '../../lib/emailjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Birmingham Plumbing Pro - Trusted Plumber in Birmingham | 24/7 Service',
  description: 'Fast response. Fair prices. Satisfaction guaranteed. Over 10 years serving Birmingham with reliable plumbing solutions.',
}

// Initialize EmailJS
if (typeof window !== 'undefined') {
  initEmailJS()
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}