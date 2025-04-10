import Link from 'next/link'
import { FC } from 'react'

const ContactsMap: FC = () => {
  return (
    <div
      className='order-1 md:order-2 px-16 pt-8 lg:7xl w-full text-black'
      id='contacts'>
      <h2 className='text-2xl font-bold py-2 md:py-4'> Адрес компании</h2>
      <p className='text-gray-600'>Мы рады ответить на все ваши вопросы.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='flex flex-col mt-6 md:mt-10 '>
          <div className='uppercase text-xs text-gray-600'>Адрес:</div>
          <div className='mb-2 md:mb-6 font-bold'>{process.env.NEXT_PUBLIC_ADDRESS}</div>
          <div className='uppercase text-xs text-gray-600'>Режим работы:</div>
          <div className='font-bold'>Пн—Сб 08:00 – 18:00</div>
          <Link
            href={`https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_PHONE_SHORT}`}
            className='w-56 mt-6 md:mt-10 p-3 bg-accent text-center text-white hover:bg-accent/70'>
            Написать в WhatsApp
          </Link>
        </div>
        <div className='mb-8 flex flex-col mt-6 md:mt-10 '>
          <div className='uppercase text-xs text-gray-600'>Телефон:</div>
          <div className='mb-2 md:mb-6 font-bold'>
            <Link href={`tel:+${process.env.NEXT_PUBLIC_PHONE_SHORT}`}>{process.env.NEXT_PUBLIC_PHONE}</Link>
          </div>
          <div className='uppercase text-xs text-gray-600'>Email:</div>
          <div className='font-bold'>{process.env.NEXT_PUBLIC_EMAIL}</div>
        </div>
      </div>
    </div>
  )
}

export default ContactsMap
