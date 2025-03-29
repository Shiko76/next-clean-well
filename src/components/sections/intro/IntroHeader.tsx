import { FC } from 'react'
import Image from 'next/image'
import IntroLeft from './IntroLeft'
import IntroRight from './IntroRight'

const IntroHeader: FC = () => {
  return (
    <section className='relative mb-16'>
      <div className=''>
        <Image
          src='/bg-header/bg-header-680.jpg'
          alt='image'
          width={1920}
          height={480}
          className='object-cover'
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full '>
        <div className='flex items-start mt-8 md:mt-16 justify-between mx-auto p-4 lg:max-w-7xl h-full'>
          <IntroLeft />
          <IntroRight />
        </div>
      </div>
      <svg
        className='absolute hidden md:block start-0 bottom-0 w-full'
        preserveAspectRatio='none'
        width='100%'
        height='80'
        viewBox='0 0 1460 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M122 22.8261L0 0V120H1460V0L1338 22.8261C1217 44.1304 973 88.2609 730 88.2609C487 88.2609 243 44.1304 122 22.8261Z'
          fill='#fff'></path>
      </svg>
    </section>
  )
}

export default IntroHeader
