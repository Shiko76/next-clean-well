import Footer from '@/components/sections/footer/Footer'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/sections/header/Header'
import ButtonScrollToTop from './ui/button/ButtonScrollToTop'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Clean well | Уборка квартир и офисов в Алматы',
  description:
    'Clean well | Уборка квартиры на выгодных условиях в Алматы. Уборка офисов в Алматы. Уборка коттеджей и домов в Алматы. Уборка помещений в Алматы.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-dark`}>
        <div className='flex flex-col justify-between w-full min-h-screen bg-white'>
          {/* <Header /> */}
          <Header />
          {children}
          {/* <Footer /> */}
          <Footer />
          <ButtonScrollToTop />
        </div>
      </body>
    </html>
  )
}
