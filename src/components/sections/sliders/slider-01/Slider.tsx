'use client'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SliderButtons from './SliderButtons'

interface Slide {
  id: number
  title: string
  tagline: string
  image: string
  buttons: ButtonProps[]
}

interface ButtonProps {
  id: number
  text: string
  link: string
  type: string
}

interface SliderProps {
  data: Slide[]
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <section className='w-full min-h-[200px] h-[60vh] sm:h-[400px] my-8'>
      <div className='h-full'>
        <ul className='h-full w-full'>
          <Swiper
            speed={1500}
            className='h-full w-full'
            navigation
            pagination={{ type: 'bullets', clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}>
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide
                key={id}
                className='relative h-full w-full'>
                <div className='absolute inset-0'>
                  <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-black opacity-20'></div>
                </div>
                <div className='relative z-10 h-full flex items-center justify-center px-4 text-center'>
                  <div>
                    {tagline && <p className='text-sm sm:text-xl lg:text-3xl font-semibold text-white uppercase'>{tagline}</p>}
                    <p className='text-2xl sm:text-4xl lg:text-5xl font-bold text-white'>{title}</p>
                    {buttons.length > 0 && (
                      <div className='bg-gray-800 inline-block px-6 py-2 rounded-full text-white mt-6 sm:mt-10'>
                        <SliderButtons buttons={buttons} />
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  )
}

export default Slider
