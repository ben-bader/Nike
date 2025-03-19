import React from 'react'
import NavBar from './components/nav';
import Hero from './sections/Hero'
import CostumerReview from './sections/CostumerReview'
import Footer from './sections/Footer'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality';
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import Subscribe from './sections/Subscribe';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <PopularProducts/>
      <SuperQuality/>
      <Services/>
      <SpecialOffer/>
      <CostumerReview/>
      <Subscribe/>
      <Footer/>

    </div>
  )
}

export default App
