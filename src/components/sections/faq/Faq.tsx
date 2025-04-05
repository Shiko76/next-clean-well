'use client'
import { FC, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { faqData } from './faq.data'

const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl md:mt-8'
      id='faq'>
      <h2 className='mb-4 text-2xl w-full font-bold  sm:text-3xl md:mb-8  text-center'>Остались вопросы? У нас есть ответы.</h2>
      <p className='mt-8 text-gray-600'>
        Если вы не нашли свой вопрос{' '}
        <Link
          href={`https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_PHONE_SHORT}`}
          className='text-accent hover:underline'>
          напишите нам в WhatApp
        </Link>
      </p>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-4'>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border-t w-full border-gray-200 py-2 px-4 ${openIndex === index ? 'bg-gray-100' : ''}`}>
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex w-full items-center justify-between text-left  font-medium py-2 focus:outline-none  ${
                openIndex === index ? 'text-accent' : ''
              }`}>
              {item.question}

              {openIndex === index ? <ChevronUp className='w-6 h-6  text-secondary' /> : <ChevronDown className='w-6 h-6  text-accent' />}
            </button>
            <div
              className={`transition-[max-height,opacity] duration-1000 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100 ' : 'max-h-0 opacity-0'
              }`}>
              <p className='text-sm mt-2 italic text-bold '>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
