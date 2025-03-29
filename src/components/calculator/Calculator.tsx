'use client'

import React, { useState, useEffect } from 'react'
import prices from './prices.json'
import Image from 'next/image'
import Link from 'next/link'

type RoomType = keyof typeof prices.roomTypes
type CleaningType = keyof typeof prices.cleaningTypes
type ExtraServiceType = keyof typeof prices.extraServices

const roomIcons: Record<RoomType, string> = {
  Квартира: '/roomTypes/appartment.webp',
  Коттедж: '/roomTypes/cottage.webp',
  Дом: '/roomTypes/home.webp',
  Офис: '/roomTypes/office.webp',
  Помещение: '/roomTypes/premises.webp',
}

const cleaningIcons: Record<CleaningType, string> = {
  Влажная: '/roomTypes/wet.webp',
  Генеральная: '/roomTypes/general.webp',
  'После ремонта': '/roomTypes/after_renovation.webp',
  Ежедневная: '/roomTypes/daily.webp',
}

const CleaningCalculator: React.FC = () => {
  const [roomType, setRoomType] = useState<RoomType>('Квартира')
  const [cleaningType, setCleaningType] = useState<CleaningType>('Влажная')
  const [squareMeters, setSquareMeters] = useState<number>(40)
  const [extraServices, setExtraServices] = useState<ExtraServiceType[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    calculatePrice()
  }, [roomType, cleaningType, squareMeters, extraServices])

  const toggleExtraService = (service: ExtraServiceType) => {
    setExtraServices(prev => (prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]))
  }

  const calculatePrice = () => {
    const basePrice = prices.roomTypes[roomType] * prices.cleaningTypes[cleaningType] * squareMeters
    const extraServicesCost = extraServices.reduce((sum, service) => sum + prices.extraServices[service], 0)
    setTotalPrice(basePrice + extraServicesCost)
  }

  const whatsappLink = `https://api.whatsapp.com/send/?phone=77019900933&text=Я%20хочу%20заказать%20уборку%20*${roomType}*%20с%20типом%20уборки%20*${cleaningType}*%20количество%20*${squareMeters}%20м²*${
    extraServices.length > 0 ? `,%20дополнительные%20услуги:%20${extraServices.join(', ')}` : ''
  }`

  return (
    <div
      className='max-w-full lg:w-7xl mx-auto p-6 mb-8 md:mb-16'
      id='calculator'>
      <h2 className='text-3xl font-bold mb-4 text-center'>Калькулятор уборки</h2>

      {/* Шаг 1: Выбор типа помещения */}
      <label className='block text-lg font-semibold mb-2 text-center p-2'>Шаг 1: Выберите тип помещения</label>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mb-6'>
        {Object.keys(roomIcons).map(type => (
          <button
            key={type}
            onClick={() => setRoomType(type as RoomType)}
            className={`p-2 rounded-lg border-2 transition hover:opacity-70 ${
              roomType === type ? 'border-accent' : 'border-gray-300'
            } flex flex-col items-center transition`}>
            <Image
              src={roomIcons[type as RoomType]}
              alt={type}
              width={200}
              height={200}
              className='w-full mb-3 rounded-lg'
            />
            <span className='text-sm sm:text-lg '>{type}</span>
          </button>
        ))}
      </div>

      {/* Шаг 2: Выбор типа уборки */}
      <label className='block text-lg font-semibold mb-2 text-center'>Шаг 2: Выберите тип уборки</label>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mb-6 '>
        {Object.keys(cleaningIcons).map(type => (
          <button
            key={type}
            onClick={() => setCleaningType(type as CleaningType)}
            className={`p-2 rounded-lg border-2 transition hover:opacity-70 ${
              cleaningType === type ? 'border-accent' : 'border-gray-300'
            } flex flex-col items-center transition`}>
            <Image
              src={cleaningIcons[type as CleaningType]}
              alt={type}
              width={200}
              height={200}
              className='w-full mb-3 rounded-lg'
            />
            <span className='text-sm sm:text-lg '>{type}</span>
          </button>
        ))}
      </div>

      {/* Шаг 3: Выбор площади */}
      <label className='block text-lg font-semibold mb-1 text-center'>Шаг 3: Укажите площадь (м²)</label>
      <div className='flex flex-col items-center mb-4'>
        <input
          type='number'
          min={15}
          max={1250}
          value={squareMeters}
          onChange={e => setSquareMeters(Number(e.target.value))}
          className='w-32 p-2 border rounded-md text-center mb-3'
        />
        <input
          type='range'
          min={15}
          max={1250}
          value={squareMeters}
          onChange={e => setSquareMeters(Number(e.target.value))}
          className='w-full h-2 bg-gray-300 rounded-lg cursor-pointer
 '
        />
        <p className='text-lg font-semibold mt-2'>{squareMeters} м²</p>
      </div>

      {/* Шаг 4: Дополнительные услуги */}
      <label className='block text-lg font-semibold mt-4 mb-2 text-center'>Шаг 4: Дополнительные услуги</label>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {Object.keys(prices.extraServices).map(service => (
          <label
            key={service}
            className='flex items-center space-x-2'>
            <input
              type='checkbox'
              checked={extraServices.includes(service as ExtraServiceType)}
              onChange={() => toggleExtraService(service as ExtraServiceType)}
              className='w-5 h-5'
            />
            <span>
              {service} ({prices.extraServices[service as ExtraServiceType]} ₸)
            </span>
          </label>
        ))}
      </div>

      {/* Итоговая цена и кнопка WhatsApp */}
      <div className='grid grid-cols-1 md:flex md:justify-between mt-6 p-4 border-t'>
        <h3 className='text-2xl px-2 md:px-0 md:text-3xl font-bold text-center md:text-left mb-2 md:mb-0'>
          Итоговая цена: {totalPrice ? totalPrice : 0} ₸
        </h3>
        <Link
          href={whatsappLink}
          target='_blank'
          className='bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition text-center'>
          Заявка в WhatsApp
        </Link>
      </div>
    </div>
  )
}

export default CleaningCalculator
