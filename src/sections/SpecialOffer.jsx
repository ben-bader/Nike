import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex flex-col sm:flex-row-reverse justify-wrap  items-center gap-10 max-container padding-l padding-y padding-x">
      <div className="flex-1 ">
        <img src={offer} alt="offer" width={700} height={773} className="" />
      </div>
      <div className='flex flex-col flex-1'>
      <h2 className='font-palanquin text-4xl
       capitalize font-bold lg:max-w-lg'>
       Special
       <span className='text-coral-red'> Offers</span>
       </h2>
       <p className='mt-4 lg:max-w-lg info-text'>
        Lorem, ipsum dolor sit amet
         consectetur adipisicing elit. Fugit veritatis dolore quam, tempore sunt eveniet illo magni, est maxime in atque facilis itaque magnam animi? Iusto 
        ratione blanditiis tempore in.
        </p>
        <p className='info-text mt-6'>Our dedication to detail and excellence ensures your satisfaction.</p>
      
      <div className='mt-11 gap-7 flex justify-start items-center'>
        <Button title="View Details"
       className="flex gap-3 bg-coral-red px-5 
       py-3 rounded-full text-lg items-center 
       justify-center
        text-white border-coral-red"/>
        <Button title="Learn More"
      icon={arrowRight}
       className="flex gap-3 bg-white px-5 
       py-3 rounded-full text-lg items-center 
       justify-center
        text-coral-red border-coral-red border"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
