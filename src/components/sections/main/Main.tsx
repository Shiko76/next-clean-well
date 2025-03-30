import React from 'react'
import Maintenance from '../maintenance/Maintenance'
import Review from '../reviews/Review'
import CleaningCalculator from '@/components/calculator/Calculator'
import IntroHeader from '../intro/IntroHeader'
import Exellence from '../excellence/Exellence'

const Main = () => {
  return (
    <main className='grow'>
      <IntroHeader />
      <Maintenance />
      <Exellence />
      <CleaningCalculator />
      <Review />
    </main>
  )
}

export default Main
