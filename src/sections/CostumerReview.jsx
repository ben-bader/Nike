import React from "react"
import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
const CostumerReview = () => {
  return (
    <section className="bg-slate-200 padding-l padding-x padding-y max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our
        <span className="text-coral-red"> Customers </span>
        Say About Nike
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Here genuine stories frome our costumers about thier exceptional experiences whit us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((review)=>(
            <ReviewCard key={review.customerName} 
            imageURL={review.imgURL} 
            customerName ={review.customerName}
            rating={review.rating} 
             feedback={review.feedback} />
           
          ))
        }
      </div>
    </section>
  )
}

export default CostumerReview
