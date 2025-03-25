import { FC } from 'react'
import Image from 'next/image'
import IntroLeft from './IntroLeft'
import IntroRight from './IntroRight'

const IntroHeader: FC = () => {
  return (
    <section className='relative mb-16'>
      <div className=''>
        <Image
          src='/bg-header/bg-1.jpg'
          alt='image'
          width={1920}
          height={480}
          className='object-cover'
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full '>
        <div className='flex items-center justify-between mx-auto p-4 lg:max-w-7xl h-full'>
          <IntroLeft />
          <IntroRight />
        </div>
      </div>
    </section>
  )
}

export default IntroHeader
