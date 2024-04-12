import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Homepage/Hero'
function HomePage() {
  return (
    <>
    <div className="px-16">
    <NavBar/>
    <Hero/>
    <Footer/>
    </div>
    </>
  )
}

export default HomePage