import Image from 'next/image'
import { FC } from 'react'

const BlockRight: FC = () => {
  return (
    <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
      <div className='relative left-12 top-12 z-5 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 shadow-cyan-500/50 '>
        <Image
          src='/maintenance/home.jpg'
          alt='Hero'
          className='w-full h-full object-cover object-center'
          priority
          width={500}
          height={500}
        />
      </div>

      <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg shadow-cyan-500/50 '>
        <Image
          src='/maintenance/office.jpg'
          alt='Hero'
          className='w-full h-full object-cover object-center'
          priority
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default BlockRight
