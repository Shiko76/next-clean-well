import React from 'react'
import Maintenance from '../maintenance/Maintenance'
import Review from '../reviews/Review'
// import CleaningCalculator from '@/components/calculator/Calculator'
import IntroHeader from '../intro/IntroHeader'
import Exellence from '../excellence/Exellence'
import Faq from '../faq/Faq'

const Main = () => {
  return (
    <main className='grow'>
      <IntroHeader />
      <Maintenance />
      <Exellence />
      {/* <div>Калькулятор уборки в Алматы</div> */}
      <Review />
      <Faq />
    </main>
  )
}

export default Main
