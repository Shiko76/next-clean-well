import React from 'react'
import Maintenance from '../maintenance/Maintenance'
import Review from '../reviews/Review'
import CleaningCalculator from '@/components/calculator/Calculator'

const Main = () => {
  return (
    <main className='grow px-4 '>
      <Maintenance />
      <CleaningCalculator />
      <Review />
    </main>
  )
}

export default Main
