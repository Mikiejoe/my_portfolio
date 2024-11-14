import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/Homepage/Hero'
import About from '../components/Homepage/About'
import Projects from '../components/Homepage/Projects'
import Footer from '../components/common/Footer'
import Contact from '../components/Homepage/Contact'

function HomePage() {
  document.title = "Joseph Omondi - Portfolio";
  return (
    <div className='relative'>
        <Navbar/>
        <Hero/>
        <div className='md:px-24 p-4'>
            <About/>
            <Projects/>
            <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage