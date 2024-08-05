import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/Homepage/Hero'
import About from '../components/Homepage/About'
import Projects from '../components/Homepage/Projects'
import Footer from '../components/common/Footer'

function HomePage() {
  
  return (
    <div className='relative'>
        <Navbar/>
        <Hero/>
        <div className=''>
            <About/>
            <Projects/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage