'use client'
import { FC, useState } from 'react'
import { menu } from './menu.data'
import NavItem from './NavItem'

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      {/* Десктопное меню */}
      <nav className='hidden gap-6 md:flex'>
        {menu.map(item => (
          <NavItem
            key={item.link}
            item={item}
          />
        ))}
      </nav>

      {/* Кнопка бургера */}
      <button
        className='md:hidden'
        onClick={() => setIsOpen(true)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-7'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>

      {/* Мобильное модальное меню */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-10 transition-transform backdrop-blur-sm ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } md:hidden`}>
        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg w-4/5 max-w-sm shadow-lg relative'>
          {/* Кнопка закрытия */}
          <button
            className='absolute top-3 right-3 text-gray-700'
            onClick={() => setIsOpen(false)}>
            ✕
          </button>

          {/* Список ссылок */}
          <nav className='flex flex-col gap-4 text-center dark:text-white'>
            {menu.map(item => (
              <NavItem
                key={item.link}
                item={item}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
