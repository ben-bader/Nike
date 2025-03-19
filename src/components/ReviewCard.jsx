import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({feedback,imageURL,customerName,rating}) => {
  return (
    
       <div className="flex flex-col gap-4 justify-center items-center ">
              <img className="rounded-full object-cover w-[120px] h-[120px]" src={imageURL} />
              <h4 className="font-montserrat text-xl font-bold">{customerName}</h4>
              <img src={star} width={24} height={24} />
              <p>({rating})</p>
              <p className="info-text text-center">{feedback}</p>
            </div>
    
  )
}

export default ReviewCard
