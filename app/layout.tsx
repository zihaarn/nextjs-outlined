import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], 
weight: ['100', '200', '300', '400', '500', '500', '600', '700']})

export const metadata: Metadata = {
  title: 'Nextjs Outlined',
  description: 'Master Nextjs in a simple way!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
