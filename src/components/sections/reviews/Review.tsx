import { FC } from 'react'
import { reviews } from './review.data'
import ReviewItem from './ReviewItem'

interface IReview {}

const Review: FC<IReview> = ({}) => {
  return (
    <section
      className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl text-black'
      id='reviews'>
      <h2 className='mb-4 text-2xl w-full font-bold  sm:text-3xl md:mb-8  text-center'>Отзывы клиентов</h2>
      <div className='flex flex-wrap justify-between items-stretch mb-4 w-full gap-5'>
        {reviews.map((item, index) => (
          <ReviewItem
            key={index}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

export default Review
