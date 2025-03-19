import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container padding-x padding-l padding-y' id='about-us'>
      <div className='flex flex-col flex-1'>
      <h2 className='font-palanquin text-4xl
       capitalize font-bold lg:max-w-lg  '>
       We Provide You
       <span className='text-coral-red'> Super Quality</span> Products
       </h2>
       <p className='mt-4 lg:max-w-lg info-text'>
        Lorem, ipsum dolor sit amet
         consectetur adipisicing elit. Fugit veritatis dolore quam, tempore sunt eveniet illo magni, est maxime in atque facilis itaque magnam animi? Iusto 
        ratione blanditiis tempore in.
        </p>
        <p className='info-text mt-6'>Our dedication todetail and ecellence ensures your satisfaction.</p>
      
      <div className='mt-11'><Button title="View Details"
       className="flex gap-3 bg-coral-red px-5 
       py-3 rounded-full text-lg items-center 
       justify-center
        text-white border-coral-red z-50"/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="Shoe 8" 
        width={570}
        height={522}
        className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality
