import React from 'react'
import Maintenance from '../maintenance/Maintenance'
import Review from '../reviews/Review'

const Main = () => {
  return (
    <main className='grow lg:max-w-7xl mx-auto px-4 '>
      <Maintenance />
      <Review />
    </main>
  )
}

export default Main
