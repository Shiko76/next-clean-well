import { FC } from 'react'

const notFound: FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center text-xl'>
      <span className='text-teal-500 text-3xl px-4'>404</span> | Not Found
    </div>
  )
}

export default notFound
