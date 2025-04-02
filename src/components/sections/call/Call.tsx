import Image from 'next/image'
import { FC } from 'react'

const Call: FC = () => {
  return (
    <section className='relative grid grid-cols-1 md:grid-cols-2 my-16 border-y border-gray-200'>
      <div></div>
      <Image
        src='/bg-header/bg-mobile.jpg'
        alt='image'
        width={1200}
        height={500}
        className='object-cover border rounded-tr-5xl  '
      />
    </section>
  )
}

export default Call
