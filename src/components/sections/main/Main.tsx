import React from 'react'
import Maintenance from '../maintenance/Maintenance'
import Review from '../reviews/Review'
import CleaningCalculator from '@/components/calculator/Calculator'
import IntroHeader from '../intro/IntroHeader'

const Main = () => {
  return (
    <main className='grow'>
      <IntroHeader />
      <Maintenance />
      <CleaningCalculator />
      <Review />
    </main>
  )
}

export default Main
