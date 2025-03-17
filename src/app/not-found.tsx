import { FC } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 | Not Found',
  description: '404 | Not Found',
}

const notFound: FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center text-xl'>
      <span className='text-teal-500 text-3xl px-4'>404</span> | Not Found
    </div>
  )
}

export default notFound
