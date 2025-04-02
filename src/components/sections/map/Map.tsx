import { FC } from 'react'

const Map: FC = () => {
  return (
    <section className='relative grid grid-cols-1 md:grid-cols-2 mt-16 border-y border-gray-200'>
      <div className='order-1 md:order-2 px-16 py-8 lg:7xl w-full'>
        <h2 className='text-2xl font-bold py-2 md:py-4'> Адрес компании</h2>
        <p className='text-gray-600'>Мы рады ответить на все ваши вопросы.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='flex flex-col mt-10 '>
            <div className='uppercase text-xs text-gray-600'>Адрес:</div>
            <div className='mb-6'>г. Алматы, ул. Айтиева 52</div>
            <div className='uppercase text-xs text-gray-600'>Режим работы:</div>
            <div>Пн—Сб 08:00 – 18:00</div>
            <button className='w-56 mt-10 p-3 bg-black text-white hover:bg-accent'>Написать в WhatsApp</button>
          </div>
          <div className=' flex flex-col mt-10 '>
            <div className='uppercase text-xs text-gray-600'>Телефон:</div>
            <div className='mb-6'>+7(701)761-29-36</div>
            <div className='uppercase text-xs text-gray-600'>Email:</div>
            <div>info@cleanwell.kz</div>
          </div>
        </div>
      </div>

      <div className='order-2 md:order-1'>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3Ae361e1b9261998f73d91846190c5e858cb88ba34a8fa21e972ff4000e52f0d77&amp;source=constructor'
          width='100%'
          height='400'></iframe>
      </div>
    </section>
  )
}

export default Map
