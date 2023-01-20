import React from 'react'
import AppBar from '../components/Global Components/AppBar'
import NavBar from '../components/Global Components/NavBar'
import Hero from '../components/Hero'
import HeroImage from '../assets/hero-4.webp'

const Homepage = () => {
  return (
    <div className="">
      <div className='py-2 px-4 bg-cover bg-no-repeat bg-center object-cover' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${HeroImage})` }}>
        <AppBar />
        <NavBar />
        <Hero />
      </div>

      <div className="">
        
      </div>
    </div>
  )
}

export default Homepage