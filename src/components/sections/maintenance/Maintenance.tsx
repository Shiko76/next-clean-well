import { FC } from 'react'
import BlockLeft from './BlockLeft'
import BlockRight from './BlockRight'

const Maintenance: FC = () => {
  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl'>
      <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
        <BlockLeft />
        <BlockRight />
      </div>
    </section>
  )
}

export default Maintenance
