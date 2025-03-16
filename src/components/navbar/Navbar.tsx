import Link from 'next/link'
import { FC } from 'react'
import { menu } from './menu.data'
import NavItem from './NavItem'

const Navbar: FC = () => {
  return (
    <header className='mb-8 border-b border-b-gray-300'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 py-5 sm:px-6 lg:max-w-7xl'>
        <Link href='/'>
          <h1 className='text-2xl fonf-bold text-teal-500'>Top</h1>
        </Link>

        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
          {menu.map(item => (
            <NavItem
              key={item.link}
              item={item}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
