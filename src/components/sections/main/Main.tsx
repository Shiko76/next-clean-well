import React from 'react'
import Maintenance from '../maintenance/Maintenance'
import Review from '../reviews/Review'
import IntroHeader from '../intro/IntroHeader'
import Exellence from '../excellence/Exellence'
import Faq from '../faq/Faq'
import Call from '../call/Call'
import Map from '../map/Map'
import Slider from '../sliders/slider-01/Slider'
import dataSlider from '@/components/sections/sliders/slider-01/data/slider-data.json'

const Main = () => {
  return (
    <main className='grow'>
      <IntroHeader />
      <Maintenance />
      <Exellence />
      {/* <div>Калькулятор уборки в Алматы</div> */}
      <Call />
      <Review />
      <Slider data={dataSlider} />
      <Faq />
      <Map />
    </main>
  )
}

export default Main
