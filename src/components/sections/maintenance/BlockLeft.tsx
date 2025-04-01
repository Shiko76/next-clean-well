import { FC } from 'react'

const BlockLeft: FC = () => {
  return (
    <div className='mb-6 flex wfull flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40'>
      <h2 className='mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-5xl'>О нас</h2>
      <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
        Наша клининговая компания предлагает широкий спектр услуг по уборке любых помещений. Мы используем профессиональное оборудование и
        безопасные чистящие средства, гарантируя безупречную чистоту и порядок
      </p>
    </div>
  )
}

export default BlockLeft
