import Button from "../components/Button"

 

const Subscribe = () => {
  return (
    <section className="max-container padding-x padding-l padding-y flex justify-between  items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold w-full">Sign Up For
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe at nike.com" className="input  w-full"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button title="Sign Up" className="w-full text-xl font-semibold bg-coral-red text-white px-5 py-5 rounded-full"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
