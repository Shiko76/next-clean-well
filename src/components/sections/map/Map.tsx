'use client'
import { FC, useEffect, useRef, useState } from 'react'
import ContactsMap from './ContactsMap'

const Map: FC = () => {
  const mapRef = useRef<HTMLIFrameElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const disableInteraction = () => setIsActive(false)

    window.addEventListener('scroll', disableInteraction)

    return () => {
      window.removeEventListener('scroll', disableInteraction)
    }
  }, [])

  return (
    <section className='relative grid grid-cols-1 md:grid-cols-2 mt-16 border-y border-gray-200'>
      <ContactsMap />
      <div className='order-2 md:order-1'>
        <div
          className='relative w-full'
          onClick={() => setIsActive(true)}
          onTouchStart={() => setIsActive(true)}>
          {!isActive && <div className='absolute inset-0 bg-transparent cursor-pointer'></div>}
          <iframe
            ref={mapRef}
            src='https://yandex.ru/map-widget/v1/?um=constructor%3Ae361e1b9261998f73d91846190c5e858cb88ba34a8fa21e972ff4000e52f0d77&amp;source=constructor'
            width='100%'
            height='400'
            sandbox='allow-scripts allow-same-origin'></iframe>
        </div>
      </div>
    </section>
  )
}

export default Map
