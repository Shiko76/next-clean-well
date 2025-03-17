'use client'
import { FC } from 'react'
import { IMenuItem } from '@/types/menu.interface'
import Link from 'next/link'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

interface INavItem {
  item: IMenuItem
}

const NavFooterItem: FC<INavItem> = ({ item }) => {
  const pathname = usePathname()

  return (
    <div>
      <Link
        href={item.link}
        className={cn(
          'text-base font-medium transition duration-100 hover:text-teal-600 hover:underline',
          pathname === item.link ? 'text-teal-600' : ' text-gray-500 dark:text-white/70',
        )}>
        {item.name}
      </Link>
    </div>
  )
}

export default NavFooterItem
