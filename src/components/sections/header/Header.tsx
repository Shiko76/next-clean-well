import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='border-b border-b-gray-300 w-full bg-white text-black'>
      <div className='flex items-center justify-between mx-auto px-4 py-2 lg:max-w-7xl'>
        <Link href='/'>
          <Image
            src='/logo/logo_clean_well_2.png'
            alt='clean well'
            width={180}
            height={35}
          />
        </Link>

        <Link
          href='tel:+77017612936'
          className='flex items-center justify-center gap-2  place-items-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1}
            stroke='currentColor'
            className='size-5 sm:size-6 fill-accent '>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
            />
          </svg>
          <span className='text-sm sm:text-xl px-0.5'>{process.env.NEXT_PUBLIC_PHONE}</span>
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header

