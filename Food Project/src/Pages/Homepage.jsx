import React from 'react'
import Customers from '../Components/customers'
import Downloadapp from '../Components/download-app'
import Footer from '../Components/Footer'
import Herobanner from '../Components/hero-banner'
import Heroheader from '../Components/Hero-header'
import Navbar from '../Components/Navbar'
import Popularrecipe from '../Components/Popular-recipe'

const Homepage = () => {
  return (
    <div className='home__bg'>
        <Navbar />
        <Heroheader />
        <Herobanner />
        <Popularrecipe />
        <Customers />
        <Downloadapp />
        <Footer />
    </div>
  )
}

export default Homepage