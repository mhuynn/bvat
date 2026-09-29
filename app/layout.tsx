import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const heading = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Bảo Việt An Tâm',
  description: 'Bảo vệ tương lai - An tâm cuộc sống',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${heading.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}