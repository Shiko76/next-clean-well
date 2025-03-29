import { FC } from 'react'
import { IReviewItem } from '@/types/review.interface'

import Image from 'next/image'

interface IReviews {
  item: IReviewItem
}

const ReviewItem: FC<IReviews> = ({ item }) => {
  return (
    <div className='flex flex-col justify-between p-4 border border-accent rounded-se-4xl rounded-bl-4xl md:max-w-[300px] shadow-accent/50 shadow-md'>
      <p className='text-gray-600 mb-4'>{item.description}</p>
      <div className='flex justify-between items-center'>
        <Image
          src={item.image}
          alt={item.name}
          className='w-12 h-12 mr-4 rounded-full'
          width={48}
          height={48}
        />
        <h3 className='italic text-secondary dark:text-gray-300'>{item.name}</h3>
      </div>
    </div>
  )
}

export default ReviewItem
