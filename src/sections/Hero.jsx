import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants/index'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoeIMg,setBigShoeIMg] = useState(bigShoe1)
  return (
    <section id='home'
    className='w-full flex lg:flex-row 
    flex-col justify-center
     min-h-screen gap-10 max-container-class padding-l padding-x'>
     <div className='relative xl:w-2/5 flex flex-col
      justify-center items-start w-full z-50
      pt-28'>
      <p className='text-xl font-montserrat 
      text-coral-red'>Our summer collections</p>
      <h1 className='mt-10 font-palanquin text-8xl inline-block
      max-sm:text-[72px] max-sm:leading-[82px] font-bold  w-full z-50'>
       <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '>The New Arrival</span>
       <span className='text-coral-red'>Nike</span> Shoes
       </h1>
       <p className='font-montserrat text-slate-gray 
       text-lg leading-8 mt-6 mb-14
       sm:max-w-sm z-50'>
        Discover stylish Nike Arrivals, quality comfort, and innovation for your active life.
        </p>
       <Button title="Shop Now" icon={arrowRight} className="flex gap-3 bg-coral-red px-5 py-3 rounded-full text-lg items-center justify-center text-white border-coral-red z-50"/>
    <div className='flex justify-start items-center 
    flex-wrap w-full mt-20 gap-16 z-50'>
      {statistics.map((stat)=>( 
        <div key={stat.label}>
          <p className='text-xl font-palanquin font-bold'>{stat.value}</p>
          <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
        </div>)
      )}
    </div>
     </div>
    <div className='flex flex-col justify-center items-center 
     xl:min-h-screen max-xl:py-40 bg-primary
     bg-hero bg-cover bg-center  relative'>
      <img src={bigShoeIMg} alt="Shoe collection" 
      width={900}
      height={800}
      className='object-contain relative'/>
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] right-[2%] max-sm:px-6'>
      {shoes.map((shoe)=>(
        <div key={shoe}>
            <ShoeCard imgUrl={shoe}
            changeBigShoeImg={(shoe)=>setBigShoeIMg(shoe)}
            bigShoeImg={bigShoeIMg}/>
        </div>
      ))}
     </div>
     </div>
    </section>
  )
}

export default Hero
