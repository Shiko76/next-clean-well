import { FC } from 'react'
import Image from 'next/image'
import WriteText from '@/app/ui/text/writeText'

const phrases = ['квартир', 'офисов', 'катеджей', 'домов', 'помещений']

const IntroHeader: FC = () => {
  return (
    <section className='relative mb-16'>
      <div className='w-full overflow-hidden'>
        <Image
          src='/bg-header/bg-header-680.jpg'
          alt='image'
          width={1920}
          height={480}
          className='object-cover sepia-0 brightness-90 animate-[pulse-bg_12s_infinite]'
        />
      </div>

      <div className='absolute top-0 left-0 w-full h-full '>
        <div className='flex flex-col items-center justify-start mx-auto lg:mt-8 lg:max-w-7xl h-full'>
          <Image
            src='/logo/logo-intro.png'
            alt='image'
            width={1100}
            height={480}
            className=' object-cover md:mr-20 px-8 pt-2 md:pt-6 '
          />
          <div className='flex items-center justify-center sm:justify-start w-80 '>
            <div className='text-xl font-bold text-accent sm:text-4xl md:text-5xl drop-shadow-lg  mr-4'> Уборка </div>
            <WriteText
              data={phrases}
              className=' text-xl text-secondary font-bold sm:text-4xl md:text-5xl drop-shadow-lg'
            />
          </div>

          <div className='text-center text-xl font-bold text-accent sm:text-4xl md:text-5xl drop-shadow-lg w-78'> в Алматы</div>
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
