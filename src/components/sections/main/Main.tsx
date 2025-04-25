import React from 'react'
import Maintenance from '../maintenance/Maintenance'
import Review from '../reviews/Review'
import IntroHeader from '../intro/IntroHeader'
import Exellence from '../excellence/Exellence'
import Faq from '../faq/Faq'
import Map from '../map/Map'
import Slider from '../sliders/slider-01/Slider'
import dataSlider from '@/components/sections/sliders/slider-01/data/slider-data.json'
import CleaningCalculator from '@/components/calculator/Calculator'

const Main = () => {
  return (
    <main className='grow'>
      <IntroHeader />
      <Maintenance />
      {/* <CleaningCalculator /> */}
      <Exellence />
      <Review />
      <Slider data={dataSlider} />
      <Faq />
      <Map />
    </main>
  )
}

export default Main
