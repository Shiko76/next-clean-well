import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Вакансии для новых сотрудников | CleanWell',
  description: 'Вакансии для новых сотрудников | CleanWell'
}

export default function PageVacancies() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl md:mt-8 text-black my-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Вакансии</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* Левая колонка — изображение */}
        <div className="w-full lg:w-1/2 p-10">
          <Image
            src="/job-cleaning.png" // замените на реальный путь к изображению
            alt="Работа в CleanWell"
            className="w-full h-auto rounded-2xl shadow-md object-cover"
            width={200}
            height={300}
          />
        </div>

        {/* Правая колонка — текст */}
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-2xl font-semibold mb-4">Присоединяйтесь к команде CleanWell</h2>
          <p className="mb-4 text-lg">
            Мы ищем ответственных и энергичных сотрудников для уборки квартир. Предлагаем достойные условия труда, гибкий график и стабильную оплату.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-base italic">
            <li>Гибкий график</li>
            <li>Еженедельные выплаты</li>
            <li>Дружный коллектив</li>
            <li>Бесплатное обучение</li>
          </ul>
          <div className='mt-20'>
          <Link
            href={`https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_PHONE_SHORT}`}
            className=' md:mt-10 p-6 bg-accent text-center text-white hover:bg-accent/70 mt-6 text-2xl'>
            Откликнуться
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}
