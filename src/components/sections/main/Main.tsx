import React from 'react'
import Maintenance from '../maintenance/Maintenance'
import Review from '../reviews/Review'
// import CleaningCalculator from '@/components/calculator/Calculator'
import IntroHeader from '../intro/IntroHeader'
import Exellence from '../excellence/Exellence'
import Faq from '../faq/Faq'
import Call from '../call/Call'
import Map from '../map/Map'

const Main = () => {
  return (
    <main className='grow'>
      <IntroHeader />
      <Maintenance />
      <Exellence />
      {/* <div>Калькулятор уборки в Алматы</div> */}
      <Call />
      <Review />
      <Faq />
      <Map />
    </main>
  )
}

export default Main
