import Footer from '@/components/sections/footer/Footer'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/sections/header/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Template SITE',
  description: 'Template SITE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='flex flex-col justify-between w-full min-h-screen bg-white dark:bg-black dark:text-white'>
          {/* <Header /> */}
          <Header />
          {children}
          {/* <Footer /> */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
