import React from 'react'
import NavFooterItem from './NavFooterItem'
import { footerMenu } from './footer.data'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center w-full bg-black text-white'>
      <div className=' sm:hidden  p-6'>
        <Image
          src='/logo/logo_clean_well_q.png'
          alt='logo'
          width={190}
          height={141}
          className='object-contain'
        />
      </div>
      <div className='flex flex-wrap justify-between md:grid md:grid-cols-3 w-full gap-4 mx-auto max-w-2xl lg:max-w-7xl p-4'>
        <div className='hidden sm:flex flex-col p-4 '>
          <Image
            src='/logo/logo_clean_well_q.png'
            alt='logo'
            className='object-contain'
            width={190}
            height={141}
          />
        </div>

        <nav className='flex flex-col items-left flex-wrap gap-2 p-4 '>
          <h3 className='mb-2 text-lg font-semibold'>Навигация</h3>
          {footerMenu.map(item => (
            <NavFooterItem
              key={item.link}
              item={item}
            />
          ))}
        </nav>
        <div className='flex flex-col items-start flex-wrap gap-1 p-4 '>
          <h3 className='mb-2 text-lg font-semibold'>Контакты</h3>
          <p className='flex gap-2 items-center text-base'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
              />
            </svg>
            :
            <Link
              href={`tel:+${process.env.NEXT_PUBLIC_PHONE}`}
              className='transition duration-100 hover:scale-110 hover:text-accent ml-2'>
              {process.env.NEXT_PUBLIC_PHONE}
            </Link>
          </p>
          <p className='flex gap-2 items-center text-base'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
              />
            </svg>
            : <span className='ml-2'>{process.env.NEXT_PUBLIC_EMAIL}</span>
          </p>
          <p className='flex gap-2 items-center text-base'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
              />
            </svg>
            : <span className='ml-2'>{process.env.NEXT_PUBLIC_ADDRESS}</span>
          </p>

          <h3 className='mb-1 mt-2 text-lg font-semibold'>Социальные сети</h3>
          <div className='flex gap-2'>
            <SocialIcon
              url={process.env.NEXT_PUBLIC_LINK_INSTAGRAM}
              network='instagram'
              fgColor='white'
              bgColor='transparent'
              className='transition duration-100 hover:scale-110 hover:bg-accent rounded-full'
            />

            <SocialIcon
              url={process.env.NEXT_PUBLIC_LINK_TELEGRAM}
              network='telegram'
              fgColor='white'
              bgColor='transparent'
              className='transition duration-100 hover:scale-110 hover:bg-accent rounded-full'
            />
          </div>
        </div>
      </div>
      <div className='p-4'>© 2025 Все права защищены.</div>
    </footer>
  )
}

export default Footer
