import React from 'react'
import NavFooterItem from './NavFooterItem'
import { footerMenu } from './footer.data'

const Footer = () => {
  return (
    <footer className='mt-8 border-t border-t-gray-300'>
      <div className='flex flex-col gap-4 items-center sm:flex-row justify-between mx-auto max-w-2xl px-4 py-5 sm:px-6 lg:max-w-7xl'>
        <nav className='flex items-center flex-wrap gap-4 lg:gap-12 lg:flex dark:text-white'>
          {footerMenu.map(item => (
            <NavFooterItem
              key={item.link}
              item={item}
            />
          ))}
        </nav>
        <div className='text-sm dark:text-white/60'>© 2025 Spencer Sharp. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
